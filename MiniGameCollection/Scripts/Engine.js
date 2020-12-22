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
var pauseBttn = document.getElementById('pauseBttn');

//Global game varibles
var UIScaleNumber = 0;
var ctx = canvas.getContext("2d");
var isLoaded = false;
var debug = false;
var pause = false;
var menus = 0; //0- MAIN MENU | 1- TANK WAR MENU | 2- LINE BATTLE MENU | 3- OPTIONS MENU
var players = 2;
var teams = false;
var player1Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player2Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player3Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var player4Controls = 0; //0- OG CONTROLS | 1- JOYSTICK CONTROLS | 2- DIRECTIONAL KEYBOARD CONTROLS ONLY
var gamemode = 0; //0- NO GAME | 1- TANK WAR | 2- LINE BATTLE
var mainObjectArray = []; //Main object array
var gameObjects0 = []; //Global gameObjects
var gameObjects1 = []; //Tank War gameObjects
var gameObjects2 = []; //Line Battle gameObjects
var stopControls = false;
var StartRotation1 = false;
var StartRotation2 = false;


//Global line battle varibles
var Player1ButtetRadius = 5;
var Player2ButtetRadius = 5;
var LBPlayerSpeed = 3;
var LBPlayerRotateSpeed = 3;
var TailLength = 10; //max 150 | min 10
var TailFullness = 2;
var ChaosMode = false; 
var MaxPointsLB = 10; //max 100 | min 1
var focusLight = true;
var focusLightPosX = 640;
var focusLightPosY = 360;

//Global tank war varibles
var TWPlayer1Speed = 2; //number of upgrades 2 | upgrade 1- 2>3 upgrade 2- 3>4
var TWPlayer2Speed = 2;
var TWPlayer3Speed = 2;
var TWPlayer4Speed = 2;
var Player1BulletSize = 5;
var Player2BulletSize = 5;
var Player3BulletSize = 5;
var Player4BulletSize = 5;
var Player1BulletRate = 40; //number of upgrades 5 | upgrade 1- 40>35 upgrade 2- 35>30 upgrade 3- 30>25 upgrade 4- 25>20 upgrade 5- 20>15
var Player2BulletRate = 40;
var Player3BulletRate = 40;
var Player4BulletRate = 40;
var Player1RotationSpeed = 1; //number of upgrades 2 | upgrade 1- 1>2 upgrade 2- 2>3
var Player2RotationSpeed = 1;
var Player3RotationSpeed = 1;
var Player4RotationSpeed = 1;
var UpgradeMenu = false;
var MaxPointsTW = 10; //max 100 | min 2

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
	switch (gamemode) {
		case 0:
			if (menus === 0 || menus === 3) {
			pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Main_Icon.ico";
			}
			if (menus === 1) {
			pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Tank_War_Icon.ico";
			}
			if (menus === 2) {
			pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Line_Battle_Icon.ico";
			}
		break;
		case 1:
		pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Tank_War_Icon.ico";
		break;
		case 2:
		pageIcon.href = "https://mark4pro.github.io/MiniGameCollection/Images/Icons/Line_Battle_Icon.ico";
		break;
	}
}

//inits everything
function init(type) {
this.type = type;
	if (this.type === 'full') {
	iconSetup();
	window.addEventListener('resize', resizeHandler);
	loadSettings();
	Setup.init();
	isLoaded = true;
	}
}

function initMain() {
//component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle, timeAlive)
//bottom
//Main gameObjects
winButton = new component("win", 410, 70, "grey", 640, 360, "rec");
winButton.globalAlpha = 0;
gameObjects0.push(winButton);
profilePic1 = new component("win", 50, 50, "Line_Battle_Dead_Player", 465, 360, "img");
profilePic1.globalAlpha = 0;
gameObjects0.push(profilePic1);
profilePic2 = new component("win", 50, 50, "Line_Battle_Dead_Player", 815, 360, "img");
profilePic2.globalAlpha = 0;
gameObjects0.push(profilePic2);
winText = new component("win", "50px", "Arial", "white", 640, 375, "text", "center");
winText.globalAlpha = 0;
gameObjects0.push(winText);
cursor = new component("cursor", 10, 10, "green", 200, 200, "rec");
gameObjects0.push(cursor);
//top
}

/**(x/target, y/positionData, positionData/repeat, repeat/startingFrame, startingFrame/numberOfFrames,
frameWidth/speed, frameHeight/numberOfFrames/startFade, numberOfFrames/speed/fadeSpeed, speed/startFade/frameToStartFade,
startFade/fadeSpeed/movingAnimationMode, fadeSpeed/frameToStartFade, frameToStartFade/movingAnimationMode, movingAnimationMode)**/
function initTW() {
//component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle, timeAlive)
//bottom
//Tank War
TWBackground1 = new component("BG1", 1280, 720, "Tank_War_Background_1", 640, 360, "img");
gameObjects1.push(TWBackground1);
TWPlayer2Collision = new component("Player2Coll", 50, 50, "red", 1230, 600, "rec");
TWPlayer2Collision.globalAlpha = 0;
gameObjects1.push(TWPlayer2Collision);
TWPlayer2 = new component("Player2", 50, 50, "Tank_War_Player_2", 1230, 600, "img");
gameObjects1.push(TWPlayer2);
TWPlayer1Collision = new component("Player1Coll", 50, 50, "blue", 50, 120, "rec");
TWPlayer1Collision.globalAlpha = 0;
gameObjects1.push(TWPlayer1Collision);
TWPlayer1 = new component("Player1", 50, 50, "Tank_War_Player_1", 50, 120, "img");
gameObjects1.push(TWPlayer1);
Tank2Explosion = new animation(TWPlayer2Collision.x, TWPlayer2Collision.y, ["Tank_War_Eplosion_1","Tank_War_Eplosion_2","Tank_War_Eplosion_3","Tank_War_Eplosion_4","Tank_War_Eplosion_5","Tank_War_Eplosion_6","Tank_War_Eplosion_7"], false, 0, [{w:45,h:45},{w:119,h:113},{w:196,h:191},{w:354,h:342},{w:345,h:333},{w:193,h:208},{w:126,h:136}], 6, 2, "both", 0.08, 3);
Tank1Explosion = new animation(TWPlayer1Collision.x, TWPlayer1Collision.y, ["Tank_War_Eplosion_1","Tank_War_Eplosion_2","Tank_War_Eplosion_3","Tank_War_Eplosion_4","Tank_War_Eplosion_5","Tank_War_Eplosion_6","Tank_War_Eplosion_7"], false, 0, [{w:45,h:45},{w:119,h:113},{w:196,h:191},{w:354,h:342},{w:345,h:333},{w:193,h:208},{w:126,h:136}], 6, 2, "both", 0.08, 3);
//upgrade menu
UGMenu = new component("UpgradeMenu", 1280, 720, "grey", 640, 360, "rec");
UGMenu.globalAlpha = 0;
gameObjects1.push(UGMenu);
UGText = new component("Upgrade Menu", "50px", "Arial", "white", 640, 50, "text", "center");
UGText.globalAlpha = 0;
gameObjects1.push(UGText);
UGTank1Points = new component("Blue's Points:", "50px", "Arial", "white", 640, 50, "text", "start");
UGTank1Points.globalAlpha = 0;
gameObjects1.push(UGTank1Points);
UGTank2Points = new component("Red's Points:", "50px", "Arial", "white", 640, 50, "text", "start");
UGTank2Points.globalAlpha = 0;
gameObjects1.push(UGTank2Points);
UGButton1 = new component("UpgradeMenu", 200, 100, "darkgrey", 640, 150, "rec");
UGButton1.globalAlpha = 0;
gameObjects1.push(UGButton1);
UGButton1Txt = new component("Speed (0/2)", "30px", "Arial", "white", 640, 160, "text", "center");
UGButton1Txt.globalAlpha = 0;
gameObjects1.push(UGButton1Txt);
UGButton2 = new component("UpgradeMenu", 200, 100, "darkgrey", 640, 282.5, "rec");
UGButton2.globalAlpha = 0;
gameObjects1.push(UGButton2);
UGButton2Txt = new component("Bullet", "30px", "Arial", "white", 640, 280, "text", "center");
UGButton2Txt.globalAlpha = 0;
gameObjects1.push(UGButton2Txt);
UGButton2_1Txt = new component("Rate (0/5)", "30px", "Arial", "white", 640, 310, "text", "center");
UGButton2_1Txt.globalAlpha = 0;
gameObjects1.push(UGButton2_1Txt);
UGButton3 = new component("UpgradeMenu", 200, 100, "darkgrey", 640, 417.5, "rec");
UGButton3.globalAlpha = 0;
gameObjects1.push(UGButton3);
UGButton3Txt = new component("Rotation", "30px", "Arial", "white", 640, 412.5, "text", "center");
UGButton3Txt.globalAlpha = 0;
gameObjects1.push(UGButton3Txt);
UGButton3_1Txt = new component("Speed (0/2)", "30px", "Arial", "white", 640, 445, "text", "center");
UGButton3_1Txt.globalAlpha = 0;
gameObjects1.push(UGButton3_1Txt);
UGButtonNext = new component("UpgradeMenu", 200, 100, "darkgrey", 640, 550, "rec");
UGButtonNext.globalAlpha = 0;
gameObjects1.push(UGButtonNext);
UGButtonNextTxt = new component("Next", "50px", "Arial", "white", 640, 565, "text", "center");
UGButtonNextTxt.globalAlpha = 0;
gameObjects1.push(UGButtonNextTxt);
UGTurnTxt = new component("Turn", "50px", "Arial", "white", 640, 680, "text", "center");
UGTurnTxt.globalAlpha = 0;
gameObjects1.push(UGTurnTxt);
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
	switch (this.type) {
		case 'Back':
			if (menus !== 0) {
			menus = 0;
			}
		break;
		case 'Leave':
		resetGame("Master");
		gamemode = 0;
		menus = 0;//delete later
		break;
		case 'Tank':
		menus = 1;
		gamemode = 1;//delete later
		scaleControls();//change later
		break;
		case 'Line':
		menus = 2;
		gamemode = 2;//delete later
		scaleControls();//change later
		break;
		case 'Settings':
		menus = 3;
		break;
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
		if (pause) {
		Setup.pause();
		}
		if (!pause) {
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
	if (this.setup === undefined || this.setup === null) {
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
this.upgradePoints = 0;
this.speedUpgrade = 0;
this.bulletRateUpgrade = 0;
this.rotateSpeedUpgrade = 0;
this.dead = false;
this.won = false;
this.scored = false;
this.setRot = false;
this.directionSwitch = 0;
this.rotLock = false;
this.speed = 0;
this.rotationSpeed = 0;
this.angle = 0;
this.pointsX = [];
this.pointsY = [];
this._bullets = [];
this._dirtTracks = [];
this.numOfTracks = 0;
this.numOfRings = 0;
this.fireTime = 0;
this.shadowColor_ = "";
this.shadowBlur_ = 0;
this.shadowOffsetX_ = 0;
this.shadowOffsetY_ = 0;
this.frameX = 0;
this.frameY = 0;
this.frameWidth = this.width;
this.frameHeight = this.height;
this._badObjs = [];
	this.returnPoints = function(type_) {
	this.type_ = type_;
		switch (this.type_) {
			case "normal":
			return this.points;
			break;
			case "roundUp":
			this.renderedPoints = Math.ceil(this.points);
			return this.renderedPoints;
			break;
			case "roundDown":
			this.renderedPoints = Math.floor(this.points);
			return this.renderedPoints;
			break;
		}
	}
	this.returnDistance = function(object) {
	this.object = object;
	var a = this.x-object.x;
	var b = this.y-object.y;
	return Math.sqrt((a*a)+(b*b));
	}
	this.update = function() {
		ctx.imageSmoothingEnabled = false;
		switch (this.type) {
			case "text":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.textAlign = this.id;
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = this.color;
			ctx.fillText(this.name, this.x, this.y);
			break;
			case "rec":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
				if (gamemode !== 1) {
				ctx.save();
				ctx.translate(this.x, this.y);
				ctx.rotate(this.angleDegrees);
				ctx.fillStyle = this.color;
				ctx.fillRect(this.width/-2, this.height/-2, this.width, this.height);
				ctx.restore();
				} else {
				this.pointsX[0]=(-this.width/2*Math.cos(this.angleDegrees)-(-this.width/2)*Math.sin(this.angleDegrees))+this.x;
				this.pointsY[0]=(-this.height/2*Math.sin(this.angleDegrees)+(-this.height/2)*Math.cos(this.angleDegrees))+this.y;
				this.pointsX[1]=(this.width/2*Math.cos(-this.angleDegrees)-this.width/2*Math.sin(-this.angleDegrees))+this.x;
				this.pointsY[1]=(-this.height/2*Math.sin(-this.angleDegrees)+(-this.height/2)*Math.cos(-this.angleDegrees))+this.y;
				this.pointsX[2]=(this.width/2*Math.cos(this.angleDegrees)-this.width/2*Math.sin(this.angleDegrees))+this.x;
				this.pointsY[2]=(this.height/2*Math.sin(this.angleDegrees)+this.height/2*Math.cos(this.angleDegrees))+this.y;
				this.pointsX[3]=(-this.width/2*Math.cos(-this.angleDegrees)-(-this.width/2)*Math.sin(-this.angleDegrees))+this.x;
				this.pointsY[3]=(this.height/2*Math.sin(-this.angleDegrees)+this.height/2*Math.cos(-this.angleDegrees))+this.y;
				ctx.beginPath();
				ctx.moveTo(this.x, this.y);//center position
				ctx.lineTo(this.pointsX[0], this.pointsY[0]);
				ctx.lineTo(this.pointsX[1], this.pointsY[1]);
				ctx.lineTo(this.pointsX[2], this.pointsY[2]);
				ctx.lineTo(this.pointsX[3], this.pointsY[3]);
				ctx.lineTo(this.pointsX[0], this.pointsY[0]);
				ctx.fillStyle = this.color;
				ctx.fill();
				}
			break;
			case "cir":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.closePath();
				if (this.name !== "bullet" && gamemode === 1) {
				ctx.lineWidth = this.lineWidth;
				ctx.strokeStyle = this.strokeStyle;
				ctx.stroke();
				}
			break;
			case "img":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angleDegrees);
			var img = document.getElementById(this.color);
			ctx.drawImage(img, this.frameX, this.frameY, this.frameWidth, this.frameHeight, this.width/-2, this.height/-2, this.width, this.height);
			ctx.restore();
			break;
		}
	}
	this.newPos = function() {
		if (this.name === "bullet") {
		this.timeAlive += 0.2;
		}
		if (gamemode === 3) {
			if (this.angleDegrees > 180) {
			this.angle = 0;
			}
			if (this.angleDegrees < 0) {
			this.angle = 180;
			}
		}
		if (gamemode !== 3) {
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
	switch (this.name) {
		case "Player1Coll":
			this.shoot = function(){
				if(!this.dead){
					if (gamemode === 1) {
					var __bullet = new component("bullet", Player1BulletSize, Player1BulletSize, "darkblue", TWPlayer1Collision.x, TWPlayer1Collision.y, "rec", "", "");
					__bullet.shadowColor_ = "white";
					__bullet.shadowBlur_ = 15;
					__bullet.angle = this.angle;
					__bullet.speed = (-TWPlayer1Speed*2);
					}
					if (gamemode === 2) {
					var __bullet = new component("bullet", 5, 5, "darkblue", LBPlayer1Collision.x, LBPlayer1Collision.y, "cir", "", "");
					}
				this._bullets.push(__bullet);
				}
			}
		break;
		case "Player2Coll":
			this.shoot = function(){
				if(!this.dead){
					if (gamemode === 1) {
					var __bullet = new component("bullet", Player2BulletSize, Player2BulletSize, "darkred", TWPlayer2Collision.x, TWPlayer2Collision.y, "rec", "", "");
					__bullet.shadowColor_ = "white";
					__bullet.shadowBlur_ = 15;
					__bullet.angle = (this.angle + 180);
					__bullet.speed = (-TWPlayer2Speed*2)
					}
					if (gamemode === 2) {
					var __bullet = new component("bullet", 5, 5, "darkred", LBPlayer2Collision.x, LBPlayer2Collision.y, "cir", "", "");
					}
				this._bullets.push(__bullet);
				}
			}
		break;
		case "Player3Coll":
			this.shoot = function(){
				if(!this.dead){
				/*var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank2Bull", Tank2.x, Tank2.y, "Bull", "Tank2");
				this._bullets.push(__bullet);*/
				}
			}
		break;
		case "Player4Coll":
			this.shoot = function(){
				if(!this.dead){
				/*var __bullet = new component("lightblue", this.bulletSize, this.bulletSize, "Tank2Bull", Tank2.x, Tank2.y, "Bull", "Tank2");
				this._bullets.push(__bullet);*/
				}
			}
		break;
	}
	this.dirtTracks = function(){
		if(!this.dead){
			if (gamemode === 1) {
				if (this.name === "Player1Coll") {
					if (StartRotation1) {
					var __dirt = new component("dirt", 50, 50, "Tank_War_Dirt_Tracks", this.x, this.y, "img");
					this.numOfTracks++;
					__dirt.angle = this.angle;
					} else {
					var __dirt = new component("dirtRing", 50, 50, "Tank_War_Dirt_Ring", this.x, this.y, "img");
					this.numOfRings++;
					}
				}
				if (this.name === "Player2Coll") {
					if (StartRotation2) {
					var __dirt = new component("dirt", 50, 50, "Tank_War_Dirt_Tracks", this.x, this.y, "img");
					this.numOfTracks++;
					__dirt.angle = this.angle;
					} else {
					var __dirt = new component("dirtRing", 50, 50, "Tank_War_Dirt_Ring", this.x, this.y, "img");
					this.numOfRings++;
					}
				}
			}
		this._dirtTracks.push(__dirt);
		}
	}
	this.spawn = function(){
		if(!this.dead){
		var __badObj = new component("badObj", 5, 5, "#A30F0F", Math.floor((Math.random()*1280-20)+20), Math.floor((Math.random()*720-1)+1), "cir");
		this._badObjs.push(__badObj);
		}
	}
	//circle vs. circle
	this.circleCrashWith = function(otherobj) {
	var distance_x = (this.x - otherobj.x);
	var distance_y = (this.y - otherobj.y);
	var rSum = (this.radius + otherobj.radius);
	var result1 = (Math.pow(distance_x, 2) + Math.pow(distance_y, 2));
	var result2 = Math.pow(rSum, 2);
		if (result1 <= result2) { 
		return true;
		} else {
		return false;
		}
	}
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
	}
	//circle vs. rectangle
	this.mixCrashWith = function(otherobj) {
		if (this.type === "cir") {
		var widthHalf = (otherobj.width/2);
		var heightHalf = (otherobj.height/2);
		var distance_x = Math.abs(this.x - otherobj.x - widthHalf);
		var distance_y = Math.abs(this.y - otherobj.y - heightHalf);
		var result1 = (widthHalf + this.radius);
		var result2 = (heightHalf + this.radius);
		var dx = (distance_x - widthHalf);
		var dy = (distance_y - heightHalf);
		var result3 = (Math.pow(dx, 2) + Math.pow(dy, 2));
		var result4 = Math.pow(this.radius, 2);
			if (distance_x > result1 || distance_y > result2) {
			return false;
			}
			if (distance_x <= widthHalf && distance_y <= heightHalf) {
			return true;
			} 
			if (result3 <= result4) {
			return true;
			}
		} else {
		var widthHalf = this.width/2;
		var heightHalf = this.height/2;
		var distance_x = Math.abs(otherobj.x - this.x - widthHalf);
		var distance_y = Math.abs(otherobj.y - this.y - heightHalf);
		var result1 = (widthHalf + otherobj.radius);
		var result2 = (heightHalf + otherobj.radius);
		var dx = (distance_x - widthHalf);
		var dy = (distance_y - heightHalf);
		var result3 = (Math.pow(dx, 2) + Math.pow(dy, 2));
		var result4 = Math.pow(otherobj.radius, 2);
			if (distance_x > result1 || distance_y > result2) {
			return false;
			}
			if (distance_x <= widthHalf && distance_y <= heightHalf) {
			return true;
			} 
			if (result3 <= result4) {
			return true;
			}
		}
	}
}

/**(x/target, y/positionData, positionData/repeat, repeat/startingFrame, startingFrame/numberOfFrames,
frameWidth/speed, frameHeight/numberOfFrames/startFade, numberOfFrames/speed/fadeSpeed,
speed/startFade/frameToStartFade, startFade/fadeSpeed/movingAnimationMode, fadeSpeed/frameToStartFade,
frameToStartFade/movingAnimationMode, movingAnimationMode)
component(name, width, height, color, x, y, type, id, lineWidth, strokeStyle)**/
function animation(x, y, positionData, repeat, startingFrame, frameWidth, frameHeight, numberOfFrames, speed, startFade, fadeSpeed, frameToStartFade, movingAnimationMode) {
//enternal vars
this.x = x;
this.y = y;
this.positionData = positionData;
this.repeat = repeat;
this.startingFrame = startingFrame;
this.frameWidth = frameWidth;
this.frameHeight = frameHeight;
this.numberOfFrames = numberOfFrames;
this.speed = speed;
this.startFade = startFade;
this.fadeSpeed = fadeSpeed;
this.frameToStartFade = frameToStartFade;
this.movingAnimationMode = movingAnimationMode;
//internal vars
this.targetMode = false;
this.dataMode = false;
this.sizeDataMode = false;
this.time = 0;
this.initialize = false;
this.setup = false;
this.startingGlobalAlpha = 1;
this.done = false;
	if (typeof this.x === "object") {
	this.targetMode = true;
		if (this.frameHeight === "fadeIn" || this.frameHeight === "both") {
		this.startingGlobalAlpha = 0;
		this.x.globalAlpha = this.startingGlobalAlpha;
		}
		if (this.frameHeight === "fadeOut") {
		this.startingGlobalAlpha = 1;
		this.x.globalAlpha = this.startingGlobalAlpha;
		}
	} else {
	this.targetMode = false;
		if (typeof this.frameWidth === "object") {
		this.sizeDataMode = true;
		this.animationObj = new component("animation", this.frameWidth[0].w, this.frameWidth[0].h, this.positionData[0], this.x, this.y, "img");
			if (this.speed === "fadeIn" || this.speed === "both") {
			this.startingGlobalAlpha = 0;
			}
			if (this.speed === "fadeOut") {
			this.startingGlobalAlpha = 1;
			}
		this.animationObj.globalAlpha = this.startingGlobalAlpha;
			if (gamemode === 1) {
			gameObjects1.push(this.animationObj);
			}
			if (gamemode === 2) {
			gameObjects2.push(this.animationObj);
			}
			if (gamemode === 3) {
			gameObjects3.push(this.animationObj);
			}
		} else {
		this.sizeDataMode = false;
		this.animationObj = new component("animation", this.frameWidth, this.frameHeight, this.positionData[0], this.x, this.y, "img");
			if (this.startFade === "fadeIn" || this.startFade === "both") {
			this.startingGlobalAlpha = 0;
			}
			if (this.startFade === "fadeOut") {
			this.startingGlobalAlpha = 1;
			}
		this.animationObj.globalAlpha = this.startingGlobalAlpha;
			if (gamemode === 1) {
			gameObjects1.push(this.animationObj);
			}
			if (gamemode === 2) {
			gameObjects2.push(this.animationObj);
			}
			if (gamemode === 3) {
			gameObjects3.push(this.animationObj);
			}
		}
	}
//logic
	this.init = function() {
		if (typeof this.y[0] === "object") {
		this.dataMode = true;
		} else {
		this.dataMode = false;
		}
		if (!this.targetMode) {
		this.currentFrame = this.startingFrame;
		} else {
		this.currentFrame = this.repeat;
		}
	}
	this.resetANIMATION = function() {
		this.done = false;
		this.time = 0;
		if (this.targetMode) {
		this.currentFrame = this.repeat;
		this.x.globalAlpha = this.startingGlobalAlpha;
		} else {
		this.currentFrame = this.startingFrame;
		this.animationObj.globalAlpha = this.startingGlobalAlpha;
		}
	}
	this.update = function() {
		if (!this.initialize) {
		this.init();
		this.initialize = true;
		} else {
			if (this.targetMode) {
				if (this.currentFrame < this.startingFrame) {
				this.time += this.frameWidth;
				}
				if (this.time >= 10) {
					if (this.currentFrame !== this.startingFrame) {
					this.currentFrame++;;
					}
				this.time = 0;
				}
				if (debug) {
				console.log("Current Frame: "+ this.currentFrame +" Time: "+ this.time +" Done: "+ this.done +" Global Alpha: "+ this.x.globalAlpha +" Upgrade Menu Active: "+ UpgradeMenu +" Upgrade Menu Global Alpha: "+ UGMenu.globalAlpha);
				}
				if (this.currentFrame >= this.startingFrame && this.positionData) {
				this.resetANIMATION();
				}
				if (this.currentFrame >= this.startingFrame && !this.positionData) {
				this.done = true;
				}
				if (this.frameHeight === "fadeIn" && this.currentFrame >= this.numberOfFrames) {
						if (this.x.globalAlpha < 1) {
						this.x.globalAlpha += this.startFade;
						}
						if (this.x.globalAlpha >= 1) {
						this.x.globalAlpha = 1;
						}
					}
					if (this.frameHeight === "fadeOut" && this.currentFrame >= this.numberOfFrames) {
						if (this.x.globalAlpha > 0) {
						this.x.globalAlpha -= this.startFade;
						}
						if (this.x.globalAlpha <= 0) {
						this.x.globalAlpha = 0;
						}
					}
					if (this.frameHeight === "both") {
						if (this.currentFrame < this.numberOfFrames) {
							if (this.x.globalAlpha < 1) {
							this.x.globalAlpha += this.startFade;
							}
							if (this.x.globalAlpha >= 1) {
							this.x.globalAlpha = 1;
							}
						}
						if (this.currentFrame >= this.numberOfFrames) {
							if (this.x.globalAlpha > 0) {
							this.x.globalAlpha -= this.startFade;
							}
							if (this.x.globalAlpha <= 0) {
							this.x.globalAlpha = 0;
							}
						}
					}
				if (this.dataMode) {
				this.x.frameX = this.y[this.currentFrame].x;
				this.x.frameY = this.y[this.currentFrame].y;
				} else {
				this.x.color = this.y[this.currentFrame];
				}
			} else {
				if (this.sizeDataMode) {
					if (this.currentFrame < this.frameHeight) {
					this.time += this.numberOfFrames;
					}
					if (this.time >= 10) {
						if (this.currentFrame !== this.frameHeight) {
						this.currentFrame++;;
						console.log("test " + this.animationObj.globalAlpha);
						}
					this.time = 0;
					}
					if (debug) {
					console.log("Current Frame: "+ this.currentFrame +" Time: "+ this.time +" Done: "+ this.done +" Global Alpha: "+ this.animationObj.globalAlpha +" Upgrade Menu Active: "+ UpgradeMenu +" Upgrade Menu Global Alpha: "+ UGMenu.globalAlpha);
					}
					if (this.currentFrame >= this.frameHeight && this.repeat) {
					this.resetANIMATION();
					}
					if (this.currentFrame >= this.frameHeight && !this.repeat) {
					this.done = true;
					}
					if (this.speed === "fadeIn" && this.currentFrame >= this.fadeSpeed) {
						if (this.animationObj.globalAlpha < 1) {
						this.animationObj.globalAlpha += this.startFade;
						}
						if (this.animationObj.globalAlpha >= 1) {
						this.animationObj.globalAlpha = 1;
						}
					}
					if (this.speed === "fadeOut" && this.currentFrame >= this.fadeSpeed) {
						if (this.animationObj.globalAlpha > 0) {
						this.animationObj.globalAlpha -= this.startFade;
						}
						if (this.animationObj.globalAlpha <= 0) {
						this.animationObj.globalAlpha = 0;
						}
					}
					if (this.speed === "both") {
						if (this.currentFrame < this.fadeSpeed) {
							if (this.animationObj.globalAlpha < 1) {
							this.animationObj.globalAlpha += this.startFade;
							}
							if (this.animationObj.globalAlpha >= 1) {
							this.animationObj.globalAlpha = 1;
							}
						}
						if (this.currentFrame >= this.fadeSpeed) {
							if (this.animationObj.globalAlpha > 0) {
							this.animationObj.globalAlpha -= this.startFade;
							}
							if (this.animationObj.globalAlpha <= 0) {
							this.animationObj.globalAlpha = 0;
							}
						}
					}
					this.animationObj.width = this.frameWidth[this.currentFrame].w;
					this.animationObj.height = this.frameWidth[this.currentFrame].h;
					this.animationObj.frameWidth = this.frameWidth[this.currentFrame].w;
					this.animationObj.frameHeight = this.frameWidth[this.currentFrame].h;
					this.animationObj.color = this.positionData[this.currentFrame];
				} else {
					if (this.currentFrame < this.numberOfFrames) {
					this.time += this.speed;
					}
					if (this.time >= 10) {
						if (this.currentFrame !== this.numberOfFrames) {
						this.currentFrame++;;
						}
					this.time = 0;
					}
					if (debug) {
					console.log("Current Frame: "+ this.currentFrame +" Time: "+ this.time +" Done: "+ this.done +" Global Alpha: "+ this.animationObj.globalAlpha +" Upgrade Menu Active: "+ UpgradeMenu +" Upgrade Menu Global Alpha: "+ UGMenu.globalAlpha);
					}
					if (this.currentFrame >= this.numberOfFrames && this.repeat) {
					this.resetANIMATION();
					}
					if (this.currentFrame >= this.numberOfFrames && !this.repeat) {
					this.done = true;
					}
					if (this.startFade === "fadeIn" && this.currentFrame >= this.frameToStartFade) {
						if (this.animationObj.globalAlpha < 1) {
						this.animationObj.globalAlpha += this.fadeSpeed;
						}
						if (this.animationObj.globalAlpha >= 1) {
						this.animationObj.globalAlpha = 1;
						}
					}
					if (this.startFade === "fadeOut" && this.currentFrame >= this.frameToStartFade) {
						if (this.animationObj.globalAlpha > 0) {
						this.animationObj.globalAlpha -= this.fadeSpeed;
						}
						if (this.animationObj.globalAlpha <= 0) {
						this.animationObj.globalAlpha = 0;
						}
					}
					if (this.startFade === "both") {
						if (this.currentFrame < this.frameToStartFade) {
							if (this.animationObj.globalAlpha < 1) {
							this.animationObj.globalAlpha += this.fadeSpeed;
							}
							if (this.animationObj.globalAlpha >= 1) {
							this.animationObj.globalAlpha = 1;
							}
						}
						if (this.currentFrame >= this.frameToStartFade) {
							if (this.animationObj.globalAlpha > 0) {
							this.animationObj.globalAlpha -= this.fadeSpeed;
							}
							if (this.animationObj.globalAlpha <= 0) {
							this.animationObj.globalAlpha = 0;
							}
						}
					}
					this.animationObj.color = this.positionData[this.currentFrame];	
				}
			}
		}
	}
}

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

//main update loop
var arrayLoad = false;
function mainUpdateLoop() {
	iconSetup();
	controlsSwapper();
	Setup.updateScreen();
	controlReset();
	arrayLoader();
	LayerFixer();
	upgradeMenuManager();
	dirtTrackMG();
	rotationMovement();
	updatePos();
	objectManipulation();
	bulletCollision();
	playerCollision();
	deadCheck();
	winCheck();
	renderer();
}

//Fix for layer issues
var PLAY1 = 0;
var PLAY2 = 0;
function LayerFixer() {
	if (gamemode === 1) {
		if (StartRotation1) {
			for (let i = 0; i < mainObjectArray.length; i++) {
					if (mainObjectArray[i].name === "Player1") {
					PLAY1 = i;
					lockP1ArrayPos = true;
					}
					if (mainObjectArray[i].name === "Player2") {
					PLAY2 = i;
					lockP2ArrayPos = true;
					}
			}
		array_move(mainObjectArray, PLAY2, PLAY1);
		}
		if (StartRotation2) {
			for (let i = 0; i < mainObjectArray.length; i++) {
					if (mainObjectArray[i].name === "Player1") {
					PLAY1 = i;
					lockP1ArrayPos = true;
					}
					if (mainObjectArray[i].name === "Player2") {
					PLAY2 = i;
					lockP2ArrayPos = true;
					}
			}
		array_move(mainObjectArray, PLAY2, PLAY1);
		}
	}
}

//Logic for Upgrade Menu
//TWPlayer1Speed/TWPlayer2Speed number of upgrades 2: upgrade 1- 2>3 upgrade 2- 3>4
//Player1BulletRate/Player2BulletRate/Player3BulletRate/Player4BulletRate number of upgrades 5: upgrade 1- 40>35 upgrade 2- 35>30 upgrade 3- 30>25 upgrade 4- 25>20 upgrade 5- 20>15
var turn = 0;
var upgrade1Lock = false;
var upgrade2Lock = false;
var upgrade3Lock = false;
var nextLock = false;
function upgradeMenuManager() {
	switch (gamemode) {
		case 1:
			switch (TWPlayer1Collision.speedUpgrade) {
				case 0:
				TWPlayer1Speed = 2;
				break;
				case 1:
				TWPlayer1Speed = 3;
				break;
				case 2:
				TWPlayer1Speed = 4;
				break;
			}
			switch (TWPlayer1Collision.bulletRateUpgrade) {
				case 0:
				Player1BulletRate = 40;
				break;
				case 1:
				Player1BulletRate = 35;
				break;
				case 2:
				Player1BulletRate = 30;
				break;
				case 3:
				Player1BulletRate = 25;
				break;
				case 4:
				Player1BulletRate = 20;
				break;
				case 5:
				Player1BulletRate = 15;
				break;
			}
			switch (TWPlayer1Collision.rotateSpeedUpgrade) {
				case 0:
				Player1RotationSpeed = 1;
				break;
				case 1:
				Player1RotationSpeed = 2;
				break;
				case 2:
				Player1RotationSpeed = 3;
				break;
			}
			switch (TWPlayer2Collision.speedUpgrade) {
				case 0:
				TWPlayer2Speed = 2;
				break;
				case 1:
				TWPlayer2Speed = 3;
				break;
				case 2:
				TWPlayer2Speed = 4;
				break;
			}
			switch (TWPlayer2Collision.bulletRateUpgrade) {
				case 0:
				Player2BulletRate = 40;
				break;
				case 1:
				Player2BulletRate = 35;
				break;
				case 2:
				Player2BulletRate = 30;
				break;
				case 3:
				Player2BulletRate = 25;
				break;
				case 4:
				Player2BulletRate = 20;
				break;
				case 5:
				Player2BulletRate = 15;
				break;
			}
			switch (TWPlayer2Collision.rotateSpeedUpgrade) {
				case 0:
				Player2RotationSpeed = 1;
				break;
				case 1:
				Player2RotationSpeed = 2;
				break;
				case 2:
				Player2RotationSpeed = 3;
				break;
			}
			if (UpgradeMenu) {
				if (TWPlayer1Collision.scored || TWPlayer2Collision.scored) {
					UGTank1Points.name = P1info.name_+"'s Points: "+TWPlayer1Collision.upgradePoints;
					UGTank1Points.x = 5;
					UGTank1Points.y = 360-25;
					UGTank2Points.name = P2info.name_+"'s Points: "+TWPlayer2Collision.upgradePoints;
					UGTank2Points.x = 5;
					UGTank2Points.y = 360+25;
					//Fade in
					if (UGMenu.globalAlpha < 1) {
					UGMenu.globalAlpha += 0.1;
					UGText.globalAlpha += 0.1;
					UGTank1Points.globalAlpha += 0.1;
					UGTank2Points.globalAlpha += 0.1;
					UGButton1.globalAlpha += 0.1;
					UGButton1Txt.globalAlpha += 0.1;
					UGButton2.globalAlpha += 0.1;
					UGButton2Txt.globalAlpha += 0.1;
					UGButton2_1Txt.globalAlpha += 0.1;
					UGButton3.globalAlpha += 0.1;
					UGButton3Txt.globalAlpha += 0.1;
					UGButton3_1Txt.globalAlpha += 0.1;
					UGButtonNext.globalAlpha += 0.1;
					UGButtonNextTxt.globalAlpha += 0.1;
					UGTurnTxt.globalAlpha += 0.1;
					}
					if (UGMenu.globalAlpha >= 1) {
					UGMenu.globalAlpha = 1;
					UGText.globalAlpha = 1;
					UGTank1Points.globalAlpha = 1;
					UGTank2Points.globalAlpha = 1;
					UGButton1.globalAlpha = 1;
					UGButton1Txt.globalAlpha = 1;
					UGButton2.globalAlpha = 1;
					UGButton2Txt.globalAlpha = 1;
					UGButton2_1Txt.globalAlpha = 1;
					UGButton3.globalAlpha = 1;
					UGButton3Txt.globalAlpha = 1;
					UGButton3_1Txt.globalAlpha = 1;
					UGButtonNext.globalAlpha = 1;
					UGButtonNextTxt.globalAlpha = 1;
					UGTurnTxt.globalAlpha = 1;
					}
					//Change button color on hover
					if (cursor.crashWith(UGButton1)) {
					UGButton1.color = "#5B5B5B";
					} else {
					UGButton1.color = "darkgrey";
					}
					if (cursor.crashWith(UGButton2)) {
					UGButton2.color = "#5B5B5B";
					} else {
					UGButton2.color = "darkgrey";
					}
					if (cursor.crashWith(UGButton3)) {
					UGButton3.color = "#5B5B5B";
					} else {
					UGButton3.color = "darkgrey";
					}
					if (cursor.crashWith(UGButtonNext)) {
					UGButtonNext.color = "#5B5B5B";
					} else {
					UGButtonNext.color = "darkgrey";
					}
					//Shadow on click/Action
					if (cursor.crashWith(UGButton1) && pressed && !upgrade1Lock) {
					UGButton1.shadowColor_ = "black";
					UGButton1.shadowBlur_ = 10;
					UGButton1.shadowOffsetX_ = 5;
					UGButton1.shadowOffsetY_ = 5;
					if (turn === 0 && TWPlayer1Collision.scored) {
						if (TWPlayer1Collision.speedUpgrade < 2 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.speedUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.speedUpgrade >= 2) {
						UGButton1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer1Collision.scored) {
						if (TWPlayer2Collision.speedUpgrade < 2 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.speedUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.speedUpgrade >= 2) {
						UGButton1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 0 && TWPlayer2Collision.scored) {
						if (TWPlayer2Collision.speedUpgrade < 2 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.speedUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.speedUpgrade >= 2) {
						UGButton1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer2Collision.scored) {
						if (TWPlayer1Collision.speedUpgrade < 2 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.speedUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.speedUpgrade >= 2) {
						UGButton1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					upgrade1Lock = true;
					}
					if (cursor.crashWith(UGButton2) && pressed && !upgrade2Lock) {
					UGButton2.shadowColor_ = "black";
					UGButton2.shadowBlur_ = 10;
					UGButton2.shadowOffsetX_ = 5;
					UGButton2.shadowOffsetY_ = 5;
					if (turn === 0 && TWPlayer1Collision.scored) {
						if (TWPlayer1Collision.bulletRateUpgrade < 5 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.bulletRateUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.bulletRateUpgrade >= 5) {
						UGButton2Txt.color = "red";
						UGButton2_1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer1Collision.scored) {
						if (TWPlayer2Collision.bulletRateUpgrade < 5 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.bulletRateUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.bulletRateUpgrade >= 5) {
						UGButton2Txt.color = "red";
						UGButton2_1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 0 && TWPlayer2Collision.scored) {
						if (TWPlayer2Collision.bulletRateUpgrade < 5 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.bulletRateUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.bulletRateUpgrade >= 5) {
						UGButton2Txt.color = "red";
						UGButton2_1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer2Collision.scored) {
						if (TWPlayer1Collision.bulletRateUpgrade < 5 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.bulletRateUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.bulletRateUpgrade >= 5) {
						UGButton2Txt.color = "red";
						UGButton2_1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					upgrade2Lock = true;
					}
					if (cursor.crashWith(UGButton3) && pressed && !upgrade3Lock) {
					UGButton3.shadowColor_ = "black";
					UGButton3.shadowBlur_ = 10;
					UGButton3.shadowOffsetX_ = 5;
					UGButton3.shadowOffsetY_ = 5;
					if (turn === 0 && TWPlayer1Collision.scored) {
						if (TWPlayer1Collision.rotateSpeedUpgrade < 2 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.rotateSpeedUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade >= 2) {
						UGButton3Txt.color = "red";
						UGButton3_1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer1Collision.scored) {
						if (TWPlayer2Collision.rotateSpeedUpgrade < 2 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.rotateSpeedUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade >= 2) {
						UGButton3Txt.color = "red";
						UGButton3_1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 0 && TWPlayer2Collision.scored) {
						if (TWPlayer2Collision.rotateSpeedUpgrade < 2 && TWPlayer2Collision.upgradePoints !== 0) {
						TWPlayer2Collision.rotateSpeedUpgrade++;
						TWPlayer2Collision.upgradePoints--;
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade >= 2) {
						UGButton3Txt.color = "red";
						UGButton3_1Txt.color = "red";
						}
						if (TWPlayer2Collision.upgradePoints === 0) {
						UGTank2Points.color = "red";
						}
					}
					if (turn === 1 && TWPlayer2Collision.scored) {
						if (TWPlayer1Collision.rotateSpeedUpgrade < 2 && TWPlayer1Collision.upgradePoints !== 0) {
						TWPlayer1Collision.rotateSpeedUpgrade++;
						TWPlayer1Collision.upgradePoints--;
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade >= 2) {
						UGButton3Txt.color = "red";
						UGButton3_1Txt.color = "red";
						}
						if (TWPlayer1Collision.upgradePoints === 0) {
						UGTank1Points.color = "red";
						}
					}
					upgrade3Lock = true;
					}
					if (cursor.crashWith(UGButtonNext) && pressed && !nextLock) {
					UGButtonNext.shadowColor_ = "black";
					UGButtonNext.shadowBlur_ = 10;
					UGButtonNext.shadowOffsetX_ = 5;
					UGButtonNext.shadowOffsetY_ = 5;
					turn++;
					nextLock = true;
					}
					//Unshadow the buttons
					if (!pressed) {
					UGTank1Points.color = "white";
					UGTank2Points.color = "white";
					UGButton1.shadowColor_ = "";
					UGButton1.shadowBlur_ = 0;
					UGButton1.shadowOffsetX_ = 0;
					UGButton1.shadowOffsetY_ = 0;
					UGButton1Txt.color = "white";
					upgrade1Lock = false;
					UGButton2.shadowColor_ = "";
					UGButton2.shadowBlur_ = 0;
					UGButton2.shadowOffsetX_ = 0;
					UGButton2.shadowOffsetY_ = 0;
					UGButton2Txt.color = "white";
					UGButton2_1Txt.color = "white";
					upgrade2Lock = false;
					UGButton3.shadowColor_ = "";
					UGButton3.shadowBlur_ = 0;
					UGButton3.shadowOffsetX_ = 0;
					UGButton3.shadowOffsetY_ = 0;
					UGButton3Txt.color = "white";
					UGButton3_1Txt.color = "white";
					upgrade3Lock = false;
					UGButtonNext.shadowColor_ = "";
					UGButtonNext.shadowBlur_ = 0;
					UGButtonNext.shadowOffsetX_ = 0;
					UGButtonNext.shadowOffsetY_ = 0;
					nextLock = false;
					}
					//Set text values/next button action
					if (turn === 0 && TWPlayer1Collision.scored) {
					UGTurnTxt.name = P1info.name_+"'s Turn";
					UGTurnTxt.color = "blue";
						if (TWPlayer1Collision.speedUpgrade < 2) {
						UGButton1Txt.name = "Speed ("+TWPlayer1Collision.speedUpgrade+"/2)";
						}
						if (TWPlayer1Collision.speedUpgrade >= 2) {
						UGButton1Txt.name = "Speed [MAX]";	
						}
						if (TWPlayer1Collision.bulletRateUpgrade < 5) {
						UGButton2_1Txt.name = "Rate ("+TWPlayer1Collision.bulletRateUpgrade+"/5)";
						}
						if (TWPlayer1Collision.bulletRateUpgrade >= 5) {
						UGButton2_1Txt.name = "Rate [MAX]";	
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade < 2) {
						UGButton3_1Txt.name = "Speed ("+TWPlayer1Collision.rotateSpeedUpgrade+"/2)";
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade >= 2) {
						UGButton3_1Txt.name = "Speed [MAX]";	
						}
					}
					if (turn === 1 && TWPlayer1Collision.scored) {
					UGTurnTxt.name = P2info.name_+"'s Turn";
					UGTurnTxt.color = "red";
						if (TWPlayer2Collision.speedUpgrade < 2) {
						UGButton1Txt.name = "Speed ("+TWPlayer2Collision.speedUpgrade+"/2)";
						}
						if (TWPlayer2Collision.speedUpgrade >= 2) {
						UGButton1Txt.name = "Speed [MAX]";	
						}
						if (TWPlayer2Collision.bulletRateUpgrade < 5) {
						UGButton2_1Txt.name = "Rate ("+TWPlayer2Collision.bulletRateUpgrade+"/5)";
						}
						if (TWPlayer2Collision.bulletRateUpgrade >= 5) {
						UGButton2_1Txt.name = "Rate [MAX]";	
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade < 2) {
						UGButton3_1Txt.name = "Speed ("+TWPlayer2Collision.rotateSpeedUpgrade+"/2)";
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade >= 2) {
						UGButton3_1Txt.name = "Speed [MAX]";	
						}
					}
					if (turn === 0 && TWPlayer2Collision.scored) {
					UGTurnTxt.name = P2info.name_+"'s Turn";
					UGTurnTxt.color = "red";
						if (TWPlayer2Collision.speedUpgrade < 2) {
						UGButton1Txt.name = "Speed ("+TWPlayer2Collision.speedUpgrade+"/2)";
						}
						if (TWPlayer2Collision.speedUpgrade >= 2) {
						UGButton1Txt.name = "Speed [MAX]";	
						}
						if (TWPlayer2Collision.bulletRateUpgrade < 5) {
						UGButton2_1Txt.name = "Rate ("+TWPlayer2Collision.bulletRateUpgrade+"/5)";
						}
						if (TWPlayer2Collision.bulletRateUpgrade >= 5) {
						UGButton2_1Txt.name = "Rate [MAX]";	
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade < 2) {
						UGButton3_1Txt.name = "Speed ("+TWPlayer2Collision.rotateSpeedUpgrade+"/2)";
						}
						if (TWPlayer2Collision.rotateSpeedUpgrade >= 2) {
						UGButton3_1Txt.name = "Speed [MAX]";	
						}
					}
					if (turn === 1 && TWPlayer2Collision.scored) {
					UGTurnTxt.name = P1info.name_+"'s Turn";
					UGTurnTxt.color = "blue";
						if (TWPlayer1Collision.speedUpgrade < 2) {
						UGButton1Txt.name = "Speed ("+TWPlayer1Collision.speedUpgrade+"/2)";
						}
						if (TWPlayer1Collision.speedUpgrade >= 2) {
						UGButton1Txt.name = "Speed [MAX]";	
						}
						if (TWPlayer1Collision.bulletRateUpgrade < 5) {
						UGButton2_1Txt.name = "Rate ("+TWPlayer1Collision.bulletRateUpgrade+"/5)";
						}
						if (TWPlayer1Collision.bulletRateUpgrade >= 5) {
						UGButton2_1Txt.name = "Rate [MAX]";	
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade < 2) {
						UGButton3_1Txt.name = "Speed ("+TWPlayer1Collision.rotateSpeedUpgrade+"/2)";
						}
						if (TWPlayer1Collision.rotateSpeedUpgrade >= 2) {
						UGButton3_1Txt.name = "Speed [MAX]";	
						}
					}
					if (turn === 2) {
					resetGame();
					}
				}
			}
			//Fade out
			if (!TWPlayer1Collision.scored && !TWPlayer2Collision.scored) {
				if (UGMenu.globalAlpha > 0) {
				UGMenu.globalAlpha -= 0.1;
				UGText.globalAlpha -= 0.1;
				UGTank1Points.globalAlpha -= 0.1;
				UGTank2Points.globalAlpha -= 0.1;
				UGButton1.globalAlpha -= 0.1;
				UGButton1Txt.globalAlpha -= 0.1;
				UGButton2.globalAlpha -= 0.1;
				UGButton2Txt.globalAlpha -= 0.1;
				UGButton2_1Txt.globalAlpha -= 0.1;
				UGButton3.globalAlpha -= 0.1;
				UGButton3Txt.globalAlpha -= 0.1;
				UGButton3_1Txt.globalAlpha -= 0.1;
				UGButtonNext.globalAlpha -= 0.1;
				UGButtonNextTxt.globalAlpha -= 0.1;
				UGTurnTxt.globalAlpha -= 0.1;
				}
				if (UGMenu.globalAlpha <= 0) {
				UGMenu.globalAlpha = 0;
				UGText.globalAlpha = 0;
				UGTank1Points.globalAlpha = 0;
				UGTank2Points.globalAlpha = 0;
				UGButton1.globalAlpha = 0;
				UGButton1Txt.globalAlpha = 0;
				UGButton2.globalAlpha = 0;
				UGButton2Txt.globalAlpha = 0;
				UGButton2_1Txt.globalAlpha = 0;
				UGButton3.globalAlpha = 0;
				UGButton3Txt.globalAlpha = 0;
				UGButton3_1Txt.globalAlpha = 0;
				UGButtonNext.globalAlpha = 0;
				UGButtonNextTxt.globalAlpha = 0;
				UGTurnTxt.globalAlpha = 0;
				}
			}
			//If tie make player one go first
			if (TWPlayer1Collision.scored && TWPlayer2Collision.scored) {
			TWPlayer2Collision.scored = false;
			}
		break;
	}
}

//Controls dirt tracks
var Player1Time = 0;
var Player2Time = 0;
var DistanceBetweenDirtTracks1 = 15;
var DistanceBetweenDirtTracks2 = 15;
var DirtTrackDecayTime1 = 0.01;
var DirtTrackDecayTime2 = 0.01;
var RingLock1 = false;
var RingLock2 = false;
function dirtTrackMG() {
	if (gamemode === 1) {
		switch (TWPlayer1Speed) {
			case 2:
			DistanceBetweenDirtTracks1 = 15;
			DirtTrackDecayTime1 = 0.01;
			break;
			case 3:
			DistanceBetweenDirtTracks1 = 10;
			DirtTrackDecayTime1 = 0.012;
			break;
			case 4:
			DistanceBetweenDirtTracks1 = 5;
			DirtTrackDecayTime1 = 0.015;
			break;
		}
		switch (TWPlayer2Speed) {
			case 2:
			DistanceBetweenDirtTracks2 = 15;
			DirtTrackDecayTime2 = 0.01;
			break;
			case 3:
			DistanceBetweenDirtTracks2 = 10;
			DirtTrackDecayTime2 = 0.012;
			break;
			case 4:
			DistanceBetweenDirtTracks2 = 5;
			DirtTrackDecayTime2 = 0.015;
			break;
		}
		if (StartRotation1) {
			RingLock1 = false;
			Player1Time++;
			if (TWPlayer1Collision._dirtTracks.length === 0) {
			TWPlayer1Collision.dirtTracks();
			}
			for (let i = 0; i < TWPlayer1Collision._dirtTracks.length; i++) {
				if (Player1Time >= DistanceBetweenDirtTracks1) {
				TWPlayer1Collision.dirtTracks();
				Player1Time = 0;
				}
			}
		} else {
		Player1Time = 0;
			for (let i = 0; i < TWPlayer1Collision._dirtTracks.length; i++) {
				if (TWPlayer1Collision._dirtTracks[i].name === "dirtRing") {
					if (TWPlayer1Collision._dirtTracks[i].x !== TWPlayer1Collision.x && TWPlayer1Collision._dirtTracks[i].y !== TWPlayer1Collision.y) {
						if (TWPlayer1Collision._dirtTracks.length < 3 && TWPlayer1Collision._dirtTracks[i].globalAlpha > 0 && !TWPlayer1Collision.crashWith(TWPlayer2Collision)) {
						TWPlayer1Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime1;
						RingLock1 = false;
						}
						if (TWPlayer1Collision._dirtTracks[i].globalAlpha !== 1) {
							if (!RingLock1) {
							TWPlayer1Collision.dirtTracks();
							RingLock1 = true;
							}
						}
					}
				} else {
					if (TWPlayer1Collision.numOfRings < 1) {
					TWPlayer1Collision.dirtTracks();
					}
				}
			}
			if (TWPlayer1Collision._dirtTracks.length === 0) {
			TWPlayer1Collision.dirtTracks();
			}
		}
		if (StartRotation2) {
			RingLock2 = false;
			Player2Time++;
			if (TWPlayer2Collision._dirtTracks.length === 0) {
			TWPlayer2Collision.dirtTracks();
			}
			for (let i = 0; i < TWPlayer2Collision._dirtTracks.length; i++) {
				if (Player2Time >= DistanceBetweenDirtTracks2) {
				TWPlayer2Collision.dirtTracks();
				Player2Time = 0;
				}
			}
		} else {
		Player2Time = 0;
			for (let i = 0; i < TWPlayer2Collision._dirtTracks.length; i++) {
				if (TWPlayer2Collision._dirtTracks[i].name === "dirtRing") {
					if (TWPlayer2Collision._dirtTracks[i].x !== TWPlayer2Collision.x && TWPlayer2Collision._dirtTracks[i].y !== TWPlayer2Collision.y) {
						if (TWPlayer2Collision._dirtTracks.length < 3 && TWPlayer2Collision._dirtTracks[i].globalAlpha > 0 && !TWPlayer1Collision.crashWith(TWPlayer2Collision)) {
						TWPlayer2Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime2;
						RingLock2 = false;
						}
						if (TWPlayer2Collision._dirtTracks[i].globalAlpha !== 1) {
							if (!RingLock2) {
							TWPlayer2Collision.dirtTracks();
							RingLock2 = true;
							}
						}
					}
				} else {
					if (TWPlayer2Collision.numOfRings < 1) {
					TWPlayer2Collision.dirtTracks();
					}
				}
			}
			if (TWPlayer2Collision._dirtTracks.length === 0) {
			TWPlayer2Collision.dirtTracks();
			}
		}
		for (let i = 0; i < TWPlayer1Collision._dirtTracks.length; i++) {
			if (TWPlayer1Collision._dirtTracks[i].name !== "dirtRing") {
			TWPlayer1Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime1;
			}
			if (TWPlayer1Collision._dirtTracks[i].name === "dirtRing") {
				if (TWPlayer1Collision._dirtTracks[i].globalAlpha !== 1) {
				TWPlayer1Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime1;
				} else
				if (StartRotation1) {
				TWPlayer1Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime1;
				}
			}
			if (TWPlayer1Collision._dirtTracks[i].globalAlpha <= 0) {
				if (TWPlayer1Collision._dirtTracks[i].name !== "dirtRing") {
				TWPlayer1Collision.numOfTracks--;
				}
				if (TWPlayer1Collision._dirtTracks[i].name === "dirtRing") {
				TWPlayer1Collision.numOfRings--;
				}
			TWPlayer1Collision._dirtTracks.splice(i, 1);
			}
		}
		for (let i = 0; i < TWPlayer2Collision._dirtTracks.length; i++) {
			if (TWPlayer2Collision._dirtTracks[i].name !== "dirtRing") {
			TWPlayer2Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime2;
			}
			if (TWPlayer2Collision._dirtTracks[i].name === "dirtRing") {
				if (TWPlayer2Collision._dirtTracks[i].globalAlpha !== 1) {
				TWPlayer2Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime2;
				} else
				if (StartRotation2) {
				TWPlayer2Collision._dirtTracks[i].globalAlpha -= DirtTrackDecayTime2;
				}
			}
			if (TWPlayer2Collision._dirtTracks[i].globalAlpha <= 0) {
				if (TWPlayer2Collision._dirtTracks[i].name !== "dirtRing") {
				TWPlayer2Collision.numOfTracks--;
				}
				if (TWPlayer2Collision._dirtTracks[i].name === "dirtRing") {
				TWPlayer2Collision.numOfRings--;
				}
			TWPlayer2Collision._dirtTracks.splice(i, 1);
			}
		}
	}
}

//Array loader
function arrayLoader() {
	switch (gamemode) {
	//gamemode 0
		case 0:
			if (arrayLoad) {
			mainObjectArray = [];
			arrayLoad = false;
			}
		break;
	//gamemode 1
		case 1:
			if (!arrayLoad) {
			mainObjectArray = mainObjectArray.concat(gameObjects1, gameObjects0);
			arrayLoad = true;
			}
			//Tank War reset dir switch
			if (TWPlayer1Collision.directionSwitch > 1) {
			TWPlayer1Collision.directionSwitch = 0;
			}
			if (TWPlayer1Collision.directionSwitch > 1) {
			TWPlayer1Collision.directionSwitch = 0;
			}
			if (TWPlayer2Collision.directionSwitch > 1) {
			TWPlayer2Collision.directionSwitch = 0;
			}
			if (TWPlayer2Collision.directionSwitch > 1) {
			TWPlayer2Collision.directionSwitch = 0;
			}
		break;
	//gamemode 2
		case 2:
			if (!arrayLoad) {
			mainObjectArray = mainObjectArray.concat(gameObjects2, gameObjects0);
			arrayLoad = true;
			}
			//Line Battle reset dir switch
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
		break;
	}
}

//Do rotation
function rotationMovement() {
	if (gamemode !== 0) {
		if (StartRotation1) {
			if (player1Controls !== 2) {
			Player1ControlsDown(false);
			} else {
			Player1ControlsDown(true);
			}
		}
		if (StartRotation2) {
			if (player2Controls !== 2) {
			Player2ControlsDown(false);
			} else {
			Player2ControlsDown(true);
			}
		}
	}
}

//updates positions with logic
var mousePos = [];
function updatePos() {
cursor.x = mousePos[0];
cursor.y = mousePos[1];
}

function winCheck() {
	switch (gamemode) {
		case 1:
			if (TWPlayer1Collision.points >= MaxPointsTW) {
			TWPlayer1Collision.won = true;
			}
			if (TWPlayer2Collision.points >= MaxPointsTW) {
			TWPlayer2Collision.won = true;
			}
			if (TWPlayer1Collision.won && !TWPlayer2Collision.won) {
			winButton.globalAlpha = 1;
			profilePic1.globalAlpha = 1;
			profilePic1.color = P1info.pfpic.id;
			profilePic2.globalAlpha = 1;
			profilePic2.color = P1info.pfpic.id;
			winText.globalAlpha = 1;
			winText.name = P1info.name_ + " won!";
			}
			if (!TWPlayer1Collision.won && TWPlayer2Collision.won) {
			winButton.globalAlpha = 1;
			profilePic1.globalAlpha = 1;
			profilePic1.color = P2info.pfpic.id;
			profilePic2.globalAlpha = 1;
			profilePic2.color = P2info.pfpic.id;
			winText.globalAlpha = 1;
			winText.name = P2info.name_ + " won!";
			}
			if (TWPlayer1Collision.won && TWPlayer2Collision.won) {
			winButton.globalAlpha = 1;
			profilePic1.globalAlpha = 1;
			profilePic1.color = P1info.pfpic.id;
			profilePic2.globalAlpha = 1;
			profilePic2.color = P2info.pfpic.id;
			winText.globalAlpha = 1;
			winText.name = "Tie!";
			}
			if (!TWPlayer1Collision.won && !TWPlayer2Collision.won) {
			winButton.globalAlpha = 0;
			profilePic1.globalAlpha = 0;
			profilePic1.color = "Line_Battle_Dead_Player";
			profilePic2.globalAlpha = 0;
			profilePic2.color = "Line_Battle_Dead_Player";
			winText.globalAlpha = 0;
			winText.name = "";
			}
			if (TWPlayer1Collision.won || TWPlayer2Collision.won) {
				if (winButton.globalAlpha === 1) {
					if (cursor.crashWith(winButton) && pressed) {
					resetGame();
					}
				}
			}
		break;
		case 2:
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
				if (winButton.globalAlpha === 1) {
					if (cursor.crashWith(winButton) && pressed) {
					resetGame();
					}
				}
			}
		break;
	}
}

function deadCheck() {
	switch (gamemode) {
		case 1:
			if (!TWPlayer1Collision.won || !TWPlayer2Collision.won) {
				if (TWPlayer1Collision.dead) {
					if (TWPlayer1Collision.points < MaxPointsTW && TWPlayer2Collision.points < MaxPointsTW) {
					TWPlayer2Collision.scored = true;
					}
				TWPlayer1Collision.angleDegrees = 3.14159265;
				TWPlayer1.color = "Tank_War_Dead_Player";
				TWPlayer1Collision._bullets.length = 0;
				TWPlayer2Collision._bullets.length = 0;
				}
				if (TWPlayer2Collision.dead) {
					if (TWPlayer1Collision.points < MaxPointsTW && TWPlayer2Collision.points < MaxPointsTW) {
					TWPlayer1Collision.scored = true;
					}
				TWPlayer2Collision.angleDegrees = 0;
				TWPlayer2.color = "Tank_War_Dead_Player";
				TWPlayer1Collision._bullets.length = 0;
				TWPlayer2Collision._bullets.length = 0;
				}
			}
			if (TWPlayer1Collision.dead) {
			Tank1Explosion.animationObj.x = TWPlayer1Collision.x;
			Tank1Explosion.animationObj.y = TWPlayer1Collision.y;
			Tank1Explosion.update();
				if (!TWPlayer1Collision.won || !TWPlayer2Collision.won) {
					if (Tank1Explosion.done && Tank1Explosion.animationObj.globalAlpha === 0) {
					UpgradeMenu = true;
					}
				}
			}
			if (TWPlayer2Collision.dead) {
			Tank2Explosion.animationObj.x = TWPlayer2Collision.x;
			Tank2Explosion.animationObj.y = TWPlayer2Collision.y;
			Tank2Explosion.update();
				if (!TWPlayer1Collision.won || !TWPlayer2Collision.won) {
					if (Tank2Explosion.done && Tank2Explosion.animationObj.globalAlpha === 0) {
					UpgradeMenu = true;
					}
				}
			}
		break;
		case 2:
			if (!LBPlayer1Collision.won || !LBPlayer2Collision.won) {
				if (LBPlayer1Collision.dead) {
				LBPlayer1Collision.directionSwitch = 0;
				LBPlayer2Collision.directionSwitch = 0;
				LBPlayer1Collision.angle = 0;
				LBPlayer2Collision.angle = 0;
				Player1ControlsUp();
				Player2ControlsUp();
					if (LBPlayer1Collision._bullets.length === 0 && LBPlayer2Collision._bullets.length === 0) {
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
				Player1ControlsUp();
				Player2ControlsUp();
					if (LBPlayer1Collision._bullets.length === 0 && LBPlayer2Collision._bullets.length === 0) {
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
		break;
	}
}

//player on player collision
function playerCollision() {
	switch (gamemode) {
		case 1:
			if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
				if(TWPlayer1Collision.crashWith(TWPlayer2Collision)){
					if(TWPlayer1Collision.x < TWPlayer2Collision.x){
					TWPlayer1Collision.x = TWPlayer1Collision.x - 1;
					TWPlayer2Collision.x = TWPlayer2Collision.x + 1;
					}else 
					if(TWPlayer1Collision.x > TWPlayer2Collision.x){
					TWPlayer1Collision.x = TWPlayer1Collision.x + 1;
					TWPlayer2Collision.x = TWPlayer2Collision.x - 1;
					}
					if(TWPlayer1Collision.y < TWPlayer2Collision.y){
					TWPlayer1Collision.y = TWPlayer1Collision.y - 1;
					TWPlayer2Collision.y = TWPlayer2Collision.y + 1;
					}else 
					if(TWPlayer1Collision.y > TWPlayer2Collision.y){
					TWPlayer1Collision.y = TWPlayer1Collision.y + 1;
					TWPlayer2Collision.y = TWPlayer2Collision.y - 1;
					}
				}
			}
		break;
		case 2:
			if (!LBPlayer1Collision.dead && !LBPlayer2Collision.dead) {
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
		break;
	}
}

//player on bullet collision
function bulletCollision() {
	switch (gamemode) {
		case 1:
			if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
				for (let i = 0; i < TWPlayer2Collision._bullets.length; i++) {
				var precalc1 = Math.abs(TWPlayer1Collision.x-TWPlayer2Collision._bullets[i].x);
				var precalc2 = Math.abs(TWPlayer1Collision.y-TWPlayer2Collision._bullets[i].y);
					if (precalc1 < 10 || precalc2 < 10) {
						if (TWPlayer1Collision.circleCrashWith(TWPlayer2Collision._bullets[i])) {
						TWPlayer2Collision._bullets.splice(i, 1);
							if (!TWPlayer1Collision.won && !TWPlayer2Collision.won) {
							TWPlayer2Collision.points++;
							TWPlayer2Collision.upgradePoints += 2;
							TWPlayer1Collision.upgradePoints++;
							TWPlayer1Collision.dead = true;
							}
						}
					}
				}
				for (let i = 0; i < TWPlayer1Collision._bullets.length; i++) {
				var precalc1 = Math.abs(TWPlayer2Collision.x-TWPlayer1Collision._bullets[i].x);
				var precalc2 = Math.abs(TWPlayer2Collision.y-TWPlayer1Collision._bullets[i].y);
					if (precalc1 < 10 || precalc2 < 10) {
						if (TWPlayer2Collision.circleCrashWith(TWPlayer1Collision._bullets[i])) {
						TWPlayer1Collision._bullets.splice(i, 1);
							if (!TWPlayer1Collision.won && !TWPlayer2Collision.won) {
							TWPlayer1Collision.points++;
							TWPlayer1Collision.upgradePoints += 2;
							TWPlayer2Collision.upgradePoints++;
							TWPlayer2Collision.dead = true;
							}
						}
					}
				}
			}
			for (let i = 0; i < TWPlayer1Collision._bullets.length; i++) {
				if (TWPlayer1Collision._bullets[i] !== undefined && TWPlayer1Collision._bullets[i].x <= 0) {
				TWPlayer1Collision._bullets.splice(i, 1);
				} else
				if (TWPlayer1Collision._bullets[i] !== undefined && TWPlayer1Collision._bullets[i].x >= 1280) {
				TWPlayer1Collision._bullets.splice(i, 1);
				}
				if (TWPlayer1Collision._bullets[i] !== undefined && TWPlayer1Collision._bullets[i].y <= 0) {
				TWPlayer1Collision._bullets.splice(i, 1);
				} else
				if (TWPlayer1Collision._bullets[i] !== undefined && TWPlayer1Collision._bullets[i].y >= 720) {
				TWPlayer1Collision._bullets.splice(i, 1);
				}
			}
			for (let i = 0; i < TWPlayer2Collision._bullets.length; i++) {
				if (TWPlayer2Collision._bullets[i] !== undefined && TWPlayer2Collision._bullets[i].x <= 0) {
				TWPlayer2Collision._bullets.splice(i, 1);
				} else
				if (TWPlayer2Collision._bullets[i] !== undefined && TWPlayer2Collision._bullets[i].x >= 1280) {
				TWPlayer2Collision._bullets.splice(i, 1);
				}
				if (TWPlayer2Collision._bullets[i] !== undefined && TWPlayer2Collision._bullets[i].y <= 0) {
				TWPlayer2Collision._bullets.splice(i, 1);
				} else
				if (TWPlayer2Collision._bullets[i] !== undefined && TWPlayer2Collision._bullets[i].y >= 720) {
				TWPlayer2Collision._bullets.splice(i, 1);
				}
			}
		break;
		case 2:
			if (!LBPlayer1Collision.dead && !LBPlayer2Collision.dead) {
				for (let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
					if (LBPlayer1Collision.circleCrashWith(LBPlayer2Collision._bullets[i])) {
						if (ChaosMode) {
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
							if (!ChaosMode) {
							LBPlayer1Collision.speed = 0;
							LBPlayer2Collision.points++;
							LBPlayer1Collision.dead = true;
							}
						}
					}
				}
				for (let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
					if (LBPlayer2Collision.circleCrashWith(LBPlayer1Collision._bullets[i])) {
						if (ChaosMode) {
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
							if (!ChaosMode) {
							LBPlayer1Collision.speed = 0;
							LBPlayer1Collision.points++;
							LBPlayer2Collision.dead = true;
							}
						}
					}
				}
			}
		break;
	}
}

function objectManipulation() {
	switch (gamemode) {
		case 2:
			for(let i = 0; i < LBPlayer1Collision._bullets.length; i++) {
				if (LBPlayer1Collision._bullets[i].timeAlive >= TailLength) {
				LBPlayer1Collision._bullets.shift();
				}
				if (LBPlayer1Collision._bullets[i+1] !== undefined) {
					if (LBPlayer1Collision._bullets[i].returnDistance(LBPlayer1Collision._bullets[i+1]) <= TailFullness) {
					LBPlayer1Collision._bullets.splice(i, 1);
					}
				}
			}
			for(let i = 0; i < LBPlayer2Collision._bullets.length; i++) {
				if (LBPlayer2Collision._bullets[i].timeAlive >= TailLength) {
				LBPlayer2Collision._bullets.shift();
				}
				if (LBPlayer2Collision._bullets[i+1] !== undefined) {
					if (LBPlayer2Collision._bullets[i].returnDistance(LBPlayer2Collision._bullets[i+1]) <= TailFullness) {
					LBPlayer2Collision._bullets.splice(i, 1);
					}
				}
			}
		break;
	}
	for (let i = 0; i < mainObjectArray.length; i++) {
		switch (gamemode) {
		//set player image position/rotation to the player collision circle
			case 1:
				if (mainObjectArray[i].name === "Player1") {
				mainObjectArray[i].x = TWPlayer1Collision.x;
				mainObjectArray[i].y = TWPlayer1Collision.y;
					if (mainObjectArray[i].angleDegrees !== (TWPlayer1Collision.angleDegrees-3.14159265)) {
					mainObjectArray[i].angleDegrees = (TWPlayer1Collision.angleDegrees-3.14159265);
					}
				}
				if (mainObjectArray[i].name === "Player2") {
				mainObjectArray[i].x = TWPlayer2Collision.x;
				mainObjectArray[i].y = TWPlayer2Collision.y;
					if (mainObjectArray[i].angleDegrees !== TWPlayer2Collision.angleDegrees) {
					mainObjectArray[i].angleDegrees = TWPlayer2Collision.angleDegrees;
					}
				}
				//rotation
				if (!stopControls) {
					if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
						if (mainObjectArray[i].name === "Player1Coll") {
							if (!StartRotation1) {
								if (mainObjectArray[i].directionSwitch === 0) {
								mainObjectArray[i].angle += -Player1RotationSpeed;
								} else {
								mainObjectArray[i].angle += Player1RotationSpeed;
								}
							}
						}
						if (mainObjectArray[i].name === "Player2Coll") {
							if (!StartRotation2) {
								if (mainObjectArray[i].directionSwitch === 0) {
								mainObjectArray[i].angle += -Player2RotationSpeed;
								} else {
								mainObjectArray[i].angle += Player2RotationSpeed;
								}
							}
						}
					} else {
						if (mainObjectArray[i].name === "Player1Coll") {
						mainObjectArray[i].speed = 0;
						} else {
						mainObjectArray[i].speed = 0;
						}
					}
				}
				//map edge teleport
				if (mainObjectArray[i].name === "Player1Coll") {
					if (mainObjectArray[i].x <= 0) {
					mainObjectArray[i].x = 1279;
					} else
					if (mainObjectArray[i].x >= 1280) {
					mainObjectArray[i].x = 1;
					}
					if (mainObjectArray[i].y <= 0) {
					mainObjectArray[i].y = 719;
					} else
					if (mainObjectArray[i].y >= 720) {
					mainObjectArray[i].y = 1;
					}
				}
				if (mainObjectArray[i].name === "Player2Coll") {
					if (mainObjectArray[i].x <= 0) {
					mainObjectArray[i].x = 1279;
					} else
					if (mainObjectArray[i].x >= 1280) {
					mainObjectArray[i].x = 1;
					}
					if (mainObjectArray[i].y <= 0) {
					mainObjectArray[i].y = 719;
					} else
					if (mainObjectArray[i].y >= 720) {
					mainObjectArray[i].y = 1;
					}
				}
			break;
			case 2:
				if (mainObjectArray[i].name === "Player1") {
				mainObjectArray[i].x = LBPlayer1Collision.x;
				mainObjectArray[i].y = LBPlayer1Collision.y;
					if (!focusLight) {
						if (mainObjectArray[i].angleDegrees !== (LBPlayer1Collision.angleDegrees-1.57079633)) {
						mainObjectArray[i].angleDegrees = (LBPlayer1Collision.angleDegrees-1.57079633);
						}
					} else {
					mainObjectArray[i].angleDegrees = (Math.atan2(mainObjectArray[i].y-focusLightPosY,mainObjectArray[i].x-focusLightPosX)-6.28318531);
					}
				}
				if (mainObjectArray[i].name === "Player2") {
				mainObjectArray[i].x = LBPlayer2Collision.x;
				mainObjectArray[i].y = LBPlayer2Collision.y;
					if (!focusLight) {
						if (mainObjectArray[i].angleDegrees !== (LBPlayer2Collision.angleDegrees+1.57079633)) {
						mainObjectArray[i].angleDegrees = (LBPlayer2Collision.angleDegrees+1.57079633);
						}
					} else {
					mainObjectArray[i].angleDegrees = (Math.atan2(mainObjectArray[i].y-focusLightPosY,mainObjectArray[i].x-focusLightPosX)-6.28318531);
					}
				}
				//speed
				if (!LBPlayer1Collision.dead && !LBPlayer2Collision.dead) {
					if (!stopControls) {
						if (mainObjectArray[i].name === "Player1Coll") {
						mainObjectArray[i].speed = -LBPlayerSpeed;
						mainObjectArray[i].shoot();
						}
						if (mainObjectArray[i].name === "Player2Coll") {
						mainObjectArray[i].speed = LBPlayerSpeed;
						mainObjectArray[i].shoot();
						}	
					} else {
						if (mainObjectArray[i].name === "Player1Coll") {
						mainObjectArray[i].speed = 0;
						}
						if (mainObjectArray[i].name === "Player2Coll") {
						mainObjectArray[i].speed = 0;
						}	
					}
				//map edge teleport
					if (mainObjectArray[i].name === "Player1Coll") {
						if (mainObjectArray[i].x <= 0) {
						mainObjectArray[i].x = 1279;
						} else
						if (mainObjectArray[i].x >= 1280) {
						mainObjectArray[i].x = 1;
						}
						if (mainObjectArray[i].y <= 0) {
						mainObjectArray[i].y = 719;
						} else
						if (mainObjectArray[i].y >= 720) {
						mainObjectArray[i].y = 1;
						}
					}
					if (mainObjectArray[i].name === "Player2Coll") {
						if (mainObjectArray[i].x <= 0) {
						mainObjectArray[i].x = 1279;
						} else
						if (mainObjectArray[i].x >= 1280) {
						mainObjectArray[i].x = 1;
						}
						if (mainObjectArray[i].y <= 0) {
						mainObjectArray[i].y = 719;
						} else
						if (mainObjectArray[i].y >= 720) {
						mainObjectArray[i].y = 1;
						}
					}
				}
			break;
		}
		if (gamemode !== 0) {
		//stop moving players
			if (!stopControls) {
				if (mainObjectArray[i].name === "Player1Coll") {
					if (mainObjectArray[i].scored || mainObjectArray[i].dead) {
					stopControls = true;
					}
				}
				if (mainObjectArray[i].name === "Player2Coll") {
					if (mainObjectArray[i].scored || mainObjectArray[i].dead) {
					stopControls = true;
					}
				}
			} else {
				if (mainObjectArray[i].name === "Player1Coll") {
				mainObjectArray[i].speed = 0;
				}
				if (mainObjectArray[i].name === "Player2Coll") {
				mainObjectArray[i].speed = 0;
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
		if (mainObjectArray[i].name === "Player1Coll" || mainObjectArray[i].name === "Player2Coll") {
		var object = mainObjectArray[i]
			for (let v = 0; v < object._bullets.length; v++) {
			object._bullets[v].update();
			object._bullets[v].newPos();
			}
		}
		//dirt render
		if (gamemode === 1) {
			if (mainObjectArray[i].name === "Player1Coll" || mainObjectArray[i].name === "Player2Coll") {
			var object2 = mainObjectArray[i]
				for (let v = 0; v < object2._dirtTracks.length; v++) {
					if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
					object2._dirtTracks[v].newPos();
					object2._dirtTracks[v].update();
					}
				}
			}
		}
		if (!mainObjectArray[i].dead) {
		mainObjectArray[i].newPos();
		}
	}
}

//Controls scaler
function scaleControls() {
	if (gamemode === 0) {
		switch (menus) {
			case 0:
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
			break;
		}
	}
	if (gamemode === 1 || gamemode === 2) {
		pauseBttn.style.width = (100*scaleFillNativeWidth) + "px";
		pauseBttn.style.height = (70*scaleFillNativeHeight) + "px";
		pauseBttn.style.fontSize = (30*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		if (player1Controls === 0 || player1Controls === 2) {
		player1Bttn.style.width = (100*scaleFillNativeWidth) + "px";
		player1Bttn.style.height = (70*scaleFillNativeHeight) + "px";
		player1Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
		if (player2Controls === 0 || player2Controls === 2) {
		player2Bttn.style.width = player1Bttn.style.width;
		player2Bttn.style.height = player1Bttn.style.height;
		player2Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
	}
	if (gamemode === 1) {
		if (player3Controls === 0 || player3Controls === 2) {
		player3Bttn.style.width = player1Bttn.style.width;
		player3Bttn.style.height = player1Bttn.style.height;
		player3Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
		if (player4Controls === 0 || player4Controls === 2) {
		player4Bttn.style.width = player1Bttn.style.width;
		player4Bttn.style.height = player1Bttn.style.height;
		player4Bttn.style.fontSize = (65*Math.min(scaleFillNativeWidth,scaleFillNativeHeight)) + "px";
		}
	}
}

//Swaps out control options
var controlsLoad = false;
function controlsSwapper() {
	switch (gamemode) {
		case 0:
			if (controlsLoad) {
			player1Bttn.style.display = "none";
			player2Bttn.style.display = "none";
			player3Bttn.style.display = "none";
			player4Bttn.style.display = "none";
			pauseBttn.style.display = "none";
			pause = false;
			controlsLoad = false;
			}
		UIScaleSlider.style.display = "initial";
			if (!pause) {
				if (menus == 0) {
				mainMenu.style.display = "initial";
				} else {
				mainMenu.style.display = "none";	
				}
			} else {
			mainMenu.style.display = "none";
			}
			if (scaleFillNativeWidth !== ((deviceWidth / nativeWidth)+UIScale.value) || scaleFillNativeHeight != ((deviceHeight / nativeHeight)+UIScale.value)) {
			resizeHandler();
			}
			UIScaleNumber = UIScale.value;
		break;
		case 1:
			pauseBttn.style.display = "initial";
			if (player1Controls === 0 || player1Controls === 2) {
			player1Bttn.innerHTML = TWPlayer1Collision.points;
			}
			if (player2Controls === 0 || player2Controls === 2) {
			player2Bttn.innerHTML = TWPlayer2Collision.points;
			}
			if (!controlsLoad) {
				if (players >= 2) {
					if (player1Controls === 0 || player1Controls === 2) {
					player1Bttn.style.display = "initial";
					} else {
					player1Bttn.style.display = "none";
					}
					if (player2Controls === 0 || player2Controls === 2) {
					player2Bttn.style.display = "initial";
					} else {
					player2Bttn.style.display = "none";
					}
				}
				if (players > 3) {
					if (player3Controls === 0 || player3Controls === 2) {
					player3Bttn.style.display = "initial";
					player3Bttn.innerHTML = TWPlayer3Collision.points;
					} else {
					player3Bttn.style.display = "none";
					}
				}
				if (players === 4) {
					if (player4Controls === 0 || player4Controls === 2) {
					player4Bttn.style.display = "initial";
					player4Bttn.innerHTML = TWPlayer4Collision.points;
					} else {
					player4Bttn.style.display = "none";
					}
				}
			controlsLoad = true;
			}
		break;
		case 2:
			pauseBttn.style.display = "initial";
			if (player1Controls === 0 || player1Controls === 2) {
			player1Bttn.innerHTML = LBPlayer1Collision.points;
			}
			if (player2Controls === 0 || player2Controls === 2) {
			player2Bttn.innerHTML = LBPlayer2Collision.points;
			}
			if (!controlsLoad) {
				if (players >= 3) {
				players = 2;
				}
				if (players >= 2) {
					if (player1Controls === 0 || player1Controls === 2) {
					player1Bttn.style.display = "initial";
					} else {
					player1Bttn.style.display = "none";
					}
					if (player2Controls === 0 || player2Controls === 2) {
					player2Bttn.style.display = "initial";
					} else {
					player2Bttn.style.display = "none";
					}
				}
			player3Bttn.style.display = "none";
			player4Bttn.style.display = "none";
			controlsLoad = true;
			}
		break;
	}
	if (gamemode !== 0) {
	mainMenu.style.display = "none";
	UIScaleSlider.style.display = "none";
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
	if (isLoaded) {
	mousePos[0] = getMouseInfo(event.clientX, "x");
	mousePos[1] = getMouseInfo(event.clientY, "y");
	}
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
	if (isLoaded) {
	mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
	mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
	}
});
window.addEventListener("touchend", function(event) {
pressed = false;
});
window.addEventListener("touchmove", function(event) {
	if (isLoaded) {
	mousePos[0] = getMouseInfo(event.touches[0].clientX, "x");
	mousePos[1] = getMouseInfo(event.touches[0].clientY, "y");
	}
});

//Controls
//Player 1
function Player1ControlsDown(rotLockOff) {
this.rotLockOff = rotLockOff;
	if (gamemode === 1) {
		if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
		TWPlayer1Collision.speed = -TWPlayer1Speed;
		TWPlayer1Collision.fireTime++;
			if (TWPlayer1Collision.fireTime >= Player1BulletRate) {
			TWPlayer1Collision.shoot();
			TWPlayer1Collision.fireTime = 0;
			}
			if (!this.rotLockOff || this.rotLockOff === undefined) {
				if (TWPlayer1Collision.rotLock == 0) {
				TWPlayer1Collision.directionSwitch += 1;
				TWPlayer1Collision.rotLock = 1;
				}
			}
		}
	}
	if (gamemode === 2) {
		if (!LBPlayer1Collision.dead && !LBPlayer2Collision.dead) {
			if (LBPlayer1Collision.directionSwitch === 0) {
			LBPlayer1Collision.angle += LBPlayerRotateSpeed; 
			}
			if (LBPlayer1Collision.directionSwitch === 1) {
			LBPlayer1Collision.angle += -LBPlayerRotateSpeed; 
			}
			if (!this.rotLockOff || this.rotLockOff === undefined) {
				if (LBPlayer1Collision.rotLock == 0) {
				LBPlayer1Collision.directionSwitch += 1;
				LBPlayer1Collision.rotLock = 1;
				}
			}
		}
	}
}
function Player1ControlsUp() {
	if (gamemode === 1) {
	TWPlayer1Collision.speed = 0; 
	TWPlayer1Collision.rotLock = 0;
	TWPlayer1Collision.fireTime = 0;
	}
	if (gamemode === 2) {
	LBPlayer1Collision.rotLock = 0;
	}
StartRotation1 = false;
}
//Player 2
function Player2ControlsDown(rotLockOff) {
this.rotLockOff = rotLockOff;
	if (gamemode === 1) {
		if (!TWPlayer1Collision.dead && !TWPlayer2Collision.dead) {
		TWPlayer2Collision.speed = TWPlayer2Speed; 
		TWPlayer2Collision.fireTime++;
			if (TWPlayer2Collision.fireTime >= Player2BulletRate) {
			TWPlayer2Collision.shoot();
			TWPlayer2Collision.fireTime = 0;
			}
			if (!this.rotLockOff || this.rotLockOff === undefined) {
				if (TWPlayer2Collision.rotLock == 0) {
				TWPlayer2Collision.directionSwitch += 1;
				TWPlayer2Collision.rotLock = 1;
				}
			}
		}
	}
	if (gamemode === 2) {
		if (!LBPlayer1Collision.dead && !LBPlayer2Collision.dead) {
			if (LBPlayer2Collision.directionSwitch === 0) {
			LBPlayer2Collision.angle += LBPlayerRotateSpeed; 
			}
			if (LBPlayer2Collision.directionSwitch === 1) {
			LBPlayer2Collision.angle += -LBPlayerRotateSpeed; 
			}
			if (!this.rotLockOff || this.rotLockOff === undefined) {
				if (LBPlayer2Collision.rotLock === 0) {
				LBPlayer2Collision.directionSwitch += 1;
				LBPlayer2Collision.rotLock = 1;
				}
			}
		}
	}
}
function Player2ControlsUp() {
	if (gamemode === 1) {
	TWPlayer2Collision.speed = 0;
	TWPlayer2Collision.rotLock = 0;
	TWPlayer2Collision.fireTime = 0;
	}
	if (gamemode === 2) {
	LBPlayer2Collision.rotLock = 0;
	}
StartRotation2 = false;
}

var loadedGameObjects = false;
function controlReset() {
	switch (gamemode) {
		case 0:
		loadedGameObjects = false;
		Player1RotSwitch = false;
		Player2RotSwitch = false;
		gameObjects0 = [];
		gameObjects1 = [];
		gameObjects2 = [];
		initMain();
		initTW();
		initLB();
		break;
		case 1:
			if (!loadedGameObjects) {
			gameObjects0 = [];
			gameObjects1 = [];
			gameObjects2 = [];
			initMain();
			initTW();
			loadedGameObjects = true;
			}
		break;
		case 2:
			if (!loadedGameObjects) {
			gameObjects0 = [];
			gameObjects1 = [];
			gameObjects2 = [];
			initMain();
			initLB();
			loadedGameObjects = true;
			}
		break;
	}
}

//button events
//Player 1
player1Bttn.onmousedown = function(event){
	if (player1Controls !== 2) {
	StartRotation1 = true;
	}
}
player1Bttn.onmouseup = function(event){
	if (player1Controls !== 2) {
	Player1ControlsUp();
	}
}
player1Bttn.ontouchstart = function(event){
	if (player1Controls !== 2) {
	StartRotation1 = true;
	}
}
player1Bttn.ontouchend = function(event){
	if (player1Controls !== 2) {
	Player1ControlsUp();
	}
}
//Player 2
player2Bttn.onmousedown = function(event){
	if (player2Controls !== 2) {
	StartRotation2 = true;
	}
}
player2Bttn.onmouseup = function(event){
	if (player2Controls !== 2) {
	Player2ControlsUp();
	}
}
player2Bttn.ontouchstart = function(event){
	if (player2Controls !== 2) {
	StartRotation2 = true;
	}
}
player2Bttn.ontouchend = function(event){
	if (player2Controls !== 2) {
	Player2ControlsUp();
	}
}

//keyboard events
function keyDownHandler(event) {
	switch (event.key) {
		case "w":
			if (player1Controls !== 2) {
			StartRotation1 = true;
			}
		break;
		case "ArrowUp": 
			if (player2Controls !== 2) {
			StartRotation2 = true;
			}
		break;
		case "a":
			if (player1Controls === 2) {
			LBPlayer1Collision.directionSwitch = 1;
			StartRotation1 = true;
			}
		break;
		case "d":
			if (player1Controls === 2) {
			LBPlayer1Collision.directionSwitch = 0;
			StartRotation1 = true;
			}
		break;
		case "ArrowLeft":
			if (player2Controls === 2) {
			LBPlayer2Collision.directionSwitch = 1;
			StartRotation2 = true;
			}
		break;
		case "ArrowRight":
			if (player2Controls === 2) {
			LBPlayer2Collision.directionSwitch = 0;
			StartRotation2 = true;
			}
		break;
	}
}
function keyUpHandler(event) {
	switch (event.key) {
		case "w":
			if (player1Controls !== 2) {
			Player1ControlsUp();
			}
		break;
		case "ArrowUp":
			if (player2Controls !== 2) {
			Player2ControlsUp();
			}
		break;
		case "a":
			if (player1Controls === 2) {
			Player1ControlsUp();
			}
		break;
		case "d":
			if (player1Controls === 2) {
			Player1ControlsUp();
			}
		break;
		case "ArrowLeft":
			if (player2Controls === 2) {
			Player2ControlsUp();
			}
		break;
		case "ArrowRight":
			if (player2Controls === 2) {
			Player2ControlsUp();
			}
		break;
	}
}


//reset game
function resetGame(type) {
	Player1RotSwitch = false;
	Player2RotSwitch = false;
	UpgradeMenu = false;
	turn = 0;
	nextLock = false;
	this.type = type;
	switch (gamemode) {
		case 1:
			if (this.type === "Master") {
			TWPlayer1Collision.won = true;
			TWPlayer2Collision.won = true;
			}
			TWPlayer1Collision.angle = 0;
			TWPlayer1.color = "Tank_War_Player_1";
			TWPlayer1Collision.x = 50;
			TWPlayer1Collision.y = 120;
			TWPlayer1Collision.dead = false;
			TWPlayer1Collision.scored = false;
			TWPlayer1Collision._dirtTracks.length = 0;
			Tank1Explosion.resetANIMATION();
			TWPlayer2Collision.angle = 0;
			TWPlayer2.color = "Tank_War_Player_2";
			TWPlayer2Collision.x = 1230;
			TWPlayer2Collision.y = 600;
			TWPlayer2Collision.dead = false;
			TWPlayer2Collision.scored = false;
			TWPlayer2Collision._dirtTracks.length = 0;
			Tank2Explosion.resetANIMATION();
			if (pressed) {
				if (TWPlayer1Collision.won || TWPlayer2Collision.won) {
				TWPlayer1Collision.points = 0;
				TWPlayer1Collision._bullets.length = 0;
				TWPlayer1Collision._dirtTracks.length = 0;
				TWPlayer1Collision.won = false;
				TWPlayer1Collision.upgradePoints = 0;
				TWPlayer1Collision.speedUpgrade = 0;
				TWPlayer1Collision.bulletRateUpgrade = 0;
				TWPlayer1Collision.rotateSpeedUpgrade = 0;
				TWPlayer2Collision.points = 0;
				TWPlayer2Collision._bullets.length = 0;
				TWPlayer2Collision._dirtTracks.length = 0;
				TWPlayer2Collision.won = false;
				TWPlayer2Collision.upgradePoints = 0;
				TWPlayer2Collision.speedUpgrade = 0;
				TWPlayer2Collision.bulletRateUpgrade = 0;
				TWPlayer2Collision.rotateSpeedUpgrade = 0;
				}
			}
		break;
		case 2:
			if (this.type === "Master") {
			LBPlayer1Collision.won = true;
			LBPlayer2Collision.won = true;
			}
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
		break;
	}
}