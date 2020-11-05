//Block key defaults
var keys = {};
window.addEventListener("keydown",
	function(e){
		keys[e.keyCode] = true;
		switch(e.keyCode){
			case 37: case 39: case 38:  case 40: //Arrow keys
			case 32: e.preventDefault(); break; //Space
			default: break; //Do not block other keys
		}
	},
false);
window.addEventListener('keyup',
	function(e){
		keys[e.keyCode] = false;
	},
false);

//Html elements
var pageIcon = document.getElementById('pageIcon');
var canvas = document.getElementById('screen');
var mainMenu = document.getElementById('mainMenu');
var mainTitle = document.getElementById('mainTitle');
var tankWarBttn = document.getElementById('tankWarBttn');
var lineBattleBttn = document.getElementById('lineBattleBttn');
var settingsBttn = document.getElementById('settingsBttn');
var UIScaleSlider = document.getElementById('locationForUIScale');
var UIScale = document.getElementById('UI_Scale');
var player1Bttn = document.getElementById('player1Bttn');
var player2Bttn = document.getElementById('player2Bttn');
var player3Bttn = document.getElementById('player3Bttn');
var player4Bttn = document.getElementById('player4Bttn');

//Global game varibles
var UIScaleNumber = 0;
var ctx = canvas.getContext("2d");
var isLoaded = false;
var debug = false;
var pause = false;
var menus = 0; //0- MAIN MENU | 1- TANK WAR MENU | 2- LINE BATTLE MENU | 3- OPTIONS MENU
var players = 2;
var player1Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player2Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player3Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player4Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var gamemode = 2; //0- NO GAME | 1- TANK WAR | 2- LINE BATTLE
var mainObjectArray = []; //Main object array
var gameObjects0 = []; //Global gameObjects
var gameObjects1 = []; //Tank War gameObjects
var gameObjects2 = []; //Line Battle gameObjects
var stopControls = false;


//Global line battle varibles
var Player1ButtetRadius = 5;
var Player2ButtetRadius = 5;
var LBPlayerSpeed = 3;
var LBPlayerRotateSpeed = 3;
var TailLength = 10; //max 150 | min 10
var TailFullness = 2;
var StartRotation1 = false;
var StartRotation2 = false;
var ChaosMode = false; 
var MaxPointsLB = 10; //max 100 | min 1
var focusLight = true;
var focusLightPosX = 640;
var focusLightPosY = 360;

//Global tank war varibles
var Player1BulletSize = 2;
var Player2BulletSize = 2;
var Player3BulletSize = 2;
var Player4BulletSize = 2;
var Player1BulletSpeed = -10;
var Player2BulletSpeed = -10;
var Player3BulletSpeed = -10;
var Player4BulletSpeed = -10;
var Player1RotationSpeed = 1;
var Player2RotationSpeed = 1;
var Player3RotationSpeed = 1;
var Player4RotationSpeed = 1;

function profile1() {
this.name_ = "Blue";
this.image_ = "https://mark4pro.github.io/MiniGameCollection/Images/Blue_Ball.png";
this.setUpPf = function() {
this.pfpic = document.createElement("img");
this.pfpic.id = "blue";	
this.pfpic.width = "0";
this.pfpic.height = "0";
this.pfpic.src = this.image_;
document.getElementById("profileImages").appendChild(this.pfpic);
}
}
function profile2() {
this.name_ = "Red";
this.image_ = "https://mark4pro.github.io/MiniGameCollection/Images/Red_Ball.png";
this.setUpPf = function() {
this.pfpic = document.createElement("img");
this.pfpic.id = "red";	
this.pfpic.width = "0";
this.pfpic.height = "0";
this.pfpic.src = this.image_;
document.getElementById("profileImages").appendChild(this.pfpic);   
}
}

function iconSetup() {
	if (gamemode == 0) {
		if (menus == 0 || menus == 3) {
		pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Main_Icon.ico";
		}
		if (menus == 1) {
		pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Tank_War_Icon.ico";
		}
		if (menus == 2) {
		pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Line_Battle_Icon.ico";
		}
	}
	if (gamemode == 1) {
	pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Tank_War_Icon.ico";
	}
	if (gamemode == 2) {
	pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Line_Battle_Icon.ico";
	}
}

//inits everything
function init() {
	initMain();
	initTW();
	initLB();
	iconSetup();
	window.addEventListener('resize', resizeHandler);
	loadSettings();
	Setup.init();
	isLoaded = true;
}

function initMain() {
	//component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle, timeAlive)
	//bottom
	//Main gameObjects
	winButton = new component("win", 410, 70, "grey", 640, 360, "rec");
	winButton.globalAlpha = 0;
	gameObjects0.push(winButton);
	profilePic1 = new component("win", 50, 50, "", 465, 360, "img");
	profilePic1.globalAlpha = 0;
	gameObjects0.push(profilePic1);
	profilePic2 = new component("win", 50, 50, "", 815, 360, "img");
	profilePic2.globalAlpha = 0;
	gameObjects0.push(profilePic2);
	winText = new component("win", "50px", "Arial", "white", 640, 375, "text", "center");
	winText.globalAlpha = 0;
	gameObjects0.push(winText);
	cursor = new component("cursor", 10, 10, "green", 200, 200, "rec");
	gameObjects0.push(cursor);
	//top
}

function initTW() {
	//component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle, timeAlive)
	//bottom
	//Tank War
	TWBackground1 = new component("BG1", 1280, 720, "Tank_War_Background_1", 640, 360, "img");
	gameObjects1.push(TWBackground1);
	//top
}

function initLB() {
	//component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle, timeAlive)
	//bottom
	//Line Battle
	LBPlayer1Collision = new component("Player1Coll", 25, 50, "blue", 50, 120, "cir");
	LBPlayer1Collision.globalAlpha = 0;
	gameObjects2.push(LBPlayer1Collision);
	LBPlayer1 = new component("Player1", 50, 50, "Line_Battle_Player_1", 50, 120, "img");
	gameObjects2.push(LBPlayer1);
	LBPlayer2Collision = new component("Player2Coll", 25, 50, "red", 1230, 600, "cir");
	LBPlayer2Collision.globalAlpha = 0;
	gameObjects2.push(LBPlayer2Collision);
	LBPlayer2 = new component("Player2", 50, 50, "Line_Battle_Player_2", 1230, 600, "img");
	gameObjects2.push(LBPlayer2);
	//top
}

//sets saved vars
function loadSettings() {
	//move to own function
	P1info = new profile1();
	P2info = new profile2()
	//P1info.image_;
	//P2info.image_;
	P1info.setUpPf();
	P2info.setUpPf();
	if (localStorage && 'UISCALE_' in localStorage) {
    UIScaleNumber = localStorage.UISCALE_;
	UIScale.value = localStorage.UISCALE_;
	resizeHandler("fuckRightOff");
	} else {
	resizeHandler();
	}
}

//menu controls
function menuManger(type) {
this.type = type;
	if (this.type == 'Back') {
		if (menus == 1 || menus == 2 || menus == 3) {
		menus = 0;
		}
	}
	if (this.type == 'Tank') {
		menus = 1;
	}
	if (this.type == 'Line') {
		menus = 2;
	}
	if (this.type == 'Settings') {
		menus = 3;
	}
}

//sets up game stuff
var nativeWidth = 1280; 
var nativeHeight = 720;
var Setup = {
	init : function() {
		canvas.className = "unselectable";
		document.addEventListener("keydown",keyDownHandler, false);	
		document.addEventListener("keyup",keyUpHandler, false);
		this.interval = setInterval(mainUpdateLoop, 10);
	}, 
	updateScreen : function(){
		ctx.clearRect(0, 0, nativeWidth, nativeHeight);
		if (pause == true) {
		Setup.pause();
		}
		if (pause == false) {
		Setup.unpause();
		}
	},
	pause : function(){
	stopControls = true;
	},
	unpause : function(){
	stopControls = false;
    }
}

//handles screen resize
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
var scaleFillNativeWidth = (parseFloat(deviceWidth / nativeWidth)+parseFloat(UIScaleNumber));
var scaleFillNativeHeight = (parseFloat(deviceHeight / nativeHeight)+parseFloat(UIScaleNumber));
var scaleHeight = parseFloat(deviceHeight / nativeHeight);
function resizeHandler(setup) {
this.setup = setup;
deviceWidth = window.innerWidth;
deviceHeight = window.innerHeight;
scaleFillNativeWidth = (parseFloat(deviceWidth / nativeWidth)+parseFloat(UIScaleNumber));
scaleFillNativeHeight = (parseFloat(deviceHeight / nativeHeight)+parseFloat(UIScaleNumber));
scaleWidth = parseFloat(deviceWidth / nativeWidth);
scaleHeight = parseFloat(deviceHeight / nativeHeight);
canvas.width = deviceWidth;
canvas.height = deviceHeight;
if (this.setup == undefined || this.setup == null) {
localStorage && (localStorage.UISCALE_ = UIScaleNumber);
}
ctx.setTransform(scaleWidth,0,0,scaleHeight,0,0);
scaleControls();
}

//constructor
function component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle) {
this.name = name;
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.type = type;
this.id = id;
this.lineWidth = lineWidth;
this.strokeStyle = strokeStyle;
this.timeAlive = 0;
this.radius = width;
this.globalAlpha = 1;
this.points = 0;
this.dead = false;
this.won = false;
this.scored = false;
this.setRot = false;
this.directionSwitch = 0;
this.rotLock = false;
this.speed = 0;
this.rotationSpeed = 0;
this.angle = 0;
this._bullets = [];
this.bulletspeed = 0;
this.upgradePoints = 0;
this.upgradeTurn = false;
this._badObjs = [];
this.returnPoints = function(type) {
	this.type = type;
	if (this.type == "normal") {
	return this.points;
	}
	if (this.type == "roundUp") {
	this.renderedPoints = Math.ceil(this.points);
	return this.renderedPoints;
	}
	if (this.type == "roundDown") {
	this.renderedPoints = Math.floor(this.points);
	return this.renderedPoints;
	}
}
this.retunDistance = function(object) {
this.object = object;
var a = this.x-object.x;
var b = this.y-object.y;
return Math.sqrt((a*a)+(b*b));
}
this.update = function() {
  if (this.type == "text") {
  ctx.globalAlpha = this.globalAlpha;
  ctx.textAlign = this.id;
  ctx.font = this.width + " " + this.height;
  ctx.fillStyle = this.color;
  ctx.fillText(this.name, this.x, this.y);
  } 
  if (this.type == "rec") {
  ctx.save();
  ctx.globalAlpha = this.globalAlpha;
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angleDegrees);
  ctx.fillStyle = this.color;
  ctx.fillRect(this.width/-2, this.height/-2, this.width, this.height);
  ctx.restore();	
  }
  if (type == "cir") {
  ctx.beginPath();
  ctx.globalAlpha = this.globalAlpha;
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
	if (this.name !== "bullet" && gamemode == 1) {
	ctx.lineWidth = this.lineWidth;
	ctx.strokeStyle = this.strokeStyle;
	ctx.stroke();
	}
  }
  if (this.type == "img") {
  ctx.save();
  ctx.globalAlpha = this.globalAlpha;
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angleDegrees);
  var img = document.getElementById(this.color);
  ctx.drawImage(img, this.width/-2, this.height/-2, this.width, this.height);
  ctx.restore();
  }
}
this.newPos = function() {
	if (this.name == "bullet") {
	this.timeAlive += 0.2;
	}
	if (gamemode == 3) {
		if (this.angleDegrees > 180) {
		this.angle = 0;
		}
		if (this.angleDegrees < 0) {
		this.angle = 180;
		}
	}
	if (gamemode != 3) {
		if (this.angleDegrees > 360) {
		this.angle = 0;
		}
		if (this.angleDegrees < 0) {
		this.angle = 360;
		}
	}
this.angleDegrees = (this.angle*(Math.PI/180));
this.x += (this.speed*Math.sin(this.angleDegrees));
this.y += (-this.speed*Math.cos(this.angleDegrees));
}
if (this.name == "Player1Coll") {
	this.shoot = function(){
		if(this.dead === false){
		/*if (gamemode == 1) {
		var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank1Bull", Tank1.x, Tank1.y, "Bull", "Tank1");
		}*/
		if (gamemode == 2) {
		var __bullet = new component("bullet", 5, 5, "darkblue", LBPlayer1Collision.x, LBPlayer1Collision.y, "cir", "", "");
		}
		this._bullets.push(__bullet);
		}
	}
}
if (this.name == "Player2Coll") {
	this.shoot = function(){
		if(this.dead === false){
		/*if (gamemode == 1) {
		var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank2Bull", Tank2.x, Tank2.y, "Bull", "Tank2");
		}*/
		if (gamemode == 2) {
		var __bullet = new component("bullet", 5, 5, "darkred", LBPlayer2Collision.x, LBPlayer2Collision.y, "cir", "", "");
		}
		this._bullets.push(__bullet);
		}
   }
}
if (this.name == "Player3Coll") {
	this.shoot = function(){
		if(this.dead === false){
		/*var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank2Bull", Tank2.x, Tank2.y, "Bull", "Tank2");
		this._bullets.push(__bullet);*/
		}
	}
}
if (this.name == "Player4Coll") {
	this.shoot = function(){
		if(this.dead === false){
		/*var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank2Bull", Tank2.x, Tank2.y, "Bull", "Tank2");
		this._bullets.push(__bullet);*/
		}
   }
}
this.spawn = function(){
	if(this.dead === false){
	var __badObj = new component("badObj", 5, 5, "#A30F0F", Math.floor((Math.random()*canvas.width-20)+20), Math.floor((Math.random()*canvas.height-1)+1), "cir");
	this._badObjs.push(__badObj);
	}
}
//get shit for collisions
this.getTop = function() {
 return this.y;
}
this.getLeft = function() {
 return this.x;
}
this.getRight = function() {
 return this.x + this.width;
}
this.getBottom = function() {
 return this.y + this.height;
}
//only circles
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
//only rectangles
this.crashWith = function(otherobj) {
var l1 = this.getLeft();
var t1 = this.getTop();
var r1 = this.getRight();
var b1 = this.getBottom();
var l2 = otherobj.getLeft();
var t2 = otherobj.getTop();
var r2 = otherobj.getRight();
var b2 = otherobj.getBottom();
	if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
	return false;
	} else {
	return true;
	}
}
//this must be a circle
this.mixCrashWith = function(otherobj) {
var distance_x = Math.abs(this.x - otherobj.x-otherobj.width/2);
var distance_y = Math.abs(this.y - otherobj.y-otherobj.height/2);
	if (distance_x > (otherobj.width/2 + this.radius) || distance_y > (otherobj.height/2 + this.radius)) {
	return false;
	}
	if (distance_x <= (otherobj.width/2) && distance_y <= (otherobj.height/2)) {
	return true;
	} 
var dx=distance_x-otherobj.width/2;
var dy=distance_y-otherobj.height/2;
	if (dx*dx+dy*dy<=(this.radius*this.radius)) {
	return true;
	}
}
}

function functionCombiner(function1, function2) {
this.function1 = function1;
this.function2 = function2;
return eval(this.function1, this.function2);
}

//main update loop
var arrayLoad = false;
function mainUpdateLoop() {
	iconSetup();
	controlsSwapper();
	Setup.updateScreen();
	controlReset();
	//gamemode 0
	if (gamemode == 0 && arrayLoad == true) {
		mainObjectArray = [];
		arrayLoad = false;
	}
	//gamemode 1
	if (gamemode == 1 && arrayLoad == false) {
		mainObjectArray = mainObjectArray.concat(gameObjects1, gameObjects0);
		arrayLoad = true;
	}
	//gamemode 2
	if (gamemode == 2 && arrayLoad == false) {
		mainObjectArray = mainObjectArray.concat(gameObjects2, gameObjects0);
		arrayLoad = true;
	}
	functionCombiner(updatePos(), objectManipulation());
	//Line Battle reset dir switch
	if (gamemode == 2) {
		if (LBPlayer1Collision.directionSwitch > 1) {
		LBPlayer1Collision.directionSwitch = 0;
		}
		if (LBPlayer1Collision.directionSwitch > 1) {
		LBPlayer1Collision.directionSwitch = 0;
		}
		if (LBPlayer2Collision.directionSwitch > 1) {
		LBPlayer2Collision.directionSwitch = 0;
		}
		if (LBPlayer2Collision.directionSwitch > 1) {
		LBPlayer2Collision.directionSwitch = 0;
		}
	}
	//Line Battle do rotation
	if (gamemode == 2) {
		if (StartRotation1 == true) {
			if (player1Controls != 2) {
			LBPlayer1ControlsDown(false);
			} else {
			LBPlayer1ControlsDown(true);
			}
		}
		if (StartRotation2 == true) {
			if (player2Controls != 2) {
			LBPlayer2ControlsDown(false);
			} else {
			LBPlayer2ControlsDown(true);
			}
		}
	}
	bulletCollision();
	playerCollision();
	deadCheck();
	winCheck();
	renderer();
}

//updates positions with logic
var mousePos = [];
function updatePos() {
cursor.x = mousePos[0];
cursor.y = mousePos[1];
}

function winCheck() {
	if (gamemode == 2) {
		if (LBPlayer1Collision.points >= MaxPointsLB) {
		LBPlayer1Collision.won = true;
		}
		if (LBPlayer2Collision.points >= MaxPointsLB) {
		LBPlayer2Collision.won = true;
		}
		if (LBPlayer1Collision.won && !LBPlayer2Collision.won) {
		winButton.globalAlpha = 1;
		profilePic1.globalAlpha = 1;
		profilePic1.color = P1info.pfpic.id;
		profilePic2.globalAlpha = 1;
		profilePic2.color = P1info.pfpic.id;
		winText.globalAlpha = 1;
		winText.name = P1info.name_ + " won!";
		}
		if (!LBPlayer1Collision.won && LBPlayer2Collision.won) {
		winButton.globalAlpha = 1;
		profilePic1.globalAlpha = 1;
		profilePic1.color = P2info.pfpic.id;
		profilePic2.globalAlpha = 1;
		profilePic2.color = P2info.pfpic.id;
		winText.globalAlpha = 1;
		winText.name = P2info.name_ + " won!";
		}
		if (LBPlayer1Collision.won && LBPlayer2Collision.won) {
		winButton.globalAlpha = 1;
		profilePic1.globalAlpha = 1;
		profilePic1.color = P1info.pfpic.id;
		profilePic2.globalAlpha = 1;
		profilePic2.color = P2info.pfpic.id;
		winText.globalAlpha = 1;
		winText.name = "Tie!";
		}
		if (!LBPlayer1Collision.won && !LBPlayer2Collision.won) {
		winButton.globalAlpha = 0;
		profilePic1.globalAlpha = 0;
		profilePic1.color = "Line_Battle_Dead_Player";
		profilePic2.globalAlpha = 0;
		profilePic2.color = "Line_Battle_Dead_Player";
		winText.globalAlpha = 0;
		winText.name = "";
		}
		if (LBPlayer1Collision.won || LBPlayer2Collision.won) {
			if (winButton.globalAlpha == 1) {
				if (cursor.crashWith(winButton) && pressed) {
				resetGame();
				}
			}
		}
	}
}

function deadCheck() {
	if (gamemode == 2) {
		if (!LBPlayer1Collision.won || !LBPlayer2Collision.won) {
			if (LBPlayer1Collision.dead) {
			LBPlayer1Collision.directionSwitch = 0;
			LBPlayer2Collision.directionSwitch = 0;
			LBPlayer1Collision.angle = 0;
			LBPlayer2Collision.angle = 0;
			LBPlayer1ControlsUp();
			LBPlayer2ControlsUp();
				if (LBPlayer1Collision._bullets.length == 0 && LBPlayer2Collision._bullets.length == 0) {
				resetGame();
				}
			LBPlayer1.color = "Line_Battle_Dead_Player";
				for (let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
				LBPlayer1Collision._bullets[i].color = "grey";
				}
			}
			if (LBPlayer2Collision.dead) {
			LBPlayer1Collision.directionSwitch = 0;
			LBPlayer2Collision.directionSwitch = 0;
			LBPlayer1Collision.angle = 0;
			LBPlayer2Collision.angle = 0;
			LBPlayer1ControlsUp();
			LBPlayer2ControlsUp();
				if (LBPlayer1Collision._bullets.length == 0 && LBPlayer2Collision._bullets.length == 0) {
				resetGame();
				}
			LBPlayer2.color = "Line_Battle_Dead_Player";
				for (let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
				LBPlayer2Collision._bullets[i].color = "grey";
				}
			}
		}
		if (!LBPlayer1Collision.dead) {
		LBPlayer1.color = "Line_Battle_Player_1";
			for (let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
			LBPlayer1Collision._bullets[i].color = "darkblue";
			}
		}
		if (!LBPlayer2Collision.dead) {
		LBPlayer2.color = "Line_Battle_Player_2";
			for (let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
			LBPlayer2Collision._bullets[i].color = "darkred";
			}
		}
	}
}

//player on player collision
function playerCollision() {
	if (gamemode == 2) {
		if (LBPlayer1Collision.dead == false && LBPlayer2Collision.dead == false) {
			if(LBPlayer1Collision.circleCrashWith(LBPlayer2Collision)){
				if(LBPlayer1Collision.x < LBPlayer2Collision.x){
				LBPlayer1Collision.x = LBPlayer1Collision.x - 1;
				LBPlayer2Collision.x = LBPlayer2Collision.x + 1;
				}else 
				if(LBPlayer1Collision.x > LBPlayer2Collision.x){
				LBPlayer1Collision.x = LBPlayer1Collision.x + 1;
				LBPlayer2Collision.x = LBPlayer2Collision.x - 1;
				}
				if(LBPlayer1Collision.y < LBPlayer2Collision.y){
				LBPlayer1Collision.y = LBPlayer1Collision.y - 1;
				LBPlayer2Collision.y = LBPlayer2Collision.y + 1;
				}else 
				if(LBPlayer1Collision.y > LBPlayer2Collision.y){
				LBPlayer1Collision.y = LBPlayer1Collision.y + 1;
				LBPlayer2Collision.y = LBPlayer2Collision.y - 1;
				}
			}
		}
	}
}

//player on bullet collision
function bulletCollision() {
	if (gamemode == 2) {
		if (LBPlayer1Collision.dead == false) {
			if (LBPlayer2Collision.dead == false) {
				for (let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
					if (LBPlayer1Collision.circleCrashWith(LBPlayer2Collision._bullets[i])) {
						if (ChaosMode == true) {
							if(LBPlayer1Collision.x < LBPlayer2Collision._bullets[i].x){
							LBPlayer1Collision.x = LBPlayer1Collision.x - 1;
							}
							else if(LBPlayer1Collision.x > LBPlayer2Collision._bullets[i].x){
							LBPlayer1Collision.x = LBPlayer1Collision.x + 1;
							}
							if(LBPlayer1Collision.y < LBPlayer2Collision._bullets[i].y){
							LBPlayer1Collision.y = LBPlayer1Collision.y + 1;
							}
							else if(LBPlayer1Collision.y > LBPlayer2Collision._bullets[i].y){
							LBPlayer1Collision.y = LBPlayer1Collision.y - 1;
							}
						}
					LBPlayer2Collision._bullets.splice(i, 1);
						if (!LBPlayer1Collision.won && !LBPlayer2Collision.won) {
							if (ChaosMode == false) {
								if (LBPlayer1Collision.dead == false) {
								LBPlayer2Collision.points++;
								}
							LBPlayer1Collision.dead = true;
							}
						}
					}
				}
				for (let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
					if (LBPlayer2Collision.circleCrashWith(LBPlayer1Collision._bullets[i])) {
						if (ChaosMode == true) {
							if(LBPlayer2Collision.x < LBPlayer1Collision._bullets[i].x){
							LBPlayer2Collision.x = LBPlayer2Collision.x - 1;
							}
							else if(LBPlayer2Collision.x > LBPlayer1Collision._bullets[i].x){
							LBPlayer2Collision.x = LBPlayer2Collision.x + 1;
							}
							if(LBPlayer2Collision.y < LBPlayer1Collision._bullets[i].y){
							LBPlayer2Collision.y = LBPlayer2Collision.y + 1;
							}
							else if(LBPlayer2Collision.y > LBPlayer1Collision._bullets[i].y){
							LBPlayer2Collision.y = LBPlayer2Collision.y - 1;
							}
						}
					LBPlayer1Collision._bullets.splice(i, 1);
						if (!LBPlayer1Collision.won && !LBPlayer2Collision.won) {
							if (ChaosMode == false) {
								if (LBPlayer2Collision.dead == false) {
								LBPlayer1Collision.points++;
								}
							LBPlayer2Collision.dead = true;
							}
						}
					}
				}
			}
		}
	}
}

function objectManipulation() {
	if (gamemode == 2) {
		for(let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
			if (LBPlayer1Collision._bullets[i].timeAlive >= TailLength) {
			LBPlayer1Collision._bullets.shift();
			}
			if (LBPlayer1Collision._bullets[i+1] != undefined) {
				if (LBPlayer1Collision._bullets[i].retunDistance(LBPlayer1Collision._bullets[i+1]) <= TailFullness) {
				LBPlayer1Collision._bullets.splice(i, 1);
				}
			}
		}
		for(let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
			if (LBPlayer2Collision._bullets[i].timeAlive >= TailLength) {
			LBPlayer2Collision._bullets.shift();
			}
			if (LBPlayer2Collision._bullets[i+1] != undefined) {
				if (LBPlayer2Collision._bullets[i].retunDistance(LBPlayer2Collision._bullets[i+1]) <= TailFullness) {
				LBPlayer2Collision._bullets.splice(i, 1);
				}
			}
		}
	}
	for (let i = 0; i < mainObjectArray.length; i++) {
		//set player image position/rotation to the player collision circle
		if (gamemode == 2) {
			if (mainObjectArray[i].name == "Player1") {
			mainObjectArray[i].x = LBPlayer1Collision.x;
			mainObjectArray[i].y = LBPlayer1Collision.y;
				if (!focusLight) {
					if (mainObjectArray[i].angleDegrees != (LBPlayer1Collision.angleDegrees-1.57079633)) {
					mainObjectArray[i].angleDegrees = (LBPlayer1Collision.angleDegrees-1.57079633);
					}
				} else {
				mainObjectArray[i].angleDegrees = (Math.atan2(mainObjectArray[i].y-focusLightPosY,mainObjectArray[i].x-focusLightPosX)-6.28318531);
				}
			}
			if (mainObjectArray[i].name == "Player2") {
			mainObjectArray[i].x = LBPlayer2Collision.x;
			mainObjectArray[i].y = LBPlayer2Collision.y;
				if (!focusLight) {
					if (mainObjectArray[i].angleDegrees != (LBPlayer2Collision.angleDegrees+1.57079633)) {
					mainObjectArray[i].angleDegrees = (LBPlayer2Collision.angleDegrees+1.57079633);
					}
				} else {
				mainObjectArray[i].angleDegrees = (Math.atan2(mainObjectArray[i].y-focusLightPosY,mainObjectArray[i].x-focusLightPosX)-6.28318531);
				}
			}
		}
		//stop moving players
		if (stopControls == false) {
			if (gamemode == 2) {
				if (mainObjectArray[i].name == "Player1Coll") {	
					if (mainObjectArray[i].scored || mainObjectArray[i].dead) {
					stopControls = true;
					}
				}
				if (mainObjectArray[i].name == "Player2Coll") {	
					if (mainObjectArray[i].scored || mainObjectArray[i].dead) {
					stopControls = true;
					}
				}
			}
		}
		//set players speed/rotation
		if (stopControls == false) {
			if (gamemode == 2) {
				if (LBPlayer1Collision.dead == false && LBPlayer2Collision.dead == false) {
					if (mainObjectArray[i].name == "Player1Coll") {
					mainObjectArray[i].speed = -LBPlayerSpeed;
					mainObjectArray[i].shoot();
					}
					if (mainObjectArray[i].name == "Player2Coll") {
					mainObjectArray[i].speed = LBPlayerSpeed;
					mainObjectArray[i].shoot();
					}
				} else {
					if (mainObjectArray[i].name == "Player1Coll") {
					mainObjectArray[i].speed = 0;
					}
					if (mainObjectArray[i].name == "Player2Coll") {
					mainObjectArray[i].speed = 0;
					}
				}
			}
		} else {
			if (gamemode == 2) {
				if (mainObjectArray[i].name == "Player1Coll") {
				mainObjectArray[i].speed = 0;
				}
				if (mainObjectArray[i].name == "Player2Coll") {
				mainObjectArray[i].speed = 0;
				}
			}
		}
		//map edge teleport
		if (gamemode == 1) {
			
		}
		if (gamemode == 2) {
			if (LBPlayer1Collision.dead == false && LBPlayer2Collision.dead == false) {
				if (mainObjectArray[i].name == "Player1Coll") {
					if (mainObjectArray[i].x <= 0) {
					mainObjectArray[i].x = 1280;
					} else
					if (mainObjectArray[i].x >= 1280) {
					mainObjectArray[i].x = 0;
					}
					if (mainObjectArray[i].y <= 0) {
					mainObjectArray[i].y = 720;
					} else
					if (mainObjectArray[i].y >= 720) {
					mainObjectArray[i].y = 0;
					}
				}
				if (mainObjectArray[i].name == "Player2Coll") {
					if (mainObjectArray[i].x <= 0) {
					mainObjectArray[i].x = 1280;
					} else
					if (mainObjectArray[i].x >= 1280) {
					mainObjectArray[i].x = 0;
					}
					if (mainObjectArray[i].y <= 0) {
					mainObjectArray[i].y = 720;
					} else
					if (mainObjectArray[i].y >= 720) {
					mainObjectArray[i].y = 0;
					}
				}
			}
		}
		//cursor/debug shit
		if (mainObjectArray[i].name == "cursor") {
			//show cursor collision box when in debug mode
			if (debug) {
			mainObjectArray[i].globalAlpha = 1;
				if (pressed) {
				mainObjectArray[i].color = "green";
				} else {
				mainObjectArray[i].color = "red";
				}
			} else {
			mainObjectArray[i].globalAlpha = 0;
			}
		}
		//show debug text when in debug mode
		if (debug) {
		
		} else {
		
		}
	}
}

//object renderer
function renderer() {
	for (let i = 0; i < mainObjectArray.length; i++) {
		mainObjectArray[i].update();
		//bullet render
		if (mainObjectArray[i].name == "Player1Coll" || mainObjectArray[i].name == "Player2Coll") {
			var object = mainObjectArray[i]
			for (let v = 0; v < object._bullets.length; v++) {
			object._bullets[v].update();
			object._bullets[v].newPos();
			}
		}
		if (mainObjectArray[i].dead == false) {
		mainObjectArray[i].newPos();
		}
	}
}

//Controls scaler
function scaleControls() {
	if (gamemode == 0 || isLoaded == false) {
		if (menus == 0) {
		mainTitle.style.transform = "scale("+(1*scaleFillNativeWidth).toString()+","+(1*scaleFillNativeHeight).toString()+")"; 
		mainTitle.style.fontSize = (50*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		tankWarBttn.style.width = (200*scaleFillNativeWidth) + "px";
		tankWarBttn.style.height = (90*scaleFillNativeHeight) + "px";
		lineBattleBttn.style.width = (200*scaleFillNativeWidth) + "px";
		lineBattleBttn.style.height = (90*scaleFillNativeHeight) + "px";
		settingsBttn.style.width = (200*scaleFillNativeWidth) + "px";
		settingsBttn.style.height = (90*scaleFillNativeHeight) + "px";
		tankWarBttn.style.top = (20*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)).toString()+"%";
		tankWarBttn.style.left = (deviceWidth/2-parseInt(tankWarBttn.style.width.replace("px",""))/2).toString()+"px";
		tankWarBttn.style.fontSize = (40*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		lineBattleBttn.style.top = (35*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)).toString()+"%";
		lineBattleBttn.style.left = (deviceWidth/2-parseInt(lineBattleBttn.style.width.replace("px",""))/2).toString()+"px";
		lineBattleBttn.style.fontSize = (40*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		settingsBttn.style.top = (60*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)).toString()+"%";
		settingsBttn.style.left = (deviceWidth/2-parseInt(settingsBttn.style.width.replace("px",""))/2).toString()+"px";
		settingsBttn.style.fontSize = (40*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
	}
	if (gamemode == 1 || gamemode == 2 || isLoaded == false) {
		if (player1Controls == 0 || player1Controls == 2) {
		player1Bttn.style.width = (100*scaleFillNativeWidth) + "px";
		player1Bttn.style.height = (70*scaleFillNativeHeight) + "px";
		player1Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
		if (player2Controls == 0 || player2Controls == 2) {
		player2Bttn.style.width = player1Bttn.style.width;
		player2Bttn.style.height = player1Bttn.style.height;
		player2Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
	}
	if (gamemode == 1 || isLoaded == false) {
		if (player3Controls == 0 || player3Controls == 2) {
		player3Bttn.style.width = player1Bttn.style.width;
		player3Bttn.style.height = player1Bttn.style.height;
		player3Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
		if (player4Controls == 0 || player4Controls == 2) {
		player4Bttn.style.width = player1Bttn.style.width;
		player4Bttn.style.height = player1Bttn.style.height;
		player4Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
	}
}

//Swaps out control options
var controlsLoad = false;
function controlsSwapper() {
	/*if (gamemode == 1) {
		if (player1Controls == 0 || player1Controls == 2) {
		player1Bttn.innerHTML = TWPlayer1Collision.points;
		}
		if (player2Controls == 0 || player2Controls == 2) {
		player2Bttn.innerHTML = TWPlayer2Collision.points;
		}
		if (players >= 3) {
			if (player3Controls == 0 || player3Controls == 2) {
			player3Bttn.innerHTML = TWPlayer3Collision.points;
			}
		}
		if (players == 4) {
			if (player4Controls == 0 || player4Controls == 2) {
			player4Bttn.innerHTML = TWPlayer4Collision.points;
			}
		}
	}*/
	if (gamemode == 2) {
		if (player1Controls == 0 || player1Controls == 2) {
		player1Bttn.innerHTML = LBPlayer1Collision.points;
		}
		if (player2Controls == 0 || player2Controls == 2) {
		player2Bttn.innerHTML = LBPlayer2Collision.points;
		}
	}
	if (gamemode == 0 && controlsLoad == true) {
	player1Bttn.style.display = "none";
	player2Bttn.style.display = "none";
	player3Bttn.style.display = "none";
	player4Bttn.style.display = "none";
	pause = false;
	controlsLoad = false;
	}
	if (gamemode == 0) {
		UIScaleSlider.style.display = "initial";
		if (pause == false) {
			if (menus == 0) {
			mainMenu.style.display = "initial";
			} else {
			mainMenu.style.display = "none";	
			}
		} else {
		mainMenu.style.display = "none";
		}
	}
	if (gamemode == 0 || pause == true) {
			if (scaleFillNativeWidth != ((deviceWidth / nativeWidth)+UIScale.value) || scaleFillNativeHeight != ((deviceHeight / nativeHeight)+UIScale.value)) {
			resizeHandler();
			}
		UIScaleNumber = UIScale.value;
	}
	if (gamemode != 0) {
	mainMenu.style.display = "none";
	UIScaleSlider.style.display = "none";
	}
	if (gamemode == 1 && controlsLoad == false) {
		if (players >= 2) {
			if (player1Controls == 0 || player1Controls == 2) {
			player1Bttn.style.display = "initial";
			} else {
			player1Bttn.style.display = "none";
			}
			if (player2Controls == 0 || player2Controls == 2) {
			player2Bttn.style.display = "initial";
			} else {
			player2Bttn.style.display = "none";
			}
		}
		if (players >= 3) {
			if (player3Controls == 0 || player3Controls == 2) {
			player3Bttn.style.display = "initial";
			} else {
			player3Bttn.style.display = "none";
			}
		}
		if (players == 4) {
			if (player4Controls == 0 || player4Controls == 2) {
			player4Bttn.style.display = "initial";
			} else {
			player4Bttn.style.display = "none";
			}
		}
	controlsLoad = true;
	}
	if (gamemode == 2 && controlsLoad == false) {
		if (players > 2) {
			players = 2;
		}
		if (players >= 2) {
			if (player1Controls == 0 || player1Controls == 2) {
			player1Bttn.style.display = "initial";
			} else {
			player1Bttn.style.display = "none";
			}
			if (player2Controls == 0 || player2Controls == 2) {
			player2Bttn.style.display = "initial";
			} else {
			player2Bttn.style.display = "none";
			}
		}
	player3Bttn.style.display = "none";
	player4Bttn.style.display = "none";
	controlsLoad = true;
	}
}

//gets mouse info for the cursor
function getMouseInfo(data, XorY) {
this.data = data;
this.XorY = XorY;
	switch (this.XorY) {
	case "x": 
	return (this.data/scaleWidth);
	break;
	case "y": 
	return (this.data/scaleHeight);
	break;
	}
}

//event listeners
var pressed = false;
window.addEventListener("mousemove", function(event) {
	if (isLoaded == true) {
	mousePos[0] = getMouseInfo(event.clientX, "x");
	mousePos[1] = getMouseInfo(event.clientY, "y");
	}
});
document.onmousedown = function(event){
mouse_button = event.button;
	if (event.button == 0) {
	pressed = true;
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

window.addEventListener("touchstart", function(event) {
pressed = true;
	if (isLoaded == true) {
	mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
	mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
	}
});
window.addEventListener("touchend", function(event) {
pressed = false;
});
window.addEventListener("touchmove", function(event) {
	if (isLoaded == true) {
	mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
	mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
	}
});

//Line Battle Controls
//Player 1
function LBPlayer1ControlsDown(rotLockOff) {
this.rotLockOff = rotLockOff;
	if (gamemode == 2) {
		if (LBPlayer1Collision.dead == false && LBPlayer2Collision.dead == false) {
			if (LBPlayer1Collision.directionSwitch == 0) {
			LBPlayer1Collision.angle += LBPlayerRotateSpeed; 
			}
			if (LBPlayer1Collision.directionSwitch == 1) {
			LBPlayer1Collision.angle += -LBPlayerRotateSpeed; 
			}
			if (this.rotLockOff == false || this.rotLockOff == undefined) {
				if (LBPlayer1Collision.rotLock == 0) {
				LBPlayer1Collision.directionSwitch += 1;
				LBPlayer1Collision.rotLock = 1;
				}
			}
		}
	}
}
function LBPlayer1ControlsUp() {
if (gamemode == 2) {
LBPlayer1Collision.rotLock = 0;
StartRotation1 = false;
}
}
//Player 2
function LBPlayer2ControlsDown(rotLockOff) {
this.rotLockOff = rotLockOff;
	if (gamemode == 2) {
		if (LBPlayer1Collision.dead == false && LBPlayer2Collision.dead == false) {
			if (LBPlayer2Collision.directionSwitch == 0) {
			LBPlayer2Collision.angle += LBPlayerRotateSpeed; 
			}
			if (LBPlayer2Collision.directionSwitch == 1) {
			LBPlayer2Collision.angle += -LBPlayerRotateSpeed; 
			}
			if (this.rotLockOff == false || this.rotLockOff == undefined) {
				if (LBPlayer2Collision.rotLock == 0) {
				LBPlayer2Collision.directionSwitch += 1;
				LBPlayer2Collision.rotLock = 1;
				}
			}
		}
	}
}
function LBPlayer2ControlsUp() {
if (gamemode == 2) {
LBPlayer2Collision.rotLock = 0;
StartRotation2 = false;
}
}

function controlReset() {
	if (gamemode == 0) {
	LBPlayer1Collision = new component("Player1Coll", 25, 50, "blue", 50, 120, "cir");
	LBPlayer1Collision.globalAlpha = 0;
	LBPlayer1 = new component("Player1", 50, 50, "Line_Battle_Player_1", 50, 120, "img");
	LBPlayer2Collision = new component("Player2Coll", 25, 50, "red", 1230, 600, "cir");
	LBPlayer2Collision.globalAlpha = 0;
	LBPlayer2 = new component("Player2", 50, 50, "Line_Battle_Player_2", 1230, 600, "img");
	}
}

//button events
//Player 1
player1Bttn.onmousedown = function(event){
	if (player1Controls != 2) {
	StartRotation1 = true;
	}
}
player1Bttn.onmouseup = function(event){
	if (player1Controls != 2) {
	LBPlayer1ControlsUp();
	}
}
player1Bttn.ontouchstart = function(event){
	if (player1Controls != 2) {
	StartRotation1 = true;
	}
}
player1Bttn.ontouchend = function(event){
	if (player1Controls != 2) {
	LBPlayer1ControlsUp();
	}
}
//Player 2
player2Bttn.onmousedown = function(event){
	if (player2Controls != 2) {
	StartRotation2 = true;
	}
}
player2Bttn.onmouseup = function(event){
	if (player2Controls != 2) {
	LBPlayer2ControlsUp();
	}
}
player2Bttn.ontouchstart = function(event){
	if (player2Controls != 2) {
	StartRotation2 = true;
	}
}
player2Bttn.ontouchend = function(event){
	if (player2Controls != 2) {
	LBPlayer2ControlsUp();
	}
}

//keyboard events
function keyDownHandler(event) {
	switch (event.key) {
		case "w":
			if (player1Controls != 2) {
			StartRotation1 = true;
			}
		break;
		case "ArrowUp": 
			if (player2Controls != 2) {
			StartRotation2 = true;
			}
		break;
		case "a":
			if (player1Controls == 2) {
			LBPlayer1Collision.directionSwitch = 1;
			StartRotation1 = true;
			}
		break;
		case "d":
			if (player1Controls == 2) {
			LBPlayer1Collision.directionSwitch = 0;
			StartRotation1 = true;
			}
		break;
		case "ArrowLeft":
			if (player2Controls == 2) {
			LBPlayer2Collision.directionSwitch = 1;
			StartRotation2 = true;
			}
		break;
		case "ArrowRight":
			if (player2Controls == 2) {
			LBPlayer2Collision.directionSwitch = 0;
			StartRotation2 = true;
			}
		break;
	}
}
function keyUpHandler(event) {
	switch (event.key) {
		case "w":
			if (player1Controls != 2) {
			LBPlayer1ControlsUp();
			}
		break;
		case "ArrowUp":
			if (player2Controls != 2) {
			LBPlayer2ControlsUp();
			}
		break;
		case "a":
			if (player1Controls == 2) {
			LBPlayer1ControlsUp();
			}
		break;
		case "d":
			if (player1Controls == 2) {
			LBPlayer1ControlsUp();
			}
		break;
		case "ArrowLeft":
			if (player2Controls == 2) {
			LBPlayer2ControlsUp();
			}
		break;
		case "ArrowRight":
			if (player2Controls == 2) {
			LBPlayer2ControlsUp();
			}
		break;
	}
}


//reset game
function resetGame() {
	if (gamemode == 2) {
		LBPlayer1Collision.angle = 0;
		LBPlayer1Collision.x = 50;
		LBPlayer1Collision.y = 120;
		LBPlayer1Collision.dead = false;
		LBPlayer2Collision.angle = 0;
		LBPlayer2Collision.x = 1230;
		LBPlayer2Collision.y = 600;
		LBPlayer2Collision.dead = false;
		if (pressed) {
			if (LBPlayer1Collision.won || LBPlayer2Collision.won) {
			LBPlayer1Collision.points = 0;
			LBPlayer1Collision._bullets.length = 0;
			LBPlayer1Collision.won = false;
			LBPlayer2Collision.points = 0;
			LBPlayer2Collision._bullets.length = 0;
			LBPlayer2Collision.won = false;
			}
		}
	}
}