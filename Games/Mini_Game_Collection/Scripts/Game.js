//Set screen size
engineSettings.Settings_Menu.Image_Smoothing = false;
engineSettings.Settings_Menu.Show_Debug_Cursor = false;
screen.setResolution(new Vector2(1280,720));

//Create mod menu
ModLoader.createMenu();

//Paths
const lbPath = imagePath+"Line_Battle/";
const twPath = imagePath+"Tank_Battle/";
const effectsPath = (game="lb") => {
	switch (game) {
		case "lb":
			return lbPath+"Effects/";
		break;
		case "tw":
			return twPath+"Effects/";
		break;
	}
};
const levelsPath = (game="lb") => {
	switch (game) {
		case "lb":
			return lbPath+"Levels/";
		break;
		case "tw":
			return twPath+"Levels/";
		break;
	}
};
const playersPath = (game="lb") => {
	switch (game) {
		case "lb":
			return lbPath+"Players/";
		break;
		case "tw":
			return twPath+"Players/";
		break;
	}
};

//Images
//Main Menu
let mainMenuBG = new imageData("mainMenuBG", imagePath+"Title_Screen.png", new Vector2(1280, 720));
//Line Battle/Ball Bouncers Assets
let blueBall = new imageData("blue_ball", playersPath("lb")+"Blue_Ball.png", new Vector2(50, 50));
let redBall = new imageData("red_ball", playersPath("lb")+"Red_Ball.png", new Vector2(50, 50));
let yellowBall = new imageData("yellow_ball", playersPath("lb")+"Yellow_Ball.png", new Vector2(50, 50));
let greenBall = new imageData("green_ball", playersPath("lb")+"Green_Ball.png", new Vector2(50, 50));
let greyBall = new imageData("grey_ball", playersPath("lb")+"Grey_Ball.png", new Vector2(50, 50));
//Tank War Assets
let explosion = new imageData("explosion", effectsPath("tw")+"Explosion_Frame_1.png", new Vector2(45, 45));
let dirtRing = new imageData("dirt_ring", effectsPath("tw")+"Dirt_Ring.png", new Vector2(50, 50));
let dirtTracks = new imageData("dirt_tracks", effectsPath("tw")+"Dirt_Tracks.png", new Vector2(50, 50));
let blueTank = new imageData("blue_tank", playersPath("tw")+"Blue_Tank.png", new Vector2(50, 50));
let redTank = new imageData("red_tank", playersPath("tw")+"Red_Tank.png", new Vector2(50, 50));
let yellowTank = new imageData("yellow_tank", playersPath("tw")+"Yellow_Tank.png", new Vector2(50, 50));
let greenTank = new imageData("green_tank", playersPath("tw")+"Green_Tank.png", new Vector2(50, 50));
let deadTank = new imageData("dead_tank", playersPath("tw")+"Dead_Tank.png", new Vector2(50, 50));
let battleGroundBG = new imageData("battle_ground_BG", levelsPath("tw")+"Tank_War_Background_1.png", new Vector2(1280, 720));

//Maps
let map_abyss = new Map("Abyss", "black", [new Vector2(35, 35, -degToRad(90), -degToRad(90)), new Vector2(1245, 685, degToRad(90), -degToRad(90)), new Vector2(35, 685, degToRad(90), -degToRad(90)), new Vector2(1245, 35, -degToRad(90), -degToRad(90))], [/*objects*/]);

//Controls
let Player1Left = new key(
	"P1 Left",
	[
		new keyData("a", 0)
	],
	new Vector2(null, null)
);
let Player1Right = new key(
	"P1 Right",
	[
		new keyData("d", 0)
	],
	new Vector2(null, null)
);
let Player2Left = new key(
	"P2 Left",
	[
		new keyData("ArrowLeft", 0)
	],
	new Vector2(null, null)
);
let Player2Right = new key(
	"P2 Right",
	[
		new keyData("ArrowRight", 0)
	],
	new Vector2(null, null)
);
let Player3Left = new key(
	"P3 Left",
	[
		new keyData("j", 0)
	],
	new Vector2(null, null)
);
let Player3Right = new key(
	"P3 Right",
	[
		new keyData("l", 0)
	],
	new Vector2(null, null)
);
let Player4Left = new key(
	"P4 Left",
	[
		new keyData("4", 3)
	],
	new Vector2(null, null)
);
let Player4Right = new key(
	"P4 Right",
	[
		new keyData("6", 3)
	],
	new Vector2(null, null)
);

//Controller setup
controllerManager.players = 4;
let Player1Movement = new controllerAxesBinding(1, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = new nameTag(("player_"+(1)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null) {
				player.base.position.r = degToRad(e.angle(false)-270);
			}
		}
	}
}, "Movement", 0);
let Player1Menu = new controllerBttnBinding(1, menuToggle, "Menu", "Start");
let Player1ResetGame = new controllerBttnBinding(1, (e) => {
	if (LBGM.data.win_state && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				winScreen.hide();
			break;
		}
	}
}, "Reset Game", "Menu");
let Player2Movement = new controllerAxesBinding(2, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = new nameTag(("player_"+(2)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null) {
				player.base.position.r = degToRad(e.angle(false)-270);
			}
		}
	}
}, "Movement", 0);
let Player2Menu = new controllerBttnBinding(2, menuToggle, "Menu", "Start");
let Player2ResetGame = new controllerBttnBinding(2, (e) => {
	if (LBGM.data.win_state && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				winScreen.hide();
			break;
		}
	}
}, "Reset Game", "Menu");
let Player3Movement = new controllerAxesBinding(3, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = new nameTag(("player_"+(3)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null) {
				player.base.position.r = degToRad(e.angle(false)-270);
			}
		}
	}
}, "Movement", 0);
let Player3Menu = new controllerBttnBinding(3, menuToggle, "Menu", "Start");
let Player3ResetGame = new controllerBttnBinding(3, (e) => {
	if (LBGM.data.win_state && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				winScreen.hide();
			break;
		}
	}
}, "Reset Game", "Menu");
let Player4Movement = new controllerAxesBinding(4, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = new nameTag(("player_"+(4)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null) {
				player.base.position.r = degToRad(e.angle(false)-270);
			}
		}
	}
}, "Movement", 0);
let Player4Menu = new controllerBttnBinding(4, menuToggle, "Menu", "Start");
let Player4ResetGame = new controllerBttnBinding(4, (e) => {
	if (LBGM.data.win_state && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				winScreen.hide();
			break;
		}
	}
}, "Reset Game", "Menu");

//Game data
let gameData = {
	"gameMode":-1, //-1: Menus / 0: Tank War / 1: Line Battle / 2: Ball Bouncers
	"maxPlayers":new Vector2(2, 4), //x: players / y: max players
	"showName":true
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
			"invert_time":5, //How long in seconds the controls will be inverted
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
	//Line Battle Settings
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
	//Player Options
	this.playerSettingsDiv = document.createElement('div');
	this.playerSettingsDiv.style.marginLeft = "0px";
	this.playerSettingsDiv.style.marginRight = "0px";
	this.playerSettingsDiv.style.marginTop = "0px";
	this.playerSettingsDiv.style.marginBottom = "0px";
	this.playerSettingsDiv.style.width = "100%";
	this.playerSettingsDiv.style.height = "50px";
	this.playerSettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.playerSettingsDiv);
	this.playerSettingsTxt = document.createElement('p');
	this.playerSettingsTxt.innerHTML = "Player Info";
	this.playerSettingsTxt.style.fontSize = "35px";
	this.playerSettingsTxt.style.marginLeft = "0px";
	this.playerSettingsTxt.style.marginRight = "0px";
	this.playerSettingsTxt.style.marginTop = "0px";
	this.playerSettingsTxt.style.marginBottom = "0px";
	this.playerSettingsTxt.style.width = "100%";
	this.playerSettingsTxt.style.height = "100%";
	this.playerSettingsTxt.style.textAlign = "center";
	this.playerSettingsTxt.style.color = "white";
	this.playerSettingsDiv.appendChild(this.playerSettingsTxt);
	//Player 1 name
	this.player1NameSettingsDiv = document.createElement('div');
	this.player1NameSettingsDiv.style.marginLeft = "0px";
	this.player1NameSettingsDiv.style.marginRight = "0px";
	this.player1NameSettingsDiv.style.marginTop = "0px";
	this.player1NameSettingsDiv.style.marginBottom = "0px";
	this.player1NameSettingsDiv.style.width = "100%";
	this.player1NameSettingsDiv.style.height = "50px";
	this.player1NameSettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.player1NameSettingsDiv);
	this.player1NameSettingsTxt = document.createElement('p');
	this.player1NameSettingsTxt.innerHTML = "Player 1 Name:";
	this.player1NameSettingsTxt.style.fontSize = "35px";
	this.player1NameSettingsTxt.style.marginLeft = "0px";
	this.player1NameSettingsTxt.style.marginRight = "0px";
	this.player1NameSettingsTxt.style.marginTop = "0px";
	this.player1NameSettingsTxt.style.marginBottom = "0px";
	this.player1NameSettingsTxt.style.width = "100%";
	this.player1NameSettingsTxt.style.height = "100%";
	this.player1NameSettingsTxt.style.color = "white";
	this.player1NameSettingsTxt.style.display = "inline";
	this.player1NameSettingsDiv.appendChild(this.player1NameSettingsTxt);
	this.player1NameTextBox = document.createElement("input");
	this.player1NameTextBox.type = "text";
	this.player1NameTextBox.value = "Player 1";
	this.player1NameTextBox.style.color = "white";
	this.player1NameTextBox.style.textShadow = "2px 2px 5px black";
	this.player1NameTextBox.style.fontSize = "35px";
	this.player1NameTextBox.style.width = "150px";
	this.player1NameTextBox.style.height = "60%";
	this.player1NameTextBox.style.marginLeft = "10px";
	this.player1NameTextBox.style.marginRight = "0px";
	this.player1NameTextBox.style.marginTop = "10px";
	this.player1NameTextBox.style.marginBottom = "0px";
	this.player1NameTextBox.style.background = "lightgrey";
	this.player1NameTextBox.style.display = "inline";
	if (localStorage.getItem("Player_1_Name") != null) {
		this.player1NameTextBox.value = JSON.parse(localStorage.getItem("Player_1_Name"));
	}
	this.player1NameTextBox.onchange = () => {
		localStorage.setItem("Player_1_Name", JSON.stringify(this.player1NameTextBox.value));
	};
	this.player1NameSettingsDiv.appendChild(this.player1NameTextBox);
	//Player 1 GameJolt name checkbox
	this.gameJoltNameSettingsDiv = document.createElement('div');
	this.gameJoltNameSettingsDiv.style.marginLeft = "0px";
	this.gameJoltNameSettingsDiv.style.marginRight = "0px";
	this.gameJoltNameSettingsDiv.style.marginTop = "0px";
	this.gameJoltNameSettingsDiv.style.marginBottom = "0px";
	this.gameJoltNameSettingsDiv.style.width = "100%";
	this.gameJoltNameSettingsDiv.style.height = "50px";
	this.gameJoltNameSettingsDiv.style.backgroundColor = "darkgrey";
	this.gameJoltNameSettingsDiv.style.display = "block";
	this.lineBattleSettingsDiv.appendChild(this.gameJoltNameSettingsDiv);
	this.gameJoltNameSettingsTxt = document.createElement('p');
	this.gameJoltNameSettingsTxt.innerHTML = "Use GameJolt Name?:";
	this.gameJoltNameSettingsTxt.style.fontSize = "35px";
	this.gameJoltNameSettingsTxt.style.marginLeft = "0px";
	this.gameJoltNameSettingsTxt.style.marginRight = "0px";
	this.gameJoltNameSettingsTxt.style.marginTop = "0px";
	this.gameJoltNameSettingsTxt.style.marginBottom = "0px";
	this.gameJoltNameSettingsTxt.style.width = "100%";
	this.gameJoltNameSettingsTxt.style.height = "100%";
	this.gameJoltNameSettingsTxt.style.color = "white";
	this.gameJoltNameSettingsTxt.style.textAlign = "center";
	this.gameJoltNameSettingsTxt.style.display = "inline";
	this.gameJoltNameSettingsDiv.appendChild(this.gameJoltNameSettingsTxt);
	this.gameJoltNameCheckBox = document.createElement("input");
	this.gameJoltNameCheckBox.type = "checkbox";
	this.gameJoltNameCheckBox.checked = true;
	this.gameJoltNameCheckBox.style.marginLeft = "0px";
	this.gameJoltNameCheckBox.style.marginRight = "0px";
	this.gameJoltNameCheckBox.style.marginTop = "0px";
	this.gameJoltNameCheckBox.style.marginBottom = "0px";
	this.gameJoltNameCheckBox.style.background = "lightgrey";
	this.gameJoltNameCheckBox.style.width = "50px";
	this.gameJoltNameCheckBox.style.height = "100%";
	this.gameJoltNameCheckBox.style.float = "right";
	this.gameJoltNameCheckBox.style.display = "inline";
	if (localStorage.getItem("GameJolt_Name") != null) {
		this.gameJoltNameCheckBox.value = JSON.parse(localStorage.getItem("GameJolt_Name"));
	}
	this.gameJoltNameCheckBox.onchange = () => {
		localStorage.setItem("GameJolt_Name", JSON.stringify(this.gameJoltNameCheckBox.checked));
	};
	this.gameJoltNameSettingsDiv.appendChild(this.gameJoltNameCheckBox);
	//Player 1 avatar
	this.player1AvatarSettingsDiv = document.createElement('div');
	this.player1AvatarSettingsDiv.style.marginLeft = "0px";
	this.player1AvatarSettingsDiv.style.marginRight = "0px";
	this.player1AvatarSettingsDiv.style.marginTop = "0px";
	this.player1AvatarSettingsDiv.style.marginBottom = "0px";
	this.player1AvatarSettingsDiv.style.width = "100%";
	this.player1AvatarSettingsDiv.style.height = "50px";
	this.player1AvatarSettingsDiv.style.backgroundColor = "darkgrey";
	this.player1AvatarSettingsDiv.style.display = "intial";
	this.lineBattleSettingsDiv.appendChild(this.player1AvatarSettingsDiv);
	this.player1AvatarSettingsTxt = document.createElement('p');
	this.player1AvatarSettingsTxt.innerHTML = "Player 1 Avatar Path:";
	this.player1AvatarSettingsTxt.style.fontSize = "35px";
	this.player1AvatarSettingsTxt.style.marginLeft = "0px";
	this.player1AvatarSettingsTxt.style.marginRight = "0px";
	this.player1AvatarSettingsTxt.style.marginTop = "0px";
	this.player1AvatarSettingsTxt.style.marginBottom = "0px";
	this.player1AvatarSettingsTxt.style.width = "100%";
	this.player1AvatarSettingsTxt.style.height = "100%";
	this.player1AvatarSettingsTxt.style.color = "white";
	this.player1AvatarSettingsTxt.style.display = "inline";
	this.player1AvatarSettingsDiv.appendChild(this.player1AvatarSettingsTxt);
	this.player1AvatarFile = document.createElement("input");
	this.player1AvatarFile.type = "text";
	this.player1AvatarFile.value = "";
	this.player1AvatarFile.style.color = "white";
	this.player1AvatarFile.style.textShadow = "2px 2px 5px black";
	this.player1AvatarFile.style.fontSize = "35px";
	this.player1AvatarFile.style.width = "150px";
	this.player1AvatarFile.style.height = "60%";
	this.player1AvatarFile.style.marginLeft = "10px";
	this.player1AvatarFile.style.marginRight = "0px";
	this.player1AvatarFile.style.marginTop = "10px";
	this.player1AvatarFile.style.marginBottom = "0px";
	this.player1AvatarFile.style.background = "lightgrey";
	this.player1AvatarFile.style.display = "inline";
	if (localStorage.getItem("Player_1_Avatar") != null) {
		this.player1AvatarFile.value = JSON.parse(localStorage.getItem("Player_1_Avatar"));
	}
	this.player1AvatarFile.onchange = () => {
		localStorage.setItem("Player_1_Avatar", JSON.stringify(this.player1AvatarFile.value));
	};
	this.player1AvatarSettingsDiv.appendChild(this.player1AvatarFile);
	//Player 1 GameJolt avatar checkbox
	this.gameJoltAvatarSettingsDiv = document.createElement('div');
	this.gameJoltAvatarSettingsDiv.style.marginLeft = "0px";
	this.gameJoltAvatarSettingsDiv.style.marginRight = "0px";
	this.gameJoltAvatarSettingsDiv.style.marginTop = "0px";
	this.gameJoltAvatarSettingsDiv.style.marginBottom = "0px";
	this.gameJoltAvatarSettingsDiv.style.width = "100%";
	this.gameJoltAvatarSettingsDiv.style.height = "50px";
	this.gameJoltAvatarSettingsDiv.style.backgroundColor = "darkgrey";
	this.gameJoltAvatarSettingsDiv.style.display = "block";
	this.lineBattleSettingsDiv.appendChild(this.gameJoltAvatarSettingsDiv);
	this.gameJoltAvatarSettingsTxt = document.createElement('p');
	this.gameJoltAvatarSettingsTxt.innerHTML = "Use GameJolt Avatar?:";
	this.gameJoltAvatarSettingsTxt.style.fontSize = "35px";
	this.gameJoltAvatarSettingsTxt.style.marginLeft = "0px";
	this.gameJoltAvatarSettingsTxt.style.marginRight = "0px";
	this.gameJoltAvatarSettingsTxt.style.marginTop = "0px";
	this.gameJoltAvatarSettingsTxt.style.marginBottom = "0px";
	this.gameJoltAvatarSettingsTxt.style.width = "100%";
	this.gameJoltAvatarSettingsTxt.style.height = "100%";
	this.gameJoltAvatarSettingsTxt.style.color = "white";
	this.gameJoltAvatarSettingsTxt.style.textAlign = "center";
	this.gameJoltAvatarSettingsTxt.style.display = "inline";
	this.gameJoltAvatarSettingsDiv.appendChild(this.gameJoltAvatarSettingsTxt);
	this.gameJoltAvatarCheckBox = document.createElement("input");
	this.gameJoltAvatarCheckBox.type = "checkbox";
	this.gameJoltAvatarCheckBox.checked = true;
	this.gameJoltAvatarCheckBox.style.marginLeft = "0px";
	this.gameJoltAvatarCheckBox.style.marginRight = "0px";
	this.gameJoltAvatarCheckBox.style.marginTop = "0px";
	this.gameJoltAvatarCheckBox.style.marginBottom = "0px";
	this.gameJoltAvatarCheckBox.style.background = "lightgrey";
	this.gameJoltAvatarCheckBox.style.width = "50px";
	this.gameJoltAvatarCheckBox.style.height = "100%";
	this.gameJoltAvatarCheckBox.style.float = "right";
	this.gameJoltAvatarCheckBox.style.display = "inline";
	if (localStorage.getItem("GameJolt_Avatar") != null) {
		this.gameJoltAvatarCheckBox.value = JSON.parse(localStorage.getItem("GameJolt_Avatar"));
	}
	this.gameJoltAvatarCheckBox.onchange = () => {
		localStorage.setItem("GameJolt_Avatar", JSON.stringify(this.gameJoltAvatarCheckBox.checked));
	};
	this.gameJoltAvatarSettingsDiv.appendChild(this.gameJoltAvatarCheckBox);
	//Player 2 name
	this.player2NameSettingsDiv = document.createElement('div');
	this.player2NameSettingsDiv.style.marginLeft = "0px";
	this.player2NameSettingsDiv.style.marginRight = "0px";
	this.player2NameSettingsDiv.style.marginTop = "0px";
	this.player2NameSettingsDiv.style.marginBottom = "0px";
	this.player2NameSettingsDiv.style.width = "100%";
	this.player2NameSettingsDiv.style.height = "50px";
	this.player2NameSettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.player2NameSettingsDiv);
	this.player2NameSettingsTxt = document.createElement('p');
	this.player2NameSettingsTxt.innerHTML = "Player 2 Name:";
	this.player2NameSettingsTxt.style.fontSize = "35px";
	this.player2NameSettingsTxt.style.marginLeft = "0px";
	this.player2NameSettingsTxt.style.marginRight = "0px";
	this.player2NameSettingsTxt.style.marginTop = "0px";
	this.player2NameSettingsTxt.style.marginBottom = "0px";
	this.player2NameSettingsTxt.style.width = "100%";
	this.player2NameSettingsTxt.style.height = "100%";
	this.player2NameSettingsTxt.style.color = "white";
	this.player2NameSettingsTxt.style.display = "inline";
	this.player2NameSettingsDiv.appendChild(this.player2NameSettingsTxt);
	this.player2NameTextBox = document.createElement("input");
	this.player2NameTextBox.type = "text";
	this.player2NameTextBox.value = "Player 2";
	this.player2NameTextBox.style.color = "white";
	this.player2NameTextBox.style.textShadow = "2px 2px 5px black";
	this.player2NameTextBox.style.fontSize = "35px";
	this.player2NameTextBox.style.width = "150px";
	this.player2NameTextBox.style.height = "60%";
	this.player2NameTextBox.style.marginLeft = "10px";
	this.player2NameTextBox.style.marginRight = "0px";
	this.player2NameTextBox.style.marginTop = "10px";
	this.player2NameTextBox.style.marginBottom = "0px";
	this.player2NameTextBox.style.background = "lightgrey";
	this.player2NameTextBox.style.display = "inline";
	if (localStorage.getItem("Player_2_Name") != null) {
		this.player2NameTextBox.value = JSON.parse(localStorage.getItem("Player_2_Name"));
	}
	this.player2NameTextBox.onchange = () => {
		localStorage.setItem("Player_2_Name", JSON.stringify(this.player2NameTextBox.value));
	};
	this.player2NameSettingsDiv.appendChild(this.player2NameTextBox);
	//Player 2 avatar
	this.player2AvatarSettingsDiv = document.createElement('div');
	this.player2AvatarSettingsDiv.style.marginLeft = "0px";
	this.player2AvatarSettingsDiv.style.marginRight = "0px";
	this.player2AvatarSettingsDiv.style.marginTop = "0px";
	this.player2AvatarSettingsDiv.style.marginBottom = "0px";
	this.player2AvatarSettingsDiv.style.width = "100%";
	this.player2AvatarSettingsDiv.style.height = "50px";
	this.player2AvatarSettingsDiv.style.backgroundColor = "darkgrey";
	this.player2AvatarSettingsDiv.style.display = "intial";
	this.lineBattleSettingsDiv.appendChild(this.player2AvatarSettingsDiv);
	this.player2AvatarSettingsTxt = document.createElement('p');
	this.player2AvatarSettingsTxt.innerHTML = "Player 2 Avatar Path:";
	this.player2AvatarSettingsTxt.style.fontSize = "35px";
	this.player2AvatarSettingsTxt.style.marginLeft = "0px";
	this.player2AvatarSettingsTxt.style.marginRight = "0px";
	this.player2AvatarSettingsTxt.style.marginTop = "0px";
	this.player2AvatarSettingsTxt.style.marginBottom = "0px";
	this.player2AvatarSettingsTxt.style.width = "100%";
	this.player2AvatarSettingsTxt.style.height = "100%";
	this.player2AvatarSettingsTxt.style.color = "white";
	this.player2AvatarSettingsTxt.style.display = "inline";
	this.player2AvatarSettingsDiv.appendChild(this.player2AvatarSettingsTxt);
	this.player2AvatarFile = document.createElement("input");
	this.player2AvatarFile.type = "text";
	this.player2AvatarFile.value = "";
	this.player2AvatarFile.style.color = "white";
	this.player2AvatarFile.style.textShadow = "2px 2px 5px black";
	this.player2AvatarFile.style.fontSize = "35px";
	this.player2AvatarFile.style.width = "150px";
	this.player2AvatarFile.style.height = "60%";
	this.player2AvatarFile.style.marginLeft = "10px";
	this.player2AvatarFile.style.marginRight = "0px";
	this.player2AvatarFile.style.marginTop = "10px";
	this.player2AvatarFile.style.marginBottom = "0px";
	this.player2AvatarFile.style.background = "lightgrey";
	this.player2AvatarFile.style.display = "inline";
	if (localStorage.getItem("Player_2_Avatar") != null) {
		this.player2AvatarFile.value = JSON.parse(localStorage.getItem("Player_2_Avatar"));
	}
	this.player2AvatarFile.onchange = () => {
		localStorage.setItem("Player_2_Avatar", JSON.stringify(this.player2AvatarFile.value));
	};
	this.player2AvatarSettingsDiv.appendChild(this.player2AvatarFile);
	//Player 3 name
	this.player3NameSettingsDiv = document.createElement('div');
	this.player3NameSettingsDiv.style.marginLeft = "0px";
	this.player3NameSettingsDiv.style.marginRight = "0px";
	this.player3NameSettingsDiv.style.marginTop = "0px";
	this.player3NameSettingsDiv.style.marginBottom = "0px";
	this.player3NameSettingsDiv.style.width = "100%";
	this.player3NameSettingsDiv.style.height = "50px";
	this.player3NameSettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.player3NameSettingsDiv);
	this.player3NameSettingsTxt = document.createElement('p');
	this.player3NameSettingsTxt.innerHTML = "Player 3 Name:";
	this.player3NameSettingsTxt.style.fontSize = "35px";
	this.player3NameSettingsTxt.style.marginLeft = "0px";
	this.player3NameSettingsTxt.style.marginRight = "0px";
	this.player3NameSettingsTxt.style.marginTop = "0px";
	this.player3NameSettingsTxt.style.marginBottom = "0px";
	this.player3NameSettingsTxt.style.width = "100%";
	this.player3NameSettingsTxt.style.height = "100%";
	this.player3NameSettingsTxt.style.color = "white";
	this.player3NameSettingsTxt.style.display = "inline";
	this.player3NameSettingsDiv.appendChild(this.player3NameSettingsTxt);
	this.player3NameTextBox = document.createElement("input");
	this.player3NameTextBox.type = "text";
	this.player3NameTextBox.value = "Player 3";
	this.player3NameTextBox.style.color = "white";
	this.player3NameTextBox.style.textShadow = "2px 2px 5px black";
	this.player3NameTextBox.style.fontSize = "35px";
	this.player3NameTextBox.style.width = "150px";
	this.player3NameTextBox.style.height = "60%";
	this.player3NameTextBox.style.marginLeft = "10px";
	this.player3NameTextBox.style.marginRight = "0px";
	this.player3NameTextBox.style.marginTop = "10px";
	this.player3NameTextBox.style.marginBottom = "0px";
	this.player3NameTextBox.style.background = "lightgrey";
	this.player3NameTextBox.style.display = "inline";
	if (localStorage.getItem("Player_3_Name") != null) {
		this.player3NameTextBox.value = JSON.parse(localStorage.getItem("Player_3_Name"));
	}
	this.player3NameTextBox.onchange = () => {
		localStorage.setItem("Player_3_Name", JSON.stringify(this.player3NameTextBox.value));
	};
	this.player3NameSettingsDiv.appendChild(this.player3NameTextBox);
	//Player 3 avatar
	this.player3AvatarSettingsDiv = document.createElement('div');
	this.player3AvatarSettingsDiv.style.marginLeft = "0px";
	this.player3AvatarSettingsDiv.style.marginRight = "0px";
	this.player3AvatarSettingsDiv.style.marginTop = "0px";
	this.player3AvatarSettingsDiv.style.marginBottom = "0px";
	this.player3AvatarSettingsDiv.style.width = "100%";
	this.player3AvatarSettingsDiv.style.height = "50px";
	this.player3AvatarSettingsDiv.style.backgroundColor = "darkgrey";
	this.player3AvatarSettingsDiv.style.display = "intial";
	this.lineBattleSettingsDiv.appendChild(this.player3AvatarSettingsDiv);
	this.player3AvatarSettingsTxt = document.createElement('p');
	this.player3AvatarSettingsTxt.innerHTML = "Player 3 Avatar Path:";
	this.player3AvatarSettingsTxt.style.fontSize = "35px";
	this.player3AvatarSettingsTxt.style.marginLeft = "0px";
	this.player3AvatarSettingsTxt.style.marginRight = "0px";
	this.player3AvatarSettingsTxt.style.marginTop = "0px";
	this.player3AvatarSettingsTxt.style.marginBottom = "0px";
	this.player3AvatarSettingsTxt.style.width = "100%";
	this.player3AvatarSettingsTxt.style.height = "100%";
	this.player3AvatarSettingsTxt.style.color = "white";
	this.player3AvatarSettingsTxt.style.display = "inline";
	this.player3AvatarSettingsDiv.appendChild(this.player3AvatarSettingsTxt);
	this.player3AvatarFile = document.createElement("input");
	this.player3AvatarFile.type = "text";
	this.player3AvatarFile.value = "";
	this.player3AvatarFile.style.color = "white";
	this.player3AvatarFile.style.textShadow = "2px 2px 5px black";
	this.player3AvatarFile.style.fontSize = "35px";
	this.player3AvatarFile.style.width = "150px";
	this.player3AvatarFile.style.height = "60%";
	this.player3AvatarFile.style.marginLeft = "10px";
	this.player3AvatarFile.style.marginRight = "0px";
	this.player3AvatarFile.style.marginTop = "10px";
	this.player3AvatarFile.style.marginBottom = "0px";
	this.player3AvatarFile.style.background = "lightgrey";
	this.player3AvatarFile.style.display = "inline";
	if (localStorage.getItem("Player_3_Avatar") != null) {
		this.player3AvatarFile.value = JSON.parse(localStorage.getItem("Player_3_Avatar"));
	}
	this.player3AvatarFile.onchange = () => {
		localStorage.setItem("Player_3_Avatar", JSON.stringify(this.player3AvatarFile.value));
	};
	this.player3AvatarSettingsDiv.appendChild(this.player3AvatarFile);
	//Player 4 name
	this.player4NameSettingsDiv = document.createElement('div');
	this.player4NameSettingsDiv.style.marginLeft = "0px";
	this.player4NameSettingsDiv.style.marginRight = "0px";
	this.player4NameSettingsDiv.style.marginTop = "0px";
	this.player4NameSettingsDiv.style.marginBottom = "0px";
	this.player4NameSettingsDiv.style.width = "100%";
	this.player4NameSettingsDiv.style.height = "50px";
	this.player4NameSettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.player4NameSettingsDiv);
	this.player4NameSettingsTxt = document.createElement('p');
	this.player4NameSettingsTxt.innerHTML = "Player 4 Name:";
	this.player4NameSettingsTxt.style.fontSize = "35px";
	this.player4NameSettingsTxt.style.marginLeft = "0px";
	this.player4NameSettingsTxt.style.marginRight = "0px";
	this.player4NameSettingsTxt.style.marginTop = "0px";
	this.player4NameSettingsTxt.style.marginBottom = "0px";
	this.player4NameSettingsTxt.style.width = "100%";
	this.player4NameSettingsTxt.style.height = "100%";
	this.player4NameSettingsTxt.style.color = "white";
	this.player4NameSettingsTxt.style.display = "inline";
	this.player4NameSettingsDiv.appendChild(this.player4NameSettingsTxt);
	this.player4NameTextBox = document.createElement("input");
	this.player4NameTextBox.type = "text";
	this.player4NameTextBox.value = "Player 4";
	this.player4NameTextBox.style.color = "white";
	this.player4NameTextBox.style.textShadow = "2px 2px 5px black";
	this.player4NameTextBox.style.fontSize = "35px";
	this.player4NameTextBox.style.width = "150px";
	this.player4NameTextBox.style.height = "60%";
	this.player4NameTextBox.style.marginLeft = "10px";
	this.player4NameTextBox.style.marginRight = "0px";
	this.player4NameTextBox.style.marginTop = "10px";
	this.player4NameTextBox.style.marginBottom = "0px";
	this.player4NameTextBox.style.background = "lightgrey";
	this.player4NameTextBox.style.display = "inline";
	if (localStorage.getItem("Player_4_Name") != null) {
		this.player4NameTextBox.value = JSON.parse(localStorage.getItem("Player_4_Name"));
	}
	this.player4NameTextBox.onchange = () => {
		localStorage.setItem("Player_4_Name", JSON.stringify(this.player4NameTextBox.value));
	};
	this.player4NameSettingsDiv.appendChild(this.player4NameTextBox);
	//Player 4 avatar
	this.player4AvatarSettingsDiv = document.createElement('div');
	this.player4AvatarSettingsDiv.style.marginLeft = "0px";
	this.player4AvatarSettingsDiv.style.marginRight = "0px";
	this.player4AvatarSettingsDiv.style.marginTop = "0px";
	this.player4AvatarSettingsDiv.style.marginBottom = "0px";
	this.player4AvatarSettingsDiv.style.width = "100%";
	this.player4AvatarSettingsDiv.style.height = "50px";
	this.player4AvatarSettingsDiv.style.backgroundColor = "darkgrey";
	this.player4AvatarSettingsDiv.style.display = "intial";
	this.lineBattleSettingsDiv.appendChild(this.player4AvatarSettingsDiv);
	this.player4AvatarSettingsTxt = document.createElement('p');
	this.player4AvatarSettingsTxt.innerHTML = "Player 4 Avatar Path:";
	this.player4AvatarSettingsTxt.style.fontSize = "35px";
	this.player4AvatarSettingsTxt.style.marginLeft = "0px";
	this.player4AvatarSettingsTxt.style.marginRight = "0px";
	this.player4AvatarSettingsTxt.style.marginTop = "0px";
	this.player4AvatarSettingsTxt.style.marginBottom = "0px";
	this.player4AvatarSettingsTxt.style.width = "100%";
	this.player4AvatarSettingsTxt.style.height = "100%";
	this.player4AvatarSettingsTxt.style.color = "white";
	this.player4AvatarSettingsTxt.style.display = "inline";
	this.player4AvatarSettingsDiv.appendChild(this.player4AvatarSettingsTxt);
	this.player4AvatarFile = document.createElement("input");
	this.player4AvatarFile.type = "text";
	this.player4AvatarFile.value = "";
	this.player4AvatarFile.style.color = "white";
	this.player4AvatarFile.style.textShadow = "2px 2px 5px black";
	this.player4AvatarFile.style.fontSize = "35px";
	this.player4AvatarFile.style.width = "150px";
	this.player4AvatarFile.style.height = "60%";
	this.player4AvatarFile.style.marginLeft = "10px";
	this.player4AvatarFile.style.marginRight = "0px";
	this.player4AvatarFile.style.marginTop = "10px";
	this.player4AvatarFile.style.marginBottom = "0px";
	this.player4AvatarFile.style.background = "lightgrey";
	this.player4AvatarFile.style.display = "inline";
	if (localStorage.getItem("Player_4_Avatar") != null) {
		this.player4AvatarFile.value = JSON.parse(localStorage.getItem("Player_4_Avatar"));
	}
	this.player4AvatarFile.onchange = () => {
		localStorage.setItem("Player_4_Avatar", JSON.stringify(this.player4AvatarFile.value));
	};
	this.player4AvatarSettingsDiv.appendChild(this.player4AvatarFile);
	//Show name option
	this.showNameDiv = document.createElement('div');
	this.showNameDiv.style.marginLeft = "0px";
	this.showNameDiv.style.marginRight = "0px";
	this.showNameDiv.style.marginTop = "0px";
	this.showNameDiv.style.marginBottom = "0px";
	this.showNameDiv.style.width = "100%";
	this.showNameDiv.style.height = "50px";
	this.showNameDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.showNameDiv);
	this.showNameTxt = document.createElement('p');
	this.showNameTxt.innerHTML = "Show Name With Points:";
	this.showNameTxt.style.fontSize = "35px";
	this.showNameTxt.style.marginLeft = "0px";
	this.showNameTxt.style.marginRight = "0px";
	this.showNameTxt.style.marginTop = "0px";
	this.showNameTxt.style.marginBottom = "0px";
	this.showNameTxt.style.width = "100%";
	this.showNameTxt.style.height = "100%";
	this.showNameTxt.style.color = "white";
	this.showNameTxt.style.display = "inline";
	this.showNameDiv.appendChild(this.showNameTxt);
	this.showNameChkBx = document.createElement('input');
	this.showNameChkBx.type = "checkbox";
	this.showNameChkBx.style.marginLeft = "0px";
	this.showNameChkBx.style.marginRight = "0px";
	this.showNameChkBx.style.marginTop = "0px";
	this.showNameChkBx.style.marginBottom = "0px";
	this.showNameChkBx.style.width = "50px";
	this.showNameChkBx.style.height = "100%";
	this.showNameChkBx.style.float = "right";
	this.showNameChkBx.style.display = "inline";
	this.showNameChkBx.checked = false;
	if (localStorage.getItem("Show_Name") != null) {
		this.showNameChkBx.checked = JSON.parse(localStorage.getItem("Show_Name"));
	}
	this.showNameChkBx.onchange = () => {
		localStorage.setItem("Show_Name", JSON.stringify(this.showNameChkBx.checked));
	};
	this.showNameDiv.appendChild(this.showNameChkBx);
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
		if (this.player1NameTextBox.value.length > 8) {
			this.player1NameTextBox.value = this.player1NameTextBox.value.substring(0, 8);
		}
		if (user == null) {
			this.gameJoltNameSettingsDiv.style.display = "none";
			this.gameJoltAvatarSettingsDiv.style.display = "none";
		} else {
			this.gameJoltNameSettingsDiv.style.display = "block";
			this.gameJoltAvatarSettingsDiv.style.display = "block";
		}
		if (typeof checkDirectory == "undefined") {
			this.player1AvatarSettingsDiv.style.display = "none";
			this.player2AvatarSettingsDiv.style.display = "none";
			this.player3AvatarSettingsDiv.style.display = "none";
			this.player4AvatarSettingsDiv.style.display = "none";
		} else {
			this.player1AvatarSettingsDiv.style.display = "intial";
			if (user == null) {
				if (checkDirectory(this.player1AvatarFile.value) && (getExtension(this.player1AvatarFile.value).toLowerCase() == "jpg" || getExtension(this.player1AvatarFile.value).toLowerCase() == "png")) {
					pM.getPlayerInfo()[1].avatar = this.player1AvatarFile.value;
				} else {
					pM.getPlayerInfo()[1].avatar = null;
				}
			} else {
				if (!this.gameJoltAvatarCheckBox.checked) {
					if (checkDirectory(this.player1AvatarFile.value) && (getExtension(this.player1AvatarFile.value).toLowerCase() == "jpg" || getExtension(this.player1AvatarFile.value).toLowerCase() == "png")) {
						pM.getPlayerInfo()[1].avatar = this.player1AvatarFile.value;
					} else {
						pM.getPlayerInfo()[1].avatar = null;
					}
				}
			}
			this.player2AvatarSettingsDiv.style.display = "intial";
			if (checkDirectory(this.player2AvatarFile.value) && (getExtension(this.player1AvatarFile.value).toLowerCase() == "jpg" || getExtension(this.player1AvatarFile.value).toLowerCase() == "png")) {
				pM.getPlayerInfo()[2].avatar = this.player2AvatarFile.value;
			} else {
				pM.getPlayerInfo()[2].avatar = null;
			}
			this.player3AvatarSettingsDiv.style.display = "intial";
			if (checkDirectory(this.player3AvatarFile.value) && (getExtension(this.player1AvatarFile.value).toLowerCase() == "jpg" || getExtension(this.player1AvatarFile.value).toLowerCase() == "png")) {
				pM.getPlayerInfo()[3].avatar = this.player3AvatarFile.value;
			} else {
				pM.getPlayerInfo()[3].avatar = null;
			}
			this.player4AvatarSettingsDiv.style.display = "intial";
			if (checkDirectory(this.player4AvatarFile.value) && (getExtension(this.player1AvatarFile.value).toLowerCase() == "jpg" || getExtension(this.player1AvatarFile.value).toLowerCase() == "png")) {
				pM.getPlayerInfo()[4].avatar = this.player4AvatarFile.value;
			} else {
				pM.getPlayerInfo()[4].avatar = null;
			}
		}
		gameData.showName = this.showNameChkBx.checked;
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
		if (thisPlayer.name.length > 8) {
			this.name = thisPlayer.name.slice(0, 8)+"...";
		} else {
			this.name = thisPlayer.name;
		}
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
			this.winText.style.fontSize = (40*Math.abs(screen.getScale().x-scaleFactor))+"px";
		} else {
			this.winText.style.fontSize = (40*screen.getScale().x)+"px";
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
		if (gameData.gameMode == -1) {
			this.hide();
		}
	}
	addUpdate(update, "win screen");
}

//Menus
const menuMG = new menuManager();

function menuManager() {
	this.menuState = 0; //0: main menu, 1-3: game menus
	this.menuSize = new Vector2();
	let userName = "";
	let token = "";
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
		this.userNameTxtBox.value = userName;
		this.tokenTxt = new Text(5, "Token:", new baseObject(true, new nameTag("Token_Text", gjLoginTag), new Vector2("20px Arial", false, "center"), screen.halfResolution.subV(new Vector2(75, -20)), new colorData("white")));
		this.tokenTxtBox = new TextBox(5, "30px Arial", "white", new baseObject(true, new nameTag("Token", gjLoginTag), new Vector2(125, 50), screen.halfResolution.subV(new Vector2(-50, -20)), new colorData("black")));
		this.tokenTxtBox.value = token;
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
		userName = this.userNameTxtBox.value;
		token = this.tokenTxtBox.value;
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
	//Invert Time
	this.lbInvertTimeTitle = document.createElement("p");
	this.lbInvertTimeTitle.innerHTML = "Invert Time: ";
	this.lbInvertTimeTitle.style.textAlign = "center";
	this.lbInvertTimeTitle.style.color = "white";
	this.lbInvertTimeTitle.style.margin = "0px";
	this.lbInvertTimeTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.lbInvertTimeTitle);
	this.lbInvertTimeSlider = document.createElement("input");
	this.lbInvertTimeSlider.classList.add("slider");
	this.lbInvertTimeSlider.type = "range";
	this.lbInvertTimeSlider.max = "30";
	this.lbInvertTimeSlider.value = "5";
	this.lbInvertTimeSlider.style.margin = "0px";
	this.lbInvertTimeSlider.style.position = "fixed";
	this.lbInvertTimeSlider.style.appearance = "none";
	this.lbInvertTimeSlider.style.background = "lightgrey";
	this.lbInvertTimeSlider.style.outline = "none";
	this.lbInvertTimeSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.lbInvertTimeSlider);
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
		this.lbInvertTimeTitle.style.top = parseFloat(this.lbInvertTimeSlider.style.top)-(40*screen.getScale().y)+"px";
		this.lbInvertTimeTitle.style.left = (halfSize.x-(this.lbInvertTimeTitle.getBoundingClientRect().width/2))+"px";
		this.lbInvertTimeTitle.style.fontSize = (30*screen.getScale().x)+"px";
		this.lbInvertTimeTitle.innerHTML = "Invert Time: "+gameModeData[1].settings.invert_time;
		this.lbInvertTimeSlider.style.top = (420*screen.getScale().y)+"px";
		this.lbInvertTimeSlider.style.left = (halfSize.x-(this.lbInvertTimeSlider.getBoundingClientRect().width/2))+"px";
		this.lbInvertTimeSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbInvertTimeSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.invert_time = parseInt(this.lbInvertTimeSlider.value);
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

function player(name="", profilePicPath="") {
	this.name = name;
	this.profilePicPath = profilePicPath;
	this.controls = null;
	this.index = -1;
	pM.addPlayer(this);
}

function playerManager() {
	let playerInfo = {
		1:{
			"name":"Player 1",
			"avatar":null
		},
		2:{
			"name":"Player 2",
			"avatar":null
		},
		3:{
			"name":"Player 3",
			"avatar":null
		},
		4:{
			"name":"Player 4",
			"avatar":null
		}
	}
	this.getPlayerInfo = () => {return playerInfo};
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
			let newPlayer = new player(playerInfo[players.length+1].name, playerInfo[players.length+1].avatar);
		}
		if (gameData.maxPlayers.x < players.length) {
			players.pop();
		}
		playerInfo[1].name = optionAddon.player1NameTextBox.value;
		playerInfo[2].name = optionAddon.player2NameTextBox.value;
		playerInfo[3].name = optionAddon.player3NameTextBox.value;
		playerInfo[4].name = optionAddon.player4NameTextBox.value;
		if (user != null) {
			if (optionAddon.gameJoltNameCheckBox.checked) {
				player_1.name = user.username;
			} else {
				player_1.name = playerInfo[1].name;
			}
			if (optionAddon.gameJoltAvatarCheckBox.checked) {
				player_1.profilePicPath = user.avatar_url;
			} else {
				if (playerInfo[1].avatar != null) {
					player_1.profilePicPath = playerInfo[1].avatar;
				} else {
					player_1.profilePicPath = defaultIcon[1][gameData.gameMode];
				}
			}
		} else {
			player_1.name = playerInfo[1].name;
			if (playerInfo[1].avatar != null) {
				player_1.profilePicPath = playerInfo[1].avatar;
			} else {
				player_1.profilePicPath = defaultIcon[1][gameData.gameMode];
			}
		}
		players.forEach((p, i) => {
			p.index = i;
			if (p.controls == null) {
				p.controls = playerControls[i+1];
			}
			p.controls.left.functions.x = () => {
				if (gameData.gameMode != -1) {
					let thisNameTag = new nameTag(("player_"+(p.index+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (player.base.position.s >= 0) {
						player.base.position.r -= 0.1*delta;
					} else {
						player.base.position.r += 0.1*delta;
					}
				}
			}
			p.controls.right.functions.x = () => {
				if (gameData.gameMode != -1) {
					let thisNameTag = new nameTag(("player_"+(p.index+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (player.base.position.s >= 0) {
						player.base.position.r += 0.1*delta;
					} else {
						player.base.position.r -= 0.1*delta;
					}
				}
			}
			//Player Info
			if (i+1 != 1) {
				p.name = playerInfo[i+1].name;
				if (playerInfo[i+1].avatar != null) {
					p.profilePicPath = playerInfo[i+1].avatar;
				} else {
					p.profilePicPath = defaultIcon[i+1][gameData.gameMode];
				}
			}
		});
	}
	addUpdate(update, "player manager");
}

//Tank War game manager
const TWGM = new tankWarGM();
function tankWarGM() {
	let localMap = currentMap;
	this.data = {
		"player_speed":new Vector2(2.5, 5), //Every players base speed/boost speed
		//More advanced tank sprites for upgrades (split full sprite into multiple)
		//Tread mark size and fading speed
		"player_points":[], //An array that stores each players points (is also upgrade points)
		"end_of_match":false, //True when someone wins a match
		"win_state":false, //True when someone wins the game
		"players_loaded":false, //True when all players are loaded
		"game_loaded":false, //True when the players, obstacles, and goal is loaded
		"teams":false,
	}
	
}

//Line Battle game manager
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
				"color":new colorData("darkred", 0.6),
				"size":new Vector2(5, 5),
				"points":new Vector2(1, null, "-"),
				"description":"Takes a point away from you."
			},
			1:{
				"color":new colorData("#FF4A00", 0.6),
				"size":new Vector2(7, 7),
				"points":new Vector2(1, 1, "-", "-"),
				"description":"Takes a point away from everyone."
			},
			"length":2
		},
		"points_data":{
			0:{
				"color":new colorData("green", 0.75),
				"size":new Vector2(10, 10),
				"points":new Vector2(1, null, "+"),
				"description":"Gives you 1 point"
			},
			1:{
				"color":new colorData("#FFFD00", 0.75),
				"size":new Vector2(10, 10),
				"points":new Vector2(2, null, "+"),
				"description":"Gives you 2 point"
			},
			2:{
				"color":new colorData("purple", 0.75),
				"size":new Vector2(10, 10),
				"points":new Vector2(1, 1, "+", "-"),
				"description":"Steals 1 point from opponents and gives you 1 point"
			},
			3:{
				"color":new colorData("lightblue", 0.75),
				"size":new Vector2(10, 10),
				"points":new Vector2(2, null, "*"),
				"description":"Doubles your points"
			},
			4:{
				"color":new colorData("darkblue", 0.75),
				"size":new Vector2(10, 10),
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
				if (!check) {
					if (thisPoints.points > 0) {
						switch (experesion) {
							case "+":
								thisPoints.points += points;
							break;
							case "-":
								thisPoints.points -= points;
							break;
							case "*":
								if (thisPoints.points == 1) {
									thisPoints.points += 1;
								} else {
									thisPoints.points *= points;
								}
							break;
							case "/":
								thisPoints.points /= points;
							break;
						}
					} else {
						switch (experesion) {
							case "+":
								thisPoints.points += points;
							break;
							case "*":
								thisPoints.points += 1;
							break;
						}
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
							if (thisPoints.points == 1) {
								thisPoints.points += 1;
							} else {
								thisPoints.points *= points;
							}
						break;
						case "/":
							thisPoints.points /= points;
						break;
					}
				} else {
					switch (experesion) {
						case "+":
							thisPoints.points += points;
						break;
						case "*":
							thisPoints.points += 1;
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
			newPlayer.timer = new timer(Second(gameModeData[1].settings.invert_time), false, false, () => {
				newPlayer.base.position.s = this.data.player_speed;
			}, "player_"+(i+1)+"_timer");
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
	this.spawnObstacles = function(silent=false) {
		if (!silent) {
			this.data.obstacles_loaded = false;
		}
		for (let i=0;i<gameModeData[1].settings.object_amount;i++) {
			let thisNameTag = new nameTag(("obstacle_"+(i+1)), "lineBattle_obstacles");
			if (!silent) {
				deleteByNameTag(thisNameTag);
			}
			if (getByNameTag(thisNameTag) == null) {
				let obstacleType = rangeInt(0, this.data.obstacles_data.length-1);
				let spawnPoint = new Vector2(rangeFloat(100, 1180), rangeFloat(10, 710));
				let newObstacle = new Circle(2, new baseObject(true, thisNameTag.duplicate(), this.getObstacleTypeData(obstacleType).size, spawnPoint.duplicate(), this.getObstacleTypeData(obstacleType).color));
				newObstacle.obstacleType = obstacleType;
			}
		}
		if (!silent) {
			let obstacleArray = getByNameTag(new nameTag("", "obstacles"), 2, false, true);
			if (obstacleArray != null) {
				if (Array.isArray(obstacleArray)) {
					objectArray.forEach((o) => {
						obstacleArray.forEach((o2) => {
							if (cirCollision(o, o2)) {
								o.base.position = new Vector2(rangeFloat(0, 1180), rangeFloat(0, 710));
							}
						});
					});
				} else {
					objectArray.forEach((o) => {
						if (cirCollision(o, obstacleArray)) {
							o.base.position = new Vector2(rangeFloat(0, 1180), rangeFloat(0, 710));
						}
					});
				}
			}
			setTimeout(() => {
				this.data.obstacles_loaded = true;
			}, 1000);
		}
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
						//invert timer
						if (player.base.position.s < 0) {
							if (!player.timer.active && player.timer.currentTime.second == 0) {
								player.timer.start(true);
							}
							if (isPaused) {
								player.timer.pause();
							} else {
								if (!player.timer.active && player.timer.currentTime.second > 0) {
									player.timer.start();
								}
							}
						}
						//Dead
						if (player.dead) {
							player.base.color = greyBall.getColor();
						}
						//Win state
						if (this.data.end_of_match || isPaused) {
							player.base.position.s = 0;
						}
						if (!this.data.end_of_match && player.base.position.s == 0 && !isPaused) {
							if (player.timer.currentTime.second == 0) {
								player.base.position.s = this.data.player_speed;
							} else {
								player.base.position.s = -this.data.player_speed;
							}
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
															if (thisPoints.points > 1) {
																thisPoints.points *= obstData.points.x;
															}
															if (thisPoints.points == 0 || thisPoints.points == 1) {
																thisPoints.points += 1;
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
											this.spawnObstacles(true);
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
														if (thisPoints.points > 1) {
															thisPoints.points *= obstData.points.x;
														}
														if (thisPoints.points == 0 || thisPoints.points == 1) {
															thisPoints.points += 1;
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
										this.spawnObstacles(true);
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
													console.log(thisPoints.points);
													if (thisPoints.points > 1) {
														thisPoints.points *= goalData.points.x;
													}
													if (thisPoints.points == 0 || thisPoints.points == 1) {
														thisPoints.points += 1;
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
											this.changePointsFromOpponents([thisNameTag], goalData.points.y, goalData.points.o);
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
						if (gameData.showName) {
							playerPoints.text = pM.getPlayer(i+1).player_info.name.slice(0, 8)+": "+thisPoints.points;
						} else {
							playerPoints.text = thisPoints.points;
						}
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
		const currentPlayers = [getByNameTag(name("player_1"), 1),getByNameTag(new nameTag("player_2"), 1),getByNameTag(new nameTag("player_3"), 1),getByNameTag(new nameTag("player_4"), 1)].filter((p) => {return p != null;});
		let walls = getByNameTag(tag("Wall"), 2, false, true);
		if (!Array.isArray(walls) && walls != null) {
			walls = [walls];
		}
		if (walls == null) {
			walls = [];
		}
		let bouncyWalls = getByNameTag(tag("Bounce"), 2, false, true);
		if (!Array.isArray(bouncyWalls) && bouncyWalls != null) {
			bouncyWalls = [bouncyWalls];
		}
		if (bouncyWalls == null) {
			bouncyWalls = [];
		}
		for (let p=0,length=currentPlayers.length;p<length;p++) {
			let player = currentPlayers[p];
			for (let w=0,length=walls.length;w<length;w++) {
				let wall = walls[w];
				cirPolyCollision(player, wall, null, false);
			}
		}
		if (gameData.gameMode == 1) {
			for (let p=0,length=currentPlayers.length;p<length;p++) {
				let player = currentPlayers[p];
				for (let w=0,length=bouncyWalls.length;w<length;w++) {
					let wall = bouncyWalls[w];
					if (cirPolyCollision(player, wall)) {
						player.base.position.s = -player.base.position.s;
					}
				}
			}
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