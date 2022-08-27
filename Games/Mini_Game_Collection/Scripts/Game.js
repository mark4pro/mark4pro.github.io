//Set screen size
screen.setResolution(new Vector2(1280,720));

//Create mod menu
ModLoader.createMenu();

//Images
let blueBall = new imageData("blue_ball", imagePath+"Blue_Ball.png", new Vector2(50, 50));
let redBall = new imageData("red_ball", imagePath+"Red_Ball.png", new Vector2(50, 50));
let yellowBall = new imageData("yellow_ball", imagePath+"Yellow_Ball.png", new Vector2(50, 50));
let greenBall = new imageData("green_ball", imagePath+"Green_Ball.png", new Vector2(50, 50));
let greyBall = new imageData("grey_ball", imagePath+"Grey_Ball.png", new Vector2(50, 50));

//Maps
let map_abyss = new Map("Abyss", "black", [new Vector2(35, 35, -degToRad(90), -degToRad(90)), new Vector2(1245, 685, degToRad(90), -degToRad(90)), new Vector2(35, 685, degToRad(90), -degToRad(90)), new Vector2(1245, 35, -degToRad(90), -degToRad(90))]);

//Controls
let Player1Left = new key(
	"P1 Left",
	[
		new keyData("a", 0)
	],
	new Vector2("console.log('p1 left')", null)
);
let Player1Right = new key(
	"P1 Right",
	[
		new keyData("d", 0)
	],
	new Vector2("console.log('p1 right')", null)
);
let Player2Left = new key(
	"P2 Left",
	[
		new keyData("ArrowLeft", 0)
	],
	new Vector2("console.log('p2 left')", null)
);
let Player2Right = new key(
	"P2 Right",
	[
		new keyData("ArrowRight", 0)
	],
	new Vector2("console.log('p2 right')", null)
);
let Player3Left = new key(
	"P3 Left",
	[
		new keyData("j", 0)
	],
	new Vector2("console.log('p3 left')", null)
);
let Player3Right = new key(
	"P3 Right",
	[
		new keyData("l", 0)
	],
	new Vector2("console.log('p3 right')", null)
);
let Player4Left = new key(
	"P4 Left",
	[
		new keyData("4", 3)
	],
	new Vector2("console.log('p4 left')", null)
);
let Player4Right = new key(
	"P4 Right",
	[
		new keyData("6", 3)
	],
	new Vector2("console.log('p4 right')", null)
);

//Game data
let gameData = {
	"gameMode":-1, //-1: Menus / 0: Tank War / 1: Line Battle / 2: Ball Bouncers
	"maxPlayers":new Vector2(2, 4) //x: players / y: max players
};

let gameModeData = {
	0:{
		"name":"Tank Battle",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"mode":new Vector2(0,0), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal tank mode
				}
			},
			"map":new Vector2(0,0), //x-current map, y-total maps
			"maps":[] //map array
		}
	},
	1:{
		"name":"Line Battle",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"line_length":50, //max line length (longer line makes the game harder but slows down the game!)
			"line_fade":true, //fades line
			"line_fade_offset":0, //fade value + offset
			"object_amount":0, //amount of obstacles to spawn
			"mode":new Vector2(0,3), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal Tron like mode
				},
				1:{
					"name":"Point Collector" //Collect points to win
				},
				2:{
					"name":"Normal 2v2" //Normal Tron like mode but with teams
				},
				3:{
					"name":"Point Collector 2v2" //Collect points to win with teams
				}//Slither.io mode?
			},
			"map":new Vector2(0,0), //x-current map, y-total maps
			"maps":[] //map array
		}
	},
	2:{
		"name":"Ball Bouncers",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"mode":new Vector2(0,0), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal mode
				}
			},
			"map":new Vector2(0,0), //x-current map, y-total maps
			"maps":[] //map array
		}
	},
	"length":3
};

let modeData = gameModeData[gameData.gameMode];
let currentMap = null;

//GJ
let user = null;

//GJ login
function login(username, token) {
	GJAPI.UserLoginManual(username, token, (e) => {
		if (e.success) {
			console.log("%cUsername "+username+" logged in!", "color:green");
			updateUser();
		} else {
			console.log("%cUsername "+username+" failed to login!", "color:orange");
		}
	});
}

//User updater
let checkLogin = false;

function updateUser() {
	GJAPI.UserFetchCurrent(function(pResponse)
	{
		if(!pResponse.users) {
			return;
		}
		user = pResponse.users[0];
		console.info(pResponse.users[0]);
	});
}

//Settings additions
const SettingsAddons = new settingsAddons();

function settingsAddons() {
	//Back bttn
	this.backBttn = document.createElement('button');
	this.backBttn.innerHTML = "Back to Menu";
	this.backBttn.style.fontSize = "35px";
	this.backBttn.style.marginLeft = "0px";
	this.backBttn.style.marginRight = "0px";
	this.backBttn.style.marginTop = "0px";
	this.backBttn.style.marginBottom = "0px";
	this.backBttn.style.width = "100%";
	this.backBttn.style.height = "50px";
	this.backBttn.style.display = "none";
	this.backBttn.onclick = () => {
		gameData.gameMode = -1;
		SettingsMenu.hide();
	};
	SettingsMenu.buttonsSep.insertBefore(this.backBttn, SettingsMenu.quitBttn);
	const update = () => this.update();
	this.update = function() {
		this.backBttn.style.fontSize = (35*screen.getScale().x)+"px";
		if (gameData.gameMode != -1) {
			this.backBttn.style.display = "block";
		} else {
			this.backBttn.style.display = "none";
		}
	}
	addUpdate(update, "settingsAdditions");
}

//Win screen
const winScreen = new winScreenObj();

function winScreenObj() {
	this.size = new Vector2(500, 100);
	this.icon = greyBall.getSrc();
	this.name = "BLANK";
	this.show = function(id=1) {
		let thisPlayer = pM.getPlayer(id).player_info;
		this.icon = thisPlayer.profilePicPath;
		this.mainBackground.style.display = "block";
		this.name = thisPlayer.name;
	}
	this.hide = function() {
		this.mainBackground.style.display = "none";
		this.name = "BLANK";
	}
	//UI
	this.mainBackground = document.createElement("button");
	this.mainBackground.id = "winScreen";
	this.mainBackground.style.backgroundColor = "grey"; //Change later
	this.mainBackground.style.position = "fixed";
	this.mainBackground.style.display = "none";
	this.mainBackground.style.zIndex = "1";
	this.mainBackground.style.margin = "0px";
	document.body.appendChild(this.mainBackground);
	this.mainBackground.onclick = () => {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				this.hide();
			break;
		}
	}
	this.winText = document.createElement("h1");
	this.winText.id = "winScreen";
	this.winText.style.textAlign = "center";
	this.winText.style.color = "white";
	this.winText.style.position = "fixed";
	this.winText.style.zIndex = "1";
	this.winText.style.margin = "0px";
	this.mainBackground.appendChild(this.winText);
	this.icon_1 = document.createElement("img");
	this.icon_1.id = "winIcon_1";
	this.icon_1.style.position = "fixed";
	this.icon_1.style.zIndex = "1";
	this.icon_1.style.margin = "0px";
	this.mainBackground.appendChild(this.icon_1);
	this.icon_2 = document.createElement("img");
	this.icon_2.id = "winIcon_2";
	this.icon_2.src = this.icon;
	this.icon_2.style.position = "fixed";
	this.icon_2.style.zIndex = "1";
	this.icon_2.style.margin = "0px";
	this.mainBackground.appendChild(this.icon_2);
	const update = () => this.update();
	this.update = function() {
		//Scale UI
		this.mainBackground.style.width = (this.size.x*screen.getScale().x)+"px";
		this.mainBackground.style.height = (this.size.y*screen.getScale().y)+"px";
		this.mainBackground.style.top = (screen.getHalfDeviceRes().y-(parseFloat(this.mainBackground.style.height)/2))+"px";
		this.mainBackground.style.left = (screen.getHalfDeviceRes().x-(parseFloat(this.mainBackground.style.width)/2))+"px";
		this.winText.style.top = screen.getHalfDeviceRes().y-this.winText.getBoundingClientRect().height/2+"px";
		this.winText.style.left = screen.getHalfDeviceRes().x-this.winText.getBoundingClientRect().width/2+"px";
		this.winText.innerHTML = this.name+" Wins!";
		if (this.winText.innerHTML.length > 12) {
			let scaleFactor = 1-(12/this.winText.innerHTML.length);
			this.winText.style.fontSize = (50*Math.abs(screen.getScale().x-scaleFactor))+"px";
		} else {
			this.winText.style.fontSize = (50*screen.getScale().x)+"px";
		}
		this.icon_1.src = this.icon;
		this.icon_1.style.width = (100*screen.getScale().x)+"px";
		this.icon_1.style.height = (100*screen.getScale().y)+"px";
		this.icon_1.style.top = (screen.getHalfDeviceRes().y-(parseFloat(this.mainBackground.style.height)/2))+"px";
		this.icon_1.style.left = (screen.getHalfDeviceRes().x-(parseFloat(this.mainBackground.style.width)/2))+"px";
		this.icon_2.src = this.icon;
		this.icon_2.style.width = (100*screen.getScale().x)+"px";
		this.icon_2.style.height = (100*screen.getScale().y)+"px";
		this.icon_2.style.top = (screen.getHalfDeviceRes().y+(parseFloat(this.mainBackground.style.height)/2)-parseFloat(this.icon_2.style.height))+"px";
		this.icon_2.style.left = (screen.getHalfDeviceRes().x+(parseFloat(this.mainBackground.style.width)/2)-parseFloat(this.icon_2.style.width))+"px";
	}
	addUpdate(update, "win screen");
}

//Menus
const menuMG = new menuManager();

function menuManager() {
	this.menuState = 0; //0: main menu, 1-3: game menus
	this.menuSize = new Vector2();
	//Main menu
	//Background
	this.mainBackground = document.createElement("div");
	this.mainBackground.id = "mainMenu";
	this.mainBackground.style.backgroundColor = "lightgrey"; //Change later
	this.mainBackground.style.position = "fixed";
	this.mainBackground.style.top = "0px";
	this.mainBackground.style.left = "0px";
	this.mainBackground.style.display = "none";
	this.mainBackground.style.zIndex = "1";
	this.mainBackground.style.margin = "0px";
	document.body.appendChild(this.mainBackground);
	//Title
	this.mainTitle = document.createElement("h1");
	this.mainTitle.innerHTML = "Minigame Collection";
	this.mainTitle.style.textAlign = "center";
	this.mainTitle.style.color = "white";
	this.mainTitle.style.margin = "0px";
	this.mainTitle.style.position = "fixed";
	this.mainBackground.appendChild(this.mainTitle);
	//Tank War Button
	this.tankWarBttn = document.createElement("button");
	this.tankWarBttn.innerHTML = "Tank War";
	this.tankWarBttn.style.textAlign = "center";
	this.tankWarBttn.style.backgroundColor = "black"; //Change later
	this.tankWarBttn.style.color = "white";
	this.tankWarBttn.style.margin = "0px";
	this.tankWarBttn.style.position = "fixed";
	this.tankWarBttn.onmouseover = () => {
		this.tankWarBttn.style.backgroundColor = "grey";
	};
	this.tankWarBttn.onmouseout = () => {
		this.tankWarBttn.style.backgroundColor = "black";
	};
	this.tankWarBttn.onclick = () => {
		this.menuState = 1;
	};
	this.tankWarBttn.disabled = true; //Change this
	this.mainBackground.appendChild(this.tankWarBttn);
	//Line Battle Button
	this.lineBattleBttn = document.createElement("button");
	this.lineBattleBttn.innerHTML = "Line Battle";
	this.lineBattleBttn.style.textAlign = "center";
	this.lineBattleBttn.style.backgroundColor = "black"; //Change later
	this.lineBattleBttn.style.color = "white";
	this.lineBattleBttn.style.margin = "0px";
	this.lineBattleBttn.style.position = "fixed";
	this.lineBattleBttn.onmouseover = () => {
		this.lineBattleBttn.style.backgroundColor = "grey";
	};
	this.lineBattleBttn.onmouseout = () => {
		this.lineBattleBttn.style.backgroundColor = "black";
	};
	this.lineBattleBttn.onclick = () => {
		this.menuState = 2;
		this.lbBackground.play();
	};
	this.mainBackground.appendChild(this.lineBattleBttn);
	//Ball Bouncers Button
	this.ballBouncersBttn = document.createElement("button");
	this.ballBouncersBttn.innerHTML = "Ball Bouncers";
	this.ballBouncersBttn.style.textAlign = "center";
	this.ballBouncersBttn.style.backgroundColor = "black"; //Change later
	this.ballBouncersBttn.style.color = "white";
	this.ballBouncersBttn.style.margin = "0px";
	this.ballBouncersBttn.style.position = "fixed";
	this.ballBouncersBttn.onmouseover = () => {
		this.ballBouncersBttn.style.backgroundColor = "grey";
	};
	this.ballBouncersBttn.onmouseout = () => {
		this.ballBouncersBttn.style.backgroundColor = "black";
	};
	this.ballBouncersBttn.onclick = () => {
		this.menuState = 3;
	};
	this.ballBouncersBttn.disabled = true; //Change this
	this.mainBackground.appendChild(this.ballBouncersBttn);
	//Line Battle Menu
	//Div
	this.lbMenu = document.createElement("div");
	this.lbMenu.style.zIndex = "1";
	this.lbMenu.style.display = "none";
	document.body.appendChild(this.lbMenu);
	//Background
	this.lbBackground = document.createElement("video");
	this.lbBackground.id = "lbMenu";
	this.lbBackground.src = videoPath+"lb_demo.mp4";
	this.lbBackground.autoplay = true;
	this.lbBackground.loop = true;
	this.lbBackground.controls = false;
	this.lbBackground.style.margin = "0px";
	this.lbBackground.style.position = "fixed";
	this.lbBackground.style.width = "auto";
	this.lbBackground.style.height = "auto";
	this.lbBackground.style.minWidth = "100%";
	this.lbBackground.style.minHeight = "100%";
	this.lbBackground.style.backgroundSize = "cover";
	this.lbMenu.appendChild(this.lbBackground);
	//Title
	this.lbTitle = document.createElement("h1");
	this.lbTitle.innerHTML = "Line Battle";
	this.lbTitle.style.textAlign = "center";
	this.lbTitle.style.color = "white";
	this.lbTitle.style.margin = "0px";
	this.lbTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbTitle);
	//Players
	this.lbPlayersTitle = document.createElement("p");
	this.lbPlayersTitle.innerHTML = "Players: ";
	this.lbPlayersTitle.style.textAlign = "center";
	this.lbPlayersTitle.style.color = "white";
	this.lbPlayersTitle.style.margin = "0px";
	this.lbPlayersTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbPlayersTitle);
	this.lbPlayersSlider = document.createElement("input");
	this.lbPlayersSlider.classList.add("slider");
	this.lbPlayersSlider.type = "range";
	this.lbPlayersSlider.min = "2";
	this.lbPlayersSlider.max = gameData.maxPlayers.y;
	this.lbPlayersSlider.value = "0";
	this.lbPlayersSlider.style.margin = "0px";
	this.lbPlayersSlider.style.position = "fixed";
	this.lbPlayersSlider.style.appearance = "none";
	this.lbPlayersSlider.style.background = "lightgrey";
	this.lbPlayersSlider.style.outline = "none";
	this.lbPlayersSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbPlayersSlider);
	//Mode
	this.lbModeTitle = document.createElement("p");
	this.lbModeTitle.innerHTML = "Mode: ";
	this.lbModeTitle.style.textAlign = "center";
	this.lbModeTitle.style.color = "white";
	this.lbModeTitle.style.margin = "0px";
	this.lbModeTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbModeTitle);
	this.lbModeSlider = document.createElement("input");
	this.lbModeSlider.classList.add("slider");
	this.lbModeSlider.type = "range";
	this.lbModeSlider.max = "0";//gameModeData[1].settings.mode.y;// Change this
	this.lbModeSlider.value = "0";
	this.lbModeSlider.style.margin = "0px";
	this.lbModeSlider.style.position = "fixed";
	this.lbModeSlider.style.appearance = "none";
	this.lbModeSlider.style.background = "lightgrey";
	this.lbModeSlider.style.outline = "none";
	this.lbModeSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbModeSlider);
	//Map
	this.lbMapTitle = document.createElement("p");
	this.lbMapTitle.innerHTML = "Map: ";
	this.lbMapTitle.style.textAlign = "center";
	this.lbMapTitle.style.color = "white";
	this.lbMapTitle.style.margin = "0px";
	this.lbMapTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbMapTitle);
	this.lbMapSlider = document.createElement("input");
	this.lbMapSlider.classList.add("slider");
	this.lbMapSlider.type = "range";
	this.lbMapSlider.value = "0";
	this.lbMapSlider.style.margin = "0px";
	this.lbMapSlider.style.position = "fixed";
	this.lbMapSlider.style.appearance = "none";
	this.lbMapSlider.style.background = "lightgrey";
	this.lbMapSlider.style.outline = "none";
	this.lbMapSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbMapSlider);
	//Winning Points
	this.lbWinPointsTitle = document.createElement("p");
	this.lbWinPointsTitle.innerHTML = "Winning Points: ";
	this.lbWinPointsTitle.style.textAlign = "center";
	this.lbWinPointsTitle.style.color = "white";
	this.lbWinPointsTitle.style.margin = "0px";
	this.lbWinPointsTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbWinPointsTitle);
	this.lbWinPointsSlider = document.createElement("input");
	this.lbWinPointsSlider.classList.add("slider");
	this.lbWinPointsSlider.type = "range";
	this.lbWinPointsSlider.min = "1";
	this.lbWinPointsSlider.max = "100";
	this.lbWinPointsSlider.value = "10";
	this.lbWinPointsSlider.style.margin = "0px";
	this.lbWinPointsSlider.style.position = "fixed";
	this.lbWinPointsSlider.style.appearance = "none";
	this.lbWinPointsSlider.style.background = "lightgrey";
	this.lbWinPointsSlider.style.outline = "none";
	this.lbWinPointsSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbWinPointsSlider);
	//Object Amount
	this.lbObjAmountTitle = document.createElement("p");
	this.lbObjAmountTitle.innerHTML = "Object Amount: ";
	this.lbObjAmountTitle.style.textAlign = "center";
	this.lbObjAmountTitle.style.color = "white";
	this.lbObjAmountTitle.style.margin = "0px";
	this.lbObjAmountTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbObjAmountTitle);
	this.lbObjAmountSlider = document.createElement("input");
	this.lbObjAmountSlider.classList.add("slider");
	this.lbObjAmountSlider.type = "range";
	this.lbObjAmountSlider.max = "30"; //Change this
	this.lbObjAmountSlider.value = "0";
	this.lbObjAmountSlider.style.margin = "0px";
	this.lbObjAmountSlider.style.position = "fixed";
	this.lbObjAmountSlider.style.appearance = "none";
	this.lbObjAmountSlider.style.background = "lightgrey";
	this.lbObjAmountSlider.style.outline = "none";
	this.lbObjAmountSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbObjAmountSlider);
	//Line Length
	this.lbLineLengthTitle = document.createElement("p");
	this.lbLineLengthTitle.innerHTML = "Line Length: ";
	this.lbLineLengthTitle.style.textAlign = "center";
	this.lbLineLengthTitle.style.color = "white";
	this.lbLineLengthTitle.style.margin = "0px";
	this.lbLineLengthTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbLineLengthTitle);
	this.lbLineLengthSlider = document.createElement("input");
	this.lbLineLengthSlider.classList.add("slider");
	this.lbLineLengthSlider.type = "range";
	this.lbLineLengthSlider.min = "10";
	this.lbLineLengthSlider.max = "100";
	this.lbLineLengthSlider.value = "50";
	this.lbLineLengthSlider.style.margin = "0px";
	this.lbLineLengthSlider.style.position = "fixed";
	this.lbLineLengthSlider.style.appearance = "none";
	this.lbLineLengthSlider.style.background = "lightgrey";
	this.lbLineLengthSlider.style.outline = "none";
	this.lbLineLengthSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbLineLengthSlider);
	//Line Fade
	this.lbLineFadeTitle = document.createElement("p");
	this.lbLineFadeTitle.innerHTML = "Line Fade: ";
	this.lbLineFadeTitle.style.textAlign = "center";
	this.lbLineFadeTitle.style.color = "white";
	this.lbLineFadeTitle.style.margin = "0px";
	this.lbLineFadeTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbLineFadeTitle);
	this.lbLineFadeSlider = document.createElement("input");
	this.lbLineFadeSlider.type = "checkbox";
	this.lbLineFadeSlider.checked = true;
	this.lbLineFadeSlider.style.margin = "0px";
	this.lbLineFadeSlider.style.position = "fixed";
	this.lbLineFadeSlider.style.backgroundColor = "grey";
	this.lbLineFadeSlider.style.outline = "none";
	this.lbMenu.appendChild(this.lbLineFadeSlider);
	//Play
	this.lbPlayBttn = document.createElement("button");
	this.lbPlayBttn.innerHTML = "Play";
	this.lbPlayBttn.style.textAlign = "center";
	this.lbPlayBttn.style.backgroundColor = "gray"; //Change later
	this.lbPlayBttn.style.color = "white";
	this.lbPlayBttn.style.margin = "0px";
	this.lbPlayBttn.style.position = "fixed";
	this.lbPlayBttn.onmouseover = () => {
		this.lbPlayBttn.style.backgroundColor = "lightgrey";
	};
	this.lbPlayBttn.onmouseout = () => {
		this.lbPlayBttn.style.backgroundColor = "gray";
	};
	this.lbPlayBttn.onclick = () => {
		gameData.gameMode = 1;
		LBGM.resetGame(true);
	};
	this.lbMenu.appendChild(this.lbPlayBttn);
	//Back
	this.lbBackBttn = document.createElement("button");
	this.lbBackBttn.innerHTML = "Back";
	this.lbBackBttn.style.textAlign = "center";
	this.lbBackBttn.style.backgroundColor = "gray"; //Change later
	this.lbBackBttn.style.color = "white";
	this.lbBackBttn.style.margin = "0px";
	this.lbBackBttn.style.position = "fixed";
	this.lbBackBttn.onmouseover = () => {
		this.lbBackBttn.style.backgroundColor = "lightgrey";
	};
	this.lbBackBttn.onmouseout = () => {
		this.lbBackBttn.style.backgroundColor = "gray";
	};
	this.lbBackBttn.onclick = () => {
		this.menuState = 0;
	};
	this.lbMenu.appendChild(this.lbBackBttn);
	const update = () => this.update();
	this.update = function() {
		//Scale/Positioning
		//main menu
		this.mainBackground.style.width = screen.getDeviceRes().x+"px";
		this.mainBackground.style.height = screen.getDeviceRes().y+"px";
		this.menuSize = new Vector2(parseFloat(this.mainBackground.style.width), parseFloat(this.mainBackground.style.height));
		let halfSize = this.menuSize.div(2);
		this.mainTitle.style.left = (halfSize.x-(this.mainTitle.getBoundingClientRect().width/2))+"px";
		this.mainTitle.style.fontSize = (60*screen.getScale().x)+"px";
		this.tankWarBttn.style.left = (halfSize.x-(this.tankWarBttn.getBoundingClientRect().width/2))+"px";
		this.tankWarBttn.style.top = ((200*screen.getScale().y)-(this.tankWarBttn.getBoundingClientRect().height/2))+"px";
		this.tankWarBttn.style.width = (300*screen.getScale().x)+"px";
		this.tankWarBttn.style.height = (100*screen.getScale().y)+"px";
		this.tankWarBttn.style.fontSize = (40*screen.getScale().x)+"px";
		this.lineBattleBttn.style.left = (halfSize.x-(this.lineBattleBttn.getBoundingClientRect().width/2))+"px";
		this.lineBattleBttn.style.top = parseFloat(this.tankWarBttn.style.top)+100+"px";
		this.lineBattleBttn.style.width = (300*screen.getScale().x)+"px";
		this.lineBattleBttn.style.height = (100*screen.getScale().y)+"px";
		this.lineBattleBttn.style.fontSize = (40*screen.getScale().x)+"px";
		this.ballBouncersBttn.style.left = (halfSize.x-(this.ballBouncersBttn.getBoundingClientRect().width/2))+"px";
		this.ballBouncersBttn.style.top = parseFloat(this.lineBattleBttn.style.top)+100+"px";
		this.ballBouncersBttn.style.width = (300*screen.getScale().x)+"px";
		this.ballBouncersBttn.style.height = (100*screen.getScale().y)+"px";
		this.ballBouncersBttn.style.fontSize = (40*screen.getScale().x)+"px";
		//lb menu
		this.lbBackground.style.top = (halfSize.y-(this.lbBackground.getBoundingClientRect().height/2))+"px";
		this.lbBackground.style.left = (halfSize.x-(this.lbBackground.getBoundingClientRect().width/2))+"px";
		this.lbTitle.style.left = (halfSize.x-(this.lbTitle.getBoundingClientRect().width/2))+"px";
		this.lbTitle.style.fontSize = (60*screen.getScale().x)+"px";
		this.lbPlayersTitle.style.top = parseFloat(this.lbPlayersSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbPlayersTitle.style.left = (halfSize.x-(this.lbPlayersTitle.getBoundingClientRect().width/2))+"px";
		this.lbPlayersTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbPlayersTitle.innerHTML = "Players: "+gameData.maxPlayers.x;
		this.lbPlayersSlider.style.top = (120*screen.getScale().y)+"px";
		this.lbPlayersSlider.style.left = (halfSize.x-(this.lbPlayersSlider.getBoundingClientRect().width/2))+"px";
		this.lbPlayersSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbPlayersSlider.style.height = (20*screen.getScale().y)+"px";
		gameData.maxPlayers.x = parseInt(this.lbPlayersSlider.value);
		this.lbModeTitle.style.top = parseFloat(this.lbModeSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbModeTitle.style.left = (halfSize.x-(this.lbModeTitle.getBoundingClientRect().width/2))+"px";
		this.lbModeTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbModeTitle.innerHTML = "Mode: "+gameModeData[1].settings.modes[gameModeData[1].settings.mode.x].name;
		this.lbModeSlider.style.top = (180*screen.getScale().y)+"px";
		this.lbModeSlider.style.left = (halfSize.x-(this.lbModeSlider.getBoundingClientRect().width/2))+"px";
		this.lbModeSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbModeSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.mode.x = parseInt(this.lbModeSlider.value);
		this.lbMapTitle.style.top = parseFloat(this.lbMapSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbMapTitle.style.left = (halfSize.x-(this.lbMapTitle.getBoundingClientRect().width/2))+"px";
		this.lbMapTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbMapTitle.innerHTML = "Map: "+gameModeData[1].settings.maps[gameModeData[1].settings.map.x].id;
		this.lbMapSlider.style.top = (240*screen.getScale().y)+"px";
		this.lbMapSlider.style.left = (halfSize.x-(this.lbMapSlider.getBoundingClientRect().width/2))+"px";
		this.lbMapSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbMapSlider.style.height = (20*screen.getScale().y)+"px";
		this.lbMapSlider.max = gameModeData[1].settings.map.y;
		gameModeData[1].settings.map.x = parseInt(this.lbMapSlider.value);
		this.lbWinPointsTitle.style.top = parseFloat(this.lbWinPointsSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbWinPointsTitle.style.left = (halfSize.x-(this.lbWinPointsTitle.getBoundingClientRect().width/2))+"px";
		this.lbWinPointsTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbWinPointsTitle.innerHTML = "Winning Points: "+gameModeData[1].settings.winning_points;
		this.lbWinPointsSlider.style.top = (300*screen.getScale().y)+"px";
		this.lbWinPointsSlider.style.left = (halfSize.x-(this.lbWinPointsSlider.getBoundingClientRect().width/2))+"px";
		this.lbWinPointsSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbWinPointsSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.winning_points = parseInt(this.lbWinPointsSlider.value);
		this.lbObjAmountTitle.style.top = parseFloat(this.lbObjAmountSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbObjAmountTitle.style.left = (halfSize.x-(this.lbObjAmountTitle.getBoundingClientRect().width/2))+"px";
		this.lbObjAmountTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbObjAmountTitle.innerHTML = "Obstacles: "+gameModeData[1].settings.object_amount;
		this.lbObjAmountSlider.style.top = (360*screen.getScale().y)+"px";
		this.lbObjAmountSlider.style.left = (halfSize.x-(this.lbObjAmountSlider.getBoundingClientRect().width/2))+"px";
		this.lbObjAmountSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbObjAmountSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.object_amount = parseInt(this.lbObjAmountSlider.value);
		this.lbLineLengthTitle.style.top = parseFloat(this.lbLineLengthSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbLineLengthTitle.style.left = (halfSize.x-(this.lbLineLengthTitle.getBoundingClientRect().width/2))+"px";
		this.lbLineLengthTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbLineLengthTitle.innerHTML = "Line Length: "+gameModeData[1].settings.line_length;
		this.lbLineLengthSlider.style.top = (420*screen.getScale().y)+"px";
		this.lbLineLengthSlider.style.left = (halfSize.x-(this.lbLineLengthSlider.getBoundingClientRect().width/2))+"px";
		this.lbLineLengthSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbLineLengthSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.line_length = parseInt(this.lbLineLengthSlider.value);
		this.lbLineFadeTitle.style.top = parseFloat(this.lbLineFadeSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbLineFadeTitle.style.left = (halfSize.x-(this.lbLineFadeTitle.getBoundingClientRect().width/2))+"px";
		this.lbLineFadeTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbLineFadeTitle.innerHTML = "Line Fade: "+gameModeData[1].settings.line_fade.toString().toUpperCase();
		this.lbLineFadeSlider.style.top = (480*screen.getScale().y)+"px";
		this.lbLineFadeSlider.style.left = (halfSize.x-(this.lbLineFadeSlider.getBoundingClientRect().width/2))+"px";
		this.lbLineFadeSlider.style.width = (30*screen.getScale().x)+"px";
		this.lbLineFadeSlider.style.height = (30*screen.getScale().y)+"px";
		gameModeData[1].settings.line_fade = this.lbLineFadeSlider.checked;
		this.lbPlayBttn.style.left = (halfSize.x-(this.lbPlayBttn.getBoundingClientRect().width/2))+"px";
		this.lbPlayBttn.style.top = (520*screen.getScale().y)+"px";
		this.lbPlayBttn.style.width = (300*screen.getScale().x)+"px";
		this.lbPlayBttn.style.height = (50*screen.getScale().y)+"px";
		this.lbPlayBttn.style.fontSize = (40*screen.getScale().x)+"px";
		this.lbBackBttn.style.left = (halfSize.x-(this.lbBackBttn.getBoundingClientRect().width/2))+"px";
		this.lbBackBttn.style.top = (580*screen.getScale().y)+"px";
		this.lbBackBttn.style.width = (300*screen.getScale().x)+"px";
		this.lbBackBttn.style.height = (50*screen.getScale().y)+"px";
		this.lbBackBttn.style.fontSize = (40*screen.getScale().x)+"px";
		//State
		if (gameData.gameMode != -1) {
			this.mainBackground.style.display = "none";
			this.lbMenu.style.display = "none";
		} else {
			switch (this.menuState) {
				case 0:
					this.mainBackground.style.display = "block";
					this.lbMenu.style.display = "none";
				break;
				case 1:
					this.mainBackground.style.display = "none";
					this.lbMenu.style.display = "none";
				break;
				case 2:
					this.lbMenu.style.display = "block";
					this.mainBackground.style.display = "none";
				break;
				case 3:
					this.lbMenu.style.display = "none";
					this.mainBackground.style.display = "none";
				break;
			}
		}
	}
	addUpdate(update, "menu manager");
}

//Player manager
let players = [];
const playerControls = {
	1:{"left":Player1Left,"right":Player1Right},
	2:{"left":Player2Left,"right":Player2Right},
	3:{"left":Player3Left,"right":Player3Right},
	4:{"left":Player4Left,"right":Player4Right}
};

const pM = new playerManager();
let player_1 = new player("Player 1", null);

//const BLANK_PLAYER = new player();
function player(name="", profilePicPath="", controlMode=0, controllerNumber=0) {
	this.name = name;
	this.profilePicPath = profilePicPath; //Save this later
	this.controlMode = controlMode; //0 - keyboard, 1 - controller
	this.controllerNumber = controllerNumber;
	this.controls = null;
	this.index = -1;
	this.save = function() {
		let data = {"mode":this.controlMode, "controller_number":this.controllerNumber};
		localStorage.setItem(this.name, JSON.stringify(data));
	}
	this.load = function() {
		if (localStorage.getItem(this.name) != null) {
			let data = JSON.parse(localStorage.getItem(this.name));
			this.controlMode = data.mode;
			this.controllerNumber = data.controller_number;
		} else {
			this.save();
		}
	}
	this.load();
	pM.addPlayer(this);
}

function playerManager() {
	const defaultIcon = {
		1:{
			0:greyBall.getSrc(), //Change later
			1:blueBall.getSrc(),
			2:greyBall.getSrc() //Change later
		},
		2:{
			0:greyBall.getSrc(), //Change later
			1:redBall.getSrc(),
			2:greyBall.getSrc() //Change later
		},
		3:{
			0:greyBall.getSrc(), //Change later
			1:yellowBall.getSrc(),
			2:greyBall.getSrc() //Change later
		},
		4:{
			0:greyBall.getSrc(), //Change later
			1:greenBall.getSrc(),
			2:greyBall.getSrc() //Change later
		}
	}
	this.addPlayer = function(player=BLANK_PLAYER) {
		if (players.length < gameData.maxPlayers.y) {
			player.controls = playerControls[players.length+1];
			players.push(player);
			console.log(players.length);
		}
	}
	this.deletePlayer = function(number=2) {
		if (number != 1 && number <= 4) {
			players.splice(number, 1);
		}
	}
	this.getPlayer = function(id=1) {
		if (id < 1) {
			id = 1;
		}
		let thisNameTag = new nameTag(("player_"+id), "lineBattle");
		let player = getByNameTag(thisNameTag);
		return {"player_info":players[id-1], "player_obj":player};
	}
	const update = () => this.update();
	this.update = function() {
		if (gameData.maxPlayers.x > players.length) {
			let newPlayer = new player("Player "+(players.length+1), null);
		}
		if (gameData.maxPlayers.x < players.length) {
			players.pop();
		}
		if (user != null) {
			player_1.name = user.username;
			player_1.profilePicPath = user.avatar_url;
		}
		players.forEach((p, i) => {
			p.index = i;
			if (p.controls == null) {
				p.controls = playerControls[i+1];
			}
			p.controls.left.functions.x = () => {
				let thisNameTag = new nameTag(("player_"+(p.index+1)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				player.base.position.r -= 0.1*delta;
			}
			p.controls.right.functions.x = () => {
				let thisNameTag = new nameTag(("player_"+(p.index+1)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				player.base.position.r += 0.1*delta;
			}
			if (p.profilePicPath == null && gameData.gameMode != -1) {
				let iconPath = defaultIcon[i+1][gameData.gameMode];
				p.profilePicPath = iconPath;
			}
		});
	}
	addUpdate(update, "player manager");
}

const LBGM = new lineBattleGM();
function lineBattleGM() {
	let localMap = currentMap;
	this.data = {
		"player_speed":5,
		"player_size":new Vector2(50, 50),
		"line_size":new Vector2(15, 15),
		"player_image":{
			0:{
				"img":blueBall.getColor(),
				"color":new colorData("blue")
			},
			1:{
				"img":redBall.getColor(),
				"color":new colorData("red")
			},
			2:{
				"img":yellowBall.getColor(),
				"color":new colorData("yellow")
			},
			3:{
				"img":greenBall.getColor(),
				"color":new colorData("green")
			}
		},
		"obstacle":false,
		"player_points":[],
		"win_state":false,
		"game_finished":false,
		"game_loaded":false
	};
	this.spawnPlayers = function() {
		this.data.game_loaded = false;
		for (let i=0;i<gameData.maxPlayers.x;i++) {
			const data = this.data;
			let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
			deleteByNameTag(thisNameTag);
			let thisTextNameTag = new nameTag(("player_"+(i+1)+"_points"), "lineBattle");
			deleteByNameTag(thisTextNameTag);
			let thisLineNameTag = new nameTag(("player_"+(i+1)+"_line"), "lineBattle");
			deleteByNameTag(thisLineNameTag);
			let spawns = currentMap.spawns;
			let spawnPoint = ZERO;
			if (spawns.length > 4) {
				spawnPoint = spawns[rangeInt(0, spawns.length-1)];
			} else {
				spawnPoint = spawns[i];
			}
			let newPlayer = new Sprite(4, new baseObject(thisNameTag.duplicate(), data.player_size, spawnPoint.duplicate(), data.player_image[i].img.duplicate()));
			let thisPoints = 0;
			let pointsCal = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
			if (pointsCal != undefined) {
				thisPoints = pointsCal;
			}
			let playerPoints = new Text(5, thisPoints, new baseObject(thisTextNameTag.duplicate(), new Vector2("25px Arial", false, "center"), spawnPoint.duplicate().subV(new Vector2(0, newPlayer.base.size.div(2).y)), new colorData("white")));
			newPlayer.collectedPoints = false;
			newPlayer.dead = false;
			newPlayer.base.position.s = this.data.player_speed;
			newPlayer.linePieces = [];
			newPlayer.drawLine = () => {
				let position = new Vector2(newPlayer.base.position.x, newPlayer.base.position.y, newPlayer.base.position.r, newPlayer.base.position.o)
				let linePiece = new Rectangle(3, new baseObject(thisLineNameTag.duplicate(), data.line_size, position, data.player_image[i].color.duplicate()));
				linePiece.time = 0;
				newPlayer.linePieces.push(linePiece);
			};
		}
		for (let i=0;i<gameModeData[1].settings.object_amount;i++) {
			let thisNameTag = new nameTag(("obstacle_"+(i+1)), "lineBattle_obstacles");
			deleteByNameTag(thisNameTag);
			let spawnPoint = new Vector2(rangeFloat(0, 1280), rangeFloat(0, 720));
			let newObstacle = new Circle(3, new baseObject(thisNameTag.duplicate(), new Vector2(12.5, 12.5), spawnPoint.duplicate(), new colorData("red")));
		}
		let obstacleArray = getByNameTag(new nameTag("", "obstacles"), 2, false, true);
		if (obstacleArray != null) {
			if (Array.isArray(obstacleArray)) {
				objectArray.forEach((o) => {
					obstacleArray.forEach((o2) => {
						if (cirCollision(o, o2)) {
							o.base.position = new Vector2(rangeFloat(0, 1280), rangeFloat(0, 720));
						}
					});
				});
			} else {
				objectArray.forEach((o) => {
					if (cirCollision(o, obstacleArray)) {
						o.base.position = new Vector2(rangeFloat(0, 1280), rangeFloat(0, 720));
					}
				});
			}
		}
		setTimeout(() => {
			this.data.game_loaded = true;
		}, 1000);
	}
	const resetGame = () => {this.resetGame()};
	this.resetGame = function(resetPoints=false) {
		//Add points
		for (let i=0;i<gameData.maxPlayers.x;i++) {
			let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (this.data.player_points[i] == undefined) {
				this.data.player_points[i] = 0;
			}
			if (player != undefined && !player.dead && !player.collectedPoints && !this.data.obstacle) {
				this.data.player_points[(this.data.player_points.length-i)-1]++;
				player.collectedPoints = true;
			}
		}
		//Reset points
		if (resetPoints) {
			this.data.player_points = [];
			this.data.game_finished = false;
		}
		setTimeout(() => {
			this.data.win_state = false;
			//Reset players
			this.spawnPlayers();
		}, 1000);
	}
	this.update = function() {
		if (gameData.gameMode == 1) {
			//Check for tie
			let hasTied = this.data.player_points.filter(number => number == gameModeData[1].settings.winning_points).length > 1;
			//Check game win
			this.data.player_points.forEach((p, i) => {
				if (p >= gameModeData[1].settings.winning_points && !hasTied) {
					this.data.game_finished = true;
					winScreen.show((this.data.player_points.length-(i+1))+1);
				}
			});
			//Player spawn
			if (localMap == null && currentMap != null && currentMap != undefined) {
				localMap = currentMap;
				//this.spawnPlayers();
			}
			if (localMap != null && localMap.id != currentMap.id) {
				localMap = currentMap;
				//this.spawnPlayers();
			}
			for (let i=0;i<gameData.maxPlayers.x;i++) {
				if (localMap != null && localMap.id == currentMap.id) {
					let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (player != undefined) {
						//Dead
						if (player.dead) {
							player.base.color = greyBall.getColor();
						}
						//Win state
						if (this.data.win_state || isPaused) {
							player.base.position.s = 0;
						}
						if (!this.data.win_state && player.base.position.s == 0 && !isPaused) {
							player.base.position.s = this.data.player_speed;
						}
						//Wrap effect
						if (player.base.position.x < 0) {
							player.base.position.x = screen.resolution.x;
						}
						if (player.base.position.x > screen.resolution.x) {
							player.base.position.x = 0;
						}
						if (player.base.position.y < 0) {
							player.base.position.y = screen.resolution.y;
						}
						if (player.base.position.y > screen.resolution.y) {
							player.base.position.y = 0;
						}
						//Obstacle collisions
						let obstacleArray = getByNameTag(new nameTag("", "obstacles"), 2, false, true);
						if (obstacleArray != null && this.data.game_loaded) {
							if (Array.isArray(obstacleArray)) {
								obstacleArray.forEach((object) => {
									if (cirCollision(player, object)) {
										let thisPoints = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
										if (thisPoints != 0 && thisPoints != undefined) {
											this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1]--;
											thisPoints = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
										}
										deleteByNameTag(object.base.nameTag);
									}
								});
							} else {
								console.log(cirCollision(player, obstacleArray));
								if (cirCollision(player, obstacleArray)) {
									let thisPoints = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
									if (thisPoints != 0 && thisPoints != undefined) {
										this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1]--;
										thisPoints = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
									}
									deleteByNameTag(obstacleArray.base.nameTag);
								}
							}
						}
						//Player collisions
						for (let i=0;i<gameData.maxPlayers.x;i++) {
							if (!this.data.game_finished && !isPaused) {
								let thisNameTag2 = new nameTag(("player_"+(i+1)), "lineBattle");
								let player2 = getByNameTag(thisNameTag2);
								let isSame = player.base.nameTag.same(thisNameTag2);
								if (!isSame) {
									if(cirCollision(player, player2) && !this.data.win_state){
										if(player.base.position.x == player2.base.position.x){
											let randomDir = rangeInt();
											if (randomDir == 0) {
												player.base.position.r -= 0.5*delta;
												player2.base.position.r += 0.5*delta;
											} else {
												player.base.position.r += 0.5*delta;
												player2.base.position.r -= 0.5*delta;
											}
										}
										if(player.base.position.y == player2.base.position.y){
											let randomDir = rangeInt();
											if (randomDir == 0) {
												player.base.position.r -= 0.5*delta;
												player2.base.position.r += 0.5*delta;
											} else {
												player.base.position.r += 0.5*delta;
												player2.base.position.r -= 0.5*delta;
											}
										}
										if(player.base.position.x < player2.base.position.x){
											player.base.position.r -= 0.5*delta;
											player2.base.position.r += 0.5*delta;
										}
										if(player.base.position.x > player2.base.position.x){
											player.base.position.r += 0.5*delta;
											player2.base.position.r -= 0.5*delta;
										}
										if(player.base.position.y < player2.base.position.y){
											player.base.position.r -= 0.5*delta;
											player2.base.position.r += 0.5*delta;
										}
										if(player.base.position.y > player2.base.position.y){
											player.base.position.r += 0.5*delta;
											player2.base.position.r -= 0.5*delta;
										}
									}
									player2.linePieces.forEach((i) => {
										if (cirPolyCollision(player, i)) {
											this.data.win_state = true;
											player.dead = true;
										}
									});
								}
							}
						}
						//Points text
						let thisNameTag2 = new nameTag(("player_"+(i+1)+"_points"), "lineBattle");
						let playerPoints = getByNameTag(thisNameTag2);
						playerPoints.base.position = player.base.position.duplicate().subV(new Vector2(0, player.base.size.div(2).y));
						let pointsCal = this.data.player_points[(this.data.player_points.length-(parseInt(thisNameTag.name.replace("player_", ""))+1))+1];
						if (pointsCal == undefined) {
							playerPoints.text = 0; 
						} else {
							playerPoints.text = pointsCal; 
						}
						//Line code
						let line = player.linePieces;
						let lineLength = gameModeData[1].settings.line_length;
						let lastPiece = line[line.length-1];
						//Length limiter
						if (line.length == lineLength || this.data.win_state) {
							layer[line[0].layerNumber].splice(getByColorData(line[0].base.color, 0, true), 1);
							loaded = false;
							line.splice(0, 1);
						}
						//Draw line
						if (line.length != 0) {
							if (lastPiece != undefined && lastPiece.base.position.distance(player.base.position) >= (lastPiece.base.size.y/2) && line.length < lineLength) {
								player.drawLine();
							}
						} else {
							player.drawLine();
						}
						//Fade line
						let fadeOffset = gameModeData[1].settings.line_fade_offset;
						if (gameModeData[1].settings.line_fade) {
							line.forEach((l, index) => {
								let alpha = index/lineLength;
								l.base.color.alpha = alpha+fadeOffset;
							});
						} else {
							line.forEach((l, index) => {
								l.base.color.alpha = 1;
							});
						}
					}
				}
			}
			//Win state
			if (this.data.win_state) {
				resetGame();
			}
		} else {
			deleteByNameTag(new nameTag("", "lineBattle"), 2, true);
		}
	}
}

//Map creator
const BLANK_MAP = new Map();
function Map(id="#", backgroundColor="black", spawns=[new Vector2(),new Vector2(),new Vector2(),new Vector2()], objects=[], script=null, modded=false) {
	this.id = id; //id for map (so you can have scripts for certain maps)
	this.backgroundColor = backgroundColor; //canvas color
	this.spawns = spawns; //Array of vectors | 4 spawns | x/y/r | use r to set spawn rotation
	this.objects = objects; //Array of objects
	this.script = script; //external map function
	this.modded = modded;
	let loaded = false;
	this.isLoaded = function() {
		return loaded;
	}
	//Loads map objects
	this.load = function() {
		if (!loaded) {
			//Hides object while loading
			let players = objectArray.filter((o) => {
				return o.type == "sprite";
			});
			for (let i=0;i<players.length;i++) {
				let thisLineNameTag = new nameTag(("player_"+(i+1)+"_line"), "lineBattle");
				deleteByNameTag(thisLineNameTag);
				players[i].base.position.s = 0;
				players[i].base.color.alpha = 0;
			}
			this.objects.forEach((x) => {addObject(x)});
			addUpdate(mapUpdate, "map:"+id);
			console.log("%cMap:'"+id+"' Loaded!", "color:green");
			if (gameData.gameMode == 1) {
				LBGM.resetGame(true);
			}
			loaded = true;
		}
	}
	//Unloads map objects
	this.unload = function() {
		if (loaded) {
			this.objects.forEach((x) => {deleteByNameTag(x.base.nameTag)});
			deleteUpdate(1, "map:"+id);
			console.log("%cMap:'"+id+"' Unloaded!", "color:orange");
			loaded = false;
			if (gameData.gameMode == 1) {
				LBGM.resetGame(true);
			}
		}
	}
	//Updates map
	const mapUpdate = () => this.update();
	this.update = function() {
		screen.setColor(this.backgroundColor);
		if (this.script != null) {
			this.script();
		}
		if (currentMap.id != this.id && loaded) {
			this.unload();
		}
	}
	this.unload();
}

function addMap(map=BLANK_MAP, mode=0) {
	gameModeData[mode].settings.maps.push(map);
	//gameModeData[mode].settings.map.y++;
}

function deleteMap(id="", mode=0, include=false, modded=false) {
	gameModeData[mode].settings.maps.forEach((m, i) => {
		if (!include) {
			if (m.id == id) {
				m.unload();
				gameModeData[mode].settings.maps.splice(i, 1);
			}
		} else {
			if ((m.id == id || m.id.includes(id)) && m.modded == modded) {
				m.unload();
				gameModeData[mode].settings.maps.splice(i, 1);
			}
		}
	});
}

function updateMap() {
	for (let i=0;i<gameModeData.length;i++) {
		if (gameModeData[i].settings.map.x < 0) {
			gameModeData[i].settings.map.x = 0;
		}
		if (gameModeData[i].settings.map.x > gameModeData[i].settings.map.y) {
			gameModeData[i].settings.map.x = gameModeData[i].settings.map.y;
		}
		gameModeData[i].settings.map.y = gameModeData[i].settings.maps.length-1;
	}
	if (modeData != undefined) {
		let mapData = modeData.settings.map;
		let mapArray = modeData.settings.maps;
		if (mapData.x < 0) {
			mapData.x = 0;
		}
		if (mapData.x > mapData.y) {
			mapData.x = mapData.y;
		}
		let newMap = mapArray[mapData.x];
		if (newMap != undefined) {
			currentMap = newMap;
		}
		currentMap.load();
	}
}

//Main game loop
function gameUpdateLoop() {
	modeData = gameModeData[gameData.gameMode];
	updateMap();
	LBGM.update();
	if (!checkLogin) {
		updateUser();
		checkLogin = true;
	}
	if (gameData.maxPlayers.x < 0) {
		gameData.maxPlayers.x = 0;
	}
	if (gameData.maxPlayers.x > gameData.maxPlayers.y) {
		gameData.maxPlayers.x = gameData.maxPlayers.y;
	}
	deleteByNameTag(new nameTag("delete"), 1);
}

//Init
addMap(map_abyss, 1);
addUpdate(gameUpdateLoop, "mainGameLoop", "main");

//BlueBall = new Sprite(1, new baseObject(new nameTag("blue", "lineBattle"), new Vector2(50, 50), new Vector2(35, 35, -degToRad(90)), blueBall.getColor()));
//RedBall = new Sprite(1, new baseObject(new nameTag("red", "lineBattle"), new Vector2(50, 50), new Vector2(1245, 35, -degToRad(90)), redBall.getColor()));
//YellowBall = new Sprite(1, new baseObject(new nameTag("yellow", "lineBattle"), new Vector2(50, 50), new Vector2(35, 685, degToRad(90)), yellowBall.getColor()));
//GreenBall = new Sprite(1, new baseObject(new nameTag("green", "lineBattle"), new Vector2(50, 50), new Vector2(1245, 685, degToRad(90)), greenBall.getColor()));