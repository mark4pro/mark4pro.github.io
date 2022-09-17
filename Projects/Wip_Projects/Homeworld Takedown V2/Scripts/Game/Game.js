//Canvas resizer
var scaleFillNativeWidth;
var scaleFillNativeHeight;
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
function resizeHandler() {
var setup = false;
if (!setup) {
window.addEventListener("resize", resizeHandler);
setup = true;
}
var nativeWidth = 800; 
var nativeHeight = 500;
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
scaleFillNativeWidth = deviceWidth / nativeWidth;
scaleFillNativeHeight = deviceHeight / nativeHeight;
canvas.width = deviceWidth;
canvas.height = deviceHeight;
ctx.setTransform(scaleFillNativeWidth,0,0,scaleFillNativeHeight,0,0);
console.log("nativeWidth: "+nativeWidth+" nativeHeight: "+nativeHeight+" deviceWidth: "+deviceWidth+" deviceHeight: "+deviceHeight);
}

//Stop defaults
var keys_ = {};
window.addEventListener("keydown",
    function(e){
        keys_[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys_[e.keyCode] = false;
    },
false);

//Updates positions
function updatePos(target, obj) {
this.target = target;
this.obj = obj;
	this.update = function() {
		if (obj instanceof Array) {
		target.x = obj[0];
		target.y = obj[1];
		} else {
		target.x = obj.x;
		target.y = obj.y;
		}
	}
}

//Mouse related functions
//Gets mouse rotation
function getMouseRotation(target, obj) {
this.target = target;
this.obj = obj;
return Math.atan2(-this.target.y + this.obj.y, -this.target.x + this.obj.x)+1.57079633;
}
//Gets mouse info for the cursor
function getMouseInfo(data, XorY) {
this.data = data;
this.XorY = XorY;
	switch (this.XorY) {
	case "x": 
	return (this.data/scaleFillNativeWidth);
	break;
	case "y": 
	return (this.data/scaleFillNativeHeight);
	break;
	}
}
//Mouse/Touch
var pressed = false;
var mousePos = [];
window.addEventListener("mousemove", function(event) {
mousePos[0] = getMouseInfo(event.clientX, "x");
mousePos[1] = getMouseInfo(event.clientY, "y");
});
document.onmousedown = function(event){
mouse_button = event.button;
	if (event.button === 0) {
	pressed = true;
	}
}
document.addEventListener("contextmenu", function(e){
e.preventDefault();
}, false);
document.onmouseup = function(event){
mouse_button = event.button;
	if (event.button === 0) {
	pressed = false;
	}
}
window.addEventListener("touchstart", function(event) {
pressed = true;
mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
});
window.addEventListener("touchend", function(event) {
pressed = false;
});
window.addEventListener("touchmove", function(event) {
mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
});

//UI button manager
var buttonManagers = [];
function buttonManager(target, code) {
this.target = target;
this.code = code;
	this.update = function() {
		if (pressed && settingsState != 1) {
			if (this.target.crashWith(cursor)) {
			eval(this.code);
			buttonSelectTrack.play();
			}
		}
	}
}

//Scene Transition
var sceneTransition = false;
var sceneTime = 0;
function resetScene(maxTime) {
this.maxTime = maxTime;
	if (sceneTransition) {
	sceneTime++;
		if (sceneTime >= this.maxTime) {
		sceneTransition = false;
		}
	} else {
	sceneTime = 0;
	}
}

//FPS
var fpsShow = true;
var fps = {	
startTime : 0,	
frameNumber : 0,	
	getFPS : function(){		
	this.frameNumber++;		
	var d = new Date().getTime(),currentTime = (d-this.startTime)/600,result = Math.floor(this.frameNumber/currentTime);		
		if( currentTime > 1 ){			
		this.startTime = new Date().getTime();			
		this.frameNumber = 0;		
		}		
	return result;	
	}	
};

//String to boolean
function convertString(word) {
    switch(word.toLowerCase().trim()){
        case "true": return true;
        case "false": return false;
        default: return Boolean(word);
    }
}

//Settings functions
//Settings init
function settingsInit() {
musicVolume = new settingMaker(["musicVolume"]);
settings.push(musicVolume);
soundVolume = new settingMaker(["soundVolume"]);
settings.push(soundVolume);
mute_SHOOTING = new settingMaker(["mute_SHOOTING"]);
settings.push(mute_SHOOTING);
mute_LOW_AMMO = new settingMaker(["mute_LOW_AMMO"]);
settings.push(mute_LOW_AMMO);
mute_EXPLOSION = new settingMaker(["mute_EXPLOSION"]);
settings.push(mute_EXPLOSION);
mute_All_Sound = new settingMaker(["mute"]);
settings.push(mute_All_Sound);
imageSmooth = new settingMaker(["imageSmooth"]);
settings.push(imageSmooth);
healthBars = new settingMaker(["healthBars"]);
settings.push(healthBars);
showFPSCounter = new settingMaker(["showFPSCounter"]);
settings.push(showFPSCounter);
controlSelector = new settingMaker(["Keyboard", "Mobile", "Controller"]);
settings.push(controlSelector);
difficultySelector = new settingMaker(["Easy_", "Medium_", "Hard_"]);
settings.push(difficultySelector);
}
//Multi checkbox setup
document.getElementById('Keyboard').onfocus = function() { 
document.getElementById('Mobile').checked = false;
document.getElementById('Controller').checked = false;
}
document.getElementById('Mobile').onfocus = function() { 
document.getElementById('Keyboard').checked = false;
document.getElementById('Controller').checked = false;
}
document.getElementById('Controller').onfocus = function() { 
document.getElementById('Keyboard').checked = false;
document.getElementById('Mobile').checked = false;
}
document.getElementById('Easy_').onfocus = function() { 
document.getElementById('Medium_').checked = false;
document.getElementById('Hard_').checked = false;
}
document.getElementById('Medium_').onfocus = function() { 
document.getElementById('Easy_').checked = false;
document.getElementById('Hard_').checked = false;
}
document.getElementById('Hard_').onfocus = function() { 
document.getElementById('Easy_').checked = false;
document.getElementById('Medium_').checked = false;
}
//Settings maker
var settings = [];
function settingMaker(name) {
this.name = name;
this.loading = true;
this.i = 0;
	this.save = function() {
		for (let i=0;i<this.name.length;i++) {
			if (document.getElementById(this.name[i]).type == "checkbox") {
			localStorage.setItem(this.name[i], document.getElementById(this.name[i]).checked);
			}
			if (document.getElementById(this.name[i]).type == "range") {
			localStorage.setItem(this.name[i], document.getElementById(this.name[i]).value);
			}
			console.log("saved");
		}
	}
	this.load = function() {
		while (this.loading) {
			if (localStorage.getItem(this.name[this.i]) != null) {
				if (document.getElementById(this.name[this.i]).type == "checkbox") {
				document.getElementById(this.name[this.i]).checked = convertString(localStorage.getItem(this.name[this.i]));
					if (this.i >= this.name.length) {
					this.loading = false;
					}
				}
				if (document.getElementById(this.name[this.i]).type == "range") {
				document.getElementById(this.name[this.i]).value = localStorage.getItem(this.name[this.i]);
					if (this.i >= this.name.length) {
					this.loading = false;
					}
				}
				console.log("loaded");
			} else {
				if (this.i >= this.name.length) {
				this.loading = false;
				}
			}
			if (this.i < this.name.length) {
			this.i++;
			}
		}
	}
}
//Settings saver
function saveSettings(name) {
this.name = name;
	for (let i=0;i<settings.length;i++) {
		if (settings[i].name == this.name && this.name != "all") {
		settings[i].save();
		}
		if (this.name == "all") {
		settings[i].save();
		}
	}
}
//Settings loader
function loadSettings() {
settingsInit();
	for (let i=0;i<settings.length;i++) {
		settings[i].load();
	}
}

//Joystick functions
//Joystick vars
var joystickOptions_1 = {
	zone: document.getElementById("moveJoystick"),
	mode: 'static',
	color: 'black',
	identifier: 0,
	threshold: 0.2,
	size: 100,
	restOpacity: 1,
	position: {
		bottom: "0",
		left: "0"
	}
};
var joystickOptions_2 = {
	zone: document.getElementById("shootJoystick"),
	mode: 'static',
	color: 'black',
	identifier: 0,
	threshold: 0.2,
	size: 100,
	restOpacity: 1,
	position: {
		bottom: "0",
		right: "0"
	}
};
var joystickMoveAngle = 0;
var joystickCanFire = false;
var joystickShootAngle = 0;
//Joystick init
function joystickInit() {
joystick_1 = nipplejs.create(joystickOptions_1);
joystick_2 = nipplejs.create(joystickOptions_2);
}
//Joystick main function
function joystick() {
if (player1Controller.onMobile == true) {
joystickOptions_1.zone.style.visibility = "visible";
joystickOptions_1.zone.style.opacity = 1;
joystickOptions_2.zone.style.visibility = "visible";
joystickOptions_2.zone.style.opacity = 1;
	joystick_1[0].on('start', function(evt, data) {
	player1Controller.moving = true;
	}).on('end', function(evt, data) {
	player1Controller.moving = false;
	}).on('move', function(evt, data) {
		if (data.angle.radian != NaN) {
		joystickMoveAngle = -data.angle.radian-4.71238898;
		}
	});
	joystick_2[0].on('start', function(evt, data) {
	joystickCanFire = true;
	}).on('end', function(evt, data) {
	joystickCanFire = false;
	}).on('move', function(evt, data) {
		if (data.angle.radian != NaN) {
		joystickShootAngle = -data.angle.radian-4.71238898;
		}
	});
}
if (player1Controller.onMobile == false) {
joystickOptions_1.zone.style.visibility = "hidden";
joystickOptions_1.zone.style.opacity = 0;
joystickOptions_2.zone.style.visibility = "hidden";
joystickOptions_2.zone.style.opacity = 0;
}
}

//Controller functions
var gamepads = [];
var controllerButtons = [];
var controllerMoveAngle = [];
var controllerShootAngle = [];
var controllerDeadZone = 0.5;
var hideCursor = 0;
//Dead zone checker
function checkDeadZone(value) {
this.value = value;
	if (Math.abs(this.value) < controllerDeadZone) {
	this.value = 0;
	} else {
	this.value = this.value - Math.sign(this.value) * controllerDeadZone;
	this.value /= (1.0 - controllerDeadZone);
	}
	return this.value;
}
//Clamper
function clamp(x, y) {
	var m = Math.sqrt(x*x + y*y);
	if (m > 1) {
	x /= m;
	y /= m;
	}
	return [x, y];
}
//Controller buttons init
function controllerButtonInit() {
controllerStart = new controllerButtonMaker(player1Controller, 9, "if (!unlockControls) {settingsState++}", "");
controllerButtons.push(controllerStart);
controllerL1 = new controllerButtonMaker(player1Controller, 4, "hideCursor++", "");
controllerButtons.push(controllerL1);
}
//Controller button maker
function controllerButtonMaker(playerController, buttonNumber, downCode, upCode) {
this.playerController = playerController;
this.buttonNumber = buttonNumber;
this.downCode = downCode;
this.upCode = upCode;
this.lock = false;
	this.update = function() {
		if (gamepads[this.playerController.controller] != undefined && this.playerController.controlMethod == "controller") {
			if (gamepads[this.playerController.controller].buttons[this.buttonNumber].pressed && !this.lock) {
			eval(this.downCode);
			this.lock = true;
			}
			if (!gamepads[this.playerController.controller].buttons[this.buttonNumber].pressed && this.lock) {
			eval(this.upCode);
			this.lock = false;
			}
		}
	}
}
//Controller counter
let numberOfGamepads = (function() {
	return function () {
	let count = 0;
		for (let i=0;i<gamepads.length;i++) {
		let g = gamepads[i];
			if (g && g.connected) {
			count++;
			}
		}
	return count;
	}
}());
//Controller update loop
function controllerUpdate() {
gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	for (let i=0;i<gamepads.length;i++) {
		if (gamepads[i] != undefined) {
			//Axes control
			if (checkDeadZone(gamepads[i].axes[0].toFixed(2)) == 0 && checkDeadZone(gamepads[i].axes[1].toFixed(2)) == 0) {
			controllerMoveAngle[i] = 0;	
			} else {
			controllerMoveAngle[i] = Math.atan2(0 + clamp(gamepads[i].axes[0], gamepads[i].axes[1])[1], 0 + clamp(gamepads[i].axes[0], gamepads[i].axes[1])[0])+1.57079633;
			}
			if (checkDeadZone(gamepads[i].axes[2].toFixed(2)) == 0 && checkDeadZone(gamepads[i].axes[3].toFixed(2)) == 0) {
			controllerShootAngle[i] = 0;	
			} else {
			controllerShootAngle[i] = Math.atan2(0 + clamp(gamepads[i].axes[2], gamepads[i].axes[3])[1], 0 + clamp(gamepads[i].axes[2], gamepads[i].axes[3])[0])+1.57079633;
			}
			//Buttons control
			for (let j=0;j<controllerButtons.length;j++) {
			controllerButtons[j].update();
			}
		}
	}
} 

//Main vars 
var debug = true;
var testAI_Debug = true;
var collisionMapper_Debug = false;
var enemyHealthBars = true;
var difficulty = 0;
var wave = 0;
var pause = false;

//Renderer
var collisionLayer = [];
var backgroundLayer = [];
var lowerObjectLayer = [];
var playerEnemySpawnLayer = [];
var upperObjectLayer = [];
var wallLayer = [];
var aboveWallLayer = [];
var uiLayer = [];
var mainObjectArray = [];
//Resets the main render array
function resetObjectArrays() {
collisionLayer = [];
backgroundLayer = [];
lowerObjectLayer = [];
playerEnemySpawnLayer = [];
upperObjectLayer = [];
wallLayer = [];
aboveWallLayer = [];
uiLayer = [];
}
//Main renderer
function renderer() {
	for (let i=0;i<mainObjectArray.length;i++) {
		if (mainObjectArray[i].waveNumber == "all") {
			if (mainObjectArray[i].alive) {
			mainObjectArray[i].update();
			}
			if (!pause && settingsState != 1) {
			mainObjectArray[i].newPos();
			}
		}
		if (wave >= mainObjectArray[i].waveNumber[0] && wave <= mainObjectArray[i].waveNumber[1]) {
			if (mainObjectArray[i].alive) {
			mainObjectArray[i].update();
			}
			if (!pause && settingsState != 1) {
			mainObjectArray[i].newPos();
			}
		}
		if (mainObjectArray[i].waveNumber[0] == "all" && wave != mainObjectArray[i].waveNumber[1]) {
			if (mainObjectArray[i].alive) {
			mainObjectArray[i].update();
			}
			if (!pause && settingsState != 1) {
			mainObjectArray[i].newPos();
			}
		}
	}
}

//Start
function start() {
loadSettings();
keyLoader();
joystickInit();
shipInit();
weaponInit();
//Bottom
//Start screen
startScreen = new component([0,0], 800, 500, "startScreen", 400, 250, "img", 1, "", "", "", "");
backgroundLayer.push(startScreen);
//Backgrounds and lower level objects
//Warp zone
warpZoneBackground = new component([22,22], 800, 390, "warpZoneBackground", 400, 195, "img", 1, "", "", "", "");
backgroundLayer.push(warpZoneBackground);
earthPlanet = new component([22,22], 142, 142, "earth", 400, 195, "img", 1, "black", 10, 5, 5);
lowerObjectLayer.push(earthPlanet);
//Waves 1-4
wave1_4Background = new component([1,4], 800, 390, "wave1-5Background", 400, 195, "img", 1, "", "", "", "");
backgroundLayer.push(wave1_4Background);
platform = new component([1,4], 75, 75, "platform", 395, 200, "img", 1, "black", 10, 2, 2);
lowerObjectLayer.push(platform);
house1Floor = new component([1,4], 120, 120, "houseFloor1Img", 130, 140, "img", 1, "", "", "", "");
lowerObjectLayer.push(house1Floor);
house2Floor = new component([1,4], 200, 120, "houseFloor2Img", 600, 150, "img", 1, "", "", "", "");
lowerObjectLayer.push(house2Floor);
//Waves 5-7
wave5_7Background = new component([5,7], 800, 390, "wave5-7Background", 400, 195, "img", 1, "", "", "", "");
backgroundLayer.push(wave5_7Background);
plantBox1 = new component([5,7], 50, 50, "plantBox1Img", 85, 325, "img", 1, "black", 10, 2, 2);
lowerObjectLayer.push(plantBox1);
plantBox2 = new component([5,7], 50, 50, "plantBox1Img", 185, 325, "img", 1, "black", 10, 2, 2);
lowerObjectLayer.push(plantBox2);
plantBox3 = new component([5,7], 50, 50, "plantBox1Img", 285, 325, "img", 1, "black", 10, 2, 2);
lowerObjectLayer.push(plantBox3);
plantBox4 = new component([5,7], 50, 50, "plantBox1Img", 385, 325, "img", 1, "black", 10, 2, 2);
lowerObjectLayer.push(plantBox4);
House3Floor = new component([5,6], 270, 100, "houseFloor3Img", 615, 100, "img", 1, "", "", "", "");
lowerObjectLayer.push(House3Floor);
House3Burnt = new component([7,7], 270, 100, "burnedHouse", 615, 100, "img", 1, "", "", "", "");
lowerObjectLayer.push(House3Burnt);
House4Floor = new component([5,6], 270, 100, "houseFloor2Img", 615, 300, "img", 1, "", "", "", "");
lowerObjectLayer.push(House4Floor);
House4Burnt = new component([7,7], 270, 100, "burnedHouse", 615, 300, "img", 1, "", "", "", "");
lowerObjectLayer.push(House4Burnt);
//Waves 8-12
wave8_12Background = new component([8,12], 800, 390, "wave8-12Background", 400, 195, "img", 1, "", "", "", "");
backgroundLayer.push(wave8_12Background);
//Waves 13-20
wave13_20Background = new component([13,20], 800, 390, "wave13-20Background", 400, 195, "img", 1, "", "", "", "");
backgroundLayer.push(wave13_20Background);
//Player/enemies
player_1 = new component(["all",0], 32, 32, "player1Img", 400, 195, "img", 1, "", "", "", "", 0, 0, 32, 32);
playerEnemySpawnLayer.push(player_1);
player1Controller = new playerController(player_1, 1, "keyboard", ship_1, weapon_1);
playerControllers.push(player1Controller);
aiPathTest = new component(["all",0], 5, "circle", "white", [], "", "path", 1, "", "", "", "", "", "", "", "", "debug");
aiTestEnemy = new component(["all",0], 32, 32, "red", 750, 195, "rec", 1, "", "", "", "", "", "", "", "", "debug");
enemyAITest = new ai("", aiTestEnemy, player1Controller.target);
playerEnemySpawnLayer.push(aiPathTest);
playerEnemySpawnLayer.push(aiTestEnemy);
controllerButtonInit();
//Upper level objects
//Waves 1-4
tree1 = new component([1,4], 50, 50, "tree", 105, 305, "img", 1, "black", 50, 5, 5);
tree1.angle = Math.random()*6.28318531;
tree1Dim = new dimmingEffect(tree1, 0.4, 0.05);
dimEffects.push(tree1Dim);
upperObjectLayer.push(tree1);
tree2 = new component([1,4], 50, 50, "tree", 675, 295, "img", 1, "black", 50, 5, 5);
tree2.angle = Math.random()*6.28318531;
tree2Dim = new dimmingEffect(tree2, 0.4, 0.05);
dimEffects.push(tree2Dim);
upperObjectLayer.push(tree2);
tree3 = new component([1,4], 50, 50, "tree", 255, 105, "img", 1, "black", 50, 5, 5);
tree3.angle = Math.random()*6.28318531;
tree3Dim = new dimmingEffect(tree3, 0.4, 0.05);
dimEffects.push(tree3Dim);
upperObjectLayer.push(tree3);
tree4 = new component([1,4], 50, 50, "tree", 295, 200, "img", 1, "black", 50, 5, 5);
tree4.angle = Math.random()*6.28318531;
tree4Dim = new dimmingEffect(tree4, 0.4, 0.05);
dimEffects.push(tree4Dim);
upperObjectLayer.push(tree4);
tree5 = new component([1,4], 50, 50, "tree", 445, 95, "img", 1, "black", 50, 5, 5);
tree5.angle = Math.random()*6.28318531;
tree5Dim = new dimmingEffect(tree5, 0.4, 0.05);
dimEffects.push(tree5Dim);
upperObjectLayer.push(tree5);
tree6 = new component([1,4], 50, 50, "tree", 645, 58, "img", 1, "black", 50, 5, 5);
tree6.angle = Math.random()*6.28318531;
tree6Dim = new dimmingEffect(tree6, 0.4, 0.05);
dimEffects.push(tree6Dim);
upperObjectLayer.push(tree6);
tree7 = new component([1,4], 50, 50, "tree", 525, 300, "img", 1, "black", 50, 5, 5);
tree7.angle = Math.random()*6.28318531;
tree7Dim = new dimmingEffect(tree7, 0.4, 0.05);
dimEffects.push(tree7Dim);
upperObjectLayer.push(tree7);
tree8 = new component([1,4], 50, 50, "tree", 325, 290, "img", 1, "black", 50, 5, 5);
tree8.angle = Math.random()*6.28318531;
tree8Dim = new dimmingEffect(tree8, 0.4, 0.05);
dimEffects.push(tree8Dim);
upperObjectLayer.push(tree8);
//Lights
light1 = new component([1,4], [50,50], [5, 50], ["rgba(255,227,115,0.5)","rgba(0,0,0,0)"], 130, 140, "light", 0.5);
upperObjectLayer.push(light1);
light2 = new component([1,4], [100,50], [5, 100], ["rgba(255,233,147,0.3)","rgba(0,0,0,0)"], 600, 150, "light", 0.5);
upperObjectLayer.push(light2);
//Waves 5-7
tree9 = new component([5,7], 50, 50, "tree", 75, 45, "img", 1, "black", 50, 5, 5);
tree9.angle = Math.random()*6.28318531;
tree9Dim = new dimmingEffect(tree9, 0.4, 0.05);
dimEffects.push(tree9Dim);
upperObjectLayer.push(tree9);
tree10 = new component([5,7], 50, 50, "tree", 255, 95, "img", 1, "black", 50, 5, 5);
tree10.angle = Math.random()*6.28318531;
tree10Dim = new dimmingEffect(tree10, 0.4, 0.05);
dimEffects.push(tree10Dim);
upperObjectLayer.push(tree10);
tree11 = new component([5,7], 50, 50, "tree", 85, 325, "img", 1, "black", 50, 5, 5);
tree11.angle = Math.random()*6.28318531;
tree11Dim = new dimmingEffect(tree11, 0.4, 0.05);
dimEffects.push(tree11Dim);
upperObjectLayer.push(tree11);
tree12 = new component([5,7], 50, 50, "tree", 185, 325, "img", 1, "black", 50, 5, 5);
tree12.angle = Math.random()*6.28318531;
tree12Dim = new dimmingEffect(tree12, 0.4, 0.05);
dimEffects.push(tree12Dim);
upperObjectLayer.push(tree12);
tree13 = new component([5,7], 50, 50, "tree", 285, 325, "img", 1, "black", 50, 5, 5);
tree13.angle = Math.random()*6.28318531;
tree13Dim = new dimmingEffect(tree13, 0.4, 0.05);
dimEffects.push(tree13Dim);
upperObjectLayer.push(tree13);
tree14 = new component([5,7], 50, 50, "tree", 385, 325, "img", 1, "black", 50, 5, 5);
tree14.angle = Math.random()*6.28318531;
tree14Dim = new dimmingEffect(tree14, 0.4, 0.05);
dimEffects.push(tree14Dim);
upperObjectLayer.push(tree14);
//Walls
//Waves 1-4
house1Walls = new component([1,4], 120, 120, "grey", 130, 140, "house", 1, "black", 50, 7, 7, 0, 45, 20);
house1WallsColl = new houseCollisionUpdateMaker(player_1, house1Walls);
houseCollisionUpdaters.push(house1WallsColl);
wallLayer.push(house1Walls);
//House 1 offset **Delete Later**
//this.op1 house door offset
//this.op2 house door width
//this.op3 house wall size
/**backwall_1 = new component([1,4], 152, 16, "black", 130, 72, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_1);
backwall_2 = new component([1,4], 16, 120, "black", 198, 140, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_2);
backwall_3 = new component([1,4], 16, 120, "black", 62, 140, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_3);
backwall_4 = new component([1,4], 69, 16, "black", 88.5, 207.5, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_4);
backwall_5 = new component([1,4], 69, 16, "black", 171.5, 207.5, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_5);
backwall_6 = new component([1,4], 16, 20, "black", 115, 190, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_6);
backwall_7 = new component([1,4], 16, 20, "black", 145, 190, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_7);**/
//
house2Walls = new component([1,4], 200, 120, "grey", 600, 150, "house", 1, "black", 50, 7, 7, -10, 45, 20);
house2WallsColl = new houseCollisionUpdateMaker(player_1, house2Walls);
houseCollisionUpdaters.push(house2WallsColl);
wallLayer.push(house2Walls);
//House 2 offset **Delete Later**
//this.op1 house door offset
//this.op2 house door width
//this.op3 house wall size
/**backwall_1_ = new component([1,4], 232, 16, "black", 600, 82.5, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_1_);
backwall_2_ = new component([1,4], 16, 120, "black", 708, 150, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_2_);
backwall_3_ = new component([1,4], 16, 120, "black", 492, 150, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_3_);
backwall_4_ = new component([1,4], 99.5, 16, "black", 534, 217.5, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_4_);
backwall_5_ = new component([1,4], 119.5, 16, "black", 656, 217.5, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_5_);
backwall_6_ = new component([1,4], 16, 20, "black", 575.75, 200, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_6_);
backwall_7_ = new component([1,4], 16, 20, "black", 604.5, 200, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
wallLayer.push(backwall_7_);
//backwall_8_ = new component([1,4], 63.5, 16, "black", 552, 186, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
//wallLayer.push(backwall_8_);
//backwall_9_ = new component([1,4], 83.5, 16, "black", 638.5, 186, "rec", 1, "", "", "", "", "", "", "", "", "ignore");
//wallLayer.push(backwall_9_);
//**/
//Waves 5-6
house3Walls = new component([5,6], 270, 100, "grey", 615, 100, "house", 1, "black", 50, 7, 7, 0, 45, 20);
house3WallsColl = new houseCollisionUpdateMaker(player_1, house3Walls);
houseCollisionUpdaters.push(house3WallsColl);
wallLayer.push(house3Walls);
house4Walls = new component([5,6], 270, 100, "grey", 615, 300, "house", 1, "black", 50, 7, 7, 0, 45, 20);
house4Walls.angle = 3.14159265;
house4WallsColl = new houseCollisionUpdateMaker(player_1, house4Walls);
houseCollisionUpdaters.push(house4WallsColl);
wallLayer.push(house4Walls);
//Above wall layer
//Waves 1-4
house1Roof_2 = new component([1,4], 45, 40, "houseRoof1Img", 130, 200, "img", 1, "black", 30, 5, 5);
aboveWallLayer.push(house1Roof_2);
house1Roof = new component([1,4], 120, 120, "houseRoof1Img", 130, 140, "img", 1, "black", 30, 5, 5);
house1RoofDim = new dimmingEffect([house1Roof,house1Roof_2], [0.2,0], [0.1,0.2]);
dimEffects.push(house1RoofDim);
aboveWallLayer.push(house1Roof);
house2Roof_2 = new component([1,4], 45, 40, "houseRoof1Img", 590, 210, "img", 1, "black", 30, 5, 5);
aboveWallLayer.push(house2Roof_2);
house2Roof = new component([1,4], 200, 120, "houseRoof1Img", 600, 150, "img", 1, "black", 30, 5, 5);
house2RoofDim = new dimmingEffect([house2Roof,house2Roof_2], [0.2,0], [0.1,0.2]);
dimEffects.push(house2RoofDim);
aboveWallLayer.push(house2Roof);
wave1_4Border = new component([1,4], 800, 390, "wave1-5Border", 400, 195, "img", 1, "black", 20, 5, 5);
wave1_4BorderDim = new dimmingEffect(wave1_4Border, 0.4, 0.05);
aboveWallLayer.push(wave1_4Border);
//Waves 5-6
house3Roof_2 = new component([5,6], 45, 40, "houseRoof2Img", 615, 150, "img", 1, "black", 30, 5, 5);
aboveWallLayer.push(house3Roof_2);
house3Roof = new component([5,6], 270, 100, "houseRoof2Img", 615, 100, "img", 1, "black", 30, 5, 5);
house3RoofDim = new dimmingEffect([house3Roof,house3Roof_2], [0.2,0], [0.1,0.2]);
dimEffects.push(house3RoofDim);
aboveWallLayer.push(house3Roof);
house4Roof_2 = new component([5,6], 45, 40, "houseRoof3Img", 615, 250, "img", 1, "black", 30, 5, 5);
aboveWallLayer.push(house4Roof_2);
house4Roof = new component([5,6], 270, 100, "houseRoof3Img", 615, 300, "img", 1, "black", 30, 5, 5);
house4RoofDim = new dimmingEffect([house4Roof,house4Roof_2], [0.2,0], [0.1,0.2]);
dimEffects.push(house4RoofDim);
aboveWallLayer.push(house4Roof);
//Waves 8-12
wave8_12BorderDoor = new component([8,12], 45, 160, "wall_1", 780, 195, "img", 1, "black", 20, -5, 5);
aboveWallLayer.push(wave8_12BorderDoor);
wave8_12Border = new component([8,12], 800, 390, "wave8-12Border", 400, 195, "img", 1, "black", 20, -5, 5);
aboveWallLayer.push(wave8_12Border);
//End screen
endScreen = new component([8,8], 800, 390, "endScreen", 400, 195, "img", 1, "", "", "", "");
aboveWallLayer.push(endScreen);
//Waves 13-20
wave13_20BorderDoor = new component([13,20], 45, 160, "wall_1", 20, 222.5, "img", 1, "black", 20, 5, 5);
aboveWallLayer.push(wave13_20BorderDoor);
wave13_20Border = new component([13,20], 800, 390, "wave13-20Border", 400, 195, "img", 1, "black", 20, 5, 5);
aboveWallLayer.push(wave13_20Border);
//UI
//Start screen UI 
startButton = new component([0,0], 100, 50, "#812bb3", 400, 300, "rec", 1, "black", 2, 2, 2, "", "", "", "", "button");
startButtonManager = new buttonManager(startButton, "wave=22;sceneTransition=true;");
buttonManagers.push(startButtonManager);
uiLayer.push(startButton);
startButtonText = new component([0,0], "30px Consolas", "center", "white", 400, 308.5, "text", 1, "black", 2, 2, 2, false, "START");
uiLayer.push(startButtonText);
versionPatch = new component([0,0], 40, 40, "versionPatch", 700, 250, "img", 0.75, "black", 2, 2, 2);
versionPatch.angle = -0.1;
versionPatchGrowEffeft = new growEffect(versionPatch, 50, 0.3);
growEffects.push(versionPatchGrowEffeft);
uiLayer.push(versionPatch);
youtubeLogo = new component([0,0], 100, 25, "youtubeLogo", 745, 482.5, "img", 1, "black", 1, 2, 2, "", "", "", "", "button");
youtubeLogoButtonManager = new buttonManager(youtubeLogo, "window.open('https://www.youtube.com/channel/UC2wgOHuVhkjuaY_YM7IqwPw/', '_blank');buttonSelectTrack.play();pressed=false;");
buttonManagers.push(youtubeLogoButtonManager);
uiLayer.push(youtubeLogo);
githubLogo = new component([0,0], 100, 25, "githubLogo", 50, 485, "img", 1, "black", 1, 2, 2, "", "", "", "", "button");
githubLogoButtonManager = new buttonManager(githubLogo, "window.open('https://github.com/mark4pro/mark4pro.github.io', '_blank');buttonSelectTrack.play();pressed=false;");
buttonManagers.push(githubLogoButtonManager);
uiLayer.push(githubLogo);
//Game UI
settingsButtonPanel = new component("all", 95, 95, "uiPanel", 795, 5, "img", 0.5, "black", 2, -5, 5);
uiLayer.push(settingsButtonPanel);
settingsButton = new component("all", 45, 45, "settingsButton", 775, 24, "img", 0.2, "black", 1, 2, 2, "", "", "", "", "button");
settingsButtonManager = new buttonManager(settingsButton, "if (!unlockControls) {settingsState++;buttonSelectTrack.play();}pressed=false;");
buttonManagers.push(settingsButtonManager);
uiLayer.push(settingsButton);
noControllerText = new component("all", "10px Consolas", "start", "white", 10, 20, "text", 0, "black", 2, 2, 2, false, "Please plug in a gamepad!", "", "", "");
uiLayer.push(noControllerText);
//Player UI
lowerUIBackground = new component(["all",0], 800, 105, "#451661", 400, 448, "rec", 1, "black", 1, 0, -10.5);
uiLayer.push(lowerUIBackground);
//Health Bar startButtonText = new component([0,0], "30px Consolas", "center", "white", 400, 308.5, "text", 1, "black", 2, 2, 2, false, "START");
healthUIBackground = new component(["all",0], 120, 52.5, "uiBackground", 70, 450, "img", 1, "black", 5, 5, 5);
uiLayer.push(healthUIBackground);
healthUIText = new component(["all",0], "18px Consolas", "start", "white", (healthUIBackground.x-50), (healthUIBackground.y-10), "text", 1, "black", 5, 5, 5, false, "Health:");
uiLayer.push(healthUIText);
healthBarUIBackground = new component(["all",0], 105, 30, "#63218a", healthUIBackground.x, (healthUIBackground.y+7.5), "rec", 1, "", "", "", "");
uiLayer.push(healthBarUIBackground);
healthBarUI = new component(["all",0], 0, 25, "black", healthUIBackground.x-50, (healthUIBackground.y-5), "rec", 1, "black", 5, 2, 2);
healthBarUI.centered = false;
uiLayer.push(healthBarUI);
//Shield Bar
shieldUIBackground = new component(["all",0], 120, 52.5, "uiBackground", 210, 450, "img", 1, "black", 5, 5, 5);
uiLayer.push(shieldUIBackground);
shieldUIText = new component(["all",0], "18px Consolas", "start", "white", (shieldUIBackground.x-50), (shieldUIBackground.y-10), "text", 1, "black", 5, 5, 5, false, "Shield:");
uiLayer.push(shieldUIText);
shieldBarUIBackground = new component(["all",0], 105, 30, "#63218a", shieldUIBackground.x, (shieldUIBackground.y+7.5), "rec", 1, "", "", "", "");
uiLayer.push(shieldBarUIBackground);
shieldBarUI = new component(["all",0], 0, 25, "black", shieldUIBackground.x-50, (shieldUIBackground.y-5), "rec", 1, "black", 5, 2, 2);
shieldBarUI.centered = false;
uiLayer.push(shieldBarUI);
//Wave counter/Weapon name/Ammo counter
ammoWeaponAmmoBackground = new component(["all",0], 100, 65, "uiBackground", 400, 465, "img", 1, "black", 5, 5, 5);
uiLayer.push(ammoWeaponAmmoBackground);
ammoBackground = new component(["all",0], 83, 15, "#812bb3", 400, 445.5, "rec", 1, "black", 5, 5, 5);
uiLayer.push(ammoBackground);
ammoAmountUIText = new component(["all",0], "18px Consolas", "center", "white", 400, 450, "text", 1, "black", 2, 2, 2, false, "Ammo:"+player1Controller.target.ammo);
uiLayer.push(ammoAmountUIText);
weaponBackground = new component(["all",0], 83, 15, "#812bb3", 400, 465, "rec", 1, "black", 5, 5, 5);
uiLayer.push(weaponBackground);
weaponNameUIText = new component(["all",0], "18px Consolas", "center", "white", 400, 469.5, "text", 1, "black", 2, 2, 2, false, "Weapon:"+player1Controller.target.weaponName);
uiLayer.push(weaponNameUIText);
waveBackground = new component(["all",0], 83, 15, "#812bb3", 400, 484.5, "rec", 1, "black", 5, 5, 5);
uiLayer.push(waveBackground);
waveNumberUIText = new component(["all",0], "18px Consolas", "center", "white", 400, 489, "text", 1, "black", 2, 2, 2, false, "Wave:"+wave);
uiLayer.push(waveNumberUIText);
muteUnmuteUI = new component(["all",0], 65, 55, "soundOnOff", 490, 470, "img", 1, "black", 5, 5, 5, 0, 0, 80, 76);
uiLayer.push(muteUnmuteUI);
//Location name/Money
locationMoneyBackground = new component(["all",0], 150, 45, "uiBackground", 715, 467.5, "img", 1, "black", 5, 5, 5);
uiLayer.push(locationMoneyBackground);
moneyUIText = new component(["all",0], "18px Consolas", "start", "white", 652.5, 465, "text", 1, "black", 2, 2, 2, false, "$")
uiLayer.push(moneyUIText);
locationUIText = new component(["all",0], "18px Consolas", "start", "white", 652.5, 482.5, "text", 1, "black", 2, 2, 2, false, "Location:")
uiLayer.push(locationUIText);
//Warp Zone
earthUIPanel = new warpUIPanel(earthPlanet, "Earth", "Wave Based", 20, 3);
earthUIPanel.init();
//Debug
fpsText = new component("all", "10px Consolas", "start", "white", 10, 20, "text", 1, "black", 2, 2, 2, false, "FPS:"+fps.getFPS(), "", "", "fps");
uiLayer.push(fpsText);
player1MoveAngleText = new component("all", "10px Consolas", "start", "white", 10, 40, "text", 1, "black", 2, 2, 2, false, "", "", "", "debug");
uiLayer.push(player1MoveAngleText);
player1ShootAngleText = new component("all", "10px Consolas", "start", "white", 10, 60, "text", 1, "black", 2, 2, 2, false, "", "", "", "debug");
uiLayer.push(player1ShootAngleText);
gridMaker = new gridMaker();
gridMaker.init();
//Cursor
cursor = new component("all", 5, 5, "red", -10, -10, "rec", 1, "", "", "", "", "", "", "", "", "debug");
moveMouse = new updatePos(cursor, mousePos);
uiLayer.push(cursor);
//Top
document.addEventListener("keydown",keyDownHandler, false);	
document.addEventListener("keyup",keyUpHandler, false);
resizeHandler();
audioInit();
updateInit();
var interval = setInterval(updateLoop, 10);
}

function enemySpawner() {
this.playerShip = player1Controller.target;
}

function gridMaker() {
this.tracker;
this.done = false;
this.grid = [];
	this.init = function() {
		if (this.tracker == undefined) {
		this.tracker = new component("all", scale, scale, "blue", scale/2, scale/2, "rec", 1, "", "", "", "", "", "", "", "", "collisionMapper");
		uiLayer.push(this.tracker);
		}
	},
	this.update = function() {
		if (debug) {
			//put html ui hiding code here
		}
	},
	this.runScan = function() {
	this.done = false;
		for (let i=0;i<170;i++) {
		this.scan();
		}
	},
	this.scan = function() {
		if (!this.done) {
			for (let x=0;x<Math.floor(800/scale);x++) {
			this.tracker.x += scale;
				for (let i=0;i<wallLayer.length;i++) {
					if (wallLayer[i].waveNumber == "all") {
						if (this.tracker.circleLine(wallLayer[i])) {
						this.grid.push({x:this.tracker.x/scale,y:this.tracker.y/scale});
						console.log("Hit");
						}
					}
					if (wave >= wallLayer[i].waveNumber[0] && wave <= wallLayer[i].waveNumber[1]) {
						if (this.tracker.circleLine(wallLayer[i])) {
						this.grid.push({x:this.tracker.x/scale,y:this.tracker.y/scale});
						console.log("Hit");
						}
					}
					if (wallLayer[i].waveNumber[0] == "all" && wave != wallLayer[i].waveNumber[1]) {
						if (this.tracker.circleLine(wallLayer[i])) {
						this.grid.push({x:this.tracker.x/scale,y:this.tracker.y/scale});
						console.log("Hit");
						}
					}
				}
			}
			if (this.tracker.x/scale >= Math.floor(800/scale)) {
			this.tracker.x = 0;
			this.tracker.y += scale;
			}
			if (this.tracker.y/scale >= Math.floor(500/scale)) {
			this.tracker.x = 0;
			this.tracker.y = 0;
			this.done = true;
			}
		}
	},
	this.setWalkable = function(test) {
		if (test) {
			for (let i=0;i<this.grid.length;i++) {
			gridManager.grid.setWalkableAt(Math.floor(this.grid[i].x), Math.floor(this.grid[i].y), false);
			}
		} else {
		collisionOutput.innerHTML = "Data: ";
		this.grid.forEach((element) => {
		collisionOutput.innerHTML += "{x:"+element.x+",y:"+element.y+"},";
		});
		console.log("Data: "+collisionOutput.innerHTML);
		}
	}
	this.clearScreen = function() {
		console.log("Output Cleared!");
		collisionOutput.innerHTML = "";
	}
}

var stage_1_collision_data = [{x:18,y:21.5},{x:19,y:21.5},{x:20,y:21.5},{x:21,y:21.5},{x:22,y:21.5},{x:23,y:21.5},{x:24,y:21.5},{x:25,y:21.5},{x:26,y:21.5},{x:27,y:21.5},{x:28,y:21.5},{x:29,y:21.5},{x:30,y:21.5},{x:31,y:21.5},{x:32,y:21.5},{x:33,y:21.5},{x:34,y:21.5},{x:35,y:21.5},{x:36,y:21.5},{x:37,y:21.5},{x:38,y:21.5},{x:39,y:21.5},{x:40,y:21.5},{x:41,y:21.5},{x:42,y:21.5},{x:43,y:21.5},{x:44,y:21.5},{x:45,y:21.5},{x:46,y:21.5},{x:47,y:21.5},{x:48,y:21.5},{x:49,y:21.5},{x:50,y:21.5},{x:51,y:21.5},{x:52,y:21.5},{x:53,y:21.5},{x:54,y:21.5},{x:55,y:21.5},{x:56,y:21.5},{x:57,y:21.5},{x:58,y:21.5},{x:59,y:21.5},{x:60,y:21.5},{x:61,y:21.5},{x:62,y:21.5},{x:63,y:21.5},{x:64,y:21.5},{x:65,y:21.5},{x:66,y:21.5},{x:67,y:21.5},{x:68,y:21.5},{x:69,y:21.5},{x:18,y:22.5},{x:69,y:22.5},{x:18,y:23.5},{x:69,y:23.5},{x:18,y:24.5},{x:69,y:24.5},{x:161,y:24.5},{x:162,y:24.5},{x:163,y:24.5},{x:164,y:24.5},{x:165,y:24.5},{x:166,y:24.5},{x:167,y:24.5},{x:168,y:24.5},{x:169,y:24.5},{x:170,y:24.5},{x:171,y:24.5},{x:172,y:24.5},{x:173,y:24.5},{x:174,y:24.5},{x:175,y:24.5},{x:176,y:24.5},{x:177,y:24.5},{x:178,y:24.5},{x:179,y:24.5},{x:180,y:24.5},{x:181,y:24.5},{x:182,y:24.5},{x:183,y:24.5},{x:184,y:24.5},{x:185,y:24.5},{x:186,y:24.5},{x:187,y:24.5},{x:188,y:24.5},{x:189,y:24.5},{x:190,y:24.5},{x:191,y:24.5},{x:192,y:24.5},{x:193,y:24.5},{x:194,y:24.5},{x:195,y:24.5},{x:196,y:24.5},{x:197,y:24.5},{x:198,y:24.5},{x:199,y:24.5},{x:200,y:24.5},{x:201,y:24.5},{x:202,y:24.5},{x:203,y:24.5},{x:204,y:24.5},{x:205,y:24.5},{x:206,y:24.5},{x:207,y:24.5},{x:208,y:24.5},{x:209,y:24.5},{x:210,y:24.5},{x:211,y:24.5},{x:212,y:24.5},{x:213,y:24.5},{x:214,y:24.5},{x:215,y:24.5},{x:216,y:24.5},{x:217,y:24.5},{x:218,y:24.5},{x:219,y:24.5},{x:220,y:24.5},{x:221,y:24.5},{x:222,y:24.5},{x:223,y:24.5},{x:224,y:24.5},{x:225,y:24.5},{x:226,y:24.5},{x:227,y:24.5},{x:228,y:24.5},{x:229,y:24.5},{x:230,y:24.5},{x:231,y:24.5},{x:232,y:24.5},{x:233,y:24.5},{x:234,y:24.5},{x:235,y:24.5},{x:236,y:24.5},{x:237,y:24.5},{x:238,y:24.5},{x:239,y:24.5},{x:18,y:25.5},{x:69,y:25.5},{x:161,y:25.5},{x:239,y:25.5},{x:18,y:26.5},{x:18,y:26.5},{x:19,y:26.5},{x:19,y:26.5},{x:20,y:26.5},{x:20,y:26.5},{x:21,y:26.5},{x:21,y:26.5},{x:22,y:26.5},{x:22,y:26.5},{x:23,y:26.5},{x:23,y:26.5},{x:23,y:26.5},{x:24,y:26.5},{x:24,y:26.5},{x:25,y:26.5},{x:25,y:26.5},{x:26,y:26.5},{x:26,y:26.5},{x:27,y:26.5},{x:27,y:26.5},{x:28,y:26.5},{x:28,y:26.5},{x:29,y:26.5},{x:29,y:26.5},{x:30,y:26.5},{x:30,y:26.5},{x:31,y:26.5},{x:31,y:26.5},{x:32,y:26.5},{x:32,y:26.5},{x:33,y:26.5},{x:33,y:26.5},{x:34,y:26.5},{x:34,y:26.5},{x:35,y:26.5},{x:35,y:26.5},{x:36,y:26.5},{x:36,y:26.5},{x:37,y:26.5},{x:37,y:26.5},{x:38,y:26.5},{x:38,y:26.5},{x:39,y:26.5},{x:39,y:26.5},{x:40,y:26.5},{x:40,y:26.5},{x:41,y:26.5},{x:41,y:26.5},{x:42,y:26.5},{x:42,y:26.5},{x:43,y:26.5},{x:43,y:26.5},{x:44,y:26.5},{x:44,y:26.5},{x:45,y:26.5},{x:45,y:26.5},{x:46,y:26.5},{x:46,y:26.5},{x:47,y:26.5},{x:47,y:26.5},{x:48,y:26.5},{x:48,y:26.5},{x:49,y:26.5},{x:49,y:26.5},{x:50,y:26.5},{x:50,y:26.5},{x:51,y:26.5},{x:51,y:26.5},{x:52,y:26.5},{x:52,y:26.5},{x:53,y:26.5},{x:53,y:26.5},{x:54,y:26.5},{x:54,y:26.5},{x:55,y:26.5},{x:55,y:26.5},{x:56,y:26.5},{x:56,y:26.5},{x:57,y:26.5},{x:57,y:26.5},{x:58,y:26.5},{x:58,y:26.5},{x:59,y:26.5},{x:59,y:26.5},{x:60,y:26.5},{x:60,y:26.5},{x:61,y:26.5},{x:61,y:26.5},{x:62,y:26.5},{x:62,y:26.5},{x:63,y:26.5},{x:63,y:26.5},{x:63,y:26.5},{x:64,y:26.5},{x:64,y:26.5},{x:65,y:26.5},{x:65,y:26.5},{x:66,y:26.5},{x:66,y:26.5},{x:67,y:26.5},{x:67,y:26.5},{x:68,y:26.5},{x:68,y:26.5},{x:69,y:26.5},{x:69,y:26.5},{x:161,y:26.5},{x:239,y:26.5},{x:18,y:27.5},{x:23,y:27.5},{x:23,y:27.5},{x:63,y:27.5},{x:63,y:27.5},{x:69,y:27.5},{x:161,y:27.5},{x:239,y:27.5},{x:18,y:28.5},{x:23,y:28.5},{x:23,y:28.5},{x:63,y:28.5},{x:63,y:28.5},{x:69,y:28.5},{x:161,y:28.5},{x:239,y:28.5},{x:18,y:29.5},{x:23,y:29.5},{x:23,y:29.5},{x:63,y:29.5},{x:63,y:29.5},{x:69,y:29.5},{x:161,y:29.5},{x:162,y:29.5},{x:163,y:29.5},{x:164,y:29.5},{x:165,y:29.5},{x:166,y:29.5},{x:167,y:29.5},{x:168,y:29.5},{x:169,y:29.5},{x:170,y:29.5},{x:171,y:29.5},{x:172,y:29.5},{x:173,y:29.5},{x:174,y:29.5},{x:175,y:29.5},{x:176,y:29.5},{x:177,y:29.5},{x:178,y:29.5},{x:179,y:29.5},{x:180,y:29.5},{x:181,y:29.5},{x:182,y:29.5},{x:183,y:29.5},{x:184,y:29.5},{x:185,y:29.5},{x:186,y:29.5},{x:187,y:29.5},{x:188,y:29.5},{x:189,y:29.5},{x:190,y:29.5},{x:191,y:29.5},{x:192,y:29.5},{x:193,y:29.5},{x:194,y:29.5},{x:195,y:29.5},{x:196,y:29.5},{x:197,y:29.5},{x:198,y:29.5},{x:199,y:29.5},{x:200,y:29.5},{x:201,y:29.5},{x:202,y:29.5},{x:203,y:29.5},{x:204,y:29.5},{x:205,y:29.5},{x:206,y:29.5},{x:207,y:29.5},{x:208,y:29.5},{x:209,y:29.5},{x:210,y:29.5},{x:211,y:29.5},{x:212,y:29.5},{x:213,y:29.5},{x:214,y:29.5},{x:215,y:29.5},{x:216,y:29.5},{x:217,y:29.5},{x:218,y:29.5},{x:219,y:29.5},{x:220,y:29.5},{x:221,y:29.5},{x:222,y:29.5},{x:223,y:29.5},{x:224,y:29.5},{x:225,y:29.5},{x:226,y:29.5},{x:227,y:29.5},{x:228,y:29.5},{x:229,y:29.5},{x:230,y:29.5},{x:231,y:29.5},{x:232,y:29.5},{x:233,y:29.5},{x:234,y:29.5},{x:235,y:29.5},{x:236,y:29.5},{x:237,y:29.5},{x:238,y:29.5},{x:239,y:29.5},{x:18,y:30.5},{x:23,y:30.5},{x:23,y:30.5},{x:63,y:30.5},{x:63,y:30.5},{x:69,y:30.5},{x:161,y:30.5},{x:161,y:30.5},{x:162,y:30.5},{x:162,y:30.5},{x:163,y:30.5},{x:163,y:30.5},{x:164,y:30.5},{x:164,y:30.5},{x:165,y:30.5},{x:165,y:30.5},{x:166,y:30.5},{x:166,y:30.5},{x:167,y:30.5},{x:167,y:30.5},{x:167,y:30.5},{x:168,y:30.5},{x:168,y:30.5},{x:169,y:30.5},{x:169,y:30.5},{x:170,y:30.5},{x:170,y:30.5},{x:171,y:30.5},{x:171,y:30.5},{x:172,y:30.5},{x:172,y:30.5},{x:173,y:30.5},{x:173,y:30.5},{x:174,y:30.5},{x:174,y:30.5},{x:175,y:30.5},{x:175,y:30.5},{x:176,y:30.5},{x:176,y:30.5},{x:177,y:30.5},{x:177,y:30.5},{x:178,y:30.5},{x:178,y:30.5},{x:179,y:30.5},{x:179,y:30.5},{x:180,y:30.5},{x:180,y:30.5},{x:181,y:30.5},{x:181,y:30.5},{x:182,y:30.5},{x:182,y:30.5},{x:183,y:30.5},{x:183,y:30.5},{x:184,y:30.5},{x:184,y:30.5},{x:185,y:30.5},{x:185,y:30.5},{x:186,y:30.5},{x:186,y:30.5},{x:187,y:30.5},{x:187,y:30.5},{x:188,y:30.5},{x:188,y:30.5},{x:189,y:30.5},{x:189,y:30.5},{x:190,y:30.5},{x:190,y:30.5},{x:191,y:30.5},{x:191,y:30.5},{x:192,y:30.5},{x:192,y:30.5},{x:193,y:30.5},{x:193,y:30.5},{x:194,y:30.5},{x:194,y:30.5},{x:195,y:30.5},{x:195,y:30.5},{x:196,y:30.5},{x:196,y:30.5},{x:197,y:30.5},{x:197,y:30.5},{x:198,y:30.5},{x:198,y:30.5},{x:199,y:30.5},{x:199,y:30.5},{x:200,y:30.5},{x:200,y:30.5},{x:201,y:30.5},{x:201,y:30.5},{x:202,y:30.5},{x:202,y:30.5},{x:203,y:30.5},{x:203,y:30.5},{x:204,y:30.5},{x:204,y:30.5},{x:205,y:30.5},{x:205,y:30.5},{x:206,y:30.5},{x:206,y:30.5},{x:207,y:30.5},{x:207,y:30.5},{x:208,y:30.5},{x:208,y:30.5},{x:209,y:30.5},{x:209,y:30.5},{x:210,y:30.5},{x:210,y:30.5},{x:211,y:30.5},{x:211,y:30.5},{x:212,y:30.5},{x:212,y:30.5},{x:213,y:30.5},{x:213,y:30.5},{x:214,y:30.5},{x:214,y:30.5},{x:215,y:30.5},{x:215,y:30.5},{x:216,y:30.5},{x:216,y:30.5},{x:217,y:30.5},{x:217,y:30.5},{x:218,y:30.5},{x:218,y:30.5},{x:219,y:30.5},{x:219,y:30.5},{x:220,y:30.5},{x:220,y:30.5},{x:221,y:30.5},{x:221,y:30.5},{x:222,y:30.5},{x:222,y:30.5},{x:223,y:30.5},{x:223,y:30.5},{x:224,y:30.5},{x:224,y:30.5},{x:225,y:30.5},{x:225,y:30.5},{x:226,y:30.5},{x:226,y:30.5},{x:227,y:30.5},{x:227,y:30.5},{x:228,y:30.5},{x:228,y:30.5},{x:229,y:30.5},{x:229,y:30.5},{x:230,y:30.5},{x:230,y:30.5},{x:231,y:30.5},{x:231,y:30.5},{x:232,y:30.5},{x:232,y:30.5},{x:233,y:30.5},{x:233,y:30.5},{x:233,y:30.5},{x:234,y:30.5},{x:234,y:30.5},{x:235,y:30.5},{x:235,y:30.5},{x:236,y:30.5},{x:236,y:30.5},{x:237,y:30.5},{x:237,y:30.5},{x:238,y:30.5},{x:238,y:30.5},{x:239,y:30.5},{x:239,y:30.5},{x:18,y:31.5},{x:23,y:31.5},{x:23,y:31.5},{x:63,y:31.5},{x:63,y:31.5},{x:69,y:31.5},{x:161,y:31.5},{x:167,y:31.5},{x:167,y:31.5},{x:233,y:31.5},{x:233,y:31.5},{x:239,y:31.5},{x:18,y:32.5},{x:23,y:32.5},{x:23,y:32.5},{x:63,y:32.5},{x:63,y:32.5},{x:69,y:32.5},{x:161,y:32.5},{x:167,y:32.5},{x:167,y:32.5},{x:233,y:32.5},{x:233,y:32.5},{x:239,y:32.5},{x:18,y:33.5},{x:23,y:33.5},{x:23,y:33.5},{x:30,y:33.5},{x:31,y:33.5},{x:32,y:33.5},{x:33,y:33.5},{x:34,y:33.5},{x:35,y:33.5},{x:36,y:33.5},{x:37,y:33.5},{x:38,y:33.5},{x:39,y:33.5},{x:40,y:33.5},{x:41,y:33.5},{x:42,y:33.5},{x:43,y:33.5},{x:44,y:33.5},{x:45,y:33.5},{x:46,y:33.5},{x:47,y:33.5},{x:48,y:33.5},{x:49,y:33.5},{x:50,y:33.5},{x:51,y:33.5},{x:52,y:33.5},{x:53,y:33.5},{x:54,y:33.5},{x:55,y:33.5},{x:56,y:33.5},{x:57,y:33.5},{x:63,y:33.5},{x:63,y:33.5},{x:69,y:33.5},{x:161,y:33.5},{x:167,y:33.5},{x:167,y:33.5},{x:233,y:33.5},{x:233,y:33.5},{x:239,y:33.5},{x:18,y:34.5},{x:23,y:34.5},{x:23,y:34.5},{x:30,y:34.5},{x:57,y:34.5},{x:63,y:34.5},{x:63,y:34.5},{x:69,y:34.5},{x:161,y:34.5},{x:167,y:34.5},{x:167,y:34.5},{x:233,y:34.5},{x:233,y:34.5},{x:239,y:34.5},{x:18,y:35.5},{x:23,y:35.5},{x:23,y:35.5},{x:30,y:35.5},{x:57,y:35.5},{x:63,y:35.5},{x:63,y:35.5},{x:69,y:35.5},{x:161,y:35.5},{x:167,y:35.5},{x:167,y:35.5},{x:233,y:35.5},{x:233,y:35.5},{x:239,y:35.5},{x:18,y:36.5},{x:23,y:36.5},{x:23,y:36.5},{x:30,y:36.5},{x:57,y:36.5},{x:63,y:36.5},{x:63,y:36.5},{x:69,y:36.5},{x:161,y:36.5},{x:167,y:36.5},{x:167,y:36.5},{x:173,y:36.5},{x:174,y:36.5},{x:175,y:36.5},{x:176,y:36.5},{x:177,y:36.5},{x:178,y:36.5},{x:179,y:36.5},{x:180,y:36.5},{x:181,y:36.5},{x:182,y:36.5},{x:183,y:36.5},{x:184,y:36.5},{x:185,y:36.5},{x:186,y:36.5},{x:187,y:36.5},{x:188,y:36.5},{x:189,y:36.5},{x:190,y:36.5},{x:191,y:36.5},{x:192,y:36.5},{x:193,y:36.5},{x:194,y:36.5},{x:195,y:36.5},{x:196,y:36.5},{x:197,y:36.5},{x:198,y:36.5},{x:199,y:36.5},{x:200,y:36.5},{x:201,y:36.5},{x:202,y:36.5},{x:203,y:36.5},{x:204,y:36.5},{x:205,y:36.5},{x:206,y:36.5},{x:207,y:36.5},{x:208,y:36.5},{x:209,y:36.5},{x:210,y:36.5},{x:211,y:36.5},{x:212,y:36.5},{x:213,y:36.5},{x:214,y:36.5},{x:215,y:36.5},{x:216,y:36.5},{x:217,y:36.5},{x:218,y:36.5},{x:219,y:36.5},{x:220,y:36.5},{x:221,y:36.5},{x:222,y:36.5},{x:223,y:36.5},{x:224,y:36.5},{x:225,y:36.5},{x:226,y:36.5},{x:227,y:36.5},{x:233,y:36.5},{x:233,y:36.5},{x:239,y:36.5},{x:18,y:37.5},{x:23,y:37.5},{x:23,y:37.5},{x:30,y:37.5},{x:57,y:37.5},{x:63,y:37.5},{x:63,y:37.5},{x:69,y:37.5},{x:161,y:37.5},{x:167,y:37.5},{x:167,y:37.5},{x:173,y:37.5},{x:227,y:37.5},{x:233,y:37.5},{x:233,y:37.5},{x:239,y:37.5},{x:18,y:38.5},{x:23,y:38.5},{x:23,y:38.5},{x:30,y:38.5},{x:57,y:38.5},{x:63,y:38.5},{x:63,y:38.5},{x:69,y:38.5},{x:161,y:38.5},{x:167,y:38.5},{x:167,y:38.5},{x:173,y:38.5},{x:227,y:38.5},{x:233,y:38.5},{x:233,y:38.5},{x:239,y:38.5},{x:18,y:39.5},{x:23,y:39.5},{x:23,y:39.5},{x:30,y:39.5},{x:57,y:39.5},{x:63,y:39.5},{x:63,y:39.5},{x:69,y:39.5},{x:161,y:39.5},{x:167,y:39.5},{x:167,y:39.5},{x:173,y:39.5},{x:227,y:39.5},{x:233,y:39.5},{x:233,y:39.5},{x:239,y:39.5},{x:18,y:40.5},{x:23,y:40.5},{x:23,y:40.5},{x:30,y:40.5},{x:57,y:40.5},{x:63,y:40.5},{x:63,y:40.5},{x:69,y:40.5},{x:161,y:40.5},{x:167,y:40.5},{x:167,y:40.5},{x:173,y:40.5},{x:227,y:40.5},{x:233,y:40.5},{x:233,y:40.5},{x:239,y:40.5},{x:18,y:41.5},{x:23,y:41.5},{x:23,y:41.5},{x:30,y:41.5},{x:57,y:41.5},{x:63,y:41.5},{x:63,y:41.5},{x:69,y:41.5},{x:161,y:41.5},{x:167,y:41.5},{x:167,y:41.5},{x:173,y:41.5},{x:227,y:41.5},{x:233,y:41.5},{x:233,y:41.5},{x:239,y:41.5},{x:18,y:42.5},{x:23,y:42.5},{x:23,y:42.5},{x:30,y:42.5},{x:57,y:42.5},{x:63,y:42.5},{x:63,y:42.5},{x:69,y:42.5},{x:161,y:42.5},{x:167,y:42.5},{x:167,y:42.5},{x:173,y:42.5},{x:227,y:42.5},{x:233,y:42.5},{x:233,y:42.5},{x:239,y:42.5},{x:18,y:43.5},{x:23,y:43.5},{x:23,y:43.5},{x:30,y:43.5},{x:57,y:43.5},{x:63,y:43.5},{x:63,y:43.5},{x:69,y:43.5},{x:161,y:43.5},{x:167,y:43.5},{x:167,y:43.5},{x:173,y:43.5},{x:227,y:43.5},{x:233,y:43.5},{x:233,y:43.5},{x:239,y:43.5},{x:18,y:44.5},{x:23,y:44.5},{x:23,y:44.5},{x:30,y:44.5},{x:57,y:44.5},{x:63,y:44.5},{x:63,y:44.5},{x:69,y:44.5},{x:161,y:44.5},{x:167,y:44.5},{x:167,y:44.5},{x:173,y:44.5},{x:227,y:44.5},{x:233,y:44.5},{x:233,y:44.5},{x:239,y:44.5},{x:18,y:45.5},{x:23,y:45.5},{x:23,y:45.5},{x:30,y:45.5},{x:57,y:45.5},{x:63,y:45.5},{x:63,y:45.5},{x:69,y:45.5},{x:161,y:45.5},{x:167,y:45.5},{x:167,y:45.5},{x:173,y:45.5},{x:227,y:45.5},{x:233,y:45.5},{x:233,y:45.5},{x:239,y:45.5},{x:18,y:46.5},{x:23,y:46.5},{x:23,y:46.5},{x:30,y:46.5},{x:57,y:46.5},{x:63,y:46.5},{x:63,y:46.5},{x:69,y:46.5},{x:161,y:46.5},{x:167,y:46.5},{x:167,y:46.5},{x:173,y:46.5},{x:227,y:46.5},{x:233,y:46.5},{x:233,y:46.5},{x:239,y:46.5},{x:18,y:47.5},{x:23,y:47.5},{x:23,y:47.5},{x:30,y:47.5},{x:57,y:47.5},{x:63,y:47.5},{x:63,y:47.5},{x:69,y:47.5},{x:161,y:47.5},{x:167,y:47.5},{x:167,y:47.5},{x:173,y:47.5},{x:227,y:47.5},{x:233,y:47.5},{x:233,y:47.5},{x:239,y:47.5},{x:18,y:48.5},{x:23,y:48.5},{x:23,y:48.5},{x:30,y:48.5},{x:57,y:48.5},{x:63,y:48.5},{x:63,y:48.5},{x:69,y:48.5},{x:161,y:48.5},{x:167,y:48.5},{x:167,y:48.5},{x:173,y:48.5},{x:227,y:48.5},{x:233,y:48.5},{x:233,y:48.5},{x:239,y:48.5},{x:18,y:49.5},{x:23,y:49.5},{x:23,y:49.5},{x:30,y:49.5},{x:57,y:49.5},{x:63,y:49.5},{x:63,y:49.5},{x:69,y:49.5},{x:161,y:49.5},{x:167,y:49.5},{x:167,y:49.5},{x:173,y:49.5},{x:227,y:49.5},{x:233,y:49.5},{x:233,y:49.5},{x:239,y:49.5},{x:18,y:50.5},{x:23,y:50.5},{x:23,y:50.5},{x:30,y:50.5},{x:57,y:50.5},{x:63,y:50.5},{x:63,y:50.5},{x:69,y:50.5},{x:161,y:50.5},{x:167,y:50.5},{x:167,y:50.5},{x:173,y:50.5},{x:227,y:50.5},{x:233,y:50.5},{x:233,y:50.5},{x:239,y:50.5},{x:18,y:51.5},{x:23,y:51.5},{x:23,y:51.5},{x:30,y:51.5},{x:57,y:51.5},{x:63,y:51.5},{x:63,y:51.5},{x:69,y:51.5},{x:161,y:51.5},{x:167,y:51.5},{x:167,y:51.5},{x:173,y:51.5},{x:227,y:51.5},{x:233,y:51.5},{x:233,y:51.5},{x:239,y:51.5},{x:18,y:52.5},{x:23,y:52.5},{x:23,y:52.5},{x:30,y:52.5},{x:57,y:52.5},{x:63,y:52.5},{x:63,y:52.5},{x:69,y:52.5},{x:161,y:52.5},{x:167,y:52.5},{x:167,y:52.5},{x:173,y:52.5},{x:227,y:52.5},{x:233,y:52.5},{x:233,y:52.5},{x:239,y:52.5},{x:18,y:53.5},{x:23,y:53.5},{x:23,y:53.5},{x:30,y:53.5},{x:57,y:53.5},{x:63,y:53.5},{x:63,y:53.5},{x:69,y:53.5},{x:161,y:53.5},{x:167,y:53.5},{x:167,y:53.5},{x:173,y:53.5},{x:227,y:53.5},{x:233,y:53.5},{x:233,y:53.5},{x:239,y:53.5},{x:18,y:54.5},{x:23,y:54.5},{x:23,y:54.5},{x:30,y:54.5},{x:57,y:54.5},{x:63,y:54.5},{x:63,y:54.5},{x:69,y:54.5},{x:161,y:54.5},{x:167,y:54.5},{x:167,y:54.5},{x:173,y:54.5},{x:227,y:54.5},{x:233,y:54.5},{x:233,y:54.5},{x:239,y:54.5},{x:18,y:55.5},{x:23,y:55.5},{x:23,y:55.5},{x:30,y:55.5},{x:57,y:55.5},{x:63,y:55.5},{x:63,y:55.5},{x:69,y:55.5},{x:161,y:55.5},{x:167,y:55.5},{x:167,y:55.5},{x:173,y:55.5},{x:227,y:55.5},{x:233,y:55.5},{x:233,y:55.5},{x:239,y:55.5},{x:18,y:56.5},{x:23,y:56.5},{x:23,y:56.5},{x:30,y:56.5},{x:57,y:56.5},{x:63,y:56.5},{x:63,y:56.5},{x:69,y:56.5},{x:161,y:56.5},{x:167,y:56.5},{x:167,y:56.5},{x:173,y:56.5},{x:227,y:56.5},{x:233,y:56.5},{x:233,y:56.5},{x:239,y:56.5},{x:18,y:57.5},{x:23,y:57.5},{x:23,y:57.5},{x:30,y:57.5},{x:57,y:57.5},{x:63,y:57.5},{x:63,y:57.5},{x:69,y:57.5},{x:161,y:57.5},{x:167,y:57.5},{x:167,y:57.5},{x:173,y:57.5},{x:227,y:57.5},{x:233,y:57.5},{x:233,y:57.5},{x:239,y:57.5},{x:18,y:58.5},{x:23,y:58.5},{x:23,y:58.5},{x:30,y:58.5},{x:57,y:58.5},{x:63,y:58.5},{x:63,y:58.5},{x:69,y:58.5},{x:161,y:58.5},{x:167,y:58.5},{x:167,y:58.5},{x:173,y:58.5},{x:173,y:58.5},{x:174,y:58.5},{x:175,y:58.5},{x:176,y:58.5},{x:177,y:58.5},{x:178,y:58.5},{x:179,y:58.5},{x:180,y:58.5},{x:181,y:58.5},{x:182,y:58.5},{x:183,y:58.5},{x:184,y:58.5},{x:185,y:58.5},{x:186,y:58.5},{x:187,y:58.5},{x:188,y:58.5},{x:189,y:58.5},{x:190,y:58.5},{x:191,y:58.5},{x:192,y:58.5},{x:193,y:58.5},{x:194,y:58.5},{x:195,y:58.5},{x:199,y:58.5},{x:200,y:58.5},{x:201,y:58.5},{x:202,y:58.5},{x:203,y:58.5},{x:204,y:58.5},{x:205,y:58.5},{x:206,y:58.5},{x:207,y:58.5},{x:208,y:58.5},{x:209,y:58.5},{x:210,y:58.5},{x:211,y:58.5},{x:212,y:58.5},{x:213,y:58.5},{x:214,y:58.5},{x:215,y:58.5},{x:216,y:58.5},{x:217,y:58.5},{x:218,y:58.5},{x:219,y:58.5},{x:220,y:58.5},{x:221,y:58.5},{x:222,y:58.5},{x:223,y:58.5},{x:224,y:58.5},{x:225,y:58.5},{x:226,y:58.5},{x:227,y:58.5},{x:227,y:58.5},{x:233,y:58.5},{x:233,y:58.5},{x:239,y:58.5},{x:18,y:59.5},{x:23,y:59.5},{x:23,y:59.5},{x:30,y:59.5},{x:31,y:59.5},{x:32,y:59.5},{x:33,y:59.5},{x:34,y:59.5},{x:35,y:59.5},{x:36,y:59.5},{x:37,y:59.5},{x:38,y:59.5},{x:39,y:59.5},{x:40,y:59.5},{x:41,y:59.5},{x:46,y:59.5},{x:47,y:59.5},{x:48,y:59.5},{x:49,y:59.5},{x:50,y:59.5},{x:51,y:59.5},{x:51,y:59.5},{x:52,y:59.5},{x:53,y:59.5},{x:54,y:59.5},{x:55,y:59.5},{x:56,y:59.5},{x:57,y:59.5},{x:63,y:59.5},{x:63,y:59.5},{x:69,y:59.5},{x:161,y:59.5},{x:167,y:59.5},{x:167,y:59.5},{x:173,y:59.5},{x:173,y:59.5},{x:195,y:59.5},{x:199,y:59.5},{x:227,y:59.5},{x:227,y:59.5},{x:233,y:59.5},{x:233,y:59.5},{x:239,y:59.5},{x:18,y:60.5},{x:23,y:60.5},{x:23,y:60.5},{x:30,y:60.5},{x:31,y:60.5},{x:32,y:60.5},{x:33,y:60.5},{x:34,y:60.5},{x:35,y:60.5},{x:36,y:60.5},{x:36,y:60.5},{x:37,y:60.5},{x:38,y:60.5},{x:39,y:60.5},{x:40,y:60.5},{x:41,y:60.5},{x:46,y:60.5},{x:47,y:60.5},{x:48,y:60.5},{x:49,y:60.5},{x:50,y:60.5},{x:51,y:60.5},{x:51,y:60.5},{x:52,y:60.5},{x:53,y:60.5},{x:54,y:60.5},{x:55,y:60.5},{x:56,y:60.5},{x:63,y:60.5},{x:63,y:60.5},{x:69,y:60.5},{x:161,y:60.5},{x:167,y:60.5},{x:167,y:60.5},{x:173,y:60.5},{x:173,y:60.5},{x:195,y:60.5},{x:199,y:60.5},{x:227,y:60.5},{x:227,y:60.5},{x:233,y:60.5},{x:233,y:60.5},{x:239,y:60.5},{x:18,y:61.5},{x:23,y:61.5},{x:23,y:61.5},{x:36,y:61.5},{x:36,y:61.5},{x:41,y:61.5},{x:46,y:61.5},{x:51,y:61.5},{x:51,y:61.5},{x:63,y:61.5},{x:63,y:61.5},{x:69,y:61.5},{x:161,y:61.5},{x:167,y:61.5},{x:167,y:61.5},{x:173,y:61.5},{x:173,y:61.5},{x:195,y:61.5},{x:199,y:61.5},{x:227,y:61.5},{x:227,y:61.5},{x:233,y:61.5},{x:233,y:61.5},{x:239,y:61.5},{x:18,y:62.5},{x:23,y:62.5},{x:23,y:62.5},{x:36,y:62.5},{x:36,y:62.5},{x:41,y:62.5},{x:46,y:62.5},{x:51,y:62.5},{x:51,y:62.5},{x:63,y:62.5},{x:63,y:62.5},{x:69,y:62.5},{x:161,y:62.5},{x:167,y:62.5},{x:167,y:62.5},{x:173,y:62.5},{x:173,y:62.5},{x:195,y:62.5},{x:199,y:62.5},{x:227,y:62.5},{x:227,y:62.5},{x:233,y:62.5},{x:233,y:62.5},{x:239,y:62.5},{x:18,y:63.5},{x:23,y:63.5},{x:23,y:63.5},{x:36,y:63.5},{x:36,y:63.5},{x:41,y:63.5},{x:46,y:63.5},{x:51,y:63.5},{x:51,y:63.5},{x:63,y:63.5},{x:63,y:63.5},{x:69,y:63.5},{x:161,y:63.5},{x:167,y:63.5},{x:167,y:63.5},{x:173,y:63.5},{x:173,y:63.5},{x:174,y:63.5},{x:174,y:63.5},{x:175,y:63.5},{x:175,y:63.5},{x:176,y:63.5},{x:176,y:63.5},{x:177,y:63.5},{x:177,y:63.5},{x:178,y:63.5},{x:178,y:63.5},{x:179,y:63.5},{x:179,y:63.5},{x:180,y:63.5},{x:180,y:63.5},{x:181,y:63.5},{x:181,y:63.5},{x:182,y:63.5},{x:182,y:63.5},{x:183,y:63.5},{x:183,y:63.5},{x:184,y:63.5},{x:184,y:63.5},{x:185,y:63.5},{x:185,y:63.5},{x:186,y:63.5},{x:186,y:63.5},{x:187,y:63.5},{x:187,y:63.5},{x:188,y:63.5},{x:188,y:63.5},{x:189,y:63.5},{x:189,y:63.5},{x:189,y:63.5},{x:190,y:63.5},{x:190,y:63.5},{x:191,y:63.5},{x:191,y:63.5},{x:192,y:63.5},{x:192,y:63.5},{x:193,y:63.5},{x:193,y:63.5},{x:194,y:63.5},{x:194,y:63.5},{x:195,y:63.5},{x:195,y:63.5},{x:199,y:63.5},{x:199,y:63.5},{x:200,y:63.5},{x:200,y:63.5},{x:201,y:63.5},{x:201,y:63.5},{x:202,y:63.5},{x:202,y:63.5},{x:203,y:63.5},{x:203,y:63.5},{x:204,y:63.5},{x:204,y:63.5},{x:204,y:63.5},{x:205,y:63.5},{x:205,y:63.5},{x:206,y:63.5},{x:206,y:63.5},{x:207,y:63.5},{x:207,y:63.5},{x:208,y:63.5},{x:208,y:63.5},{x:209,y:63.5},{x:209,y:63.5},{x:210,y:63.5},{x:210,y:63.5},{x:211,y:63.5},{x:211,y:63.5},{x:212,y:63.5},{x:212,y:63.5},{x:213,y:63.5},{x:213,y:63.5},{x:214,y:63.5},{x:214,y:63.5},{x:215,y:63.5},{x:215,y:63.5},{x:216,y:63.5},{x:216,y:63.5},{x:217,y:63.5},{x:217,y:63.5},{x:218,y:63.5},{x:218,y:63.5},{x:219,y:63.5},{x:219,y:63.5},{x:220,y:63.5},{x:220,y:63.5},{x:221,y:63.5},{x:221,y:63.5},{x:222,y:63.5},{x:222,y:63.5},{x:223,y:63.5},{x:223,y:63.5},{x:224,y:63.5},{x:224,y:63.5},{x:225,y:63.5},{x:225,y:63.5},{x:226,y:63.5},{x:226,y:63.5},{x:227,y:63.5},{x:227,y:63.5},{x:233,y:63.5},{x:233,y:63.5},{x:239,y:63.5},{x:18,y:64.5},{x:23,y:64.5},{x:23,y:64.5},{x:36,y:64.5},{x:36,y:64.5},{x:41,y:64.5},{x:46,y:64.5},{x:51,y:64.5},{x:51,y:64.5},{x:63,y:64.5},{x:63,y:64.5},{x:69,y:64.5},{x:161,y:64.5},{x:167,y:64.5},{x:167,y:64.5},{x:189,y:64.5},{x:189,y:64.5},{x:195,y:64.5},{x:199,y:64.5},{x:204,y:64.5},{x:204,y:64.5},{x:233,y:64.5},{x:233,y:64.5},{x:239,y:64.5},{x:18,y:65.5},{x:23,y:65.5},{x:23,y:65.5},{x:36,y:65.5},{x:36,y:65.5},{x:41,y:65.5},{x:46,y:65.5},{x:51,y:65.5},{x:51,y:65.5},{x:63,y:65.5},{x:63,y:65.5},{x:69,y:65.5},{x:161,y:65.5},{x:167,y:65.5},{x:167,y:65.5},{x:189,y:65.5},{x:189,y:65.5},{x:195,y:65.5},{x:199,y:65.5},{x:204,y:65.5},{x:204,y:65.5},{x:233,y:65.5},{x:233,y:65.5},{x:239,y:65.5},{x:18,y:66.5},{x:18,y:66.5},{x:19,y:66.5},{x:19,y:66.5},{x:20,y:66.5},{x:20,y:66.5},{x:21,y:66.5},{x:21,y:66.5},{x:22,y:66.5},{x:22,y:66.5},{x:23,y:66.5},{x:23,y:66.5},{x:23,y:66.5},{x:24,y:66.5},{x:24,y:66.5},{x:25,y:66.5},{x:25,y:66.5},{x:26,y:66.5},{x:26,y:66.5},{x:27,y:66.5},{x:27,y:66.5},{x:28,y:66.5},{x:28,y:66.5},{x:29,y:66.5},{x:29,y:66.5},{x:30,y:66.5},{x:30,y:66.5},{x:31,y:66.5},{x:31,y:66.5},{x:32,y:66.5},{x:32,y:66.5},{x:33,y:66.5},{x:33,y:66.5},{x:34,y:66.5},{x:34,y:66.5},{x:35,y:66.5},{x:35,y:66.5},{x:36,y:66.5},{x:36,y:66.5},{x:36,y:66.5},{x:37,y:66.5},{x:37,y:66.5},{x:38,y:66.5},{x:38,y:66.5},{x:39,y:66.5},{x:39,y:66.5},{x:40,y:66.5},{x:40,y:66.5},{x:41,y:66.5},{x:41,y:66.5},{x:46,y:66.5},{x:46,y:66.5},{x:47,y:66.5},{x:47,y:66.5},{x:48,y:66.5},{x:48,y:66.5},{x:49,y:66.5},{x:49,y:66.5},{x:50,y:66.5},{x:50,y:66.5},{x:51,y:66.5},{x:51,y:66.5},{x:51,y:66.5},{x:52,y:66.5},{x:52,y:66.5},{x:53,y:66.5},{x:53,y:66.5},{x:54,y:66.5},{x:54,y:66.5},{x:55,y:66.5},{x:55,y:66.5},{x:56,y:66.5},{x:56,y:66.5},{x:57,y:66.5},{x:57,y:66.5},{x:58,y:66.5},{x:58,y:66.5},{x:59,y:66.5},{x:59,y:66.5},{x:60,y:66.5},{x:60,y:66.5},{x:61,y:66.5},{x:61,y:66.5},{x:62,y:66.5},{x:62,y:66.5},{x:63,y:66.5},{x:63,y:66.5},{x:63,y:66.5},{x:64,y:66.5},{x:64,y:66.5},{x:65,y:66.5},{x:65,y:66.5},{x:66,y:66.5},{x:66,y:66.5},{x:67,y:66.5},{x:67,y:66.5},{x:68,y:66.5},{x:68,y:66.5},{x:69,y:66.5},{x:69,y:66.5},{x:161,y:66.5},{x:167,y:66.5},{x:167,y:66.5},{x:189,y:66.5},{x:189,y:66.5},{x:195,y:66.5},{x:199,y:66.5},{x:204,y:66.5},{x:204,y:66.5},{x:233,y:66.5},{x:233,y:66.5},{x:239,y:66.5},{x:18,y:67.5},{x:41,y:67.5},{x:46,y:67.5},{x:69,y:67.5},{x:161,y:67.5},{x:167,y:67.5},{x:167,y:67.5},{x:189,y:67.5},{x:189,y:67.5},{x:195,y:67.5},{x:199,y:67.5},{x:204,y:67.5},{x:204,y:67.5},{x:233,y:67.5},{x:233,y:67.5},{x:239,y:67.5},{x:18,y:68.5},{x:41,y:68.5},{x:46,y:68.5},{x:69,y:68.5},{x:161,y:68.5},{x:167,y:68.5},{x:167,y:68.5},{x:189,y:68.5},{x:189,y:68.5},{x:195,y:68.5},{x:199,y:68.5},{x:204,y:68.5},{x:204,y:68.5},{x:233,y:68.5},{x:233,y:68.5},{x:239,y:68.5},{x:18,y:69.5},{x:41,y:69.5},{x:46,y:69.5},{x:69,y:69.5},{x:161,y:69.5},{x:162,y:69.5},{x:162,y:69.5},{x:163,y:69.5},{x:163,y:69.5},{x:164,y:69.5},{x:164,y:69.5},{x:165,y:69.5},{x:165,y:69.5},{x:166,y:69.5},{x:166,y:69.5},{x:167,y:69.5},{x:167,y:69.5},{x:167,y:69.5},{x:168,y:69.5},{x:168,y:69.5},{x:169,y:69.5},{x:169,y:69.5},{x:170,y:69.5},{x:170,y:69.5},{x:171,y:69.5},{x:171,y:69.5},{x:172,y:69.5},{x:172,y:69.5},{x:173,y:69.5},{x:173,y:69.5},{x:174,y:69.5},{x:174,y:69.5},{x:175,y:69.5},{x:175,y:69.5},{x:176,y:69.5},{x:176,y:69.5},{x:177,y:69.5},{x:177,y:69.5},{x:178,y:69.5},{x:178,y:69.5},{x:179,y:69.5},{x:179,y:69.5},{x:180,y:69.5},{x:180,y:69.5},{x:181,y:69.5},{x:181,y:69.5},{x:182,y:69.5},{x:182,y:69.5},{x:183,y:69.5},{x:183,y:69.5},{x:184,y:69.5},{x:184,y:69.5},{x:185,y:69.5},{x:185,y:69.5},{x:186,y:69.5},{x:186,y:69.5},{x:187,y:69.5},{x:187,y:69.5},{x:188,y:69.5},{x:188,y:69.5},{x:189,y:69.5},{x:189,y:69.5},{x:189,y:69.5},{x:190,y:69.5},{x:190,y:69.5},{x:191,y:69.5},{x:191,y:69.5},{x:192,y:69.5},{x:192,y:69.5},{x:193,y:69.5},{x:193,y:69.5},{x:194,y:69.5},{x:194,y:69.5},{x:195,y:69.5},{x:199,y:69.5},{x:199,y:69.5},{x:200,y:69.5},{x:200,y:69.5},{x:201,y:69.5},{x:201,y:69.5},{x:202,y:69.5},{x:202,y:69.5},{x:203,y:69.5},{x:203,y:69.5},{x:204,y:69.5},{x:204,y:69.5},{x:204,y:69.5},{x:205,y:69.5},{x:205,y:69.5},{x:206,y:69.5},{x:206,y:69.5},{x:207,y:69.5},{x:207,y:69.5},{x:208,y:69.5},{x:208,y:69.5},{x:209,y:69.5},{x:209,y:69.5},{x:210,y:69.5},{x:210,y:69.5},{x:211,y:69.5},{x:211,y:69.5},{x:212,y:69.5},{x:212,y:69.5},{x:213,y:69.5},{x:213,y:69.5},{x:214,y:69.5},{x:214,y:69.5},{x:215,y:69.5},{x:215,y:69.5},{x:216,y:69.5},{x:216,y:69.5},{x:217,y:69.5},{x:217,y:69.5},{x:218,y:69.5},{x:218,y:69.5},{x:219,y:69.5},{x:219,y:69.5},{x:220,y:69.5},{x:220,y:69.5},{x:221,y:69.5},{x:221,y:69.5},{x:222,y:69.5},{x:222,y:69.5},{x:223,y:69.5},{x:223,y:69.5},{x:224,y:69.5},{x:224,y:69.5},{x:225,y:69.5},{x:225,y:69.5},{x:226,y:69.5},{x:226,y:69.5},{x:227,y:69.5},{x:227,y:69.5},{x:228,y:69.5},{x:228,y:69.5},{x:229,y:69.5},{x:229,y:69.5},{x:230,y:69.5},{x:230,y:69.5},{x:231,y:69.5},{x:231,y:69.5},{x:232,y:69.5},{x:232,y:69.5},{x:233,y:69.5},{x:233,y:69.5},{x:233,y:69.5},{x:234,y:69.5},{x:234,y:69.5},{x:235,y:69.5},{x:235,y:69.5},{x:236,y:69.5},{x:236,y:69.5},{x:237,y:69.5},{x:237,y:69.5},{x:238,y:69.5},{x:238,y:69.5},{x:239,y:69.5},{x:18,y:70.5},{x:41,y:70.5},{x:46,y:70.5},{x:69,y:70.5},{x:161,y:70.5},{x:162,y:70.5},{x:163,y:70.5},{x:164,y:70.5},{x:165,y:70.5},{x:166,y:70.5},{x:167,y:70.5},{x:168,y:70.5},{x:169,y:70.5},{x:170,y:70.5},{x:171,y:70.5},{x:172,y:70.5},{x:173,y:70.5},{x:174,y:70.5},{x:175,y:70.5},{x:176,y:70.5},{x:177,y:70.5},{x:178,y:70.5},{x:179,y:70.5},{x:180,y:70.5},{x:181,y:70.5},{x:182,y:70.5},{x:183,y:70.5},{x:184,y:70.5},{x:185,y:70.5},{x:186,y:70.5},{x:187,y:70.5},{x:188,y:70.5},{x:189,y:70.5},{x:190,y:70.5},{x:191,y:70.5},{x:192,y:70.5},{x:193,y:70.5},{x:194,y:70.5},{x:195,y:70.5},{x:199,y:70.5},{x:199,y:70.5},{x:200,y:70.5},{x:201,y:70.5},{x:202,y:70.5},{x:203,y:70.5},{x:204,y:70.5},{x:205,y:70.5},{x:206,y:70.5},{x:207,y:70.5},{x:208,y:70.5},{x:209,y:70.5},{x:210,y:70.5},{x:211,y:70.5},{x:212,y:70.5},{x:213,y:70.5},{x:214,y:70.5},{x:215,y:70.5},{x:216,y:70.5},{x:217,y:70.5},{x:218,y:70.5},{x:219,y:70.5},{x:220,y:70.5},{x:221,y:70.5},{x:222,y:70.5},{x:223,y:70.5},{x:224,y:70.5},{x:225,y:70.5},{x:226,y:70.5},{x:227,y:70.5},{x:228,y:70.5},{x:229,y:70.5},{x:230,y:70.5},{x:231,y:70.5},{x:232,y:70.5},{x:233,y:70.5},{x:234,y:70.5},{x:235,y:70.5},{x:236,y:70.5},{x:237,y:70.5},{x:238,y:70.5},{x:239,y:70.5},{x:18,y:71.5},{x:19,y:71.5},{x:20,y:71.5},{x:21,y:71.5},{x:22,y:71.5},{x:23,y:71.5},{x:24,y:71.5},{x:25,y:71.5},{x:26,y:71.5},{x:27,y:71.5},{x:28,y:71.5},{x:29,y:71.5},{x:30,y:71.5},{x:31,y:71.5},{x:32,y:71.5},{x:33,y:71.5},{x:34,y:71.5},{x:35,y:71.5},{x:36,y:71.5},{x:37,y:71.5},{x:38,y:71.5},{x:39,y:71.5},{x:40,y:71.5},{x:41,y:71.5},{x:46,y:71.5},{x:47,y:71.5},{x:48,y:71.5},{x:49,y:71.5},{x:50,y:71.5},{x:51,y:71.5},{x:52,y:71.5},{x:53,y:71.5},{x:54,y:71.5},{x:55,y:71.5},{x:56,y:71.5},{x:57,y:71.5},{x:58,y:71.5},{x:59,y:71.5},{x:60,y:71.5},{x:61,y:71.5},{x:62,y:71.5},{x:63,y:71.5},{x:64,y:71.5},{x:65,y:71.5},{x:66,y:71.5},{x:67,y:71.5},{x:68,y:71.5},{x:69,y:71.5},{x:161,y:71.5},{x:195,y:71.5},{x:199,y:71.5},{x:239,y:71.5},{x:161,y:72.5},{x:195,y:72.5},{x:199,y:72.5},{x:239,y:72.5},{x:161,y:73.5},{x:195,y:73.5},{x:199,y:73.5},{x:239,y:73.5},{x:161,y:74.5},{x:195,y:74.5},{x:199,y:74.5},{x:239,y:74.5},{x:162,y:75.5},{x:163,y:75.5},{x:164,y:75.5},{x:165,y:75.5},{x:166,y:75.5},{x:167,y:75.5},{x:168,y:75.5},{x:169,y:75.5},{x:170,y:75.5},{x:171,y:75.5},{x:172,y:75.5},{x:173,y:75.5},{x:174,y:75.5},{x:175,y:75.5},{x:176,y:75.5},{x:177,y:75.5},{x:178,y:75.5},{x:179,y:75.5},{x:180,y:75.5},{x:181,y:75.5},{x:182,y:75.5},{x:183,y:75.5},{x:184,y:75.5},{x:185,y:75.5},{x:186,y:75.5},{x:187,y:75.5},{x:188,y:75.5},{x:189,y:75.5},{x:190,y:75.5},{x:191,y:75.5},{x:192,y:75.5},{x:193,y:75.5},{x:194,y:75.5},{x:199,y:75.5},{x:200,y:75.5},{x:201,y:75.5},{x:202,y:75.5},{x:203,y:75.5},{x:204,y:75.5},{x:205,y:75.5},{x:206,y:75.5},{x:207,y:75.5},{x:208,y:75.5},{x:209,y:75.5},{x:210,y:75.5},{x:211,y:75.5},{x:212,y:75.5},{x:213,y:75.5},{x:214,y:75.5},{x:215,y:75.5},{x:216,y:75.5},{x:217,y:75.5},{x:218,y:75.5},{x:219,y:75.5},{x:220,y:75.5},{x:221,y:75.5},{x:222,y:75.5},{x:223,y:75.5},{x:224,y:75.5},{x:225,y:75.5},{x:226,y:75.5},{x:227,y:75.5},{x:228,y:75.5},{x:229,y:75.5},{x:230,y:75.5},{x:231,y:75.5},{x:232,y:75.5},{x:233,y:75.5},{x:234,y:75.5},{x:235,y:75.5},{x:236,y:75.5},{x:237,y:75.5},{x:238,y:75.5}]
var stage_2_collision_data = [{x:160,y:16.5},{x:161,y:16.5},{x:162,y:16.5},{x:163,y:16.5},{x:164,y:16.5},{x:165,y:16.5},{x:166,y:16.5},{x:167,y:16.5},{x:168,y:16.5},{x:169,y:16.5},{x:170,y:16.5},{x:171,y:16.5},{x:172,y:16.5},{x:173,y:16.5},{x:174,y:16.5},{x:175,y:16.5},{x:176,y:16.5},{x:177,y:16.5},{x:178,y:16.5},{x:179,y:16.5},{x:180,y:16.5},{x:181,y:16.5},{x:182,y:16.5},{x:183,y:16.5},{x:184,y:16.5},{x:185,y:16.5},{x:186,y:16.5},{x:187,y:16.5},{x:188,y:16.5},{x:189,y:16.5},{x:190,y:16.5},{x:191,y:16.5},{x:192,y:16.5},{x:193,y:16.5},{x:194,y:16.5},{x:195,y:16.5},{x:196,y:16.5},{x:197,y:16.5},{x:198,y:16.5},{x:199,y:16.5},{x:200,y:16.5},{x:201,y:16.5},{x:202,y:16.5},{x:203,y:16.5},{x:204,y:16.5},{x:205,y:16.5},{x:206,y:16.5},{x:207,y:16.5},{x:208,y:16.5},{x:209,y:16.5},{x:210,y:16.5},{x:211,y:16.5},{x:212,y:16.5},{x:213,y:16.5},{x:214,y:16.5},{x:215,y:16.5},{x:216,y:16.5},{x:217,y:16.5},{x:218,y:16.5},{x:219,y:16.5},{x:220,y:16.5},{x:221,y:16.5},{x:222,y:16.5},{x:223,y:16.5},{x:224,y:16.5},{x:225,y:16.5},{x:226,y:16.5},{x:227,y:16.5},{x:228,y:16.5},{x:229,y:16.5},{x:230,y:16.5},{x:231,y:16.5},{x:232,y:16.5},{x:233,y:16.5},{x:234,y:16.5},{x:235,y:16.5},{x:236,y:16.5},{x:237,y:16.5},{x:238,y:16.5},{x:239,y:16.5},{x:240,y:16.5},{x:241,y:16.5},{x:242,y:16.5},{x:243,y:16.5},{x:244,y:16.5},{x:245,y:16.5},{x:246,y:16.5},{x:247,y:16.5},{x:248,y:16.5},{x:249,y:16.5},{x:250,y:16.5},{x:160,y:17.5},{x:250,y:17.5},{x:160,y:18.5},{x:250,y:18.5},{x:160,y:19.5},{x:250,y:19.5},{x:160,y:20.5},{x:250,y:20.5},{x:160,y:21.5},{x:250,y:21.5},{x:160,y:22.5},{x:250,y:22.5},{x:160,y:23.5},{x:167,y:23.5},{x:168,y:23.5},{x:169,y:23.5},{x:170,y:23.5},{x:171,y:23.5},{x:172,y:23.5},{x:173,y:23.5},{x:174,y:23.5},{x:175,y:23.5},{x:176,y:23.5},{x:177,y:23.5},{x:178,y:23.5},{x:179,y:23.5},{x:180,y:23.5},{x:181,y:23.5},{x:182,y:23.5},{x:183,y:23.5},{x:184,y:23.5},{x:185,y:23.5},{x:186,y:23.5},{x:187,y:23.5},{x:188,y:23.5},{x:189,y:23.5},{x:190,y:23.5},{x:191,y:23.5},{x:192,y:23.5},{x:193,y:23.5},{x:194,y:23.5},{x:195,y:23.5},{x:196,y:23.5},{x:197,y:23.5},{x:198,y:23.5},{x:199,y:23.5},{x:200,y:23.5},{x:201,y:23.5},{x:202,y:23.5},{x:203,y:23.5},{x:204,y:23.5},{x:205,y:23.5},{x:206,y:23.5},{x:207,y:23.5},{x:208,y:23.5},{x:209,y:23.5},{x:210,y:23.5},{x:211,y:23.5},{x:212,y:23.5},{x:213,y:23.5},{x:214,y:23.5},{x:215,y:23.5},{x:216,y:23.5},{x:217,y:23.5},{x:218,y:23.5},{x:219,y:23.5},{x:220,y:23.5},{x:221,y:23.5},{x:222,y:23.5},{x:223,y:23.5},{x:224,y:23.5},{x:225,y:23.5},{x:226,y:23.5},{x:227,y:23.5},{x:228,y:23.5},{x:229,y:23.5},{x:230,y:23.5},{x:231,y:23.5},{x:232,y:23.5},{x:233,y:23.5},{x:234,y:23.5},{x:235,y:23.5},{x:236,y:23.5},{x:237,y:23.5},{x:238,y:23.5},{x:239,y:23.5},{x:240,y:23.5},{x:241,y:23.5},{x:242,y:23.5},{x:243,y:23.5},{x:250,y:23.5},{x:160,y:24.5},{x:167,y:24.5},{x:243,y:24.5},{x:250,y:24.5},{x:160,y:25.5},{x:167,y:25.5},{x:243,y:25.5},{x:250,y:25.5},{x:160,y:26.5},{x:167,y:26.5},{x:243,y:26.5},{x:250,y:26.5},{x:160,y:27.5},{x:167,y:27.5},{x:243,y:27.5},{x:250,y:27.5},{x:160,y:28.5},{x:167,y:28.5},{x:243,y:28.5},{x:250,y:28.5},{x:160,y:29.5},{x:167,y:29.5},{x:243,y:29.5},{x:250,y:29.5},{x:160,y:30.5},{x:167,y:30.5},{x:243,y:30.5},{x:250,y:30.5},{x:160,y:31.5},{x:167,y:31.5},{x:243,y:31.5},{x:250,y:31.5},{x:160,y:32.5},{x:167,y:32.5},{x:243,y:32.5},{x:250,y:32.5},{x:160,y:33.5},{x:167,y:33.5},{x:243,y:33.5},{x:250,y:33.5},{x:160,y:34.5},{x:167,y:34.5},{x:243,y:34.5},{x:250,y:34.5},{x:160,y:35.5},{x:167,y:35.5},{x:243,y:35.5},{x:250,y:35.5},{x:160,y:36.5},{x:167,y:36.5},{x:243,y:36.5},{x:250,y:36.5},{x:160,y:37.5},{x:167,y:37.5},{x:243,y:37.5},{x:250,y:37.5},{x:160,y:38.5},{x:167,y:38.5},{x:243,y:38.5},{x:250,y:38.5},{x:160,y:39.5},{x:167,y:39.5},{x:243,y:39.5},{x:250,y:39.5},{x:160,y:40.5},{x:167,y:40.5},{x:243,y:40.5},{x:250,y:40.5},{x:160,y:41.5},{x:167,y:41.5},{x:243,y:41.5},{x:250,y:41.5},{x:160,y:42.5},{x:167,y:42.5},{x:243,y:42.5},{x:250,y:42.5},{x:160,y:43.5},{x:167,y:43.5},{x:168,y:43.5},{x:169,y:43.5},{x:170,y:43.5},{x:171,y:43.5},{x:172,y:43.5},{x:173,y:43.5},{x:174,y:43.5},{x:175,y:43.5},{x:176,y:43.5},{x:177,y:43.5},{x:178,y:43.5},{x:179,y:43.5},{x:180,y:43.5},{x:181,y:43.5},{x:182,y:43.5},{x:183,y:43.5},{x:184,y:43.5},{x:185,y:43.5},{x:186,y:43.5},{x:187,y:43.5},{x:188,y:43.5},{x:189,y:43.5},{x:190,y:43.5},{x:191,y:43.5},{x:192,y:43.5},{x:193,y:43.5},{x:194,y:43.5},{x:195,y:43.5},{x:196,y:43.5},{x:197,y:43.5},{x:198,y:43.5},{x:212,y:43.5},{x:213,y:43.5},{x:214,y:43.5},{x:215,y:43.5},{x:216,y:43.5},{x:217,y:43.5},{x:218,y:43.5},{x:219,y:43.5},{x:220,y:43.5},{x:221,y:43.5},{x:222,y:43.5},{x:223,y:43.5},{x:224,y:43.5},{x:225,y:43.5},{x:226,y:43.5},{x:227,y:43.5},{x:228,y:43.5},{x:229,y:43.5},{x:230,y:43.5},{x:231,y:43.5},{x:232,y:43.5},{x:233,y:43.5},{x:234,y:43.5},{x:235,y:43.5},{x:236,y:43.5},{x:237,y:43.5},{x:238,y:43.5},{x:239,y:43.5},{x:240,y:43.5},{x:241,y:43.5},{x:242,y:43.5},{x:243,y:43.5},{x:250,y:43.5},{x:160,y:44.5},{x:197,y:44.5},{x:198,y:44.5},{x:212,y:44.5},{x:213,y:44.5},{x:250,y:44.5},{x:160,y:45.5},{x:197,y:45.5},{x:198,y:45.5},{x:212,y:45.5},{x:213,y:45.5},{x:250,y:45.5},{x:160,y:46.5},{x:197,y:46.5},{x:198,y:46.5},{x:212,y:46.5},{x:213,y:46.5},{x:250,y:46.5},{x:160,y:47.5},{x:197,y:47.5},{x:198,y:47.5},{x:212,y:47.5},{x:213,y:47.5},{x:250,y:47.5},{x:160,y:48.5},{x:197,y:48.5},{x:198,y:48.5},{x:212,y:48.5},{x:213,y:48.5},{x:250,y:48.5},{x:160,y:49.5},{x:161,y:49.5},{x:162,y:49.5},{x:163,y:49.5},{x:164,y:49.5},{x:165,y:49.5},{x:166,y:49.5},{x:167,y:49.5},{x:168,y:49.5},{x:169,y:49.5},{x:170,y:49.5},{x:171,y:49.5},{x:172,y:49.5},{x:173,y:49.5},{x:174,y:49.5},{x:175,y:49.5},{x:176,y:49.5},{x:177,y:49.5},{x:178,y:49.5},{x:179,y:49.5},{x:180,y:49.5},{x:181,y:49.5},{x:182,y:49.5},{x:183,y:49.5},{x:184,y:49.5},{x:185,y:49.5},{x:186,y:49.5},{x:187,y:49.5},{x:188,y:49.5},{x:189,y:49.5},{x:190,y:49.5},{x:191,y:49.5},{x:192,y:49.5},{x:193,y:49.5},{x:194,y:49.5},{x:195,y:49.5},{x:196,y:49.5},{x:197,y:49.5},{x:198,y:49.5},{x:212,y:49.5},{x:213,y:49.5},{x:214,y:49.5},{x:215,y:49.5},{x:216,y:49.5},{x:217,y:49.5},{x:218,y:49.5},{x:219,y:49.5},{x:220,y:49.5},{x:221,y:49.5},{x:222,y:49.5},{x:223,y:49.5},{x:224,y:49.5},{x:225,y:49.5},{x:226,y:49.5},{x:227,y:49.5},{x:228,y:49.5},{x:229,y:49.5},{x:230,y:49.5},{x:231,y:49.5},{x:232,y:49.5},{x:233,y:49.5},{x:234,y:49.5},{x:235,y:49.5},{x:236,y:49.5},{x:237,y:49.5},{x:238,y:49.5},{x:239,y:49.5},{x:240,y:49.5},{x:241,y:49.5},{x:242,y:49.5},{x:243,y:49.5},{x:244,y:49.5},{x:245,y:49.5},{x:246,y:49.5},{x:247,y:49.5},{x:248,y:49.5},{x:249,y:49.5},{x:250,y:49.5},{x:160,y:50.5},{x:161,y:50.5},{x:162,y:50.5},{x:163,y:50.5},{x:164,y:50.5},{x:165,y:50.5},{x:166,y:50.5},{x:167,y:50.5},{x:168,y:50.5},{x:169,y:50.5},{x:170,y:50.5},{x:171,y:50.5},{x:172,y:50.5},{x:173,y:50.5},{x:174,y:50.5},{x:175,y:50.5},{x:176,y:50.5},{x:177,y:50.5},{x:178,y:50.5},{x:179,y:50.5},{x:180,y:50.5},{x:181,y:50.5},{x:182,y:50.5},{x:183,y:50.5},{x:184,y:50.5},{x:185,y:50.5},{x:186,y:50.5},{x:187,y:50.5},{x:188,y:50.5},{x:189,y:50.5},{x:190,y:50.5},{x:191,y:50.5},{x:192,y:50.5},{x:193,y:50.5},{x:194,y:50.5},{x:195,y:50.5},{x:196,y:50.5},{x:197,y:50.5},{x:213,y:50.5},{x:214,y:50.5},{x:215,y:50.5},{x:216,y:50.5},{x:217,y:50.5},{x:218,y:50.5},{x:219,y:50.5},{x:220,y:50.5},{x:221,y:50.5},{x:222,y:50.5},{x:223,y:50.5},{x:224,y:50.5},{x:225,y:50.5},{x:226,y:50.5},{x:227,y:50.5},{x:228,y:50.5},{x:229,y:50.5},{x:230,y:50.5},{x:231,y:50.5},{x:232,y:50.5},{x:233,y:50.5},{x:234,y:50.5},{x:235,y:50.5},{x:236,y:50.5},{x:237,y:50.5},{x:238,y:50.5},{x:239,y:50.5},{x:240,y:50.5},{x:241,y:50.5},{x:242,y:50.5},{x:243,y:50.5},{x:244,y:50.5},{x:245,y:50.5},{x:246,y:50.5},{x:247,y:50.5},{x:248,y:50.5},{x:249,y:50.5},{x:250,y:50.5},{x:160,y:83.5},{x:161,y:83.5},{x:162,y:83.5},{x:163,y:83.5},{x:164,y:83.5},{x:165,y:83.5},{x:166,y:83.5},{x:167,y:83.5},{x:168,y:83.5},{x:169,y:83.5},{x:170,y:83.5},{x:171,y:83.5},{x:172,y:83.5},{x:173,y:83.5},{x:174,y:83.5},{x:175,y:83.5},{x:176,y:83.5},{x:177,y:83.5},{x:178,y:83.5},{x:179,y:83.5},{x:180,y:83.5},{x:181,y:83.5},{x:182,y:83.5},{x:183,y:83.5},{x:184,y:83.5},{x:185,y:83.5},{x:186,y:83.5},{x:187,y:83.5},{x:188,y:83.5},{x:189,y:83.5},{x:190,y:83.5},{x:191,y:83.5},{x:192,y:83.5},{x:193,y:83.5},{x:194,y:83.5},{x:195,y:83.5},{x:196,y:83.5},{x:197,y:83.5},{x:212,y:83.5},{x:213,y:83.5},{x:214,y:83.5},{x:215,y:83.5},{x:216,y:83.5},{x:217,y:83.5},{x:218,y:83.5},{x:219,y:83.5},{x:220,y:83.5},{x:221,y:83.5},{x:222,y:83.5},{x:223,y:83.5},{x:224,y:83.5},{x:225,y:83.5},{x:226,y:83.5},{x:227,y:83.5},{x:228,y:83.5},{x:229,y:83.5},{x:230,y:83.5},{x:231,y:83.5},{x:232,y:83.5},{x:233,y:83.5},{x:234,y:83.5},{x:235,y:83.5},{x:236,y:83.5},{x:237,y:83.5},{x:238,y:83.5},{x:239,y:83.5},{x:240,y:83.5},{x:241,y:83.5},{x:242,y:83.5},{x:243,y:83.5},{x:244,y:83.5},{x:245,y:83.5},{x:246,y:83.5},{x:247,y:83.5},{x:248,y:83.5},{x:249,y:83.5},{x:250,y:83.5},{x:160,y:84.5},{x:197,y:84.5},{x:212,y:84.5},{x:250,y:84.5},{x:160,y:85.5},{x:197,y:85.5},{x:212,y:85.5},{x:250,y:85.5},{x:160,y:86.5},{x:197,y:86.5},{x:212,y:86.5},{x:250,y:86.5},{x:160,y:87.5},{x:197,y:87.5},{x:212,y:87.5},{x:250,y:87.5},{x:160,y:88.5},{x:197,y:88.5},{x:212,y:88.5},{x:250,y:88.5},{x:160,y:89.5},{x:197,y:89.5},{x:212,y:89.5},{x:213,y:89.5},{x:214,y:89.5},{x:215,y:89.5},{x:216,y:89.5},{x:217,y:89.5},{x:218,y:89.5},{x:219,y:89.5},{x:220,y:89.5},{x:221,y:89.5},{x:222,y:89.5},{x:223,y:89.5},{x:224,y:89.5},{x:225,y:89.5},{x:226,y:89.5},{x:227,y:89.5},{x:228,y:89.5},{x:229,y:89.5},{x:230,y:89.5},{x:231,y:89.5},{x:232,y:89.5},{x:233,y:89.5},{x:234,y:89.5},{x:235,y:89.5},{x:236,y:89.5},{x:237,y:89.5},{x:238,y:89.5},{x:239,y:89.5},{x:240,y:89.5},{x:241,y:89.5},{x:242,y:89.5},{x:243,y:89.5},{x:250,y:89.5},{x:160,y:90.5},{x:167,y:90.5},{x:168,y:90.5},{x:169,y:90.5},{x:170,y:90.5},{x:171,y:90.5},{x:172,y:90.5},{x:173,y:90.5},{x:174,y:90.5},{x:175,y:90.5},{x:176,y:90.5},{x:177,y:90.5},{x:178,y:90.5},{x:179,y:90.5},{x:180,y:90.5},{x:181,y:90.5},{x:182,y:90.5},{x:183,y:90.5},{x:184,y:90.5},{x:185,y:90.5},{x:186,y:90.5},{x:187,y:90.5},{x:188,y:90.5},{x:189,y:90.5},{x:190,y:90.5},{x:191,y:90.5},{x:192,y:90.5},{x:193,y:90.5},{x:194,y:90.5},{x:195,y:90.5},{x:196,y:90.5},{x:197,y:90.5},{x:243,y:90.5},{x:250,y:90.5},{x:160,y:91.5},{x:167,y:91.5},{x:243,y:91.5},{x:250,y:91.5},{x:160,y:92.5},{x:167,y:92.5},{x:243,y:92.5},{x:250,y:92.5},{x:160,y:93.5},{x:167,y:93.5},{x:243,y:93.5},{x:250,y:93.5},{x:160,y:94.5},{x:167,y:94.5},{x:243,y:94.5},{x:250,y:94.5},{x:160,y:95.5},{x:167,y:95.5},{x:243,y:95.5},{x:250,y:95.5},{x:160,y:96.5},{x:167,y:96.5},{x:243,y:96.5},{x:250,y:96.5},{x:160,y:97.5},{x:167,y:97.5},{x:243,y:97.5},{x:250,y:97.5},{x:160,y:98.5},{x:167,y:98.5},{x:243,y:98.5},{x:250,y:98.5},{x:160,y:99.5},{x:167,y:99.5},{x:243,y:99.5},{x:250,y:99.5},{x:160,y:100.5},{x:167,y:100.5},{x:243,y:100.5},{x:250,y:100.5},{x:160,y:101.5},{x:167,y:101.5},{x:243,y:101.5},{x:250,y:101.5},{x:160,y:102.5},{x:167,y:102.5},{x:243,y:102.5},{x:250,y:102.5},{x:160,y:103.5},{x:167,y:103.5},{x:243,y:103.5},{x:250,y:103.5},{x:160,y:104.5},{x:167,y:104.5},{x:243,y:104.5},{x:250,y:104.5},{x:160,y:105.5},{x:167,y:105.5},{x:243,y:105.5},{x:250,y:105.5},{x:160,y:106.5},{x:167,y:106.5},{x:243,y:106.5},{x:250,y:106.5},{x:160,y:107.5},{x:167,y:107.5},{x:243,y:107.5},{x:250,y:107.5},{x:160,y:108.5},{x:167,y:108.5},{x:243,y:108.5},{x:250,y:108.5},{x:160,y:109.5},{x:167,y:109.5},{x:205,y:109.5},{x:206,y:109.5},{x:207,y:109.5},{x:208,y:109.5},{x:209,y:109.5},{x:210,y:109.5},{x:211,y:109.5},{x:212,y:109.5},{x:213,y:109.5},{x:214,y:109.5},{x:215,y:109.5},{x:216,y:109.5},{x:217,y:109.5},{x:218,y:109.5},{x:219,y:109.5},{x:220,y:109.5},{x:221,y:109.5},{x:222,y:109.5},{x:223,y:109.5},{x:224,y:109.5},{x:225,y:109.5},{x:226,y:109.5},{x:227,y:109.5},{x:228,y:109.5},{x:229,y:109.5},{x:230,y:109.5},{x:231,y:109.5},{x:232,y:109.5},{x:233,y:109.5},{x:234,y:109.5},{x:235,y:109.5},{x:236,y:109.5},{x:237,y:109.5},{x:238,y:109.5},{x:239,y:109.5},{x:240,y:109.5},{x:241,y:109.5},{x:242,y:109.5},{x:243,y:109.5},{x:250,y:109.5},{x:160,y:110.5},{x:167,y:110.5},{x:168,y:110.5},{x:169,y:110.5},{x:170,y:110.5},{x:171,y:110.5},{x:172,y:110.5},{x:173,y:110.5},{x:174,y:110.5},{x:175,y:110.5},{x:176,y:110.5},{x:177,y:110.5},{x:178,y:110.5},{x:179,y:110.5},{x:180,y:110.5},{x:181,y:110.5},{x:182,y:110.5},{x:183,y:110.5},{x:184,y:110.5},{x:185,y:110.5},{x:186,y:110.5},{x:187,y:110.5},{x:188,y:110.5},{x:189,y:110.5},{x:190,y:110.5},{x:191,y:110.5},{x:192,y:110.5},{x:193,y:110.5},{x:194,y:110.5},{x:195,y:110.5},{x:196,y:110.5},{x:197,y:110.5},{x:198,y:110.5},{x:199,y:110.5},{x:200,y:110.5},{x:201,y:110.5},{x:202,y:110.5},{x:203,y:110.5},{x:204,y:110.5},{x:205,y:110.5},{x:250,y:110.5},{x:160,y:111.5},{x:250,y:111.5},{x:160,y:112.5},{x:250,y:112.5},{x:160,y:113.5},{x:250,y:113.5},{x:160,y:114.5},{x:250,y:114.5},{x:160,y:115.5},{x:250,y:115.5},{x:160,y:116.5},{x:161,y:116.5},{x:162,y:116.5},{x:163,y:116.5},{x:164,y:116.5},{x:165,y:116.5},{x:166,y:116.5},{x:167,y:116.5},{x:168,y:116.5},{x:169,y:116.5},{x:170,y:116.5},{x:171,y:116.5},{x:172,y:116.5},{x:173,y:116.5},{x:174,y:116.5},{x:175,y:116.5},{x:176,y:116.5},{x:177,y:116.5},{x:178,y:116.5},{x:179,y:116.5},{x:180,y:116.5},{x:181,y:116.5},{x:182,y:116.5},{x:183,y:116.5},{x:184,y:116.5},{x:185,y:116.5},{x:186,y:116.5},{x:187,y:116.5},{x:188,y:116.5},{x:189,y:116.5},{x:190,y:116.5},{x:191,y:116.5},{x:192,y:116.5},{x:193,y:116.5},{x:194,y:116.5},{x:195,y:116.5},{x:196,y:116.5},{x:197,y:116.5},{x:198,y:116.5},{x:199,y:116.5},{x:200,y:116.5},{x:201,y:116.5},{x:202,y:116.5},{x:203,y:116.5},{x:204,y:116.5},{x:205,y:116.5},{x:206,y:116.5},{x:207,y:116.5},{x:208,y:116.5},{x:209,y:116.5},{x:210,y:116.5},{x:211,y:116.5},{x:212,y:116.5},{x:213,y:116.5},{x:214,y:116.5},{x:215,y:116.5},{x:216,y:116.5},{x:217,y:116.5},{x:218,y:116.5},{x:219,y:116.5},{x:220,y:116.5},{x:221,y:116.5},{x:222,y:116.5},{x:223,y:116.5},{x:224,y:116.5},{x:225,y:116.5},{x:226,y:116.5},{x:227,y:116.5},{x:228,y:116.5},{x:229,y:116.5},{x:230,y:116.5},{x:231,y:116.5},{x:232,y:116.5},{x:233,y:116.5},{x:234,y:116.5},{x:235,y:116.5},{x:236,y:116.5},{x:237,y:116.5},{x:238,y:116.5},{x:239,y:116.5},{x:240,y:116.5},{x:241,y:116.5},{x:242,y:116.5},{x:243,y:116.5},{x:244,y:116.5},{x:245,y:116.5},{x:246,y:116.5},{x:247,y:116.5},{x:248,y:116.5},{x:249,y:116.5},{x:250,y:116.5}];

var collisionMapperLoadedData = "none";
var collisionMapperLoaded = false;
var collisionMapperCounter = 0;
function collisionMapper() {
	if (wave >= 1 && wave <= 4 && collisionMapperLoadedData != "stage_1_collision_data") {
	gridManager.grid = new PF.Grid(Math.floor(800/scale), Math.floor(500/scale));
	collisionMapperLoadedData = "stage_1_collision_data";
	collisionMapperLoaded = false;
	console.log("Loaded: "+collisionMapperLoaded);
	}
	if (wave >= 5 && wave <= 6 && collisionMapperLoadedData != "stage_2_collision_data") {
	gridManager.grid = new PF.Grid(Math.floor(800/scale), Math.floor(500/scale));
	collisionMapperLoadedData = "stage_2_collision_data";
	collisionMapperLoaded = false;
	console.log("Loaded: "+collisionMapperLoaded);
	}
	if (wave == 7 && collisionMapperLoadedData != "none") {
	gridManager.grid = new PF.Grid(Math.floor(800/scale), Math.floor(500/scale));
	collisionMapperLoadedData = "none";
	collisionMapperLoaded = false;
	console.log("Loaded: "+collisionMapperLoaded);
	}
	if (collisionMapperLoaded) {
	collisionMapperCounter = 0;
	}
	while (!collisionMapperLoaded && collisionMapperLoadedData != "none") {
		if (collisionMapperCounter < eval(collisionMapperLoadedData).length) {
		collisionMapperCounter++;
			if (collisionMapperCounter >= eval(collisionMapperLoadedData).length-1) {
			collisionMapperLoaded = true;
			console.log("Loaded: "+collisionMapperLoaded+" Data: "+collisionMapperLoadedData);
			}
			if (!collisionMapperLoaded) {
			gridManager.grid.setWalkableAt(Math.floor(eval(collisionMapperLoadedData)[collisionMapperCounter].x), Math.floor(eval(collisionMapperLoadedData)[collisionMapperCounter].y), false);
			}
		}
	}
}

//A path following script
var scale = 3;
var gridManager = {
	grid: new PF.Grid(Math.floor(800/scale), Math.floor(500/scale)),
	finder: new PF.BiAStarFinder({
	heuristic: PF.Heuristic.chebyshev,
	allowDiagonal: true,
	dontCrossCorners: true,
	biDirectional: true,
	weight: 10
	})
};
function follower(object, pathArray) {
this.object = object;
this.pathArray = pathArray;
this.speedI = 0;
this.i = 0;
this.done = false;
	this.reset = function() {
	//this.speedI = 0;
	//this.i = 0;
	},
	this.update = function() {
		if (this.i<this.pathArray.length-1) {
			if (this.object.x/scale != this.pathArray[this.pathArray.length-1][0] || this.object.y/scale != this.pathArray[this.pathArray.length-1][1]) {
				if (this.i<this.pathArray.length-1 && typeof this.pathArray[this.i] != "undefined"/**&& (this.object.x/scale <= this.pathArray[this.i][0]+this.object.aiSpeed || this.object.x/scale >= this.pathArray[this.i][0]-this.object.aiSpeed) && (this.object.y/scale <= this.pathArray[this.i][1]+this.object.aiSpeed || this.object.y/scale >= this.pathArray[this.i][1]-this.object.aiSpeed)**/) {
				this.speedI += this.object.aiSpeed/2;
				this.i = Math.round(this.speedI);
				console.log(this.i+" "+this.speedI+" "+this.pathArray.length)
				} else {
				this.i = this.pathArray.length-1;
				}
				this.object.x = this.pathArray[this.i][0]*scale;
				this.object.y = this.pathArray[this.i][1]*scale;
				/**if (typeof this.pathArray[this.i] != "undefined" && this.object.x/scale < this.pathArray[this.i][0]) {
					if (this.object.x+this.object.width/2 < 800) { 
					this.object.legacy_Speed_X = this.object.aiSpeed;
					} else {
					this.object.legacy_Speed_X = 0;
					}
				}
				if (typeof this.pathArray[this.i] != "undefined" && this.object.x/scale > this.pathArray[this.i][0]) {
					if (this.object.x-this.object.width/2 > 0) { 
					this.object.legacy_Speed_X = -this.object.aiSpeed;
					} else {
					this.object.legacy_Speed_X = 0;
					}
				}
				if (typeof this.pathArray[this.i] != "undefined" && this.object.x/scale == this.pathArray[this.i][0]) {
				this.object.legacy_Speed_X = 0;
				}
				if (typeof this.pathArray[this.i] != "undefined" && this.object.y/scale < this.pathArray[this.i][1]) {
					if (this.object.y+this.object.height/2 < 390) {
					this.object.legacy_Speed_Y = this.object.aiSpeed;
					} else {
					this.object.legacy_Speed_Y = 0;
					}
				}
				if (typeof this.pathArray[this.i] != "undefined" && this.object.y/scale > this.pathArray[this.i][1]) {
					if (this.object.y-this.object.height/2 > 0) {
					this.object.legacy_Speed_Y = -this.object.aiSpeed;
					} else {
					this.object.legacy_Speed_Y = 0;
					}
				}
				if (typeof this.pathArray[this.i] != "undefined" && this.object.y/scale == this.pathArray[this.i][1]) {
				this.object.legacy_Speed_Y = 0;
				}**/
			}
			if (this.object.x/scale == this.pathArray[this.pathArray.length-1][0] && this.object.y/scale == this.pathArray[this.pathArray.length-1][1]) {
			this.done = true;
			} else {
			this.done = false;
			}
		}
	}
}
//add the ability to stop the followee at a certain range of the target;
function ai(type, followee, target) {
this.type = type;
this.followee = followee;
this.target = target;
this.hitWall = false;
this.grid;
this.path = [];
this.pathFinders = [];
this.followee.legacy_Movement = true;
this.followee.aiSpeed = 1;
	this.pathFinding = function(object, target) {
	this.object = object;
	this.target = target;
	this.grid = gridManager.grid.clone();
	this.path = [];
	this.path = gridManager.finder.findPath(Math.ceil(this.object.x/scale), Math.ceil(this.object.y/scale), Math.ceil(this.target.x/scale), Math.ceil(this.target.y/scale), this.grid);
	aiPathTest.x = this.path;
	//this.object.legacy_Speed_X = 0;
	//this.object.legacy_Speed_Y = 0;
		if (this.pathFinders.length == 0) {
		this.pathFinders = [new follower(this.object, this.path)];
		}
	},
	this.update = function() {
		for (let i=0;i<wallLayer.length;i++) {
			if (wallLayer[i].tag != "ignore") {
				if (wallLayer[i].waveNumber == "all") {
					if (this.target.waveNumber == "all") {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
					if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}					
					}
					if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
				}
				if (wave >= wallLayer[i].waveNumber[0] && wave <= wallLayer[i].waveNumber[1]) {
					if (this.target.waveNumber == "all") {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
					if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
					if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
				}
				if (wallLayer[i].waveNumber[0] == "all" && wave != wallLayer[i].waveNumber[1]) {
					if (this.target.waveNumber == "all") {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
					if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
					if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
						if (!this.hitWall) {
						this.followee.circleLine(wallLayer[i], true, true);
						}
						if (this.followee.circleLine(wallLayer[i], false, true)) {
						this.hitWall = true;
						}
					}
				}
			}
		}
		if (this.hitWall) {
		this.hitWall = false;
			if (this.followee.waveNumber == "all") {
				if (this.target.waveNumber == "all") {
				this.pathFinding(this.followee, this.target);
				}
				if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
				if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
			}
			if (wave >= this.followee.waveNumber[0] && wave <= this.followee.waveNumber[1]) {
				if (this.target.waveNumber == "all") {
				this.pathFinding(this.followee, this.target);
				}
				if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
				if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
			}
			if (this.followee.waveNumber[0] == "all" && wave != this.followee.waveNumber[1]) {
				if (this.target.waveNumber == "all") {
				this.pathFinding(this.followee, this.target);
				}
				if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
				if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
				this.pathFinding(this.followee, this.target);
				}
			}
		} else {
			if (this.followee.x > this.target.x+this.followee.width) {
			this.followee.legacy_Speed_X = -this.followee.aiSpeed;
			}
			if (this.followee.x <= this.target.x+this.followee.width && this.followee.x+this.followee.width >= this.target.x) {
			this.followee.legacy_Speed_X = 0;
			}
			if (this.followee.x+this.followee.width < this.target.x) {
			this.followee.legacy_Speed_X = this.followee.aiSpeed;
			}
			if (this.followee.y > this.target.y+this.followee.height) {
			this.followee.legacy_Speed_Y = -this.followee.aiSpeed;
			}
			if (this.followee.y <= this.target.y+this.followee.height && this.followee.y+this.followee.height >= this.target.y) {
			this.followee.legacy_Speed_Y = 0;
			}
			if (this.followee.y+this.followee.height < this.target.y) {
			this.followee.legacy_Speed_Y = this.followee.aiSpeed;
			}
		}
		for (let i=0;i<this.pathFinders.length;i++) {
			if (typeof this.pathFinders[i] != undefined && !this.hitWall) {
			this.pathFinders[i].update();
				if (this.pathFinders[i].pathArray != this.path) {
				this.pathFinders[i].pathArray = this.path;
				this.pathFinders[i].speedI = 0;
				this.pathFinders[i].i = 0;
				}
			}
			if (this.pathFinders[i].done) {
			this.pathFinders.splice(i, 1);
			}
		}	
	}
}

function warpUIPanel(planet, name, type, numOfWaves, numOfBosses) {
this.planet = planet;
this.name = name;
this.type = type;
this.numOfWaves = numOfWaves;
this.numOfBosses = numOfBosses;
this.dimState = false;
this.popUp = false;
this.completed = false;
this.playedSound = false;
	this.init = function() {
		this.enterText = new component([22,22], "20px Consolas Bold", "center", "white", this.planet.x, this.planet.y-(this.planet.height/2), "text", 0, "black", 2, 2, 2, false, "Press Enter!", "", "", "warp");
		uiLayer.push(this.enterText);
		this.background = new component([22,22], 210, 210, "uiBackground", 400, 195, "img", 0, "black", 5, 5, 5);
		uiLayer.push(this.background);
		this.locationTxt = new component([22,22], "30px Consolas Bold", "center", "white", this.background.x, this.background.y-(this.background.height/2)+35, "text", 0, "black", 2, 2, 2, false, "Warp to ", "", "", "warp");
		uiLayer.push(this.locationTxt);
		this.typeTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x, this.background.y-(this.background.height/2)+60, "text", 0, "black", 2, 2, 2, false, "Type: ", "", "", "warp");
		uiLayer.push(this.typeTxt);
		this.numOfWavesTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x, this.background.y-(this.background.height/2)+80, "text", 0, "black", 2, 2, 2, false, "Number of Waves: ", "", "", "warp");
		uiLayer.push(this.numOfWavesTxt);
		this.numOfBossesTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x, this.background.y-(this.background.height/2)+100, "text", 0, "black", 2, 2, 2, false, "Number of Bosses: ", "", "", "warp");
		uiLayer.push(this.numOfBossesTxt);
		this.completedTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x, this.background.y-(this.background.height/2)+120, "text", 0, "black", 2, 2, 2, false, "Completed: ", "", "", "warp");
		uiLayer.push(this.completedTxt);
		this.yesButton = new component([22,22], 50, 50, "black", this.background.x-50, this.background.y-(this.background.height/2)+165, "rec", 0, "black", 5, 5, 5, "", "", "", "", "button");
		uiLayer.push(this.yesButton);
		this.yesTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x-50, this.background.y-(this.background.height/2)+170, "text", 0, "red", 2, 2, 2, false, "YES", "", "", "warp");
		uiLayer.push(this.yesTxt);
		this.noButton = new component([22,22], 50, 50, "black", this.background.x+50, this.background.y-(this.background.height/2)+165, "rec", 0, "black", 5, 5, 5, "", "", "", "", "button");
		uiLayer.push(this.noButton);
		this.noTxt = new component([22,22], "20px Consolas Bold", "center", "white", this.background.x+50, this.background.y-(this.background.height/2)+170, "text", 0, "red", 2, 2, 2, false, "NO", "", "", "warp");
		uiLayer.push(this.noTxt);
	},
	this.update = function() {
		if (wave == 22) {
			if (this.popUp) {
				player1Controller.moving = false;
				this.background.globalAlpha = 1;
				this.locationTxt.globalAlpha = 1;
				this.locationTxt.op2 = "Warp to "+this.name+"?";
				this.locationTxt.width = scaleText(this.locationTxt,200)+"px Consolas Bold";
				this.typeTxt.globalAlpha = 1;
				this.typeTxt.op2 = "Type: "+this.type;
				this.numOfWavesTxt.globalAlpha = 1;
				this.numOfWavesTxt.op2 = "Number of Waves: "+this.numOfWaves;
				this.numOfBossesTxt.globalAlpha = 1;
				this.numOfBossesTxt.op2 = "Number of Bosses: "+this.numOfBosses;
				this.completedTxt.globalAlpha = 1;
				this.completedTxt.op2 = "Completed: "+this.completed;
				this.yesButton.globalAlpha = 1;
				this.yesTxt.globalAlpha = 1;
				this.noButton.globalAlpha = 1;
				this.noTxt.globalAlpha = 1;
			} else {
				this.enterText.op2 = "PRESS "+enterKey.key.toUpperCase()+"!";
				this.background.globalAlpha = 0;
				this.locationTxt.globalAlpha = 0;
				this.typeTxt.globalAlpha = 0;
				this.numOfWavesTxt.globalAlpha = 0;
				this.numOfBossesTxt.globalAlpha = 0;
				this.completedTxt.globalAlpha = 0;
				this.yesButton.globalAlpha = 0;
				this.yesTxt.globalAlpha = 0;
				this.noButton.globalAlpha = 0;
				this.noTxt.globalAlpha = 0;
			}
			if (this.popUp) {
				if (!this.playedSound) {
				buttonSelectTrack.play();
				this.playedSound = true;
				}
				if (cursor.crashWith(this.yesButton)) {
					this.yesTxt.shadowColor = "green";
					if (pressed) {
						wave = 1;
						this.popUp = false;
						startGameTrack.play();
						//reset player stats
						player1Controller.loaded = false;
					}
				} else {
					this.yesTxt.shadowColor = "red";
				}
				if (cursor.crashWith(this.noButton)) {
					this.noTxt.shadowColor = "green";
					if (pressed) {
						this.popUp = false;
						backTrack.play();
					}
				} else {
					this.noTxt.shadowColor = "red";
				}
			} else {
			this.playedSound = false;
			}
			if (player1Controller.target.circleCrashWith(this.planet) && !this.popUp) {
				if (enter) {
					this.popUp = true;
				}
			}
			if (!player1Controller.target.circleCrashWith(this.planet) && this.popUp) {
				if (this.enterText.globalAlpha > 0) {
				this.enterText.globalAlpha -= 0.015;
				}
				if (this.enterText.globalAlpha <= 0) {
				this.enterText.globalAlpha = 0;
				}
			} else {
				if (this.enterText.globalAlpha < 1 && this.dimState == false) {
				this.enterText.globalAlpha += 0.015;
				}
				if (this.enterText.globalAlpha >= 1) {
				this.enterText.globalAlpha = 1;
				this.dimState = true;
				}
				if (this.enterText.globalAlpha > 0 && this.dimState == true) {
				this.enterText.globalAlpha -= 0.015;
				}
				if (this.enterText.globalAlpha <= 0) {
				this.enterText.globalAlpha = 0;
				this.dimState = false;
				}
			}
		}
	},
	this.save = function() {
		//save complete stat
	},
	this.load = function() {
		//load complete stat
	}
}

//House collisions
var houseCollisionUpdaters = [];
function houseCollisionUpdateMaker(object, object2) {
this.object = object;
this.object2 = object2;
	this.update = function() {
		if (this.object.waveNumber == "all" || this.object.waveNumber[0] == "all") {
			if (this.object2.waveNumber == "all" || this.object2.waveNumber[0] == "all") {
			this.object.circleLine(this.object2, true, true);
			}
		}
		if (this.object.waveNumber == "all" || this.object.waveNumber[0] == "all") {
			if (wave >= this.object2.waveNumber[0] && wave <= this.object2.waveNumber[1]) {
			this.object.circleLine(this.object2, true, true);
			}
		}
		if (wave >= this.object.waveNumber[0] && wave <= this.object.waveNumber[1]) {
			if (this.object2.waveNumber == "all" || this.object2.waveNumber[0] == "all") {
			this.object.circleLine(this.object2, true, true);
			}
		}
		if (wave >= this.object.waveNumber[0] && wave <= this.object.waveNumber[1]) {
			if (wave >= this.object2.waveNumber[0] && wave <= this.object2.waveNumber[1]) {
			this.object.circleLine(this.object2, true, true);
			}
		}
	}
}
function houseCollisionUpdate() {
	for (let i=0;i<houseCollisionUpdaters.length;i++) {
	houseCollisionUpdaters[i].update();
	}
}

//Ship functions
function shipInit() {
ship_1 = new shipCreator(100, 100, 2, 0.05, 3, 32, "player1Img", true); //Default ship
ship_2 = new shipCreator(100, 100, 2, 0.05, 3, 25, "player2Img", true); //Free ship
ship_3 = new shipCreator(100, 100, 2, 0.05, 3, 25, "player3Img", false); //Christmas ship
ship_4 = new shipCreator(100, 100, 2, 0.05, 3, 25, "player4Img", false); //Boss ship
ship_5 = new shipCreator(100, 100, 2, 0.05, 3, 32, "player5Img", false); //Easy ship
ship_6 = new shipCreator(100, 100, 2, 0.05, 3, 25, "player6Img", false); //Saint Paddies day ship
}
function shipUpdater() {
	if (player_1.ship == 0 && ship_1.unlocked) {
	player1Controller.ship = ship_1;
	}
	if (player_1.ship == 1 && ship_2.unlocked) {
	player1Controller.ship = ship_2;
	}
	if (player_1.ship == 2 && ship_3.unlocked) {
	player1Controller.ship = ship_3;
	}
	if (player_1.ship == 3 && ship_4.unlocked) {
	player1Controller.ship = ship_4;
	}
	if (player_1.ship == 4 && ship_5.unlocked) {
	player1Controller.ship = ship_5;
	}
	if (player_1.ship == 5 && ship_6.unlocked) {
	player1Controller.ship = ship_6;
	}
}
function shipCreator(maxHealth, maxShield, shieldDamageReduction, acceleration, maxSpeed, shipSize, shipImage, unlocked) {
this.maxHealth = maxHealth;
this.maxShield = maxShield;
this.shieldDamageReduction = shieldDamageReduction;
this.acceleration = acceleration;
this.maxSpeed = maxSpeed;
this.shipSize = shipSize;
this.shipImage = shipImage;
this.unlocked = unlocked;
}

//Weapon functions
function weaponInit() {
weapon_1 = new weaponCreator(120, "Z-01", 20, 20, 5, 10, "bullet1Img", true);
}
function weaponUpdater() {
	if (player_1.weapon == 0 && weapon_1.unlocked) {
	player1Controller.weapon = weapon_1;
	}
}
function weaponCreator(maxAmmo, weaponName, damage, bulletMaxTime, bulletSpeed, bulletSize, bulletImage, unlocked) {
this.maxAmmo = maxAmmo;
this.weaponName = weaponName;
this.damage = damage;
this.bulletMaxTime = bulletMaxTime;
this.bulletSpeed = bulletSpeed;
this.bulletSize = bulletSize;
this.bulletImage = bulletImage;
this.unlocked = unlocked;
}

//Player controller
var playerControllers = [];
function playerController(target, playerNumber, controlMethod, ship, weapon) {
this.target = target;
this.playerNumber = playerNumber;
this.controlMethod = controlMethod;
this.ship = ship;
this.weapon = weapon;
this.loaded = false;
this.moving = false;
this.up = false;
this.down = false;
this.left = false;
this.right = false;
this.fired = false;
this.dontFire = false;
this.onMobile = false;
this.controller = 0;
this.maxTime = 20;
this.sceneTime = 20;
	this.fireTimer = function(angle) {
	this.angle = angle;
	this.sceneTime++;
		if (this.sceneTime >= this.maxTime) {
		this.target.shoot(this.angle);
		this.sceneTime = 0;
		}
	},
	this.update = function() {
	//Set player data
	this.target.maxHealth = this.ship.maxHealth;
	this.target.maxShield = this.ship.maxShield;
	this.target.shieldDamageReduction = this.ship.shieldDamageReduction;
	this.target.width = this.ship.shipSize;
	this.target.height = this.ship.shipSize;
	this.target.op3 = this.ship.shipSize;
	this.target.op4 = this.ship.shipSize;
	this.target.color = this.ship.shipImage;
	this.target.maxAmmo = this.weapon.maxAmmo;
	this.target.weaponName = this.weapon.weaponName;
	this.target.damage = this.weapon.damage;
	this.target.bulletMaxTime = this.weapon.bulletMaxTime;
	this.target.bulletSpeed = this.weapon.bulletSpeed;
	this.target.bulletSize = this.weapon.bulletSize;
	this.target.bulletImage = this.weapon.bulletImage;
		//Init player
		if (!this.loaded) {
		this.target.health = this.ship.maxHealth;
		this.target.shield = 0;
		this.target.ammo = this.weapon.maxAmmo;
		player1Controller.target.money = 0;
		this.loaded = true;
		}
		//Check player health
		if (this.target.health > 0) {
		this.target.alive = true;
		} else {
		this.target.alive = false;	
		this.target.health = 0;
		}
		if (!pause && settingsState != 1 && wave > 0) {
			//Move player
			if (this.moving) {
				if (this.target.speed < this.ship.maxSpeed) {
				this.target.speed += this.ship.acceleration;
				}
				if (this.target.speed >= this.ship.maxSpeed) {
				this.target.speed = this.ship.maxSpeed;
				}
			} else {
				if (this.target.speed > 0) {
				this.target.speed -= this.ship.acceleration;
				}
				if (this.target.speed <= 0) {
				this.target.speed = 0;
				}
			}
			//Direct player
			switch (this.controlMethod) {
				case "keyboard":
				this.onMobile = false;
					//Shoot bullets
					if (pressed && !this.fired && !this.dontFire && !sceneTransition && !this.onMobile) {
					this.target.shoot(getMouseRotation(this.target, cursor));
					console.log(cursor.x+" "+cursor.y+" "+Math.atan2(-this.target.y + cursor.y, -this.target.x + cursor.x)+1.57079633);
					this.fired = true;
					}
					if (!pressed) {
					this.fired = false;	
					}
					if (this.up || this.down || this.left || this.right) {
					this.moving = true;
					}
					if (!this.up && !this.down && !this.left && !this.right) {
					this.moving = false;
					}
					if (this.up && !this.down && !this.left && !this.right) {
					this.target.moveAngle = 0;
					}
					if (this.up && !this.down && this.left && !this.right) {
					this.target.moveAngle = 5.49778715;
					}
					if (this.up && !this.down && !this.left && this.right) {
					this.target.moveAngle = 0.78539816;
					}
					if (!this.up && this.down && !this.left && !this.right) {
					this.target.moveAngle = 3.14159265;
					}
					if (!this.up && this.down && this.left && !this.right) {
					this.target.moveAngle = 3.92699082;
					}
					if (!this.up && this.down && !this.left && this.right) {
					this.target.moveAngle = 2.35619449;
					}
					if (!this.up && !this.down && this.left && !this.right) {
					this.target.moveAngle = 4.71238898;
					}
					if (!this.up && !this.down && !this.left && this.right) {
					this.target.moveAngle = 1.57079633;

					}
				break;
				case "joystick":
				this.onMobile = true;
					if (joystickCanFire) {
					this.fireTimer(joystickShootAngle);
					} else {
					this.sceneTime = this.maxTime;
					}
				this.target.moveAngle = joystickMoveAngle;
				break;
				case "controller":
				this.onMobile = false;
					if (gamepads[this.controller] != undefined) {
						if (checkDeadZone(gamepads[this.controller].axes[0].toFixed(2)) == 0 && checkDeadZone(gamepads[this.controller].axes[1].toFixed(2)) == 0) {
						this.moving = false;
						} else {
						this.moving = true;
						this.target.moveAngle = controllerMoveAngle[this.controller];
						}
						if (checkDeadZone(gamepads[this.controller].axes[2].toFixed(2)) == 0 && checkDeadZone(gamepads[this.controller].axes[3].toFixed(2)) == 0) {
						this.sceneTime = this.maxTime;
						} else {
						this.fireTimer(controllerShootAngle[this.controller]);
						}
					}
				break;
			}
		}
	}
}
function playerControllerUpdater() {
	for (let i=0;i<playerControllers.length;i++) {
	playerControllers[i].update();
	}
}

//Main component maker
function component(waveNumber, width, height, color, x, y, type, globalAlpha, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, op1, op2, op3, op4, tag) {
this.waveNumber = waveNumber;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.type = type;
this.globalAlpha = globalAlpha;
this.shadowColor = shadowColor;
this.shadowBlur = shadowBlur;
this.shadowOffsetX = shadowOffsetX;
this.shadowOffsetY = shadowOffsetY;
this.op1 = op1;
this.op2 = op2;
this.op3 = op3;
this.op4 = op4;
this.tag = tag;
this.centered = true;
if (this.type != "light") {
this.radius = (this.width/2);
}
//New Movement
this.speed = 0;
this.moveAngle = 0;
//Legacy Movement for AI
this.legacy_Movement = false;
this.legacy_Speed_X = 0;
this.legacy_Speed_Y = 0;
//For AI
this.aiSpeed = 0;
//Rotation
this.angle = 0;
this.rotateSpeed = 0;
this.animationFrame = 0;
this.alive = true;
this.ship = 0;
this.health = 0;
this.maxHealth = 0;
this.healthBarColor = "";
this.healthBarLength = this.health/(this.maxHealth/100);
this.shield = 0;
this.maxShield = 0;
this.shieldBarColor = "";
this.shieldBarLength = this.shield/(this.maxShield/100);
this.shieldDamageReduction = 0;
this.weapon = 0;
this.weaponName = "";
this.ammo = 0;
this.maxAmmo = 0;
this.money = 0;
this.totalMoney = 0;
this.bulletImage = "";
this.bullets = [];
this.bulletSize = 0;
this.bulletSpeed = 0;
this.bulletAliveTime = 0;
this.bulletMaxTime = 0;
this.damage = 0;
this.points = [];
	this.distance = function(point_1, point_2) {
	var dx = point_1.x-point_2.x;
	var dy = point_1.y-point_2.y;
	return Math.sqrt((dx*dx)+(dy*dy));
	},
	this.rotatePoints = function(point_X, point_Y, XorY) {
	this.XorY = XorY;
		if (this.XorY == "x") {
		return Math.cos(this.angle)*(point_X-this.x)-Math.sin(this.angle)*(point_Y-this.y)+this.x;
		} else
		if (this.XorY == "y") {
		return Math.sin(this.angle)*(point_X-this.x)+Math.cos(this.angle)*(point_Y-this.y)+this.y;
		}
	},
	this.getTextWidth = function() {
	ctx.font = this.width;
	return ctx.measureText(this.op2).width;
	}
	this.update = function() {
		for (let i=0;i<this.bullets.length;i++) {
		this.bullets[i].update();
		this.bullets[i].newPos();
		}
		switch (this.type) {
			case "text":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.font = this.width;
			ctx.textAlign = this.height;
			ctx.fillStyle = this.color;
				if (!this.op1) {
				ctx.fillText(this.op2, this.x, this.y);
				}
				if (this.op1) {
				ctx.strokeText(this.op2, this.x, this.y);
				}
			break;
			case "line":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color; 
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.op1, this.op2);
			ctx.stroke();
			break;
			case "path":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color;
				if (typeof this.x != "undefined" && typeof this.x[0] != "undefined") {
				ctx.moveTo(this.x[0][0]*scale, this.x[0][1]*scale);
					for (let i = 1; i < this.x.length; i++) {
					ctx.lineTo(this.x[i][0]*scale, this.x[i][1]*scale);
					}
				}
			ctx.stroke();
			break;
			case "rec":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			//calculate points
			if (this.centered) {
			this.points = [{x:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "y")}
			,{x:this.rotatePoints(-this.width/2+this.x, this.height/2+this.y, "x"),y:this.rotatePoints(-this.width/2+this.x, this.height/2+this.y, "y")}
			,this.points[0]];
			} else {
			this.points = [{x:this.rotatePoints(this.x, this.y, "x"),y:this.rotatePoints(this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.y, "x"),y:this.rotatePoints(this.width+this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.height+this.y, "x"),y:this.rotatePoints(this.width+this.x, this.height+this.y, "y")}
			,{x:this.rotatePoints(this.x, this.height+this.y, "x"),y:this.rotatePoints(this.x, this.height+this.y, "y")}
			,this.points[0]];
			}
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);//center position
			for (let i=0;i<this.points.length;i++) {
				if (this.points[i] != undefined) {
				ctx.lineTo(this.points[i].x, this.points[i].y);
				}
			}
			ctx.fillStyle = this.color;
			ctx.fill();
			break;
			case "light":
			ctx.globalAlpha = this.globalAlpha;
			ctx.beginPath();
			var gradient = ctx.createRadialGradient(this.x, this.y, this.height[0], this.x, this.y, this.height[1]);
			gradient.addColorStop(0, this.color[0]);
			gradient.addColorStop(1, this.color[1]);
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
			ctx.ellipse(this.x, this.y, this.width[0], this.width[0], this.angle, 0, 2 * Math.PI);
			ctx.fillStyle = gradient;
			ctx.fill();
			break;
			case "img":
			this.img = document.getElementById(this.color);
			if (this.op1 == undefined || this.op1 == "") {
			this.op1 = 0;
			}
			if (this.op2 == undefined || this.op2 == "") {
			this.op2 = 0;
			}
			if (this.op3 == undefined || this.op3 == "") {
			this.op3 = this.img.width;
			}
			if (this.op4 == undefined || this.op4 == "") {
			this.op4	= this.img.height;
			}
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			ctx.drawImage(this.img, this.op1, this.op2, this.op3, this.op4, this.width/-2, this.height/-2, this.width, this.height);
			ctx.restore();
			break;
			case "house":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor;
			ctx.shadowBlur = this.shadowBlur;
			ctx.shadowOffsetX = this.shadowOffsetX;
			ctx.shadowOffsetY = this.shadowOffsetY;
			//this.x/y house position
			//this.width/height house size
			//this.op1 house door offset
			//this.op2 house door width
			//this.op3 house wall size
			this.points = [
			 {x:this.rotatePoints(this.x+this.width/2, this.y-this.height/2, "x"),y:this.rotatePoints(this.x+this.width/2, this.y-this.height/2, "y")}
			,{x:this.rotatePoints(this.x-this.width/2, this.y-this.height/2, "x"),y:this.rotatePoints(this.x-this.width/2, this.y-this.height/2, "y")}
			,{x:this.rotatePoints(this.x-this.width/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x-this.width/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.op1-this.op2/2, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x-this.width/2+this.op3, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x-this.width/2+this.op3, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x-this.width/2+this.op3, this.y-this.height/2+this.op3, "x"),y:this.rotatePoints(this.x-this.width/2+this.op3, this.y-this.height/2+this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.width/2-this.op3, this.y-this.height/2+this.op3, "x"),y:this.rotatePoints(this.x+this.width/2-this.op3, this.y-this.height/2+this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.width/2-this.op3, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.width/2-this.op3, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2-this.op3, "x"),y:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2-this.op3, "y")}
			,{x:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.op1+this.op2/2, this.y+this.height/2, "y")}
			,{x:this.rotatePoints(this.x+this.width/2, this.y+this.height/2, "x"),y:this.rotatePoints(this.x+this.width/2, this.y+this.height/2, "y")}
			,this.points[0]];
			ctx.beginPath();
			ctx.moveTo(this.points[0].x, this.points[0].y);
				for (let i=0;i<this.points.length;i++) {
					if (this.points[i] != undefined) {
					ctx.lineTo(this.points[i].x, this.points[i].y);
					}
				}
			ctx.fillStyle = this.color;
			ctx.fill();
			break;
		}
	},
	this.shoot = function(angle) {
		if (this.alive && !pause && wave > 0 && this.ammo > 0) {
			var _bullet = new component(this.waveNumber, this.bulletSize, this.bulletSize, this.bulletImage, this.x, this.y, this.type, 1);
			_bullet.moveAngle = angle;
			_bullet.damage = this.damage;
			_bullet.bulletMaxTime = this.bulletMaxTime;
			_bullet.speed = this.bulletSpeed;
			this.ammo--;
			this.bullets.push(_bullet);
		}
	},
	//update position
	this.newPos = function() {
		this.healthBarLength = this.health/(this.maxHealth/100);
		this.shieldBarLength = this.shield/(this.maxShield/100);
		//Change health bar color
		if (this.healthBarLength > 75) {
		this.healthBarColor = "darkgreen";
		}
		if (this.healthBarLength <= 75) {
		this.healthBarColor = "green";
		}
		if (this.healthBarLength <= 50) {
		this.healthBarColor = "yellow";
		}
		if (this.healthBarLength <= 25) {
		this.healthBarColor = "orange";
		}
		if (this.healthBarLength <= 10) {
		this.healthBarColor = "red";
		}
		if (this.healthBarLength <= 0) {
		this.healthBarColor = "darkred";
		}
		//Check health max
		if (this.health > this.maxHealth) {
		this.health = this.maxHealth;
		}
		//Change shield bar color
		if (this.shieldBarLength > 75) {
		this.shieldBarColor = "#0075f3";
		}
		if (this.shieldBarLength <= 75) {
		this.shieldBarColor = "#00aef3";
		}
		if (this.shieldBarLength <= 50) {
		this.shieldBarColor = "#00cff3";
		}
		if (this.shieldBarLength <= 25) {
		this.shieldBarColor = "#00ebf3";
		}
		if (this.shieldBarLength <= 10) {
		this.shieldBarColor = "#adfcff";
		}
		if (this.shieldBarLength <= 0) {
		this.shieldBarColor = "#ffffff";
		}
		//Check shield max
		if (this.shield > this.maxShield) {
		this.shield = this.maxShield;
		}
		if (this.shield <= 0) {
		this.shield = 0;
		}
		if (this.alive) {
		//Set stats
		this.radius = (this.width/2)+5;
		this.angle += this.rotateSpeed;
			if (!this.legacy_Movement) {
			this.x += (Math.round(this.speed)*Math.sin(this.moveAngle));
			this.y += (Math.round(-this.speed)*Math.cos(this.moveAngle));
			} else {
			this.x += this.legacy_Speed_X;
			this.y += this.legacy_Speed_Y;
			}
			//Bullet collisions
			for (let i=0;i<this.bullets.length;i++) {
				if (this.bullets[i] != undefined) {
					if (this.bullets[i].x < 0 || this.bullets[i].x > 800 || this.bullets[i].y < 0 || this.bullets[i].y > 390) {
					this.bullets.splice(i,1);
					}
				}
				for (let j=0;j<houseCollisionUpdaters.length;j++) {
					if (houseCollisionUpdaters[j].object2.waveNumber == "all") {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
					if (houseCollisionUpdaters[j].object2.waveNumber[0] == "all" && houseCollisionUpdaters[j].object2.waveNumber[1] > wave) {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
					if (wave >= houseCollisionUpdaters[j].object2.waveNumber[0] && wave <= houseCollisionUpdaters[j].object2.waveNumber[1]) {
						if (this.bullets[i] != undefined && this.bullets[i].circleLine(houseCollisionUpdaters[j].object2)) {
						this.bullets.splice(i,1);
						}
					}
				}
				if (this.bullets[i] != undefined && this.bullets[i].bulletAliveTime < this.bullets[i].bulletMaxTime) {
				this.bullets[i].bulletAliveTime++;
				}
				if (this.bullets[i] != undefined && this.bullets[i].bulletAliveTime >= this.bullets[i].bulletMaxTime) {
				this.bullets.splice(i,1);
				}
			}
		} else {
		this.bullets = [];
		}
	},
	//collisions
	//rectangle vs. rectangle
	this.crashWith = function(otherobj) {
	var r1 = ((this.x-this.width/2) + this.width);
	var b1 = ((this.y-this.height/2) + this.height);
	var r2 = ((otherobj.x-otherobj.width/2) + otherobj.width);
	var b2 = ((otherobj.y-otherobj.height/2) + otherobj.height);
		if (b1 < otherobj.y-otherobj.height/2 || this.y-this.height/2 > b2 || r1 < otherobj.x-otherobj.width/2 || this.x-this.width/2 > r2) {
		return false;
		} else {
		return true;
		}
	},
	//circle vs. circle
	this.circleCrashWith = function(otherobj) {
	var distance_x = (this.x-otherobj.x);
	var distance_y = (this.y-otherobj.y);
	var rSum = (this.radius+otherobj.radius);
		if (((distance_x*distance_x)+(distance_y*distance_y)) <= (rSum*rSum)) { 
		return true;
		} else {
		return false;
		}
	},
	//get direction of an object
	this.getDir = function(otherobj, return_, insideHouse) {
	this.otherobj = otherobj;
	this.return_ = return_;
	this.insideHouse = insideHouse;
	var result = "";
	this.anglef = (Math.atan2(-this.y+this.otherobj.y, -this.x+this.otherobj.x)+1.57079633).toFixed(2);
		if (!this.return_) {
			if (this.anglef > 5.89 && this.anglef <= 6.28) {
			result = "North";
			}
			if (this.anglef <= 0 && this.anglef > -0.39) {
			result = "North";
			}
			if (this.anglef >= 0 && this.anglef < 0.39) {
			result = "North";
			}
			if (this.anglef <= -0.39 && this.anglef >= -1.17) {
				if (this.insideHouse) {
				result =  "NorthEast";
				} else {
				result =  "NorthWest";
				}
			}
			if (this.anglef >= 0.39 && this.anglef <= 1.17) {
			result =  "NorthEast";
			}
			if (this.anglef > 1.17 && this.anglef < 1.96) {
			result = "East";
			}
			if (this.anglef >= 1.96 && this.anglef <= 2.74) {
			result = "SouthEast";
			}
			if (this.anglef > 2.74 && this.anglef < 3.53) {
			result = "South";
			}
			if (this.anglef >= 3.53 && this.anglef <= 4.31) {
			result = "SouthWest";
			}
			if (this.anglef == -1.57) {
			result = "West";
			}
			if (this.anglef > 4.31 && this.anglef < 5.10) {
			result = "West";
			}
			if (this.anglef >= 5.10 && this.anglef <= 5.89) {
			result = "NorthWest";
			}
		} else {
		result = this.anglef;
		}
		return result;
	},
	//circle vs. line
	this.circleLine = function(otherobj, act, house) {
	this.otherobj = otherobj;
	this.act = act;
	this.house = house;
	if (this.house) {
		if (otherobj.points.length != 0) {
			var topSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[6],otherobj.points[7]]);
			var bottomSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[8]]);
			var leftSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[6]]);
			var rightSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[7],otherobj.points[8]]);
			var topLeftDir = this.getDir(otherobj.points[6], false, true);
			var topLeftDir2 = this.getDir(otherobj.points[6], true, true);
			var topRightDir = this.getDir(otherobj.points[7], false, true);
			var bottomLeftDir = this.getDir(otherobj.points[5], false, true);
			var bottomRightDir = this.getDir(otherobj.points[8], false, true);
			var topSideDist = this.distance(topSide, this);
			var bottomSideDist = this.distance(bottomSide, this);
			var leftSideDist = this.distance(leftSide, this);
			var rightSideDist = this.distance(rightSide, this);
		}
	}
	var t = this.getClosestPointOnLines({x:this.x,y:this.y}, otherobj.points);
	var dir = this.getDir(t, false, false);
	var distance = this.distance(t, this);
	var topLeftCheck = false;
	var topRightCheck = false;
	var bottomLeftCheck = false;
	var bottomRightCheck = false;
		if (distance <= this.radius) {
			if (this.act) {
				if (this.house) {
					if (Math.abs(leftSide.x-topSide.x) <= this.radius && Math.abs(leftSide.x-topSide.x) > 5 && Math.abs(leftSide.y-topSide.y) <= this.radius && Math.abs(leftSide.y-topSide.y) > 5) {
						if (topLeftDir == "NorthEast") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "NorthWest") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
					topLeftCheck = true;
					} else {
					topLeftCheck = false;
					}
					if (Math.abs(rightSide.x-topSide.x) <= this.radius && Math.abs(rightSide.x-topSide.x) > 5 && Math.abs(rightSide.y-topSide.y) <= this.radius && Math.abs(rightSide.y-topSide.y) > 5) {
						if (topRightDir == "NorthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "NorthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(topSideDist-this.radius);
						}
					topRightCheck = true;
					} else {
					topRightCheck = false;
					}
					if (Math.abs(leftSide.x-bottomSide.x) <= this.radius && Math.abs(leftSide.x-bottomSide.x) > 5 && Math.abs(leftSide.y-bottomSide.y) <= this.radius && Math.abs(leftSide.y-bottomSide.y) > 5) {
						if (bottomLeftDir == "NorthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "NorthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthWest") {
						this.x = this.x+Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthEast") {
						this.x = this.x-Math.abs(leftSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
					bottomLeftCheck = true;
					} else {
					bottomLeftCheck = false;
					}
					if (Math.abs(rightSide.x-bottomSide.x) <= this.radius && Math.abs(rightSide.x-bottomSide.x) > 5 && Math.abs(rightSide.y-bottomSide.y) <= this.radius && Math.abs(rightSide.y-bottomSide.y) > 5) {
						if (bottomRightDir == "NorthEast" || bottomRightDir == "East") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "NorthWest" || bottomRightDir == "West") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthWest") {
						this.x = this.x+Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthEast") {
						this.x = this.x-Math.abs(rightSideDist-this.radius);
						this.y = this.y-Math.abs(bottomSideDist-this.radius);
						}
					bottomRightCheck = true;
					} else {
					bottomRightCheck = false;
					}
				}
				if (!topLeftCheck && !topRightCheck && !bottomLeftCheck && !bottomRightCheck || !this.house) {
					if (dir == "NorthWest") {
					this.x = this.x+Math.abs(distance-this.radius);
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "NorthEast") {
					this.x = this.x-Math.abs(distance-this.radius);
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "SouthWest") {
					this.x = this.x+Math.abs(distance-this.radius);
					this.y = this.y-Math.abs(distance-this.radius);
					} else
					if (dir == "SouthEast") {
					this.x = this.x-Math.abs(distance-this.radius);
					this.y = this.y-Math.abs(distance-this.radius);
					}
					if (dir == "North") {
					this.y = this.y+Math.abs(distance-this.radius);
					} else
					if (dir == "South") {
					this.y = this.y-Math.abs(distance-this.radius);
					} else
					if (dir == "West") {
					this.x = this.x+Math.abs(distance-this.radius);
					} else
					if (dir == "East") {
					this.x = this.x-Math.abs(distance-this.radius);
					}
				}
			}
		return true;
		}
	return false;
	}
	//I got this from stack overflow! It works really well
	this.getClosestPointOnLines = function(pXy, aXys) {
	var minDist;
	var fTo;
	var x;
	var y;
	var i;
	var dist;
		if (aXys.length > 1) {
			for (var n = 1 ; n < aXys.length ; n++) {
				if (aXys[n] != undefined) {
					if (aXys[n].x != aXys[n - 1].x) {
					var a = (aXys[n].y - aXys[n - 1].y) / (aXys[n].x - aXys[n - 1].x);
					var b = aXys[n].y - a * aXys[n].x;
					dist = Math.abs(a * pXy.x + b - pXy.y) / Math.sqrt(a * a + 1);
					}
					else
					dist = Math.abs(pXy.x - aXys[n].x)
					var rl2 = Math.pow(aXys[n].y - aXys[n - 1].y, 2) + Math.pow(aXys[n].x - aXys[n - 1].x, 2);
					var ln2 = Math.pow(aXys[n].y - pXy.y, 2) + Math.pow(aXys[n].x - pXy.x, 2);
					var lnm12 = Math.pow(aXys[n - 1].y - pXy.y, 2) + Math.pow(aXys[n - 1].x - pXy.x, 2);
					var dist2 = Math.pow(dist, 2);
					var calcrl2 = ln2 - dist2 + lnm12 - dist2;
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
		var dx = aXys[i - 1].x - aXys[i].x;
		var dy = aXys[i - 1].y - aXys[i].y;
		x = aXys[i - 1].x - (dx * fTo);
		y = aXys[i - 1].y - (dy * fTo);
		}
	return { 'x': x, 'y': y, 'i': i, 'fTo': fTo, 'line': aXys[i]};
	}
}

//Main update loop
var loaded = false;
var updateArray = [];
function updateInit() {
updateArray.push("playerControllerUpdater()");
updateArray.push("updateKeys()");
updateArray.push("controllerUpdate()");
updateArray.push("joystick()");
updateArray.push("audioUpdater()");
updateArray.push("audioManager()");
updateArray.push("collisionMapper()");
updateArray.push("enemyAITest.update()");
updateArray.push("houseCollisionUpdate()");
updateArray.push("borderCollision()");
updateArray.push("growingUpdater()");
updateArray.push("dimmersUpdate()");
updateArray.push("borderDimming()");
updateArray.push("earthUIPanel.update()");
updateArray.push("shipUpdater()");
updateArray.push("resetScene(30)");
updateArray.push("PIBUpdate()");
updateArray.push("settingsMenuOpener()");
updateArray.push("settingsManager()");
updateArray.push("uiManager()");
updateArray.push("debugManager()");
updateArray.push("weaponUpdater()");
updateArray.push("renderer()");
}

var updateLoopReset = false;
var updateState = 0;
function updateLoop() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (!loaded) {
	updateLoopReset = true;
	mainObjectArray = collisionLayer.concat(backgroundLayer, lowerObjectLayer, playerEnemySpawnLayer, upperObjectLayer, wallLayer, aboveWallLayer, uiLayer);
	loaded = true;
	}
	if (updateLoopReset) {
		if (updateState == 0) {
		updateArray = [];
		updateArray.length = 0;
		updateState++;
		}
		if (updateState == 1) {
		updateInit();
		updateState = 0;
		updateLoopReset = false;
		}
	}
	if (wave == 22) {
	player1Controller.fired = true;
	}
	for (let i=0;i<updateArray.length;i++) {
	eval(updateArray[i]);
	}
}

//Effects
//Grow effect
var growEffects = [];
function growEffect(target, maxGrowSize, GrowSpeed) {
this.target = target;
this.maxGrowSize = maxGrowSize;
this.GrowSpeed = GrowSpeed;
this.minGrowSize = this.target.width;
var phase = 0;
	this.update = function() {
		if (this.target.waveNumber == "all") {
			if (this.target.alive) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
			if (!pause && settingsState != 1) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
		}
		if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
			if (this.target.alive) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
			if (!pause && settingsState != 1) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
		}
		if (this.target.waveNumber[0] == "all" && wave != this.target.waveNumber[1]) {
			if (this.target.alive) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
			if (!pause && settingsState != 1) {
				if (this.target.width < this.maxGrowSize && phase == 0) {
				this.target.width += this.GrowSpeed;
				this.target.height += this.GrowSpeed;
				}
				if (this.target.width >= this.maxGrowSize && phase == 0) {
				phase = 1;
				}
				if (this.target.width > this.minGrowSize && phase == 1) {
				this.target.width -= this.GrowSpeed;
				this.target.height -= this.GrowSpeed;
				}
				if (this.target.width <= this.minGrowSize && phase == 1) {
				phase = 0;
				}
			}
		}
	}
}
function growingUpdater() {
	for (let i=0;i<growEffects.length;i++) {
	growEffects[i].update();
	}
}
//Dim effect
var dimEffects = [];
function dimmingEffect(target, minOpacity, dimSpeed) {
this.target = target;
this.minOpacity = minOpacity;
this.dimSpeed = dimSpeed;
	this.dim = function(state) {
		if (state) {
			if (this.target[0] == undefined) {
				if (this.target.waveNumber == "all") {
					if (this.target.globalAlpha > this.minOpacity) {
					this.target.globalAlpha -= this.dimSpeed;
					}
					if (this.target.globalAlpha <= this.minOpacity) {
					this.target.globalAlpha = this.minOpacity;
					}
				}
				if (this.target.waveNumber[0] == "all" && this.target.waveNumber[1] > wave) {
					if (this.target.globalAlpha > this.minOpacity) {
					this.target.globalAlpha -= this.dimSpeed;
					}
					if (this.target.globalAlpha <= this.minOpacity) {
					this.target.globalAlpha = this.minOpacity;
					}
				}
				if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
					if (this.target.globalAlpha > this.minOpacity) {
					this.target.globalAlpha -= this.dimSpeed;
					}
					if (this.target.globalAlpha <= this.minOpacity) {
					this.target.globalAlpha = this.minOpacity;
					}
				}
			} else {
				for (let i=0;i<this.target.length;i++) {
					if (this.target[0].waveNumber == "all") {
						if (this.target[i].globalAlpha > this.minOpacity[i]) {
						this.target[i].globalAlpha -= this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha <= this.minOpacity[i]) {
						this.target[i].globalAlpha = this.minOpacity[i];
						}
					}
					if (this.target[0].waveNumber[0] == "all" && this.target[0].waveNumber[1] > wave) {
						if (this.target[i].globalAlpha > this.minOpacity[i]) {
						this.target[i].globalAlpha -= this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha <= this.minOpacity[i]) {
						this.target[i].globalAlpha = this.minOpacity[i];
						}
					}
					if (wave >= this.target[0].waveNumber[0] && wave <= this.target[0].waveNumber[1]) {
						if (this.target[i].globalAlpha > this.minOpacity[i]) {
						this.target[i].globalAlpha -= this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha <= this.minOpacity[i]) {
						this.target[i].globalAlpha = this.minOpacity[i];
						}
					}
				}
			}
		} else {
			if (this.target[0] == undefined) {
				if (this.target.waveNumber == "all") {
					if (this.target.globalAlpha < 1) {
					this.target.globalAlpha += this.dimSpeed;
					}
					if (this.target.globalAlpha >= 1) {
					this.target.globalAlpha = 1;
					}
				}
				if (this.target.waveNumber[0] == "all" && this.target.waveNumber[1] > wave) {
					if (this.target.globalAlpha < 1) {
					this.target.globalAlpha += this.dimSpeed;
					}
					if (this.target.globalAlpha >= 1) {
					this.target.globalAlpha = 1;
					}
				}
				if (wave >= this.target.waveNumber[0] && wave <= this.target.waveNumber[1]) {
					if (this.target.globalAlpha < 1) {
					this.target.globalAlpha += this.dimSpeed;
					}
					if (this.target.globalAlpha >= 1) {
					this.target.globalAlpha = 1;
					}
				}
			} else {
				for (let i=0;i<this.target.length;i++) {
					if (this.target[0].waveNumber == "all") {
						if (this.target[i].globalAlpha < 1) {
						this.target[i].globalAlpha += this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha >= 1) {
						this.target[i].globalAlpha = 1;
						}
					}
					if (this.target[0].waveNumber[0] == "all" && this.target[0].waveNumber[1] > wave) {
						if (this.target[i].globalAlpha < 1) {
						this.target[i].globalAlpha += this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha >= 1) {
						this.target[i].globalAlpha = 1;
						}
					}
					if (wave >= this.target[0].waveNumber[0] && wave <= this.target[0].waveNumber[1]) {
						if (this.target[i].globalAlpha < 1) {
						this.target[i].globalAlpha += this.dimSpeed[i];
						}
						if (this.target[i].globalAlpha >= 1) {
						this.target[i].globalAlpha = 1;
						}
					}
				}
			}
		}
	}
}
function dimmersUpdate() {
	for (let i=0;i<dimEffects.length;i++) {
		if (dimEffects[i].target[0] == undefined) {
			if (player_1.crashWith(dimEffects[i].target)) {
			dimEffects[i].dim(true);
			} else {
			dimEffects[i].dim(false);
			}
		} else {
			if (player_1.crashWith(dimEffects[i].target[0])) {
			dimEffects[i].dim(true);
			} else {
			dimEffects[i].dim(false);
			}
		}
	}
}

//Border dimming
function borderDimming() {
	if ((player_1.x-player_1.width/2) <= 45 || (player_1.x+player_1.width/2) >= 745 || (player_1.y-player_1.height/2) <= 60 || (player_1.y+player_1.height/2) >= 330) {
	wave1_4BorderDim.dim(true);
	}
	if ((player_1.x-player_1.width/2) > 45 && (player_1.x+player_1.width/2) < 745 && (player_1.y-player_1.height/2) > 60 && (player_1.y+player_1.height/2) < 330) {
	wave1_4BorderDim.dim(false);
	}
}

//Border collision
function borderCollision() {
var topSide = player_1.getClosestPointOnLines({x:player_1.x,y:player_1.y}, [{x:0,y:0},{x:800,y:0}]);
var topSideDist = player_1.distance(topSide, player_1);
var bottomSide = player_1.getClosestPointOnLines({x:player_1.x,y:player_1.y}, [{x:0,y:390},{x:800,y:390}]);
var bottomSideDist = player_1.distance(bottomSide, player_1);
var leftSide = player_1.getClosestPointOnLines({x:player_1.x,y:player_1.y}, [{x:0,y:0},{x:0,y:390}]);
var leftSideDist = player_1.distance(leftSide, player_1);
var rightSide = player_1.getClosestPointOnLines({x:player_1.x,y:player_1.y}, [{x:800,y:0},{x:800,y:390}]);
var rightSideDist = player_1.distance(rightSide, player_1);
	if (topSideDist <= player_1.radius) {
	player_1.y = player_1.y+Math.abs(topSideDist-player_1.radius);
	}
	if (bottomSideDist <= player_1.radius) {
	player_1.y = player_1.y-Math.abs(bottomSideDist-player_1.radius);
	}
	if (leftSideDist <= player_1.radius) {
	player_1.x = player_1.x+Math.abs(leftSideDist-player_1.radius);
	}
	if (rightSideDist <= player_1.radius) {
	player_1.x = player_1.x-Math.abs(rightSideDist-player_1.radius);
	}
}

//UI/Debug/Settings manager
var buttonsCollided = 0;
function uiManager() {
	for (let i=0;i<uiLayer.length;i++) {
		if (uiLayer[i].tag == "button") {
			if (!cursor.crashWith(uiLayer[i])) {
			uiLayer[i].shadowColor = "black";
			} else {
			uiLayer[i].shadowColor = "white";
			}
		}
	}
	for (let i=0;i<buttonManagers.length;i++) {
		if (wave < buttonManagers[i].target.waveNumber[0] || wave > buttonManagers[i].target.waveNumber[1]) {
		i++;
		}
		if (wave >= buttonManagers[i].target.waveNumber[0] && wave <= buttonManagers[i].target.waveNumber[1]) {
		buttonManagers[i].update();
		}
		if (buttonManagers[i].target.waveNumber == "all") {
		buttonManagers[i].update();
		}
		if (cursor.crashWith(buttonManagers[i].target)) {
		buttonsCollided++;
		}
		if (buttonsCollided > 0) {
		player1Controller.dontFire = true;	
		}
		if (i >= buttonManagers.length-1) {
			if (buttonsCollided == 0) {
			player1Controller.dontFire = false;	
			}
		buttonsCollided = 0;
		}
	}
	if (player1Controller.controlMethod == "controller") {
		if (hideCursor == 0) {
		canvas.style.cursor = "none";
		}
		if (hideCursor == 1) {
		canvas.style.cursor = "initial";
		}
		if (hideCursor >= 2) {
		hideCursor = 0;
		}
		if (numberOfGamepads() == 0) {
		noControllerText.globalAlpha = 1;
		} else {
		noControllerText.globalAlpha = 0;
		}
	} else {
	canvas.style.cursor = "initial";
	}
	if (cursor.crashWith(settingsButton)) {
	settingsButton.rotateSpeed = 0.05;
	} else {
	settingsButton.rotateSpeed = 0;	
	}
	//Player UI
	healthUIText.op2 = "Health:"+player1Controller.target.healthBarLength;
	healthBarUI.width = player1Controller.target.healthBarLength;
	healthBarUI.color = player1Controller.target.healthBarColor;
	shieldUIText.op2 = "Shield:"+player1Controller.target.shieldBarLength;
	shieldBarUI.width = player1Controller.target.shieldBarLength;
	shieldBarUI.color = player1Controller.target.shieldBarColor;
	ammoAmountUIText.op2 = "Ammo:"+player1Controller.target.ammo;
	ammoAmountUIText.width = scaleText(ammoAmountUIText,60)+"px Consolas";
	weaponNameUIText.op2 = "Weapon:"+player1Controller.target.weaponName;
	weaponNameUIText.width = scaleText(weaponNameUIText,70)+"px Consolas";
	if (document.getElementById('mute').checked) {
	muteUnmuteUI.op1 = 80;
	} else {
	muteUnmuteUI.op1 = 0;	
	}
	if (wave <= 20) {
	waveNumberUIText.op2 = "Wave:"+wave;
	}
	if (wave == 22) {
	waveNumberUIText.op2 = "Wave:"+0;
	}
	waveNumberUIText.width = scaleText(waveNumberUIText,60)+"px Consolas";
	if (wave == 22) {
	moneyUIText.op2 = "$"+player1Controller.target.totalMoney;
	}
	if (wave != 22) {
	moneyUIText.op2 = "$"+player1Controller.target.money;
	}
	if (wave < 5) {
	locationUIText.op2 = "Location:Monty Forest Cabins";	
	}
	if (wave > 4 && wave < 8) {
	locationUIText.op2 = "Location:Monty Trailer Park";		
	}
	if (wave == 22) {
	locationUIText.op2 = "Location:Warp Zone";
	}
	locationUIText.width = scaleText(locationUIText,120)+"px Consolas";
}
function scaleText(txt, maxWidth) {
var fontSize = parseFloat(txt.width);
var width = txt.getTextWidth();
var minFontSize = 1;
	if (width > maxWidth+3) {
	var newFontSize = fontSize;
		while (width > maxWidth+3) {
		//console.log(newFontSize);
		txt.width = newFontSize+"px Consolas";
		width = txt.getTextWidth();
			if (width > maxWidth) {
			newFontSize -= 0.1;
			}
			if (newFontSize < minFontSize) { 
			return minFontSize; 
			}
		}
		return newFontSize;
	} else if (width < maxWidth-3) {
	var newFontSize = fontSize;
		while (width < maxWidth-3) {
		//console.log(newFontSize);
		txt.width = newFontSize+"px Consolas";
		width = txt.getTextWidth();
			if(width < maxWidth){
			newFontSize += 0.1;
			}
		}
		return newFontSize;
	} else {
	return fontSize;
	}
}
function debugManager() {
fpsText.op2 = "FPS:"+fps.getFPS();
moveMouse.update();
	if (!pressed) {
	cursor.color = "red";	
	}
	if (pressed && debug) {
	cursor.color = "green";	
	}
	//Change this if I add more debug text
	if (fpsShow && !debug) {
	noControllerText.y = 40;
	} else
	if (fpsShow && debug) {
	noControllerText.y = 80;
	} else {
	noControllerText.y = 20;	
	}
	if (debug && testAI_Debug && !collisionMapper_Debug) {
	aiTestEnemy.globalAlpha = 1;
	} else {
	aiTestEnemy.globalAlpha = 0;
	}
	for (let i=0;i<uiLayer.length;i++) {
		if (uiLayer[i].tag == "debug") {
			if (debug && !testAI_Debug && !collisionMapper_Debug) {
				switch (player1Controller.controlMethod) {	
					case "keyboard":
					player1MoveAngleText.op2 = "P1 Move Angle: "+player1Controller.target.moveAngle;
					player1ShootAngleText.op2 = "P1 Shoot Angle: "+getMouseRotation(player1Controller.target, cursor);
					break;
					case "joystick":
					player1MoveAngleText.op2 = "P1 Move Angle: "+joystickMoveAngle;
					player1ShootAngleText.op2 = "P1 Shoot Angle: "+joystickShootAngle;
					break;
					case "controller":
					player1MoveAngleText.op2 = "P1 Move Angle: "+controllerMoveAngle[player1Controller.controller];
					player1ShootAngleText.op2 = "P1 Shoot Angle: "+controllerShootAngle[player1Controller.controller];
					break;
				}
			uiLayer[i].globalAlpha = 1;	
			} else {
			uiLayer[i].globalAlpha = 0;		
			}
		}
		if (uiLayer[i].tag == "collisionMapper") {
			if (debug && !testAI_Debug && collisionMapper_Debug) {
			uiLayer[i].globalAlpha = 1;	
			} else {
			uiLayer[i].globalAlpha = 0;		
			}
		}
		if (uiLayer[i].tag == "fps") {
			if (fpsShow) {
			uiLayer[i].globalAlpha = 1;	
			} else {
			uiLayer[i].globalAlpha = 0;		
			}
		}
	}
	if (collisionMapper_Debug && debug && !testAI_Debug && settingsState == 0) {
	document.getElementById('collisionMapper').style.visibility = "visible";
	}
	if (settingsState == 1) {
	document.getElementById('collisionMapper').style.visibility = "hidden";
	}
}
var settingsState = 0;
function settingsMenuOpener() {
	if (settingsState == 0) {
	document.getElementById('settings').style.visibility = "hidden";
	document.getElementById('settings').style.opacity = 0;
	}
	if (settingsState == 1) {
	document.getElementById('settings').style.visibility = "visible";
	document.getElementById('settings').style.opacity = 1;
	}
	if (settingsState >= 2) {
	settingsState = 0;
	}
}
function settingsManager() {
ctx.imageSmoothingEnabled = document.getElementById("imageSmooth").checked;
enemyHealthBars = document.getElementById("healthBars").checked;
fpsShow = document.getElementById("showFPSCounter").checked;
document.getElementById("Controllers_Connected").innerHTML = "Controllers Conected: "+numberOfGamepads();
document.getElementById("Player_Controller").innerHTML = "Player Controller: "+(player1Controller.controller+1);
	if (player1Controller.controller > numberOfGamepads()) {
	player1Controller.controller = 0;
	}
	if (player1Controller.controller < 0) {
	player1Controller.controller = numberOfGamepads();
	}
	if (document.getElementById('Keyboard').checked) {
	player1Controller.controlMethod = "keyboard";
	}
	if (document.getElementById('Mobile').checked) {
	player1Controller.controlMethod = "joystick";
	}
	if (document.getElementById('Controller').checked) {
	player1Controller.controlMethod = "controller";
	}
	if (document.getElementById('Easy_').checked) {
	difficulty = 0;
	}
	if (document.getElementById('Medium_').checked) {
	difficulty = 1;
	}
	if (document.getElementById('Hard_').checked) {
	difficulty = 2;
	}
}

//Change controllers functions
function changePlayer1Controller(state) {
this.state = state
	if (this.state == "up") {
	player1Controller.controller++;
	}
	if (this.state == "down") {
	player1Controller.controller--;
	}
}

//Back function
function back() {
	if (!unlockControls && settingsState == 1) {
	settingsState++;
	backTrack.play();
	}
}

//Patch notes function
var PIB = 0;
function openPIB(state) {
this.state = state;
this.lock = false;
	if (this.state == "down") {
		if (!this.lock) {
		PIB++;
		console.log(PIB);
		this.lock = true;
		}
	}
	if (this.state == "up") {
	this.lock = false;
	}
}
var patchInfoObject = document.getElementById("patchInfo").style;
function PIBUpdate() {
	if (PIB == 0) {
		patchInfoObject.visibility = "hidden";
		patchInfoObject.opacity = 0;
	}
	if (PIB == 1) {
		patchInfoObject.visibility = "visible";
		patchInfoObject.opacity = 1;
	}
	if (PIB >= 2) {
	PIB = 0;	
	}
	patchInfoObject.width = (250*scaleFillNativeWidth)+"px";
	patchInfoObject.height = (400*scaleFillNativeHeight)+"px";
}

//Key init
var enter = false;
function keyInit() {
upKey = new keyMaker("upKey", "Up_Button_Text", "Move Up: ", "w", false, "player1Controller.up = true", "player1Controller.up = false");
keys.push(upKey);
downKey = new keyMaker("downKey", "Down_Button_Text", "Move Down: ", "s", false, "player1Controller.down = true", "player1Controller.down = false");
keys.push(downKey);
leftKey = new keyMaker("leftKey", "Left_Button_Text", "Move Left: ", "a", false, "player1Controller.left = true", "player1Controller.left = false");
keys.push(leftKey);
rightKey = new keyMaker("rightKey", "Right_Button_Text", "Move Right: ", "d", false, "player1Controller.right = true", "player1Controller.right = false");
keys.push(rightKey);
backKey = new keyMaker("backKey", "Back_Button_Text", "Back: ", "Escape", true, "if (!unlockControls) {back()}", "");
keys.push(backKey);
patchKey = new keyMaker("patchKey", "Patch_Button_Text", "Patch Info: ", "p", true, "if (!unlockControls) {openPIB('down')}", "openPIB('up')");
keys.push(patchKey);
enterKey = new keyMaker("enterKey", "Enter_Button_Text", "Enter: ", "Enter", false, "enter=true", "enter=false");
keys.push(enterKey);
muteKey = new keyMaker("muteKey", "Mute_Button_Text", "Mute: ", "m", true, "if (!unlockControls) {document.getElementById('mute').checked=!document.getElementById('mute').checked}", "saveSettings('mute')");
keys.push(muteKey);
}

//Keybinder
var keys = [];
var keyHit = false;
var unlockControls = false;
var keyPressed = "";
function keyMaker(name, objectName, objectText, key, runIfPaused, downCode, upCode) {
this.name = name;
this.objectName = objectName;
this.objectText = objectText;
this.key = key;
this.runIfPaused = runIfPaused;
this.downCode = downCode;
this.upCode = upCode;
this.lock = 0;
this.locking = false;
	this.save = function() {
	localStorage.setItem(this.name, this.key);
	},
	this.load = function() {
		if (localStorage.getItem(this.name) != null) {
		this.key = localStorage.getItem(this.name);
		}
	},
	this.setText = function() {
		if (this.locking) {
		this.lock = 1;
		} else {
		this.lock = 0;
		}
		if (this.lock == 1) {
		document.getElementById(this.objectName).innerHTML = "Hit Any Key";	
			if (keyHit) {
			console.log(keyPressed);
			this.key = keyPressed;
			unlockControls = false;
			this.save();
			this.locking = false;
			this.lock = 0;
			keyHit = false;
			}
		} else {
		document.getElementById(this.objectName).innerHTML = this.objectText+" "+this.key.toUpperCase();	
		}
	},
	this.runCode = function(upOrDown) {
	this.upOrDown = upOrDown;
		if (this.upOrDown == "down") {
			if (this.runIfPaused) {
			eval(this.downCode);
			} else {
				if (!pause) {
				eval(this.downCode);
				}
			}
		} else if (this.upOrDown == "up") {
			if (this.runIfPaused) {
			eval(this.upCode);
			} else {
				if (!pause) {
				eval(this.upCode);
				}
			}
		}
	}
}
function keyLoader() {
	keyInit();
	for (let i=0;i<keys.length;i++) {
	keys[i].load();
	}
}
function updateKeys() {
	for (let i=0;i<keys.length;i++) {
	keys[i].setText();
	}
}
function keySetter(name) {
this.name = name;
unlockControls = true;
	for (let i=0;i<keys.length;i++) {
		if (keys[i].name == this.name) {
		keys[i].locking = true;
		} else {
		keys[i].locking = false;
		}
	}
}
function keyDownHandler(event) {
keyPressed = event.key;
	if (keyPressed && unlockControls == true) {
	keyHit = true;
	console.log(keyHit);
	}
	for (let i=0;i<keys.length;i++) {
		switch (keyPressed) {
			case keys[i].key:
			keys[i].runCode("down");
			break;
		}
	}
}
function keyUpHandler(event) {
keyPressed = event.key;
	for (let i=0;i<keys.length;i++) {
		switch (keyPressed) {
			case keys[i].key:
			keys[i].runCode("up");
			break;
		}
	}
}

function audioManager() {
	if (wave == 0) {
	titleScreenTrack.play();
	} else {
	titleScreenTrack.pause();	
	}
	if (wave == 22) {
	warpZoneTrack.play();
	} else {
	warpZoneTrack.pause();
	}
}

var audioArray = [];
function audioInit() {
//Music
titleScreenTrack = new audioEngine('titleScreen', 'musicVolume', null, true, 100, false);
audioArray.push(titleScreenTrack);
warpZoneTrack = new audioEngine('warpZone', 'musicVolume', null, true, 100, false);
audioArray.push(warpZoneTrack);
//Sounds
//add a mute toggle to all sounds
buttonSelectTrack = new audioEngine('buttonSelect', 'soundVolume', null, false, 200, false);
audioArray.push(buttonSelectTrack);
startGameTrack = new audioEngine('startGame', 'soundVolume', null, false, 200, false);
audioArray.push(startGameTrack);
backTrack = new audioEngine('back', 'soundVolume', null, false, 200, false);
audioArray.push(backTrack);
}

/**
//Audio Engine//
htmlAudioComponent: id of the audio element;
htmlVolumeSlider: id of the audio slider;
loop: true or false | if true it will loop and if false it will just end;
maxVolume: will make the ratio to tell how quiet or how loud the audio can be;
mute: true or false | if true it will be muted and if false it will play;
startTimeEndTime: {startTimeState:'true | false',startTime:'some number',endTimeState:'true | false',endTime:'some number'};
**/
function audioEngine(htmlAudioComponent, htmlVolumeSlider, extraMuteComponent, loop, maxVolume, mute, startTimeEndTime) {
this.htmlAudioComponent = document.getElementById(htmlAudioComponent);
this.htmlSliderComponent = document.getElementById(htmlVolumeSlider);
this.extraMuteComponent = document.getElementById(extraMuteComponent);
this.loop = loop;
this.maxVolume = maxVolume;
this.mute = mute;
this.startTimeEndTime = startTimeEndTime;
this.volume = 0;
this.loaded = false;
this.muteComponentValue = document.getElementById('mute').checked;
	this.play = function() {
		if (this.startTimeEndTime != null && this.startTimeEndTime != undefined) {
			if (this.startTimeEndTime.startTimeState) {
			this.htmlAudioComponent.currentTime = this.startTimeEndTime.startTime;
			}
		}
	this.htmlAudioComponent.play();
	}
	this.pause = function(resetTime) {
	this.htmlAudioComponent.pause();
		if (resetTime) {
		this.htmlAudioComponent.currentTime = 0;
		}
	}
	this.update = function() {
	this.muteComponentValue = document.getElementById('mute').checked;
	if (this.extraMuteComponent != null && this.extraMuteComponent != undefined) {
		if (this.muteComponentValue || this.extraMuteComponent.checked) {
		this.mute = true;	
		} else {
		this.mute = false;
		}
	} else {
		if (this.muteComponentValue) {
		this.mute = true;	
		} else {
		this.mute = false;
		}
	}
	this.volume = this.htmlSliderComponent.value;
	if (!this.mute) {
	this.htmlAudioComponent.volume = this.volume/this.maxVolume;
	} else {
	this.htmlAudioComponent.volume = 0;
	}
		if (this.loop && this.htmlAudioComponent.currentTime >= this.htmlAudioComponent.duration) {
		this.htmlAudioComponent.currentTime = 0;
		this.play();
		}
		if (this.startTimeEndTime != null && this.startTimeEndTime != undefined) {
			if (this.startTimeEndTime.endTimeState && this.htmlAudioComponent.currentTime >= this.startTimeEndTime.endTime) {
			this.htmlAudioComponent.currentTime = this.htmlAudioComponent.duration;
			}
		}
	}
}
function audioUpdater() {
	for (let i=0;i<audioArray.length;i++) {
	audioArray[i].update();
	}
}