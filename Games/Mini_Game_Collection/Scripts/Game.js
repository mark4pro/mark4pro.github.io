//Set screen size
engineSettings.Settings_Menu.Image_Smoothing = false;
engineSettings.Settings_Menu.Show_Debug_Cursor = false;
screen.setResolution(new Vector2(1280,720));

//Create mod menu
ModLoader.createMenu();

//Images
//Main Menu
let mainMenuBG = new imageData("mainMenuBG", imagePath+"Title_Screen.png", new Vector2(1280, 720));
//Line Battle/Ball Bouncers Assets
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
			"line_alpha_cutoff":0, //only detects collisions at or above this value
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

//Option menu addon
const optionAddon = new optionMenuAddon();

function optionMenuAddon() {
	this.lineBattleSettingsDiv = document.createElement('div');
	this.lineBattleSettingsDiv.style.marginLeft = "0px";
	this.lineBattleSettingsDiv.style.marginRight = "0px";
	this.lineBattleSettingsDiv.style.marginTop = "0px";
	this.lineBattleSettingsDiv.style.marginBottom = "0px";
	this.lineBattleSettingsDiv.style.width = "100%";
	this.lineBattleSettingsDiv.style.height = "50px";
	this.lineBattleSettingsDiv.style.backgroundColor = "darkgrey";
	OptionsMenu.optionsSep.appendChild(this.lineBattleSettingsDiv);
	this.lineBattleSettingsTxt = document.createElement('p');
	this.lineBattleSettingsTxt.innerHTML = "Line Battle";
	this.lineBattleSettingsTxt.style.fontSize = "35px";
	this.lineBattleSettingsTxt.style.marginLeft = "0px";
	this.lineBattleSettingsTxt.style.marginRight = "0px";
	this.lineBattleSettingsTxt.style.marginTop = "0px";
	this.lineBattleSettingsTxt.style.marginBottom = "0px";
	this.lineBattleSettingsTxt.style.width = "100%";
	this.lineBattleSettingsTxt.style.height = "100%";
	this.lineBattleSettingsTxt.style.textAlign = "center";
	this.lineBattleSettingsTxt.style.color = "white";
	this.lineBattleSettingsDiv.appendChild(this.lineBattleSettingsTxt);
	//Line fade option
	this.lineFadeDiv = document.createElement('div');
	this.lineFadeDiv.style.marginLeft = "0px";
	this.lineFadeDiv.style.marginRight = "0px";
	this.lineFadeDiv.style.marginTop = "0px";
	this.lineFadeDiv.style.marginBottom = "0px";
	this.lineFadeDiv.style.width = "100%";
	this.lineFadeDiv.style.height = "50px";
	this.lineFadeDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.lineFadeDiv);
	this.lineFadeTxt = document.createElement('p');
	this.lineFadeTxt.innerHTML = "Line Fade:";
	this.lineFadeTxt.style.fontSize = "35px";
	this.lineFadeTxt.style.marginLeft = "0px";
	this.lineFadeTxt.style.marginRight = "0px";
	this.lineFadeTxt.style.marginTop = "0px";
	this.lineFadeTxt.style.marginBottom = "0px";
	this.lineFadeTxt.style.width = "100%";
	this.lineFadeTxt.style.height = "100%";
	this.lineFadeTxt.style.color = "white";
	this.lineFadeTxt.style.display = "inline";
	this.lineFadeDiv.appendChild(this.lineFadeTxt);
	this.lineFadeChkBx = document.createElement('input');
	this.lineFadeChkBx.type = "checkbox";
	this.lineFadeChkBx.style.marginLeft = "0px";
	this.lineFadeChkBx.style.marginRight = "0px";
	this.lineFadeChkBx.style.marginTop = "0px";
	this.lineFadeChkBx.style.marginBottom = "0px";
	this.lineFadeChkBx.style.width = "50px";
	this.lineFadeChkBx.style.height = "100%";
	this.lineFadeChkBx.style.float = "right";
	this.lineFadeChkBx.style.display = "inline";
	this.lineFadeChkBx.checked = true;
	if (localStorage.getItem("Line_Fade") != null) {
		this.lineFadeChkBx.checked = JSON.parse(localStorage.getItem("Line_Fade"));
	}
	this.lineFadeChkBx.onchange = () => {
		localStorage.setItem("Line_Fade", JSON.stringify(this.lineFadeChkBx.checked));
	};
	this.lineFadeDiv.appendChild(this.lineFadeChkBx);
	//Line length option
	this.lineLengthDiv = document.createElement('div');
	this.lineLengthDiv.style.marginLeft = "0px";
	this.lineLengthDiv.style.marginRight = "0px";
	this.lineLengthDiv.style.marginTop = "0px";
	this.lineLengthDiv.style.marginBottom = "0px";
	this.lineLengthDiv.style.width = "100%";
	this.lineLengthDiv.style.height = "50px";
	this.lineLengthDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.lineLengthDiv);
	this.lineLengthTxt = document.createElement('p');
	this.lineLengthTxt.innerHTML = "Line Length:";
	this.lineLengthTxt.style.fontSize = "35px";
	this.lineLengthTxt.style.marginLeft = "0px";
	this.lineLengthTxt.style.marginRight = "0px";
	this.lineLengthTxt.style.marginTop = "0px";
	this.lineLengthTxt.style.marginBottom = "0px";
	this.lineLengthTxt.style.width = "100%";
	this.lineLengthTxt.style.height = "100%";
	this.lineLengthTxt.style.color = "white";
	this.lineLengthTxt.style.display = "inline";
	this.lineLengthDiv.appendChild(this.lineLengthTxt);
	this.lineLengthSlider = document.createElement("input");
	this.lineLengthSlider.classList.add("slider");
	this.lineLengthSlider.type = "range";
	this.lineLengthSlider.value = "50";
	this.lineLengthSlider.min = "10";
	this.lineLengthSlider.max = "200";
	this.lineLengthSlider.style.width = "50%";
	this.lineLengthSlider.style.height = "50%";
	this.lineLengthSlider.style.marginLeft = "10px";
	this.lineLengthSlider.style.marginRight = "0px";
	this.lineLengthSlider.style.marginTop = "0px";
	this.lineLengthSlider.style.marginBottom = "0px";
	this.lineLengthSlider.style.appearance = "none";
	this.lineLengthSlider.style.background = "lightgrey";
	this.lineLengthSlider.style.outline = "none";
	this.lineLengthSlider.style.borderRadius = "90px";
	this.lineLengthSlider.style.display = "inline";
	if (localStorage.getItem("Line_Length") != null) {
		this.lineLengthSlider.value = JSON.parse(localStorage.getItem("Line_Length"));
	}
	this.lineLengthSlider.onchange = () => {
		localStorage.setItem("Line_Length", JSON.stringify(this.lineLengthSlider.value));
	};
	this.lineLengthDiv.appendChild(this.lineLengthSlider);
	this.lineLengthValueTxt = document.createElement('p');
	this.lineLengthValueTxt.innerHTML = "0";
	this.lineLengthValueTxt.style.fontSize = "35px";
	this.lineLengthValueTxt.style.marginLeft = "10px";
	this.lineLengthValueTxt.style.marginRight = "0px";
	this.lineLengthValueTxt.style.marginTop = "0px";
	this.lineLengthValueTxt.style.marginBottom = "0px";
	this.lineLengthValueTxt.style.width = "100%";
	this.lineLengthValueTxt.style.height = "100%";
	this.lineLengthValueTxt.style.color = "white";
	this.lineLengthValueTxt.style.display = "inline";
	this.lineLengthDiv.appendChild(this.lineLengthValueTxt);
	//Line Collision Cutoff option
	this.lineCollCutoffDiv = document.createElement('div');
	this.lineCollCutoffDiv.style.marginLeft = "0px";
	this.lineCollCutoffDiv.style.marginRight = "0px";
	this.lineCollCutoffDiv.style.marginTop = "0px";
	this.lineCollCutoffDiv.style.marginBottom = "0px";
	this.lineCollCutoffDiv.style.width = "100%";
	this.lineCollCutoffDiv.style.height = "50px";
	this.lineCollCutoffDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.lineCollCutoffDiv);
	this.lineCollCutoffTxt = document.createElement('p');
	this.lineCollCutoffTxt.innerHTML = "Line Alpha Cutoff:";
	this.lineCollCutoffTxt.style.fontSize = "35px";
	this.lineCollCutoffTxt.style.marginLeft = "0px";
	this.lineCollCutoffTxt.style.marginRight = "0px";
	this.lineCollCutoffTxt.style.marginTop = "0px";
	this.lineCollCutoffTxt.style.marginBottom = "0px";
	this.lineCollCutoffTxt.style.width = "100%";
	this.lineCollCutoffTxt.style.height = "100%";
	this.lineCollCutoffTxt.style.color = "white";
	this.lineCollCutoffTxt.style.display = "inline";
	this.lineCollCutoffDiv.appendChild(this.lineCollCutoffTxt);
	this.lineCollCutoffSlider = document.createElement("input");
	this.lineCollCutoffSlider.classList.add("slider");
	this.lineCollCutoffSlider.type = "range";
	this.lineCollCutoffSlider.value = "0";
	this.lineCollCutoffSlider.min = "0";
	this.lineCollCutoffSlider.max = "1";
	this.lineCollCutoffSlider.step = "0.01";
	this.lineCollCutoffSlider.style.width = "35%";
	this.lineCollCutoffSlider.style.height = "50%";
	this.lineCollCutoffSlider.style.marginLeft = "10px";
	this.lineCollCutoffSlider.style.marginRight = "0px";
	this.lineCollCutoffSlider.style.marginTop = "0px";
	this.lineCollCutoffSlider.style.marginBottom = "0px";
	this.lineCollCutoffSlider.style.appearance = "none";
	this.lineCollCutoffSlider.style.background = "lightgrey";
	this.lineCollCutoffSlider.style.outline = "none";
	this.lineCollCutoffSlider.style.borderRadius = "90px";
	this.lineCollCutoffSlider.style.display = "inline";
	if (localStorage.getItem("Line_Collision_Cutoff") != null) {
		this.lineCollCutoffSlider.value = JSON.parse(localStorage.getItem("Line_Collision_Cutoff"));
	}
	this.lineCollCutoffSlider.onchange = () => {
		localStorage.setItem("Line_Collision_Cutoff", JSON.stringify(this.lineCollCutoffSlider.value));
	};
	this.lineCollCutoffDiv.appendChild(this.lineCollCutoffSlider);
	this.lineCollCutoffValueTxt = document.createElement('p');
	this.lineCollCutoffValueTxt.innerHTML = "OFF";
	this.lineCollCutoffValueTxt.style.fontSize = "35px";
	this.lineCollCutoffValueTxt.style.marginLeft = "10px";
	this.lineCollCutoffValueTxt.style.marginRight = "0px";
	this.lineCollCutoffValueTxt.style.marginTop = "0px";
	this.lineCollCutoffValueTxt.style.marginBottom = "0px";
	this.lineCollCutoffValueTxt.style.width = "100%";
	this.lineCollCutoffValueTxt.style.height = "100%";
	this.lineCollCutoffValueTxt.style.color = "white";
	this.lineCollCutoffValueTxt.style.display = "inline";
	this.lineCollCutoffDiv.appendChild(this.lineCollCutoffValueTxt);
	const update = () => {
		gameModeData[1].settings.line_fade = this.lineFadeChkBx.checked;
		gameModeData[1].settings.line_length = this.lineLengthSlider.value;
		this.lineLengthValueTxt.innerHTML = this.lineLengthSlider.value;
		gameModeData[1].settings.line_alpha_cutoff = this.lineCollCutoffSlider.value;
		if (this.lineCollCutoffSlider.value == 0) {
			this.lineCollCutoffValueTxt.innerHTML = "OFF";
		} else {
			this.lineCollCutoffValueTxt.innerHTML = Math.round(this.lineCollCutoffSlider.value*100)+"%";
		}
	}
	addUpdate(update, "optionsAddon");
}

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
	let mainMenuTag = "MainMenu";
	this.mainMenuBG = null;
	this.mainMenuLineBattleBttnLink = null;
	this.mainGjLoginBttnLink = null;
	let gjLoginTag = "gameJolt";
	this.gjLoginBG = null;
	this.gjLoginBttnTxt = null;
	this.gjLoginBttnLink = null;
	this.gjLoginCloseBttnLink = null;
	this.spawnGJLogin = function() {
		this.gjLoginBG = new Rectangle(4, new baseObject(true, new nameTag("Background", gjLoginTag), new Vector2(300, 200), screen.halfResolution, new colorData("darkgrey"), new Shadow(new Vector2(5, 5), "black", 5)));
		this.gjLoginTitle = new Text(5, "Game Jolt Login", new baseObject(true, new nameTag("Title", gjLoginTag), new Vector2("30px Arial", false, "center"), screen.halfResolution.subV(new Vector2(0, 82.5)), new colorData("white")));
		this.userNameTxt = new Text(5, "Username:", new baseObject(true, new nameTag("Username_Text", gjLoginTag), new Vector2("20px Arial", false, "center"), screen.halfResolution.subV(new Vector2(75, 35)), new colorData("white")));
		this.userNameTxtBox = new TextBox(5, "30px Arial", "white", new baseObject(true, new nameTag("Username", gjLoginTag), new Vector2(125, 50), screen.halfResolution.subV(new Vector2(-50, 35)), new colorData("black")));
		this.tokenTxt = new Text(5, "Token:", new baseObject(true, new nameTag("Token_Text", gjLoginTag), new Vector2("20px Arial", false, "center"), screen.halfResolution.subV(new Vector2(75, -20)), new colorData("white")));
		this.tokenTxtBox = new TextBox(5, "30px Arial", "white", new baseObject(true, new nameTag("Token", gjLoginTag), new Vector2(125, 50), screen.halfResolution.subV(new Vector2(-50, -20)), new colorData("black")));
		this.gjLoginBttn = new Rectangle(5, new baseObject(true, new nameTag("Login_Bttn", gjLoginTag), new Vector2(75, 35), screen.halfResolution.subV(new Vector2(0, -75)), new colorData("black"), new Shadow(new Vector2(5, 5), "black", 7)));
		this.gjLoginBttnTxt = new Text(6, "Login", new baseObject(true, new nameTag("Login_Bttn_Txt", gjLoginTag), new Vector2("20px Arial", false, "center"), screen.halfResolution.subV(new Vector2(0, -75)), new colorData("white")));
		this.gjLoginBttnLink = new buttonLink(this.gjLoginBttn, this.gjLoginBttnTxt, recCollision, () => {
			if (user != null) {
				GJAPI.UserLogout();
				user = null;
			} else {
				login(this.userNameTxtBox.value, this.tokenTxtBox.value);
			}
		}, new Vector2(new colorData("black"), new colorData("grey")));
		this.gjLoginBttnLink.link();
		this.gjLoginCloseBttn = new Sprite(5, new baseObject(true, new nameTag("Close_Bttn", gjLoginTag), new Vector2(15, 15), screen.halfResolution.subV(new Vector2(-140, 90)), Close_UI.getColor(), new Shadow(new Vector2(5, 5), "black", 7)));
		this.gjLoginCloseBttnLink = new buttonLink(this.gjLoginCloseBttn, null, recCollision, () => {
			this.deleteGJLogin();
		}, new Vector2(Close_UI.getColor(), Close_UI_Hover.getColor()));
		this.gjLoginCloseBttnLink.link();
	}
	this.deleteGJLogin = function() {
		this.gjLoginBttnLink.unlink();
		this.gjLoginCloseBttnLink.unlink();
		deleteByNameTag(new nameTag("", gjLoginTag), 2);
		this.gjLoginBG = null;
		this.gjLoginBttnTxt = null;
		this.gjLoginBttnLink = null;
		this.gjLoginCloseBttnLink = null;
		if (!window.location.href.includes("gamejolt")) {
			this.mainLoginBttnLink.link();
		}
	}
	this.spawnMainMenu = function() {
		this.mainMenuBG = new Sprite(1, new baseObject(true, new nameTag("Background", mainMenuTag), screen.resolution, screen.halfResolution, mainMenuBG.getColor()));
		this.mainMenuTitle = new Text(2, "Minigame Collection", new baseObject(true, new nameTag("Title", mainMenuTag), new Vector2("60px Arial", false, "center"), new Vector2(screen.halfResolution.x, 40), new colorData("white"), new Shadow(new Vector2(2.5, 2.5), "black", 0)));
		this.mainMenuLineBattleBttn = new Rectangle(2, new baseObject(true, new nameTag("LineBattleBttn", mainMenuTag), new Vector2(200, 100), screen.halfResolution, new colorData("black"), new Shadow(new Vector2(5, 5), "black", 7)));
		this.mainMenuLineBattleBttnTxt = new Text(3, "Line Battle", new baseObject(true, new nameTag("LineBattleBttnTxt", mainMenuTag), new Vector2("40px Arial", false, "center"), screen.halfResolution, new colorData("white")));
		this.mainMenuLineBattleBttnLink = new buttonLink(this.mainMenuLineBattleBttn, this.mainMenuLineBattleBttnTxt, recCollision, () => {
			if (this.gjLoginBG == null) {
				this.menuState = 2;
				this.lbBackground.play();
			}
		}, new Vector2(new colorData("black"), new colorData("grey")));
		this.mainMenuLineBattleBttnLink.link();
		if (!window.location.href.includes("gamejolt")) {
			this.mainGjLoginBttn = new Rectangle(2, new baseObject(true, new nameTag("Login_Bttn", mainMenuTag), new Vector2(100, 50), new Vector2(1225, 690), new colorData("black"), new Shadow(new Vector2(0, 0), "white", 5)));
			this.mainGjLoginTxt = new Text(6, "Login", new baseObject(true, new nameTag("Login_Bttn_Txt", mainMenuTag), new Vector2("20px Arial", false, "center"), new Vector2(1225, 690), new colorData("white")));
			this.mainLoginBttnLink = new buttonLink(this.mainGjLoginBttn, this.mainGjLoginTxt, recCollision, () => {
				console.log();
				if (this.gjLoginBG == null) {
					this.spawnGJLogin();
				}
			}, new Vector2(new colorData("black"), new colorData("grey")));
			this.mainLoginBttnLink.link();
		}
	}
	this.deleteMainMenu = function() {
		this.mainMenuLineBattleBttnLink.unlink();
		if (!window.location.href.includes("gamejolt")) {
			this.mainLoginBttnLink.unlink();
		}
		deleteByNameTag(new nameTag("", mainMenuTag), 2);
		this.mainMenuBG = null;
	}
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
	this.lbModeSlider.max = "1";//gameModeData[1].settings.mode.y;// Change this
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
	this.lbWinPointsSlider.max = "1000";
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
	const update = () => {
		//GJ
		if (this.gjLoginBttnTxt != null) {
			if (user != null) {
				this.gjLoginBttnTxt.text = "Logout";
			} else {
				this.gjLoginBttnTxt.text = "Login";
			}
		}
		//Scale/Positioning
		this.menuSize = new Vector2(screen.getDeviceRes().x, screen.getDeviceRes().y);
		let halfSize = this.menuSize.div(2);
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
			if (this.mainMenuBG != null) {
				this.deleteMainMenu();
			}
			this.lbMenu.style.display = "none";
		} else {
			switch (this.menuState) {
				case 0:
					if (this.mainMenuBG == null) {
						this.spawnMainMenu();
					}
					this.lbMenu.style.display = "none";
				break;
				case 1:
					if (this.mainMenuBG != null) {
						this.deleteMainMenu();
					}
					this.lbMenu.style.display = "none";
				break;
				case 2:
					if (this.mainMenuBG != null) {
						this.deleteMainMenu();
					}
					this.lbMenu.style.display = "block";
				break;
				case 3:
					if (this.mainMenuBG != null) {
						this.deleteMainMenu();
					}
					this.lbMenu.style.display = "none";
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
		"player_speed":5, //Every players speed
		"player_size":new Vector2(50, 50), //Every players size
		"line_size":new Vector2(15, 15), //Every players line size
		"obstacle":false,
		"player_points":[], //An array that stores each players points
		"end_of_match":false, //True when someone wins a match
		"win_state":false, //True when someone wins the game
		"players_loaded":false, //True when all players are loaded
		"obstacles_loaded":false, //True when all obstacles are loaded
		"goal_loaded":false, //True when the goal is loaded
		"game_loaded":false, //True when the players, obstacles, and goal is loaded
		"teams":false,
		"pointCollector":false,
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
		"obstacles_data":{
			0:{
				"color":new colorData("darkred"),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, null, "-"),
				"description":"Takes a point away from you."
			},
			1:{
				"color":new colorData("#FF4A00"),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, 1, "-", "-"),
				"description":"Takes a point away from everyone."
			},
			"length":2
		},
		"points_data":{
			0:{
				"color":new colorData("green"),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, null, "+"),
				"description":"Gives you 1 point"
			},
			1:{
				"color":new colorData("#FFFD00"),
				"size":new Vector2(5, 5),
				"points":new Vector2(2, null, "+"),
				"description":"Gives you 2 point"
			},
			2:{
				"color":new colorData("purple"),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, 1, "+", "-"),
				"description":"Steals 1 point from opponents and gives you 1 point"
			},
			3:{
				"color":new colorData("lightblue"),
				"size":new Vector2(5, 5),
				"points":new Vector2(2, null, "*"),
				"description":"Doubles your points"
			},
			4:{
				"color":new colorData("darkblue"),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, 2, "+", "/"),
				"description":"Halves your opponents points and gives you 1 point"
			},
			"length":5
		}
	};
	this.getObstacleTypeData = function(type) {
		return this.data.obstacles_data[type];
	}
	this.getGoalTypeData = function(type) {
		return this.data.points_data[type];
	}
	this.changePointsFromOpponents = function(exceptions=null, points=0, experesion="-") {
		for (let i=0;i<gameData.maxPlayers.x;i++) {
			let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
			let thisPoints = this.getPoints(thisNameTag);
			let player = getByNameTag(thisNameTag);
			if (exceptions != null) {
				let check = exceptions.some(e => e.same(thisNameTag));
				if (!check && thisPoints.points > 0) {
					switch (experesion) {
						case "+":
							thisPoints.points += points;
						break;
						case "-":
							thisPoints.points -= points;
						break;
						case "*":
							thisPoints.points *= points;
						break;
						case "/":
							thisPoints.points /= points;
						break;
					}
				}
			} else {
				if (thisPoints.points > 0) {
					switch (experesion) {
						case "+":
							thisPoints.points += points;
						break;
						case "-":
							thisPoints.points -= points;
						break;
						case "*":
							thisPoints.points *= points;
						break;
						case "/":
							thisPoints.points /= points;
						break;
					}
				}
			}
		}
	}
	this.checkPoints = function(nameTag) {
		if ( this.data.player_points.filter((p) => nameTag.same(p.nameTag)).length == 0) {
			this.data.player_points.push({"points":0,"nameTag":nameTag});
		}
	}
	this.getPoints = function(nameTag) {
		this.checkPoints(nameTag);
		return this.data.player_points.filter((p) => nameTag.same(p.nameTag))[0];
	}
	this.spawnPlayers = function() {
		this.data.players_loaded = false;
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
			let newPlayer = new Sprite(5, new baseObject(true, thisNameTag.duplicate(), data.player_size, spawnPoint.duplicate(), data.player_image[i].img.duplicate()));
			let thisPoints = this.data.player_points.filter((p) => thisNameTag.same(p.nameTag));
			if (thisPoints.length == 0) {
				thisPoints[0] = {"points":0,"nameTag":thisNameTag};
			}
			let playerPoints = new Text(5, thisPoints[0].points, new baseObject(true, thisTextNameTag.duplicate(), new Vector2("25px Arial", false, "center"), spawnPoint.duplicate().subV(new Vector2(0, newPlayer.base.size.div(2).y)), new colorData("white")));
			newPlayer.collectedPoints = false;
			newPlayer.dead = false;
			newPlayer.base.position.s = this.data.player_speed;
			newPlayer.hitPlayer = false;
			newPlayer.linePieces = [];
			newPlayer.lineNameTag = thisLineNameTag.duplicate();
			newPlayer.drawLine = () => {
				let position = new Vector2(newPlayer.base.position.x, newPlayer.base.position.y, newPlayer.base.position.r, newPlayer.base.position.o)
				let linePiece = new Rectangle(4, new baseObject(false, newPlayer.lineNameTag.duplicate(), data.line_size, position, data.
				player_image[i].color.duplicate()));
				linePiece.time = 0;
				newPlayer.linePieces.push(linePiece.duplicate());
				addObject(newPlayer.linePieces[newPlayer.linePieces.length-1]);
			};
		}
		setTimeout(() => {
			this.data.players_loaded = true;
		}, 1000);
	}
	this.spawnObstacles = function() {
		this.data.obstacles_loaded = false;
		for (let i=0;i<gameModeData[1].settings.object_amount;i++) {
			let thisNameTag = new nameTag(("obstacle_"+(i+1)), "lineBattle_obstacles");
			deleteByNameTag(thisNameTag);
			let obstacleType = rangeInt(0, this.data.obstacles_data.length-1);
			let spawnPoint = new Vector2(rangeFloat(100, 1180), rangeFloat(10, 710));
			let newObstacle = new Circle(2, new baseObject(true, thisNameTag.duplicate(), this.getObstacleTypeData(obstacleType).size, spawnPoint.duplicate(), this.getObstacleTypeData(obstacleType).color));
			newObstacle.obstacleType = obstacleType;
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
			this.data.obstacles_loaded = true;
		}, 1000);
	}
	this.spawnGoal = function(silent=false) {
		if (!silent) {
		this.data.goal_loaded = false;
		}
		if (this.data.pointCollector) {
			let thisNameTag = new nameTag("goal", "lineBattle_goal");
			deleteByNameTag(thisNameTag);
			let goalType = rangeInt(0, this.data.points_data.length-1);
			let spawnPoint = new Vector2(rangeFloat(100, 1180), rangeFloat(10, 710));
			let newGoal = new Circle(3, new baseObject(true, thisNameTag.duplicate(), this.getGoalTypeData(goalType).size, spawnPoint.duplicate(), this.getGoalTypeData(goalType).color));
			newGoal.goalType = goalType;
		}
		
		if (!silent) {
			setTimeout(() => {
				this.data.goal_loaded = true;
			}, 1000);
		}
	}
	const resetGame = () => {this.resetGame()};
	this.resetGame = function(resetPoints=false) {
		//Add points
		for (let i=0;i<gameData.maxPlayers.x;i++) {
			let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			this.checkPoints(thisNameTag);
			if (player != undefined && !player.dead && !player.collectedPoints && !this.data.obstacle) {
				this.getPoints(thisNameTag).points++;
				player.collectedPoints = true;
			}
		}
		//Reset points
		if (resetPoints) {
			this.data.player_points = [];
			this.data.win_state = false;
		}
		setTimeout(() => {
			this.data.end_of_match = false;
			//Reset players
			this.spawnPlayers();
			//Reset obstacles
			this.spawnObstacles();
			//Reset goal
			this.spawnGoal();
		}, 1000);
	}
	this.update = function() {
		if (gameData.gameMode == 1) {
			//Sets vars for each mode
			switch (gameModeData[1].settings.mode.x) {
				case 0:
					this.data.pointCollector = false;
					this.data.teams = false;
				break;
				case 1:
					this.data.pointCollector = true;
					this.data.teams = false;
				break;
				case 2:
					this.data.pointCollector = false;
					this.data.teams = true;
				break;
				case 3:
					this.data.pointCollector = true;
					this.data.teams = true;
				break;
			}
			//Check if game is loaded
			if (this.data.players_loaded && this.data.obstacles_loaded && this.data.goal_loaded) {
				this.data.game_loaded = true;
			} else {
				this.data.game_loaded = false;
			}
			//Check for tie
			let hasTied = this.data.player_points.filter(p => p.points == gameModeData[1].settings.winning_points).length > 1;
			//Check game win
			this.data.player_points.forEach((p, i) => {
				if (p.points >= gameModeData[1].settings.winning_points && !hasTied) {
					this.data.win_state = true;
					winScreen.show(parseInt(p.nameTag.name.replace("player_", "")));
				}
			});
			//Set local map
			if (localMap == null && currentMap != null && currentMap != undefined) {
				localMap = currentMap;
			}
			if (localMap != null && localMap.id != currentMap.id) {
				localMap = currentMap;
			}
			//Player spawn
			for (let i=0;i<gameData.maxPlayers.x;i++) {
				if (localMap != null && localMap.id == currentMap.id) {
					let thisNameTag = new nameTag(("player_"+(i+1)), "lineBattle");
					let thisPoints = this.getPoints(thisNameTag);
					thisPoints.points = Math.floor(thisPoints.points);
					let player = getByNameTag(thisNameTag);
					if (player != undefined) {
						//Dead
						if (player.dead) {
							player.base.color = greyBall.getColor();
						}
						//Win state
						if (this.data.end_of_match || isPaused) {
							player.base.position.s = 0;
						}
						if (!this.data.end_of_match && player.base.position.s == 0 && !isPaused) {
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
						//Obstacle/Goal collisions
						let obstacleArray = getByNameTag(new nameTag("", "obstacles"), 2, false, true);
						let goalObj = getByNameTag(new nameTag("", "goal"), 2, false, true);
						if (this.data.game_loaded && !isPaused) {
							if (obstacleArray != null) {
								if (Array.isArray(obstacleArray)) {
									obstacleArray.forEach((object) => {
										let obstData = this.getObstacleTypeData(object.obstacleType);
										if (cirCollision(player, object)) {
											if (!this.data.win_state) {
												if (obstData.points.x != null) {
													switch (obstData.points.r) {
														case "+":
															this.checkPoints(thisNameTag);
															thisPoints.points += obstData.points.x;
														break;
														case "-":
															if (thisPoints.points > 0) {
																thisPoints.points -= obstData.points.x;
															}
														break;
														case "*":
															if (thisPoints.points > 0) {
																thisPoints.points *= obstData.points.x;
															}
														break;
														case "/":
															if (thisPoints.points > 0) {
																thisPoints.points /= obstData.points.x;
															}
														break;
													}
												}
												if (obstData.points.y != null) {
													this.changePointsFromOpponents([thisNameTag], obstData.points.y, obstData.points.r);
													
												}
											}
											deleteByNameTag(object.base.nameTag);
										}
									});
								} else {
									let obstData = this.data.obstacles_data[obstacleArray.obstacleType];
									if (cirCollision(player, obstacleArray)) {
										if (!this.data.win_state) {
											if (obstData.points.x != null) {
												switch (obstData.points.r) {
													case "+":
														this.checkPoints(thisNameTag);
														thisPoints.points += obstData.points.x;
													break;
													case "-":
														if (thisPoints.points > 0) {
															thisPoints.points -= obstData.points.x;
														}
													break;
													case "*":
														if (thisPoints.points > 0) {
															thisPoints.points *= obstData.points.x;
														}
													break;
													case "/":
														if (thisPoints.points > 0) {
															thisPoints.points /= obstData.points.x;
														}
													break;
												}
											}
											if (obstData.points.y != null) {
												this.changePointsFromOpponents([thisNameTag], obstData.points.y, obstData.points.r);
												
											}
										}
										deleteByNameTag(obstacleArray.base.nameTag);
									}
								}
							}
							if (goalObj != null) {
								let goalData = this.getGoalTypeData(goalObj.goalType);
								if (cirCollision(player, goalObj)) {
									if (!this.data.win_state) {
										if (goalData.points.x != null) {
											switch (goalData.points.r) {
												case "+":
													this.checkPoints(thisNameTag);
													thisPoints.points += goalData.points.x;
												break;
												case "-":
													if (thisPoints.points > 0) {
														thisPoints.points -= goalData.points.x;
													}
												break;
												case "*":
													if (thisPoints.points > 0) {
														thisPoints.points *= goalData.points.x;
													}
												break;
												case "/":
													if (thisPoints.points > 0) {
														thisPoints.points /= goalData.points.x;
													}
												break;
											}
										}
										if (goalData.points.y != null) {
											this.changePointsFromOpponents([thisNameTag], goalData.points.y, goalData.points.r);
										}
									}
									deleteByNameTag(goalObj.base.nameTag);
								}
							} else {
								this.spawnGoal(true);
							}
						}
						//Player collisions
						for (let i=0;i<gameData.maxPlayers.x;i++) {
							if (!this.data.win_state && !isPaused) {
								let thisNameTag2 = new nameTag(("player_"+(i+1)), "lineBattle");
								let player2 = getByNameTag(thisNameTag2);
								let isSame = player.base.nameTag.same(thisNameTag2);
								if (!isSame) {
									//Ball physics hitPlayer
									if (!this.data.end_of_match) {
										if (cirCollision(player, player2)){
											if (!player.hitPlayer) {
												player.base.position.s = -player.base.position.s;
												player.hitPlayer = true;
												player2.hitPlayer = true;
											}
										} else {
											player.hitPlayer = false;
											player2.hitPlayer = false;
										}
									}
									//Line collide check
									player2.linePieces.forEach((l, i) => {
										if (cirPolyCollision(player, l)) {
											if (!this.data.pointCollector) {
												if (l.base.color.alpha >= gameModeData[1].settings.line_alpha_cutoff) {
													this.data.end_of_match = true;
													player.dead = true;
												}
											} else {
												player.base.position.s = -player.base.position.s;
												l.base.marked = true;
												player2.linePieces.splice(i, 1);
												deleteByMarked();
											}
										}
									});
								}
							}
						}
						//Points text
						let thisNameTag2 = new nameTag(("player_"+(i+1)+"_points"), "lineBattle");
						let playerPoints = getByNameTag(thisNameTag2);
						playerPoints.base.position = player.base.position.duplicate().subV(new Vector2(0, player.base.size.div(2).y));
						playerPoints.text = thisPoints.points;
						//Line code
						let line = player.linePieces;
						let lineLength = gameModeData[1].settings.line_length;
						let lastPiece = line[line.length-1];
						//Length limiter
						if (line.length >= lineLength || this.data.end_of_match) {
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
						if (gameModeData[1].settings.line_fade) {
							line.forEach((l, index) => {
								l.base.color.alpha = index/lineLength;
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
			if (this.data.end_of_match) {
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
	this.originalBGColor = backgroundColor;
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