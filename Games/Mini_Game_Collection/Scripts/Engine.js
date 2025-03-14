const engineSettings = {
	"Image_Smoothing":false,
	"Allow_Shadows":true,
	"Debug":{
		"Show_FPS_Counter":false,
		"Show_Delta_Time":false,
		"Show_Debug_Cursor":false
	},
	"Settings_Menu":{
		"Image_Smoothing":true,
		"Shadows":true,
		"Debug":true,
		"Show_FPS":true,
		"Show_DELTA":true,
		"Show_Debug_Cursor":true
	},
	"Addons":[]
};

let isPaused = false;

//Image folder path
const audioPath = "./Audio/";
const imagePath = "./Images/";
const videoPath = "./Videos/";
const scriptPath = "./Scripts/";
const addonPath = scriptPath+"Addons/";

//Loads addons
const loadAddons = () => {
	engineSettings.Addons.forEach((t) => {
		let check = document.getElementById(t);
		if (check == undefined) {
			let script = document.createElement('script');
			script.id = t;
			script.src = addonPath+t+".js";
			document.body.appendChild(script);
		}
	});
}
loadAddons();

//Engine resources
let Close_UI = new imageData("close_ui", imagePath+"Close_Icon.png", new Vector2(64, 64));
let Close_UI_Hover = new imageData("close_ui_hover", imagePath+"Close_Icon_Hover.png", new Vector2(64, 64));
let Settings_Icon = new imageData("settings_icon", imagePath+"Settings.png", new Vector2(50, 50));

//Variables used for mods
const modVars = new globalVars();

function globalVars() {
	this.modVarIndex = {};
	this.deleteMod = (id="") => {
		delete this.modVarIndex[id];
	}
	this.addMod = (id="") => {
		if (this.modVarIndex[id] == undefined) {
			this.modVarIndex[id] = {};
		} else {
			this.deleteMod(id);
			this.modVarIndex[id] = {};
		}
	}
	this.addVar = (id="", name="", value="") => {
		if (this.modVarIndex[id] != undefined) {
			this.modVarIndex[id][name] = value;
		} else {
			this.addMod(id);
			this.modVarIndex[id][name] = value;
		}
	}
	this.deleteVar = (id="", name="") => {
		if (this.modVarIndex[id] != undefined) {
			delete this.modVarIndex[id][name];
		}
	}
}

const getModVar = (id="", name="") => {
	return modVars.modVarIndex[id][name];
}

const setModVar = (id="", name="", value="") => {
	modVars.modVarIndex[id][name] = value;
}

//Checks number to see if it's even or odd
function isEven(num=0) {
	if ((num % 2) == 0) {
		return true;
	} else {
		return false;
	}
}

//Clamp to a range
function clamp(value=0, min=0, max=10) {
	if (value < min) {
		value = min;
	}
	if (value > max) {
		value = max;
	}
	return value;
}

//Radians to Degrees
function radToDeg(rad=0) {
	return ((rad*(180/Math.PI))+360)%360;
}

//Degrees to Radians
function degToRad(deg=0) {
	return ((deg/(180/Math.PI))+PI2)%PI2;
}

//Average
function average(nums=[0,0]) {
	return nums.reduce((a, b) => a+b,0)/nums.length;
}

//Gets closest point in an array of points
function getClosestPoint(pXy, aXys) {
	let minDist;
	let fTo;
	let x;
	let y;
	let i;
	let dist;
		if (aXys.length > 1) {
			for (let n = 1 ; n < aXys.length ; n++) {
				if (aXys[n] != undefined) {
					if (aXys[n].x != aXys[n - 1].x) {
					let a = (aXys[n].y - aXys[n - 1].y) / (aXys[n].x - aXys[n - 1].x);
					let b = aXys[n].y - a * aXys[n].x;
					dist = Math.abs(a * pXy.x + b - pXy.y) / Math.sqrt(a * a + 1);
					}
					else
					dist = Math.abs(pXy.x - aXys[n].x)
					let rl2 = Math.pow(aXys[n].y - aXys[n - 1].y, 2) + Math.pow(aXys[n].x - aXys[n - 1].x, 2);
					let ln2 = Math.pow(aXys[n].y - pXy.y, 2) + Math.pow(aXys[n].x - pXy.x, 2);
					let lnm12 = Math.pow(aXys[n - 1].y - pXy.y, 2) + Math.pow(aXys[n - 1].x - pXy.x, 2);
					let dist2 = Math.pow(dist, 2);
					let calcrl2 = ln2 - dist2 + lnm12 - dist2;
					if (calcrl2 > rl2)
						dist = Math.sqrt(Math.min(ln2, lnm12));
					if ((minDist == null) || (minDist > dist)) {
						if (calcrl2 > rl2) {
							if (lnm12 < ln2) {
							fTo = 0;
							}
							else {
							fTo = 1;
							}
						}
						else {
						fTo = ((Math.sqrt(lnm12 - dist2)) / Math.sqrt(rl2));
						}
					minDist = dist;
					i = n;
					}
				}
			}
		let dx = aXys[i - 1].x - aXys[i].x;
		let dy = aXys[i - 1].y - aXys[i].y;
		x = aXys[i - 1].x - (dx * fTo);
		y = aXys[i - 1].y - (dy * fTo);
		}
	return new Vector2(x, y);
}

function getPolarDir(startPoint, endPoint) {
	let rot = Math.round(startPoint.getRotation(endPoint, false));
	if (rot == 0 || rot == 360) {
		return "North";
	}
	if ((rot > 0 && rot <= 45) || (rot > 45 && rot < 90)) {
		return "NorthEast";
	}
	if (rot == 90) {
		return "East";
	}
	if ((rot > 90 && rot <= 135) || (rot > 135 && rot < 180)) {
		return "SouthEast";
	}
	if (rot == 180) {
		return "South";
	}
	if ((rot > 180 && rot <= 225) || (rot > 225 && rot < 270)) {
		return "SouthWest";
	}
	if (rot == 270) {
		return "West";
	}
	if ((rot > 270 && rot <= 315) || (rot > 315 && rot < 360)) {
		return "NorthWest";
	}
}

//Helper function for random ints same as range just with less steps
//Range functions can take Vector2's in the min argument
function rangeInt(min=0, max=1) {
	if (typeof min == "number") {
		return Range(min, max, 0, false);
	} else {
		return Range(min.x, min.y, 0, false);
	}
}

//Helper function for random floats same as range just with less steps
//Range functions can take Vector2's in the min argument
function rangeFloat(min=0, max=1, dec_place=1) {
	if (typeof min == "number") {
		return Range(min, max, dec_place);
	} else {
		return Range(min.x, min.y, min.r);
	}
}

//Returns a random number between min and max
//Range functions can take Vector2's in the min argument
function Range(min=0, max=1, dec_place=1, is_float=true) {
	let result = 0;
	if (typeof min == "number") {
		let factor = Math.pow(10, dec_place);
		if (is_float) {
			result = Math.random()*(max-min)+min;
		} else {
			result = Math.round(Math.random()*(max-min)+min);
		}
		return Math.round(result*factor)/factor;
	} else {
		let factor = Math.pow(10, min.r);
		if (min.o) {
			result = Math.random()*(min.y-min.x)+min.x;
		} else {
			result = Math.round(Math.random()*(min.y-min.x)+min.x);
		}
		return Math.round(result*factor)/factor;
	}
}

//Checks if an array has everything from another
function arrayCompare(arr=[], target=[], all=true) {
	if (all) {
		return target.every((item) => {
			return arr.includes(item);
		});
	} else {
		return target.some((item) => {
			return arr.includes(item);
		});
	}
}

//Returns matches in 2 arrays
function arrayMatch(arr1=[], arr2=[]) {
  var arr = [];
  for(var i=0 ; i<arr1.length ; ++i) {
    for(var j=0 ; j<arr2.length ; ++j) {
      if(arr1[i] == arr2[j]) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}

//Math variables
const PI2 = Math.PI*2;

//Vector class
const ZERO = new Vector2();
const ONE = new Vector2(1, 1);
const UP = new Vector2(0, -1);
const UP_LEFT = new Vector2(-1, -1);
const UP_RIGHT = new Vector2(1, -1);
const DOWN = new Vector2(0, 1);
const DOWN_LEFT = new Vector2(-1, 1);
const DOWN_RIGHT = new Vector2(1, 1);
const LEFT = new Vector2(-1, 0);
const RIGHT = new Vector2(1, 0);
function Vector2(x=0, y=0, r=0, o=0, s=0) {
	this.x = x; //x
	this.y = y; //y
	this.r = r; //angle
	this.o = o; //offset angle
	this.s = s; //speed
	//Set vector
	this.set = function(vector2) {
		this.x = vector2.x;
		this.y = vector2.y;
		this.r = vector2.r;
		this.o = vector2.o;
		this.s = vector2.s;
	}
	//Vector2 to array
	this.array = function() {
		return [this.x, this.y];
	}
	//Vector2 to angle
	this.angle = function(rad=true) {
		let calR = parseFloat(Math.atan2(this.y, this.x).toFixed(2));
		if (rad) {
			return calR;
		} else {
			let calD = Math.round(radToDeg(calR+1.57079633));
			if (calR == 0) {
				return 0;
			} else {
				return calD;
			}
		}
	}
	//Vector2 duplicate
	this.duplicate = function() {
		return new Vector2(this.x, this.y, this.r, this.o, this.s);
	}
	this.dup = this.duplicate;
	//Compare vectors
	this.same = function(vector2=ZERO) {
		let result = false;
		if (this.x == vector2.x && this.y == vector2.y) {
			result = true;
		}
		return result;
	}
	//Get rotation between 2 vectors
	this.getRotation = function(vector2, rad=true) {
		this.vector2 = vector2;
		if (rad) {
			return ((Math.atan2(-this.y+this.vector2.y, -this.x+this.vector2.x)+degToRad(90))+PI2)%(PI2);
		} else {
			return radToDeg((Math.atan2(-this.y+this.vector2.y, -this.x+this.vector2.x)+degToRad(90)));
		}
	}
	//Simple math
	this.add = function(num) {
		return new Vector2(this.x+num, this.y+num);
	}
	this.addV = function(vector2) {
		return new Vector2(this.x+vector2.x, this.y+vector2.y);
	}
	this.sub = function(num) {
		return new Vector2(this.x-num, this.y-num);
	}
	this.subV = function(vector2) {
		return new Vector2(this.x-vector2.x, this.y-vector2.y);
	}
	this.neg = function(place="x") { //"x" or "y"
		place = place.toLowerCase();
		if (place == "x") {
			return new Vector2(-this.x, this.y);
		}
		if (place == "y") {
			return new Vector2(this.x, -this.y);
		}
	}
	this.multi = function(num) {
		return new Vector2(this.x*num, this.y*num);
	}
	this.multiV = function(vector2) {
		return new Vector2(this.x*vector2.x, this.y*vector2.y);
	}
	this.div = function(num) {
		if (num == 0) {
			num == 1;
		}
		return new Vector2(this.x/num, this.y/num);
	}
	this.divV = function(vector2) {
		if (vector2.x == 0) {
			vector2.x == 1;
		}
		if (vector2.y == 0) {
			vector2.y == 1;
		}
		return new Vector2(this.x/vector2.x, this.y/vector2.y);
	}
	this.min = function(vector2) {
		return new Vector2(Math.min(this.x, vector2.x), Math.min(this.y, vector2.y));
	}
	this.max = function(vector2) {
		return new Vector2(Math.max(this.x, vector2.x), Math.max(this.y, vector2.y));
	}
	//Returns distance between 2 vectors
	this.distance = function(vector2=ZERO) {
		let dx = vector2.x-this.x;
		let dy = vector2.y-this.y;
		return Math.sqrt(dx*dx+dy*dy);
	}
	//Rotate point by this vector
	this.rotateVector2 = function(vector2, rotation) {
		return new Vector2(Math.cos(rotation)*(vector2.x-this.x)-Math.sin(rotation)*(vector2.y-this.y)+this.x, Math.sin(rotation)*(vector2.x-this.x)+Math.cos(rotation)*(vector2.y-this.y)+this.y);
	}
	//Clamp x and or y values
	//min = number or vector2
	//max = number or vector2
	//opt = both, x, y
	this.clamp = function(min, max, opt="both") {
		switch (opt) {
			case "x":
			case "X":
				this.x = clamp(this.x, min, max);
			break;
			case "y":
			case "Y":
				this.y = clamp(this.y, min, max);
			break;
			case "both":
			case "Both":
				this.x = clamp(this.x, min, max);
				this.y = clamp(this.y, min, max);
			break;
		}
	}
}

//Fills a vector2's x and y values with a single number
//Useful shortcut for making square objects
function FillVec2(xy=0) {
	return new Vector2(xy, xy);
}

//Creates canvas
const screen = new Screen();
const ctx = screen.ctx;
function Screen(id="canvas", size=new Vector2(800,450), mode=0) {
	document.documentElement.style.overflow = "hidden";
	this.resolution = size;
	this.halfResolution = this.resolution.div(2);
	this.setResolution = function(size=new Vector2(800,450)) {
		this.resolution = size;
		this.halfResolution = this.resolution.div(2);
		this.scale();
	}
	this.canvas = document.createElement("CANVAS");
	this.canvas.id = id;
	this.canvas.style.backgroundColor = "black";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.marginLeft = "0px";
    this.canvas.style.marginRight = "0px";
	this.canvas.style.marginTop = "0px";
    this.canvas.style.marginBottom = "0px";
	this.canvas.style.border = "0px";
    this.canvas.style.display = "block";
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0px";
    this.canvas.style.left = "0px";
	this.canvas.style.zIndex = "0";
	this.renderMode = {
		0:"pixelated",
		1:"crisp-edges"
	};
	this.canvas.style.imageRendering = this.renderMode[mode];
    this.setRenderMode = function(mode=0) {
        this.canvas.style.imageRendering = this.renderMode[mode];
    }
	this.setColor = function(c="black") {
		this.canvas.style.backgroundColor = c;
	}
	this.setImage = function(i) {
		this.canvas.style.backgroundImage = i;
	}
	document.body.appendChild(this.canvas);
	this.ctx = this.canvas.getContext("2d");
	//Scale canvas
    let scaleFactor = new Vector2();
    this.getScale = function() {
        return scaleFactor;
    }
	let deviceResolution = new Vector2(window.innerWidth,window.innerHeight);
    this.getDeviceRes = function() {
        return deviceResolution;
    }
	this.getHalfDeviceRes = function() {
		return deviceResolution.div(2);
	}
	const scaler = () => {this.scale()};
    window.addEventListener("resize", scaler);
    window.addEventListener("keydown", function(e){
		switch(e.Key){
			case "ArrowUp": case "ArrowDown": case "ArrowLeft":  case "ArrowRight": case "Shift": case "Tab":
				e.preventDefault(); 
			break;
			default: 
			break;
		}
	});
    this.scale = function() {
        deviceResolution = new Vector2(window.innerWidth,window.innerHeight);
        scaleFactor = new Vector2(deviceResolution.x/this.resolution.x,deviceResolution.y/this.resolution.y);
        this.canvas.width = deviceResolution.x;
        this.canvas.height = deviceResolution.y;
        this.ctx.setTransform(scaleFactor.x,0,0,scaleFactor.y,0,0);
    }
    scaler();
}

//FPS Counter
const FPS = {
	fpsCounter:document.createElement('p'),
	fpsColor:"grey",
	fpsSize:25,
	fpsOffset:"0px",
	counterLoaded:false,
	fps:0,
	lastLoop:Date.now(),
	updateFPS:function() {
		if (!FPS.counterLoaded) {
			FPS.fpsCounter.id = "fps";
			FPS.fpsCounter.style.position = "fixed";
			FPS.fpsCounter.style.marginLeft = "0px";
			FPS.fpsCounter.style.marginRight = "0px";
			FPS.fpsCounter.style.marginTop = "0px";
			FPS.fpsCounter.style.marginBottom = "0px";
			FPS.fpsCounter.style.left = "5px";
			FPS.fpsCounter.style.top = "5px";
			FPS.fpsCounter.style.zIndex = "2";
			document.body.appendChild(FPS.fpsCounter);
			FPS.counterLoaded = true;
		}
		if (engineSettings.Debug.Show_FPS_Counter) {
			FPS.fpsOffset = (FPS.fpsSize+10);
			FPS.fpsCounter.style.display = "block";
			FPS.fpsCounter.style.fontSize = FPS.fpsSize+"px";
			FPS.fpsCounter.style.color = FPS.fpsColor;
			FPS.fpsCounter.innerHTML = "FPS: "+FPS.getFPS();
		} else {
			FPS.fpsOffset = "0";
			FPS.fpsCounter.style.display = "none";
		}
		let thisLoop = Date.now();
		FPS.fps = 1000/(thisLoop-FPS.lastLoop);
		FPS.lastLoop = thisLoop;
	},
	getFPS:function() {
		return (60/FPS.fps).toFixed(1)*60;
	}
};

//Delta Counter
const DELTA = {
	deltaCounter:document.createElement('p'),
	deltaColor:"grey",
	deltaSize:25,
	deltaOffset:"0",
	counterLoaded:false,
	delta:0,
	lastUpdate:Date.now(),
	updateDelta:function() {
		if (!DELTA.counterLoaded) {
			DELTA.deltaCounter.id = "delta";
			DELTA.deltaCounter.style.position = "fixed";
			DELTA.deltaCounter.style.marginLeft = "0px";
			DELTA.deltaCounter.style.marginRight = "0px";
			DELTA.deltaCounter.style.marginTop = "0px";
			DELTA.deltaCounter.style.marginBottom = "0px";
			DELTA.deltaCounter.style.left = "5px";
			DELTA.deltaCounter.style.zIndex = "2";
			document.body.appendChild(DELTA.deltaCounter);
			DELTA.counterLoaded = true;
		}
		if (engineSettings.Debug.Show_Delta_Time) {
			DELTA.deltaOffset = (FPS.fpsOffset+DELTA.deltaSize+10);
			DELTA.deltaCounter.style.display = "block";
			DELTA.deltaCounter.style.top = (FPS.fpsOffset)+"px";
			DELTA.deltaCounter.style.fontSize = DELTA.deltaSize+"px";
			DELTA.deltaCounter.style.color = DELTA.deltaColor;
			DELTA.deltaCounter.innerHTML = "Delta: "+DELTA.delta;
		} else {
			DELTA.deltaOffset = "0";
			DELTA.deltaCounter.style.display = "none";
		}
		let now = Date.now();
		DELTA.delta = ((1000/60)/(now-DELTA.lastUpdate)).toFixed(1);
		DELTA.lastUpdate = now;
	}
};

//Update loop
let updateArray = [];
function addUpdate(func, id, tag) {
	updateArray.push({"function":func,"id":id,"tag":tag});
}

function deleteUpdate(mode=1, op1, op2) {
	if (mode < 0) {
		mode = 0;
	}
	if (mode > 2) {
		mode = 2;
	}
	switch (mode) {
		case 0:
			updateArray = updateArray.filter((u) => !(u.id == op1 && u.tag == op2));
		break;
		case 1:
			updateArray = updateArray.filter((u) => !(u.id == op1));
		break;
		case 2:
			updateArray = updateArray.filter((u) => !(u.tag == op1));
		break;
	}
}

function getUpdate(id=null, tag=null) {
	if (id != null && tag == null) {
		return updateArray.filter((u) => {return u.id == id})[0];
	}
	if (id == null && tag != null) {
		return updateArray.filter((u) => {return u.tag == tag})[0];
	}
	if (id != null && tag != null) {
		return updateArray.filter((u) => {return (u.id == id && u.tag == tag)})[0];
	}
}

let loaded = false;
let objectArray = [];
const layer = {
	1:[],
	2:[],
	3:[],
	4:[],
	5:[],
	6:[],
	7:[],
	8:[],
	"length":8
};

let delta = 0;
function Updater() {
	FPS.updateFPS();
	DELTA.updateDelta();
	delta = DELTA.delta;
	if (!loaded) {
		objectArray = layer[1].concat(layer[2], layer[3], layer[4], layer[5], layer[6], layer[7], layer[8]);
		loaded = true;
	}
	Renderer();
	updateArray.forEach((u) => {
		if (typeof u.function == "function") {
			u.function();
		} else {
			eval(u.function);
		}
	});
}

const updateInterval = setInterval(Updater, 1000/60);

//Rendering Classes
//Shadow data
const NO_SHADOW = new Shadow();
const DEFAULT_SHADOW = new Shadow(ZERO, "black", 5);
function Shadow(offset=ZERO, color="", blur=0) {
	this.offset = offset;
	this.color = color;
	this.blur = blur;
	this.duplicate = function() {
		return new Shadow(this.offset, this.color, this.blur);
	}
	this.dup = this.duplicate;
}

//NameTag
/**
same:
	mode 0-
		checks both
	mode 1-
		checks name
	mode 2-
		checks tag
	includes-
		checks if the inputed data is included in the base nameTag
**/
const BLANK_NAMETAG = new nameTag();
function nameTag(name="",tag="") {
	this.name = name;
	this.tag = tag;
	this.same = function(nameTag=new nameTag(), mode=0, include=false) {
		if (mode < 0) {
			mode = 0;
		}
		if (mode > 2) {
			mode = 2
		}
		switch (mode) {
			case 0:
				if (!include) {
					return (this.name == nameTag.name && this.tag == nameTag.tag);
				} else {
					return ((this.name == nameTag.name && this.tag == nameTag.tag) || (this.name.includes(nameTag.name) && this.tag.includes(nameTag.tag)));
				}
			break;
			case 1:
				if (!include) {
					return this.name == nameTag.name;
				} else {
					return ((this.name == nameTag.name) || this.name.includes(nameTag.name));
				}
			break;
			case 2:
				if (!include) {
					return this.tag == nameTag.tag;
				} else {
					return ((this.tag == nameTag.tag) || this.tag.includes(nameTag.tag));
				}
			break;
		}
	}
	this.duplicate = function() {
		return new nameTag(this.name, this.tag);
	}
	this.dup = this.duplicate;
}
const name = (name="") => {
	return new nameTag(name);
}
const tag = (tag="") => {
	return new nameTag("", tag);
}

//Line data
const DEFAULT_LINE = new lineData();
function lineData(stroked=false, cap=0, width=1, dashOffset=0, pattern=[]) {
	let caps = {
		0:"butt",
		1:"round",
		2:"square"
	};
	if (cap < 0) {
		cap = 0;
	}
	if (cap > 2) {
		cap = 2;
	}
	this.stroked = stroked;
	this.cap = caps[cap];
	this.width = width;
	this.dashOffset = dashOffset;
	this.pattern = pattern;
	this.duplicate = function() {
		return new lineData(this.stroked, this.cap, this.width, this.dashOffset, this.pattern);
	}
	this.dup = this.duplicate;
}

//Color data
const NO_COLOR = new colorData("");
const DEFAULT_COLOR = new colorData();
function colorData(color="white", alpha=1, comp=0) {
	this.color = color;
	this.alpha = alpha;
	this.compMode = comp;
	this.imageData = imageData;
	this.mode = {
		0:"source-over",
		1:"source-in",
		2:"source-out",
		3:"source-atop",
		4:"destination-over",
		5:"destination-in",
		6:"destination-out",
		7:"destination-atop",
		8:"lighter",
		9:"copy",
		10:"xor",
		11:"multiply",
		12:"screen",
		13:"overlay",
		14:"darken",
		15:"lighten",
		16:"color-dodge",
		17:"color-burn",
		18:"hard-light",
		19:"soft-light",
		20:"difference",
		21:"exclusion",
		22:"hue",
		23:"saturation",
		24:"color",
		25:"luminosity"
	};
	this.duplicate = function() {
		return new colorData(this.color, this.alpha, this.compMode);
	}
	this.dup = this.duplicate;
	this.same = function(data, mode=0) {
		if (mode < 0) {
			mode = 0;
		}
		if (mode > 6) {
			mode = 6;
		}
		switch (mode) {
			//All
			case 0:
				return this.color == data.color && this.alpha == data.alpha && this.compMode == data.compMode;
			break;
			//Color
			case 1:
				return this.color == data.color;
			break;
			//Alpha
			case 2:
				return this.alpha == data.alpha;
			break;
			//Comp
			case 3:
				return this.compMode == data.compMode;
			break;
			//Color & Alpha
			case 4:
				return this.color == data.color && this.alpha == data.alpha;
			break;
			//Alpha & Comp
			case 5:
				return this.alpha == data.alpha && this.compMode == data.compMode;
			break;
			//Color & Comp
			case 6:
				return this.color == data.color && this.compMode == data.compMode;
			break;
		}
	}
	if (typeof comp == "string") {
		this.comp = comp;
	} else {
		if (comp < 0 || comp > 25) {
			this.comp = "source-over";
		} else {
			this.comp = this.mode[comp];
		}
	}
}

//Gradient data
function gradientData(type=0, start=new Vector2(), end=new Vector2(), colors=[]) {
	this.type = type;
	this.start = start;
	this.end = end;
	this.colors = colors;
	let data = null;
	if (this.type > 1) {
		this.type = 1;
	}
	if (this.type < 0) {
		this.type = 0;
	}
	switch (this.type) {
		case 0:
			data = ctx.createLinerGradient(this.start.x, this.start.y, this.end.x, this.end.y);
		break;
		case 1:
			data = ctx.createRadialGradient(this.start.x, this.start.y, this.start.r, this.end.x, this.end.y, this.end.r);
		break;
	}
	this.colors.forEach((c, i) => {
		data.addColorStop(((i+1)/this.colors.length),c);
	});
	this.getColor = function(alpha=1, comp=0) {
		return new colorData(data, alpha, comp);
	}
	this.duplicate = function() {
		return new gradientData(this.type, this.start, this.end, this.colors);
	}
	this.dup = this.duplicate;
}

//Image data
function imageData(id="", src="", size=new Vector2()) {
	let data = document.createElement("img");
	data.id = id;
	data.src = src;
	data.width = size.x;
	data.height = size.y;
	data.style.display = "none";
	document.body.appendChild(data);
	this.getColor = function(alpha=1, comp=0) {
		return new colorData(data.id, alpha, comp);
	}
	this.getSrc = function() {
		return data.src;
	}
	this.setSrc = function(src="") {
		data.src = src;
	}
	this.getSize = function() {
		return new Vector2(data.width, data.height);
	}
	this.setSize = function(size=new Vector2()) {
		data.width = size.x;
		data.height = size.y;
	}
}

//Collision data
/**
	thisTag- the objects tag for others to search for
	collideTagList- the list of tags to collide with
	collisionType- the type of object it will rep in the collision function 
	   -rec
	   -cir
	   -poly
	   
	**Design for collision system**
	(runs for objects that have a collideTagList instead of null)
	run a web worker to gather all objects with compatible tags in a 5-10 distance to the object
	sort by closest distance
	check collision types to determind the best collision function
	check for collision and resolve
	**End**
**/
function collisionData(thisTag=null, collideTagList=null, collisionType="rec") {
	this.thisTag = thisTag;
	this.collideTagList = collideTagList;
	this.collisionType = collisionType;
}

//Base for objects
const EMPTY_OBJECT = new baseObject();
function baseObject(autoAdd=true, nameTag=BLANK_NAMETAG, size=ZERO, position=ZERO, color=DEFAULT_COLOR, shadow=NO_SHADOW, rotOrigin=null) {
	this.autoAdd = autoAdd;
	this.nameTag = nameTag;
	this.size = size;
	this.position = position;
	this.color = color;
	this.shadow = shadow;
	this.rotOrigin = rotOrigin;
	this.startPosition = position.duplicate();
	this.marked = false;
	this.overridePositionUpdateFunction = false; //Always runs the update position function even when the speed is 0 if true;
	if (this.rotOrigin == null) {
		this.rotOrigin = this.position;
	}
	this.updatePosition = function() {
		if (!isPaused) {
			let velocity = new Vector2(this.position.s*Math.sin(this.position.r+this.position.o)*delta, this.position.s*Math.cos(this.position.r+this.position.o)*delta);
			this.position.x += velocity.x;
			this.position.y -= velocity.y;
		}
	}
	this.destroy = function() {
		deleteByNameTag(this.nameTag);
	}
	this.duplicate = function() {
		return new baseObject(this.autoAdd, this.nameTag.duplicate(), this.size.duplicate(), this.position.duplicate(), this.color.duplicate(), this.shadow.duplicate(), this.rotOrigin.duplicate());
	}
	this.dup = this.duplicate;
}

//Sets up object
function setupObject(base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	ctx.imageSmoothingEnabled = engineSettings.Image_Smoothing;
	ctx.globalAlpha = base.color.alpha;
	ctx.globalCompositeOperation = base.color.comp;
	if (engineSettings.Allow_Shadows) {
		ctx.shadowColor = base.shadow.color;
		ctx.shadowBlur = base.shadow.blur;
		ctx.shadowOffsetX = base.shadow.offset.x;
		ctx.shadowOffsetY = base.shadow.offset.y;
	} else {
		ctx.shadowColor = NO_SHADOW.color;
		ctx.shadowBlur = NO_SHADOW.blur;
		ctx.shadowOffsetX = NO_SHADOW.offset.x;
		ctx.shadowOffsetY = NO_SHADOW.offset.y;
	}
	base.position.r = (base.position.r+PI2)%(PI2);
	ctx.setLineDash(line.pattern);
	ctx.lineDashOffset = line.dashOffset;
	ctx.lineCap = line.cap;
	ctx.lineWidth = line.width;
	ctx.fillStyle = base.color.color;
	ctx.strokeStyle = base.color.color;
}

//Rectangle class
const BLANK_OBJECT = new Rectangle(0, new baseObject(false));
function Rectangle(layerNumber=1, base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	this.layerNumber = layerNumber;
	this.base = base;
	this.line = line;
	this.type = "rectangle";
	let points = [];
	this.getPoints = function() {
		return points;
	}
	this.duplicate = function() {
		return new Rectangle(this.layerNumber, this.base.duplicate(), this.line.duplicate());
	}
	this.dup = this.duplicate;
	this.draw = function() {
		setupObject(this.base, this.line);
		points = [
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r)];
		ctx.beginPath();
		ctx.moveTo(this.base.position.x, this.base.position.y);
		for (let i=0;i<points.length;i++) {
			ctx.lineTo(points[i].x, points[i].y);
		}
		if (!this.line.stroked) {
			ctx.fill();
		} else {
			ctx.stroke();
		}
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

//Circle class
function Circle(layerNumber=1, base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	this.layerNumber = layerNumber;
	this.base = base;
	this.line = line;
	this.type = "circle";
	this.duplicate = function() {
		return new Circle(this.layerNumber, this.base.duplicate(), this.line.duplicate());
	}
	this.dup = this.duplicate;
	this.draw = function() {
		setupObject(this.base, this.line);
		ctx.beginPath();
		ctx.ellipse(this.base.position.x, this.base.position.y, this.base.size.x, this.base.size.y, this.base.position.r, 0, 2*Math.PI);
		if (!this.line.stroked) {
			ctx.fill();
		} else {
			ctx.stroke();
		}
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

//Circle Lighting
function Light(layerNumber=1, base=EMPTY_OBJECT, lightIntensity=new Vector2(), line=DEFAULT_LINE) {
	this.layerNumber = layerNumber;
	this.base = base;
	this.lightIntensity = lightIntensity;
	this.line = line;
	this.type = "light";
	this.base.color.push("rgba(0,0,0,0)")
	this.gradientData = new gradientData(1, new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.x), new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.y), this.base.color);
	this.base.color = this.gradientData.getColor(this.lightIntensity.r, this.lightIntensity.o);
	this.duplicate = function() {
		return new Light(this.layerNumber, this.base.duplicate(), this.lightIntensity.duplicate(), this.line.duplicate());
	}
	this.dup = this.duplicate;
	this.draw = function() {
		setupObject(this.base, this.line);
		ctx.beginPath();
		ctx.ellipse(this.base.position.x, this.base.position.y, this.base.size.x, this.base.size.y, this.base.position.r, 0, 2*Math.PI);
		if (!this.line.stroked) {
			ctx.fill();
		} else {
			ctx.stroke();
		}
	}
	this.setColor = function(color=[]) {
		if (Array.isArray(this.base.color) && !arrayCompare(color, this.base.color, all=true)) {
			this.base.color = color;
			this.base.color.push("rgba(0,0,0,0)")
			this.gradientData = new gradientData(1, new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.x), new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.y), this.base.color);
			this.base.color = this.gradientData.getColor(this.lightIntensity.r, this.lightIntensity.o);
		}
	}
	this.setIntensity = function(lightIntensity=new Vector2()) {
		this.lightIntensity = lightIntensity;
		this.gradientData = new gradientData(1, new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.x), new Vector2(this.base.position.x, this.base.position.y, this.lightIntensity.y), this.base.color);
		this.base.color = this.gradientData.getColor(this.lightIntensity.r, this.lightIntensity.o);
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

//Circle class
function Sprite(layerNumber=1, base=EMPTY_OBJECT, animator=null) {
	this.layerNumber = layerNumber;
	this.base = base;
	this.animator = animator;
	this.type = "sprite";
	let sprite = document.getElementById(this.base.color.color);
	this.dPosition = new Vector2();
	this.dSize = new Vector2(sprite.width, sprite.height);
	this.scale = new Vector2(1, 1);
	let points = [];
	this.getPoints = function() {
		return points;
	}
	this.duplicate = function() {
		if (this.animator != null) {
			return new Sprite(this.layerNumber, this.base.duplicate(), this.animator.duplicate());
		} else {
			return new Sprite(this.layerNumber, this.base.duplicate(), null);
		}
	}
	this.dup = this.duplicate;
	this.draw = function() {
		setupObject(this.base, DEFAULT_LINE);
		let newSprite = document.getElementById(this.base.color.color);
		if (sprite.id != newSprite.id) {
			sprite = newSprite;
		}
		if (this.animator != null) {
			if (this.animator.object == null) {
				this.animator.setObject(this);
			} 
			this.animator.update();
		}
		points = [
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r)];
		let pos = this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x, this.base.position.y), this.base.position.r)
		ctx.save();
		ctx.translate(pos.x, pos.y);
		ctx.rotate(this.base.position.r);
		ctx.scale(this.scale.x, this.scale.y);
		ctx.drawImage(sprite, this.dPosition.x, this.dPosition.y, this.dSize.x, this.dSize.y, this.base.size.x/-2, this.base.size.y/-2, this.base.size.x, this.base.size.y);
		ctx.restore();
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

//Sprite controller
function spriteMind(clipPos=new Vector2(), clipSize=null) {
	this.clipPos = clipPos;
	this.clipSize = clipSize;
	this.object = null;
	this.setObject = function(object=null) {
		this.object = object;
		if (this.clipSize == null) {
			this.clipSize = this.object.dSize;
		}
	}
	this.setClipPos = function(newClipPos=new Vector2()) {
		this.clipPos = newClipPos;
	}
	this.setClipSize = function(newClipSize=new Vector2()) {
		this.clipSize = newClipSize;
	}
	this.update = function() {
		if (this.object != null) {
			this.object.dPosition = this.clipPos;
			this.object.dSize = this.clipSize;
		}
	}
	this.duplicate = function() {
		return new spriteMind(this.clipPos, this.clipSize);
	}
	this.dup = this.duplicate;
}

//Sprite animator
function spriteAnimator(image=null, size=ZERO, speed=1, loop=false, autoPlay=true) {
	this.image = image;
	this.size = size;
	this.speed = speed;
	this.loop = loop;
	this.object = null;
	this.play = autoPlay;
	this.autoPlay = autoPlay;
	let pos = new Vector2(1,1);
	let time = 0;
	this.setObject = function(object=null) {
		this.object = object;
	}
	this.play = () => {
		this.play = true;
	}
	this.pause = () => {
		this.play = false;
	}
	this.update = () => {
		if (this.play && this.image != null && this.object != null) {
			let frameSize = this.image.getSize().divV(this.size);
			let framePos = pos.multiV(frameSize);
			time += this.speed*delta;
			if (time >= 100) {
				pos.x++;
				if (pos.x >= this.size.x) {
					pos.x = 0;
					pos.y++;
				}
				if (pos.y >= this.size.y) {
					pos.x = 0;
					pos.y = 0;
					if (!this.loop) {
						this.pause();
					}
				}
				time = 0;
			}
			this.object.dSize = frameSize;
			this.object.dPosition = framePos;
		}
		if (!this.play) {
			pos = new Vector2(1,1);
			time = 0;
		}
	}
	this.duplicate = function() {
		return new spriteAnimator(this.image, this.size.duplicate(), this.speed, this.loop, this.autoPlay);
	}
	this.dup = this.duplicate;
}

//Frame data for multi image animator
function frameData(frameNumber=1, size=new Vector2(), scale=new Vector2(1, 1)) {
	if (frameNumber < 1) {
		frameNumber = 1;
	}
	this.frameNumber = frameNumber;
	this.size = size;
	this.scale = scale;
}

//Multi Image animator
function multiImgAnimator(frameDataArray=[], imageNameBase="", imageType="png", animLength=0, speed=1, loop=false, autoPlay=true, path=imagePath) {
	this.frameDataArray = frameDataArray;
	this.imageNameBase = imageNameBase;
	this.imageType = imageType;
	this.animLength = animLength;
	this.speed = speed;
	this.loop = loop;
	this.play = autoPlay;
	this.autoPlay = autoPlay;
	this.path = path;
	let index = 1;
	let time = 0;
	this.setObject = function(object=null) {
		this.object = object;
	}
	this.play = () => {
		this.play = true;
	}
	this.pause = () => {
		this.play = false;
	}
	this.update = () => {
		if (this.play && this.object != null) {
			index = clamp(index, 1, this.animLength);
			time += this.speed*delta;
			if (time >= 100) {
				index++;
				if (index > this.animLength) {
					index = 1;
					if (!this.loop) {
						this.pause();
					}
				}
				time = 0;
			}
			if (index <= this.animLength) {
				const img = document.getElementById(this.object.base.color.color);
				img.src = this.path+imageNameBase+frameDataArray[index-1].frameNumber+"."+this.imageType;
				img.width = frameDataArray[index-1].size.x;
				img.height = frameDataArray[index-1].size.y;
				this.object.dSize = frameDataArray[index-1].size;
				this.object.scale = frameDataArray[index-1].scale;
			}
		}
		if (!this.play) {
			index = 1;
			time = 0;
		}
	}
	this.duplicate = function() {
		return new multiImgAnimator(this.frameDataArray, this.imageNameBase, this.animLength, this.speed, this.loop, this.autoPlay, this.path);
	}
	this.dup = this.duplicate;
}

//Text class
//base.size = new Vector2(font: number, autoAlign: true|false, textAlign: left|right|center);
//Add text scaling
function Text(layerNumber=1, text="", base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	this.layerNumber = layerNumber;
	this.text = text;
	this.base = base;
	this.line = line;
	this.type = "text";
	let flip = 1;
	this.draw = function() {
		setupObject(this.base, this.line);
		if (this.base.position.r >= Math.PI*3/2 || this.base.position.r <= Math.PI/2) {
			if (this.base.size.y) {
				ctx.textAlign = "left";
			}
			flip = 1;
		} else {
			if (this.base.size.y) {
				ctx.textAlign = "right";
			}
			flip = -1;
		}
		if (!this.base.size.y) {
			ctx.textAlign = this.base.size.r;
		}
		ctx.textBaseline = "middle";
		ctx.font = this.base.size.x;
		ctx.save();
		ctx.translate(this.base.position.x, this.base.position.y);
		ctx.rotate(this.base.position.r);
		ctx.scale(flip,flip);
		if (!this.line.stroked) {
			ctx.fillText(this.text, 0, 0);
		} else {
			ctx.strokeText(this.text, 0, 0);
		}
		ctx.restore();
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

document.body.allow = "clipboard-read; clipboard-write";

function TextBox(layerNumber=1, font="30px Arial", textColor="white", base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	this.layerNumber = layerNumber;
	this.font = font;
	this.textColor = textColor;
	this.base = base;
	this.line = line;
	this.type = "textBox";
	let points = [];
	this.getPoints = function() {
		return points;
	}
	
	this.value = "";
	let text = "";
	let calWidth = 0;
	let selected = false;
	this.scrollSpeed = 0.25;
	let scrollIndexReal = 0;
	
	//Scroll vars
	this.scroll = true;
	this.scrollMaxWaitTime = 10;
	let scrollState = 0;
	let scrollWaitTime = 0;
	let scrollIndex = 0;
	
	this.isSelected = function() {
		return selected;
	}
	
	this.duplicate = function() {
		return new TextBox(this.layerNumber, this.font, this.textColor, this.base.duplicate(), this.line.duplicate());
	}
	this.dup = this.duplicate;
	
	//Keybuffer
	let thisKeyBuffer = [];
	let thisPaste = false;
	
	//Keyboard controls
	document.addEventListener("keydown",(e) => {
		let check = thisKeyBuffer.every((i) => i.toUpperCase() != e.key.toUpperCase());
		if (selected) {
			if (check) {
				thisKeyBuffer.push(e.key);
			}
			if (!thisKeyBuffer.includes("Control")) {
				if (e.key.length == 1) {
					this.value = this.value+e.key;
					this.reCalWidth();
				}
				if (e.key.toLowerCase() == "space") {
					this.value = this.value+" ";
					this.reCalWidth();
				}
				if (e.key.toLowerCase() == "backspace") {
					this.value = this.value.slice(0, this.value.length-1);
					if (calWidth+2.5 < this.base.size.x-7.5 && scrollIndexReal != 0) {
						scrollIndexReal--;
					}
					this.reCalWidth();
				}
			}
			if (e.key.toLowerCase() == "enter") {
				scrollIndexReal = 0;
				selected = false;
			}
		}
	}, false);	
	
	document.addEventListener("keyup",(e) => {
		thisKeyBuffer.forEach((o, i) => {
			if (o.toUpperCase() == e.key.toUpperCase()) {
				thisKeyBuffer.splice(i, 1);
			}
		});
	}, false);
	
	this.draw = function() {
		setupObject(this.base, this.line);
		points = [
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, this.base.size.y/2+this.base.position.y), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(-this.base.size.x/2+this.base.position.x, -this.base.size.y/2+this.base.position.y), this.base.position.r)];
		ctx.beginPath();
		ctx.moveTo(this.base.position.x, this.base.position.y);
		for (let i=0;i<points.length;i++) {
			ctx.lineTo(points[i].x, points[i].y);
		}
		if (!this.line.stroked) {
			ctx.fill();
		} else {
			ctx.stroke();
		}
		ctx.save();
		ctx.clip();
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.font = this.font;
		ctx.translate(this.base.position.x-this.base.size.x/2+2.5, this.base.position.y);
		ctx.rotate(this.base.position.r);
		ctx.fillStyle = this.textColor;
		if (!selected) {
			ctx.fillText(text, 0, 0);
			thisKeyBuffer = [];
		} else {
			ctx.fillText("|"+text, 0, 0);
		}
		ctx.restore();
		
		text = this.value.slice(scrollIndexReal);
		if (selected && calWidth+2.5 > this.base.size.x-7.5) {
			scrollIndex += this.scrollSpeed*delta;
			scrollIndexReal = Math.floor(scrollIndex);
			this.reCalWidth();
		}
		
		//Scroll code
		if (this.scroll && !selected) {
			this.reCalWidth();
			switch (scrollState) {
				case 0:
					if (calWidth+2.5 > this.base.size.x-7.5) {
						scrollIndex += this.scrollSpeed*delta;
						scrollIndexReal = Math.floor(scrollIndex);
					}
					if (calWidth+2.5 <= this.base.size.x-7.5) {
						scrollIndex = Math.floor(scrollIndex);
						scrollWaitTime += this.scrollSpeed*delta;
						if (scrollWaitTime >= this.scrollMaxWaitTime) {
							scrollWaitTime = 0;
							scrollState = 1;
						}
					}
				break;
				case 1:
					if (scrollIndexReal != 0) {
						scrollIndex -= this.scrollSpeed*delta;
						scrollIndexReal = Math.ceil(scrollIndex);
					}
					if (scrollIndexReal <= 0) {
						scrollIndex = Math.ceil(scrollIndex);
						scrollWaitTime += this.scrollSpeed*delta;
						if (scrollWaitTime >= this.scrollMaxWaitTime) {
							scrollWaitTime = 0;
							scrollState = 0;
						}
					}
				break;
			}
		}
		
		//Mouse controls
		if (!selected && mousePressed[0] && recCollision(Cursor.cursor, this)) {
			scrollIndex = 0;
			scrollWaitTime = 0;
			scrollState = 0;
			selected = true;
			this.reCalWidth();
		}
		if (selected && mousePressed[0] && !recCollision(Cursor.cursor, this)) {
			scrollIndex = 0;
			selected = false;
		}
		
		//Paste
		if (thisKeyBuffer.includes("Control") && thisKeyBuffer.includes("v", 1)) {
			thisPaste = true;
			pasteTxt = true;
		} else {
			thisPaste = false;
		}
		if (selected && thisPaste) {
			if (navigator.clipboard) {
				setTimeout(async () => this.value = this.value+await navigator.clipboard.readText(), 0);
			}
			thisKeyBuffer = [];
		}
		if (selected && thisKeyBuffer.length == 0) {
			this.reCalWidth();
		}
	}
	this.reCalWidth = function() {
		ctx.font = this.font;
		if (!selected) {
			calWidth = ctx.measureText(text).width;
		} else {
			calWidth = ctx.measureText("|"+text).width;
		}
	}
	if (this.base.autoAdd && this.layerNumber >= 1 && this.layerNumber <= 8) {
		layer[this.layerNumber].push(this);
		loaded = false;
	}
}

//Helper function to add objects (Basic)
function addObject(object, layerNum=null) {
	object.base.autoAdd = true;
	if (layerNum == null) { 
		layer[object.layerNumber].push(object);
	} else {
		layer[layerNum].push(object);
	}
	loaded = false;
}

//Helper function to delete objects by nameTag 
function deleteByNameTag(nameTag=BLANK_NAMETAG, mode=0, include=false) {
	for (let i=1;i<=layer.length;i++) {
		layer[i] = layer[i].filter((o) => {
			return !o.base.nameTag.same(nameTag, mode, include);
		});
	}
	loaded = false;
}

//Helper function to delete objects by nameTag 
function deleteByMarked() {
	for (let i=1;i<layer.length;i++) {
		layer[i] = layer[i].filter((o) => !o.base.marked);
	}
	loaded = false;
}

//Helper function to get objects by nameTag
function getByNameTag(nameTag=BLANK_NAMETAG, mode=0, returnIndex=false, include=false, getMode=0) {
	let results = [];
	let result = null;
	if (getMode < 0) {
		getMode = 0;
	}
	if (getMode > 1) {
		getMode = 1;
	}
	switch (getMode) {
		case 0:
			for (let i=1;i<layer.length+1;i++) {
				if (!returnIndex) {
					results[i] = layer[i].filter((o) => {
						return o.base.nameTag.same(nameTag, mode, include);
					});
				} else {
					results[i] = layer[i].map((o,index) => {
						if (o.base.nameTag.same(nameTag, mode, include)) {
							return index;
						}
					});
				}
			}
		break;
		case 1:
			if (!returnIndex) {
				results = objectArray.filter((o) => {
					return o.base.nameTag.same(nameTag, mode, include);
				});
			} else {
				results = objectArray.map((o,index) => {
					if (o.base.nameTag.same(nameTag, mode, include)) {
						return index;
					}
				});
			}
		break;
	}
	results = results.flat().filter((o) => {
		return (o != undefined);
	});
	if (results.length == 0) {
		result = null;
	}
	if (results.length == 1) {
		result = results[0];
	}
	if (results.length > 1) {
		result = results;
	}
	return result;
}

//Helper function to get objects by nameTag (and color)
function getByColorData(colorData=NO_COLOR, colorMode=0, returnIndex=false, getMode=0) {
	let results = [];
	let result = null;
	if (getMode < 0) {
		getMode = 0;
	}
	if (getMode > 1) {
		getMode = 1;
	}
	switch (getMode) {
		case 0:
			for (let i=1;i<layer.length;i++) {
				if (!returnIndex) {
					results[i] = layer[i].filter((o) => {
						return o.base.color.same(colorData, colorMode);
					});
				} else {
					results[i] = layer[i].map((o,index) => {
						if (o.base.color.same(colorData, colorMode)) {
							return index;
						}
					});
				}
			}
		break;
		case 1:
			if (!returnIndex) {
				results = objectArray.filter((o) => {
					return o.base.color.same(colorData, colorMode);
				});
			} else {
				results = objectArray.map((o,index) => {
					if (o.base.color.same(colorData, colorMode)) {
						return index;
					}
				});
			}
		break;
	}
	results = results.flat().filter((o) => {
		return (o != undefined);
	});
	if (results.length == 0) {
		result = null;
	}
	if (results.length == 1) {
		result = results[0];
	}
	if (results.length > 1) {
		result = results;
	}
	return result;
}

//Renderer
function Renderer() {
	ctx.clearRect(0, 0, screen.resolution.x, screen.resolution.y);
	objectArray.forEach((i) => {
		if (typeof i.base.size.x == "string" || (i.base.position.x-(i.base.size.x/2) <= screen.resolution.x && i.base.position.x+(i.base.size.x/2) >= 0 && i.base.position.y-(i.base.size.y/2) <= screen.resolution.y && i.base.position.y+(i.base.size.y/2) >= 0)) {
			i.draw();
		}
		if (i.base.position.s != 0 || i.base.overridePositionUpdateFunction) {
			i.base.updatePosition();
		}
	});
}

//collisions
//rectangle vs. rectangle
function recCollision(object_1, object_2) {
	let obj1pos = object_1.base.position;
	let obj1size = object_1.base.size;
	let obj2pos = object_2.base.position;
	let obj2size = object_2.base.size;
	let r1 = ((obj1pos.x-obj1size.x/2) + obj1size.x);
	let b1 = ((obj1pos.y-obj1size.y/2) + obj1size.y);
	let r2 = ((obj2pos.x-obj2size.x/2) + obj2size.x);
	let b2 = ((obj2pos.y-obj2size.y/2) + obj2size.y);
	if (b1 < obj2pos.y-obj2size.y/2 || obj1pos.y-obj1size.y/2 > b2 || r1 < obj2pos.x-obj2size.x/2 || obj1pos.x-obj1size.x/2 > r2) {
		return false;
	} else {
		return true;
	}
}

//circle vs. circle
function cirCollision(object_1, object_2) {
	let obj1pos = object_1.base.position;
	let obj1size = object_1.base.size;
	let obj1radius = average(obj1size.array())/2;
	let obj2pos = object_2.base.position;
	let obj2size = object_2.base.size;
	let obj2radius = average(obj2size.array())/2;
	let a = obj1radius+obj2radius;
	let x = (obj2pos.x-obj1pos.x);
	let y = (obj2pos.y-obj1pos.y);
	let distance = Math.sqrt(x*x+y*y);
	if (a > distance) { 
		return true;
	} else {
		return false;
	}
}

//circle vs. polygon
function cirPolyCollision(object_1, object_2, controller_1=null, returnBool=true) {
	let controller1 = controller_1;
	let obj1pos = object_1.base.position;
	let obj1size = object_1.base.size;
	let obj1radius = average(obj1size.array())/2;
	let t = getClosestPoint(obj1pos, object_2.getPoints());
	let distance = t.distance(obj1pos);
	let dir = getPolarDir(obj1pos, t);
		if (distance <= obj1radius) {
			if (returnBool) {
				return true;
			} else {
				switch (dir) {
					case "North":
						obj1pos.y = obj1pos.y+(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.y = -1;
						}
					break;
					case "NorthEast":
						obj1pos.x = obj1pos.x-(obj1radius-distance);
						obj1pos.y = obj1pos.y+(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = 1;
							controller1.lockDir.y = -1;
						}
					break;
					case "East":
						obj1pos.x = obj1pos.x-(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = 1;
						}
					break;
					case "SouthEast":
						obj1pos.x = obj1pos.x-(obj1radius-distance);
						obj1pos.y = obj1pos.y-(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = 1;
							controller1.lockDir.y = 1;
						}
					break;
					case "South":
						obj1pos.y = obj1pos.y-(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.y = 1;
						}
					break;
					case "SouthWest":
						obj1pos.x = obj1pos.x+(obj1radius-distance);
						obj1pos.y = obj1pos.y-(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = -1;
							controller1.lockDir.y = 1;
						}
					break;
					case "West":
						obj1pos.x = obj1pos.x+(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = -1;
						}
					break;
					case "NorthWest":
						obj1pos.x = obj1pos.x+(obj1radius-distance);
						obj1pos.y = obj1pos.y+(obj1radius-distance);
						if (controller1 != null) {
							controller1.lockDir.x = -1;
							controller1.lockDir.y = -1;
						}
					break;
				}
			}
		}
		if (returnBool) {
			return false;
		}
}

//Simple player movement controller
function playerController(autoAdd=true, id="", object=null, maxSpeed=5, accel=new Vector2(0.1, 0.2), horizontalEdges=new Vector2(), verticalEdges=new Vector2()) {
	this.id = id;
	this.object = object;
	this.maxSpeed = maxSpeed;
	this.accel = accel; //x- acceleration, y- deacceleration
	this.horizontalEdges = horizontalEdges; //Position to stop the player | x- left, y- right
	this.verticalEdges = verticalEdges; //Position to stop the player | x- top, y- bottom
	this.currentSpeed = new Vector2();
	this.oldMoveDir = new Vector2();
	this.moveDir = new Vector2(); //x- left/right, y- up/down | 1/-1
	this.lockDir = new Vector2();
	this.touchEdge = new Vector2(false, false);
	const update = () => this.update();
	this.update = function() {
		if (this.moveDir.x != 0) {
			this.oldMoveDir.x = this.moveDir.x;
		}
		if (this.moveDir.y != 0) {
			this.oldMoveDir.y = this.moveDir.y;
		}
		if (this.lockDir.y == -1 && this.moveDir.y < 0) {
			this.moveDir.y = 0;
			this.lockDir.y = 0;
		}
		if (this.lockDir.y == 1 && this.moveDir.y > 0) {
			this.moveDir.y = 0;
			this.lockDir.y = 0;
		}
		if (this.lockDir.x == -1 && this.moveDir.x < 0) {
			this.moveDir.x = 0;
			this.lockDir.x = 0;
		}
		if (this.lockDir.x == 1 && this.moveDir.x > 0) {
			this.moveDir.x = 0;
			this.lockDir.x = 0;
		}
		switch (this.moveDir.x) {
			case -1:
				if (this.object.base.position.x-(this.object.base.size.x/2) > this.horizontalEdges.x) {
					if (this.currentSpeed.x <= -this.maxSpeed) {
						this.currentSpeed.x = -this.maxSpeed;
					}
					if (this.currentSpeed.x > -this.maxSpeed) {
						this.currentSpeed.x -= this.accel.x;
					}
					this.touchEdge.x = false;
				} else {
					this.object.base.position.x = this.horizontalEdges.x+(this.object.base.size.x/2);
					this.currentSpeed.x = 0;
					this.touchEdge.x = true;
				}
			break;
			case 1:
				if (this.object.base.position.x+(this.object.base.size.x/2) < this.horizontalEdges.y) {
					if (this.currentSpeed.x >= this.maxSpeed) {
						this.currentSpeed.x = this.maxSpeed;
					}
					if (this.currentSpeed.x < this.maxSpeed) {
						this.currentSpeed.x += this.accel.x;
					}
					this.touchEdge.x = false;
				} else {
					this.object.base.position.x = Math.abs(this.horizontalEdges.y-this.object.base.size.x/2);
					this.currentSpeed.x = 0;
					this.touchEdge.x = true;
				}
			break;
			case 0:
				this.touchEdge.x = false;
				if (this.object.base.position.x-(this.object.base.size.x/2) > this.horizontalEdges.x && this.object.base.position.x+(this.object.base.size.x/2) < this.horizontalEdges.y) {
					if (this.oldMoveDir.x == -1) {
						this.currentSpeed.x += this.accel.y;
						if (this.currentSpeed.x > -this.accel.y) {
							this.currentSpeed.x = 0;
						}
					}
					if (this.oldMoveDir.x == 1) {
						this.currentSpeed.x -= this.accel.y;
						if (this.currentSpeed.x < this.accel.y) {
							this.currentSpeed.x = 0;
						}
					}
				} else {
					if (this.object.base.position.x-(this.object.base.size.x/2) <= this.horizontalEdges.x) {
						this.object.base.position.x = this.horizontalEdges.x+(this.object.base.size.x/2);
						this.currentSpeed.x = 0;
					}
					if (this.object.base.position.x+(this.object.base.size.x/2) >= this.horizontalEdges.y) {
						this.object.base.position.x = Math.abs(this.horizontalEdges.y-this.object.base.size.x/2);
						this.currentSpeed.x = 0;
					}
				}
			break;
		}
		switch (this.moveDir.y) {
			case -1:
				if (this.object.base.position.y-(this.object.base.size.y/2) > this.verticalEdges.x) {
					if (this.currentSpeed.y <= -this.maxSpeed) {
						this.currentSpeed.y = -this.maxSpeed;
					}
					if (this.currentSpeed.y > -this.maxSpeed) {
						this.currentSpeed.y -= this.accel.x;
					}
					this.touchEdge.y = false;
				} else {
					this.object.base.position.y = this.verticalEdges.x+(this.object.base.size.y/2);
					this.currentSpeed.y = 0;
					this.touchEdge.y = true;
				}
			break;
			case 1:
				if (this.object.base.position.y+(this.object.base.size.y/2) < this.verticalEdges.y) {
					if (this.currentSpeed.y >= this.maxSpeed) {
						this.currentSpeed.y = this.maxSpeed;
					}
					if (this.currentSpeed.y < this.maxSpeed) {
						this.currentSpeed.y += this.accel.x;
					}
					this.touchEdge.y = false;
				} else {
					this.object.base.position.y = Math.abs(this.verticalEdges.y-this.object.base.size.y/2);
					this.currentSpeed.y = 0;
					this.touchEdge.y = true;
				}
			break;
			case 0:
				this.touchEdge.y = false;
				if (this.object.base.position.y-(this.object.base.size.y/2) > this.verticalEdges.x && this.object.base.position.y+(this.object.base.size.y/2) < this.verticalEdges.y) {
					if (this.oldMoveDir.y == -1) {
						this.currentSpeed.y += this.accel.y;
						if (this.currentSpeed.y > -this.accel.y) {
							this.currentSpeed.y = 0;
						}
					}
					if (this.oldMoveDir.y == 1) {
						this.currentSpeed.y -= this.accel.y;
						if (this.currentSpeed.y < this.accel.y) {
							this.currentSpeed.y = 0;
						}
					}
				} else {
					if (this.object.base.position.y-(this.object.base.size.y/2) <= this.verticalEdges.x) {
						this.object.base.position.y = this.verticalEdges.x+(this.object.base.size.y/2);
						this.currentSpeed.y = 0;
					}
					if (this.object.base.position.y+(this.object.base.size.y/2) >= this.verticalEdges.y) {
						this.object.base.position.y = Math.abs(this.verticalEdges.y-this.object.base.size.y/2);
						this.currentSpeed.y = 0;
					}
				}
			break;		
		}
		this.object.base.position = this.object.base.position.addV(this.currentSpeed.multi(delta));
	}
	if (autoAdd) {
		addUpdate(update, "player_controller"+id);
	}
	this.activate = function() {
		if (getUpdate("player_controller"+id) == undefined) {
			addUpdate(update, "player_controller"+id);
		}
	}
	this.deactivate = function() {
		deleteUpdate(1, "player_controller"+id);
	}
}

document.documentElement.style.fontFamily = "Arial";

//Timer
const TIME = (hour=0, minute=0, second=0, millisecond=0) => {
	return {"hour":hour, "minute":minute, "second":second, "millisecond":millisecond};
}
const Hour = (h=0) => {
	return TIME(h);
}
const Minute = (m=0) => {
	return TIME(0, m);
}
const Second = (s=0) => {
	return TIME(0, 0, s);
}
const MSecond = (ms=0) => {
	return TIME(0, 0, 0, ms);
}
function timer(time_=TIME(), active_=true, loop_=false, func_=null, id_="") {
	this.time_ = time_;
	this.currentTime = TIME();
	let startTime = Date.now();
	this.active = active_;
	let loop = loop_;
	this.func = func_;
	let id = id_;
	this.start = (reset=false) => {
		console.log("fuck");
		this.active = true;
		if (reset) {
			this.reset();
		}
	}
	this.pause = () => {
		this.active = false;
	}
	this.reset = () => {
		startTime = Date.now();
	}
	const update = () => {
		if (this.active) {
			this.currentTime.millisecond = Date.now() - startTime;
			this.currentTime.second = Math.floor(this.currentTime.millisecond / 1000);
			this.currentTime.minute = Math.floor(this.currentTime.second / 60);
			this.currentTime.hour = Math.floor(this.currentTime.minute / 60);
			if (this.currentTime.hour >= this.time_.hour && this.currentTime.minute >= this.time_.minute && this.currentTime.second >= this.time_.second && this.currentTime.millisecond >= this.time_.millisecond) {
				if (this.func != null) {
					this.func();
				}
				this.reset();
				if (!loop) {
					this.pause();
				}
			}
		}
	}
	addUpdate(update, "timer_"+id);
}

//Mod loader helper function
const ModLoader = new modLoader();

function mod(path="", id="") {
	this.path = path;
	this.id = id;
	this.load = function() {
		let script = document.createElement('script');
		script.id = this.id;
		script.src = this.path;
		ModLoader.modDiv.appendChild(script);
		ModLoader.addVisual(this.id+"V");
	}
	this.unload = function() {
		deleteUpdate(2, this.id);
		deleteByNameTag(new nameTag("", this.id), 2, true);
		for (let i=0;i<gameModeData.length;i++) {
			deleteMap(this.id, i, true, true);
		}
		let domElements = Array.from(document.getElementsByClassName(this.id));
		domElements.forEach((e) => {
			e.remove();
		});
		try {
			eval(this.id+"_unload()");
		} catch (e) {}
		try {
			eval(this.id+"_Unload()");
		} catch (e) {}
		try {
			getModVar(this.id, "unload")();
		} catch (e) {}
		try {
			getModVar(this.id, "Unload")();
		} catch (e) {}
		modVars.deleteMod(this.id);
		let script = document.getElementById(this.id);
		let scriptV = document.getElementById(this.id+"V");
		ModLoader.modDiv.removeChild(script);
		ModLoader.modSep.removeChild(scriptV);
	}
	this.load();
}

//Mod loader
function modLoader() {
	this.menu = null;
	this.title = null;
	this.input = null;
	this.loadBttn = null;
	this.modSep = null;
	this.closeBttn = null;
	this.loaded = false;
	this.menuSize = new Vector2(800, 600);
	this.menuScale = 1;
	this.path = "";
	this.mods = [];
	this.show = function() {
		if (this.menu != null) {
			this.menu.style.display = "block";
		}
	}
	this.hide = function() {
		if (this.menu != null) {
			this.menu.style.display = "none";
		}
	}
	//Mods container
	this.modDiv = document.createElement('div');
	this.modDiv.style.display = "none";
	document.body.appendChild(this.modDiv);
	this.createMenu = function() {
		//Background
		this.menu = document.createElement('div');
		this.menu.style.backgroundColor = "grey";
		this.menu.style.zIndex = "4";
		this.menu.style.marginLeft = "0px";
		this.menu.style.marginRight = "0px";
		this.menu.style.marginTop = "0px";
		this.menu.style.marginBottom = "0px";
		this.menu.style.display = "none";
		this.menu.style.position = "fixed";
		this.menu.style.boxShadow = "5px 5px darkgrey";
		document.body.appendChild(this.menu);
		//Title
		this.title = document.createElement('h1');
		this.title.innerHTML = "Mod Menu";
		this.title.style.textAlign = "center";
		this.title.style.color = "white";
		this.title.style.marginLeft = "0px";
		this.title.style.marginRight = "0px";
		this.title.style.marginTop = "0px";
		this.title.style.marginBottom = "0px";
		this.menu.appendChild(this.title);
		//File input
		this.input = document.createElement('input');
		this.input.type = "file";
		this.input.style.color = "white";
		this.input.style.marginLeft = "0px";
		this.input.style.marginRight = "0px";
		this.input.style.marginTop = "0px";
		this.input.style.marginBottom = "0px";
		this.input.style.position = "fixed";
		this.menu.appendChild(this.input);
		//Load button
		this.loadBttn = document.createElement('button');
		this.loadBttn.innerHTML = "Add Mod";
		this.loadBttn.style.textAlign = "center";
		this.loadBttn.style.color = "black";
		this.loadBttn.style.marginLeft = "0px";
		this.loadBttn.style.marginRight = "0px";
		this.loadBttn.style.marginTop = "0px";
		this.loadBttn.style.marginBottom = "0px";
		this.loadBttn.style.position = "fixed";
		this.menu.appendChild(this.loadBttn);
		//Mod visual div
		this.modSep = document.createElement('div');
		this.modSep.style.backgroundColor = "lightgrey";
		this.modSep.style.marginLeft = "0px";
		this.modSep.style.marginRight = "0px";
		this.modSep.style.marginTop = "0px";
		this.modSep.style.marginBottom = "0px";
		this.modSep.style.width = "100%";
		this.modSep.style.height = "80%";
		this.modSep.style.overflowY = "scroll";
		this.modSep.style.overflowX = "none";
		this.modSep.style.position = "fixed";
		this.menu.appendChild(this.modSep);
		//Close button
		this.closeBttn = document.createElement('input');
		this.closeBttn.type = "image";
		this.closeBttn.src = Close_UI.getSrc();
		this.closeBttn.style.width = "32px";
		this.closeBttn.style.height = "32px";
		this.closeBttn.style.marginLeft = "0px";
		this.closeBttn.style.marginRight = "5px";
		this.closeBttn.style.marginTop = "5px";
		this.closeBttn.style.marginBottom = "0px";
		this.closeBttn.style.position = "absolute";
		this.closeBttn.style.top = "0px";
		this.closeBttn.style.right = "0px";
		this.closeBttn.onmouseover = () => {
			this.closeBttn.src = Close_UI_Hover.getSrc();
		};
		this.closeBttn.onmouseleave = () => {
			this.closeBttn.src = Close_UI.getSrc();
		};
		this.closeBttn.onclick = () => {
			this.hide();
		};
		this.menu.appendChild(this.closeBttn);
		addUpdate(updater, "mod_loader");
		this.loaded = true;
	}
	const updater = () => {this.update()};
	this.update = function() {
		this.menu.style.width = (this.menuSize.x*screen.getScale().x)+"px";
		this.menu.style.height = (this.menuSize.y*screen.getScale().y)+"px";
		this.menu.style.top = (screen.getHalfDeviceRes().y)-((this.menuSize.y/2)*screen.getScale().y)+"px";
		this.menu.style.left = (screen.getHalfDeviceRes().x)-((this.menuSize.x/2)*screen.getScale().x)+"px";
		this.title.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.input.style.fontSize = ((15*this.menuScale)*screen.getScale().x)+"px";
		this.input.style.width = ((200*this.menuScale)*screen.getScale().x)+"px";
		this.input.style.height = ((40*this.menuScale)*screen.getScale().y)+"px";
		this.input.style.top = (parseInt(this.menu.style.top)+((50*this.menuScale)*screen.getScale().y))+"px";
		this.input.style.left = (screen.getHalfDeviceRes().x-((parseInt(this.loadBttn.style.width)/2+50)*screen.getScale().x))+"px";
		this.loadBttn.style.fontSize = ((15*this.menuScale)*screen.getScale().x)+"px";
		this.loadBttn.style.width = ((100*this.menuScale)*screen.getScale().x)+"px";
		this.loadBttn.style.height = ((20*this.menuScale)*screen.getScale().y)+"px";
		this.loadBttn.style.top = (parseInt(this.menu.style.top)+((80*this.menuScale)*screen.getScale().y))+"px";
		this.loadBttn.style.left = (screen.getHalfDeviceRes().x-parseInt(this.loadBttn.style.width)/2)+"px";
		this.modSep.style.width = this.menu.style.width;
		this.modSep.style.height = ((parseFloat(this.menu.style.height)-(105*screen.getScale().y))/this.menuScale)+"px";
		this.modSep.style.top = (parseFloat(this.menu.style.top)+((105*this.menuScale)*screen.getScale().y))+"px";
		this.modSep.style.left = this.menu.style.left;
		this.closeBttn.style.marginRight = ((5*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginTop = ((5*this.menuScale)*screen.getScale().y)+"px";
		this.closeBttn.style.width = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.height = ((32*this.menuScale)*screen.getScale().x)+"px";
		//Gets path
		this.path = this.input.value.replace(/\\/g, "/").replace("C:/fakepath", "./Mods");
		if (this.path.includes("Mods")) {
			this.path = "./"+this.path.slice(this.path.indexOf("Mods"), this.path.length);
		}
		//Add mod to mods list
		this.loadBttn.onclick = () => {
			let modName = this.path.replace("./Mods/", "").replace(".js", "");
			let check = document.getElementById(modName);
			if (check == null && this.path.length != 0) {
				let newMod = new mod(this.path, modName);
				this.mods.push(newMod);
				console.log("%cMod added: "+modName, "color:green");
			} else {
				if (this.path.length != 0) {
					console.log("%cMod "+modName+" is already loaded!", "color:orange");
				} else {
					console.log("%cNo mod is chosen!", "color:orange");
				}
			}
		};
		//Scale mod text
		this.mods.forEach((m) => {
			let idElement = document.getElementById(m.id+"V_text");
			if (idElement.innerHTML.length > 30) {
				let scaleFactor = 1-(30/idElement.innerHTML.length);
				idElement.style.fontSize = ((35*this.menuScale)*Math.abs(screen.getScale().x-scaleFactor))+"px";
			} else {
				idElement.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
			}
		});
	}
	this.addVisual = function(id="") {
		//Box
		let mV = document.createElement('div');
		mV.id = id;
		mV.style.backgroundColor = "darkgrey";
		mV.style.marginLeft = "0px";
		mV.style.marginRight = "0px";
		mV.style.marginTop = "0px";
		mV.style.marginBottom = "1px";
		mV.style.width = "100%";
		mV.style.height = "50px";
		mV.style.boxShadow = "0px 5px black";
		this.modSep.appendChild(mV);
		//Mod name
		let modNameV = document.createElement('h1');
		modNameV.id = id+"_text";
		modNameV.innerHTML = "Mod: "+id.replaceAll("V", "").replaceAll("_", " ");
		modNameV.style.color = "white";
		modNameV.style.marginLeft = "20px";
		modNameV.style.marginRight = "0px";
		modNameV.style.marginTop = "0px";
		modNameV.style.marginBottom = "0px";
		modNameV.style.fontSize = "35px";
		modNameV.style.display = "inline-block";
		mV.appendChild(modNameV);
		//Delete button
		let deleteBttnV = document.createElement('button');
		deleteBttnV.innerHTML = "Unload";
		deleteBttnV.style.fontSize = "35px";
		deleteBttnV.style.marginLeft = "0px";
		deleteBttnV.style.marginRight = "0px";
		deleteBttnV.style.marginTop = "0px";
		deleteBttnV.style.marginBottom = "0px";
		deleteBttnV.style.width = "200px";
		deleteBttnV.style.height = "100%";
		deleteBttnV.style.float = "right";
		deleteBttnV.style.display = "inline-block";
		deleteBttnV.onclick = () => {
			let id = mV.id.replace("V", "");
			deleteModLocal(id);
		};
		mV.appendChild(deleteBttnV);
	}
	let deleteModLocal = (id) => {this.deleteMod(id);};
	this.deleteMod = function(name="") {
		this.mods.forEach((m, i) => {
			if (m.id == name) {
				this.mods[i].unload();
				this.mods.splice(i, 1);
				console.log("%cMod deleted: "+m.id, "color:orange");
			}
		});
	}
}

//Controller stuff
let controllers = {};
const controllerManager = new controllerMG();

function controllerBttnBinding(player=1, func=null, funcName="", bttn=0, single=true) {
	this.player = player;
	this.func = func;
	this.funcName = funcName;
	this.bttnMap = (thisBttn=0) => {
		switch (thisBttn) {
			case 0:
			case "xp":
			case "Xp":
			case "a":
			case "A":
				return 0;
			break;
			case 1:
			case "o":
			case "O":
			case "cir":
			case "Cir":
			case "circle":
			case "Circle":
			case "b":
			case "B":
				return 1;
			break;
			case 2:
			case "[]":
			case "squ":
			case "Squ":
			case "square":
			case "Square":
			case "xx":
			case "Xx":
				return 2;
			break;
			case 3:
			case "^":
			case "tri":
			case "Tri":
			case "triangle":
			case "Triangle":
			case "y":
			case "Y":
				return 3;
			break;
			case 4:
			case "l1":
			case "L1":
			case "lb":
			case "Lb":
			case "LB":
				return 4;
			break;
			case 5:
			case "r1":
			case "R1":
			case "rb":
			case "Rb":
			case "RB":
				return 5;
			break;
			case 6:
			case "l2":
			case "L2":
			case "lt":
			case "Lt":
			case "LT":
				return 6;
			break;
			case 7:
			case "r2":
			case "R2":
			case "rt":
			case "Rt":
			case "RT":
				return 7;
			break;
			case 8:
			case "menu":
			case "Menu":
			case "sel":
			case "Sel":
			case "select":
			case "Select":
			case "back":
			case "Back":
			case "view":
			case "View":
				return 8;
			break;
			case 9:
			case "sta":
			case "Sta":
			case "start":
			case "Start":
				return 9;
			break;
			case 10:
			case "ls":
			case "Ls":
			case "LS":
				return 10;
			break;
			case 11:
			case "rs":
			case "Rs":
			case "RS":
				return 11;
			break;
			case 12:
			case "upDPad":
			case "UpDPad":
			case "DPadup":
			case "DPadUp":
			case "upD":
			case "UpD":
			case "up":
			case "Up":
				return 12;
			break;
			case 13:
			case "downDPad":
			case "DownDPad":
			case "DPaddown":
			case "DPadDown":
			case "downD":
			case "DownD":
			case "down":
			case "Down":
				return 13;
			break;
			case 14:
			case "leftDPad":
			case "LeftDPad":
			case "DPadleft":
			case "DPadLeft":
			case "leftD":
			case "LeftD":
			case "left":
			case "Left":
				return 14;
			break;
			case 15:
			case "rightDPad":
			case "RightDPad":
			case "DPadright":
			case "DPadRight":
			case "rightD":
			case "RightD":
			case "right":
			case "Right":
				return 15;
			break;
			case 16:
			case "ps":
			case "Ps":
			case "PS":
			case "xbox":
			case "Xbox":
			case "middleBttn":
			case "MiddleBttn":
			case "consoleBttn":
			case "ConsoleBttn":
				return 16;
			break;
		}
	}
	this.lock = false;
	this.bttn = this.bttnMap(bttn);
	this.single = single;
	if (controllerManager.config[this.player] == undefined) {
		controllerManager.config[this.player] = {"controls":[]};
		controllerManager.config[this.player].controls.push({"funcName":this.funcName,"func":this.func,"bttn":this.bttn, "lock":this.lock, "single":this.single});
	} else {
		if (controllerManager.config[this.player].controls == undefined) {
			controllerManager.config[this.player].controls = [];
			controllerManager.config[this.player].controls.push({"funcName":this.funcName,"func":this.func,"bttn":this.bttn, "lock":this.lock, "single":this.single});
		} else {
			controllerManager.config[this.player].controls.push({"funcName":this.funcName,"func":this.func,"bttn":this.bttn, "lock":this.lock, "single":this.single});
		}
	}
	this.duplicate = () => {
		return new controllerBttnBinding(this.player, this.func, this.funcName, this.bttn, this.single);
	}
	this.dup = this.duplicate;
}

function controllerAxesBinding(player=1, func=null, funcName="", axes=0, deadzone=0.2) {
	this.player = player;
	this.func = func;
	this.funcName = funcName;
	this.axes = axes; //0- left stick, 1- right stick
	this.deadzone = deadzone;
	if (axes > 1) {
		this.axes = 1;
	}
	if (axes < 0) {
		this.axes = 0;
	}
	if (controllerManager.config[this.player] == undefined) {
		controllerManager.config[this.player] = {"axes":[]};
		controllerManager.config[this.player].axes.push({"funcName":this.funcName,"func":this.func,"bttn":this.axes,"deadzone":this.deadzone});
	} else {
		if (controllerManager.config[this.player].axes == undefined) {
			controllerManager.config[this.player].axes = [];
			controllerManager.config[this.player].axes.push({"funcName":this.funcName,"func":this.func,"bttn":this.axes,"deadzone":this.deadzone});
		} else {
			controllerManager.config[this.player].axes.push({"funcName":this.funcName,"func":this.func,"bttn":this.axes,"deadzone":this.deadzone});
		}
	}
	this.duplicate = () => {
		return new controllerBttnBinding(this.player, this.func, this.funcName, this.axes, this.deadzone);
	}
	this.dup = this.duplicate;
}

function controllerMG() {
	this.players = 0; //0- no support
	this.connected = 0;
	
	this.config = {};
	
	this.assignControllers = () => {
		for (let i=1;i<=this.players;i++) {
			if (this.config[i] != undefined) {
				if (this.config[i].controllerId == undefined) {
					this.config[i].controllerId = i-1;
				}
			}
		} 
	}
	this.assignControllers();
	
	this.calDeadzone = (vec, deadzone) => {
		let m = Math.sqrt(vec.x*vec.x+vec.y*vec.y);
		if (m < deadzone) {
			return new Vector2(0, 0, true);
		}
		let over = m-deadzone;
		let nover = over/(1-deadzone);
		let nx = vec.x/m;
		let ny = vec.y/m;
		return new Vector2(clamp(nx*nover, -1, 1), clamp(ny*nover, -1, 1), (vec.x==0 && vec.y==0));
	}
	
	const update = () => {
		controllers = (navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []));
		this.connected = controllers.filter((i)=>{return i!=null}).length;
		if (this.players == 0) {
			if (keybinder.controllerDiv.style.display != "none") {
				keybinder.controllerDiv.style.display = "none";
			}
		} else {
			if (keybinder.controllerDiv.style.display != "block") {
				keybinder.controllerDiv.style.display = "block";
			}
			for (let i=1;i<=this.players;i++) {
				if (this.config[i] != undefined) {
					let playerControls = this.config[i];
					if (playerControls.axes != undefined) {
						for (let a=0,length=playerControls.axes.length;a<length;a++) {
							let axesData = playerControls.axes[a];
							if (controllers[playerControls.controllerId] != undefined && controllers[playerControls.controllerId] != null) {
								switch (axesData.bttn) {
									case 0:
										let calLeft = this.calDeadzone(new Vector2(controllers[playerControls.controllerId].axes[0], controllers[playerControls.controllerId].axes[1]), axesData.deadzone);
										playerControls.leftStick = calLeft;
										axesData.func(playerControls.leftStick);
									break;
									case 1:
										let calRight = this.calDeadzone(new Vector2(controllers[playerControls.controllerId].axes[2], controllers[playerControls.controllerId].axes[3]), axesData.deadzone);
										playerControls.rightStick = calRight;
										axesData.func(playerControls.rightStick);
									break;
								}
							}
						}
					}
					if (playerControls.controls != undefined) {
						for (let c=0,length=playerControls.controls.length;c<length;c++) {
							let bttnData = playerControls.controls[c];
							if (controllers[playerControls.controllerId] != undefined && controllers[playerControls.controllerId] != null) {
								let data = controllers[playerControls.controllerId].buttons[bttnData.bttn];
								if (bttnData.single) {
									if (data.pressed && !bttnData.lock) {
										bttnData.func({"pressed":data.pressed,"touched":data.touched,"value":data.value});
										bttnData.lock = true;
									}
									if (!data.pressed && bttnData.lock) {
										bttnData.lock = false;
									}
								} else {
									bttnData.func({"pressed":data.pressed,"touched":data.touched,"value":data.value});
								}
							}
						}
					}
				}
			}
		}
	}
	addUpdate(update, "controller_manager");
}

window.addEventListener("gamepadconnected", (e) => {
  controllerManager.assignControllers();
});

window.addEventListener("gamepaddisconnected", (e) => {
  controllerManager.assignControllers();
});

//Keybinder
const keys = [];
const keyBuffer = [];
let keyLock = false;

const keybinder = new keyBinder();

function keyBinder() {
	this.menu = null;
	this.title = null;
	this.keySep = null;
	this.closeBttn = null;
	this.controllerDiv = null;
	this.menuSize = new Vector2(800, 600);
	this.menuScale = 1;
	this.currentPlayerIndex = 1;
	this.currentPlayerConfig = controllerManager.config[this.currentPlayerIndex];
	if (this.currentPlayerConfig != undefined) {
		this.playerControllerId = this.currentPlayerConfig.controllerId;
	}
	this.show = function() {
		if (this.menu != null) {
			this.menu.style.display = "block";
		}
	}
	this.hide = function() {
		if (this.menu != null) {
			this.menu.style.display = "none";
		}
	}
	this.createMenu = function() {
		//Background
		this.menu = document.createElement('div');
		this.menu.style.backgroundColor = "grey";
		this.menu.style.zIndex = "4";
		this.menu.style.marginLeft = "0px";
		this.menu.style.marginRight = "0px";
		this.menu.style.marginTop = "0px";
		this.menu.style.marginBottom = "0px";
		this.menu.style.display = "none";
		this.menu.style.position = "fixed";
		this.menu.style.boxShadow = "5px 5px darkgrey";
		document.body.appendChild(this.menu);
		//Title
		this.title = document.createElement('h1');
		this.title.innerHTML = "Controls";
		this.title.style.textAlign = "center";
		this.title.style.color = "white";
		this.title.style.marginLeft = "0px";
		this.title.style.marginRight = "0px";
		this.title.style.marginTop = "0px";
		this.title.style.marginBottom = "0px";
		this.menu.appendChild(this.title);
		//Key visual div
		this.keySep = document.createElement('div');
		this.keySep.style.backgroundColor = "lightgrey";
		this.keySep.style.marginLeft = "0px";
		this.keySep.style.marginRight = "0px";
		this.keySep.style.marginTop = "0px";
		this.keySep.style.marginBottom = "0px";
		this.keySep.style.width = "100%";
		this.keySep.style.height = "80%";
		this.keySep.style.overflowX = "hidden";
		this.keySep.style.overflowY = "scroll";
		this.keySep.style.position = "fixed";
		this.menu.appendChild(this.keySep);
		//Close button
		this.closeBttn = document.createElement('input');
		this.closeBttn.type = "image";
		this.closeBttn.src = Close_UI.getSrc();
		this.closeBttn.style.width = "32px";
		this.closeBttn.style.height = "32px";
		this.closeBttn.style.marginLeft = "0px";
		this.closeBttn.style.marginRight = "5px";
		this.closeBttn.style.marginTop = "5px";
		this.closeBttn.style.marginBottom = "0px";
		this.closeBttn.style.position = "absolute";
		this.closeBttn.style.top = "0px";
		this.closeBttn.style.right = "0px";
		this.closeBttn.onmouseover = () => {
			this.closeBttn.src = Close_UI_Hover.getSrc();
		};
		this.closeBttn.onmouseleave = () => {
			this.closeBttn.src = Close_UI.getSrc();
		};
		this.closeBttn.onclick = () => {
			this.hide();
		};
		this.menu.appendChild(this.closeBttn);
		addUpdate(updater, "key_binder");
		//Controller stuff
		this.controllerDiv = document.createElement('div');
		this.controllerDiv.id = "Controller";
		this.controllerDiv.style.backgroundColor = "darkgrey";
		this.controllerDiv.style.marginLeft = "0px";
		this.controllerDiv.style.marginRight = "0px";
		this.controllerDiv.style.marginTop = "0px";
		this.controllerDiv.style.marginBottom = "1px";
		this.controllerDiv.style.width = "100%";
		this.controllerDiv.style.height = "150px";
		this.controllerDiv.style.boxShadow = "0px 5px black";
		this.keySep.appendChild(this.controllerDiv);
		//Title
		this.controllerTitle = document.createElement('h1');
		this.controllerTitle.innerHTML = "Controllers";
		this.controllerTitle.style.textAlign = "center";
		this.controllerTitle.style.color = "white";
		this.controllerTitle.style.marginLeft = "0px";
		this.controllerTitle.style.marginRight = "0px";
		this.controllerTitle.style.marginTop = "0px";
		this.controllerTitle.style.marginBottom = "0px";
		this.controllerDiv.appendChild(this.controllerTitle);
		//Player div
		this.playerDiv = document.createElement('div');
		this.playerDiv.id = "playerControllerIndex";
		this.playerDiv.style.width = "300px";
		this.playerDiv.style.height = "30px";
		this.playerDiv.style.textAlign = "center";
		this.playerDiv.style.margin = "0 auto";
		this.controllerDiv.appendChild(this.playerDiv);
		//Left player index button
		this.leftPlayerIndexBttn = document.createElement('button');
		this.leftPlayerIndexBttn.innerHTML = "<";
		this.leftPlayerIndexBttn.style.backgroundColor = "lightgrey";
		this.leftPlayerIndexBttn.style.width = "30px";
		this.leftPlayerIndexBttn.style.height = "30px";
		this.leftPlayerIndexBttn.style.display = "inline-block";
		this.leftPlayerIndexBttn.style.position = "relative";
		this.leftPlayerIndexBttn.style.top = "-5px";
		this.leftPlayerIndexBttn.onmouseover = () => {
			this.leftPlayerIndexBttn.style.backgroundColor = "grey";
		};
		this.leftPlayerIndexBttn.onmouseleave = () => {
			this.leftPlayerIndexBttn.style.backgroundColor = "lightgrey";
		};
		this.leftPlayerIndexBttn.onclick = () => {
			if (this.currentPlayerIndex > 1) {
				this.currentPlayerIndex--;
			}
		};
		this.playerDiv.appendChild(this.leftPlayerIndexBttn);
		//Current player
		this.currentPlayer = document.createElement('h1');
		this.currentPlayer.innerHTML = "Player: 1";
		this.currentPlayer.style.color = "white";
		this.currentPlayer.style.marginLeft = "10px";
		this.currentPlayer.style.marginRight = "10px";
		this.currentPlayer.style.marginTop = "0px";
		this.currentPlayer.style.marginBottom = "0px";
		this.currentPlayer.style.display = "inline-block";
		this.playerDiv.appendChild(this.currentPlayer);
		//Right player index button
		this.rightPlayerIndexBttn = document.createElement('button');
		this.rightPlayerIndexBttn.innerHTML = ">";
		this.rightPlayerIndexBttn.style.backgroundColor = "lightgrey";
		this.rightPlayerIndexBttn.style.width = "30px";
		this.rightPlayerIndexBttn.style.height = "30px";
		this.rightPlayerIndexBttn.style.display = "inline-block";
		this.rightPlayerIndexBttn.style.position = "relative";
		this.rightPlayerIndexBttn.style.top = "-5px";
		this.rightPlayerIndexBttn.onmouseover = () => {
			this.rightPlayerIndexBttn.style.backgroundColor = "grey";
		};
		this.rightPlayerIndexBttn.onmouseleave = () => {
			this.rightPlayerIndexBttn.style.backgroundColor = "lightgrey";
		};
		this.rightPlayerIndexBttn.onclick = () => {
			if (this.currentPlayerIndex < controllerManager.players) {
				this.currentPlayerIndex++;
			}
		};
		this.playerDiv.appendChild(this.rightPlayerIndexBttn);
		//Player controller div
		this.playerControllerDiv = document.createElement('div');
		this.playerControllerDiv.id = "playerControllerIndex";
		this.playerControllerDiv.style.width = "300px";
		this.playerControllerDiv.style.height = "30px";
		this.playerControllerDiv.style.textAlign = "center";
		this.playerControllerDiv.style.margin = "0 auto";
		this.playerControllerDiv.style.marginTop = "5px";
		this.controllerDiv.appendChild(this.playerControllerDiv);
		//Left player index button
		this.leftPlayerControllerIndexBttn = document.createElement('button');
		this.leftPlayerControllerIndexBttn.innerHTML = "<";
		this.leftPlayerControllerIndexBttn.style.backgroundColor = "lightgrey";
		this.leftPlayerControllerIndexBttn.style.width = "30px";
		this.leftPlayerControllerIndexBttn.style.height = "30px";
		this.leftPlayerControllerIndexBttn.style.display = "inline-block";
		this.leftPlayerControllerIndexBttn.style.position = "relative";
		this.leftPlayerControllerIndexBttn.style.top = "-5px";
		this.leftPlayerControllerIndexBttn.onmouseover = () => {
			this.leftPlayerControllerIndexBttn.style.backgroundColor = "grey";
		};
		this.leftPlayerControllerIndexBttn.onmouseleave = () => {
			this.leftPlayerControllerIndexBttn.style.backgroundColor = "lightgrey";
		};
		this.leftPlayerControllerIndexBttn.onclick = () => {
			if (this.currentPlayerConfig != undefined && this.currentPlayerConfig.controllerId != undefined) {
				if (this.playerControllerId > 0) {
					this.currentPlayerConfig.controllerId--;
				}
			}
		};
		this.playerControllerDiv.appendChild(this.leftPlayerControllerIndexBttn);
		//Current player controller
		this.currentPlayerController = document.createElement('h1');
		this.currentPlayerController.innerHTML = "Controller: 1";
		this.currentPlayerController.style.color = "white";
		this.currentPlayerController.style.marginLeft = "10px";
		this.currentPlayerController.style.marginRight = "10px";
		this.currentPlayerController.style.marginTop = "0px";
		this.currentPlayerController.style.marginBottom = "0px";
		this.currentPlayerController.style.display = "inline-block";
		this.playerControllerDiv.appendChild(this.currentPlayerController);
		//Right player index button
		this.rightPlayerControllerIndexBttn = document.createElement('button');
		this.rightPlayerControllerIndexBttn.innerHTML = ">";
		this.rightPlayerControllerIndexBttn.style.backgroundColor = "lightgrey";
		this.rightPlayerControllerIndexBttn.style.width = "30px";
		this.rightPlayerControllerIndexBttn.style.height = "30px";
		this.rightPlayerControllerIndexBttn.style.display = "inline-block";
		this.rightPlayerControllerIndexBttn.style.position = "relative";
		this.rightPlayerControllerIndexBttn.style.top = "-5px";
		this.rightPlayerControllerIndexBttn.onmouseover = () => {
			this.rightPlayerControllerIndexBttn.style.backgroundColor = "grey";
		};
		this.rightPlayerControllerIndexBttn.onmouseleave = () => {
			this.rightPlayerControllerIndexBttn.style.backgroundColor = "lightgrey";
		};
		this.rightPlayerControllerIndexBttn.onclick = () => {
			if (this.currentPlayerConfig != undefined && this.currentPlayerConfig.controllerId != undefined) {
				if (this.playerControllerId < controllers.length-1) {
					this.currentPlayerConfig.controllerId++;
				}
			}
		};
		this.playerControllerDiv.appendChild(this.rightPlayerControllerIndexBttn);
		//Current player controller connected
		this.currentControllerConnected = document.createElement('h1');
		this.currentControllerConnected.innerHTML = "Connected: false";
		this.currentControllerConnected.style.color = "white";
		this.currentControllerConnected.style.marginLeft = "0px";
		this.currentControllerConnected.style.marginRight = "0px";
		this.currentControllerConnected.style.marginTop = "0px";
		this.currentControllerConnected.style.marginBottom = "0px";
		this.currentControllerConnected.style.display = "block";
		this.playerControllerDiv.appendChild(this.currentControllerConnected);
	}
	const updater = () => {
		this.menu.style.width = (this.menuSize.x*screen.getScale().x)+"px";
		this.menu.style.height = (this.menuSize.y*screen.getScale().y)+"px";
		this.menu.style.top = (screen.getHalfDeviceRes().y)-((this.menuSize.y/2)*screen.getScale().y)+"px";
		this.menu.style.left = (screen.getHalfDeviceRes().x)-((this.menuSize.x/2)*screen.getScale().x)+"px";
		this.title.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.keySep.style.width = this.menu.style.width;
		this.keySep.style.height = (parseFloat(this.menu.style.height)-(40*screen.getScale().y))+"px";
		this.keySep.style.top = (parseFloat(this.menu.style.top)+(40*screen.getScale().y))+"px";
		this.keySep.style.left = this.menu.style.left;
		this.closeBttn.style.marginRight = ((5*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginTop = ((5*this.menuScale)*screen.getScale().y)+"px";
		this.closeBttn.style.width = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.height = ((32*this.menuScale)*screen.getScale().x)+"px";
		keys.forEach((k) => {
			let idElement_1 = document.getElementById(k.id+"_name");
			idElement_1.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
			k.keys.forEach((k2, i) => {
				let idElement_2 = document.getElementById(k.id+"_"+i);
				idElement_2.style.width = ((100*this.menuScale)*screen.getScale().x)+"px";
				if (idElement_2.innerHTML.length > 3) {
					let scaleFactor = 1-(3/idElement_2.innerHTML.length);
					idElement_2.style.fontSize = ((35*this.menuScale)*Math.abs(screen.getScale().x-scaleFactor))+"px";
				} else {
					idElement_2.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
				}
			});
		});
		//Controller stuff
		this.currentPlayer.innerHTML = "Player: "+this.currentPlayerIndex;
		if (this.currentPlayerIndex < 1) {
			this.currentPlayerIndex = 1;
		}
		if (this.currentPlayerIndex > controllerManager.players) {
			this.currentPlayerIndex = controllerManager.players;
		}
		if (controllerManager.players == 1) {
			this.leftPlayerIndexBttn.style.display = "none";
			this.rightPlayerIndexBttn.style.display = "none";
		}
		this.currentPlayerConfig = controllerManager.config[this.currentPlayerIndex];
		if (this.currentPlayerConfig != undefined) {
			this.playerControllerId = this.currentPlayerConfig.controllerId;
		}
		if (this.currentPlayerConfig != undefined && this.currentPlayerConfig.controllerId != undefined) {
			this.leftPlayerControllerIndexBttn.style.display = "inline-block";
			this.rightPlayerControllerIndexBttn.style.display = "inline-block";
			this.currentPlayerController.innerHTML = "Controller: "+this.playerControllerId;
			this.currentControllerConnected.innerHTML = "Connected: "+(controllers[this.playerControllerId] != null);
		} else {
			this.leftPlayerControllerIndexBttn.style.display = "none";
			this.rightPlayerControllerIndexBttn.style.display = "none";
			this.currentPlayerController.innerHTML = "Controller: None";
			this.currentControllerConnected.innerHTML = "Connected: false";
		}
		if (this.playerControllerId < 0) {
			this.playerControllerId = 0;
		}
		if (this.playerControllerId > controllers.length-1) {
			this.playerControllerId = controllers.length-1;
		}
	}
	this.createMenu();
}

function keyData(key="", location=0) {
	this.key = key;
	this.location = location;
}

function key(id="", thisKeys=[], functions=new Vector2(), ifPaused=true) {
	this.id = id;
	this.keys = thisKeys;
	this.functions = functions;
	this.ifPaused = ifPaused;
	let pickKey = -1;
	let keyPressed = "";
	let locPressed = 0;
	//UI
	//Box
	let kV = document.createElement('div');
	kV.id = id;
	kV.style.backgroundColor = "darkgrey";
	kV.style.marginLeft = "0px";
	kV.style.marginRight = "0px";
	kV.style.marginTop = "0px";
	kV.style.marginBottom = "1px";
	kV.style.width = "100%";
	kV.style.height = "50px";
	kV.style.boxShadow = "0px 5px black";
	if (keybinder.keySep.children[0].id == "Controller") {
		keybinder.keySep.insertBefore(kV, keybinder.keySep.children[0]);
	} else {
		keybinder.keySep.insertBefore(kV, keybinder.keySep.children[keybinder.keySep.children.length-1]);
	}
	//Key name
	let keyNameV = document.createElement('h1');
	keyNameV.id = id+"_name";
	keyNameV.style.color = "white";
	keyNameV.style.marginLeft = "20px";
	keyNameV.style.marginRight = "0px";
	keyNameV.style.marginTop = "0px";
	keyNameV.style.marginBottom = "0px";
	keyNameV.style.fontSize = "35px";
	keyNameV.style.display = "inline-block";
	kV.appendChild(keyNameV);
	//Change key 1 button
	this.keys.forEach((t, i) => {
		let keyBttnV = document.createElement('button');
		keyBttnV.id = this.id+"_"+i;
		keyBttnV.innerHTML = t.key.slice(0, 3);
		keyBttnV.style.fontSize = "35px";
		keyBttnV.style.marginLeft = "0px";
		keyBttnV.style.marginRight = "0px";
		keyBttnV.style.marginTop = "0px";
		keyBttnV.style.marginBottom = "0px";
		keyBttnV.style.width = "100px";
		keyBttnV.style.height = "100%";
		keyBttnV.style.float = "right";
		keyBttnV.style.display = "inline-block";
		keyBttnV.onclick = () => {
			let index = i;
			let object = keyBttnV;
			changeKey(index, object);
		};
		kV.appendChild(keyBttnV);
	});
	this.printKeys = function() {
		keyNameV.innerHTML = this.id+": ";
		this.keys.forEach((t,i) => {
			//Name keys
			let length = this.keys.length-1;
			if (i != length) {
				keyNameV.innerHTML += t.key.toUpperCase()+", ";
			} else {
				keyNameV.innerHTML += t.key.toUpperCase();
			}
			//Name bttns
			let bttn = document.getElementById(this.id+"_"+i);
			bttn.innerHTML = t.key.slice(0, 3).toUpperCase();
		});
		
		pickKey = -1;
	}
	const changeKey = (index=0, object=null) => {this.changeKey(index, object);};
	this.changeKey = function(index=0, object=null) {
		keyNameV.innerHTML = this.id+": Press new key!";
		object.innerHTML = "*";
		pickKey = index;
		keyLock = true;
	}
	document.addEventListener("keydown",(e) => {
		if (pickKey != -1) {
			this.keys[pickKey].key = e.key;
			this.keys[pickKey].location = e.location;
			this.printKeys();
			this.save();
		}
	}, false);	
	document.addEventListener("keyup",(e) => {
		pickKey = -1;
		keyLock = false;
	}, false);
	this.save = function() {
		localStorage.setItem(this.id, JSON.stringify(this.keys));
	}
	this.load = function() {
		if (localStorage.getItem(this.id) != null) {
			this.keys = JSON.parse(localStorage.getItem(this.id));
		} else {
			this.save();
		}
	}
	this.compare = function(arr=[]) {
		let results = [];
		this.keys.forEach((k) => {
			arr.forEach((k2) => {
				if (k.key.toUpperCase() == k2.key.toUpperCase() && k.location == k2.location) {
					results.push(true);
				}
			});
		});
		if (results.length == this.keys.length) {
			return true;
		} else {
			return false;
		}
	}
	this.load();
	this.printKeys();
	keys.push(this);
}

function updateKey() {
	if (!keyLock) {
		keys.forEach((k) => {
			if (k.compare(keyBuffer)) {
				if (typeof k.functions.x != "string") {
					if (k.functions.x != null && (k.ifPaused == false || (k.ifPaused == true && isPaused == false))) {
						k.functions.x();
					}
				} else {
					if (k.ifPaused == false || (k.ifPaused == true && isPaused == false)) {
						eval(k.functions.x);
					}
				}
			}
		});
	}
}
addUpdate(updateKey, "key_updater");

document.addEventListener("keydown",(e) => {
	let check = keyBuffer.every((i) => i.key.toUpperCase() != e.key.toUpperCase());
	if (check && !keyLock) {
		keyBuffer.push({"key":e.key,"location":e.location});
	}
}, false);	
document.addEventListener("keyup",(e) => {
	if (!keyLock) {
		keys.forEach((k) => {
			if (k.compare(keyBuffer)) {
				if (typeof k.functions.y != "string") {
					if (k.functions.y != null) {
						k.functions.y();
					}
				} else {
					eval(k.functions.y);
				}
			}
		});
		keyBuffer.forEach((o, i) => {
			if (o.key.toUpperCase() == e.key.toUpperCase() && o.location == e.location) {
				keyBuffer.splice(i, 1);
			}
		});
	}
}, false);

//Options menu
const OptionsMenu = new optionsMenu();

function optionsMenu() {
	this.active = false;
	this.menuSize = new Vector2(800, 600);
	this.menuScale = 1;
	//Options menu
	this.menu = document.createElement('div');
	this.menu.style.backgroundColor = "grey";
	this.menu.style.zIndex = "3";
	this.menu.style.marginLeft = "0px";
	this.menu.style.marginRight = "0px";
	this.menu.style.marginTop = "0px";
	this.menu.style.marginBottom = "0px";
	this.menu.style.display = "none";
	this.menu.style.position = "fixed";
	this.menu.style.boxShadow = "5px 5px darkgrey";
	document.body.appendChild(this.menu);
	//Title
	this.title = document.createElement('h1');
	this.title.innerHTML = "Options Menu";
	this.title.style.textAlign = "center";
	this.title.style.color = "white";
	this.title.style.marginLeft = "0px";
	this.title.style.marginRight = "0px";
	this.title.style.marginTop = "0px";
	this.title.style.marginBottom = "0px";
	this.menu.appendChild(this.title);
	//Close button
	this.closeBttn = document.createElement('input');
	this.closeBttn.type = "image";
	this.closeBttn.src = Close_UI.getSrc();
	this.closeBttn.style.width = "32px";
	this.closeBttn.style.height = "32px";
	this.closeBttn.style.marginLeft = "0px";
	this.closeBttn.style.marginRight = "5px";
	this.closeBttn.style.marginTop = "5px";
	this.closeBttn.style.marginBottom = "0px";
	this.closeBttn.style.position = "absolute";
	this.closeBttn.style.top = "0px";
	this.closeBttn.style.right = "0px";
	this.closeBttn.onmouseover = () => {
		this.closeBttn.src = Close_UI_Hover.getSrc();
	};
	this.closeBttn.onmouseleave = () => {
		this.closeBttn.src = Close_UI.getSrc();
	};
	this.closeBttn.onclick = () => {
		this.hide();
	};
	this.menu.appendChild(this.closeBttn);
	//Options visual div
	this.optionsSep = document.createElement('div');
	this.optionsSep.style.backgroundColor = "lightgrey";
	this.optionsSep.style.marginLeft = "0px";
	this.optionsSep.style.marginRight = "0px";
	this.optionsSep.style.marginTop = "0px";
	this.optionsSep.style.marginBottom = "0px";
	this.optionsSep.style.width = "100%";
	this.optionsSep.style.height = "80%";
	this.optionsSep.style.overflowY = "scroll";
	this.optionsSep.style.overflowX = "none";
	this.optionsSep.style.position = "fixed";
	this.menu.appendChild(this.optionsSep);
	//GFX title
	this.gfxDiv = document.createElement('div');
	this.gfxDiv.style.marginLeft = "0px";
	this.gfxDiv.style.marginRight = "0px";
	this.gfxDiv.style.marginTop = "0px";
	this.gfxDiv.style.marginBottom = "0px";
	this.gfxDiv.style.width = "100%";
	this.gfxDiv.style.height = "50px";
	this.gfxDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.gfxDiv);
	this.gfxTxt = document.createElement('p');
	this.gfxTxt.innerHTML = "GFX";
	this.gfxTxt.style.fontSize = "35px";
	this.gfxTxt.style.marginLeft = "0px";
	this.gfxTxt.style.marginRight = "0px";
	this.gfxTxt.style.marginTop = "0px";
	this.gfxTxt.style.marginBottom = "0px";
	this.gfxTxt.style.width = "100%";
	this.gfxTxt.style.height = "100%";
	this.gfxTxt.style.textAlign = "center";
	this.gfxTxt.style.color = "white";
	this.gfxDiv.appendChild(this.gfxTxt);
	//Image smoothing option
	this.imageSmoothingDiv = document.createElement('div');
	this.imageSmoothingDiv.style.marginLeft = "0px";
	this.imageSmoothingDiv.style.marginRight = "0px";
	this.imageSmoothingDiv.style.marginTop = "0px";
	this.imageSmoothingDiv.style.marginBottom = "0px";
	this.imageSmoothingDiv.style.width = "100%";
	this.imageSmoothingDiv.style.height = "50px";
	this.imageSmoothingDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.imageSmoothingDiv);
	this.imageSmoothingTxt = document.createElement('p');
	this.imageSmoothingTxt.innerHTML = "Image Smoothing:";
	this.imageSmoothingTxt.style.fontSize = "35px";
	this.imageSmoothingTxt.style.marginLeft = "0px";
	this.imageSmoothingTxt.style.marginRight = "0px";
	this.imageSmoothingTxt.style.marginTop = "0px";
	this.imageSmoothingTxt.style.marginBottom = "0px";
	this.imageSmoothingTxt.style.width = "100%";
	this.imageSmoothingTxt.style.height = "100%";
	this.imageSmoothingTxt.style.color = "white";
	this.imageSmoothingTxt.style.display = "inline";
	this.imageSmoothingDiv.appendChild(this.imageSmoothingTxt);
	this.imageSmoothingChkBx = document.createElement('input');
	this.imageSmoothingChkBx.type = "checkbox";
	this.imageSmoothingChkBx.style.marginLeft = "0px";
	this.imageSmoothingChkBx.style.marginRight = "0px";
	this.imageSmoothingChkBx.style.marginTop = "0px";
	this.imageSmoothingChkBx.style.marginBottom = "0px";
	this.imageSmoothingChkBx.style.width = "50px";
	this.imageSmoothingChkBx.style.height = "100%";
	this.imageSmoothingChkBx.style.float = "right";
	this.imageSmoothingChkBx.style.display = "inline";
	if (localStorage.getItem("Image_Smoothing") != null) {
		this.imageSmoothingChkBx.checked = JSON.parse(localStorage.getItem("Image_Smoothing"));
	}
	this.imageSmoothingChkBx.onchange = () => {
		localStorage.setItem("Image_Smoothing", JSON.stringify(this.imageSmoothingChkBx.checked));
	};
	this.imageSmoothingDiv.appendChild(this.imageSmoothingChkBx);
	//Shadows option
	this.shadowsDiv = document.createElement('div');
	this.shadowsDiv.style.marginLeft = "0px";
	this.shadowsDiv.style.marginRight = "0px";
	this.shadowsDiv.style.marginTop = "0px";
	this.shadowsDiv.style.marginBottom = "0px";
	this.shadowsDiv.style.width = "100%";
	this.shadowsDiv.style.height = "50px";
	this.shadowsDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.shadowsDiv);
	this.shadowsTxt = document.createElement('p');
	this.shadowsTxt.innerHTML = "Shadows:";
	this.shadowsTxt.style.fontSize = "35px";
	this.shadowsTxt.style.marginLeft = "0px";
	this.shadowsTxt.style.marginRight = "0px";
	this.shadowsTxt.style.marginTop = "0px";
	this.shadowsTxt.style.marginBottom = "0px";
	this.shadowsTxt.style.width = "100%";
	this.shadowsTxt.style.height = "100%";
	this.shadowsTxt.style.color = "white";
	this.shadowsTxt.style.display = "inline";
	this.shadowsDiv.appendChild(this.shadowsTxt);
	this.shadowsChkBx = document.createElement('input');
	this.shadowsChkBx.type = "checkbox";
	this.shadowsChkBx.style.marginLeft = "0px";
	this.shadowsChkBx.style.marginRight = "0px";
	this.shadowsChkBx.style.marginTop = "0px";
	this.shadowsChkBx.style.marginBottom = "0px";
	this.shadowsChkBx.style.width = "50px";
	this.shadowsChkBx.style.height = "100%";
	this.shadowsChkBx.style.float = "right";
	this.shadowsChkBx.style.display = "inline";
	this.shadowsChkBx.checked = true;
	if (localStorage.getItem("Shadows") != null) {
		this.shadowsChkBx.checked = JSON.parse(localStorage.getItem("Shadows"));
	}
	this.shadowsChkBx.onchange = () => {
		localStorage.setItem("Shadows", JSON.stringify(this.shadowsChkBx.checked));
	};
	this.shadowsDiv.appendChild(this.shadowsChkBx);
	//Debug title
	this.debugDiv = document.createElement('div');
	this.debugDiv.style.marginLeft = "0px";
	this.debugDiv.style.marginRight = "0px";
	this.debugDiv.style.marginTop = "0px";
	this.debugDiv.style.marginBottom = "0px";
	this.debugDiv.style.width = "100%";
	this.debugDiv.style.height = "50px";
	this.debugDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.debugDiv);
	this.debugTxt = document.createElement('p');
	this.debugTxt.innerHTML = "Debug";
	this.debugTxt.style.fontSize = "35px";
	this.debugTxt.style.marginLeft = "0px";
	this.debugTxt.style.marginRight = "0px";
	this.debugTxt.style.marginTop = "0px";
	this.debugTxt.style.marginBottom = "0px";
	this.debugTxt.style.width = "100%";
	this.debugTxt.style.height = "100%";
	this.debugTxt.style.textAlign = "center";
	this.debugTxt.style.color = "white";
	this.debugDiv.appendChild(this.debugTxt);
	//FPS option
	this.fpsDiv = document.createElement('div');
	this.fpsDiv.style.marginLeft = "0px";
	this.fpsDiv.style.marginRight = "0px";
	this.fpsDiv.style.marginTop = "0px";
	this.fpsDiv.style.marginBottom = "0px";
	this.fpsDiv.style.width = "100%";
	this.fpsDiv.style.height = "50px";
	this.fpsDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.fpsDiv);
	this.fpsTxt = document.createElement('p');
	this.fpsTxt.innerHTML = "Show FPS:";
	this.fpsTxt.style.fontSize = "35px";
	this.fpsTxt.style.marginLeft = "0px";
	this.fpsTxt.style.marginRight = "0px";
	this.fpsTxt.style.marginTop = "0px";
	this.fpsTxt.style.marginBottom = "0px";
	this.fpsTxt.style.width = "100%";
	this.fpsTxt.style.height = "100%";
	this.fpsTxt.style.color = "white";
	this.fpsTxt.style.display = "inline";
	this.fpsDiv.appendChild(this.fpsTxt);
	this.fpsChkBx = document.createElement('input');
	this.fpsChkBx.type = "checkbox";
	this.fpsChkBx.style.marginLeft = "0px";
	this.fpsChkBx.style.marginRight = "0px";
	this.fpsChkBx.style.marginTop = "0px";
	this.fpsChkBx.style.marginBottom = "0px";
	this.fpsChkBx.style.width = "50px";
	this.fpsChkBx.style.height = "100%";
	this.fpsChkBx.style.float = "right";
	this.fpsChkBx.style.display = "inline";
	if (localStorage.getItem("Show_FPS") != null) {
		this.fpsChkBx.checked = JSON.parse(localStorage.getItem("Show_FPS"));
	}
	this.fpsChkBx.onchange = () => {
		localStorage.setItem("Show_FPS", JSON.stringify(this.fpsChkBx.checked));
	};
	this.fpsDiv.appendChild(this.fpsChkBx);
	//DELTA option
	this.deltaDiv = document.createElement('div');
	this.deltaDiv.style.marginLeft = "0px";
	this.deltaDiv.style.marginRight = "0px";
	this.deltaDiv.style.marginTop = "0px";
	this.deltaDiv.style.marginBottom = "0px";
	this.deltaDiv.style.width = "100%";
	this.deltaDiv.style.height = "50px";
	this.deltaDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.deltaDiv);
	this.deltaTxt = document.createElement('p');
	this.deltaTxt.innerHTML = "Show DELTA:";
	this.deltaTxt.style.fontSize = "35px";
	this.deltaTxt.style.marginLeft = "0px";
	this.deltaTxt.style.marginRight = "0px";
	this.deltaTxt.style.marginTop = "0px";
	this.deltaTxt.style.marginBottom = "0px";
	this.deltaTxt.style.width = "100%";
	this.deltaTxt.style.height = "100%";
	this.deltaTxt.style.color = "white";
	this.deltaTxt.style.display = "inline";
	this.deltaDiv.appendChild(this.deltaTxt);
	this.deltaChkBx = document.createElement('input');
	this.deltaChkBx.type = "checkbox";
	this.deltaChkBx.style.marginLeft = "0px";
	this.deltaChkBx.style.marginRight = "0px";
	this.deltaChkBx.style.marginTop = "0px";
	this.deltaChkBx.style.marginBottom = "0px";
	this.deltaChkBx.style.width = "50px";
	this.deltaChkBx.style.height = "100%";
	this.deltaChkBx.style.float = "right";
	this.deltaChkBx.style.display = "inline";
	if (localStorage.getItem("Show_DELTA") != null) {
		this.deltaChkBx.checked = JSON.parse(localStorage.getItem("Show_DELTA"));
	}
	this.deltaChkBx.onchange = () => {
		localStorage.setItem("Show_DELTA", JSON.stringify(this.deltaChkBx.checked));
	};
	this.deltaDiv.appendChild(this.deltaChkBx);
	//Debug cursor option
	this.debugCursorDiv = document.createElement('div');
	this.debugCursorDiv.style.marginLeft = "0px";
	this.debugCursorDiv.style.marginRight = "0px";
	this.debugCursorDiv.style.marginTop = "0px";
	this.debugCursorDiv.style.marginBottom = "0px";
	this.debugCursorDiv.style.width = "100%";
	this.debugCursorDiv.style.height = "50px";
	this.debugCursorDiv.style.backgroundColor = "darkgrey";
	this.optionsSep.appendChild(this.debugCursorDiv);
	this.debugCursorTxt = document.createElement('p');
	this.debugCursorTxt.innerHTML = "Show Debug Cursor:";
	this.debugCursorTxt.style.fontSize = "35px";
	this.debugCursorTxt.style.marginLeft = "0px";
	this.debugCursorTxt.style.marginRight = "0px";
	this.debugCursorTxt.style.marginTop = "0px";
	this.debugCursorTxt.style.marginBottom = "0px";
	this.debugCursorTxt.style.width = "100%";
	this.debugCursorTxt.style.height = "100%";
	this.debugCursorTxt.style.color = "white";
	this.debugCursorTxt.style.display = "inline";
	this.debugCursorDiv.appendChild(this.debugCursorTxt);
	this.debugCursorChkBx = document.createElement('input');
	this.debugCursorChkBx.type = "checkbox";
	this.debugCursorChkBx.style.marginLeft = "0px";
	this.debugCursorChkBx.style.marginRight = "0px";
	this.debugCursorChkBx.style.marginTop = "0px";
	this.debugCursorChkBx.style.marginBottom = "0px";
	this.debugCursorChkBx.style.width = "50px";
	this.debugCursorChkBx.style.height = "100%";
	this.debugCursorChkBx.style.float = "right";
	this.debugCursorChkBx.style.display = "inline";
	if (localStorage.getItem("Show_Debug_Cursor") != null) {
		this.debugCursorChkBx.checked = JSON.parse(localStorage.getItem("Show_Debug_Cursor"));
	}
	this.debugCursorChkBx.onchange = () => {
		localStorage.setItem("Show_Debug_Cursor", JSON.stringify(this.debugCursorChkBx.checked));
	};
	this.debugCursorDiv.appendChild(this.debugCursorChkBx);
	//Shows menu
	this.show = function() {
		this.menu.style.display = "block";
		SettingsMenu.settingsIcon.style.display = "none";
		isPaused = true;
		this.active = true;
	}
	//Hides menu
	this.hide = function() {
		this.menu.style.display = "none";
		this.active = false;
	}
	const update = () => this.update();
	this.update = function() {
		this.menu.style.width = (this.menuSize.x*screen.getScale().x)+"px";
		this.menu.style.height = (this.menuSize.y*screen.getScale().y)+"px";
		this.menu.style.top = (screen.getHalfDeviceRes().y)-((this.menuSize.y/2)*screen.getScale().y)+"px";
		this.menu.style.left = (screen.getHalfDeviceRes().x)-((this.menuSize.x/2)*screen.getScale().x)+"px";
		this.title.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginRight = ((5*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginTop = ((5*this.menuScale)*screen.getScale().y)+"px";
		this.closeBttn.style.width = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.height = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.optionsSep.style.width = this.menu.style.width;
		this.optionsSep.style.height = (parseFloat(this.menu.style.height)-(40*screen.getScale().y))+"px";
		this.optionsSep.style.top = (parseFloat(this.menu.style.top)+(40*screen.getScale().y))+"px";
		this.optionsSep.style.left = this.menu.style.left;
		this.gfxTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.imageSmoothingTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		engineSettings.Image_Smoothing = this.imageSmoothingChkBx.checked;
		this.shadowsTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		engineSettings.Allow_Shadows = this.shadowsChkBx.checked;
		this.debugTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.fpsTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		engineSettings.Debug.Show_FPS_Counter = this.fpsChkBx.checked;
		this.deltaTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		engineSettings.Debug.Show_Delta_Time = this.deltaChkBx.checked;
		this.debugCursorTxt.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		engineSettings.Debug.Show_Debug_Cursor = this.debugCursorChkBx.checked;
		if (engineSettings.Settings_Menu.Image_Smoothing) {
			this.imageSmoothingDiv.style.display = "inherit";
		} else {
			this.imageSmoothingDiv.style.display = "none";
		}
		if (engineSettings.Settings_Menu.Shadows) {
			this.shadowsDiv.style.display = "inherit";
		} else {
			this.shadowsDiv.style.display = "none";
		}
		if (engineSettings.Settings_Menu.Debug) {
			this.debugDiv.style.display = "inherit";
		} else {
			this.debugDiv.style.display = "none";
		}
		if (engineSettings.Settings_Menu.Show_FPS) {
			this.fpsDiv.style.display = "inherit";
		} else {
			this.fpsDiv.style.display = "none";
		}
		if (engineSettings.Settings_Menu.Show_DELTA) {
			this.deltaDiv.style.display = "inherit";
		} else {
			this.deltaDiv.style.display = "none";
		}
		if (engineSettings.Settings_Menu.Show_Debug_Cursor) {
			this.debugCursorDiv.style.display = "inherit";
		} else {
			this.debugCursorDiv.style.display = "none";
		}
	}
	addUpdate(update, "settings menu");
}

//Settings menu
const SettingsMenu = new settingsMenu();

function menuToggle() {
	if (keyLock) {
		return;
	}
	if (!SettingsMenu.active && !keyLock) {
		SettingsMenu.show();
	} else {
		SettingsMenu.hide();
	}
}

function settingsMenu() {
	this.active = false;
	this.iconHovered = false;
	this.menuSize = new Vector2(800, 600);
	this.menuScale = 1;
	//Settings button
	this.settingsIcon = document.createElement('input');
	this.settingsIcon.type = "image";
	this.settingsIcon.src = Settings_Icon.getSrc();
	this.settingsIcon.style.width = "50px";
	this.settingsIcon.style.height = "50px";
	this.settingsIcon.style.marginLeft = "0px";
	this.settingsIcon.style.marginRight = "0px";
	this.settingsIcon.style.marginTop = "0px";
	this.settingsIcon.style.marginBottom = "0px";
	this.settingsIcon.style.position = "fixed";
	this.settingsIcon.style.top = "5px";
	this.settingsIcon.style.right = "5px";
	this.settingsIcon.style.zIndex = "3";
	this.settingsIcon.style.opacity = "0.3";
	this.settingsIcon.style.display = "block";
	this.settingsIcon.onmouseover = () => {
		this.settingsIcon.style.opacity = "0.7";
		this.iconHovered = true;
	};
	this.settingsIcon.onmouseleave = () => {
		this.settingsIcon.style.opacity = "0.3";
		this.iconHovered = false;
	};
	this.settingsIcon.onclick = () => {
		this.show();
	};
	document.body.appendChild(this.settingsIcon);
	//Settings menu
	this.menu = document.createElement('div');
	this.menu.style.backgroundColor = "grey";
	this.menu.style.zIndex = "2";
	this.menu.style.marginLeft = "0px";
	this.menu.style.marginRight = "0px";
	this.menu.style.marginTop = "0px";
	this.menu.style.marginBottom = "0px";
	this.menu.style.display = "none";
	this.menu.style.position = "fixed";
	this.menu.style.boxShadow = "5px 5px darkgrey";
	document.body.appendChild(this.menu);
	//Title
	this.title = document.createElement('h1');
	this.title.innerHTML = "Settings Menu";
	this.title.style.textAlign = "center";
	this.title.style.color = "white";
	this.title.style.marginLeft = "0px";
	this.title.style.marginRight = "0px";
	this.title.style.marginTop = "0px";
	this.title.style.marginBottom = "0px";
	this.menu.appendChild(this.title);
	//Close button
	this.closeBttn = document.createElement('input');
	this.closeBttn.type = "image";
	this.closeBttn.src = Close_UI.getSrc();
	this.closeBttn.style.width = "32px";
	this.closeBttn.style.height = "32px";
	this.closeBttn.style.marginLeft = "0px";
	this.closeBttn.style.marginRight = "5px";
	this.closeBttn.style.marginTop = "5px";
	this.closeBttn.style.marginBottom = "0px";
	this.closeBttn.style.position = "absolute";
	this.closeBttn.style.top = "0px";
	this.closeBttn.style.right = "0px";
	this.closeBttn.onmouseover = () => {
		this.closeBttn.src = Close_UI_Hover.getSrc();
	};
	this.closeBttn.onmouseleave = () => {
		this.closeBttn.src = Close_UI.getSrc();
	};
	this.closeBttn.onclick = () => {
		this.hide();
	};
	this.menu.appendChild(this.closeBttn);
	//Buttons visual div
	this.buttonsSep = document.createElement('div');
	this.buttonsSep.style.backgroundColor = "lightgrey";
	this.buttonsSep.style.marginLeft = "0px";
	this.buttonsSep.style.marginRight = "0px";
	this.buttonsSep.style.marginTop = "0px";
	this.buttonsSep.style.marginBottom = "0px";
	this.buttonsSep.style.width = "100%";
	this.buttonsSep.style.height = "80%";
	this.buttonsSep.style.overflowY = "scroll";
	this.buttonsSep.style.overflowX = "none";
	this.buttonsSep.style.position = "fixed";
	this.menu.appendChild(this.buttonsSep);
	//Keybinding bttn
	this.keybinderBttn = document.createElement('button');
	this.keybinderBttn.innerHTML = "Controls";
	this.keybinderBttn.style.fontSize = "35px";
	this.keybinderBttn.style.marginLeft = "0px";
	this.keybinderBttn.style.marginRight = "0px";
	this.keybinderBttn.style.marginTop = "0px";
	this.keybinderBttn.style.marginBottom = "0px";
	this.keybinderBttn.style.width = "100%";
	this.keybinderBttn.style.height = "50px";
	this.keybinderBttn.onclick = () => {
		keybinder.show();
	};
	this.buttonsSep.appendChild(this.keybinderBttn);
	//Options bttn
	this.optionsBttn = document.createElement('button');
	this.optionsBttn.innerHTML = "Options";
	this.optionsBttn.style.fontSize = "35px";
	this.optionsBttn.style.marginLeft = "0px";
	this.optionsBttn.style.marginRight = "0px";
	this.optionsBttn.style.marginTop = "0px";
	this.optionsBttn.style.marginBottom = "0px";
	this.optionsBttn.style.width = "100%";
	this.optionsBttn.style.height = "50px";
	this.optionsBttn.onclick = () => {
		OptionsMenu.show();
	};
	this.buttonsSep.appendChild(this.optionsBttn);
	//Mods bttn
	this.modsBttn = document.createElement('button');
	this.modsBttn.innerHTML = "Mods";
	this.modsBttn.style.fontSize = "35px";
	this.modsBttn.style.marginLeft = "0px";
	this.modsBttn.style.marginRight = "0px";
	this.modsBttn.style.marginTop = "0px";
	this.modsBttn.style.marginBottom = "0px";
	this.modsBttn.style.width = "100%";
	this.modsBttn.style.height = "50px";
	this.modsBttn.onclick = () => {
		ModLoader.show();
	};
	this.buttonsSep.appendChild(this.modsBttn);
	//Quit bttn
	this.quitBttn = document.createElement('button');
	this.quitBttn.innerHTML = "Exit Game";
	this.quitBttn.style.fontSize = "35px";
	this.quitBttn.style.marginLeft = "0px";
	this.quitBttn.style.marginRight = "0px";
	this.quitBttn.style.marginTop = "0px";
	this.quitBttn.style.marginBottom = "0px";
	this.quitBttn.style.width = "100%";
	this.quitBttn.style.height = "50px";
	this.quitBttn.style.display = "none";
	this.quitBttn.onclick = () => {
		if (typeof nw != "undefined") {
			let win = nw.Window.get();
			win.close();
		}
	};
	this.buttonsSep.appendChild(this.quitBttn);
	//Shows menu
	this.show = function() {
		this.menu.style.display = "block";
		this.settingsIcon.style.display = "none";
		isPaused = true;
		this.active = true;
	}
	//Hides menu
	this.hide = function() {
		this.menu.style.display = "none";
		this.settingsIcon.style.display = "block";
		ModLoader.hide();
		keybinder.hide();
		isPaused = false;
		this.active = false;
	}
	const update = () => this.update();
	this.update = function() {
		this.menu.style.width = (this.menuSize.x*screen.getScale().x)+"px";
		this.menu.style.height = (this.menuSize.y*screen.getScale().y)+"px";
		this.menu.style.top = (screen.getHalfDeviceRes().y)-((this.menuSize.y/2)*screen.getScale().y)+"px";
		this.menu.style.left = (screen.getHalfDeviceRes().x)-((this.menuSize.x/2)*screen.getScale().x)+"px";
		this.title.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginRight = ((5*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.marginTop = ((5*this.menuScale)*screen.getScale().y)+"px";
		this.closeBttn.style.width = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.closeBttn.style.height = ((32*this.menuScale)*screen.getScale().x)+"px";
		this.buttonsSep.style.width = this.menu.style.width;
		this.buttonsSep.style.height = (parseFloat(this.menu.style.height)-(40*screen.getScale().y))+"px";
		this.buttonsSep.style.top = (parseFloat(this.menu.style.top)+(40*screen.getScale().y))+"px";
		this.buttonsSep.style.left = this.menu.style.left;
		this.keybinderBttn.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		this.modsBttn.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		if (ModLoader.loaded) {
			this.modsBttn.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
			this.modsBttn.style.display = "initial";
		} else {
			this.modsBttn.style.display = "none";
		}
		this.quitBttn.style.fontSize = ((35*this.menuScale)*screen.getScale().x)+"px";
		if (typeof nw != "undefined") {
			this.quitBttn.style.display = "block";
		} else {
			this.quitBttn.style.display = "none";
		}
	}
	addUpdate(update, "settings menu");
}

//Engine Controls
let MenuBttn = new key(
	"Menu",
	[
		new keyData("Escape", 0)
	],
	new Vector2(null, menuToggle)
);

//UI Button class
function buttonLink(object=null, textObj=null, collision=null, func=null, hoverColor=null, hoverTextColor=null, hoverShadowColor=null, hoverShadowTextColor=null) {
	this.object = object; //Button object
	this.textObj = textObj; //Button text object
	this.collision = collision; //Collision function
	this.func = func; //Function to run when clicked
	this.hoverColor = hoverColor; //Vector2 used for changing color on hover | x- normal color, y- hover color | null if not used
	this.hoverTextColor = hoverTextColor; //Vector2 used for changing color on hover | x- normal color, y- hover color | null if not used
	this.hoverShadowColor = hoverShadowColor; //Vector2 used for changing shadow color on hover | x- normal color, y- hover color | null if not used
	this.hoverShadowTextColor = hoverShadowTextColor; //Vector2 used for changing shadow color on hover | x- normal color, y- hover color | null if not used
	let execute = false;
	const update = () => this.update();
	this.link = function() {
		addUpdate(update, "button_"+this.object.base.nameTag.name);
	}
	this.unlink = function() {
		deleteUpdate(1, "button_"+this.object.base.nameTag.name);
	}
	this.update = function() {
		if (collision(Cursor.cursor, this.object)) {
			//Hover code
			if (this.hoverColor != null) {
				this.object.base.color = this.hoverColor.y;
			}
			if (this.hoverTextColor != null) {
				this.textObj.base.color = this.hoverTextColor.y;
			}
			if (this.hoverShadowColor != null) {
				this.object.base.shadow.color = this.hoverShadowColor.y;
			}
			if (this.hoverShadowTextColor != null) {
				this.textObj.base.shadow.color = this.hoverShadowTextColor.y;
			}
			//On click code
			if (mouseData().b0 && !execute) {
				func();
				execute = true;
			}
		} else {
			if (this.hoverColor != null) {
				this.object.base.color = this.hoverColor.x;
			}
			if (this.hoverTextColor != null) {
				this.textObj.base.color = this.hoverTextColor.x;
			}
			if (this.hoverShadowColor != null) {
				this.object.base.shadow.color = this.hoverShadowColor.x;
			}
			if (this.hoverShadowTextColor != null) {
				this.textObj.base.shadow.color = this.hoverShadowTextColor.x;
			}
		}
		if (!mouseData().b0) {
			execute = false;
		}
	}
} 

//Cursor
const Cursor = new cursor();

function cursor() {
	this.offset = new Vector2();
	this.cursor = new Rectangle(8, new baseObject(true, new nameTag("cursor", "Engine"), new Vector2(5, 5), new Vector2(-100, -100), new colorData("red")));
	this.setImage = function(data=null) {
		if (data != null) {
			deleteByNameTag(this.cursor.base.nameTag);
			this.cursor = new Sprite(8, new baseObject(true, new nameTag("cursor", "Engine"), new Vector2(5, 5), new Vector2(-100, -100), data));
		}
	}
	const update = () => {
		if (this.cursor.type == "rectangle" && engineSettings.Debug.Show_Debug_Cursor) {
			this.cursor.base.color.alpha = 1;
			if (mouseData().b0 && !mouseData().b1 && !mouseData().b2) {
				this.cursor.base.color = new colorData("green");
			}
			if (mouseData().b1 && !mouseData().b0 && !mouseData().b2) {
				this.cursor.base.color = new colorData("yellow");
			}
			if (mouseData().b2 && !mouseData().b0 && !mouseData().b1) {
				this.cursor.base.color = new colorData("orange");
			}
			if (!mouseData().b0 && !mouseData().b1 && !mouseData().b2) {
				this.cursor.base.color = new colorData("red");
			}
		}
		if (this.cursor.type == "rectangle" && !engineSettings.Debug.Show_Debug_Cursor) {
			this.cursor.base.color.alpha = 0; 
		}
		if (getByNameTag(this.cursor.base.nameTag) != null) {
			this.cursor.base.position = mouseData().pos.addV(this.offset);
		} else {
			addObject(this.cursor);
		}
		if (!layer[8][layer[8].length-1].base.nameTag.same(this.cursor.base.nameTag)) {
			let index = getByNameTag(this.cursor.base.nameTag, 0, true);
			layer[8].push(layer[8].splice(index, 1)[0]);
			loaded = false;
		}
	}
	addUpdate(update, "cursor");
}

//Mouse
let mousePos = new Vector2();
let mousePressed = [false,false,false];
let mouseWheel = 0;

function mouseData() {
	return {"pos":new Vector2((mousePos.x/screen.getScale().x), (mousePos.y/screen.getScale().y)), "b0":mousePressed[0], "b1":mousePressed[1], "b2":mousePressed[2], "wheel":mouseWheel};
};

window.addEventListener("mousemove", function(event) {
	mousePos = new Vector2(event.clientX, event.clientY);
});

window.addEventListener("dblclick", function(event) {
	event.preventDefault();
});

window.addEventListener("wheel", (e) => {
	mouseWheel = e.deltaY;
});

document.body.style.userSelect = "none";

window.onmousedown = function(event){
	switch(event.button) {
		case 0:
			mousePressed[0] = true;
		break;
		case 1:
			mousePressed[1] = true;
			event.preventDefault();
		break;
		case 2:
			mousePressed[2] = true;
			event.preventDefault();
		break;
	}
}

window.addEventListener("contextmenu", function(e){
	e.preventDefault();
}, false);

window.onmouseup = function(event){
	switch(event.button) {
		case 0:
			mousePressed[0] = false;
		break;
		case 1:
			mousePressed[1] = false;
		break;
		case 2:
			mousePressed[2] = false;
		break;
	}
}

//Touch
window.addEventListener("touchstart", function(event) {
	mousePressed[0] = true;
	mousePos = new Vector2(event.touches[0].clientX, event.touches[0].clientY);
});

window.addEventListener("touchend", function(event) {
	mousePressed[0] = false;
});

window.addEventListener("touchmove", function(event) {
	mousePos = new Vector2(event.touches[0].clientX, event.touches[0].clientY);
});

if (typeof require != "undefined") {
	const { existsSync } = require('fs');

	function checkDirectory(path) {
		if (existsSync(path)) {
			return true;
		} else {
			return false;
		}
	}
}

function getExtension(filePath) {
    return filePath.split('.').pop();
}

//Server
if (typeof require != "undefined") {
	const { Server } = require("socket.io");
	let gameServer = null;

	function startServer(port=3000) {
		gameServer = new Server(port);
		gameServer.on('connection', (socket) => {
		  console.log('a user connected');
		});
	}
}

//Client
let socket = null;

function connect(ip="localhost", port="3000") {
	socket = io("ws://"+ip+":"+port);
}