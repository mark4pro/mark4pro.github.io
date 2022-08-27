/**
Homeworld.js by: James Richard
**/

/**
TODO:
	Overhaul object creator/code clean up
	Add better canvas control along with non full screen
	Add mod loader
	Add mouse scroll
	Add controller input
	*Add component2d
	Add array object mover
	Add collisions and physics
	Add mode: "2D"|"3D"
	Add button manager
	Add loading screen
	Add save/load data
	Add gamejolt/newgrounds/itch.io support
**/

/**
Log color code:
Warnings: Yellow
Confirms: Green
Info:     Blue
**/

//Radians to Degrees
function radToDeg(rad=0) {
	return rad*(180/Math.PI);
}
//Degrees to Radians
function degToRad(deg=0) {
	return deg/(180/Math.PI);
}
//Helper function for random ints same as range just with less steps
function rangeInt(min=0, max=1) {
	return range(min, max, 0, false);
}
//Helper function for random floats same as range just with less steps
function rangeFloat(min=0, max=1, dec_place=1) {
	return range(min, max, dec_place);
}
//Returns a random number between min and max
function range(min=0, max=1, dec_place=1, is_float=true) {
	let result = 0;
	let factor = Math.pow(10, dec_place);
	if (is_float) {
		result = Math.random()*(max-min)+min;
	} else {
		result = Math.round(Math.random()*(max-min)+min);
	}
	return Math.round(result*factor)/factor;
}

//Converts string to bool
function stringToBool(string="true") {
	switch(string.toLowerCase().trim()){
		case "true":
			return true;
		break;
		case "false":
			return false;
		break;
		default:
			return null;
			if (!release) {
				console.log("%cWARNING: "+string+" isn't true or false!", "color:yellow");
			}
		break;
	}
}

//Get the length of a number
function numberLength(num=0) {
	let result = num;
	return result.toString().length;
}

//Get number in number place
function numberPlace(num=0, place=0, amount=0) {
	let number = num;
	let num_string = number.toString();
	let real_place = place-1;
	let real_amount = amount+place;
	let num_range = num_string.substring(real_place, real_amount);
	let result = parseInt(num_range);
	return result;
}

//Checks if an array has everything from another
function arrayCompare(arr=[], target=[], all=true) {
	if (all) {
		return target.every(function(item) {
			return arr.includes(item);
		});
	} else {
		return target.some(function(item) {
			return arr.includes(item);
		});
	}
}

//Vector2
const ZERO = new Vector2(0, 0);
const ONE = new Vector2(1, 1);
const UP = new Vector2(0, -1);
const UP_LEFT = new Vector2(-1, -1);
const UP_RIGHT = new Vector2(1, -1);
const DOWN = new Vector2(0, 1);
const DOWN_LEFT = new Vector2(-1, 1);
const DOWN_RIGHT = new Vector2(1, 1);
const LEFT = new Vector2(-1, 0);
const RIGHT = new Vector2(1, 0);
function Vector2(x=0, y=0) {
	this.x = x;
	this.y = y;
	//Rotate point by this vector
	this.rotateVector2 = function(vector2, rotation) {
		return new Vector2(Math.cos(rotation)*(vector2.x-this.x)-Math.sin(rotation)*(vector2.y-this.y)+this.x, Math.sin(rotation)*(vector2.x-this.x)+Math.cos(rotation)*(vector2.y-this.y)+this.y);
	};
	//Set vector
	this.set = function(vector2) {
		this.x = vector2.x;
		this.y = vector2.y;
	};
	//Compare vectors
	this.same = function(vector2=ZERO) {
		let result = false;
		if (this.x == vector2.x && this.y == vector2.y) {
			result = true;
		}
		return result;
	};
	//Get rotation between 2 vectors
	this.getRotation = function(vector2, rad=true) {
		this.vector2 = vector2;
		if (rad) {
			return Math.atan2(-this.y+this.vector2.y, -this.x+this.vector2.x)+deg_to_rad(90);
		} else {
			return rad_to_deg(Math.atan2(-this.y+this.vector2.y, -this.x+this.vector2.x)-deg_to_rad(90));
		}
	}
	//Simple math
	this.add = function(num) {
		return new Vector2(this.x+num, this.y+num);
	};
	this.addV = function(vector2) {
		return new Vector2(this.x+vector2.x, this.y+vector2.y);
	};
	this.sub = function(num) {
		return new Vector2(this.x-num, this.y-num);
	};
	this.subV = function(vector2) {
		return new Vector2(this.x-vector2.x, this.y-vector2.y);
	};
	this.neg = function(place="x") { //"x" or "y"
		if (place == "x") {
			return new Vector2(-this.x, this.y);
		}
		if (place == "y") {
			return new Vector2(this.x, -this.y);
		}
	}; 
	this.multi = function(num) {
		return new Vector2(this.x*num, this.y*num);
	};
	this.multiV = function(vector2) {
		return new Vector2(this.x*vector2.x, this.y*vector2.y);
	};
	this.div = function(num) {
		if (num == 0) {
			num == 1;
		}
		return new Vector2(this.x/num, this.y/num);
	};
	this.divV = function(vector2) {
		if (vector2.x == 0) {
			vector2.x == 1;
		}
		if (vector2.y == 0) {
			vector2.y == 1;
		}
		return new Vector2(this.x/vector2.x, this.y/vector2.y);
	};
	this.min = function(vector2) {
		return new Vector2(Math.min(this.x, vector2.x), Math.min(this.y, vector2.y));
	};
	this.max = function(vector2) {
		return new Vector2(Math.max(this.x, vector2.x), Math.max(this.y, vector2.y));
	};
	this.distance = function(vector2) {
		return new Vector2(this.x-vector2.x,this.y-vector2.y);
	};
	//Advanced math
	this.mag = function() {
		return Math.sqrt(this.x**2+this.y**2);
	};
	this.unit = function() {
		if (this.mag() == 0) {
			return new Vector2();
		}
		return new Vector2(this.x/this.mag(), this.y/this.mag());
	};
	this.normal = function() {
		return new Vector2(-this.y, this.x).unit();
	};
	this.dot = function(vector2) {
		return this.x*vector2.x+this.y*vector2.y;
	};
	this.cross = function(vector2, x_or_y=0) {
		switch (x_or_y) {
			case 0:
				return this.x*vector2.y-this.y*vector2.x;
			break;
			case 1:
				return new Vector2(vector2*this.y, -vector2*this.x);
			break;
			case 2:
				return new Vector2(-vector2*this.y, vector2*this.x);
			break;
			default:
				return this.x*vector2.y-this.y*vector2.x;
			break;
		}
	};
}

function canvasData(id="canvas",resolution=new Vector2(800,400),color="blue",mode=0) {
	this.id = id;
    this.resolution = resolution;
	this.color = color;
    this.renderMode = {
		0:"pixelated",
		1:"crisp-edges"
	};
	this.mode = this.renderMode[mode];
}

function CanvasObject(data=new canvasData()) {
    document.documentElement.style.overflow = "hidden";
    this.canvas = document.createElement("canvas")
    this.canvas.id = data.id;
    this.resolution = data.resolution;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.marginLeft = "0px";
    this.canvas.style.marginRight = "0px";
    this.canvas.style.display = "block";
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0px";
    this.canvas.style.left = "0px";
    this.canvas.style.backgroundColor = data.color;
    this.setColor = function(color="blue") {
        this.canvas.style.backgroundColor = color;
    }
    this.canvas.style.imageRendering = data.mode;
    this.setRenderMode = function(mode=0) {
        this.canvas.style.imageRendering = canvasData.renderMode[mode];
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
    window.addEventListener("resize", this.scale);
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
        let scale = new Vector2(deviceResolution.x/this.resolution.x,deviceResolution.y/this.resolution.y);
        scaleFactor = scale;
        canvas.width = deviceResolution.x;
        canvas.height = deviceResolution.y;
        this.ctx.setTransform(scale.x,0,0,scale.y,0,0);
    }
    this.scale();
}

function EngineData(canvas=new canvasData(), release=false, updateSpeed=0) {
	this.canvasData = canvas;
	this.release = release;
	this.updateSpeed = updateSpeed;
}

const engine = new Engine();

function Engine(eData=new EngineData()) {
	let data = eData;
	this.setData = function(eData=new EngineData()) {
		data = eData=new EngineData();
	};
    let release = data.release;
    let updateSpeed = data.updateSpeed;
    let canvas = new CanvasObject(data.canvasData);
    this.getCanvas = function() {
        return canvas;
    };
    //this.load_keys();
	//window.addEventListener("keydown", this.keyDown);	
	//window.addEventListener("keyup", this.keyUp);
	this.updateInterval = setInterval(this.updateLoop, 1000/updateSpeed);
	this.rendererInterval = setInterval(this.renderer, 1000/updateSpeed);
	//Game vars
	let game = {
		"pause":false,
		"level":1
	};
	//Pause/Unpause game/engine
	this.pause = function() {
		game.pause = !game.pause;
	};
	//Get paused
	this.isPaused = function() {
		return game.pause;
	};
	this.getLevel = function() {
		return game.level;
	};
	this.nextLevel = function() {
		game.level++;
	}
	this.previousLevel = function() {
		game.level--;
	}
	this.goToLevel = function(level=1) {
		game.level = level;
	}
	//Settings
	let settings = {
		"shadows":true,
		"imageSmoothing":false,
		"showCursorDebug":false
	};
	this.allowShadows = function(bool=null) {
		if (bool != null) {
			settings.shadows = bool;
		} else {
			return settings.shadows;
		}
	};
	this.imageSmoothing = function(bool=null) {
		if (bool != null) {
			settings.imageSmoothing = bool;
		} else {
			return settings.imageSmoothing;
		}
	};
	this.debugCursor = function(bool=null) {
		if (bool != null) {
			settings.showCursorDebug = bool;
		} else {
			return settings.showCursorDebug;
		}
	};
	//Adds image resources to webpage
	this.addImage = function(path,id) {
		let img = document.createElement("img");
		img.style.display = "none";
		img.id = id;
		img.src = path;
		document.getElementsByTagName("head")[0].appendChild(img);
	};
	//Adds audio resources to webpage
	this.addAudio = function(path,id) {
		let audio = document.createElement("audio");
		audio.autoplay = false;
		audio.controls = false;
		audio.id = id;
		audio.src = path;
		document.getElementsByTagName("head")[0].appendChild(audio);
	};
	//Adds script resources to webpage
	this.addScript = function(path,id) {
		let script = document.createElement("script");
		script.id = id;
		script.src = path;
		document.getElementsByTagName("head")[0].appendChild(script);
	};
    //Controls
	//Mouse
    let mousePos = new Vector2();
	let mousePressed = [false,false,false];
	this.getMouse = function() {
		return {"pos":new Vector2(mousePos.x/local_scale_native_res.width, mousePos.y/local_scale_native_res.height),"b0":mousePressed[0],"b1":mousePressed[1],"b2":mousePressed[2]};
	};
	window.addEventListener("mousemove", function(event) {
		mousePos = new Vector2(event.clientX, event.clientY);
	});
	window.onmousedown = function(event){
		switch(event.button) {
			case 0:
				mousePressed[0] = true;
			break;
			case 1:
				mousePressed[1] = true;
			break;
			case 2:
				mousePressed[2] = true;
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
		mousePos = {"x":event.touches[0].clientX,"y":event.touches[0].clientY};
	});
	window.addEventListener("touchend", function(event) {
		mousePressed[0] = false;
	});
	window.addEventListener("touchmove", function(event) {
		mousePos = {"x":event.touches[0].clientX,"y":event.touches[0].clientY};
	});
    //Save data
	this.save_data = function(id, data) {
		localStorage.setItem(id, JSON.stringify(data));
		if (!release) {
			console.log("%cSaved data: "+this.id+" Data: "+JSON.stringify(data)+"!", "color:green");
		}
	};
	//Load data
	this.load_data = function(id) {
		if (localStorage.getItem(id) != null) {
			if (!release) {
				console.log("%cId: "+id+" loaded!", "color:green");
			}
			return JSON.parse(localStorage.getItem(id));
		} else {
			if (!release) {
				console.log("%cId: "+id+" using default value!", "color:green");
			}
		}
	};
	//Renderer
	let loaded = false;
	this.refreshRenderer = function() {
		loaded = false;
	};
	let objectArray = [];
	this.getObjectArray = function() {
		return objectArray;
	};
	let layer = {
		1:[],
		2:[],
		3:[],
		4:[],
		5:[],
		6:[],
		7:[],
		8:[]
	};
	this.getLayer = function(layerNumber=1) {
		if (layerNumber < 1) {
			layerNumber = 1;
		}
		if (layerNumber > 8) {
			layerNumber = 8;
		}
		return layer[layerNumber];
	};
	this.addToLayer = function(layerNumber=1, object=null, mode=0, identifier=null, value=null) {
		if (object == null) {
			console.log("%cWARNING: Object is null and can't be added!","color:yellow");
			return;
		}
		let layerData = this.getLayer(layerNumber);
		let hasBase = false;
		if (object.base != undefined) {
			hasBase = true;
		}
		if (mode < 0) {
			mode = 0;
		}
		if (mode > 5) {
			mode = 5;
		}
		switch (mode) {
			//Mode 0 | Identifier states: 0- End, 1- Beginning | Value: None/null
			case 0:
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 1) {
					identifier = 1;
				}
				switch (identifier) {
					case 0:
						layerData.push(object);
					break;
					case 1:
						layerData.unshift(object);
					break;
				}
			break;
			//Mode 1 | Identifier states: 0- Behind pos, 1- In front pos, 2- Replace pos | Value: Position in array
			case 1:
				if (value == null) {
					if (hasBase) {
						console.log("%cWARNING: Object: "+object.base.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					} else {
						console.log("%cWARNING: Object: "+object.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					}
					return;
				}
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 2) {
					identifier = 1;
				}
				if (value < 0) {
					value = 0;
				}
				if (value > layerData.length-1) {
					value = layerData.length-1;
				}
				switch (identifier) {
					case 0:

					break;
					case 1:

					break;
					case 2:

					break;
				}
			break;
			//Mode 2 | Identifier states: 0- Behind tag, 1- In front tag, 2- Replace tag | Value: Objects nameTag.tag (String)
			case 2:
				if (value == null) {
					if (hasBase) {
						console.log("%cWARNING: Object: "+object.base.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					} else {
						console.log("%cWARNING: Object: "+object.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					}
					return;
				}
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 2) {
					identifier = 1;
				}
				switch (identifier) {
					case 0:

					break;
					case 1:

					break;
					case 2:

					break;
				}
			break;
			//Mode 3 | Identifier states: 0- Behind name, 1- In front name, 2- Replace name | Value: Objects nameTag.name (String)
			case 3:
				if (value == null) {
					if (hasBase) {
						console.log("%cWARNING: Object: "+object.base.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					} else {
						console.log("%cWARNING: Object: "+object.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					}
					return;
				}
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 2) {
					identifier = 1;
				}
				switch (identifier) {
					case 0:

					break;
					case 1:

					break;
					case 2:

					break;
				}
			break;
			//Mode 4 | Identifier states: 0- Behind nameTag, 1- In front nameTag, 2- Replace nameTag | Value: Object nameTag
			case 4:
				if (value == null) {
					if (hasBase) {
						console.log("%cWARNING: Object: "+object.base.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					} else {
						console.log("%cWARNING: Object: "+object.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					}
					return;
				}
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 2) {
					identifier = 1;
				}
				switch (identifier) {
					case 0:

					break;
					case 1:

					break;
					case 2:

					break;
				}
			break;
			//Mode 5 | Identifier states: 0- Behind group, 1- In front group, 2- Replace group | Value: Group nameTag
			case 5:
				if (value == null) {
					if (hasBase) {
						console.log("%cWARNING: Object: "+object.base.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					} else {
						console.log("%cWARNING: Object: "+object.nameTag.name.toUpperCase()+" can't be added because value is null!","color:yellow");
					}
					return;
				}
				if (identifier < 0) {
					identifier = 0;
				}
				if (identifier > 2) {
					identifier = 1;
				}
				switch (identifier) {
					case 0:

					break;
					case 1:

					break;
					case 2:

					break;
				}
			break;
		}
	};
	//FPS
	let FPS = {
		fps:0,
		startTime:0,
		frameNumber:0,
		updateFPS:function(){
			this.frameNumber++;
			let d = new Date().getTime(),
			currentTime = ((d-this.startTime)/60),
			result = Math.floor(this.frameNumber/currentTime);
				if(currentTime > 1){
					this.startTime = new Date().getTime();
					this.frameNumber = 0;
				}
			if (updateSpeed <= 4) {
				this.fps = (result*4);
			} else {
				this.fps = (result*updateSpeed);
			}
		}
	};
	this.getFPS = function() {
		return FPS.fps;
	};
    //Update loop
    const updateArray = [];
    this.addUpdate = function(func, id) {
        updateArray.push({"function":func,"id":id});
    };
    this.deleteUpdate = function(id) {
        updateArray.forEach((u, i) => {if (u.id == id) {updateArray.splice(i,1);}});
    };
	this.getUpdate = function(id) {
		updateArray.forEach((u, i) => {if (u.id == id) {return u}});
	};
    let delta = 0;
    this.getDelta = function() {
        return delta;
    };
    let last_update = Date.now();
    this.updateLoop = function() {
        let now = Date.now();
        delta = now-lastUpdate;
        lastUpdate = now;
		FPS.updateFPS();
		if (!loaded) {
			objectArray = layer[1].concat(layer[2], layer[3], layer[4], layer[5], layer[6], layer[7], layer[8]);
			loaded = true;
		}
        updateArray.forEach((u) => {
            if (typeof u.function == "function") {
                u.function();
            } else {
                eval(u.function)();
            }
        });
    };
}

//Rendering Classes
//Shadow data
const NO_SHADOW = new Shadow();
const DEFAULT_SHADOW = new Shadow(ZERO, "black", 5);
function Shadow(offset=ZERO, color="", blur=0) {
	this.offset = offset;
	this.color = color;
	this.blur = blur;
}

//Color data
const NO_COLOR = new Color("");
const DEFAULT_COLOR = new Color();
function Color(color="black", alpha=1, comp=0) {
	this.color = color;
	this.alpha = alpha;
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

//NameTag
function nameTag(name="",tag="") {
	this.name = name;
	this.tag = tag;
	this.same = function(nameTag=new nameTag(), mode=0) {
		if (mode < 0) {
			mode = 0;
		}
		if (mode > 2) {
			mode = 2
		}
		switch (mode) {
			case 0:
				return (this.name == nameTag.name && this.tag == nameTag.tag);
			break;
			case 1:
				return (this.name == nameTag.name);
			break;
			case 2:
				return (this.tag == nameTag.tag);
			break;
		}
	};
}

//Base for objects
const EMPTY_OBJECT = new baseObject();
function baseObject(nameTag=new nameTag(), size=ZERO, position=ZERO, rotation=0, color=DEFAULT_COLOR, shadow=NO_SHADOW) {
	this.nameTag = nameTag;
	this.size = size;
	this.position = position;
	this.rotation = rotation;
	this.color = color;
	this.shadow = shadow;
}

function setupObject(base=EMPTY_OBJECT) {
	ctx.globalAlpha = base.color.alpha;
	ctx.globalCompositeOperation = base.color.comp;
	if (engine.allowShadows) {
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
}

function lineData(cap=0, width=1, dashOffset=0) {
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
	this.cap = caps[cap];
	this.width = width;
	this.dashOffset = dashOffset;
}

//Template for objects
function rectangle(base=EMPTY_OBJECT) {
	this.type = "rec";
	this.base = base;
	this.points = [];
	this.draw = function() {
		setupObject(this.base);
		this.points = [
			this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot),
			this.pos.rotate_vector2(new Vector2(this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot),
			this.pos.rotate_vector2(new Vector2(this.size.x/2+this.pos.x, this.size.y/2+this.pos.y), this.rot),
			this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, this.size.y/2+this.pos.y), this.rot),
			this.pos.rotate_vector2(new Vector2(-this.size.x/2+this.pos.x, -this.size.y/2+this.pos.y), this.rot)];
	}
}
