var scriptsLoaded = false;
var imagesLoaded = false;
var audioLoaded = false;
var bindedEvents = false;
var loadScripts = setInterval(setupScripts,1000);
var loadImages = setInterval(setupImages,1000);
var loadAudio = setInterval(setupAudio,1000);
//load game scripts/images/audio
var defaultScriptArray = ["./Scripts/Game/gameUpdateLoop.js","./Scripts/Levels/level_1.js"];
var ScriptArray = ["./Scripts/Game/gameUpdateLoop.js","./Scripts/Levels/level_1.js"];
var ImageArray = [{src:"./Images/Test_Cube.png",id:"testCube"}];
var AudioArray = [{src:"./Audio/Test_Audio.mp3",id:"testAudio"}];
var FunctionArray = [];

//disable key defaults
var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
			case 32: case 9: e.preventDefault(); break; // Space/Tab
            default: break; // do not block other keys
        }
    },false);
window.addEventListener('keyup',function(e){keys[e.keyCode] = false;},false);

//update info control logic
var openPatchInfo = 0;
function patchInfo() { 
openPatchInfo += 1;
if (openPatchInfo > 1) {
openPatchInfo = 0;
 }
}

//game vars
var flashScreen = false;
var mainMenu = false;
var pauseMenu = false;
var pause = false;
var wave = 0;
var level = 0;
var modded = false;
var debug = true;
var UI_Shadows = false;

function modLoader(src, modPosition, resetMods) {
this.src = src;
this.modPosition = modPosition;
this.resetMods = resetMods;
	if (this.resetMods) {
	ScriptArray = defaultScriptArray;
	}
	if (this.src == "reset") {
	localStorage && (localStorage.modArray_ = defaultScriptArray);
	localStorage && (localStorage.modBool_ = false);
	console.log("modded have been reset");
	} else {
	ScriptArray.splice(this.modPosition, 0, this.src);
	modded = true;
	localStorage && (localStorage.modArray_ = ScriptArray.join());
	localStorage && (localStorage.modBool_ = modded);
	console.log(localStorage.modArray_+" "+localStorage.modBool_);
	}
}

var Title = document.getElementById("Title");
var BrowserIcon = document.getElementById("bowserIcon");
var AppleIcon = document.getElementById("appleIcon");
var Body = document.getElementById("Body");
var Screen = document.getElementById("Screen");
var screenRefresh = setInterval(refreshScreen,10);
var ctx = document.getElementById("Screen").getContext("2d");
function setup() {
	if (localStorage && 'modBool_' in localStorage) {
	modded = localStorage.modBool_;
	}
	if (!modded) {
	modLoader("reset");
	}
	if (localStorage && 'modArray_' in localStorage) {
	ScriptArray = localStorage.modArray_.split(',');
	}
Title.innerHTML = JSONREADER.returnParse("page").title;
BrowserIcon.href = JSONREADER.returnParse("page").browerIcon;
AppleIcon.href = JSONREADER.returnParse("page").appleIcon;
Body.style.backgroundColor = JSONREADER.returnParse("page").pageBGcolor;
Body.style.backgroundImage = JSONREADER.returnParse("page").pageBGcolor;
Screen.style.backgroundColor = JSONREADER.returnParse("canvas").bgColor;
}
function ExecuteAfterDOM() {
window.addEventListener('resize', resizeHandler);
resizeHandler();
}
function setupScripts() {
	if (scriptsLoaded === false) {
	SCRIPTLOADER.check();
		if (SCRIPTLOADER.progress === ScriptArray.length) {
		scriptsLoaded = true;
		Screen.width = JSONREADER.returnParse("canvas").nativeWidth;
		Screen.height = JSONREADER.returnParse("canvas").nativeHeight;
		clearInterval(loadScripts);
		}
	}
}
function setupImages() {
	if (scriptsLoaded === true && imagesLoaded === false) {
		if (typeof IMAGELOADER !== 'undefined') {
		IMAGELOADER.check();
			if (IMAGELOADER.progress === ImageArray.length) {
			imagesLoaded = true;
			clearInterval(loadImages);
			}
		}
	}
}
function setupAudio() {
	if (imagesLoaded === true && audioLoaded === false) {
		if (typeof AUDIOLOADER !== 'undefined') {
		AUDIOLOADER.check();
			if (AUDIOLOADER.progress === ImageArray.length) {
			audioLoaded = true;
			clearInterval(loadAudio);
			}
		}
	}
}
function refreshScreen() {
ctx.clearRect(0, 0, Screen.width, Screen.height);
	if (audioLoaded === true) {
		if (bindedEvents === false) {
		bindEvents();
		bindedEvents = true;
		}
		if (typeof update === 'function') {
		update();
		}
	}
}