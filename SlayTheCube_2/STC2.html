var MOD_MENU_SHOW = false;
var MOD_EXTRA_MENU_SHOW = false;
var MOD_RANDOM_AMMO_POSITION = true;
var MOD_PLAYER_LOCKED_SET_POSITION = true;
var MOD_LOAD_DIFFICAULTY = true;
var won = 0;
var dead = 0;
var firef = 0;
var level = 1;
var difficaulty = 1;
var _objects = [];
var _wallObj = [];
var lockUp = 0;
var lockDown = 0;
var lockLeft = 0;
var lockRight = 0;
var aiCircleBounceSpeed = 1;
var circleBounceSpeed = 1;
var settingsMenuShow = false;
var levelPackMenuShow = false;
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
var startLevel = false;
var level_pack = 0;
var game_start = 0;
var fps = {	startTime : 0,	frameNumber : 0,	getFPS : function(){		this.frameNumber++;		var d = new Date().getTime(),			currentTime = ( d - this.startTime ) / 1000,			result = Math.floor( ( this.frameNumber / currentTime ) );		if( currentTime > 1 ){			this.startTime = new Date().getTime();			this.frameNumber = 0;		}		return result;	}	};

	function start() {
	     canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
		 //Load//
		 if (localStorage && 'DEBUG' in localStorage) {
         debug = localStorage.DEBUG;
         }
		 if (localStorage && 'MOBILE' in localStorage) {
         _mobile = localStorage.MOBILE;
         }
		 if (localStorage && 'TIMER' in localStorage) {
         _timer = localStorage.TIMER;
         }
		 if (localStorage && 'DIFFICAULTY' in localStorage) {
         difficaulty = localStorage.DIFFICAULTY;
         }
		 if (localStorage && 'LEVEL_PACK' in localStorage) {
         level_pack = localStorage.LEVEL_PACK;
         }
		 //MOD//
		 if (typeof MOD_LOAD_SAVE_DATA === "function") {
		 MOD_LOAD_SAVE_DATA();
		 }
		 game_start = 1;
		 //Images//
		 //MOD//
		 if (typeof MOD_IMAGES === "function") {
		 MOD_IMAGES();
		 }
		 cursor = new component(30, 30, "cursor_img", -50, -250, "img", "", "", "", "cursor");
		 _objects.push(cursor);
		 //Level Pack Menu//
		 //MOD//
		 if (typeof MOD_LEVEL_PACK_MENU_INITIALIZATION === "function") {
		 MOD_LEVEL_PACK_MENU_INITIALIZATION();
		 }
		 levelPack_2LTxt = new component("30px", "Consolas", "white", canvas.width/2, canvas.height-340, "text", "Level Pack 2", "center", "", "settingsM", "levelpack");
		 _objects.push(levelPack_2LTxt);
		 levelPack_2_highLightBttnL = new component(200, 100, "white", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 levelPack_2_highLightBttnL.globalAlpha = 0.1;
		 _objects.push(levelPack_2_highLightBttnL);
		 levelPack_2BttnL = new component(200, 100, "slaythecube_level_pack", canvas.width/2-100, canvas.height-400, "img", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_2BttnL);
		 levelPack_1LTxt = new component("30px", "Consolas", "white", canvas.width/2, canvas.height-440, "text", "Level Pack 1", "center", "", "settingsM", "levelpack");
		 _objects.push(levelPack_1LTxt);
		 levelPack_1_highLightBttnL = new component(200, 100, "white", canvas.width/2-100, canvas.height-500, "rec", "", "", "", "settingsM", "levelpack");
		 levelPack_1_highLightBttnL.globalAlpha = 0.1;
		 _objects.push(levelPack_1_highLightBttnL);
		 levelPack_1BttnL = new component(200, 100, "backgroundLevel_Boss", canvas.width/2-100, canvas.height-500, "img", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_1BttnL);
		 levelPack_1_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_1_PlaceholderBttnL);
		 levelPack_2_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_2_PlaceholderBttnL);
		 levelPack_3_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_3_PlaceholderBttnL);
		 levelPack_4_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_4_PlaceholderBttnL);
		 levelPack_5_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_5_PlaceholderBttnL);
		 levelPack_6_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_6_PlaceholderBttnL);
		 levelPack_7_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_7_PlaceholderBttnL);
		 levelPack_8_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_8_PlaceholderBttnL);
		 levelPack_9_PlaceholderBttnL = new component(200, 100, "grey", canvas.width/2-100, canvas.height-400, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(levelPack_9_PlaceholderBttnL);
		 backBttnLTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-20, "text", "Back", "center", "", "settingsM", "levelpack");
		 _objects.push(backBttnLTxt);
		 backBttnL = new component(200, 80, "grey", canvas.width/2-100, canvas.height-80, "rec", "", "", "", "settingsM", "levelpack");
		 _objects.push(backBttnL);
		 //Settings//
		 //MOD//
		 if (typeof MOD_SETTINGS_MENU_INITIALIZATION === "function") {
		 MOD_SETTINGS_MENU_INITIALIZATION();
		 }
		 settingsMenuTxt = new component("60px", "Consolas", "white", canvas.width/2, 60, "text", "Settings", "center", "", "settingsM", "all");
		 _objects.push(settingsMenuTxt);
		 levelPackBttnSTxt = new component("30px", "Consolas", "white", canvas.width, canvas.height-30, "text", "Level Packs", "center", "", "settingsM", "settings");
		 _objects.push(levelPackBttnSTxt);
		 levelPackBttnS = new component(200, 80, "grey", canvas.width - 100, canvas.height, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(levelPackBttnS);
		 hardResetBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2, canvas.height-530, "text", "Hard Reset", "center", "", "settingsM", "settings");
		 _objects.push(hardResetBttnSTxt);
		 hardResetBttnS = new component(200, 80, "grey", canvas.width/2 - 100, canvas.height-580, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(hardResetBttnS);
		 impBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 + 300, canvas.height-430, "text", "Impossible", "center", "", "settingsM", "settings");
		 _objects.push(impBttnSTxt);
		 impBttnS = new component(200, 80, "lightgrey", canvas.width/2+200, canvas.height-480, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(impBttnS);
		 hardBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 + 100, canvas.height-430, "text", "Hard", "center", "", "settingsM", "settings");
		 _objects.push(hardBttnSTxt);
		 hardBttnS = new component(200, 80, "grey", canvas.width/2, canvas.height-480, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(hardBttnS);
		 normalBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 - 100, canvas.height-430, "text", "Normal", "center", "", "settingsM", "settings");
		 _objects.push(normalBttnSTxt);
		 normalBttnS = new component(200, 80, "lightgrey", canvas.width/2-200, canvas.height-480, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(normalBttnS);
		 easyBttnSTxt = new component("30px", "Consolas", "white", canvas.width/2 - 300, canvas.height-430, "text", "Easy", "center", "", "settingsM", "settings");
		 _objects.push(easyBttnSTxt);
		 easyBttnS = new component(200, 80, "grey", canvas.width/2-400, canvas.height-480, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(easyBttnS);
		 timerBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-320, "text", "Timer", "center", "", "settingsM", "settings");
		 _objects.push(timerBttnSTxt);
		 timerBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-380, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(timerBttnS);
		 mobileBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-220, "text", "Mobile", "center", "", "settingsM", "settings");
		 _objects.push(mobileBttnSTxt);
		 mobileBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-280, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(mobileBttnS);
		 debugBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-120, "text", "Debug", "center", "", "settingsM", "settings");
		 _objects.push(debugBttnSTxt);
		 debugBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-180, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(debugBttnS);
		 backBttnSTxt = new component("50px", "Consolas", "white", canvas.width/2, canvas.height-20, "text", "Back", "center", "", "settingsM", "settings");
		 _objects.push(backBttnSTxt);
		 backBttnS = new component(200, 80, "grey", canvas.width/2-100, canvas.height-80, "rec", "", "", "", "settingsM", "settings");
		 _objects.push(backBttnS);
		 settingsMenu = new component(500, 300, "black", 0, 0, "rec", "", "", "", "settingsM", "all");
		 _objects.push(settingsMenu);
		 //Death/Win//
		 //MOD//
		 if (typeof MOD_DEATH_WIN_FINISHED_SCREEN_INITIALIZATION === "function") {
		 MOD_DEATH_WIN_FINISHED_SCREEN_INITIALIZATION();
		 }
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
		 //UI//
		 //MOD//
		 if (typeof MOD_UI_INITIALIZATION === "function") {
		 MOD_UI_INITIALIZATION();
		 }
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
		 FPSText = new component("15px", "Arial", "white", 20, 150, "text", "FPS: " + fps.getFPS(), "start", "", "debug");
		 _objects.push(FPSText);
		 timer_seconds_Text = new component("15px", "Arial", "white", 20, 150, "text", "Timer Seconds:", "start", "timer", "debug");
		 _objects.push(timer_seconds_Text);
		 //player text//
		 p1 = new component("20px", "Consolas", "white", 43, 150, "text", "P1", "center", "", "player");
		 _objects.push(p1);
		 //enemy text//
		 //MOD//
		 if (typeof MOD_ENEMY_TEXT_INITIALIZATION === "function") {
		 MOD_ENEMY_TEXT_INITIALIZATION();
		 }
		 LP1_ai = new component("20px", "Consolas", "white", 443, 150, "text", "AI", "center", "", "enemy", "LP1_enemy_1");
		 _objects.push(LP1_ai);
		 ai = new component("20px", "Consolas", "white", 443, 150, "text", "AI", "center", "", "enemy", "enemy_1");
		 _objects.push(ai);
		 ai2 = new component("20px", "Consolas", "white", 443, 150, "text", "AI", "center", "", "enemy", "enemy_2");
		 _objects.push(ai2);
		 bossAi_1 = new component("20px", "Consolas", "white", 430, 160, "text", "BOSS", "center", "", "enemy", "boss_1");
		 _objects.push(bossAi_1);
		 circle = new component(60, 60, "blue", 80, canvas.height/2, "cir", 30, "red", 1, "player");
		 _objects.push(circle);
		 //enemies//
		 //MOD//
		 if (typeof MOD_ENEMY_INITIALIZATION === "function") {
		 MOD_ENEMY_INITIALIZATION();
		 }
		 LP1_aicircle = new component(60, 60, "blue", canvas.width - 80 - 30, canvas.height/2 - 30, "rec", "", "", "", "enemy", "LP1_enemy_1");
		 _objects.push(LP1_aicircle);
		 aicircle = new component(10, 10, "orange", canvas.width - 80, canvas.height/2, "cir", 30, "white", 1, "enemy", "enemy_1");
		 _objects.push(aicircle);
		 aicircle2 = new component(10, 10, "darkyellow", canvas.width - 80, canvas.height/2, "cir", 30, "aqua", 1, "enemy", "enemy_2");
		 _objects.push(aicircle2);
		 bossAiCircle = new component(1, 1, "fuchsia", canvas.width - 100, canvas.height/2, "cir", 50, "purple", 1, "enemy", "boss_1");
         _objects.push(bossAiCircle);
		 ammo = new component(10, 10, "darkorange", Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2), Math.abs(Math.floor(Math.random() * canvas.height - 500)), "cir", 10, "", 0, "ammo");
		 _objects.push(ammo);
		 wall = new component(20, 300, "black", -10, 0, "rec", "", "", "all", "all", "left");
		 _wallObj.push(wall);
		 _objects.push(wall);
		 wall2 = new component(20, 300, "black", canvas.width - 10, 0, "rec", "", "", "all", "all", "right");
		 _wallObj.push(wall2);
		 _objects.push(wall2);
		 wall3 = new component(500, 20, "black", 0, -10, "rec", "", "", "all", "all", "top");
		 _wallObj.push(wall3);
		 _objects.push(wall3);
		 wall4 = new component(500, 20, "black", 0, canvas.height - 10, "rec", "", "", "all", "all", "bottom");
		 _wallObj.push(wall4);
		 _objects.push(wall4);
		 wall5 = new component(10, canvas.height - 400, "grey", Math.floor(Math.random() * canvas.width) + 300, 200, "rec", "", "", "level2", "all", "right");
		 _wallObj.push(wall5);
		 _objects.push(wall5);
		 wall6 = new component(10, canvas.height - 400, "grey", wall5.x + 10, 200, "rec", "", "", "level2", "all", "left");
		 _wallObj.push(wall6);
		 _objects.push(wall6);
		 wall7 = new component(20, 10, "grey", wall5.x, wall5.y, "rec", "", "", "level2", "all", "bottom");
		 _wallObj.push(wall7);
		 _objects.push(wall7);
		 wall8 = new component(20, 10, "grey", wall5.x, wall5.width, "rec", "", "", "level2", "all", "top");
		 _wallObj.push(wall8);
		 _objects.push(wall8);
		 LP1_wall = new component(5, 100, "darkred", canvas.width - 415, 0, "rec", "", "", "LP1_level1", "all", "right");
		 _wallObj.push(LP1_wall);
		 _objects.push(LP1_wall);
		 LP1_wall2 = new component(5, 100, "darkred", LP1_wall.x + 5, 0, "rec", "", "", "LP1_level1", "all", "left");
		 _wallObj.push(LP1_wall2);
		 _objects.push(LP1_wall2);
		 LP1_wall2_1 = new component(6, 5, "darkred", LP1_wall.x + 2.5, LP1_wall.height - 5, "rec", "", "", "LP1_level1", "all", "top");
		 _wallObj.push(LP1_wall2_1);
		 _objects.push(LP1_wall2_1);
		 LP1_wall3 = new component(5, 100, "darkred", canvas.width - 515, 0, "rec", "", "", "LP1_level1", "all", "right");
		 _wallObj.push(LP1_wall3);
		 _objects.push(LP1_wall3);
		 LP1_wall4 = new component(5, 100, "darkred", LP1_wall3.x + 5, 0, "rec", "", "", "LP1_level1", "all", "left");
		 _wallObj.push(LP1_wall4);
		 _objects.push(LP1_wall4);
		 LP1_wall4_1 = new component(6, 5, "darkred", LP1_wall3.x + 2.5, LP1_wall3.height - 5, "rec", "", "", "LP1_level1", "all", "top");
		 _wallObj.push(LP1_wall4_1);
		 _objects.push(LP1_wall4_1);
		 //level objects//
		 //MOD//
		 if (typeof MOD_LEVEL_OBJECTS_INITIALIZATION === "function") {
		 MOD_LEVEL_OBJECTS_INITIALIZATION();
		 }
		 bulletcase = new component(1, 1, "gray", circle.x, circle.y, "cir", 10, "white", 1, "bullet");
         _objects.push(bulletcase);
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


function Mod_Menu_Manager_Update() {
var modMenu = document.getElementById('MOD_MENU');
modMenu.style.backgroundColor = "black";
if (MOD_MENU_SHOW == true) {
modMenu.style.visibility = "visible";
if (modMenu.style.opacity < 1) {
modMenu.style.opacity += 1;
}
if (modMenu.style.opacity > 1) {
modMenu.style.opacity = 1;
}
}
if (MOD_MENU_SHOW == false) {
if (modMenu.style.opacity > 0) {
modMenu.style.opacity -= 1;
}
if (modMenu.style.opacity < 0) {
modMenu.style.opacity = 0;
}
if (modMenu.style.opacity == 0) {
modMenu.style.visibility = "hidden";
}
}
}

function backgroundManager(level_number) {
this.level_number = level_number;
if (typeof MOD_Background_Manager === "function" && typeof MOD_LEVEL_PACK_NUMBER === "number") {
if (level_pack == MOD_LEVEL_PACK_NUMBER) {
MOD_Background_Manager();
}
}
if (level_pack == 0) {
MOD_LOAD_DIFFICAULTY = true;
ammo.color = "orange";
wall.color = "black";
wall2.color = "black";
wall3.color = "black";
wall4.color = "black";
if (this.level_number == 1) {
MOD_RANDOM_AMMO_POSITION == true;
MOD_PLAYER_LOCKED_SET_POSITION = true;
background.color = "backgroundLevel_1";
background.type = "img";
circle.color = "blue";
circle.type = "cir";
}
if (this.level_number == 2) {
background.color = "backgroundLevel_Boss";
background.type = "img";
circle.color = "navy";
circle.type = "cir";
difficaulty = 1;
}
if (this.level_number == 3) {
background.color = "backgroundLevel_2";
background.type = "img";
circle.color = "blue";
circle.type = "cir";
}
if (this.level_number == 4) {
background.color = "backgroundLevel_Boss_2";
background.type = "img";
circle.color = "navy";
circle.type = "cir";
difficaulty = 1;
}
if (this.level_number == 5) {
background.color = "backgroundLevel_3";
background.type = "img";
circle.color = "blue";
circle.type = "cir";
}
}
if (level_pack == 1) {
MOD_LOAD_DIFFICAULTY = false;
background.color = "black";
background.type = "rec";
circle.color = "red";
circle.type = "rec";
ammo.color = "lightblue";
wall.color = "darkred";
wall2.color = "darkred";
wall3.color = "darkred";
wall4.color = "darkred";
difficaulty = 0;
if (this.level_number == 1) {
MOD_RANDOM_AMMO_POSITION == false;
MOD_PLAYER_LOCKED_SET_POSITION = true;
ammo.x = canvas.width - 460;
ammo.y = 55;	
}	
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
//MOD//
if (typeof MOD_General_Menu_Manager === "function") { 
MOD_General_Menu_Manager();
}
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
if (won == 0 && dead == 0) {
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
//Settings Update//
if (_timer >= 2) {
_timer = 0;
}
if (_timer == 0) {
timeMode = false;
}
if (_timer == 1) {
timeMode = true;
}
if (debug >= 2) {
debug = 0;
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
if (settingsMenuShow == true && levelPackMenuShow == false && MOD_EXTRA_MENU_SHOW == false && MOD_MENU_SHOW == false) {
if (cursor.crashWith(backBttnS) == true) {
if (won == 0 || dead == 0) {
backBttnS.color = "lightgrey";
if (pressed == true) {
settingsMenuShow = false;
}
}
}
if (cursor.crashWith(backBttnS) == false) {
backBttnS.color = "grey";
}
if (cursor.crashWith(debugBttnS) == true) {
if (won == 0 || dead == 0) {
if (debug == 0) {
debugBttnS.color = "red";
}
if (debug == 1) {
debugBttnS.color = "green";
}
if (pressed == true && DebugLock == false) {
debug++;
DebugLock = true;
localStorage && (localStorage.DEBUG = debug);
}
}
}
if (pressed == false) {
DebugLock = false;
mobileLock = false;
timerLock = false;
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
if (_mobile == 0) {
mobileBttnS.color = "red";
}
if (_mobile == 1) {
mobileBttnS.color = "green";
}
if (pressed == true && mobileLock == false) {
_mobile++;
mobileLock = true;
localStorage && (localStorage.MOBILE = _mobile);
}
}
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
if (_timer == 0) {
timerBttnS.color = "red";
}
if (_timer == 1) {
timerBttnS.color = "green";
}
if (pressed == true && timerLock == false) {
_timer++;
timerLock = true;
localStorage && (localStorage.TIMER = _timer);
}
}
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
if (difficaulty != 0) {
easyBttnS.color = "red";
}
if (difficaulty == 0) {
easyBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 0;
localStorage && (localStorage.DIFFICAULTY = difficaulty);
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
if (difficaulty != 1) {
normalBttnS.color = "red";
}
if (difficaulty == 1) {
normalBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 1;
localStorage && (localStorage.DIFFICAULTY = difficaulty);
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
if (difficaulty != 2) {
hardBttnS.color = "red";
}
if (difficaulty == 2) {
hardBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 2;
localStorage && (localStorage.DIFFICAULTY = difficaulty);
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
if (difficaulty != 3) {
impBttnS.color = "red";
}
if (difficaulty == 3) {
impBttnS.color = "green";
}
if (pressed == true) {
difficaulty = 3;
localStorage && (localStorage.DIFFICAULTY = difficaulty);
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
hardResetBttnS.color = "lightgrey";
if (pressed == true) {
resetGame("game");
}
}
}
if (cursor.crashWith(hardResetBttnS) == false) {
hardResetBttnS.color = "grey";
}
if (cursor.crashWith(levelPackBttnS) == true) {
if (won == 0 || dead == 0) {
levelPackBttnS.color = "lightgrey";
if (pressed == true) {
levelPackMenuShow = true;
}
}
}
if (cursor.crashWith(levelPackBttnS) == false) {
levelPackBttnS.color = "grey";
}
//MOD//
if (typeof MOD_SETTINGS_MENU_MANAGER === "function") { 
MOD_SETTINGS_MENU_MANAGER();
}
}
if (settingsMenuShow == true && levelPackMenuShow == true && MOD_EXTRA_MENU_SHOW == false && MOD_MENU_SHOW == false) {
if (cursor.crashWith(backBttnL) == true) {
if (won == 0 || dead == 0) {
backBttnL.color = "lightgrey";
if (pressed == true) {
pressed = false;
levelPackMenuShow = false;
}
}
}
if (cursor.crashWith(backBttnL) == false) {
backBttnL.color = "grey";
}
if (cursor.crashWith(levelPack_1BttnL) == true) {
if (won == 0 || dead == 0) {
levelPack_1_highLightBttnL.globalAlpha = 0.6;
if (pressed == true) {
level_pack = 0;
resetGame("game");
localStorage && (localStorage.LEVEL_PACK = level_pack);
}
}
}
if (cursor.crashWith(levelPack_1BttnL) == false) {
levelPack_1_highLightBttnL.globalAlpha = 0.4;
}
if (level_pack == 0) {
levelPack_1_highLightBttnL.color = "green";
} else {
levelPack_1_highLightBttnL.color = "red";
}
if (cursor.crashWith(levelPack_2BttnL) == true) {
if (won == 0 || dead == 0) {
levelPack_2_highLightBttnL.globalAlpha = 0.6;
if (pressed == true) {
level_pack = 1;
resetGame("game");
localStorage && (localStorage.LEVEL_PACK = level_pack);
}
}
}
if (cursor.crashWith(levelPack_2BttnL) == false) {
levelPack_2_highLightBttnL.globalAlpha = 0.4;
}
if (level_pack == 1) {
levelPack_2_highLightBttnL.color = "green";
} else {
levelPack_2_highLightBttnL.color = "red";
}
//MOD//
if (typeof MOD_LEVEL_PACK_MENU_MANAGER === "function") { 
MOD_LEVEL_PACK_MENU_MANAGER();
}
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
wall5.height = canvas.height - 400;
wall6.height = wall5.height;
wall6.x = wall5.x + 10;
wall7.x = wall5.x;
wall7.y = wall5.y - 5;
wall8.x = wall5.x;
wall8.y = wall5.y + wall5.height - 5;
levelPackBttnS.x = canvas.width - 200;
levelPackBttnS.y = canvas.height - 80;
levelPackBttnSTxt.x = canvas.width - 100;
levelPackBttnSTxt.y = canvas.height - 30;
backBttnL.x = canvas.width/2 - backBttnS.width/2;
backBttnL.y = canvas.height - backBttnS.height;
backBttnLTxt.x = canvas.width/2;
backBttnLTxt.y = canvas.height - 20;
levelPack_1BttnL.x = levelPack_1_PlaceholderBttnL.x;
levelPack_1BttnL.y = levelPack_1_PlaceholderBttnL.y;
levelPack_1_highLightBttnL.x = levelPack_1_PlaceholderBttnL.x;
levelPack_1_highLightBttnL.y = levelPack_1_PlaceholderBttnL.y;
levelPack_1LTxt.x = levelPack_1_PlaceholderBttnL.x + 100;
levelPack_1LTxt.y = levelPack_1_PlaceholderBttnL.y + 60;
levelPack_2BttnL.x = levelPack_2_PlaceholderBttnL.x;
levelPack_2BttnL.y = levelPack_2_PlaceholderBttnL.y;
levelPack_2_highLightBttnL.x = levelPack_2_PlaceholderBttnL.x;
levelPack_2_highLightBttnL.y = levelPack_2_PlaceholderBttnL.y;
levelPack_2LTxt.x = levelPack_2_PlaceholderBttnL.x + 100;
levelPack_2LTxt.y = levelPack_2_PlaceholderBttnL.y + 60;
levelPack_1_PlaceholderBttnL.x = canvas.width/2 - 300;
levelPack_1_PlaceholderBttnL.y = canvas.height - 550;
levelPack_2_PlaceholderBttnL.x = canvas.width/2 - 300;
levelPack_2_PlaceholderBttnL.y = canvas.height - 450;
levelPack_3_PlaceholderBttnL.x = canvas.width/2 - 300;
levelPack_3_PlaceholderBttnL.y = canvas.height - 350;
levelPack_4_PlaceholderBttnL.x = canvas.width/2 - 100;
levelPack_4_PlaceholderBttnL.y = canvas.height - 550;
levelPack_5_PlaceholderBttnL.x = canvas.width/2 - 100;
levelPack_5_PlaceholderBttnL.y = canvas.height - 450;
levelPack_6_PlaceholderBttnL.x = canvas.width/2 - 100;
levelPack_6_PlaceholderBttnL.y = canvas.height - 350;
levelPack_7_PlaceholderBttnL.x = canvas.width/2 + 100;
levelPack_7_PlaceholderBttnL.y = canvas.height - 550;
levelPack_8_PlaceholderBttnL.x = canvas.width/2 + 100;
levelPack_8_PlaceholderBttnL.y = canvas.height - 450;
levelPack_9_PlaceholderBttnL.x = canvas.width/2 + 100;
levelPack_9_PlaceholderBttnL.y = canvas.height - 350;
LP1_wall.x = canvas.width - 415;
LP1_wall2.x = LP1_wall.x + 5;
LP1_wall2_1.x = LP1_wall.x + 2;
LP1_wall2_1.y = LP1_wall.height - 3;
LP1_wall3.x = canvas.width - 515;
LP1_wall4.x = LP1_wall3.x + 5;
LP1_wall4_1.x = LP1_wall3.x + 2;
LP1_wall4_1.y = LP1_wall3.height - 3;
//MOD//
if (typeof MOD_Object_Scaler === "function") { 
MOD_Object_Scaler();
}
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
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2);
}
if (ammo.x > canvas.width - 50) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2);
}
if (ammo.y < 50) {
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));
}
if (ammo.y > canvas.height - 50) {
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));
}
if (level == 3) {
if (ammo.mixCrashWith(wall5) || ammo.mixCrashWith(wall6)) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2);
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));	
}
if (ammo.x < wall5.x) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2);
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height));	
}
if (wall5.x < 300) {
wall5.x = Math.floor(Math.random() * canvas.width) + 300;
}
if (wall5.x > canvas.width - 200) {
wall5.x = Math.floor(Math.random() * canvas.width) + 300;
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

function animationComponent(numberOfFrames, startFrame, speedOfAnimation) {
this.numberOfFrames = numberOfFrames;
this.startFrame = startFrame;
this.speedOfAnimation = speedOfAnimation;
this.currentFrame = this.startFrame;
this._frame = 0;
this.frameTimer = function() {
this._frame += 1;
if (this._frame >= this.speedOfAnimation) {
this.currentFrame++;
this._frame = 0;
}
if (this.currentFrame >= this.numberOfFrames) {
this.currentFrame = this.startFrame;
}
return this.currentFrame;
}
this.resetFrame = function() {
this._frame = 0;
this.currentFrame = this.startFrame;
return this.currentFrame;
}
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function component(width, height, color ,x ,y, type, radius, outcolor, thickness, level, enemyType) {
	this.type = type;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.oldX = x;
	this.oldY = y;
	this.endpositionX = radius;
    this.endpositionY = outcolor;
	this.enemyType = enemyType;
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
		if (this.type == "line") {
		ctx.beginPath();
		ctx.globalAlpha = this.globalAlpha;
		ctx.lineWidth = this.width;
		ctx.lineCap = this.height;
		ctx.strokeStyle = this.color; 
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.endpositionX, this.endpositionY);
		ctx.stroke();
		}
		if (this.type == "text") {
		  this.text = this.radius;
		  ctx.globalAlpha = this.globalAlpha;
		  ctx.font = this.width + " " + this.height;
		  ctx.fillStyle = this.color;
		  ctx.textAlign = this.outcolor;
		  ctx.fillText(this.text, this.x, this.y);
		} else {
		if (this.type == "rec") {
		ctx.globalAlpha = this.globalAlpha;
		ctx.fillStyle = this.color;
		if (this.level != "player") {
		ctx.fillRect(this.x, this.y, this.width, this.height); 
		}
		if (this.level == "player") {
		ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height); 
		}
		  } else {
		  if (this.type == "cir") {
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
		 if (this.level != "player") {
		 ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (this.level == "player") {
		 ctx.drawImage(img, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
		 }
		 }
		 if (this.type == "animated-img") {
 		 var img = document.getElementById(this.color);
 		 ctx.globalAlpha = this.globalAlpha;
		 if (this.level != "player") {
 		 ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
 		 }
		 if (this.level == "player") {
		 ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.x - this.width/2, this.y - this.height/2, this.width, this.height);
		 }
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
		if (this.level != "player") {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		}
		if (this.level == "player") {
		var myleft = this.x - this.width/2;
		var myright = this.x - this.width/2 + (this.width);
		var mytop = this.y - this.height/2;
		var mybottom = this.y - this.height/2 + (this.height);
		}
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
if (otherobj.level != "player") {
var distance_x = Math.abs(this.x - otherobj.x-otherobj.width/2);
var distance_y = Math.abs(this.y - otherobj.y-otherobj.height/2);
}
if (otherobj.level == "player") {
var distance_x = Math.abs(this.x - (otherobj.x - otherobj.width)-otherobj.width);
var distance_y = Math.abs(this.y - (otherobj.y - otherobj.height)-otherobj.height);
}
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
	FPSText.radius = "FPS: " + fps.getFPS();
	p1.x = circle.x;
	p1.y = circle.y;
	ai.x = aicircle.x;
	ai.y = aicircle.y;
	LP1_ai.x = LP1_aicircle.x + LP1_aicircle.width/2;
	LP1_ai.y = LP1_aicircle.y + LP1_aicircle.height/2;
	ai2.x = aicircle2.x;
	ai2.y = aicircle2.y;
	bossAi_1.x = bossAiCircle.x;
	bossAi_1.y = bossAiCircle.y;
	difficaultyScale(difficaulty);
	backgroundManager(level);
	menuManager();
	Mod_Menu_Manager_Update();
	for(var i = _objects.length - 1; i >= 0; i--) {
	if (_objects[i].level == "background") {
	_objects[i].update();
	}
	if (_objects[i].level == "all" && dead == 0 && won == 0) {
	if (_objects[i].thickness == "") {
	_objects[i].update();
	}
	if (level_pack == 0) {
	if (_objects[i].thickness == "level2" && level == 3) {
	_objects[i].update();
	}
	}
	if (level_pack == 1) {
	if (_objects[i].thickness == "LP1_level1" && level == 1) {
	_objects[i].update();
	}
	}
	//MOD//
	if (typeof MOD_LEVEL_PACK_NUMBER === "number") {
	if (level_pack == MOD_LEVEL_PACK_NUMBER) {
	if (_objects[i].thickness == "MOD_level1" && level == 1) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level2" && level == 2) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level3" && level == 3) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level4" && level == 4) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level5" && level == 5) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level6" && level == 6) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level7" && level == 7) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level8" && level == 8) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level9" && level == 9) {
	_objects[i].update();
	}
	if (_objects[i].thickness == "MOD_level10" && level == 10) {
	_objects[i].update();
	}
	}
	}
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
	if (_objects[i].level == "enemy" && dead == 0 && won == 0) {
	if (level_pack == 0) {
	if (_objects[i].enemyType == "enemy_1" && level == 1) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_1" && level == 2) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "enemy_2" && level == 3) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	}
	if (level_pack == 1) {
	if (_objects[i].enemyType == "LP1_enemy_1" && level == 1) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	}
	//MOD//
	if (typeof MOD_LEVEL_PACK_NUMBER === "number") {
	if (level_pack == MOD_LEVEL_PACK_NUMBER) {
	if (_objects[i].enemyType == "enemy_1" && level == 1) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_1" && level == 2) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "enemy_2" && level == 3) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_2" && level == 4) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "enemy_3" && level == 5) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_3" && level == 6) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "enemy_4" && level == 7) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_4" && level == 8) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "enemy_5" && level == 9) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	if (_objects[i].enemyType == "boss_5" && level == 10) {
		_objects[i].update();
		if (firef == 0 && settingsMenuShow == false) {
		_objects[i].newPos();
		}
	}
	}	
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
	if (_objects[i].level == "settingsM" && settingsMenuShow == true && MOD_MENU_SHOW == false) {
	if (_objects[i].enemyType == "all") {
	_objects[i].update();
	}
	if (_objects[i].enemyType == "settings" && levelPackMenuShow == false && MOD_EXTRA_MENU_SHOW == false) {
	_objects[i].update();
	}
	if (_objects[i].enemyType == "levelpack" && levelPackMenuShow == true && MOD_EXTRA_MENU_SHOW == false) {
	_objects[i].update();
	}
	//MOD//
	if (_objects[i].enemyType == "otherTwo" && levelPackMenuShow == false && MOD_EXTRA_MENU_SHOW == true) {
	_objects[i].update();
	}
	//MOD//
	if (_objects[i].enemyType == "otherOne" && levelPackMenuShow == true && MOD_EXTRA_MENU_SHOW == true) {
	_objects[i].update();
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
	if (_objects[i].level === "DandW" && _objects[i].thickness == "End") {
	if (won == 1) {
	//MOD//
	if (typeof MOD_LEVEL_PACK_NUMBER === "number" && typeof MOD_MAX_LEVEL === "number") {
	if (level_pack == MOD_LEVEL_PACK_NUMBER && level >= MOD_MAX_LEVEL) {
	_objects[i].update();
	}
	}
	}
	}
	if (_objects[i].level == "debug" && debug == 1) {
	if (_objects[i].thickness == "") {
	_objects[i].update();
	}
	if (_objects[i].thickness == "timer" && timeMode == true) {
	_objects[i].update();
	}
	}
	if (_objects[i].level == "cursor") {
	_objects[i].update();
	}
	}
	if (settingsMenuShow == true) {
	if (levelPackMenuShow == false && MOD_MENU_SHOW == false) {
		settingsMenuTxt.radius = "Settings";
	}
	if (levelPackMenuShow == true) {
		settingsMenuTxt.radius = "Level Packs";
	}
	}
	joystick();
	//MOD//
	if (typeof MOD_Update_Main === "function") { 
    MOD_Update_Main();
    }
	if (up == 0 && down == 0 && left == 0 && right == 0) {
	clearcircleai();
	}
	if (firef >= 1) {
	bulletai();
	}
	if (circle.type == "cir") {
	if (circle.circleCrashWith(ammo) && won == 0 && startLevel == true) {
    firef = 1;
    }
	for(let i = _wallObj.length - 1; i >= 0; i--) {
		if (circle.mixCrashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					lockLeft = 1;
					circle.speedX = circleBounceSpeed;
				break;
				case "right":
					lockRight = 1;
					circle.speedX = -circleBounceSpeed;
				break;
				case "top":
					lockUp = 1;
					circle.speedY = circleBounceSpeed;
				break;
				case "bottom":
					lockDown = 1;
					circle.speedY = -circleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
			if (Math.floor(level_pack) == 0) {
			if (_wallObj[i].thickness == "level2" && level == 3) {
			switch (_wallObj[i].enemyType) {
				case "left":
					lockLeft = 1;
					circle.speedX = circleBounceSpeed;
				break;
				case "right":
					lockRight = 1;
					circle.speedX = -circleBounceSpeed;
				break;
				case "top":
					lockUp = 1;
					circle.speedY = circleBounceSpeed;
				break;
				case "bottom":
					lockDown = 1;
					circle.speedY = -circleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
			}
		}
		if (Math.floor(level_pack) == 0) {
		if (level == 1) {
		if (circle.circleCrashWith(aicircle)) {
		dead = 1;
		}
		if (aicircle.mixCrashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					aicircle.speedX = aiCircleBounceSpeed;
				break;
				case "right":
					aicircle.speedX = -aiCircleBounceSpeed;
				break;
				case "top":
					aicircle.speedY = aiCircleBounceSpeed;
				break;
				case "bottom":
					aicircle.speedY = -aiCircleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		}
		if (level == 2) {
		if (circle.circleCrashWith(bossAiCircle)) {
		dead = 1;
		}
		if (bossAiCircle.mixCrashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					bossAiCircle.speedX = aiCircleBounceSpeed;
				break;
				case "right":
					bossAiCircle.speedX = -aiCircleBounceSpeed;
				break;
				case "top":
					bossAiCircle.speedY = aiCircleBounceSpeed;
				break;
				case "bottom":
					bossAiCircle.speedY = -aiCircleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		}
		if (level == 3) {
		if (circle.circleCrashWith(aicircle2)) {
		dead = 1;
		}
		if (aicircle2.mixCrashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					aicircle2.speedX = aiCircleBounceSpeed;
				break;
				case "right":
					aicircle2.speedX = -aiCircleBounceSpeed;
				break;
				case "top":
					aicircle2.speedY = aiCircleBounceSpeed;
				break;
				case "bottom":
					aicircle2.speedY = -aiCircleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
			if (_wallObj[i].thickness == "level2") {
			switch (_wallObj[i].enemyType) {
				case "left":
					aicircle2.speedX = aiCircleBounceSpeed;
					leftAILock = true;
				break;
				case "right":
					aicircle2.speedX = -aiCircleBounceSpeed;
					rightAILock = true;
				break;
				case "top":
					aicircle2.speedY = aiCircleBounceSpeed;
					downAILock = true;
				break;
				case "bottom":
					aicircle2.speedY = -aiCircleBounceSpeed;
					upAILock = true;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		if (!aicircle2.mixCrashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "level2") {
			switch (_wallObj[i].enemyType) {
				case "left":
					leftAILock = false;
				break;
				case "right":
					rightAILock = false;
				break;
				case "top":
					downAILock = false;
				break;
				case "bottom":
					upAILock = false;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		}
		}
	}
	}
	if (circle.type == "rec" || circle.type == "img") {
	if (ammo.mixCrashWith(circle) && won == 0 && startLevel == true) {
    firef = 1;
    }
	for(let i = _wallObj.length - 1; i >= 0; i--) {
		if (circle.crashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					lockLeft = 1;
					circle.speedX = circleBounceSpeed;
				break;
				case "right":
					lockRight = 1;
					circle.speedX = -circleBounceSpeed;
				break;
				case "top":
					lockUp = 1;
					circle.speedY = circleBounceSpeed;
				break;
				case "bottom":
					lockDown = 1;
					circle.speedY = -circleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
			if (Math.floor(level_pack) == 1) {
			if (_wallObj[i].thickness == "LP1_level1") {
				switch (_wallObj[i].enemyType) {
				case "left":
					lockLeft = 1;
					circle.speedX = circleBounceSpeed;
				break;
				case "right":
					lockRight = 1;
					circle.speedX = -circleBounceSpeed;
				break;
				case "top":
					lockUp = 1;
					circle.speedY = circleBounceSpeed;
				break;
				case "bottom":
					lockDown = 1;
					circle.speedY = -circleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
				}
			}
			}
		}
		if (Math.floor(level_pack) == 1 && level == 1) {
		if (circle.crashWith(LP1_aicircle)) {
		dead = 1;
		}
		if (LP1_aicircle.crashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "all") {
			switch (_wallObj[i].enemyType) {
				case "left":
					LP1_aicircle.speedX = aiCircleBounceSpeed;
				break;
				case "right":
					LP1_aicircle.speedX = -aiCircleBounceSpeed;
				break;
				case "top":
					LP1_aicircle.speedY = aiCircleBounceSpeed;
				break;
				case "bottom":
					LP1_aicircle.speedY = -aiCircleBounceSpeed;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
			if (_wallObj[i].thickness == "LP1_level1") {
			switch (_wallObj[i].enemyType) {
				case "left":
					LP1_aicircle.speedX = aiCircleBounceSpeed;
					leftAILock = true;
				break;
				case "right":
					LP1_aicircle.speedX = -aiCircleBounceSpeed;
					rightAILock = true;
				break;
				case "top":
					LP1_aicircle.speedY = aiCircleBounceSpeed;
					downAILock = true;
				break;
				case "bottom":
					LP1_aicircle.speedY = -aiCircleBounceSpeed;
					upAILock = true;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		if (!LP1_aicircle.crashWith(_wallObj[i])) {
			if (_wallObj[i].thickness == "LP1_level1") {
			switch (_wallObj[i].enemyType) {
				case "left":
					leftAILock = false;
				break;
				case "right":
					rightAILock = false;
				break;
				case "top":
					downAILock = false;
				break;
				case "bottom":
					upAILock = false;
				break;
				default:
					console.log("Not a correct value in " + _wallObj[i] + ".enemyType!");
			}
			}
		}
		}
	}
	}
	if (Math.floor(level_pack) != 1) {
		if (difficaulty == 0) {
			if (lockUp == 1 || lockDown == 1 || lockLeft == 1 || lockRight == 1) {
			clearcircleai();
			}
		}
	}
}

var aiCircleSpeed = 3;
var leftAILock = false;
var rightAILock = false;
var upAILock = false;
var downAILock = false;	
function aicircleai() {
//MOD//
if (typeof MOD_Enemy_AI === "function" && typeof MOD_LEVEL_PACK_NUMBER === "number") { 
if (level_pack == MOD_LEVEL_PACK_NUMBER) {
MOD_Enemy_AI();
}
}
if (level_pack == 0) {
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
if (level == 3) {
 if (circle.x < aicircle2.x && leftAILock == false){
 aicircle2.speedX = -aiCircleSpeed;
 } 
 if (circle.x > aicircle2.x && rightAILock == false){
 aicircle2.speedX = aiCircleSpeed;
 }
 if (circle.y < aicircle2.y && upAILock == false){
 aicircle2.speedY = -aiCircleSpeed;
 } 
 if (circle.y > aicircle2.y && downAILock == false){
 aicircle2.speedY = aiCircleSpeed;
 }
}
}
if (level_pack == 1) {
if (level == 1) {
 if (circle.x < LP1_aicircle.x + LP1_aicircle.width/2 && leftAILock == false){
 LP1_aicircle.speedX = -aiCircleSpeed;
 } 
 if (circle.x > LP1_aicircle.x + LP1_aicircle.width/2 && rightAILock == false){
 LP1_aicircle.speedX = aiCircleSpeed;
 }
 if (circle.y < LP1_aicircle.y + LP1_aicircle.height/2 && upAILock == false){
 LP1_aicircle.speedY = -aiCircleSpeed;
 } 
 if (circle.y > LP1_aicircle.y + LP1_aicircle.height/2 && downAILock == false){
 LP1_aicircle.speedY = aiCircleSpeed;
 }
}
}
}

function clearcircleai() {
//MOD//
if (typeof MOD_Clear_Enemy_AI === "function" && typeof MOD_LEVEL_PACK_NUMBER === "number") { 
if (level_pack == MOD_LEVEL_PACK_NUMBER) {
MOD_Clear_Enemy_AI();
}
}
if (level_pack == 0) {
if (level == 1) {
aicircle.speedX = 0;
aicircle.speedY = 0;
}
if (level == 2) {
bossAiCircle.speedX = 0;
bossAiCircle.speedY = 0;
}
if (level == 3) {
aicircle2.speedX = 0;
aicircle2.speedY = 0;
}
}
if (level_pack == 1) {
if (level == 1) {
LP1_aicircle.speedX = 0;
LP1_aicircle.speedY = 0;
}
}
}

var bulletSpeed = 3;
function bulletai() {
//MOD//
if (typeof MOD_Bullet_AI === "function" && typeof MOD_LEVEL_PACK_NUMBER === "number") { 
if (level_pack == MOD_LEVEL_PACK_NUMBER) {
MOD_Bullet_AI();
}
}
if (level_pack == 0) {
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
if (level == 3) {
 if (bulletcase.x > aicircle2.x){
 bulletcase.speedX = -bulletSpeed;
 } 
 if (bulletcase.x < aicircle2.x){
 bulletcase.speedX = bulletSpeed;
 }
 if (bulletcase.y > aicircle2.y){
 bulletcase.speedY = -bulletSpeed;
 } 
 if (bulletcase.y < aicircle2.y){
 bulletcase.speedY = bulletSpeed;
 }
 if (bulletcase.circleCrashWith(aicircle2)) {
 won = 1;
 firef = 0;
 }
}
}
if (level_pack == 1) {
if (level == 1) {
 if (bulletcase.x > LP1_aicircle.x + LP1_aicircle.width/2){
 bulletcase.speedX = -bulletSpeed;
 } 
 if (bulletcase.x < LP1_aicircle.x + LP1_aicircle.width/2){
 bulletcase.speedX = bulletSpeed;
 }
 if (bulletcase.y > LP1_aicircle.y + LP1_aicircle.height/2){
 bulletcase.speedY = -bulletSpeed;
 } 
 if (bulletcase.y < LP1_aicircle.y + LP1_aicircle.height/2){
 bulletcase.speedY = bulletSpeed;
 }
 if (bulletcase.mixCrashWith(LP1_aicircle)) {
 won = 1;
 firef = 0;
 }
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
	
	//MOD//
	if (typeof MOD_KEY_DOWN === "function") {
	MOD_KEY_DOWN(event);
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
	
	//MOD//
	if (typeof MOD_KEY_UP === "function") {
	MOD_KEY_UP(event);
	}
	
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



var gamepads = {};
var hasConnected = false;
function gamepadHandler(event, connecting) {
  if (connecting) {
	gamepadControls();
	if (hasConnected == false) {
		pollGamepads();
	}
  } else {
    gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	hasConnected = false;
	console.log("Gamepad Disconnected!");
  }
}
function pollGamepads() {
  gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
  for (var i = 0; i < gamepads.length; i++) {
    var gp = gamepads[i];
    if (gp) {
      console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
	  hasConnected = true;
    }
  }
}
function buttonPressed(b) {
  if (typeof(b) == "object") {
    return b.pressed;
  }
  return b == 1.0;
}
function gamepadControls() {
  for (var i = 0; i < gamepads.length; i++) {
      var a = gamepads[i].axes;
      console.log(a);
  }
}

window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);

function resetGame(ResetLevel) {
this.ResetLevel = ResetLevel;
startLevel = false;
//reset (enemy, player, ammo) positions here//
if (MOD_PLAYER_LOCKED_SET_POSITION == true) {
circle.x = 80;
circle.y = canvas.height/2;
circle.speedX = 0;
circle.speedY = 0;
}
aicircle.x = canvas.width - 80;
aicircle.y = canvas.height/2;
aicircle2.x = canvas.width - 80;
aicircle2.y = canvas.height/2;
bossAiCircle.x = canvas.width - 100;
bossAiCircle.y = canvas.height/2;
LP1_aicircle.x = canvas.width - 80 - 30;
LP1_aicircle.y = canvas.height/2 - 30;
//MOD//
if (typeof MOD_RESET_GAME_MAIN === "function") {
MOD_RESET_GAME_MAIN();
}
if (MOD_RANDOM_AMMO_POSITION == true) {
ammo.x = Math.abs(Math.floor(Math.random() * canvas.width - canvas.width/2) + canvas.width/2)
ammo.y = Math.abs(Math.floor(Math.random() * canvas.height - 500));
}
wall5.x = Math.floor(Math.random() * canvas.width) + 300;
if (this.ResetLevel == "level") {
won = 0;
dead = 0;
firef = 0;
lockUp = 0;
lockDown = 0;
lockLeft = 0;
lockRight = 0;
//MOD//
if (typeof MOD_RESET_LEVEL === "function") {
MOD_RESET_LEVEL();
}
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
//MOD//
if (typeof MOD_RESET_GAME === "function") {
MOD_RESET_GAME();
}
if (levelPackMenuShow == false) {
settingsMenuShow = false;
}
timer("stop");
}
}

var circleSpeed = 2.5;	
var up = 0;
var down = 0;
var left = 0;
var right = 0;
var aiStop = false;
function moveUp() {
	timer("start");
	startLevel = true;
    if (lockUp == 0) {
	circle.speedY = -circleSpeed;
	up = 1;
	if (aiStop == true) {
	aicircleai();
	}
	}
	if (difficaulty == 3 && aiStop == false) {
	aicircleai();
	}
	//MOD//
	if (typeof MOD_MOVE_UP === "function") {
	MOD_MOVE_UP();
	}
}
function moveDown() {
	timer("start");
	startLevel = true;
    if (lockDown == 0) {
	circle.speedY = circleSpeed;
	down = 1;
	if (aiStop == true) {
	aicircleai();
	}
	}
	if (difficaulty == 3 && aiStop == false) {
	aicircleai();
	}
	//MOD//
	if (typeof MOD_MOVE_DOWN === "function") {
	MOD_MOVE_DOWN();
	}
}
function moveLeft() {
	timer("start");
	startLevel = true;
    if (lockLeft == 0) {
	circle.speedX = -circleSpeed;
	left = 1;
	if (aiStop == true) {
	aicircleai();
	}
	}
	if (difficaulty == 3 && aiStop == false) {
	aicircleai();
	}
	//MOD//
	if (typeof MOD_MOVE_LEFT === "function") {
	MOD_MOVE_LEFT();
	}
}
function moveRight() {
	timer("start");
	startLevel = true;
    if (lockRight == 0) {
	circle.speedX = circleSpeed;
	right = 1;
	if (aiStop == true) {
	aicircleai();
	}
	}
	if (difficaulty == 3 && aiStop == false) {
	aicircleai();
	}
	//MOD//
	if (typeof MOD_MOVE_RIGHT === "function") {
	MOD_MOVE_RIGHT();
	}
}

var nextLevelLatch = 0;
function nxtlvl(difficaultyS) {
this.difficaultyS = difficaultyS;
startLevel = false;
nextLevelLatch = 0;
if (won == 1 && nextLevelLatch == 0) {
if (level != 2 && level != 4) {
if (difficaultyS != 3) {
level = (level + 2);
resetGame("level");
nextLevelLatch = 1;
}
}
if (difficaultyS == 3 || level == 2 || level == 4) {
level = (level + 1);
resetGame("level");
nextLevelLatch = 1;
}
}
}

function difficaultyScale(difficaultyS) {
this.difficaultyS = difficaultyS;
//MOD//
if (typeof MOD_DIFFICAULTY_SCALER === "function") {
MOD_DIFFICAULTY_SCALER();
}
if (MOD_LOAD_DIFFICAULTY == true) {
if (isEven(level) == false) {
if (localStorage && 'DIFFICAULTY' in localStorage) {
difficaulty = localStorage.DIFFICAULTY;
}
}
}
if (this.difficaultyS == 0) {
if (level_pack == 0) {
if (level == 1) {
aiCircleSpeed = 2.5;
circleSpeed = 2.5;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
aiStop = true;
}
if (level == 3) {
aiCircleSpeed = 4;
circleSpeed = 3;
aiCircleBounceSpeed = 2;
circleBounceSpeed = 3;
aiStop = true;
}
}
if (level_pack == 1) {
aiCircleSpeed = 2;
circleSpeed = 2.5;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
aiStop = true;	
}
}
if (this.difficaultyS == 1) {
if (level_pack == 0) {
if (level == 1) {
aiCircleSpeed = 3;
circleSpeed = 2.5;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
aiStop = true;
}
if (level == 2) {
aiCircleSpeed = 6;
circleSpeed = 3;
aiCircleBounceSpeed = 3;
circleBounceSpeed = 1;
aiStop = true;
}
if (level == 3) {
aiCircleSpeed = 4;
circleSpeed = 2;
aiCircleBounceSpeed = 4;
circleBounceSpeed = 3;
aiStop = true;
}
}
}
if (this.difficaultyS == 2) {
if (level_pack == 0) {
if (level == 1) {
aiCircleSpeed = 4;
circleSpeed = 2;
aiCircleBounceSpeed = 1;
circleBounceSpeed = 1;
aiStop = true;
}
if (level == 3) {
aiCircleSpeed = 6;
circleSpeed = 4;
aiCircleBounceSpeed = 5;
circleBounceSpeed = 4;
aiStop = true;
}
}
}
if (this.difficaultyS == 3) {
if (level_pack == 0) {
if (level == 1) {
aiCircleSpeed = 6;
circleSpeed = 1.5;
aiCircleBounceSpeed = 3;
circleBounceSpeed = 1;
aiStop = false;
}
if (level == 3) {
aiCircleSpeed = 6;
circleSpeed = 3;
aiCircleBounceSpeed = 5;
circleBounceSpeed = 3;
aiStop = true;
}
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
	if (level_pack == 0) {
	if (level == 1) {
	aicircle.speedY = 0;
	}
	if (level == 2) {
	bossAiCircle.speedY = 0;
	}
	if (level == 3) {
	aicircle2.speedY = 0;
	}
	}
	if (level_pack == 1) {
    if (level == 1) {
	LP1_aicircle.speedY = 0;
	}
	}
	//MOD//
	if (typeof MOD_CLEAR_MOVE_UP === "function") {
	MOD_CLEAR_MOVE_UP();
	}
	up = 0;
}	
function clearmoved() {
    clearLocks();
	circle.speedY = 0; 
	if (level_pack == 0) {
	if (level == 1) {
	aicircle.speedY = 0;
	}
	if (level == 2) {
	bossAiCircle.speedY = 0;
	}
	if (level == 3) {
	aicircle2.speedY = 0;
	}
	}
	if (level_pack == 1) {
    if (level == 1) {
	LP1_aicircle.speedY = 0;
	}
	}
	//MOD//
	if (typeof MOD_CLEAR_MOVE_DOWN === "function") {
	MOD_CLEAR_MOVE_DOWN();
	}
	down = 0;
}	
function clearmovel() {
    clearLocks();
	circle.speedX = 0; 
	if (level_pack == 0) {
	if (level == 1) {
	aicircle.speedX = 0;
	}
	if (level == 2) {
	bossAiCircle.speedX = 0;
	}
	if (level == 3) {
	aicircle2.speedX = 0;
	}
	}
	if (level_pack == 1) {
    if (level == 1) {
	LP1_aicircle.speedX = 0;
	}
	}
	//MOD//	
	if (typeof MOD_CLEAR_MOVE_LEFT === "function") {
	MOD_CLEAR_MOVE_LEFT();
	}
	left = 0;
}	
function clearmover() {
    clearLocks();
	circle.speedX = 0;
	if (level_pack == 0) {
    if (level == 1) {
	aicircle.speedX = 0;
	}	
	if (level == 2) {
	bossAiCircle.speedX = 0;
	}
	if (level == 3) {
	aicircle2.speedX = 0;
	}
	}
	if (level_pack == 1) {
    if (level == 1) {
	LP1_aicircle.speedX = 0;
	}	
	}
	//MOD//
	if (typeof MOD_CLEAR_MOVE_RIGHT === "function") {
	MOD_CLEAR_MOVE_RIGHT();
	}
	right = 0;
}

function clearLocks() {
lockUp = 0;
lockDown = 0;
lockLeft = 0;
lockRight = 0;
}