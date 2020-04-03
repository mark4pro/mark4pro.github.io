var won = 0;
var dead = 0;
var firef = 0;
var level = 1;
var difficaulty = 1;
var _objects = [];
var lockUp = 0;
var lockDown = 0;
var lockLeft = 0;
var lockRight = 0;
var aiCircleBounceSpeed = 1;
var circleBounceSpeed = 1;
var settingsMenuShow = false;
var DebugLock = false;
var debug = 0;
var silentDebug = true;
var timerLock = false;
var _timer = 0;
var timeMode = false;
var pressed = false;
var mobileLock = false;
var _mobile = 0;
var onMobile = false;
var mouse_button = "null";
var canvas = document.getElementById("canvas");
var optionsjs;
var managerjs;
var joystickCreated = false;
var isLoaded = false;

	function start() {
	     canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
		 cursor = new component(30, 30, "cursor_img", -50, -250, "img", "", "", "", "cursor");
		 _objects.push(cursor);
		 settingsMenuTxt = new component("60px", "Consolas", "white", canvas.width/2, 60, "text", "Settings", "center", "", "settingsM");
		 _objects.push(settingsMenuTxt);
		 hardResetBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2, canvas.height-530, "text", "Hard Reset", "center", "", "settingsM");
		 _objects.push(hardResetBttnSTxt);
		 hardResetBttnS = new component(200, 80, "grey", canvas.width/2 - 100, canvas.height-580, "rec", "", "", "", "settingsM");
		 _objects.push(hardResetBttnS);
		 impBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 + 300, canvas.height-430, "text", "Impossible", "center", "", "settingsM");
		 _objects.push(impBttnSTxt);
		 impBttnS = new component(200, 80, "lightgrey", canvas.width/2+200, canvas.height-480, "rec", "", "", "", "settingsM");
		 _objects.push(impBttnS);
		 hardBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 + 100, canvas.height-430, "text", "Hard", "center", "", "settingsM");
		 _objects.push(hardBttnSTxt);
		 hardBttnS = new component(200, 80, "grey", canvas.width/2, canvas.height-480, "rec", "", "", "", "settingsM");
		 _objects.push(hardBttnS);
		 normalBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 - 100, canvas.height-430, "text", "Normal", "center", "", "settingsM");
		 _objects.push(normalBttnSTxt);
		 normalBttnS = new component(200, 80, "lightgrey", canvas.width/2-200, canvas.height-480, "rec", "", "", "", "settingsM");
		 _objects.push(normalBttnS);
		 easyBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 - 300, canvas.height-430, "text", "Easy", "center", "", "settingsM");
		 _objects.push(easyBttnSTxt);
		 easyBttnS = new component(200, 80, "grey", canvas.width/2-400, canvas.height-480, "rec", "", "", "", "settingsM");
		 _objects.push(easyBttnS);
		 timerBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-320, "text", "Timer", "center", "", "settingsM");
		 _objects.push(timerBttnSTxt);
		 timerBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-380, "rec", "", "", "", "settingsM");
		 _objects.push(timerBttnS);
		 mobileBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-220, "text", "Mobile", "center", "", "settingsM");
		 _objects.push(mobileBttnSTxt);
		 mobileBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-280, "rec", "", "", "", "settingsM");
		 _objects.push(mobileBttnS);
		 debugBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-120, "text", "Debug", "center", "", "settingsM");
		 _objects.push(debugBttnSTxt);
		 debugBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-180, "rec", "", "", "", "settingsM");
		 _objects.push(debugBttnS);
		 backBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-20, "text", "Back", "center", "", "settingsM");
		 _objects.push(backBttnSTxt);
		 backBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-80, "rec", "", "", "", "settingsM");
		 _objects.push(backBttnS);
		 settingsMenu = new component(500, 300, "black", 0, 0, "rec", "", "", "", "settingsM");
		 _objects.push(settingsMenu);
		 restartTxt = new component("50px", "Consolas", "white", 250, 150, "text", "Restart", "center", "", "DandW");
		 _objects.push(restartTxt);
		 restart = new component(200, 80, "grey", 250, 150, "rec", "", "", "", "DandW");
		 _objects.push(restart);
		 nextLevelTxt = new component("50px", "Consolas", "white", 250, 150, "text", "Next", "center", "win", "DandW");
		 _objects.push(nextLevelTxt);
		 nextLevel = new component(200, 80, "grey", 250, 150, "rec", "", "", "win", "DandW");
		 _objects.push(nextLevel);
		 WDText = new component("80px", "Consolas", "white", 250, 150, "text", "YOU DIED!", "center", "", "DandW");
		 _objects.push(WDText);
		 end = new component(500, 300, "black", 0, 0, "rec", "", "", "", "DandW");
	     _objects.push(end);
		 p1 = new component("20px", "Consolas", "white", 43, 150, "text", "P1", "center", "", "player");
		 _objects.push(p1);
		 ai = new component("20px", "Consolas", "white", 443, 150, "text", "AI", "center", "", "enemy_1");
		 _objects.push(ai);
		 bossAi_1 = new component("20px", "Consolas", "white", 430, 160, "text", "BOSS", "center", "", "boss_1");
		 _objects.push(bossAi_1);
		 circle = new component(10, 10, "blue", 80, canvas.height/2, "cir", 30, "red", 1, "player");
		 _objects.push(circle);
		 aicircle = new component(10, 10, "orange", canvas.width - 80, canvas.height/2, "cir", 30, "white", 1, "enemy_1");
		 _objects.push(aicircle);
		 bossAiCircle = new component(1, 1, "fuchsia", canvas.width - 100, canvas.height/2, "cir", 50, "purple", 1, "boss_1");
         _objects.push(bossAiCircle);
		 ammo = new component(10, 10, "darkorange", Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2), Math.abs(Math.floor(Math.random() * canvas.height - 500)), "cir", 10, "", 0, "ammo");
		 _objects.push(ammo);
		 wall = new component(20, 300, "black", -10, 0, "rec", "", "", "", "all");
		 _objects.push(wall);
		 wall2 = new component(20, 300, "black", 490, 0, "rec", "", "", "", "all");
		 _objects.push(wall2);
		 wall3 = new component(500, 20, "black", 0, -10, "rec", "", "", "", "all");
		 _objects.push(wall3);
		 wall4 = new component(500, 20, "black", 0, canvas.height - 10, "rec", "", "", "", "all");
		 _objects.push(wall4);
		 bulletcase = new component(1, 1, "gray", circle.x, circle.y, "cir", 10, "white", 1, "bullet");
         _objects.push(bulletcase);
		 difficaulty_Text = new component("15px", "Arial", "white", canvas.width/2, 30, "text", "Difficaulty:", "center", "", "ui");
		 difficaulty_Text.globalAlpha = 0.5;
		 _objects.push(difficaulty_Text);
		 settings_menu_icon = new component(50, 50, "settings_icon", canvas.width - 70, 20, "img", "", "", "", "ui");
		 settings_menu_icon.globalAlpha = 0.5;
		 _objects.push(settings_menu_icon);
		 time_Text = new component("20px", "Arial", "white", canvas.width - 20, canvas.height - 20, "text", "Time:", "end", "timer", "ui");
		 time_Text.globalAlpha = 0.5;
		 _objects.push(time_Text);
		 canvas_size = new component("15px", "Arial", "white", 20, 30, "text", "Canvas Size:", "start", "", "debug");
		 _objects.push(canvas_size);
		 key_Pressed_Text = new component("15px", "Arial", "white", 20, 50, "text", "Key Pressed:", "start", "", "debug");
		 _objects.push(key_Pressed_Text);
		 cursor_Position_Text = new component("15px", "Arial", "white", 20, 70, "text", "Cursor Position:", "start", "", "debug");
		 _objects.push(cursor_Position_Text);
		 button_Pressed_Text = new component("15px", "Arial", "white", 20, 90, "text", "Pressed:", "start", "", "debug");
		 _objects.push(button_Pressed_Text);
		 mouse_Button_Text = new component("15px", "Arial", "white", 20, 110, "text", "Mouse Button:", "start", "", "debug");
		 _objects.push(mouse_Button_Text);
		 on_Mobile_Text = new component("15px", "Arial", "white", 20, 130, "text", "On Mobile:", "start", "", "debug");
		 _objects.push(on_Mobile_Text);
		 timer_seconds_Text = new component("15px", "Arial", "white", 20, 150, "text", "Timer Seconds:", "start", "timer", "debug");
		 _objects.push(timer_seconds_Text);
		 background = new component(canvas.width, canvas.height, "backgroundLevel_1", 0, 0, "img", "", "", "", "background");
		 _objects.push(background);
		 isLoaded = true;
		 Board.start();
		 updateGameArea();
	}

var CursorHideTime = 0.5;
function cursorController(visibilityYN) {
this.visibilityYN = visibilityYN;
if (this.visibilityYN == "hide") {
if (cursor.globalAlpha > 0) {
cursor.globalAlpha -= 0.1;
}
if (cursor.globalAlpha <= 0) {
cursor.globalAlpha = 0;
}
}
if (this.visibilityYN == "fullHide") {
cursor.globalAlpha = 0;
}
if (this.visibilityYN == "fullShow") {
cursor.globalAlpha = 1;
}
if (this.visibilityYN == "show") {
if (cursor.globalAlpha < 1) {
cursor.globalAlpha += 0.1;
}
if (cursor.globalAlpha >= 1) {
cursor.globalAlpha = 1;
}
}
}

function backgroundManager(level_number) {
this.level_number = level_number;
if (this.level_number == 1) {
background.color = "backgroundLevel_1";
circle.color = "blue";
}
if (this.level_number == 2) {
background.color = "backgroundLevel_Boss";
circle.color = "navy";
difficaulty = 1;
}
if (this.level_number == 3) {
background.color = "backgroundLevel_2";
circle.color = "blue";
}
if (this.level_number == 4) {
background.color = "backgroundLevel_Boss_2";
circle.color = "navy";
difficaulty = 1;
}
}


function joystick() {
var joystickDiv = document.getElementById("joystick");
if (onMobile == true) {
joystickDiv.style.display = "inline";
managerjs.on('0:start', function(evt, data) {
	managerjs.on('dir:up', function(evt, data) {
		moveUp();
	}).on('dir:down', function(evt, data) {
		moveDown();
	}).on('dir:left', function(evt, data) {
		moveLeft();
	}).on('dir:right', function(evt, data) {
		moveRight();
	});
  });
}
 managerjs.on('0:end dir', function(evt, data) {
		clearmoveu();
	}).on('0:end dir', function(evt, data) {
		clearmoved();
	}).on('0:end dir', function(evt, data) {
		clearmovel();
	}).on('0:end dir', function(evt, data) {
		clearmover();
	});
if (onMobile == false || won == 1 || dead == 1 || settingsMenuShow == true) {
joystickDiv.style.display = "none";
}
}

function menuManager() {
if (cursor.crashWith(restart) == true) {
if (won == 1 || dead == 1) {
restart.color = "lightgrey";
if (pressed == true) {
resetGame("level");
}
}
}
if (cursor.crashWith(restart) == false) {
restart.color = "grey";
}
if (cursor.crashWith(nextLevel) == true) {
if (won == 1) {
nextLevel.color = "lightgrey";
if (pressed == true) {
nxtlvl(difficaulty);
}
}
}
if (cursor.crashWith(nextLevel) == false) {
nextLevel.color = "grey";
}
if (cursor.crashWith(settings_menu_icon) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == false) {
if (settings_menu_icon.globalAlpha < 1) {
settings_menu_icon.globalAlpha += 0.1;
}
if (settings_menu_icon.globalAlpha >= 1) {
settings_menu_icon.globalAlpha = 1;
}
if (pressed == true) {
settingsMenuShow = true;
}
}
}
}
if (cursor.crashWith(settings_menu_icon) == false) {
if (settings_menu_icon.globalAlpha > 0.5) {
settings_menu_icon.globalAlpha -= 0.1;
}
if (settings_menu_icon.globalAlpha <= 0.5) {
settings_menu_icon.globalAlpha = 0.5;
}
}
if (cursor.crashWith(backBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
backBttnS.color = "lightgrey";
if (pressed == true) {
settingsMenuShow = false;
}
}
}
}
if (cursor.crashWith(backBttnS) == false) {
backBttnS.color = "grey";
}
if (cursor.crashWith(debugBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (debug == 0) {
debugBttnS.color = "red";
}
if (debug == 1) {
debugBttnS.color = "green";
}
if (pressed == true && DebugLock == false) {
debug++;
DebugLock = true;
}
}
}
}
if (pressed == false) {
DebugLock = false;
mobileLock = false;
timerLock = false;
}
if (debug >= 2) {
debug = 0;
}
if (cursor.crashWith(debugBttnS) == false) {
if (debug == 0) {
debugBttnS.color = "darkred";
}
if (debug == 1) {
debugBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(mobileBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (_mobile == 0) {
mobileBttnS.color = "red";
}
if (_mobile == 1) {
mobileBttnS.color = "green";
}
if (pressed == true && mobileLock == false) {
_mobile++;
mobileLock = true;
}
}
}
}
if (_mobile >= 2) {
_mobile = 0;
}
if (_mobile == 0) {
onMobile = false;
}
if (_mobile == 1) {
onMobile = true;
}
if (cursor.crashWith(mobileBttnS) == false) {
if (_mobile == 0) {
mobileBttnS.color = "darkred";
}
if (_mobile == 1) {
mobileBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(timerBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (_timer == 0) {
timerBttnS.color = "red";
}
if (_timer == 1) {
timerBttnS.color = "green";
}
if (pressed == true && timerLock == false) {
_timer++;
timerLock = true;
}
}
}
}
if (_timer >= 2) {
_timer = 0;
}
if (_timer == 0) {
timeMode = false;
}
if (_timer == 1) {
timeMode = true;
}
if (cursor.crashWith(timerBttnS) == false) {
if (_timer == 0) {
timerBttnS.color = "darkred";
}
if (_timer == 1) {
timerBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(easyBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (difficaulty != 0) {
easyBttnS.color = "red";
}
if (difficaulty == 0) {
easyBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 0;
}
}
}
}
if (cursor.crashWith(easyBttnS) == false) {
if (difficaulty != 0) {
easyBttnS.color = "darkred";
}
if (difficaulty == 0) {
easyBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(normalBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (difficaulty != 1) {
normalBttnS.color = "red";
}
if (difficaulty == 1) {
normalBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 1;
}
}
}
}
if (cursor.crashWith(normalBttnS) == false) {
if (difficaulty != 1) {
normalBttnS.color = "darkred";
}
if (difficaulty == 1) {
normalBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(hardBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (difficaulty != 2) {
hardBttnS.color = "red";
}
if (difficaulty == 2) {
hardBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 2;
}
}
}
}
if (cursor.crashWith(hardBttnS) == false) {
if (difficaulty != 2) {
hardBttnS.color = "darkred";
}
if (difficaulty == 2) {
hardBttnS.color = "darkgreen";
}
}
if (cursor.crashWith(impBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
if (difficaulty != 3) {
impBttnS.color = "red";
}
if (difficaulty == 3) {
impBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 3;
}
}
}
}
if (cursor.crashWith(impBttnS) == false) {
if (difficaulty != 3) {
impBttnS.color = "darkred";
}
if (difficaulty == 3) {
impBttnS.color = "darkgreen";
}
}

if (cursor.crashWith(hardResetBttnS) == true) {
if (won == 0 || dead == 0) {
if (settingsMenuShow == true) {
hardResetBttnS.color = "lightgrey";
if (pressed == true) {
resetGame("game");
}
}
}
}
if (cursor.crashWith(hardResetBttnS) == false) {
hardResetBttnS.color = "grey";
}
}
	
window.addEventListener("mousemove", function(event) {
if (isLoaded == true) {
cursor.x = event.clientX - cursor.width/2;
cursor.y = event.clientY - cursor.height/2;
cursorController("show");
}
clearTimeout(timeout);
var timeout = setTimeout(function(){
if (isLoaded == true) {
cursorController("hide");
}
}, CursorHideTime * 1000);
});

window.addEventListener("touchstart", function(event) {
pressed = true;
if (isLoaded == true) {
cursor.x = event.touches[0].clientX - cursor.width/2;
cursor.y = event.touches[0].clientY - cursor.height/2;
cursorController("fullShow");
}
var timeout = setTimeout(function(){
if (isLoaded == true) {
cursorController("fullHide");
}
}, CursorHideTime * 1000);
});

window.addEventListener("touchend", function(event) {
pressed = false;
});

window.addEventListener("touchmove", function(event) {
if (isLoaded == true) {
cursor.x = event.touches[0].clientX - cursor.width/2;
cursor.y = event.touches[0].clientY - cursor.height/2;
cursorController("show");
}
clearTimeout(timeout);
var timeout = setTimeout(function(){
if (isLoaded == true) {
cursorController("hide");
}
}, CursorHideTime * 1000);
});

document.onmousedown = function(event){
mouse_button = event.button;
if (event.button == 0) {
pressed = true;
if (isLoaded == true) {
cursorController("fullShow");
}
var timeout = setTimeout(function(){
if (isLoaded == true) {
cursorController("fullHide");
}
}, CursorHideTime * 1000);
}
}
document.addEventListener("contextmenu", function(e){
      e.preventDefault();
}, false);
document.onmouseup = function(event){
mouse_button = event.button;
if (event.button == 0) {
pressed = false;
}
}

var Board = {
start : function() {
this.context = canvas.getContext("2d");
this.interval = setInterval(updateGameArea, 10);
		document.addEventListener("keydown",keyDownHandler, false);	
		document.addEventListener("keyup",keyUpHandler, false);
},
stop : function() {
        clearInterval(this.interval);
},
clear : function() {
this.context.clearRect(0, 0, canvas.width, canvas.height);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
background.width = canvas.width;
background.height = canvas.height;
wall4.y = canvas.height - 10;
wall2.x = canvas.width - 10;
wall.height = canvas.height;
wall2.height = canvas.height;
wall3.width = canvas.width;
wall4.width = canvas.width;
end.width = canvas.width;
end.height = canvas.height;
settingsMenu.width = canvas.width;
settingsMenu.height = canvas.height;
WDText.x = canvas.width/2;
WDText.y = canvas.height/2;
restartTxt.x = restart.x + restart.width/2;
restartTxt.y = restart.y + restart.height/2 + 20;
restart.x = canvas.width/2 - restart.width/2;
nextLevelTxt.x = nextLevel.x + nextLevel.width/2;
nextLevelTxt.y = nextLevel.y + nextLevel.height/2 + 20;
nextLevel.x = canvas.width/2 - nextLevel.width/2;
nextLevel.y = canvas.height/2 + 50;
settings_menu_icon.x = canvas.width - 70;
settings_menu_icon.y = 20;
backBttnS.x = canvas.width/2 - backBttnS.width/2;
backBttnS.y = canvas.height - backBttnS.height;
backBttnSTxt.x = canvas.width/2;
backBttnSTxt.y = canvas.height - 20;
debugBttnS.x = canvas.width/2 - debugBttnS.width/2;
debugBttnS.y = canvas.height - (100 + debugBttnS.height);
debugBttnSTxt.x = canvas.width/2;
debugBttnSTxt.y = canvas.height - 120;
mobileBttnS.x = canvas.width/2 - mobileBttnS.width/2;
mobileBttnS.y = canvas.height - (200 + mobileBttnS.height);
mobileBttnSTxt.x = canvas.width/2;
mobileBttnSTxt.y = canvas.height - 220;
timerBttnS.x = canvas.width/2 - timerBttnS.width/2;
timerBttnS.y = canvas.height - (300 + timerBttnS.height);
timerBttnSTxt.x = canvas.width/2;
timerBttnSTxt.y = canvas.height - 320;
impBttnSTxt.x = canvas.width/2 + 300;
impBttnSTxt.y = canvas.height-430;
impBttnS.x = canvas.width/2+200;
impBttnS.y = canvas.height-480;
hardBttnSTxt.x = canvas.width/2 + 100;
hardBttnSTxt.y = canvas.height-430;
hardBttnS.x = canvas.width/2;
hardBttnS.y = canvas.height-480;
normalBttnSTxt.x = canvas.width/2 - 100;
normalBttnSTxt.y = canvas.height-430;
normalBttnS.x = canvas.width/2-200;
normalBttnS.y = canvas.height-480;
easyBttnSTxt.x = canvas.width/2 - 300;
easyBttnSTxt.y = canvas.height-430;
easyBttnS.x = canvas.width/2-400;
easyBttnS.y = canvas.height-480;
hardResetBttnSTxt.x = canvas.width/2;
hardResetBttnSTxt.y = canvas.height-530;
hardResetBttnS.x = canvas.width/2-hardResetBttnS.width/2;
hardResetBttnS.y = canvas.height-580;
settingsMenuTxt.x = canvas.width/2;
time_Text.x = canvas.width - 20;
time_Text.y = canvas.height - 20;
time_Text.radius = "Time: " + seconds;
optionsjs = {
	   zone: document.getElementById("joystick"),
	   mode: 'static',
	   color: 'purple',
	   identifier: 0,
	   threshold: 0.2,
	   size: 100,
	   restOpacity: 1,
	   position: {
        x: 100,
        y: canvas.height - 100
    },
};
if (joystickCreated == false) {
managerjs = nipplejs.create(optionsjs);
joystickCreated = true;
}
if (dead == 1) {
restart.y = canvas.height/2 + 50;
WDText.radius = "YOU DIED!";
}
if (won == 1) {
restart.y = canvas.height/2 + 150;
WDText.radius = "YOU WON!";
}
difficaulty_Text.x = canvas.width/2;
if (difficaulty == 0) {
difficaulty_Text.radius = "Difficaulty: EASY"
}
if (difficaulty == 1) {
difficaulty_Text.radius = "Difficaulty: NORMAL"
}
if (difficaulty == 2) {
difficaulty_Text.radius = "Difficaulty: HARD"
}
if (difficaulty == 3) {
difficaulty_Text.radius = "Difficaulty: IMPOSSIBLE"
}
if (ammo.x < 300) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2)
}
if (ammo.x > canvas.width - 50) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2)
}
if (ammo.y < 50) {
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));
}
if (ammo.y > canvas.height - 50) {
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));
}
for(var i = _objects.length - 1; i >= 0; i--) {
if (_objects[i].level == "player" || _objects[i].level == "enemy_1") {
if (_objects[i].x < 10) {
_objects[i].x = _objects[i].radius + 50;
}
if (_objects[i].x > canvas.width - 10) {
_objects[i].x = _objects[i].radius + canvas.width - 50;
}
if (_objects[i].y < 10) {
_objects[i].y = _objects[i].radius + 50;
}
if (_objects[i].y > canvas.height - 10) {
_objects[i].y = _objects[i].radius + canvas.height - 50;
}
 }
}
if (debug == 1) {
if (silentDebug == false) {
console.log("Canvas Width: " + canvas.width + " Canvas Height: " + canvas.height);
console.log("Cursor X: " + cursor.x + " Cursor Y: " + cursor.y);
console.log("Pressed: " + pressed);
console.log("Mouse Button: " + mouse_button);
console.log("On Mobile: " + onMobile);
if (timeMode == true) {
console.log("Timer Seconds: " + seconds);
}
}
canvas_size.radius = "Canvas Width: " + canvas.width + " Canvas Height: " + canvas.height;
cursor_Position_Text.radius = "Cursor X: " + cursor.x + " Cursor Y: " + cursor.y;
button_Pressed_Text.radius = "Pressed: " + pressed;
mouse_Button_Text.radius = "Mouse Button: " + mouse_button;
on_Mobile_Text.radius = "On Mobile: " + onMobile;
if (timeMode == true) {
timer_seconds_Text.radius = "Timer Seconds: " + seconds;	
}
}
},
}

function component(width, height, color ,x ,y, type, radius, outcolor, thickness, level) {
	this.type = type;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.oldX = x;
	this.oldY = y;
	this.color = color;
	this.width = width;
	this.height = height;
	this.level = level;
	this.globalAlpha = 1;
	this.thickness = thickness;
	this.outcolor = outcolor;
	this.radius = radius;
	this.update = function() {
		ctx = Board.context;
		if (this.type == "text") {
		  this.text = this.radius;
		  ctx.globalAlpha = this.globalAlpha;
		  ctx.font = this.width + " " + this.height;
		  ctx.fillStyle = this.color;
		  ctx.textAlign = this.outcolor;
		  ctx.fillText(this.text, this.x, this.y);
		} else {
		if (type == "rec") {
		ctx.globalAlpha = this.globalAlpha;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);        
		  } else {
		  if (type == "cir") {
		ctx.beginPath();
		ctx.globalAlpha = this.globalAlpha;
	    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
	    ctx.fillStyle = this.color;
	    ctx.fill();
	    ctx.lineWidth = this.thickness;
	    ctx.strokeStyle = this.outcolor;
	    ctx.stroke();
		 } else {
		 if (this.type == "img") {
		 ctx.globalAlpha = this.globalAlpha;
		 var img = document.getElementById(this.color);
		 ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		}
	   }
	  }
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;		
	}
	this.crashWith = function(otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) ||
			   (mytop > otherbottom) ||
			   (myright < otherleft) ||
			   (myleft > otherright)) {
			crash = false;
	   }
	   return crash;
	}
//this mustbe a circle//
this.mixCrashWith = function(otherobj) {
var distance_x = Math.abs(this.x - otherobj.x-otherobj.width/2);
var distance_y = Math.abs(this.y - otherobj.y-otherobj.height/2);
var crash = true;
if (distance_x > (otherobj.width/2 + this.radius) || distance_y > (otherobj.height/2 + this.radius)) {
crash = false; 
}
if (distance_x <= (otherobj.width/2) && distance_y <= (otherobj.height/2)) {
crash = true;
} 
var dx=distance_x-otherobj.width/2;
var dy=distance_y-otherobj.height/2;
if (dx*dx+dy*dy<=(this.radius*this.radius)) {
crash = true;
}
 return crash;
}
//only circles//
this.circleCrashWith = function(otherobj) {
var distance_x = this.x - otherobj.x;
var distance_y = this.y - otherobj.y;
var rSum = this.radius + otherobj.radius;
if (distance_x * distance_x + distance_y * distance_y <= rSum * rSum) { 
return true;
} else {
return false;
  }
 }
}

var seconds = 0;
var timerInterval;
var startTimer = false;
function timer(state) {
this.state = state;
if (this.state == "start" && startTimer == false) {
timerInterval = setInterval(function() {
	seconds++;
},1000);
startTimer = true;
}
if (this.state == "stop") {
clearInterval(timerInterval);
//save time here//
seconds = 0;
startTimer = false;
}
}

function updateGameArea() {
	Board.clear();
	p1.x = circle.x;
	p1.y = circle.y;
	ai.x = aicircle.x;
	ai.y = aicircle.y;
	bossAi_1.x = bossAiCircle.x;
	bossAi_1.y = bossAiCircle.y;
	difficaultyScale(difficaulty);
	backgroundManager(level);
	menuManager();
	for(var i = _objects.length - 1; i >= 0; i--) {
	if (_objects[i].level == "background") {
	_objects[i].update();
	}
	if (_objects[i].level == "all" && dead == 0 && won == 0) {
	_objects[i].update();
	}
	if (_objects[i].level == "ammo" && dead == 0 && won == 0) {
	_objects[i].update();
	}
	if (_objects[i].level == "bullet" && firef >= 1) {
	_objects[i].update();
	if (settingsMenuShow == false) {
	_objects[i].newPos();
	}
	}
	if (_objects[i].level == "bullet" && firef <= 0) {
	_objects[i].x = circle.x;
	_objects[i].y = circle.y;
	}
	if (_objects[i].level == "player" && dead == 0 && won == 0) {
	_objects[i].update();
	if (firef == 0 && settingsMenuShow == false) {
	_objects[i].newPos();
	}
	}
	if (_objects[i].level == "enemy_1" && level == 1 && dead == 0 && won == 0) {
	_objects[i].update();
	if (firef == 0 && settingsMenuShow == false) {
	_objects[i].newPos();
	}
	}
	if (_objects[i].level == "boss_1" && level == 2 && dead == 0 && won == 0) {
	_objects[i].update();
	if (firef == 0 && settingsMenuShow == false) {
	_objects[i].newPos();
	}
	}
	if (_objects[i].level === "DandW" && _objects[i].thickness == "") {
	if (dead == 1 || won == 1) {
	_objects[i].update();
	}
	}
	if (_objects[i].level === "DandW" && _objects[i].thickness == "win") {
	if (dead == 1 || won == 1) {
	_objects[i].update();
	}
	}
	if (_objects[i].level == "ui") {
	if (_objects[i].thickness == "") {
	_objects[i].update();
	}
	if (_objects[i].thickness == "timer" && timeMode == true) {
	_objects[i].update();
	}
	}
	if (_objects[i].level == "settingsM" && settingsMenuShow == true) {
	_objects[i].update();
	}
	if (_objects[i].level == "cursor") {
	_objects[i].update();
	}
	if (_objects[i].level == "debug" && debug == 1) {
	if (_objects[i].thickness == "") {
	_objects[i].update();
	}
	if (_objects[i].thickness == "timer" && timeMode == true) {
	_objects[i].update();
	}
	}
	}
	joystick();
	if (up == 0 && down == 0 && left == 0 && right == 0) {
	clearcircleai();
	}
	if (firef >= 1) {
	bulletai();
	}
	if (circle.circleCrashWith(ammo) && won == 0) {
    firef = 1;
    }
	if (circle.mixCrashWith(wall)) {
	   lockLeft = 1;
	   circle.speedX = circleBounceSpeed;
		}
	if (circle.mixCrashWith(wall2)) {
	   lockRight = 1;
	   circle.speedX = -circleBounceSpeed;
		}
	if (circle.mixCrashWith(wall3)) {
	   lockUp = 1;
	   circle.speedY = circleBounceSpeed;
		}
	if (circle.mixCrashWith(wall4)) {
	   lockDown = 1;
	   circle.speedY = -circleBounceSpeed;
		}
	if (level == 1) {
	if (aicircle.mixCrashWith(wall)) {
	   aicircle.speedX = aiCircleBounceSpeed;
		}
	if (aicircle.mixCrashWith(wall2)) {
	   aicircle.speedX = -aiCircleBounceSpeed;
		}
	if (aicircle.mixCrashWith(wall3)) {
	   aicircle.speedY = aiCircleBounceSpeed;
		}
	if (aicircle.mixCrashWith(wall4)) {
	   aicircle.speedY = -aiCircleBounceSpeed;
		}
	if (circle.circleCrashWith(aicircle)) {
	    dead = 1;
		}
	}
	if (level == 2) {
	if (bossAiCircle.mixCrashWith(wall)) {
	   bossAiCircle.speedX = aiCircleBounceSpeed;
		}
	if (bossAiCircle.mixCrashWith(wall2)) {
	   bossAiCircle.speedX = -aiCircleBounceSpeed;
		}
	if (bossAiCircle.mixCrashWith(wall3)) {
	   bossAiCircle.speedY = aiCircleBounceSpeed;
		}
	if (bossAiCircle.mixCrashWith(wall4)) {
	   bossAiCircle.speedY = -aiCircleBounceSpeed;
		}
	if (circle.circleCrashWith(bossAiCircle)) {
	    dead = 1;
		}
	}
	if (difficaulty == 0) {
	if (lockUp == 1 || lockDown == 1 || lockLeft == 1 || lockRight == 1) {
	clearcircleai();
	    }
	}
}

var aiCircleSpeed = 3;	
function aicircleai() {
if (level == 1) {
 if (circle.x < aicircle.x){
 aicircle.speedX = -aiCircleSpeed;
 } 
 if (circle.x > aicircle.x){
 aicircle.speedX = aiCircleSpeed;
 }
 if (circle.y < aicircle.y){
 aicircle.speedY = -aiCircleSpeed;
 } 
 if (circle.y > aicircle.y){
 aicircle.speedY = aiCircleSpeed;
 }
}
if (level == 2) {
 if (circle.x < bossAiCircle.x){
 bossAiCircle.speedX = -aiCircleSpeed;
 } 
 if (circle.x > bossAiCircle.x){
 bossAiCircle.speedX = aiCircleSpeed;
 }
 if (circle.y < bossAiCircle.y){
 bossAiCircle.speedY = -aiCircleSpeed;
 } 
 if (circle.y > bossAiCircle.y){
 bossAiCircle.speedY = aiCircleSpeed;
 }
}
}

function clearcircleai() {
if (level == 1) {
aicircle.speedX = 0;
aicircle.speedY = 0;
}
if (level == 2) {
bossAiCircle.speedX = 0;
bossAiCircle.speedY = 0;
}
}

var bulletSpeed = 3;
function bulletai() {
if (level == 1) {
 if (bulletcase.x > aicircle.x){
 bulletcase.speedX = -bulletSpeed;
 } 
 if (bulletcase.x < aicircle.x){

 bulletcase.speedX = bulletSpeed;
 }
 if (bulletcase.y > aicircle.y){
 bulletcase.speedY = -bulletSpeed;
 } 
 if (bulletcase.y < aicircle.y){
 bulletcase.speedY = bulletSpeed;
 }
 if (bulletcase.circleCrashWith(aicircle)) {
 won = 1;
 firef = 0;
 }
}
if (level == 2) {
 if (bulletcase.x > bossAiCircle.x){
 bulletcase.speedX = -bulletSpeed;
 } 
 if (bulletcase.x < bossAiCircle.x){

 bulletcase.speedX = bulletSpeed;
 }
 if (bulletcase.y > bossAiCircle.y){
 bulletcase.speedY = -bulletSpeed;
 } 
 if (bulletcase.y < bossAiCircle.y){
 bulletcase.speedY = bulletSpeed;
 }
 if (bulletcase.circleCrashWith(bossAiCircle)) {
 won = 1;
 firef = 0;
 }
}
}

var upKey = "w";
var leftKey = "a";
var rightKey = "d";
var downKey = "s";
var spaceKey = "Space";
function keyDownHandler(event)
{
    var str = event.key;
	var str2 = event.code;
	var keyPressed = str.toLowerCase();
	if (debug == 1) {
	if (silentDebug == false) {
	console.log(event.key);
	console.log(event.code);
	}
	key_Pressed_Text.radius = "Key Pressed: " + event.key + " / " + event.code;
	}

	if (keyPressed == upKey)
	{		
            moveUp();
			event.preventDefault();
	}
	else if (keyPressed == downKey)
	{	
            moveDown();	
			event.preventDefault();
	}
	else if (keyPressed == leftKey)
	{	
            moveLeft();	
			event.preventDefault();
	}
	else if (keyPressed == rightKey)
	{	
            moveRight();
	}
	if (str2 == spaceKey)
	{	
        if (won == 1 || dead == 1) {
            resetGame("level");
		}
	}
}

function keyUpHandler(event)
{
	var str = event.key;
	var keyPressed = str.toLowerCase();
	
	if (keyPressed == upKey)
	{		
		clearmoveu()
	}
	else if (keyPressed == downKey)
	{	
		clearmoved()
	}
	else if (keyPressed == leftKey)
	{	
		clearmovel()		
	}
	else if (keyPressed == rightKey)
	{	
		clearmover()	
	}
}

function resetGame(ResetLevel) {
this.ResetLevel = ResetLevel;
//reset (enemy, player, ammo) positions here//
circle.x = 80;
circle.y = canvas.height/2;
aicircle.x = canvas.width - 80;
aicircle.y = canvas.height/2;
bossAiCircle.x = canvas.width - 100;
bossAiCircle.y = canvas.height/2;
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2)
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height - 500));
if (this.ResetLevel == "level") {
won = 0;
dead = 0;
firef = 0;
lockUp = 0;
lockDown = 0;
lockLeft = 0;
lockRight = 0;
}
if (this.ResetLevel == "game") {
won = 0;
dead = 0;
firef = 0;
level = 1;
lockUp = 0;
lockDown = 0;
lockLeft = 0;
lockRight = 0;
settingsMenuShow = false;
timer("stop");
}
}

var circleSpeed = 2.5;	
var up = 0;
var down = 0;
var left = 0;
var right = 0;
function moveUp() {
	timer("start");
    if (lockUp == 0) {
	circle.speedY = -circleSpeed;
	up = 1;
	if (difficaulty != 3) {
	aicircleai();
	}
	}
	if (difficaulty == 3) {
	aicircleai();
	}
}
function moveDown() {
	timer("start");
    if (lockDown == 0) {
	circle.speedY = circleSpeed;
	down = 1;
	if (difficaulty != 3) {
	aicircleai();
	}
	}
	if (difficaulty == 3) {
	aicircleai();
	}
}
function moveLeft() {
	timer("start");
    if (lockLeft == 0) {
	circle.speedX = -circleSpeed;
	left = 1;
	if (difficaulty != 3) {
	aicircleai();
	}
	}
	if (difficaulty == 3) {
	aicircleai();
	}
}
function moveRight() {
	timer("start");
    if (lockRight == 0) {
	circle.speedX = circleSpeed;
	right = 1;
	if (difficaulty != 3) {
	aicircleai();
	}
	}
	if (difficaulty == 3) {
	aicircleai();
	}
}

var nextLevelLatch = 0;
function nxtlvl(difficaultyS) {
this.difficaultyS = difficaultyS;
nextLevelLatch = 0;
if (won == 1 && nextLevelLatch == 0) {
if (level != 2 && level != 4) {
if (difficaultyS != 3) {
level = (level + 2);
resetGame("level");
nextLevelLatch = 1;
}
}
//levels go here//
if (difficaultyS == 3 || level == 2 || level == 4) {
level = (level + 1);
resetGame("level");
nextLevelLatch = 1;
}
}
}

function difficaultyScale(difficaultyS) {
this.difficaultyS = difficaultyS;
if (this.difficaultyS == 0) {
if (level == 1) {
aiCircleSpeed = 2.5;
circleSpeed = 2.5;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
}
}
if (this.difficaultyS == 1) {
if (level == 1) {
aiCircleSpeed = 3;
circleSpeed = 2.5;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
}
if (level == 2) {
aiCircleSpeed = 6;
circleSpeed = 3;
aiCircleBounceSpeed = 3;
circleBounceSpeed = 1;
}
}
if (this.difficaultyS == 2) {
if (level == 1) {
aiCircleSpeed = 4;
circleSpeed = 2;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
}
}
if (this.difficaultyS == 3) {
if (level == 1) {
aiCircleSpeed = 6;
circleSpeed = 1.5;
aiCircleBounceSpeed = 3;
circleBounceSpeed = 1;
}
}
}
	
function easy() {
if (won == 0) {
    difficaulty = 0;
	}
}
		
function normal() {
if (won == 0) {
    difficaulty = 1;
	}
}
		
function hard() {
if (won == 0) {
    difficaulty = 2;
	}
}
		
function imp() {
if (won == 0) {
    difficaulty = 3;
	}
}
		
function clearmoveu() { 
    clearLocks();
	circle.speedY = 0;
	if (level == 1) {
	aicircle.speedY = 0;
	}
	if (level == 2) {
	bossAiCircle.speedY = 0;
	}
	up = 0;
}	
function clearmoved() {
    clearLocks();
	circle.speedY = 0; 
	if (level == 1) {
	aicircle.speedY = 0;
	}
	if (level == 2) {
	bossAiCircle.speedY = 0;
	}
	down = 0;
}	
function clearmovel() {
    clearLocks();
	circle.speedX = 0; 
	if (level == 1) {
	aicircle.speedX = 0;
	}
	if (level == 2) {
	bossAiCircle.speedX = 0;
	}
	left = 0;
}	
function clearmover() {
    clearLocks();
	circle.speedX = 0;
    if (level == 1) {
	aicircle.speedX = 0;
	}	
	if (level == 2) {
	bossAiCircle.speedX = 0;
	}
	right = 0;
}

function clearLocks() {
lockUp = 0;
lockDown = 0;
lockLeft = 0;
lockRight = 0;
}
