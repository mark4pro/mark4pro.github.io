var update_date = {"month":2,"startDay":13,"endDay":31};
var popup = 1;
var stcweapon = 0;
var christmasSkin = 0;
var miniBossShip = 0;
var easyShipPrize = 0;
var STPRIZESHIP = 0;
var STPRIZEWEAPON = 0;
var today_date = new Date();
var mydayofweek = today_date.getDay();
var mytoday = today_date.getDate();
var mymonth = today_date.getMonth();
var myyear = today_date.getFullYear();
function Datechecker() {
	if (popup == 1 && mymonth == update_date.month && mytoday >= update_date.startDay && mytoday < update_date.endDay) {
	openpatchinfo = 1;
	popup = 0;
	}
	if (mymonth == 11 && christmasSkin == 0) { 
	christmasSkin = 1;
	localStorage && (localStorage.Cs = christmasSkin);
	}
	if (mymonth == 8 && mytoday >= 11 && mytoday < 30) {
	stcweapon = 1;
	}
}

var playerX = 384.5;
var playerY = 183;
var playerSpeedX = 0;
var playerSpeedY = 0;
var playerXwave5 = 30;
var playerYwave5 = 30;
var playerHealth = 100;
var playerHealthMax = 100;
var playerMaxSpeed = 3;
var playerDirMaxSpeed = 1.8;
var playerStartSpeed = 0.05;
var playerShip = 0;
var menu = 0;
var endless = 0;
var backX = 430;
var backY = 350;
var upgrade1X = 430;
var upgrade1Y = 50;
var bad1posX = 760;
var bad1posY = 450;
var bad2posX = 20;
var bad2posY = 100;
var tri1posX = 700;
var tri1posY = 90;
var rec1posX = 350;
var rec1posY = 40;
var x1posX = 350;
var x1posY = -10;
var badHealthBarColor = "green";
var badHealthBarColor2 = "green";
var badHealthBarColor3 = "green";
var badHealthBarColor4 = "green";
var badHealthBarColor5 = "green";
var difficulty = 0;
var PlayerShipsArray = [];
function start() {
	//Prizes
	if (localStorage && 'Cs' in localStorage) {
	christmasSkin = localStorage.Cs;
	}
	if (localStorage && 'Ms' in localStorage) {
	miniBossShip = localStorage.Ms;
	}
	if (localStorage && 'Es' in localStorage) {
	easyShipPrize = localStorage.Es;
	}
	//Saint Patties Day shit
	if (localStorage && 'Ps' in localStorage) {
	STPRIZESHIP = localStorage.Ps;
	}
	if (localStorage && 'Pw' in localStorage) {
	STPRIZEWEAPON = localStorage.Pw;
	}
	//Bank money
	if (localStorage && 'totalMoney_' in localStorage) {
	totalMoney = localStorage.totalMoney_;
	}
	//Settings
	if (localStorage && 'PlayerShadows' in localStorage) {
		if (localStorage.PlayerShadows == "true") {
		document.getElementById("PSshow").checked = true;
		}
		if (localStorage.PlayerShadows == "false") {
		document.getElementById("PSshow").checked = false;
		}
	}
	if (localStorage && 'LevelShadows' in localStorage) {
		if (localStorage.LevelShadows == "true") {
		document.getElementById("LSshow").checked = true;
		}
		if (localStorage.LevelShadows == "false") {
		document.getElementById("LSshow").checked = false;
		}
	}
	if (localStorage && 'UserInterfaceShadows' in localStorage) {
		if (localStorage.UserInterfaceShadows == "true") {
		document.getElementById("UISshow").checked = true;
		}
		if (localStorage.UserInterfaceShadows == "false") {
		document.getElementById("UISshow").checked = false;
		}
	}
	if (localStorage && 'ImageSmoothing' in localStorage) {
		if (localStorage.ImageSmoothing == "true") {
		document.getElementById("imgSmooth").checked = true;
		}
		if (localStorage.ImageSmoothing == "false") {
		document.getElementById("imgSmooth").checked = false;
		}
	}
	if (localStorage && 'HealthBars' in localStorage) {
		if (localStorage.HealthBars == "true") {
		document.getElementById("HBshow").checked = true;
		}
		if (localStorage.HealthBars == "false") {
		document.getElementById("HBshow").checked = false;
		}
	}
	if (localStorage && 'AnimatedSprites_' in localStorage) {
		if (localStorage.AnimatedSprites_ == "true") {
		document.getElementById("AnimatedSprites").checked = true;
		}
		if (localStorage.AnimatedSprites_ == "false") {
		document.getElementById("AnimatedSprites").checked = false;
		}
	}
	if (localStorage && 'ShowFPSCounter_' in localStorage) {
		if (localStorage.ShowFPSCounter_ == "true") {
		document.getElementById("FPSShow").checked = true;
		}
		if (localStorage.ShowFPSCounter_ == "false") {
		document.getElementById("FPSShow").checked = false;
		}
	}
	if (localStorage && 'MuteShooting_' in localStorage) {
		if (localStorage.MuteShooting_ == "true") {
		document.getElementById("mute_SHOOTING").checked = true;
		}
		if (localStorage.MuteShooting_ == "false") {
		document.getElementById("mute_SHOOTING").checked = false;
		}
	}
	if (localStorage && 'MuteLAmmo_' in localStorage) {
		if (localStorage.MuteLAmmo_ == "true") {
		document.getElementById("mute_LOW_AMMO").checked = true;
		}
		if (localStorage.MuteLAmmo_ == "false") {
		document.getElementById("mute_LOW_AMMO").checked = false;
		}
	}
	if (localStorage && 'MuteExplosion_' in localStorage) {
		if (localStorage.MuteExplosion_ == "true") {
		document.getElementById("mute_EXPLOSION").checked = true;
		}
		if (localStorage.MuteExplosion_ == "false") {
		document.getElementById("mute_EXPLOSION").checked = false;
		}
	}
	if (localStorage && 'DifficultyEasy' in localStorage) {
		if (localStorage.DifficultyEasy == "true") {
		document.getElementById("Easy_").checked = true;
		}
		if (localStorage.DifficultyEasy == "false") {
		document.getElementById("Easy_").checked = false;
		}
	}
	if (localStorage && 'DifficultyMedium' in localStorage) {
		if (localStorage.DifficultyMedium == "true") {
		document.getElementById("Medium_").checked = true;
		}
		if (localStorage.DifficultyMedium == "false") {
		document.getElementById("Medium_").checked = false;
		}
	}
	if (localStorage && 'DifficultyHard' in localStorage) {
		if (localStorage.DifficultyHard == "true") {
		document.getElementById("Hard_").checked = true;
		}
		if (localStorage.DifficultyHard == "false") {
		document.getElementById("Hard_").checked = false;
		}
	}
	if (localStorage && 'MusicVol' in localStorage) {
	document.getElementById("volume").value = parseInt(localStorage.MusicVol, 10);
	}
	if (localStorage && 'SoundFXVol' in localStorage) {
	document.getElementById("soundvolume").value = parseInt(localStorage.SoundFXVol, 10);
	}
	if (localStorage && 'MoveUpControl' in localStorage) {
	Up_ = localStorage.MoveUpControl;
	}
	if (localStorage && 'MoveDownControl' in localStorage) {
	Down_ = localStorage.MoveDownControl;
	}
	if (localStorage && 'MoveLeftControl' in localStorage) {
	Left_ = localStorage.MoveLeftControl;
	}
	if (localStorage && 'MoveRightControl' in localStorage) {
	Right_ = localStorage.MoveRightControl;
	}
	if (localStorage && 'ShootUpControl' in localStorage) {
	shootUp_ = localStorage.ShootUpControl;
	}
	if (localStorage && 'ShootDownControl' in localStorage) {
	shootDown_ = localStorage.ShootDownControl;
	}
	if (localStorage && 'ShootLeftControl' in localStorage) {
	shootLeft_ = localStorage.ShootLeftControl;
	}
	if (localStorage && 'ShootRightControl' in localStorage) {
	shootRight_ = localStorage.ShootRightControl;
	}
	if (localStorage && 'BackControl' in localStorage) {
	Esssc_ = localStorage.BackControl;
	}
	if (localStorage && 'MuteControl' in localStorage) {
	Mute_ = localStorage.MuteControl;
	}
	if (localStorage && 'PatchControl' in localStorage) {
	Patch_ = localStorage.PatchControl;
	}
	if (localStorage && 'ReviveControl' in localStorage) {
	Revive_ = localStorage.ReviveControl;
	}
	if (localStorage && 'SpecialControl' in localStorage) {
	SpecialKey_ = localStorage.SpecialControl;
	}
	if (localStorage && 'SpecialControl2' in localStorage) {
	SpecialKey_2 = localStorage.SpecialControl2;
	}
	if (localStorage && 'MuteVol' in localStorage) {
	mutemusic = localStorage.MuteVol;
	}
	if (localStorage && 'HidePanel_' in localStorage) {
	HPanel = localStorage.HidePanel_;
	}
	if (localStorage && 'Settings_' in localStorage) {
	SShow = localStorage.Settings_;
	}
endCard = new component(800, 390, "end_screen", 0, 0, "img");
guardianPic = new component(25, 25, "enemy_5", 650, 450, "animated-img-rot");
guardianPic_lazer = new component(0, "round", "#650014", 0, 0, "line", 0, 0);
guardianPic_lazer.globalAlpha = 0;
guardianBox = new component(25, 25, "red", 650, 450, "rec", "enemy");
guardianhealthbar = new component(GuardHealth / 2, 5, guardHealthBarColor, guardianBox.x, guardianBox.y - 8, "rec");
bossWave7pic = new component(35, 35, "boss_1", Boss7_Start_X, Boss7_Start_Y, "animated-img-rot");
bossWave7sheildPic = new component(35, 35, "boss_1_shielded", Boss7_Start_X, Boss7_Start_Y, "animated-img-rot");
bossWave7 = new component(35, 35, "red", Boss7_Start_X, Boss7_Start_Y, "rec");
boss7healthbar = new component(BossHealth / 2, 10, bossHealthBarColor, 150, 20, "rec");
bosstxt = new component("30px", "Consolas", "white", 150, 15, "text");
bosstxt.font = "15px Consolas";
bosstxt.text = "BOSS:";
bosstxt2 = new component("30px", "Consolas", "white", 150, 15, "text");
bosstxt2.font = "15px Consolas";
bosstxt2.text = "BOSS: Sheilded";
recenemypic1 = new component(25, 25, "enemy_2", 450, 60, "animated-img-rot");
recenemypic1_lazer = new component(0, "round", "black", 0, 0, "line", 0, 0);
recenemypic1_lazer.globalAlpha = 0;
recbox1 = new component(25, 25, "red", 450, 60, "rec", "enemy");
badguy1healthbar3 = new component(Badhealth4 / 2, 5, badHealthBarColor3, recbox1.x, recbox1.y - 8, "rec");
recpos1 = new component(25, 25, "orange", rec1posX, rec1posY, "rec", "enemy");
recwavebox1 = new component(35, 35, "black", rec1posX - 5, rec1posY - 5, "rec");
xenemypic1 = new component(31, 31, "enemy_4", 450, 60, "animated-img-rot");
xenemypic1_lazer = new component(0, "round", "yellow", 0, 0, "line", 0, 0);
xenemypic1_lazer.globalAlpha = 0;
xbox1 = new component(31, 31, "red", 450, 60, "rec", "enemy");
badguy1healthbar5 = new component(Badhealth5 / 2, 5, badHealthBarColor5, xbox1.x, xbox1.y - 8, "rec");
xpos1 = new component(25, 25, "orange", rec1posX, rec1posY, "rec", "enemy");
xwavebox1 = new component(35, 35, "black", rec1posX - 5, rec1posY - 5, "rec");
badguypic1 = new component(25, 25, "enemy_1", 650, 450, "animated-img-rot");
badguypic1_lazer = new component(0, "round", "darkred", 0, 0, "line", 0, 0);
badguypic1_lazer.globalAlpha = 0;
badguy1 = new component(25, 25, "red", 650, 450, "rec", "enemy");
badguy1healthbar = new component(Badhealth1 / 2, 5, badHealthBarColor, badguy1.x, badguy1.y - 8, "rec");
badpos1 = new component(25, 25, "orange", bad1posX, bad1posY, "rec", "enemy");
badwavebox1 = new component(35, 35, "black", bad1posX - 5, bad1posY - 5, "rec");
badguypic2 = new component(25, 25, "enemy_1", 40, 150, "animated-img-rot");
badguypic2_lazer = new component(0, "round", "darkred", 0, 0, "line", 0, 0);
badguypic2_lazer.globalAlpha = 0;
badguy2 = new component(25, 25, "red", 40, 150, "rec", "enemy");
badguy1healthbar2 = new component(Badhealth2 / 2, 5, badHealthBarColor2, badguy2.x, badguy2.y - 8, "rec");
badpos2 = new component(25, 25, "orange", bad2posX, bad2posY, "rec");
badwavebox2 = new component(35, 35, "black", bad2posX - 5, bad2posY - 5, "rec");
trienemypic = new component(35, 34.5, "enemy_3", 430, 100, "animated-img-rot");
trienemypic_lazer = new component(0, "round", "purple", 0, 0, "line", 0, 0);
trienemypic_lazer.globalAlpha = 0;
tribox = new component(35, 35, "red", 430, 100, "rec", "enemy");
badguy1healthbar4 = new component(Badhealth3 / 2, 5, badHealthBarColor4, tribox.x, tribox.y - 8, "rec");
tribpic = new component(10, 10, "enemy_bullet", 400, 100, "img-rot");
tribbox = new component(10, 10, "orange", 400, 100, "rec");
tripos1 = new component(5, 5, "orange", tri1posX, tri1posY, "rec");
triwavebox1 = new component(15, 15, "black", tri1posX - 5, tri1posY - 5, "rec");
bullbox = new component(10, 10, "orange", 400, 180, "rec");
bullcir = new component(10, 10, "grey", 400, 180, "cir", 3, "black", 0);
bpic = new component(10, 10, "bullet_1", 400, 180, "animated-img-rot");
bpic2 = new component(10, 10, "bullet_2", 400, 180, "animated-img-rot");
bpic3 = new component(10, 10, "bullet_3", 400, 180, "animated-img-rot");
bpic4 = new component(10, 10, "bullet_4", 400, 180, "img");
bpic5 = new component(10, 10, "bullet_5", 400, 180, "animated-img-rot");
box = new component(25, 25, "grey", playerX, playerY, "player1", "player");
circle = new component(0, 0, "white", playerX, playerY, "cir", 16.5);
detectbox = new component(100, 100, "black", playerX - 37.5, playerY - 37.5, "rec");
ship1 = new component(32, 32, "player_1", playerX - 3.5, playerY - 3.5, "animated-img-rot");
PlayerShipsArray.push(ship1);
ship2 = new component(25, 25, "player_2", playerX, playerY, "animated-img-rot");
PlayerShipsArray.push(ship2);
ship3 = new component(25, 25, "player_3", playerX, playerY, "animated-img-rot");
PlayerShipsArray.push(ship3);
ship4 = new component(25, 25, "player_4", playerX, playerY, "animated-img-rot");
PlayerShipsArray.push(ship4);
ship5 = new component(32, 32, "player_5", playerX - 3.5, playerY - 3.5, "animated-img-rot");
PlayerShipsArray.push(ship5);
ship6 = new component(25, 25, "player_6", playerX, playerY, "animated-img-rot");
PlayerShipsArray.push(ship6);
PlayerShadowManager = new PlayerShadowHandler(PlayerShipsArray, "black", 5, 3, 3);"rec-rot-poly"
//Warp Zone
WarpZone_BG = new component(800, 390, "warp_zone", 0, 0, "img");
//Earth shit
EarthHitEnterText = new component("", "", "white", 400, 124, "text");
EarthHitEnterText.align = "center";
EarthHitEnterText.font = "20px Consolas Bold";
EarthHitEnterText.text = "Press Enter!";
EarthHitEnterText.globalAlpha = 0;
EarthHitEnterText.shadowColor_ = "black";
EarthHitEnterText.shadowBlur_ = 2;
EarthHitEnterText.shadowOffsetX_ = 1;
EarthHitEnterText.shadowOffsetY_ = 1;
Earth_Planet_Circle_Collider = new component(0, 0, "white", 400, 195, "cir", 70);
Earth_Planet = new component(142, 142, "earth", 329, 124, "img");
Earth_Planet.shadowColor_ = "black";
Earth_Planet.shadowBlur_ = 3;
Earth_Planet.shadowOffsetX_ = 3;
Earth_Planet.shadowOffsetY_ = 3;
Earth_PopUp_Message = new component(200, 200, "#63218a", 400-(200/2), 195-(200/2), "rec");
Earth_PopUp_Message.globalAlpha = 0;
Earth_PopUp_Message_Border = new component(210, 210, "black", 400-(210/2), 195-(210/2), "rec");
Earth_PopUp_Message_Border.globalAlpha = 0;
Earth_Location_Text = new component("", "", "white", 400-(200/2)+100, 195-(200/2)+25, "text");
Earth_Location_Text.align = "center";
Earth_Location_Text.font = "30px Consolas Bold";
Earth_Location_Text.text = "Warp to Earth?";
Earth_Location_Text.globalAlpha = 0;
Earth_Location_Text.shadowColor_ = "black";
Earth_Location_Text.shadowBlur_ = 2;
Earth_Location_Text.shadowOffsetX_ = 1;
Earth_Location_Text.shadowOffsetY_ = 1;
Earth_Type_Text = new component("", "", "white", 400-(200/2)+100, 195-(200/2)+50, "text");
Earth_Type_Text.align = "center";
Earth_Type_Text.font = "20px Consolas Bold";
Earth_Type_Text.text = "Type: Wave Based";
Earth_Type_Text.globalAlpha = 0;
Earth_Type_Text.shadowColor_ = "black";
Earth_Type_Text.shadowBlur_ = 2;
Earth_Type_Text.shadowOffsetX_ = 1;
Earth_Type_Text.shadowOffsetY_ = 1;
Earth_NumOfWaves_Text = new component("", "", "white", 400-(200/2)+100, 195-(200/2)+75, "text");
Earth_NumOfWaves_Text.align = "center";
Earth_NumOfWaves_Text.font = "20px Consolas Bold";
Earth_NumOfWaves_Text.text = "Number of Waves: 20";
Earth_NumOfWaves_Text.globalAlpha = 0;
Earth_NumOfWaves_Text.shadowColor_ = "black";
Earth_NumOfWaves_Text.shadowBlur_ = 2;
Earth_NumOfWaves_Text.shadowOffsetX_ = 1;
Earth_NumOfWaves_Text.shadowOffsetY_ = 1;
Earth_NumOfBosses_Text = new component("", "", "white", 400-(200/2)+100, 195-(200/2)+100, "text");
Earth_NumOfBosses_Text.align = "center";
Earth_NumOfBosses_Text.font = "20px Consolas Bold";
Earth_NumOfBosses_Text.text = "Number of Bosses: 3";
Earth_NumOfBosses_Text.globalAlpha = 0;
Earth_NumOfBosses_Text.shadowColor_ = "black";
Earth_NumOfBosses_Text.shadowBlur_ = 2;
Earth_NumOfBosses_Text.shadowOffsetX_ = 1;
Earth_NumOfBosses_Text.shadowOffsetY_ = 1;
Earth_Completed_Text = new component("", "", "white", 400-(200/2)+100, 195-(200/2)+125, "text");
Earth_Completed_Text.align = "center";
Earth_Completed_Text.font = "20px Consolas Bold";
Earth_Completed_Text.text = "Completed: false";
Earth_Completed_Text.globalAlpha = 0;
Earth_Completed_Text.shadowColor_ = "black";
Earth_Completed_Text.shadowBlur_ = 2;
Earth_Completed_Text.shadowOffsetX_ = 1;
Earth_Completed_Text.shadowOffsetY_ = 1;
Earth_PopUp_Yes_Button = new component(50, 50, "black", 400-(200/2)+25, 195-(200/2)-60+200, "rec");
Earth_PopUp_Yes_Button.globalAlpha = 0;
Earth_PopUp_Yes_Button.shadowColor_ = "black";
Earth_PopUp_Yes_Button.shadowBlur_ = 3;
Earth_PopUp_Yes_Button.shadowOffsetX_ = 3;
Earth_PopUp_Yes_Button.shadowOffsetY_ = 3;
Earth_PopUp_Yes_Text = new component("", "", "white", 400-(200/2)+50, 195-(200/2)-60+230, "text");
Earth_PopUp_Yes_Text.align = "center";
Earth_PopUp_Yes_Text.font = "20px Consolas Bold";
Earth_PopUp_Yes_Text.text = "YES";
Earth_PopUp_Yes_Text.globalAlpha = 0;
Earth_PopUp_Yes_Text.shadowColor_ = "white";
Earth_PopUp_Yes_Text.shadowBlur_ = 2;
Earth_PopUp_Yes_Text.shadowOffsetX_ = 1;
Earth_PopUp_Yes_Text.shadowOffsetY_ = 1;
Earth_PopUp_No_Button = new component(50, 50, "black", 400-(200/2)+125, 195-(200/2)-60+200, "rec");
Earth_PopUp_No_Button.globalAlpha = 0;
Earth_PopUp_No_Button.shadowColor_ = "black";
Earth_PopUp_No_Button.shadowBlur_ = 3;
Earth_PopUp_No_Button.shadowOffsetX_ = 3;
Earth_PopUp_No_Button.shadowOffsetY_ = 3;
Earth_PopUp_No_Text = new component("", "", "white", 400-(200/2)+151, 195-(200/2)-60+230, "text");
Earth_PopUp_No_Text.align = "center";
Earth_PopUp_No_Text.font = "20px Consolas Bold";
Earth_PopUp_No_Text.text = "NO";
Earth_PopUp_No_Text.globalAlpha = 0;
Earth_PopUp_No_Text.shadowColor_ = "white";
Earth_PopUp_No_Text.shadowBlur_ = 2;
Earth_PopUp_No_Text.shadowOffsetX_ = 1;
Earth_PopUp_No_Text.shadowOffsetY_ = 1;
w1t5 = new component(800, 390, "1-4_background", 0, 0, "img");
w5t7 = new component(800, 390, "5-7_background", 0, 0, "img");
Explosion = new component(800, 390, "explosion_frame_1", 0, 0, "img");
Explosion_2 = new component(800, 390, "explosion_frame_1", 0, 0, "img");
Explosion_3 = new component(800, 390, "explosion_frame_1", 0, 0, "img");
Explosion_4 = new component(800, 390, "explosion_frame_1", 0, 0, "img");
Explosion_5 = new component(800, 390, "explosion_frame_1", 0, 0, "img");
wallleft = new component(60, 400, "black", -60, 0, "rec");
wallright = new component(60, 400, "black", 800, 0, "rec");
wall3 = new component(800, 60, "black", 0, -60, "rec");
wall4 = new component(800, 60, "black", 0, 390, "rec");
roofhouse1 = new component(140, 130, "house_roof_1", 70, 70, "img");
insidedetect1 = new component(120, 140, "gray", 80, 80, "rec");
floorhouse1 = new component(120, 120, "house_floor_1", 80, 80, "img");
wallhouse1 = new component(120, 10, "grey", 80, 80, "rec");
wallhouse1_2 = new component(120, 10, "grey", 80, 70, "rec");
wallhouse2 = new component(10, 100, "grey", 80, 90, "rec");
wallhouse2_2 = new component(10, 120, "grey", 70, 70, "rec");
wallhouse3 = new component(10, 100, "grey", 190, 90, "rec");
wallhouse3_2 = new component(10, 120, "grey", 200, 70, "rec");
wallhouse4 = new component(15, 10, "grey", 90, 180, "rec");
wallhouse4_2 = new component(35, 10, "grey", 70, 190, "rec");
wallhouse4_3 = new component(40, 20, "grey", 70, 180, "rec");
wallhouse5 = new component(10, 5, "grey", 100, 187.5, "rec");
wallhouse6 = new component(25, 10, "grey", 165, 180, "rec");
wallhouse6_2 = new component(45, 10, "grey", 165, 190, "rec");
wallhouse6_3 = new component(50, 20, "grey", 160, 180, "rec");
wallhouse7 = new component(10, 5, "grey", 160, 187.5, "rec");
wallhouse8 = new component(120, 20, "grey", 80, 180, "rec");
wall2house1 = new component(190, 10, "grey", 510, 100, "rec");
wall2house1_2 = new component(200, 10, "grey", 500, 90, "rec");
wall2house2 = new component(10, 80, "grey", 510, 110, "rec");
wall2house2_2 = new component(10, 100, "grey", 500, 100, "rec");
wall2house3 = new component(10, 80, "grey", 690, 110, "rec");
wall2house3_2 = new component(10, 110, "grey", 700, 90, "rec");
wall2house4 = new component(45, 10, "grey", 510, 190, "rec");
wall2house4_2 = new component(55, 10, "grey", 500, 200, "rec");
wall2house4_3 = new component(60, 20, "grey", 500, 190, "rec");
wall2house5 = new component(10, 5, "grey", 550, 197.5, "rec");
wall2house6 = new component(85, 10, "grey", 615, 190, "rec");
wall2house6_2 = new component(95, 10, "grey", 615, 200, "rec");
wall2house6_3 = new component(100, 20, "grey", 610, 190, "rec");
wall2house7 = new component(10, 5, "grey", 610, 197.5, "rec");
wall2house8 = new component(190, 20, "grey", 510, 190, "rec");
roof2house1 = new component(210, 120, "house_roof_1", 500, 90, "img");
inside2detect1 = new component(190, 130, "gray", 510, 100, "rec");
floor2house1 = new component(200, 120, "house_floor_1", 500, 90, "img");
tree1_1_D = new component(50, 50, "black", 80, 290, "rec");
tree1_1 = new component(50, 50, "tree", 80, 290, "img-rot");
tree1_1.angle = Math.random()*6.28318531;
tree1_2_D = new component(50, 50, "black", 650, 270, "rec");
tree1_2 = new component(50, 50, "tree", 650, 270, "img-rot");
tree1_2.angle = Math.random()*6.28318531;
tree1_3_D = new component(50, 50, "black", 230, 90, "rec");
tree1_3 = new component(50, 50, "tree", 230, 90, "img-rot");
tree1_3.angle = Math.random()*6.28318531;
tree1_4_D = new component(50, 50, "black", 270, 175, "rec");
tree1_4 = new component(50, 50, "tree", 270, 175, "img-rot");
tree1_4.angle = Math.random()*6.28318531;
tree1_5_D = new component(50, 50, "black", 420, 70, "rec");
tree1_5 = new component(50, 50, "tree", 420, 70, "img-rot");
tree1_5.angle = Math.random()*6.28318531;
tree1_6_D = new component(50, 50, "black", 620, 33, "rec");
tree1_6 = new component(50, 50, "tree", 620, 33, "img-rot");
tree1_6.angle = Math.random()*6.28318531;
tree1_7_D = new component(50, 50, "black", 500, 285, "rec");
tree1_7 = new component(50, 50, "tree", 500, 285, "img-rot");
tree1_7.angle = Math.random()*6.28318531;
tree1_8_D = new component(50, 50, "black", 300, 265, "rec");
tree1_8 = new component(50, 50, "tree", 300, 265, "img-rot");
tree1_8.angle = Math.random()*6.28318531;
tree2_1_D = new component(50, 50, "black", 50, 20, "rec");
tree2_1 = new component(50, 50, "tree", 50, 20, "img-rot");
tree2_1.angle = Math.random()*6.28318531;
tree2_2_D = new component(50, 50, "black", 230, 70, "rec");
tree2_2 = new component(50, 50, "tree", 230, 70, "img-rot");
tree2_2.angle = Math.random()*6.28318531;
wall3house1 = new component(270, 10, "#666666", 480, 50, "rec");
wall3house1_2 = new component(250, 10, "#666666", 490, 60, "rec");
wall3house2 = new component(10, 90, "#666666", 480, 55, "rec");
wall3house2_2 = new component(10, 80, "#666666", 490, 60, "rec");
wall3house3 = new component(10, 90, "#666666", 740, 55, "rec");
wall3house3_2 = new component(10, 80, "#666666", 730, 60, "rec");
wall3house4 = new component(105, 10, "#666666", 480, 140, "rec");
wall3house4_2 = new component(95, 10, "#666666", 490, 130, "rec");
wall3house4_3 = new component(10, 5, "#666666", 580, 137.5, "rec");
wall3house4_4 = new component(110, 20, "#666666", 480, 130, "rec");
wall3house5 = new component(105, 10, "#666666", 645, 140, "rec");
wall3house5_2 = new component(95, 10, "#666666", 645, 130, "rec");
wall3house5_3 = new component(10, 5, "#666666", 640, 137.5, "rec");
wall3house5_4 = new component(110, 20, "#666666", 640, 130, "rec");
wall3house6 = new component(270, 10, "#666666", 480, 140, "rec");
inside3detect1 = new component(260, 100, "black", 485, 60, "rec");
floor3house1 = new component(270, 100, "house_floor_2", 480, 50, "img");
burntHouse1 = new component(270, 100, "burnt_house", 480, 50, "img");
roof3house1 = new component(270, 100, "house_roof_2", 480, 50, "img");
roof3house2 = new component(50, 50, "house_roof_2", 590, 120, "img");
wall4house1 = new component(270, 10, "#666666", 480, 340, "rec");
wall4house1_1 = new component(250, 10, "#666666", 490, 330, "rec");
wall4house2 = new component(10, 90, "#666666", 480, 255, "rec");
wall4house2_1 = new component(10, 80, "#666666", 490, 260, "rec");
wall4house3 = new component(10, 90, "#666666", 740, 255, "rec");
wall4house3_1 = new component(10, 80, "#666666", 730, 260, "rec");
wall4house4 = new component(45, 10, "#666666", 480, 250, "rec");
wall4house4_1 = new component(35, 10, "#666666", 490, 260, "rec");
wall4house4_2 = new component(10, 5, "#666666", 520, 257.5, "rec");
wall4house4_3 = new component(50, 20, "#666666", 480, 250, "rec");
wall4house5 = new component(45, 10, "#666666", 705, 250, "rec");
wall4house5_1 = new component(35, 10, "#666666", 705, 260, "rec");
wall4house5_2 = new component(10, 5, "#666666", 700, 257.5, "rec");
wall4house5_3 = new component(50, 20, "#666666", 700, 250, "rec");
wall4house6 = new component(60, 10, "#666666", 585, 250, "rec");
wall4house6_1 = new component(60, 10, "#666666", 585, 260, "rec");
wall4house6_2 = new component(10, 5, "#666666", 580, 257.5, "rec");
wall4house6_3 = new component(10, 5, "#666666", 640, 257.5, "rec");
wall4house6_4 = new component(70, 20, "#666666", 580, 250, "rec");
wall4house7 = new component(270, 10, "#666666", 480, 250, "rec");
floor4house1 = new component(270, 90, "house_floor_2", 480, 250, "img");
burntHouse2 = new component(270, 100, "burnt_house", 480, 250, "img");
inside4detect1 = new component(250, 90, "black", 490, 245, "rec");
roof4house1 = new component(270, 100, "house_roof_3", 480, 250, "img");
roof4house2 = new component(50, 50, "house_roof_3", 530, 230, "img");
roof4house3 = new component(50, 50, "house_roof_3", 650, 230, "img");
plantbox1_1 = new component(50, 50, "plant_box", 360, 280, "img");
plantbox2_1 = new component(50, 50, "plant_box", 60, 280, "img");
plantbox3_1 = new component(50, 50, "plant_box", 260, 280, "img");
plantbox4_1 = new component(50, 50, "plant_box", 160, 280, "img");
tree2_3_D = new component(50, 50, "black", 360, 280, "rec");
tree2_3 = new component(50, 50, "tree", 360, 280, "img-rot");
tree2_3.angle = Math.random()*6.28318531;
tree2_4_D = new component(50, 50, "black", 60, 280, "rec");
tree2_4 = new component(50, 50, "tree", 60, 280, "img-rot");
tree2_4.angle = Math.random()*6.28318531;
tree2_5_D = new component(50, 50, "black", 260, 280, "rec");
tree2_5 = new component(50, 50, "tree", 260, 280, "img-rot");
tree2_5.angle = Math.random()*6.28318531;
tree2_6_D = new component(50, 50, "black", 160, 280, "rec");
tree2_6 = new component(50, 50, "tree", 160, 280, "img-rot");
tree2_6.angle = Math.random()*6.28318531;
ui = new component(800, 300, "#451661", 0, 390, "rec");
backbutton = new component(160, 50, "#812bb3", backX - 100, backY + 100, "rec");
backtxt = new component("30px", "Consolas", "white", backX - 90, backY + 130, "text");
backtxt.font = "15px Consolas";
backtxt.text = "Press ESC To Exit";
backtxtinfo = new component("30px", "Consolas", "white", 45, backY + 130, "text");
backtxtinfo.font = "15px Consolas";
backtxtinfo.text = "Exits the upgrade menu. ->";
upgrade1button = new component(205, 50, "#812bb3", upgrade1X - 100, upgrade1Y, "rec");
upgrade1txt = new component("30px", "Consolas", "white", upgrade1X - 90, upgrade1Y + 30, "text");
upgrade1txt.font = "15px Consolas";
upgrade1txt.text = "#1 Weapon Upgrade (1/2)";
upgrade1txtinfo = new component("30px", "Consolas", "white", 45, upgrade1Y + 30, "text");
upgrade1txtinfo.font = "15px Consolas";
upgrade1txtinfo.text = "Weapon Upgrade (1/2) ->";
upgrade1txtinfo2 = new component("30px", "Consolas", "white", 45, upgrade1Y + 45, "text");
upgrade1txtinfo2.font = "15px Consolas";
upgrade1txtinfo2.text = "Name: Hi-Beam";
upgrade1txtinfo3 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
upgrade1txtinfo3.font = "15px Consolas";
upgrade1txtinfo3.text = "Cost: $100";
upgrade1txtinfo4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 75, "text");
upgrade1txtinfo4.font = "15px Consolas";
upgrade1txtinfo4.text = "Damage: 25(+5)";
upgrade1txtinfo5 = new component("30px", "Consolas", "white", 45, upgrade1Y + 90, "text");
upgrade1txtinfo5.font = "15px Consolas";
upgrade1txtinfo5.text = "Range: 2(-1)";
upgrade1txtinfo7 = new component("30px", "Consolas", "white", 45, upgrade1Y + 105, "text");
upgrade1txtinfo7.font = "15px Consolas";
upgrade1txtinfo7.text = "Cool Down: 20(-10)";
upgrade1txtinfo6 = new component("30px", "Consolas", "white", 45, upgrade1Y + 120, "text");
upgrade1txtinfo6.font = "15px Consolas";
upgrade1txtinfo6.text = "Special: Slows Enemies";
upgrade1_2txt = new component("30px", "Consolas", "white", upgrade1X - 90, upgrade1Y + 30, "text");
upgrade1_2txt.font = "15px Consolas";
upgrade1_2txt.text = "#1 Weapon Upgrade (2/2)";
upgrade1_2txtinfo = new component("30px", "Consolas", "white", 45, upgrade1Y + 30, "text");
upgrade1_2txtinfo.font = "15px Consolas";
upgrade1_2txtinfo.text = "Weapon Upgrade (2/2) ->";
upgrade1_2txtinfo2 = new component("30px", "Consolas", "white", 45, upgrade1Y + 45, "text");
upgrade1_2txtinfo2.font = "15px Consolas";
upgrade1_2txtinfo2.text = "Name: Zapper";
upgrade1_2txtinfo3 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
upgrade1_2txtinfo3.font = "15px Consolas";
upgrade1_2txtinfo3.text = "Cost: $200";
upgrade1_2txtinfo4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 75, "text");
upgrade1_2txtinfo4.font = "15px Consolas";
upgrade1_2txtinfo4.text = "Damage: 35(+10)";
upgrade1_2txtinfo5 = new component("30px", "Consolas", "white", 45, upgrade1Y + 90, "text");
upgrade1_2txtinfo5.font = "15px Consolas";
upgrade1_2txtinfo5.text = "Range: 4(+1)";
upgrade1_2txtinfo6 = new component("30px", "Consolas", "white", 45, upgrade1Y + 105, "text");
upgrade1_2txtinfo6.font = "15px Consolas";
upgrade1_2txtinfo6.text = "Cool Down: 20(-0)";
max1txt = new component("30px", "Consolas", "white", upgrade1X - 25, upgrade1Y + 30, "text");
max1txt.font = "20px Consolas";
max1txt.text = "MAXED";
infoboard = new component(300, 500, "#63218a", 0, 0, "rec");
infoboard2 = new component(310, 500, "black", 0, 0, "rec");
pauseboard = new component(800, 500, "#451661", 0, 0, "rec");
upgradeboard = new component(800, 500, "#451661", 0, 0, "rec");
upgradetxt = new component("30px", "Consolas", "white", 345, 30, "text");
upgradetxt.font = "20px Consolas";
upgradetxt.text = "Upgrade Menu";
waveFtxt = new component("30px", "Consolas", "white", 45, 30, "text");
waveFtxt.font = "20px Consolas";
waveFtxt.text = "You Finished A Wave!";
healthButton = new component(205, 50, "#812bb3", upgrade1X + 135, upgrade1Y, "rec");
healthBtxt = new component("30px", "Consolas", "white", upgrade1X + 237.5, upgrade1Y + 30, "text");
healthBtxt.align = "center";
healthBtxt.font = "15px Consolas";
healthBtxt.text = "(H) Recover Health";
healthtxtinfo = new component("30px", "Consolas", "white", 45, backY + 100, "text");
healthtxtinfo.font = "15px Consolas";
healthtxtinfo.text = "Health Recovery Cost: $" + (playerHealthMax - playerHealth);
ammoButton = new component(205, 50, "#812bb3", upgrade1X + 135, upgrade1Y + 70, "rec");
ammoBtxt = new component("30px", "Consolas", "white", upgrade1X + 237.5, upgrade1Y + 100, "text");
ammoBtxt.align = "center";
ammoBtxt.font = "15px Consolas";
ammoBtxt.text = "(A) Recover Ammo";
ammotxtinfo = new component("30px", "Consolas", "white", 45, backY + 115, "text");
ammotxtinfo.font = "15px Consolas";
ammotxtinfo.text = "Ammo Recovery Cost: $" + (maxAmmo - ammo);
costToRevive = new component("30px", "Consolas", "darkred", 10, 490, "text");
costToRevive.font = "30px Consolas";
menuboard = new component(800, 500, "title_screen", 0, 0, "img");
menuboardtxttimer = new TimerComponent(0, 100);
menuboardtxt = new component("30px", "Consolas", "#bc8dd3", menuboard.width/2, menuboard.height/2 + 30, "text");
menuboardtxt.globalAlpha = 0;
menuboardtxt.align = "center";
menuboardtxt.shadowColor_ = "black";
menuboardtxt.shadowBlur_ = 2;
menuboardtxt.shadowOffsetX_ = 1;
menuboardtxt.shadowOffsetY_ = 1;
menuboardtxt.font = "30px Consolas Bold";
menuboardtxt.text = "Press Any Fire Key To Start!";
formplat = new component(75, 75, "1-4_platform", 359, 157, "img");
border1_5 = new component(800, 390, "1-4_border", 0, 0, "img");
LowHealth_ = new component(800, 390, "low_health", 0, 0, "img");
LowHealthTxt = new component("30px", "Consolas", "orange", 30, 35, "text");
LowHealthTxt.font = "35px Consolas";
LowHealthTxt.text = "Low Health!";
LowAmmoTxt = new component("30px", "Consolas", "yellow", 30, 380, "text");
LowAmmoTxt.font = "35px Consolas";
LowAmmoTxt.text = "Low Ammo!";
GotoWarp = new component(205, 50, "#812bb3", 297.5, 450, "rec");
GotoWarptxt = new component("30px", "Consolas", "white", 400, 482.5, "text");
GotoWarptxt.align = "center";
GotoWarptxt.font = "20px Consolas";
GotoWarptxt.text = "(W) Goto Warp";
TipsTxt = new component("30px", "Consolas", "white", 10, 482.5, "text");
TipsTxt.font = "10px Consolas";
TipsTxt.text = "Tip:";
DeathForPlayer = new component(800, 500, "death_screen", 0, 0, "img");
middle_UI_edge = new component(100, 80, "black", 350, 430, "rec"); 
middle_UI = new component(90, 80, "#63218a", 355, 435, "rec");
backgroung_ammo = new component(83, 15, "#812bb3", 358, 438, "rec");
backgroung_weapon = new component(83, 15, "#812bb3", 358, 458, "rec");
backgroung_wave = new component(83, 15, "#812bb3", 358, 478, "rec");
ammotxt = new component("30px", "Consolas", "orange", 360, 450, "text");
weaptxt = new component("30px", "Consolas", "black", 358, 470, "text");
wavetxt = new component("30px", "Consolas", "lightgray", 360, 490, "text");
Mute_UI = new component(80, 80, "mute_icon", 470, 420, "animated-img");
//pause menu//
weap_ship = new component(200, 200, "grey", 300, 40, "rec");
shiptxt = new component("30px", "Consolas", "white", 365, 55, "text");
shiptxt.font = "15px Consolas";
shiptxt.text = "Shipyard";
pausetxt = new component("30px", "Consolas", "white", 345, 30, "text");
pausetxt.font = "20px Consolas";
pausetxt.text = "Pause Menu";
//ship yard//
ship1Show = new component(32, 32, "player_1", 305, 60, "animated-img-rot");
shipHighLight1 = new component(35, 35, "highlight", ship1Show.x - ((35-ship1Show.width)/2), ship1Show.y - ((35-ship1Show.height)/2), "img-rot");
shipHighLight1.globalAlpha = 0;
ship1txt = new component("30px", "Consolas", "white", 312.5, 105, "text");
ship1txt.font = "15px Consolas";
ship1txt.text = "#1";
ship2Show = new component(25, 25, "player_2", 345.5, 63.5, "animated-img-rot");
shipHighLight2 = new component(28, 28, "highlight", ship2Show.x - ((28-ship2Show.width)/2), ship2Show.y - ((28-ship2Show.height)/2), "img-rot");
shipHighLight2.globalAlpha = 0;
ship2txt = new component("30px", "Consolas", "white", 349.5, 105, "text");
ship2txt.font = "15px Consolas";
ship2txt.text = "#2";
ship3Show = new component(25, 25, "player_3", 382.5, 63.5, "animated-img-rot");
shipHighLight3 = new component(28, 28, "highlight", ship3Show.x - ((28-ship3Show.width)/2), ship3Show.y - ((28-ship3Show.height)/2), "img-rot");
shipHighLight3.globalAlpha = 0;
ship3Hidden = new component(25, 25, "hidden_ship", ship3Show.x, ship3Show.y, "img");
ship3txt = new component("30px", "Consolas", "white", 386.5, 105, "text");
ship3txt.font = "15px Consolas";
ship3txt.text = "#3";
ship4Show = new component(25, 25, "player_4", 419.5, 63.5, "animated-img-rot");
shipHighLight4 = new component(28, 28, "highlight", ship4Show.x - ((28-ship4Show.width)/2), ship4Show.y - ((28-ship4Show.height)/2), "img-rot");
shipHighLight4.globalAlpha = 0;
ship4Hidden = new component(25, 25, "hidden_ship", ship4Show.x, ship4Show.y, "img");
ship4txt = new component("30px", "Consolas", "white", 423.5, 105, "text");
ship4txt.font = "15px Consolas";
ship4txt.text = "#4";
ship5Show = new component(32, 32, "player_5", 453, 60, "animated-img-rot");
shipHighLight5 = new component(35, 35, "highlight", ship5Show.x - ((35-ship5Show.width)/2), ship5Show.y - ((35-ship5Show.height)/2), "img-rot");
shipHighLight5.globalAlpha = 0;
ship5Hidden = new component(32, 32, "hidden_ship", ship5Show.x, ship5Show.y, "img");
ship5txt = new component("30px", "Consolas", "white", 460.5, 105, "text");
ship5txt.font = "15px Consolas";
ship5txt.text = "#5";
ship6Show = new component(25, 25, "player_6", 308.5, 113.5, "animated-img-rot");
shipHighLight6 = new component(28, 28, "highlight", ship6Show.x - ((28-ship6Show.width)/2), ship6Show.y - ((28-ship6Show.height)/2), "img-rot");
shipHighLight6.globalAlpha = 0;
ship6Hidden = new component(25, 25, "hidden_ship", ship6Show.x, ship6Show.y, "img");
ship6txt = new component("30px", "Consolas", "white", 312.5, 155, "text");
ship6txt.font = "15px Consolas";
ship6txt.text = "#6";
FPSText = new component("", "", "green", 10, 20, "text");
FPSText.font = "20px Consolas Bold";
FPSText.text = 0;
FPSText.globalAlpha = 0;
FPSText.shadowColor_ = "black";
FPSText.shadowBlur_ = 2;
FPSText.shadowOffsetX_ = 1;
FPSText.shadowOffsetY_ = 1;
resizeHandler();
animationInt();
Board.start();
updateGameArea();
}
 
var Board = {
	canvas : document.createElement("canvas"),
	start : function() {
	this.canvas.width = 800;
	this.canvas.height = 500;
	this.canvas.id = "screen"
	this.context = this.canvas.getContext("2d");
	document.body.insertBefore(this.canvas,
	document.body.childNodes[0]);
	this.interval = setInterval(updateGameArea, 10);
		window.addEventListener('mousedown', function (e) {
		Board.x = e.pageX;
		Board.y = e.pageY;
		})
		window.addEventListener('mouseup', function (e) {
		Board.x = false;
		Board.y = false;
		})
		window.addEventListener('touchstart', function (e) {
		Board.x = e.pageX;
		Board.y = e.pageY;
		})
		window.addEventListener('touchend', function (e) {
		Board.x = false;
		Board.y = false;
		})
	document.addEventListener("keydown",keyDownHandler, false);	
	document.addEventListener("keyup",keyUpHandler, false);
	window.addEventListener("resize", resizeHandler);
	},
	stop : function() {
	clearInterval(this.interval);
	},
	clear : function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function animationComponent(object, num_of_frames, width, height, speed=30, loop=true, start_frame={"x":0,"y":0}) {
this.object = object;
this.num_of_frames = num_of_frames;
this.width = width;
this.height = height;
this.speed = speed;
this.loop = loop;
this.start_frame = start_frame;
this.time = 0;
this.frame_x = this.start_frame.x;
this.frame_y = this.start_frame.y;
this.done = false;
	this.update = function() {
		//Counter
		if (this.loop) {
		this.time += this.speed/10;
		} else {
			if (!this.done) {
			this.time += this.speed/10;
			}
		}
		if (this.time >= 100) {
			if (this.frame_x != this.width) {
			this.frame_x++;
			}
			this.time = 0;
		}
		if (this.frame_x == this.width) {
		this.frame_y++;
		this.frame_x = 0;
			if (this.frame_y == this.height) {
			this.done = true;
			this.frame_y = 0;
			}
		}
		if (this.frame_x*(this.frame_y+2) >= this.num_of_frames) {
		this.done = true;
		this.frame_x = 0;
		this.frame_y = 0;
		}
		if (this.frame_y < this.height) {
		this.done = false;
		}
	//Update frame
	object.sx = this.frame_x*object.width;
	object.sy = this.frame_y*object.height;
	}
	this.reset_frame = function() {
	this.time = 0;
	this.frame_x = 0;
	this.frame_y = 0;
	this.done = false;
	}
}

function animationInt() {
badguypic1_1_animation = new animationComponent(badguypic1, 6, 4, 2);
badguypic2_1_animation = new animationComponent(badguypic2, 6, 4, 2);
recenemypic1_1_animation = new animationComponent(recenemypic1, 6, 4, 2);
trienemypic_1_animation = new animationComponent(trienemypic, 8, 4, 2, 45);
xenemypic1_1_animation = new animationComponent(xenemypic1, 8, 4, 2, 60);
guardianPic_1_animation = new animationComponent(guardianPic, 6, 3, 3, 45);
bossWave7pic_1_animation = new animationComponent(bossWave7pic, 8, 4, 2, 60);
bossWave7sheildPic_1_animation = new animationComponent(bossWave7sheildPic, 8, 4, 2, 60);
ship1_1_animation = new animationComponent(ship1, 8, 4, 2, 60);
shipShow1_1_animation = new animationComponent(ship1Show, 8, 4, 2, 60);
ship2_1_animation = new animationComponent(ship2, 8, 4, 2, 120);
shipShow2_1_animation = new animationComponent(ship2Show, 8, 4, 2, 120);
ship3_1_animation = new animationComponent(ship3, 8, 4, 2, 60);
shipShow3_1_animation = new animationComponent(ship3Show, 8, 4, 2, 60);
ship4_1_animation = new animationComponent(ship4, 8, 4, 2, 60);
shipShow4_1_animation = new animationComponent(ship4Show, 8, 4, 2, 60);
ship5_1_animation = new animationComponent(ship5, 8, 4, 2, 60);
shipShow5_1_animation = new animationComponent(ship5Show, 8, 4, 2, 60);
ship6_1_animation = new animationComponent(ship6, 8, 4, 2, 60);
shipShow6_1_animation = new animationComponent(ship6Show, 8, 4, 2, 60);
}

var animationNoOff = false;
function animations() {
	if (document.getElementById("AnimatedSprites").checked) {
	animationNoOff = true;
	} else {
	animationNoOff = false;
	}
	//badguypic1 enemy animation//
	if (wave < 5 && BadDeath < 1 && Death1 == 0) {
	badguypic1.angle += 0.05;
		if (animationNoOff) {
		badguypic1_1_animation.update();
		}
	}
	if (wave >= 5 || BadDeath > 0 || Death1 != 0) {
	badguypic1.angle = 0;
		if (!animationNoOff) {
		badguypic1_1_animation.reset_frame();
		}
	}
	//badguypic2 enemy animation//
	if (wave < 7 && wave > 1 && BadDeath2 < 1 && Death1 == 0) {
	badguypic2.angle += 0.05;
		if (animationNoOff) {
		badguypic2_1_animation.update();
		}
	}
	if (wave >= 7 || wave < 2 || BadDeath2 > 0 || Death1 != 0) {
	badguypic2.angle = 0;
		if (!animationNoOff) {
		badguypic2_1_animation.reset_frame();
		}
	}
	//recenemypic1 enemy animation//
	if (wave > 2 && wave < 5 && BadDeath4 < 1 && Death1 == 0) {
	recenemypic1.angle += 0.08;
		if (animationNoOff) {
		recenemypic1_1_animation.update();
		}
	}
	if (wave >= 5 || wave <= 2 || BadDeath4 > 0 || Death1 != 0) {
	recenemypic1.angle = 0;
		if (!animationNoOff) {
		recenemypic1_1_animation.reset_frame();
		}
	}
	//trienemypic enemy animation//
	trienemypic.angle = Math.atan2(-box.y+trienemypic.y, -box.x+trienemypic.x)+1.5707963268;
	if (wave > 4 && wave < 7 && BadDeath3 < 1 && Death1 == 0) {
		if (animationNoOff) {
		trienemypic_1_animation.update();
		}
	}
	if (wave >= 7 || wave <= 4 || BadDeath3 > 0 || Death1 != 0) {
		if (!animationNoOff) {
		trienemypic_1_animation.reset_frame();
		}
	}
	//xenemypic1 enemy animation//
	if (wave > 5 && wave < 7 && BadDeath5 < 1 && Death1 == 0) {
	xenemypic1.angle += 0.06;
		if (animationNoOff) {
		xenemypic1_1_animation.update();
		}
	}
	if (wave >= 7 || wave <= 5 || BadDeath5 > 0 || Death1 != 0) {
	xenemypic1.angle = 0;
		if (!animationNoOff) {
		xenemypic1_1_animation.reset_frame();
		}
	}
	//guardianPic enemy animation//
	if (wave == 7 && !GuardDead && GuardStart == 1 && Death1 == 0) {
		if (guardianBox.crashWith(detectbox)) {
		guardianPic.angle += 8 * Math.PI / 180;
		} else {
		guardianPic.angle += 5 * Math.PI / 180;	
		}
		if (GuardHealth <= 0) {
		guardianPic.angle = 0;
		}
		if (animationNoOff) {
		guardianPic_1_animation.update();
		}
	}
	if (wave != 7 || GuardDead || GuardStart != 1 || Death1 != 0) {
	guardianPic.angle = 0;
		if (!animationNoOff) {
		guardianPic_1_animation.reset_frame();
		}
	}
	//bossWave7pic enemy animation//
	if (wave == 7 && spawnBoss7 == 1 && !BossDead) {
	bossWave7pic.angle += 0.05;
		if (animationNoOff) {
		bossWave7pic_1_animation.update();
		}
	} else {
	bossWave7pic.angle = 0;
		if (!animationNoOff) {
		bossWave7pic_1_animation.reset_frame();
		}
	}
	//bossWave7sheildPic enemy animation//
	bossWave7sheildPic.angle = bossWave7pic.angle;
	if (bossSheildMode == 1) {
		if (animationNoOff) {
		bossWave7sheildPic_1_animation.update();
		}
	} else {
		if (!animationNoOff) {
		bossWave7sheildPic_1_animation.reset_frame();
		}
	}
	//ship1 ship animation//
	ship1.angle += 0.05;
	if (Death1 == 0 && playerShip == 0 && animationNoOff) {
	ship1_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 0) {
		if (!animationNoOff) {
		ship1_1_animation.reset_frame();
		}
	}
	//ship1Show animation//
	ship1Show.angle += 0.05;
	shipHighLight1.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow1_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow1_1_animation.reset_frame();
		}
	}
	//ship2 ship animation//
	ship2.angle += 0.05;
	if (Death1 == 0 && playerShip == 1 && animationNoOff) {
	ship2_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 1) {
		if (!animationNoOff) {
		ship2_1_animation.reset_frame();
		}
	}
	//ship2Show animation//
	ship2Show.angle += 0.05;
	shipHighLight2.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow2_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow2_1_animation.reset_frame();
		}
	}
	//ship3 ship animation//
	ship3.angle += 0.05;
	if (Death1 == 0 && playerShip == 2 && animationNoOff) {
	ship3_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 2) {
		if (!animationNoOff) {
		ship3_1_animation.reset_frame();
		}
	}
	//ship3Show animation//
	ship3Show.angle += 0.05;
	shipHighLight3.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow3_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow3_1_animation.reset_frame();
		}
	}
	//ship4 ship animation//
	ship4.angle += 0.05;
	if (Death1 == 0 && playerShip == 3 && animationNoOff) {
	ship4_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 3) {
		if (!animationNoOff) {
		ship4_1_animation.reset_frame();
		}
	}
	//ship4Show animation//
	ship4Show.angle += 0.05;
	shipHighLight4.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow4_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow4_1_animation.reset_frame();
		}
	}
	//ship5 ship animation//
	ship5.angle += 0.05;
	if (Death1 == 0 && playerShip == 4 && animationNoOff) {
	ship5_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 4) {
		if (!animationNoOff) {
		ship5_1_animation.reset_frame();
		}
	}
	//ship5Show animation//
	ship5Show.angle += 0.05;
	shipHighLight5.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow5_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow5_1_animation.reset_frame();
		}
	}
	//ship6 ship animation//
	ship6.angle += 0.05;
	if (Death1 == 0 && playerShip == 5 && animationNoOff) {
	ship6_1_animation.update();
	}
	if (Death1 != 0 || playerShip != 5) {
		if (!animationNoOff) {
		ship6_1_animation.reset_frame();
		}
	}
	//ship6Show animation//
	ship6Show.angle += 0.05;
	shipHighLight6.angle -= 0.5;
	if (pauseGame == 1 && !pauseGameKeys && weaponVault == 0 && animationNoOff) {
	shipShow6_1_animation.update();
	}
	if (pauseGame != 1 || pauseGameKeys || weaponVault != 0) {
		if (!animationNoOff) {
		shipShow6_1_animation.reset_frame();
		}
	}
//bpic bullet animation//
bpic.angle += 0.08;
//bpic2 bullet animation//
bpic2.angle += 0.08;
//bpic3 bullet animation//
bpic3.angle += 0.08;
//bpic5 bullet animation//
bpic5.angle += 0.08;
}

function TimerComponent(time, reset_time) {
this.time = time;
this.reset_time = reset_time;
this.timer_ON_OFF = false;
this.start_timer = function() {
	if (this.timer_ON_OFF) {
	this.time++;	
		if (this.time > this.reset_time) {
		this.time = 0;
		this.timer_ON_OFF = false; 
		}
	}
}
}

function component(width, height, color, x, y, type, radius, outcolor, thickness, doorX, doorY) {
	this.type = type;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.sx = 0;
	this.sy = 0;
	this.endpositionX = radius;
	this.endpositionY = outcolor;
	this.rotateSpeed = 0;
	this.angle = 0;
	this.align = "start";
	this.globalAlpha = 1;
	this.width = width;
	this.height = height;
	this.halfWidth = this.width * 0.5;
	this.halfHeight = this.height * 0.5;
	this.color = color;
	this.thickness = thickness;
	this.outcolor = outcolor;
	this.radius = radius;
	this.shadowColor_ = "";
	this.shadowBlur_ = 0;
	this.shadowOffsetX_ = 0;
	this.shadowOffsetY_ = 0;
	this.doorX = doorX;
	this.doorY = doorY;
	this.convertRADtoDEG = function() {
		return this.angle*180/Math.PI;
	},
	this.pointsX = [];
	this.pointsY = [];
	this.update = function() {
		ctx = Board.context;
		switch (this.type) {
			case "line":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color; 
			ctx.moveTo(this.x, this.y);
			ctx.lineTo(this.endpositionX, this.endpositionY);
			ctx.stroke();
			break;
			case "text":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.textAlign = this.align;
			ctx.font = this.font;
			ctx.fillStyle = this.color;
			ctx.fillText(this.text, this.x, this.y);
			break;
			case "rec":
			case "player1":
			case "bull":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
				this.getPointsFormated = function() {
					return [{x:this.x,y:this.y},
					{x:(this.x+this.width),y:this.y},
					{x:(this.x+this.width),y:(this.y+this.height)},
					{x:this.x,y:(this.y+this.height)},
					{x:this.x,y:this.y}];
				}
			break;
			case "rec-rot":
			ctx.save();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.fillStyle = this.color;
			ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
			ctx.rotate(this.angle);
			ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
			ctx.restore();
			break;
			case "rec-rot-poly":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			this.pointsX[0]=(-this.width/2*Math.cos(this.convertRADtoDEG())-(-this.width/2)*Math.sin(this.convertRADtoDEG()))+this.x;
			this.pointsY[0]=(-this.height/2*Math.sin(this.convertRADtoDEG())+(-this.height/2)*Math.cos(this.convertRADtoDEG()))+this.y;
			this.pointsX[1]=(this.width/2*Math.cos(-this.convertRADtoDEG())-this.width/2*Math.sin(-this.convertRADtoDEG()))+this.x;
			this.pointsY[1]=(-this.height/2*Math.sin(-this.convertRADtoDEG())+(-this.height/2)*Math.cos(-this.convertRADtoDEG()))+this.y;
			this.pointsX[2]=(this.width/2*Math.cos(this.convertRADtoDEG())-this.width/2*Math.sin(this.convertRADtoDEG()))+this.x;
			this.pointsY[2]=(this.height/2*Math.sin(this.convertRADtoDEG())+this.height/2*Math.cos(this.convertRADtoDEG()))+this.y;
			this.pointsX[3]=(-this.width/2*Math.cos(-this.convertRADtoDEG())-(-this.width/2)*Math.sin(-this.convertRADtoDEG()))+this.x;
			this.pointsY[3]=(this.height/2*Math.sin(-this.convertRADtoDEG())+this.height/2*Math.cos(-this.convertRADtoDEG()))+this.y;
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);//center position
			ctx.lineTo(this.pointsX[0], this.pointsY[0]);
			ctx.lineTo(this.pointsX[1], this.pointsY[1]);
			ctx.lineTo(this.pointsX[2], this.pointsY[2]);
			ctx.lineTo(this.pointsX[3], this.pointsY[3]);
			ctx.lineTo(this.pointsX[0], this.pointsY[0]);
			ctx.fillStyle = this.color;
			ctx.fill();
				this.getPointsFormated = function() {
					return [{x:this.pointsX[0],y:this.pointsY[0]},
					{x:this.pointsX[1],y:this.pointsY[1]},
					{x:this.pointsX[2],y:this.pointsY[2]},
					{x:this.pointsX[3],y:this.pointsY[3]},
					{x:this.pointsX[0],y:this.pointsY[0]}];
				}
			break;
			case "cir":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.lineWidth = this.thickness;
			ctx.strokeStyle = this.outcolor;
			ctx.stroke();
			break;
			case "img":
			var img = document.getElementById(this.color);
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.drawImage(img, this.x, this.y, this.width, this.height);
			break;
			case "animated-img":
			var img = document.getElementById(this.color);
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
			break;
			case "img-rot":
			var img = document.getElementById(this.color);
			ctx.save();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
			ctx.rotate(this.angle);
			ctx.drawImage(img, this.width / -2, this.height / -2, this.width, this.height);
			ctx.restore();
			break;
			case "animated-img-rot":
			var img = document.getElementById(this.color);
			ctx.save();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
			ctx.rotate(this.angle);
			ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.width / -2, this.height / -2, this.width, this.height);
			ctx.restore();
			break;
		}
	},
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
		this.angle += this.rotateSpeed;
	},
	this.getMidX = function() {
		return this.halfWidth + this.x;
	},
	this.getMidY = function() {
		return this.halfHeight + this.y;
	},
	this.getTop = function() {
		return this.y;
	},
	this.getLeft = function() {
		return this.x;
	},
	this.getRight = function() {
		return this.x + this.width;
	},
	this.getBottom = function() {
		return this.y + this.height;
	},
	this.crashWith = function(otherobj) {
		if (this.getBottom() < otherobj.getTop() || this.getTop() > otherobj.getBottom() || this.getRight() < otherobj.getLeft() || this.getLeft() > otherobj.getRight()) {
			return false;
		}
		return true;
	},
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
	},
	//this must be a circle//
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
	},
	this.polyReact = function(entity) {
		this.poly1 = this.getPointsFormated();
		this.poly2 = entity.getPointsFormated();
		if (this.type === "rec" || this.type == "player1" || this.type == "bull") {
			this.line1mid = {x:(this.poly1[0].x+this.poly1[2].x)/2, y:(this.poly1[0].y+this.poly1[2].y)/2}
		}
		if (this.type === "rec-rot-poly") {
			this.line2mid = {x:this.x, y:this.y}
		}
		if (entity.type === "rec" || entity.type == "player1" || entity.type == "bull") {
			this.line2mid = {x:(this.poly2[0].x+this.poly2[2].x)/2, y:(this.poly2[0].y+this.poly2[2].y)/2}
		}
		if (entity.type === "rec-rot-poly") {
			this.line2mid = {x:entity.x, y:entity.y}
		}
	this.collided = this.polyCrashWith(entity);
		if (this.collided) {
			this.overlap = this.polyCrashWith(entity, true);
			this.overlapLength = this.overlap[0].length-1;
			if (this.type === "rec" || this.type === "rec-rot-poly" || this.type == "player1" || this.type == "bull") {
				if (entity.type === "rec" || entity.type === "rec-rot-poly") {
					//Top//
					if (this.line1mid.y > this.line2mid.y) {
						this.y += (this.overlap[0][this.overlapLength].y-this.y);
					} else
					//Bottom//
					if (this.line1mid.y < this.line2mid.y) {
						this.y += (this.overlap[0][this.overlapLength].y-(this.y+this.height));
					}
					//Left//
					if (this.line1mid.x > this.line2mid.x) {
						this.x += (this.overlap[0][this.overlapLength].x-this.x);
					} else
					//Right//
					if (this.line1mid.x < this.line2mid.x) {
						this.x += (this.overlap[0][this.overlapLength].x-(this.x+this.width));
					}
				}
			}
		}
	},
	this.elasticCollition = function(entity, exeption) {
		var pMidX = this.getMidX();
		var pMidY = this.getMidY();
		var aMidX = entity.getMidX();
		var aMidY = entity.getMidY();
		var dx = (aMidX - pMidX) / entity.halfWidth;
		var dy = (aMidY - pMidY) / entity.halfHeight;
		var absDX = Math.abs(dx);
		var absDY = Math.abs(dy);
		if (absDX > absDY) {
			if (dx < 0) {
				if (exeption == null || !exeption) {
					this.x = entity.getRight() + 0.5;
				}
				if (this.type == "player1" && lockLeftE == 1) {
					playerSpeedX = 0;
				}
			} else {
				if (exeption == null || !exeption) {
					this.x = entity.getLeft() - this.width - 0.5;
				}
				if (this.type == "player1" && lockRightE == 1) {
					playerSpeedX = 0;
				}
			}		
		} else {
			if (dy < 0) {
				if (exeption == null || !exeption) {
					this.y = entity.getBottom() + 0.5;
				}
				if (this.type == "player1" && lockUpE == 1) {
					playerSpeedY = 0;
				}
			} else {
				if (exeption == null || !exeption) {
					this.y = entity.getTop() - this.height - 0.5;
				}
				if (this.type == "player1" && lockDownE == 1) {
					playerSpeedY = 0;
				}
			}  
		}
	}
}

var HealthX = 30;
var HealthY = 450;
var HealthWidth = 103;
var HealthHeight = 30;
var Death1 = 0;
var texth;
var word = "Health:";
var hcolor = "Darkgreen";
var healthBarLength = 100;
function Health1() {
	bo = new component(113, 56.5, "black", 25, 428, "rec");
	w1 = new component(5, 48, "black", HealthX - 5, HealthY - 17, "rec");
	w2 = new component(5, 48, "black", HealthX + 103, HealthY - 17, "rec");
	w3 = new component(113, 5, "black", HealthX - 5, HealthY - 22, "rec");
	w4 = new component(113, 5, "black", HealthX - 5, HealthY + 30, "rec");
	g = new component(HealthWidth, HealthHeight, "#812bb3", HealthX, HealthY - 17, "rec");
	texth = new component("30px", "Consolas", "red", HealthX + 2, HealthY - 2, "text");
	base = new component(HealthWidth, HealthHeight, "#63218a", HealthX, HealthY, "rec");
	full = new component(healthBarLength, HealthHeight - 5, hcolor, HealthX + 1.5, HealthY + 2.5, "rec");
	if (playerHealth > 100) {
		healthBarLength = playerHealth / (playerHealth / 100);
	} else {
		healthBarLength = playerHealth;
	}
	w1.update();
	w2.update();
	w3.update();
	w4.update();
	bo.update();
	g.update();
	texth.font="18px Consolas";
	texth.text=word + Math.round(playerHealth);;
	texth.update();
	base.update();
	full.update();
	if (playerHealth > 75/100 * playerHealthMax) {
		hcolor = "Darkgreen";
	}
	if (playerHealth <= 75/100 * playerHealthMax) {
		hcolor = "green";
	}
	if (playerHealth <= 50/100 * playerHealthMax) {
		hcolor = "yellow";
	}
	if (playerHealth <= 25/100 * playerHealthMax) {
		hcolor = "orange";
	}
	if (playerHealth <= 10/100 * playerHealthMax) {
		hcolor = "red";
	}
	if (playerHealth <= 0) {
		Death1 = 1;
	}
	if (playerHealth > 0) {
		Death1 = 0;
	}
}

var showmessage = 0;
var payback = Math.floor(30/100 * maxAmmo);
var revivecost = 100;
function relive() {
	if (Death1 > 0) {
		if (money >= revivecost) {
			money -= revivecost;
			playerHealth = playerHealthMax;
			if (ammo < 50/100 * maxAmmo) {
				ammo += payback;
			}
		}
		if (money < revivecost) {
			showmessage = 1;
		}  
	}
}

function stopshow() {
	showmessage = 0;
}

var crate1X = 374;
var crate1Y = 184.5;
var crateh1X = 399;
var crateh1Y = 184.5;
var cratesw1X = 640;
var cratesw1Y = 50;
function ammocrate() {
	ammocrate1 = new component(20, 20, "yellow", crate1X, crate1Y, "rec");
	healthcrate1 = new component(20, 20, "red", crateh1X, crateh1Y, "rec");
	ammocrate1picO = new component(20, 20, "ammo_crate", crate1X, crate1Y, "img");
	healthcrate1picO = new component(20, 20, "health_crate", crateh1X, crateh1Y, "img");
	SWeapon1 = new component(10, 10, "bullet_4", cratesw1X, cratesw1Y, "img");
	SWeapon1Box = new component(10, 10, "orange", cratesw1X, cratesw1Y, "rec");
}

var wave = 22;
var oldwave = 1;
var upgrademenu = 0;
function checkwave() {
	if (oldwave != wave && wave > oldwave){
		if (money > 0 && !NOUPGRADESAVAILABLE) {
			upgrademenu = 1;
		}
		oldwave = wave;
	}
	if (oldwave != wave && wave < oldwave){
		oldwave = wave;
	}
}

var resetframe = 6;
var tickCount = 0;
var frameIndex = 0;
var ticksPerFrame = 60;
var startTime = 0;
function framerate() {
	if (startTime == 1) {
		tickCount += 1;	
		if (tickCount > ticksPerFrame) {
			tickCount = 0;
			frameIndex += 1; 
		}
		if (frameIndex == resetframe) {
			tickCount = 0;
			frameIndex = 0;
			startTime = 0;			
		}
	}
}
	
var resetframe2 = 6;
var tickCount2 = 0;
var frameIndex2 = 0;
var ticksPerFrame2 = 60;
var startTime2 = 0;
function framerate2() {
	if (startTime2 == 1) {
		tickCount2 += 1;	
		if (tickCount2 > ticksPerFrame2) {
			tickCount2 = 0;
			frameIndex2 += 1; 
		}
		if (frameIndex2 == resetframe2) {
			tickCount2 = 0;
			frameIndex2 = 0;
			startTime2 = 0;			
		}
	}
}

var resetframe3 = 3;
var tickCount3 = 0;
var frameIndex3 = 0;
var ticksPerFrame3 = 60;
var startTime3 = 0;
function framerate3() {
	if (startTime3 == 1) {
		tickCount3 += 1;	
		if (tickCount3 > ticksPerFrame3) {
			tickCount3 = 0;
			frameIndex3 += 1; 
		}
		if (frameIndex3 == resetframe3) {
			tickCount3 = 0;
			frameIndex3 = 0;
			startTime3 = 0;			
		}
	}
}

var resetframe4 = 5;
var tickCount4 = 0;
var frameIndex4 = 0;
var ticksPerFrame4 = 60;
var startTime4 = 0;
function framerate4() {
	if (startTime4 == 1) {
		tickCount4 += 1;	
		if (tickCount4 > ticksPerFrame4) {
			tickCount4 = 0;
			frameIndex4 += 1; 
		}
		if (frameIndex4 == resetframe4) {
			tickCount4 = 0;
			frameIndex4 = 0;
			startTime4 = 0;			
		}
	}
}

var resetframe5 = 3;
var tickCount5 = 0;
var frameIndex5 = 0;
var ticksPerFrame5 = 10;
function framerate5() {
	if (firesoundstart == 1) {
		tickCount5 += 1;	
		if (tickCount5 > ticksPerFrame5) {
			tickCount5 = 0;
			frameIndex5 += 1; 
		}
		if (frameIndex5 == resetframe5) {
			tickCount5 = 0;
			frameIndex5 = 0;
			firesoundstart = 0;			
		}
	}
}

var resetframe6 = 1;
var tickCount6 = 0;
var frameIndex6 = 0;
var ticksPerFrame6 = 1;
function framerate6() {
	if (countSwitch1 == 1) {
		tickCount6 += 1;	
		if (tickCount6 > ticksPerFrame6) {
			tickCount6 = 0;
			frameIndex6 += 1; 
		}
		if (frameIndex6 == resetframe6) {
			tickCount6 = 0;
			frameIndex6 = 0;
			countSwitch1 = 0;			
		}
	}
}

var resetframe7 = 3;
var tickCount7 = 0;
var frameIndex7 = 0;
var ticksPerFrame7 = 60;
var startTime7 = 0;
function framerate7() {
	if (startTime7 == 1) {
		tickCount7 += 1;	
		if (tickCount7 > ticksPerFrame7) {
			tickCount7 = 0;
			frameIndex7 += 1; 
		}
		if (frameIndex7 == resetframe7) {
			tickCount7 = 0;
			frameIndex7 = 0;
			startTime7 = 0;			
		}
	}
}

var insidehouse1 = 0;
var inside2house1 = 0;
var inside3house1 = 0;
var inside4house1 = 0;
function housecontrols() {
	if (wave < 5) {
		if (box.crashWith(insidedetect1)) {
			insidehouse1 = 1;
			if (roofhouse1.globalAlpha > 0.5) {
				roofhouse1.globalAlpha -= 0.01;
			}
		}
		if (!box.crashWith(insidedetect1)) {
			insidehouse1 = 0; 
			if (roofhouse1.globalAlpha < 1) {
				roofhouse1.globalAlpha += 0.01;
			}
		}
		if (box.crashWith(inside2detect1)) {
			inside2house1 = 1;
			if (roof2house1.globalAlpha > 0.5) {
				roof2house1.globalAlpha -= 0.01;
			}
		}
		if (!box.crashWith(inside2detect1)) {
			inside2house1 = 0; 
			if (roof2house1.globalAlpha < 1) {
				roof2house1.globalAlpha += 0.01;
			}
		}
		if (box.crashWith(tree1_1_D) && tree1_1.globalAlpha > 0.5) {
			tree1_1.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_1_D) && tree1_1.globalAlpha < 1) {
			tree1_1.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_2_D) && tree1_2.globalAlpha > 0.5) {
			tree1_2.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_2_D) && tree1_2.globalAlpha < 1) {
			tree1_2.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_3_D) && tree1_3.globalAlpha > 0.5) {
			tree1_3.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_3_D) && tree1_3.globalAlpha < 1) {
			tree1_3.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_4_D) && tree1_4.globalAlpha > 0.5) {
			tree1_4.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_4_D) && tree1_4.globalAlpha < 1) {
			tree1_4.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_5_D) && tree1_5.globalAlpha > 0.5) {
			tree1_5.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_5_D) && tree1_5.globalAlpha < 1) {
			tree1_5.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_6_D) && tree1_6.globalAlpha > 0.5) {
			tree1_6.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_6_D) && tree1_6.globalAlpha < 1) {
			tree1_6.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_7_D) && tree1_7.globalAlpha > 0.5) {
			tree1_7.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_7_D) && tree1_7.globalAlpha < 1) {
			tree1_7.globalAlpha += 0.01;
		}
		if (box.crashWith(tree1_8_D) && tree1_8.globalAlpha > 0.5) {
			tree1_8.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree1_8_D) && tree1_8.globalAlpha < 1) {
			tree1_8.globalAlpha += 0.01;
		}
	}
	if (wave >= 5 && wave < 8) {
		if (wave < 7) {
			if (box.crashWith(inside3detect1)) {
				inside3house1 = 1;
				if (roof3house1.globalAlpha > 0.5) {
					roof3house1.globalAlpha -= 0.01;
				}
				if (roof3house2.globalAlpha != 0) {
					roof3house2.globalAlpha -= 0.02;
				}
				if (roof3house2.globalAlpha <= 0) {
					roof3house2.globalAlpha = 0;
				}
			}
			if (!box.crashWith(inside3detect1)) {
				inside3house1 = 0; 
				if (roof3house1.globalAlpha < 1) {
					roof3house1.globalAlpha += 0.01;
				}
				if (roof3house2.globalAlpha < 1) {
					roof3house2.globalAlpha += 0.02;
				}
				if (roof3house2.globalAlpha >= 1) {
					roof3house2.globalAlpha = 1;
				}
			}
			if (box.crashWith(inside4detect1)) {
				inside4house1 = 1;
				if (roof4house1.globalAlpha > 0.5) {
					roof4house1.globalAlpha -= 0.01;
				}
				if (roof4house2.globalAlpha != 0 && roof4house3.globalAlpha != 0) {
					roof4house2.globalAlpha -= 0.02;
					roof4house3.globalAlpha -= 0.02;
				}
				if (roof4house2.globalAlpha <= 0 && roof4house3.globalAlpha <= 0) {
					roof4house2.globalAlpha = 0;
					roof4house3.globalAlpha = 0;
				}
			}
			if (!box.crashWith(inside4detect1)) {
				inside4house1 = 0; 
				if (roof4house1.globalAlpha < 1) {
					roof4house1.globalAlpha += 0.01;
				}
				if (roof4house2.globalAlpha < 1 && roof4house3.globalAlpha < 1) {
					roof4house2.globalAlpha += 0.02;
					roof4house3.globalAlpha += 0.02;
				}
				if (roof4house2.globalAlpha >= 1 && roof4house3.globalAlpha >= 1) {
					roof4house2.globalAlpha = 1;
					roof4house3.globalAlpha = 1;
				}
			}
		}
		if (box.crashWith(tree2_1_D) && tree2_1.globalAlpha > 0.5) {
			tree2_1.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_1_D) && tree2_1.globalAlpha < 1) {
			tree2_1.globalAlpha += 0.01;
		}
		if (box.crashWith(tree2_2_D) && tree2_2.globalAlpha > 0.5) {
			tree2_2.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_2_D) && tree2_2.globalAlpha < 1) {
			tree2_2.globalAlpha += 0.01;
		}
		if (box.crashWith(tree2_3_D) && tree2_3.globalAlpha > 0.5) {
			tree2_3.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_3_D) && tree2_3.globalAlpha < 1) {
			tree2_3.globalAlpha += 0.01;
		}
		if (box.crashWith(tree2_4_D) && tree2_4.globalAlpha > 0.5) {
			tree2_4.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_4_D) && tree2_4.globalAlpha < 1) {
			tree2_4.globalAlpha += 0.01;
		}
		if (box.crashWith(tree2_5_D) && tree2_5.globalAlpha > 0.5) {
			tree2_5.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_5_D) && tree2_5.globalAlpha < 1) {
			tree2_5.globalAlpha += 0.01;
		}
		if (box.crashWith(tree2_6_D) && tree2_6.globalAlpha > 0.5) {
			tree2_6.globalAlpha -= 0.01;
		}
		if (!box.crashWith(tree2_6_D) && tree2_6.globalAlpha < 1) {
			tree2_6.globalAlpha += 0.01;
		}
	}
}
	
function firehandler() {
	if (autoUpVar == 1) {
		shootUp();
	}
	if (autoDownVar == 1) {
		shootDown();
	}
	if (autoLeftVar == 1) {
		shootLeft();
	}
	if (autoRightVar == 1) {
		shootRight();
	}
}	

var switchpos = 0;
var specialalert1 = 0;
function weaponswitch() {
	if (switchy >= 2) {
		switchy = 0;
	}
	if (stcweapon == 0 && switchy > 0) {
		switchy = 0;
	}
	if (stcget == 1 && switchy == 0) {
		weapon = 0;
	}
	if (switchy == 1 && stcget == 1 && stcweapon == 1) {
		weapon = 3;	
	}
}

function laserSetUp() {
//lazer setup//
	badguypic1_lazer.x = badguy1.x + badguy1.width/2;
	badguypic1_lazer.y = badguy1.y + badguy1.height/2;
	badguypic1_lazer.endpositionX = box.x + box.width/2;
	badguypic1_lazer.endpositionY = box.y + box.height/2;
	if (wave < 5 && BadDeath < 1 && box.crashWith(badguy1)) {
		if (badguypic1_lazer.globalAlpha < 0.6) {
			badguypic1_lazer.globalAlpha += 0.02;
		}
		if (badguypic1_lazer.globalAlpha >= 0.6) {
			badguypic1_lazer.globalAlpha = 0.6;
		}
		if (badguypic1_lazer.width < 4) {
			badguypic1_lazer.width += 0.08;
		}
		if (badguypic1_lazer.width >= 4) {
			badguypic1_lazer.width = 4;
		}
	}
	if (BadDeath > 0 || wave >= 5 || goBack == 1) {
		badguypic1_lazer.globalAlpha = 0;
		badguypic1_lazer.width = 0;
	}
	if (!box.crashWith(badguy1)) {
		if (badguypic1_lazer.globalAlpha > 0) {
			badguypic1_lazer.globalAlpha -= 0.02;
		}
		if (badguypic1_lazer.globalAlpha <= 0) {
			badguypic1_lazer.globalAlpha = 0;
		}
		if (badguypic1_lazer.width > 0) {
			badguypic1_lazer.width -= 0.08;
		}
		if (badguypic1_lazer.width <= 0) {
			badguypic1_lazer.width = 0;
		}	
	}
	badguypic2_lazer.x = badguy2.x + badguy2.width/2;
	badguypic2_lazer.y = badguy2.y + badguy2.height/2;
	badguypic2_lazer.endpositionX = box.x + box.width/2;
	badguypic2_lazer.endpositionY = box.y + box.height/2;
	if (box.crashWith(badguy2)) {
		if (badguypic2_lazer.globalAlpha < 0.6) {
			badguypic2_lazer.globalAlpha += 0.02;
		}
		if (badguypic2_lazer.globalAlpha >= 0.6) {
			badguypic2_lazer.globalAlpha = 0.6;
		}
		if (badguypic2_lazer.width < 4) {
			badguypic2_lazer.width += 0.08;
		}
		if (badguypic2_lazer.width >= 4) {
			badguypic2_lazer.width = 4;
		}
	}
	if (BadDeath2 > 0 || wave >= 7 || wave == 1 || goBack == 1) {
		badguypic2_lazer.globalAlpha = 0;
		badguypic2_lazer.width = 0;
	}
	if (!box.crashWith(badguy2)) {
		if (badguypic2_lazer.globalAlpha > 0) {
			badguypic2_lazer.globalAlpha -= 0.02;
		}
		if (badguypic2_lazer.globalAlpha <= 0) {
			badguypic2_lazer.globalAlpha = 0;
		}
		if (badguypic2_lazer.width > 0) {
			badguypic2_lazer.width -= 0.08;
		}
		if (badguypic2_lazer.width <= 0) {
			badguypic2_lazer.width = 0;
		}	
	}
	trienemypic_lazer.x = tribox.x + tribox.width/2;
	trienemypic_lazer.y = tribox.y + tribox.height/2;
	trienemypic_lazer.endpositionX = box.x + box.width/2;
	trienemypic_lazer.endpositionY = box.y + box.height/2;
	if (box.crashWith(tribox)) {
		if (trienemypic_lazer.globalAlpha < 0.6) {
			trienemypic_lazer.globalAlpha += 0.02;
		}
		if (trienemypic_lazer.globalAlpha >= 0.6) {
			trienemypic_lazer.globalAlpha = 0.6;
		}
		if (trienemypic_lazer.width < 6) {
			trienemypic_lazer.width += 0.08;
		}
		if (trienemypic_lazer.width >= 6) {
			trienemypic_lazer.width = 6;
		}
	}
	if (BadDeath3 > 0 || wave >= 7 || wave <= 4 || goBack == 1) {
		trienemypic_lazer.globalAlpha = 0;
		trienemypic_lazer.width = 0;
	}
	if (!box.crashWith(tribox)) {
		if (trienemypic_lazer.globalAlpha > 0) {
			trienemypic_lazer.globalAlpha -= 0.02;
		}
		if (trienemypic_lazer.globalAlpha <= 0) {
			trienemypic_lazer.globalAlpha = 0;
		}
		if (trienemypic_lazer.width > 0) {
			trienemypic_lazer.width -= 0.08;
		}
		if (trienemypic_lazer.width <= 0) {
			trienemypic_lazer.width = 0;
		}	
	}
	recenemypic1_lazer.x = recbox1.x + recbox1.width/2;
	recenemypic1_lazer.y = recbox1.y + recbox1.height/2;
	recenemypic1_lazer.endpositionX = box.x + box.width/2;
	recenemypic1_lazer.endpositionY = box.y + box.height/2;
	if (box.crashWith(recbox1)) {
		if (recenemypic1_lazer.globalAlpha < 0.6) {
			recenemypic1_lazer.globalAlpha += 0.02;
		}
		if (recenemypic1_lazer.globalAlpha >= 0.6) {
			recenemypic1_lazer.globalAlpha = 0.6;
		}
		if (recenemypic1_lazer.width < 4) {
			recenemypic1_lazer.width += 0.08;
		}
		if (recenemypic1_lazer.width >= 4) {
			recenemypic1_lazer.width = 4;
		}
	}
	if (BadDeath4 > 0 || wave >= 5 || wave <= 2 || goBack == 1) {
		recenemypic1_lazer.globalAlpha = 0;
		recenemypic1_lazer.width = 0;
	}
	if (!box.crashWith(recbox1)) {
		if (recenemypic1_lazer.globalAlpha > 0) {
			recenemypic1_lazer.globalAlpha -= 0.02;
		}
		if (recenemypic1_lazer.globalAlpha <= 0) {
			recenemypic1_lazer.globalAlpha = 0;
		}
		if (recenemypic1_lazer.width > 0) {
			recenemypic1_lazer.width -= 0.08;
		}
		if (recenemypic1_lazer.width <= 0) {
			recenemypic1_lazer.width = 0;
		}	
	}
	xenemypic1_lazer.x = xbox1.x + xbox1.width/2;
	xenemypic1_lazer.y = xbox1.y + xbox1.height/2;
	xenemypic1_lazer.endpositionX = box.x + box.width/2;
	xenemypic1_lazer.endpositionY = box.y + box.height/2;
	if (box.crashWith(xbox1)) {
		if (xenemypic1_lazer.globalAlpha < 0.6) {
			xenemypic1_lazer.globalAlpha += 0.02;
		}
		if (xenemypic1_lazer.globalAlpha >= 0.6) {
			xenemypic1_lazer.globalAlpha = 0.6;
		}
		if (xenemypic1_lazer.width < 5) {
			xenemypic1_lazer.width += 0.08;
		}
		if (xenemypic1_lazer.width >= 5) {
			xenemypic1_lazer.width = 5;
		}
	}
	if (BadDeath5 > 0 || wave >= 7 || wave <= 5 || goBack == 1) {
		xenemypic1_lazer.globalAlpha = 0;
		xenemypic1_lazer.width = 0;
	}
	if (!box.crashWith(xbox1)) {
		if (xenemypic1_lazer.globalAlpha > 0) {
			xenemypic1_lazer.globalAlpha -= 0.02;
		}
		if (xenemypic1_lazer.globalAlpha <= 0) {
			xenemypic1_lazer.globalAlpha = 0;
		}
		if (xenemypic1_lazer.width > 0) {
			xenemypic1_lazer.width -= 0.08;
		}
		if (xenemypic1_lazer.width <= 0) {
			xenemypic1_lazer.width = 0;
		}	
	}
	guardianPic_lazer.x = guardianBox.x + guardianBox.width/2;
	guardianPic_lazer.y = guardianBox.y + guardianBox.height/2;
	guardianPic_lazer.endpositionX = box.x + box.width/2;
	guardianPic_lazer.endpositionY = box.y + box.height/2;
	if (box.crashWith(guardianBox)) {
		if (guardianPic_lazer.globalAlpha < 0.6) {
			guardianPic_lazer.globalAlpha += 0.02;
		}
		if (guardianPic_lazer.globalAlpha >= 0.6) {
			guardianPic_lazer.globalAlpha = 0.6;
		}
		if (guardianPic_lazer.width < 5) {
			guardianPic_lazer.width += 0.08;
		}
		if (guardianPic_lazer.width >= 5) {
			guardianPic_lazer.width = 5;
		}
	}
	if (GuardDead || wave != 7 || GuardStart != 1 || goBack == 1) {
		guardianPic_lazer.globalAlpha = 0;
		guardianPic_lazer.width = 0;
	}
	if (!box.crashWith(guardianBox)) {
		if (guardianPic_lazer.globalAlpha > 0) {
			guardianPic_lazer.globalAlpha -= 0.02;
		}
		if (guardianPic_lazer.globalAlpha <= 0) {
			guardianPic_lazer.globalAlpha = 0;
		}
		if (guardianPic_lazer.width > 0) {
			guardianPic_lazer.width -= 0.08;
		}
		if (guardianPic_lazer.width <= 0) {
			guardianPic_lazer.width = 0;
		}	
	}
}

var All_ = "All";
var HBar_ = "HBar";
var PShadows_ = "PShadows";
var LShadows_ = "LShadows";
var UIShadows_ = "UIShadows";
var ImgSmooth_ = "ImgSmooth"
var ASprites_ = "ASprites";
var FPSShow_ = "FPSShow";
var MShooting_ = "MShooting";
var MLAmmo_ = "MLAmmo";
var MExplosions_ = "MExplosions";
var Diff_ = "Diff";
var Music_ = "Music_V";
var SoundFX_ = "SoundFX";
function saveSettings(info_) {
	this.info = info_;
	if (this.info == "PShadows" || this.info == "All") {
		localStorage && (localStorage.PlayerShadows = document.getElementById("PSshow").checked);
	}
	if (this.info == "LShadows" || this.info == "All") {
		localStorage && (localStorage.LevelShadows = document.getElementById("LSshow").checked);
	}
	if (this.info == "UIShadows" || this.info == "All") {
		localStorage && (localStorage.UserInterfaceShadows = document.getElementById("UISshow").checked);
	}
	if (this.info == "ImgSmooth" || this.info == "All") {
		localStorage && (localStorage.ImageSmoothing = document.getElementById("imgSmooth").checked);
	}
	if (this.info == "HBar" || this.info == "All") {
		localStorage && (localStorage.HealthBars = document.getElementById("HBshow").checked);
	}
	if (this.info == "ASprites" || this.info == "All") {
		localStorage && (localStorage.AnimatedSprites_ = document.getElementById("AnimatedSprites").checked);
	}
	if (this.info == "FPSShow" || this.info == "All") {
		localStorage && (localStorage.ShowFPSCounter_ = document.getElementById("FPSShow").checked);
	}
	if (this.info == "MShooting" || this.info == "All") {
		localStorage && (localStorage.MuteShooting_ = document.getElementById("mute_SHOOTING").checked);
	}
	if (this.info == "MLAmmo" || this.info == "All") {
		localStorage && (localStorage.MuteLAmmo_ = document.getElementById("mute_LOW_AMMO").checked);
	}
	if (this.info == "MExplosions" || this.info == "All") {
		localStorage && (localStorage.MuteExplosion_ = document.getElementById("mute_EXPLOSION").checked);
	}
	if (this.info == "Diff" || this.info == "All") {
		localStorage && (localStorage.DifficultyEasy = document.getElementById("Easy_").checked);
		localStorage && (localStorage.DifficultyMedium = document.getElementById("Medium_").checked);
		localStorage && (localStorage.DifficultyHard = document.getElementById("Hard_").checked);
	}
	if (this.info == "Music_V" || this.info == "All") {
		localStorage && (localStorage.MusicVol = document.getElementById("volume").value);
	}
	if (this.info == "SoundFX" || this.info == "All") {
		localStorage && (localStorage.SoundFXVol = document.getElementById("soundvolume").value);
	}
}

var fps = {
	startTime:0,
	frameNumber:0,
	getFPS : function(){
	this.frameNumber++;
	var d = new Date().getTime(),
	currentTime = (d-this.startTime)/600,
	result = Math.floor(this.frameNumber/currentTime);
		if(currentTime > 1){
			this.startTime = new Date().getTime();
			this.frameNumber = 0;
		}
	return result;
	}
};

function FPS_CONTROLLER() {
	FPSText.globalAlpha = 1;
	FPSText.text = fps.getFPS();
	if (UI_Shadows) {
		FPSText.shadowColor_ = "black";
		FPSText.shadowBlur_ = 2;
		FPSText.shadowOffsetX_ = 1;
		FPSText.shadowOffsetY_ = 1;
	} else {
		FPSText.shadowColor_ = "";
		FPSText.shadowBlur_ = 0;
		FPSText.shadowOffsetX_ = 0;
		FPSText.shadowOffsetY_ = 0;
	}
}

function updateGameArea() {
	Board.clear();
	if (playerHealth > playerHealthMax) {
		playerHealth = playerHealthMax;
	}
	if (weapon == 4) {
		if (playerShip != 5 || STPRIZEWEAPON != 1) {
			weapon = 0;
		}
	}
	circle.y = box.y + box.height/2;
	circle.x = box.x + box.width/2;
	ship1.y = box.y;
	ship1.x = box.x;
	ship2.y = box.y;
	ship2.x = box.x;
	ship3.y = box.y;
	ship3.x = box.x;
	ship4.y = box.y;
	ship4.x = box.x;
	ship5.y = box.y;
	ship5.x = box.x;
	ship6.y = box.y;
	ship6.x = box.x;
	detectbox.x = box.x - 35;
	detectbox.y = box.y - 35;
	laserSetUp();
	if (pauseGame > 1) {
		pauseGame = 0;
	}
	Datechecker();
	if (openpatchinfo != 0) {
		document.getElementById("updateinfo").style.visibility = "visible";
	} else {
		document.getElementById("updateinfo").style.visibility = "hidden";
	}
	HB = document.getElementById("HBshow").checked;
	PlayerShadowsOn = document.getElementById("PSshow").checked;
	Level_Shadows = document.getElementById("LSshow").checked;
	UI_Shadows = document.getElementById("UISshow").checked;
	var ImageSmoothing = document.getElementById("imgSmooth").checked;
	Board.context.imageSmoothingEnabled = ImageSmoothing;
	var ShowFPSCounter = document.getElementById("FPSShow").checked;
	keyBinderUpdate();
	UpgradeMenuTrigger();
	payback = Math.floor(30/100 * maxAmmo);
	weaponswitch();
	firehandler();
	framerate();
	framerate2();
	framerate3();
	framerate4();
	framerate5();
	framerate7();
	animations();
	fireCoolDown();
	Boss7AI();
	resetfire();
	costToRevive.text = "You must have $" + revivecost + " to revive";
	Play_sound();
	Set_volume()
	Skip_sound();
	detectbox.update();
	circle.update();
	box.update();
	PlayerShadowManager.update();
	//WarpZone Colliders//
	if (wave == 22) {
		Earth_Planet_Circle_Collider.update();
	}
	if (fire > 0) {
		bullcir.update();
		bullbox.update();
	}
	if (wave > 4 && wave < 7 && BadDeath3 == 0 && Death1 == 0 && trifire == 0) {
		tribbox.update();	
	}
	if (wave < 7 && wave > 1 && BadDeath2 < 1 && Death1 == 0) {
		badguy2.update();
	}
	if (wave > 2 && wave < 5 && BadDeath4 == 0 && Death1 == 0) {
		recbox1.update();
	}
	if (wave > 4 && wave < 7 && BadDeath3 == 0 && Death1 == 0) {
		tribox.update();
	}
	if (wave > 5 && wave < 7 && BadDeath5 == 0 && Death1 == 0) {
		xbox1.update();
	}
	if (wave < 5 && BadDeath < 1 && Death1 == 0) {
		badguy1.update();
	}
	if (wave == 7 && spawnBoss7 == 1 && !BossDead) {
		bossWave7.update();
	}
	xwavebox1.update();
	xpos1.update();
	recpos1.update();
	recwavebox1.update();
	badwavebox1.update();
	badpos1.update();
	badwavebox2.update();
	triwavebox1.update();
	tripos1.update();
	badpos2.update();
	if (menu > 0 && cratespawn > 0) {
		ammocrate1.update();
	}
	if (menu > 0 && cratespawn2 > 0) {
		healthcrate1.update();
	}
	if (menu > 0 && wave == 3 && stcget == 0 && stcweapon > 0) {
		SWeapon1Box.update();
	}
	wallleft.update();
	wallright.update();
	wall3.update();
	wall4.update();
	if (wave < 5) {
		wall2house8.update();
		wallhouse8.update();
		insidedetect1.update();
		inside2detect1.update();
		w1t5.update();
		formplat.update();
		floorhouse1.update();
		floor2house1.update();
	}
	if (wave > 4 && wave < 8) {
		wall3house6.update();
		wall4house7.update();
		inside3detect1.update();
		inside4detect1.update();
		w5t7.update();
		if (wave == 7) {
			burntHouse1.update();
			burntHouse2.update();
		}
		if (ExplosionCycle <= 3 && spawnBoss7 == 0) {
			floor3house1.update();
			floor4house1.update();
		}
		plantbox1_1.update();
		plantbox2_1.update();
		plantbox3_1.update();
		plantbox4_1.update();
	}
	//Warp Zone//
	warpZone();
	if (menu > 0 && cratespawn > 0) {
		ammocrate1picO.update();
	}
	if (menu > 0 && cratespawn2 > 0) {
		healthcrate1picO.update();
	}
	if (menu > 0 && wave == 3 && stcget == 0 && stcweapon > 0) {
		SWeapon1.update();  
		if (box.crashWith(SWeapon1Box)) {
			stcget = 1;
			tip = Math.floor(Math.random() * tips);
			pauseGame = 1;
			specialalert1 = 1;
		}
	}
	if (fire > 0) {
		switch (weapon) {
			case 0:
				bpic.update();
			break;
			case 1:
				bpic2.update();
			break;
			case 2:
				bpic3.update();
			break;
			case 3:
				bpic4.update();
			break;
			case 4:
				bpic5.update();
			break;
		}
	}
	if (wave < 5 && BadDeath < 1 && Death1 == 0) {
		badguypic1_lazer.update();
		badguypic1.update();
		if (HB) {
			badguy1healthbar.update();
		}
	}
	if (wave < 7 && wave > 1 && BadDeath2 < 1 && Death1 == 0) {
		badguypic2_lazer.update();
		badguypic2.update();
		if (HB) {
			badguy1healthbar2.update();
		}
	}
	tribulletai();
	if (wave > 4 && wave < 7 && BadDeath3 == 0 && Death1 == 0 && trifire == 1) {
		tribpic.update();
	}
	if (wave > 4 && wave < 7 && BadDeath3 == 0 && Death1 == 0) {
		trienemypic_lazer.update();
		trienemypic.update();
		if (HB) {
			badguy1healthbar4.update();
		}
	}
	if (wave > 5 && wave < 7 && BadDeath5 == 0 && Death1 == 0) {
		xenemypic1_lazer.update();
		xenemypic1.update();
		if (HB) {
			badguy1healthbar5.update();
		}
	}
	if (wave > 2 && wave < 5 && BadDeath4 == 0 && Death1 == 0) {
		recenemypic1_lazer.update();
		recenemypic1.update();
		if (HB) {
			badguy1healthbar3.update();
		}
	}
	if (wave == 7 && !GuardDead && GuardStart == 1 && Death1 == 0) {
		guardianPic_lazer.update();
		guardianPic.update();
		if (HB) {
			guardianhealthbar.update();
		}
	}
	if (wave == 7 && spawnBoss7 == 1 && !BossDead) {
		bossWave7.newPos();
		for (var i = _bossBullets.length - 1; i >= 0; i--){
			_bossBullets[i].update();
		}
		switch (bossSheildMode) {
			case 0:
				bossWave7pic.update();
			break;
			case 1:
				bossWave7sheildPic.update();	
			break;
		}
	}
	badboxspawn();
	badtriboxspawn();
	badxboxspawn();
	badboxspawn2();
	badrecspawn1();
	if (cratespawn > 0 && box.crashWith(ammocrate1) && ammo <= 70/100 * maxAmmo) {
		cratespawn = 0;
		ammo += maxAmmo - 70/100 * maxAmmo;
	}
	if (cratespawn2 > 0 && box.crashWith(healthcrate1) && playerHealth <= 75/100 * playerHealthMax) {
		cratespawn2 = 0;
		playerHealth += 25/100 * playerHealthMax;
	}
	if (Death1 == 0) {
		switch (playerShip) {
			case 0:
				ship1.update();	
				box.width = 32;
				box.height = 32;
				circle.radius = 16.5;
			break;
			case 1:
				ship2.update();	
				box.width = 25;
				box.height = 25;
				circle.radius = 14;
			break;
			case 2:
				ship3.update();	
				box.width = 25;
				box.height = 25;
				circle.radius = 14;
			break;
			case 3:
				ship4.update();
				box.width = 25;
				box.height = 25;
				circle.radius = 14;
			break;
			case 4:
				ship5.update();
				box.width = 32;
				box.height = 32;
				circle.radius = 16.5;
			break;
			case 5:
				ship6.update();
				box.width = 25;
				box.height = 25;
				circle.radius = 14;
			break;
		}
		if (menu > 0 && upgrademenu == 0) {
			box.newPos();
			detectbox.newPos();
		}
	}
	if (wave < 5) {
		wallhouse1.update();
		wallhouse1_2.update();
		wallhouse2.update();
		wallhouse2_2.update();
		wallhouse3.update();
		wallhouse3_2.update();
		wallhouse4.update();
		wallhouse4_2.update();
		wallhouse4_3.update();
		wallhouse5.update();
		wallhouse6.update();
		wallhouse6_2.update();
		wallhouse6_3.update();
		wallhouse7.update();
		wall2house1.update();
		wall2house1_2.update();
		wall2house2.update();
		wall2house2_2.update();
		wall2house3.update();
		wall2house3_2.update();
		wall2house4.update();
		wall2house4_2.update();
		wall2house4_3.update();
		wall2house5.update();
		wall2house6.update();
		wall2house6_2.update();
		wall2house6_3.update();
		wall2house7.update();
		roof2house1.update();
		roofhouse1.update();
		tree1_1.update();
		tree1_2.update();
		tree1_3.update();
		tree1_4.update();
		tree1_5.update();
		tree1_6.update();
		tree1_7.update();
		tree1_8.update();
	}
	if (wave > 4 && wave < 8) {
		if (ExplosionCycle <= 4 && spawnBoss7 == 0) {
			wall3house1.update();
			wall3house1_2.update();
			wall3house2.update();
			wall3house2_2.update();
			wall3house3.update();
			wall3house3_2.update();
			wall3house4.update();
			wall3house4_2.update();
			wall3house4_3.update();
			wall3house4_4.update();
			wall3house5.update();
			wall3house5_2.update();
			wall3house5_3.update();
			wall3house5_4.update();
			wall4house1.update();
			wall4house1_1.update();
			wall4house2.update();
			wall4house2_1.update();
			wall4house3.update();
			wall4house3_1.update();
			wall4house4.update();
			wall4house4_1.update();
			wall4house4_2.update();
			wall4house4_3.update();
			wall4house5.update();
			wall4house5_1.update();
			wall4house5_2.update();
			wall4house5_3.update();
			wall4house6.update();
			wall4house6_1.update();
			wall4house6_2.update();
			wall4house6_3.update();
			wall4house6_4.update();
		}
		if (ExplosionCycle <= 4 && spawnBoss7 == 0) {
			roof3house2.update();
			roof3house1.update();
		}
		if (ExplosionCycle <= 4 && spawnBoss7 == 0) {
			roof4house3.update();
			roof4house2.update();
			roof4house1.update();
		}
		tree2_1.update();
		tree2_2.update();
		tree2_3.update();
		tree2_4.update();
		tree2_5.update();
		tree2_6.update();
		if (ExplosionCycle <= MaxFrame && spawnBoss7 == 0 && wave == 7) {
			Explosion_5.update();
			Explosion_4.update();
			Explosion_3.update();
			Explosion_2.update();
			Explosion.update();
		}
		if (wave == 7 && spawnBoss7 == 1 && !BossDead) {
			switch (bossSheildMode) {
				case 0:
					bosstxt.update();
				break;
				case 1:
					bosstxt2.update();
				break;
			}
			boss7healthbar.update();
		}
	}
	ui.update();
	if (wave < 5) {
		border1_5.update();
	}
	if (playerHealth <= 35/100 * playerHealthMax) {
		LowHealth_.update();
		LowHealthTxt.update();
	}
	if (ammo <= 20/100 * maxAmmo) {
		LowAmmoTxt.update();
	}
	if (upgrademenu == 0) {
		recenemypic1.newPos();
		recbox1.newPos();
		bullbox.newPos();
		badguypic1.newPos();
		badguy1.newPos();
		badguypic2.newPos();
		badguy2.newPos();
		tribox.newPos();
		trienemypic.newPos();
		xenemypic1.newPos();
		xbox1.newPos();
		tribpic.newPos();
		tribbox.newPos();
		if (wave == 5 || wave == 8000) {
			switch (switchpos) {
				case 0:
					switchpos = 1;
				break;
				case 1:
					box.x = playerXwave5;
					box.y = playerYwave5;
					detectbox.x = playerXwave5 - 37.5;
					detectbox.y = playerYwave5 - 37.5;
					switchpos = 2;
				break;
			}
		}
		if (wave == 6) {
			switchpos = 0;
		}
		badpos2.x = bad2posX;
		badpos2.y = bad2posY;
		badwavebox2.x = bad2posX - 5;
		badwavebox2.y = bad2posY - 5;
		tripos1.x = tri1posX;
		tripos1.y = tri1posY;
		triwavebox1.x = tri1posX - 5;
		triwavebox1.y = tri1posY - 5;
		xpos1.x = x1posX;
		xpos1.y = x1posY;
		xwavebox1.x = x1posX - 5;
		xwavebox1.y = x1posY - 5;
	}
	Health1();
	checkwave();
	nameFC();
	waveammoweapon();
	ammocrate();
	bulletai();
	switch (pauseGame) {
		case 0:
			badai1();
			triangleAI();
			xAI();
			badai2();
			badrecai1();
		break;
		case 1:
			badguypic1.speedX = 0;
			badguy1.speedX = 0;
			badguypic1.speedY = 0;
			badguy1.speedY = 0;
			badguypic2.speedX = 0;
			badguy2.speedX = 0;
			badguypic2.speedY = 0;
			badguy2.speedY = 0;
			tribox.speedX = 0;
			trienemypic.speedX = 0;
			tribox.speedY = 0;
			trienemypic.speedY = 0;
			xenemypic1.speedX = 0;
			xenemypic1.speedY = 0;
			xbox1.speedX = 0;
			xbox1.speedY = 0;
			recenemypic1.speedX = 0;
			recbox1.speedX = 0;
			recenemypic1.speedY = 0;
			recbox1.speedY = 0;
			bossWave7pic.speedX = 0;
			bossWave7pic.speedY = 0;
			bossWave7.speedX = 0;
			bossWave7.speedY = 0;
		break;
	}
	housecontrols();
	crashhitai1();
	countwave();
	if (upgrademenu == 1) {
		upgradeboard.update();
		infoboard2.update();
		infoboard.update();
		upgradetxt.update();
		waveFtxt.update();
		backbutton.update();
		backtxt.update();
		backtxtinfo.update();
		upgrade1button.update();
		healthButton.update();
		ammoButton.update();
		healthBtxt.update();
		ammoBtxt.update();
		if (playerHealth >= playerHealthMax) {
			healthBtxt.text = "Health Full!";
		} else {
			healthBtxt.text = "(H) Recover Health";
			healthtxtinfo.update();
			healthtxtinfo.text = "Health Recovery Cost: $" + Math.floor(playerHealthMax - playerHealth);
		}
		if (ammo >= maxAmmo) {
			ammoBtxt.text = "Ammo Full!";
		} else {
			ammoBtxt.text = "(A) Recover Ammo";
			ammotxtinfo.update();
			ammotxtinfo.text = "Ammo Recovery Cost: $" + Math.floor(maxAmmo - ammo);
		}
		switch (weaponupgrade1) {
			case 0:
				upgrade1txt.update();
				upgrade1txtinfo.update();
				upgrade1txtinfo2.update();
				upgrade1txtinfo3.update();
				upgrade1txtinfo4.update();
				upgrade1txtinfo5.update();
				upgrade1txtinfo6.update();
				upgrade1txtinfo7.update();
			break;
			case 1:
				upgrade1_2txt.update();
				upgrade1_2txtinfo.update();
				upgrade1_2txtinfo2.update();
				upgrade1_2txtinfo3.update();
				upgrade1_2txtinfo4.update();
				upgrade1_2txtinfo5.update();
				upgrade1_2txtinfo6.update();
			break;
		}
		if (weaponupgrade1 > 1) {
			max1txt.update();
		}
	}
	TipsText();
	if (pauseGame == 1 && !pauseGameKeys) {
		pauseboard.update();
		pausetxt.update();
		GotoWarp.update();
		GotoWarptxt.update();
		TipsTxt.update();
		if (weaponVault == 0) {
			//h//
			weap_ship.update();
			shiptxt.update();
			shipHighLight1.update();
			if (playerShip == 0) {
				if (shipHighLight1.globalAlpha < 0.5) {
					shipHighLight1.globalAlpha += 0.01;
				}
				if (shipHighLight1.globalAlpha >= 0.5) {
					shipHighLight1.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight1.globalAlpha > 0) {
					shipHighLight1.globalAlpha -= 0.01;
				}
				if (shipHighLight1.globalAlpha <= 0) {
					shipHighLight1.globalAlpha = 0;
				}
			}
			ship1Show.update();
			ship1txt.update();
			shipHighLight2.update();
			if (playerShip == 1) {
				if (shipHighLight2.globalAlpha < 0.5) {
					shipHighLight2.globalAlpha += 0.01;
				}
				if (shipHighLight2.globalAlpha >= 0.5) {
					shipHighLight2.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight2.globalAlpha > 0) {
					shipHighLight2.globalAlpha -= 0.01;
				}
				if (shipHighLight2.globalAlpha <= 0) {
					shipHighLight2.globalAlpha = 0;
				}
			}
			ship2Show.update();
			ship2txt.update();
			shipHighLight3.update();
			if (playerShip == 2) {
				if (shipHighLight3.globalAlpha < 0.5) {
					shipHighLight3.globalAlpha += 0.01;
				}
				if (shipHighLight3.globalAlpha >= 0.5) {
					shipHighLight3.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight3.globalAlpha > 0) {
					shipHighLight3.globalAlpha -= 0.01;
				}
				if (shipHighLight3.globalAlpha <= 0) {
					shipHighLight3.globalAlpha = 0;
				}
			}
			if (christmasSkin == 1) {
				ship3Show.update();
			} else {
				ship3Hidden.update();
			}
			ship3txt.update();
			shipHighLight4.update();
			if (playerShip == 3) {
				if (shipHighLight4.globalAlpha < 0.5) {
					shipHighLight4.globalAlpha += 0.01;
				}
				if (shipHighLight4.globalAlpha >= 0.5) {
					shipHighLight4.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight4.globalAlpha > 0) {
					shipHighLight4.globalAlpha -= 0.01;
				}
				if (shipHighLight4.globalAlpha <= 0) {
					shipHighLight4.globalAlpha = 0;
				}
			}
			if (miniBossShip == 1) {
				ship4Show.update();
			} else {
				ship4Hidden.update();
			}
			ship4txt.update();
			shipHighLight5.update();
			if (playerShip == 4) {
				if (shipHighLight5.globalAlpha < 0.5) {
					shipHighLight5.globalAlpha += 0.01;
				}
				if (shipHighLight5.globalAlpha >= 0.5) {
					shipHighLight5.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight5.globalAlpha > 0) {
					shipHighLight5.globalAlpha -= 0.01;
				}
				if (shipHighLight5.globalAlpha <= 0) {
					shipHighLight5.globalAlpha = 0;
				}
			}
			if (easyShipPrize == 1) {
				ship5Show.update();
			} else {
				ship5Hidden.update();
			}
			ship5txt.update();
			shipHighLight6.update();
			if (playerShip == 5) {
				if (shipHighLight6.globalAlpha < 0.5) {
					shipHighLight6.globalAlpha += 0.01;
				}
				if (shipHighLight6.globalAlpha >= 0.5) {
					shipHighLight6.globalAlpha = 0.5;
				}
			} else {
				if (shipHighLight6.globalAlpha > 0) {
					shipHighLight6.globalAlpha -= 0.01;
				}
				if (shipHighLight6.globalAlpha <= 0) {
					shipHighLight6.globalAlpha = 0;
				}
			}
			if (STPRIZESHIP == 1) {
				ship6Show.update();
			} else {
				ship6Hidden.update();
			}
			ship6txt.update();
		}
		if (specialalert1 == 1) {
			alerttxt1 = new component("30px", "Consolas", "white", 300, 60, "text");
			alerttxt1.align = "start";
			alerttxt1.font = "20px Consolas";
			alerttxt1.text = "You Found The Cube!";
			alerttxt2 = new component("30px", "Consolas", "white", 65, 80, "text");
			alerttxt2.font = "20px Consolas";
			alerttxt2.text = "Press 1 on top of the keyboard to cycle between this weapon!";
			alert1 = new component(800, 500, "#451661", 0, 0, "rec");
			alert1.update();
			alerttxt1.update();
			alerttxt2.update();
		}
	}
	if (specialalert1 == 0) {
		statscommand();
		playerMoney();
		nameFC();
	}
	if (pauseGameKeys) {
		pauseboard.update();
	}
	if (wave == 8 && upgrademenu == 0 && pauseGame == 0) {
		endCard.update();
	}
	if (menu == 0 && upgrademenu == 0) {
		menuboard.update();
		menuboardtxttimer.start_timer();
		menuboardtxt.update();
		if (menuboardtxttimer.time <= menuboardtxttimer.reset_time/2) {
			menuboardtxt.globalAlpha += 0.05;
			if (menuboardtxt.globalAlpha > 1) {
				menuboardtxt.globalAlpha = 1;
			}
			menuboardtxttimer.timer_ON_OFF = true;
		}
		if (menuboardtxttimer.time > menuboardtxttimer.reset_time/2) {
			menuboardtxt.globalAlpha -= 0.05;
			if (menuboardtxt.globalAlpha < 0) {
				menuboardtxt.globalAlpha = 0;
			}
		}
	}
	if (Death1 > 0) {
		DeathForPlayer.update();
		if (easyShipPrize == 0) {
			easyShipPrize = 1;
			localStorage && (localStorage.Es = easyShipPrize);
		}
	}
	if (showmessage == 1) {
		costToRevive.update();
	}
	if (ShowFPSCounter) {
		FPS_CONTROLLER();
		FPSText.update();
	}
	if (menu == 1) {
		ammo = maxAmmo;
		menu += 1;
	}
	box.speedY = playerSpeedY;
	detectbox.speedY = playerSpeedY;
	box.speedX = playerSpeedX;
	detectbox.speedX = playerSpeedX;
	if (up == 1 && down == 0 && left == 0 && right == 0) {
		if (playerSpeedY >= -playerMaxSpeed) {
			playerSpeedY -= playerStartSpeed;
		} else {
			playerSpeedY = -playerMaxSpeed;
		}
	}
	if (up == 1 && down == 0 && left == 1 && right == 0) {
		if (playerSpeedY >= -playerDirMaxSpeed) {
			playerSpeedY -= playerStartSpeed;
		} else {
			playerSpeedY = -playerDirMaxSpeed;
		}
		if (playerSpeedX >= -playerDirMaxSpeed) {
			playerSpeedX -= playerStartSpeed;
		} else {
			playerSpeedX = -playerDirMaxSpeed;
		}
	}
	if (up == 1 && down == 0 && left == 0 && right == 1) {
		if (playerSpeedY >= -playerDirMaxSpeed) {
			playerSpeedY -= playerStartSpeed;
		} else {
			playerSpeedY = -playerDirMaxSpeed;
		}
		if (playerSpeedX <= playerDirMaxSpeed) {
			playerSpeedX += playerStartSpeed;
		} else {
			playerSpeedX = playerDirMaxSpeed;
		}
	}
	if (upE == 1 && up == 0) {
		if (playerSpeedY >= -(playerMaxSpeed + 1)) {
			playerSpeedY += (playerStartSpeed + 0.03);
		}
		if (playerSpeedY >= 0) {
			playerSpeedY = 0;
			upE = 0;
		}
	}
	if (down == 1 && up == 0 && left == 0 && right == 0) {
		if (playerSpeedY <= playerMaxSpeed) {
			playerSpeedY += playerStartSpeed;
		} else {
			playerSpeedY = playerMaxSpeed;
		}
	}
	if (down == 1 && up == 0 && left == 1 && right == 0) {
		if (playerSpeedY <= playerDirMaxSpeed) {
			playerSpeedY += playerStartSpeed;
		} else {
			playerSpeedY = playerDirMaxSpeed;
		}
		if (playerSpeedX >= -playerDirMaxSpeed) {
			playerSpeedX -= playerStartSpeed;
		} else {
			playerSpeedX = -playerDirMaxSpeed;
		}
	}
	if (down == 1 && up == 0 && left == 0 && right == 1) {
		if (playerSpeedY <= playerDirMaxSpeed) {
			playerSpeedY += playerStartSpeed;
		} else {
			playerSpeedY = playerDirMaxSpeed;
		}
		if (playerSpeedX <= playerDirMaxSpeed) {
			playerSpeedX += playerStartSpeed;
		} else {
			playerSpeedX = playerDirMaxSpeed;
		}
	}
	if (downE == 1 && down == 0) {
		if (playerSpeedY <= (playerMaxSpeed + 1)) {
			playerSpeedY -= (playerStartSpeed + 0.03);
		}
		if (playerSpeedY <= 0) {
			playerSpeedY = 0;
			downE = 0;
		}
	}
	if (left == 1 && right == 0 && up == 0 && down == 0) {
		if (playerSpeedX >= -playerMaxSpeed) {
			playerSpeedX -= playerStartSpeed;
		}
		if (playerSpeedX <= -playerMaxSpeed) {
			playerSpeedX = -playerMaxSpeed;
		}
	}
	if (leftE == 1 && left == 0 && right == 0) {
		if (playerSpeedX >= -(playerMaxSpeed + 1)) {
			playerSpeedX += (playerStartSpeed + 0.03);
		}
		if (playerSpeedX >= 0) {
			playerSpeedX = 0;
			leftE = 0;
		}
	}
	if (right == 1 && left == 0 && up == 0 && down == 0) {
		if (playerSpeedX <= playerMaxSpeed) {
			playerSpeedX += playerStartSpeed;
		}
		if (playerSpeedX >= playerMaxSpeed) {
			playerSpeedX = playerMaxSpeed;
		}
	}
	if (rightE == 1 && right == 0 && left == 0) {
		if (playerSpeedX <= (playerMaxSpeed + 1)) {
			playerSpeedX -= (playerStartSpeed + 0.03);
		}
		if (playerSpeedX <= 0) {
			playerSpeedX = 0;
			rightE = 0;
		}
	}
	if (box.crashWith(wallleft)) {
		box.elasticCollition(wallleft);
	}
	if (box.crashWith(wallright)) {
		box.elasticCollition(wallright);
	}
	if (box.crashWith(wall3)) {
		box.elasticCollition(wall3);
	}
	if (box.crashWith(wall4)) {
		box.elasticCollition(wall4);
	}
	if (wave < 5) {
		if (box.crashWith(wallhouse1)) {
			box.elasticCollition(wallhouse1);
		}
		if (box.crashWith(wallhouse1_2)) {
			box.elasticCollition(wallhouse1_2);
		}
		if (box.crashWith(wallhouse2)) {
			box.elasticCollition(wallhouse2);
		}
		if (box.crashWith(wallhouse2_2)) {
			box.elasticCollition(wallhouse2_2);
		}
		if (box.crashWith(wallhouse3_2)) {
			box.elasticCollition(wallhouse3_2);
		}
		if (box.crashWith(wallhouse3)) {
			box.elasticCollition(wallhouse3);
		}
		if (box.crashWith(wallhouse4_3)) {
			box.elasticCollition(wallhouse4_3);
		}
		if (box.crashWith(wallhouse6_3)) {
			box.elasticCollition(wallhouse6_3);
		}
		if (box.crashWith(wall2house1)) {
			box.elasticCollition(wall2house1);
		}
		if (box.crashWith(wall2house1_2)) {
			box.elasticCollition(wall2house1_2);
		}
		if (box.crashWith(wall2house2)) {
			box.elasticCollition(wall2house2);
		}
		if (box.crashWith(wall2house2_2)) {
			box.elasticCollition(wall2house2_2);
		}
		if (box.crashWith(wall2house3_2)) {
			box.elasticCollition(wall2house3_2);
		}
		if (box.crashWith(wall2house3)) {
			box.elasticCollition(wall2house3);
		}
		if (box.crashWith(wall2house4_3)) {
			box.elasticCollition(wall2house4_3);
		}
		if (box.crashWith(wall2house6_3)) {
			box.elasticCollition(wall2house6_3);
		}
	}
	if (wave >= 5 && wave < 7) {
		if (box.crashWith(wall3house1)) {
			box.elasticCollition(wall3house1);
		}
		if (box.crashWith(wall3house1_2)) {
			box.elasticCollition(wall3house1_2);
		}
		if (box.crashWith(wall3house2)) {
			box.elasticCollition(wall3house2);
		}
		if (box.crashWith(wall3house2_2)) {
			box.elasticCollition(wall3house2_2);
		}
		if (box.crashWith(wall3house3)) {
			box.elasticCollition(wall3house3);
		}
		if (box.crashWith(wall3house3_2)) {
			box.elasticCollition(wall3house3_2);
		}
		if (box.crashWith(wall3house4_4)) {
			box.elasticCollition(wall3house4_4);
		}
		if (box.crashWith(wall3house5_4)) {
			box.elasticCollition(wall3house5_4);
		}
		if (box.crashWith(wall4house1)) {
			box.elasticCollition(wall4house1);
		} 
		if (box.crashWith(wall4house1_1)) {
			box.elasticCollition(wall4house1_1);
		}
		if (box.crashWith(wall4house2)) {
			box.elasticCollition(wall4house2);
		}
		if (box.crashWith(wall4house2_1)) {
			box.elasticCollition(wall4house2_1);
		}
		if (box.crashWith(wall4house3)) {
			box.elasticCollition(wall4house3);
		}
		if (box.crashWith(wall4house3_1)) {
			box.elasticCollition(wall4house3_1);
		}
		if (box.crashWith(wall4house4_3)) {
			box.elasticCollition(wall4house4_3);
		}
		if (box.crashWith(wall4house5_3)) {
			box.elasticCollition(wall4house5_3);
		}
		if (box.crashWith(wall4house6_4)) {
			box.elasticCollition(wall4house6_4);
		}
	}
	if (controllerCon == 0) {
		clearInterval(pollGamepads);
	}
	if (controllerCon == 1) {
		pollGamepads();
	}
	if (!pauseGameKeys && !stopPause) {
		pauseGame = 0;	
		stopPause = true;
	}
	if (pauseGameKeys) {
		tip = Math.floor(Math.random() * tips);
		pauseGame = 1;	
		stopPause = false;
	}
	if (up == 0 && playerSpeedY <= 0) {
		lockUpE = 0;
	}
	if (down == 0 && playerSpeedY <= 0) {
		lockDownE = 0;
	}
	if (left == 0 && playerSpeedX <= 0) {
		lockLeftE = 0;
	}
	if (right == 0 && playerSpeedX <= 0) {
		lockRightE = 0;
	}
}

var stopPause = false;
var controllerCon = 1;
var conx = 0;
var cony = 0;
function pollGamepads() {
	var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	var gp = gamepads[0];
	if (gp) {
		console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
		if (gp.buttons[0].pressed) {
			console.log("x pressed");
			autoDown();
		} else {
			clearAutoD();
		}
		if (gp.buttons[1].pressed) {
			console.log("o pressed");
			autoRight();
		} else {
			clearAutoR();	
		}
		if (gp.buttons[3].pressed ) {
			console.log("tri pressed");
			autoUp();
		} else {
			clearAutoL();	
		}
		if (gp.buttons[2].pressed) {
			console.log("squ pressed");
			autoLeft();
		} else {
			clearAutoU();
		}
		if(gp.axes[0] != 0) {
			conx = gp.axes[0];
		} 
		if(gp.axes[1] != 0) {
			cony = gp.axes[1];
		}
		if (cony < -0.2 && pauseGame == 0) {
			moveUp();
		}
		if (cony > 0.2 && pauseGame == 0) {
			moveDown();
		}
		if (conx < -0.2 && pauseGame == 0) {
			moveLeft();
		}
		if (conx > 0.2 && pauseGame == 0) {
			moveRight();
		}
		if (cony > -0.2 && cony != 0.2) {
			clearmoveu();
		}
		if (cony < 0.2 && cony != -0.2) {
			clearmoved();
		}
		if (conx > -0.2 && conx != 0.2) {
			clearmovel();
		}
		if (conx < 0.2 && conx != -0.2) {
			clearmover();
		}
	}
}

var pauseGameKeys = false;
function show() {
	document.getElementById('settings').style.visibility = "visible";
	document.getElementById('settings').style.opacity = 1;
	pauseGameKeys = true;
}

function showStop() {
	document.getElementById('settings').style.opacity = 0;
	if (document.getElementById('settings').style.opacity == 0) {
		document.getElementById('settings').style.visibility = "hidden";
		pauseGameKeys = false;
	}
}

var Up_ = "w";
var MoveUp_ = "UP";
var UpLock = 0;
var Down_ = "s";
var MoveDown_ = "DOWN";
var DownLock = 0;
var Left_ = "a";
var MoveLeft_ = "LEFT";
var LeftLock = 0;
var Right_ = "d";
var MoveRight_ = "RIGHT";
var RightLock = 0;
var shootUp_ = "ArrowUp";
var ShootUp_1 = "S_UP";
var ShootUpLock = 0;
var shootDown_ = "ArrowDown";
var ShootDown_1 = "S_DOWN";
var ShootDownLock = 0;
var shootLeft_ = "ArrowLeft";
var ShootLeft_1 = "S_LEFT";
var ShootLeftLock = 0;
var shootRight_ = "ArrowRight";
var ShootRight_1 = "S_RIGHT";
var ShootRightLock = 0;
var Esssc_ = "Escape";
var Back_1 = "BACK";
var BackLock = 0;
var Revive_ = "r";
var Revive_1 = "REVIVE";
var ReviveLock = 0;
var Mute_ = "m";
var Mute_1 = "MUTE";
var MuteLock = 0;
var Patch_ = "p";
var Patch_1 = "PATCH";
var PatchLock = 0;
var SpecialKey_ = "e";
var SpecialKey_2 = "69";
var Special_1 = "SPECIAL";
var SpecialLock = 0;
var SShow = "q";
var ShowSettings_ = "S_Show";
var SShowLock = 0;
var UnlockControls = false;
function keyBinder(ButtonCode) {
this.ButtonCode = ButtonCode;
	switch (this.ButtonCode) {
		case "UP":
		UnlockControls = true;
		UpLock = 1;
		DownLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "DOWN":
		UnlockControls = true;
		DownLock = 1;
		UpLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "LEFT":
		UnlockControls = true;
		LeftLock = 1;
		UpLock = 0;
		DownLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "RIGHT":
		UnlockControls = true;
		RightLock = 1;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "S_UP":
		UnlockControls = true;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 1;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "S_DOWN":
		UnlockControls = true;
		DownLock = 0;
		UpLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 1;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "S_LEFT":
		UnlockControls = true;
		LeftLock = 0;
		UpLock = 0;
		DownLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 1;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "S_RIGHT":
		UnlockControls = true;
		RightLock = 0;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 1;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "BACK":
		UnlockControls = true;
		RightLock = 0;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 1;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "MUTE":
		UnlockControls = true;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 1;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "PATCH":
		UnlockControls = true;
		DownLock = 0;
		UpLock = 0;
		LeftLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 1;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "REVIVE":
		UnlockControls = true;
		LeftLock = 0;
		UpLock = 0;
		DownLock = 0;
		RightLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 1;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 0;
		break;
		case "SPECIAL":
		UnlockControls = true;
		RightLock = 0;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 1;
		SShowLock = 0;
		break;
		case "S_Show":
		UnlockControls = true;
		RightLock = 0;
		UpLock = 0;
		DownLock = 0;
		LeftLock = 0;
		ShootUpLock = 0;
		ShootDownLock = 0;
		ShootLeftLock = 0;
		ShootRightLock = 0;
		BackLock = 0;
		ReviveLock = 0;
		MuteLock = 0;
		PatchLock = 0;
		SpecialLock = 0;
		SShowLock = 1;
		break;
	}
}

function keyBinderUpdate() {
	if (UpLock == 0) {
	document.getElementById("Up_Button_Text").innerHTML = "Move Up: " + Up_.toUpperCase();;
	} else {
	document.getElementById("Up_Button_Text").innerHTML = "Hit Any Key";
	}
	if (DownLock == 0) {
	document.getElementById("Down_Button_Text").innerHTML = "Move Down: " + Down_.toUpperCase();;
	} else {
	document.getElementById("Down_Button_Text").innerHTML = "Hit Any Key";
	}
	if (LeftLock == 0) {
	document.getElementById("Left_Button_Text").innerHTML = "Move Left: " + Left_.toUpperCase();;
	} else {
	document.getElementById("Left_Button_Text").innerHTML = "Hit Any Key";
	}
	if (RightLock == 0) {
	document.getElementById("Right_Button_Text").innerHTML = "Move Right: " + Right_.toUpperCase();;
	} else {
	document.getElementById("Right_Button_Text").innerHTML = "Hit Any Key";
	}
	if (ShootUpLock == 0) {
	document.getElementById("Shoot_Up_Button_Text").innerHTML = "Shoot Up: " + shootUp_.toUpperCase();;
	} else {
	document.getElementById("Shoot_Up_Button_Text").innerHTML = "Hit Any Key";
	}
	if (ShootDownLock == 0) {
	document.getElementById("Shoot_Down_Button_Text").innerHTML = "Shoot Down: " + shootDown_.toUpperCase();;
	} else {
	document.getElementById("Shoot_Down_Button_Text").innerHTML = "Hit Any Key";
	}
	if (ShootLeftLock == 0) {
	document.getElementById("Shoot_Left_Button_Text").innerHTML = "Shoot Left: " + shootLeft_.toUpperCase();;
	} else {
	document.getElementById("Shoot_Left_Button_Text").innerHTML = "Hit Any Key";
	}
	if (ShootRightLock == 0) {
	document.getElementById("Shoot_Right_Button_Text").innerHTML = "Shoot Right: " + shootRight_.toUpperCase();;
	} else {
	document.getElementById("Shoot_Right_Button_Text").innerHTML = "Hit Any Key";
	}
	if (BackLock == 0) {
	document.getElementById("Back_Button_Text").innerHTML = "Exit/Back: " + Esssc_.toUpperCase();;
	} else {
	document.getElementById("Back_Button_Text").innerHTML = "Hit Any Key";
	}
	if (MuteLock == 0) {
	document.getElementById("Mute_Button_Text").innerHTML = "Mute/Unmute: " + Mute_.toUpperCase();;
	} else {
	document.getElementById("Mute_Button_Text").innerHTML = "Hit Any Key";
	}
	if (PatchLock == 0) {
	document.getElementById("Patch_Button_Text").innerHTML = "Patch Info: " + Patch_.toUpperCase();;
	} else {
	document.getElementById("Patch_Button_Text").innerHTML = "Hit Any Key";
	}
	if (ReviveLock == 0) {
	document.getElementById("Revive_Button_Text").innerHTML = "Revive: " + Revive_.toUpperCase();;
	} else {
	document.getElementById("Revive_Button_Text").innerHTML = "Hit Any Key";
	}
	if (SpecialLock == 0) {
	document.getElementById("Special_Button_Text").innerHTML = "Special Key: " + SpecialKey_.toUpperCase();;
	} else {
	document.getElementById("Special_Button_Text").innerHTML = "Hit Any Key";
	}
	if (SShowLock == 0) {
	document.getElementById("Settings_Button_Text").innerHTML = "Settings Button: " + SShow.toUpperCase();;
	} else {
	document.getElementById("Settings_Button_Text").innerHTML = "Hit Any Key";
	}
	//Up Controls//
	if (UpLock == 1 && keyHit) {
	Up_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.MoveUpControl = Up_);
	UpLock = 0;
	keyHit = false;
	}
	//Down Controls//
	if (DownLock == 1 && keyHit) {
	Down_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.MoveDownControl = Down_);
	DownLock = 0;
	keyHit = false;
	}
	//Left Controls//
	if (LeftLock == 1 && keyHit) {
	Left_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.MoveLeftControl = Left_);
	LeftLock = 0;
	keyHit = false;
	}
	//Right Controls//
	if (RightLock == 1 && keyHit) {
	Right_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.MoveRightControl = Right_);
	RightLock = 0;
	keyHit = false;
	}
	//Shoot Up Controls//
	if (ShootUpLock == 1 && keyHit) {
	shootUp_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.ShootUpControl = shootUp_);
	ShootUpLock = 0;
	keyHit = false;
	}
	//Shoot Down Controls//
	if (ShootDownLock == 1 && keyHit) {
	shootDown_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.ShootDownControl = shootDown_);
	ShootDownLock = 0;
	keyHit = false;
	}
	//Shoot Left Controls//
	if (ShootLeftLock == 1 && keyHit) {
	shootLeft_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.ShootLeftControl = shootLeft_);
	ShootLeftLock = 0;
	keyHit = false;
	}
	//Shoot Right Controls//
	if (ShootRightLock == 1 && keyHit) {
	shootRight_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.ShootRightControl = shootRight_);
	ShootRightLock = 0;
	keyHit = false;
	}
	//Back Controls//
	if (BackLock == 1 && keyHit) {
	Esssc_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.BackControl = Esssc_);
	BackLock = 0;
	keyHit = false;
	}
	//Mute Controls//
	if (MuteLock == 1 && keyHit) {
	Mute_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.MuteControl = Mute_);
	MuteLock = 0;
	keyHit = false;
	}
	//Patch Controls//
	if (PatchLock == 1 && keyHit) {
	Patch_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.PatchControl = Patch_);
	PatchLock = 0;
	keyHit = false;
	}
	//Revive Controls//
	if (ReviveLock == 1 && keyHit) {
	Revive_ = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.ReviveControl = Revive_);
	ReviveLock = 0;
	keyHit = false;
	}
	//Special Controls//
	if (SpecialLock == 1 && keyHit) {
	SpecialKey_ = keyPressed;
	SpecialKey_2 = keyPressed2;
	UnlockControls = false;
	localStorage && (localStorage.SpecialControl = SpecialKey_);
	localStorage && (localStorage.SpecialControl2 = SpecialKey_2);
	SpecialLock = 0;
	keyHit = false;
	}
	//Settings Controls//
	if (SShowLock == 1 && keyHit) {
	SShow = keyPressed;
	UnlockControls = false;
	localStorage && (localStorage.Settings_ = SShow);
	SShowLock = 0;
	keyHit = false;
	}
}

var keyHit = false;
var keyPressed = "";
var keyPressed2 = "";
function keyDownHandler(event)
{
	keyPressed = event.key;
	keyPressed2 = String.fromCharCode(event.keyCode);
	if (keyPressed && UnlockControls) {
	keyHit = true;
	}
	if (keyPressed == Up_ && !blockKeys && !pauseGameKeys) {		
		if (pauseGame == 0) {
        moveUp();
		}
	}
	else if (keyPressed == Down_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        moveDown();
		}		
	}
	else if (keyPressed == Left_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        moveLeft();
		}		
	}
	else if (keyPressed == Right_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        moveRight();
		}		
	}
	if (keyPressed == "Enter" && wave == 22 && !blockKeys && !pauseGameKeys) {
	WarpZoneControls();
	}
	if (keyPressed == Esssc_ && !blockKeys && !pauseGameKeys) {
	backfunc();
	tip = Math.floor(Math.random() * tips);
	}
	if (keyPressed == Esssc_ && !blockKeys && document.getElementById('settings').style.visibility == "visible") {
	showStop();
	}
	if (keyPressed == Revive_ && !blockKeys && !pauseGameKeys) {
	relive();
	}
	if (keyPressed == Mute_ && !blockKeys) {
	mutemusic++;
	localStorage && (localStorage.MuteVol = mutemusic);
	}
	if (keyPressed == SShow && !blockKeys) {
	show();
	}
	if (keyPressed == Patch_ && !blockKeys && !pauseGameKeys) {
	patchinfo();
	}
	if (keyPressed == shootUp_ && !blockKeys && !pauseGameKeys) {		
		if (pauseGame == 0) {
        autoUp();
		}
	}
	else if (keyPressed == shootDown_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        autoDown();
		}	
	}
	else if (keyPressed == shootLeft_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        autoLeft();
		}		
	}
	else if (keyPressed == shootRight_ && !blockKeys && !pauseGameKeys) {	
		if (pauseGame == 0) {
        autoRight();
		}		
	}
	if (keyPressed2 == SpecialKey_2) 
	{
	specialWandS = 1;
	}
	if (keyPressed == "w")
	{
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		goToWarpZone = 1;
		}
	}
	if (keyPressed == "1") {
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		swapweap1();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 0;
		playerHealthMax = 100;
		}
		if (upgrademenu == 1 && !blockKeys && !pauseGameKeys) {
		upgrade1func();
		}
	}
	if (keyPressed == "2") {
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		swapweap2();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 1;
		playerHealthMax = 100;
		}
	}
	if (keyPressed == "3") {
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		swapweap3();
		}
		if (upgrademenu == 0 && christmasSkin == 1 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 2;
		playerHealthMax = 100;
		}
	}
	if (keyPressed == "4") {
		if (upgrademenu == 0 && miniBossShip == 1 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 3;
		playerHealthMax = 300;
		}
	}
	if (keyPressed == "5") {
		if (upgrademenu == 0 && easyShipPrize == 1 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 4;
		playerHealthMax = 200;
		}
	}
	if (keyPressed == "6") {
		if (upgrademenu == 0 && STPRIZESHIP == 1 && pauseGame == 1 && specialalert1 == 0 && weaponVault == 0 && !blockKeys && !pauseGameKeys) {
		playerShip = 5;
		playerHealthMax = 200;
		}
	}
	if (keyPressed == "h") {
		if (upgrademenu == 1 && !blockKeys && !pauseGameKeys) {
		healthRecovery();
		}
	}
	if (keyPressed == "a") {
		if (upgrademenu == 1 && !blockKeys && !pauseGameKeys) {
		ammoRecovery();
		}
	}
}

function keyUpHandler(event)
{
	keyPressed = event.key;
	keyPressed2 = String.fromCharCode(event.keyCode);
	if (keyPressed == Up_) {		
	clearmoveu();
	}
	else if (keyPressed == Down_) {	
	clearmoved();		
	}
	else if (keyPressed == Left_) {	
	clearmovel();		
	}
	else if (keyPressed == Right_) {	
	clearmover();		
	}
	if (keyPressed == Revive_) {
	stopshow();
	}
	if (keyPressed == shootUp_) {		
	clearAutoU();
	}
	else if (keyPressed == shootDown_) {	
	clearAutoD();		
	}
	else if (keyPressed == shootLeft_) {	
	clearAutoL();		
	}
	else if (keyPressed == shootRight_) {	
	clearAutoR();		
	}
	if (keyPressed2 == SpecialKey_2) {
	specialWandS = 0;
	}
}

var openpatchinfo = 0;
function patchinfo() { 
openpatchinfo++;
	if (openpatchinfo > 1) {
	openpatchinfo = 0;
	}
}

function resizeHandler() {
var nativeWidth = 800; 
var nativeHeight = 500;
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
var scaleFillNativeWidth = deviceWidth / nativeWidth;
var scaleFillNativeHeight = deviceHeight / nativeHeight;
Board.canvas.width = deviceWidth;
Board.canvas.height = deviceHeight;
ctx = Board.canvas.getContext("2d");
ctx.setTransform(scaleFillNativeWidth,0,0,scaleFillNativeHeight,0,0);
}

var tip = 0;
var tips = 8;
function TipsText() {
	switch (tip) {
		case 0:
			if (christmasSkin == 0) {
			TipsTxt.text = "Tip: Play in December..."
			TipsTxt.font = "16px Consolas";
			} else {
			tip++;
			}
		break;
		case 1:
			if (easyShipPrize == 0) {
			TipsTxt.text = "Tip: Die and get something special..."
			TipsTxt.font = "14px Consolas";
			} else {
			tip++;
			}
		break;
		case 2:
			if (miniBossShip == 0) {
			TipsTxt.text = "Tip: Beat wave 7 boss..."
			TipsTxt.font = "16px Consolas";
			} else {
			tip++;
			}
		break;
		case 3:
		TipsTxt.text = "Tip: Watch your health..."
		TipsTxt.font = "16px Consolas";
		break;
		case 4:
		TipsTxt.text = "Tip: Watch your ammo..."
		TipsTxt.font = "16px Consolas";
		break;
		case 5:
		TipsTxt.text = "Tip: Don't let them surround you..."
		TipsTxt.font = "14px Consolas";
		break;
		case 6:
			if (stcweapon == 0) {
			TipsTxt.text = "Tip: Play during September 11th-30th to find a secret..."
			TipsTxt.font = "9px Consolas";
			} else {
			tip++;
			}
		break;
		case 7:
			if (stcweapon == 1 && stcget == 0) {
			TipsTxt.text = "Tip: Search the trees for a special weapon..."
			TipsTxt.font = "10px Consolas";
			} else {
			tip++;
			}
		break;
	}
	if (tip > (tips - 1)) {
	tip = 0;
	}
}

var weaponupgrade1 = 0;
var weapon = 0;
var ammo = 160;
var maxAmmo = 160;
var WeaponCoolDown = 30;
var weapname = "Pistol";
var stcget = 0;
var specialWandS = 0;
function waveammoweapon() {
	switch (weapon) {
		case 0:
		weapname = "Z-01";
		PlayerDamageDeal = 20;
		WeaponCoolDown = 30;
		bullrange = 3;
		ammocon = 1;
		break;
		case 1:
			if (weaponupgrade1 > 0) {
			weapname = "Hi-Beam";
			PlayerDamageDeal = 25;
			WeaponCoolDown = 20;
			bullrange = 2;
			ammocon = 1;
			}
		break;
		case 2:
			if (weaponupgrade1 > 1) {
			weapname = "Zapper";
			PlayerDamageDeal = 35;
			WeaponCoolDown = 20;
			bullrange = 4;
			ammocon = 1;
			}
		break;
		case 3:
			if (stcweapon == 1 && stcget == 1) {
			weapname = "Cube";
			PlayerDamageDeal = 45;
			WeaponCoolDown = 25;
			bullrange = 1;
			ammocon = 0.5;
			}
		break;
		case 4:
			if (STPRIZEWEAPON == 1) {
			weapname = "Lucky";
			PlayerDamageDeal = 40;
			WeaponCoolDown = 20;
			bullrange = 3;
			ammocon = 1;
			}
		break;
	}
ammotxt.font="18px Consolas";
ammotxt.text="Ammo:" + Math.floor(ammo);
weaptxt.font="12px Consolas bold";
weaptxt.text="Weapon:" + weapname;
wavetxt.font="18px Consolas";
wavetxt.text="Wave:" + wave;
	if (endless == 0 && wave == 22) {
	wavetxt.font="14px Consolas";
	wavetxt.text="Wave:Space";
	}
middle_UI_edge.update();
middle_UI.update();
backgroung_ammo.update();
backgroung_weapon.update();
backgroung_wave.update();
ammotxt.update();
weaptxt.update();
wavetxt.update();
Mute_UI.update();
	if (mutemusic != 0) {
	Mute_UI.sx = 80;
	} else {
	Mute_UI.sx = 0;
	}
}

var spawnbad2pos = Math.floor(Math.random() * 2);
var spawnbad3pos = Math.floor(Math.random() * 2);
var spawnbad4pos = Math.floor(Math.random() * 2);
var spawncrate2pos = Math.floor(Math.random() * 2);
var spawncrate1pos = Math.floor(Math.random() * 2);
var count = 0;
var countSwitch1 = 0;
var countSwitch2 = 0;
var countSwitch3 = 0;
var countSwitch4 = 0;
var countSwitch5 = 0;
var numofbad = 10;
var moneyperwave = Math.floor(Math.random() * 4) + 7;
var moneyperendie = Math.floor(Math.random() * 2) + 1;
var moneyperendie2 = Math.floor(Math.random() * 5) + 2;
var moneyperendie3 = Math.floor(Math.random() * 8) + 3;
var moneyperendie4 = Math.floor(Math.random() * 6) + 3;
var moneyperendie5 = Math.floor(Math.random() * 7) + 3;
var cratespawn = 0;
var cratespawn2 = 0;
var chanceofdrop = 3;
var chanceofdrop2 = 3;
var chanceofdrop3 = 2;
var chanceofdrop4 = 2.5;
var chanceofdrop5 = 2;
var resetcrate = 0;
function countwave() {
	if (wave > 4 && wave < 8 && resetcrate == 0) {
	crate1X = 90;
	crate1Y = 90;
	crateh1X = 250;
	crateh1Y = 40;
	resetcrate = 1;
	}
	if (menu > 0) {
		if (wave < 5 && BadDeath < 1) {
		countSwitch1 = 0;
		}
		if (BadDeath > 0 && badguy1.crashWith(badwavebox1)) {
			if (upgrademenu == 0) {
				if (Math.floor(Math.random() * chanceofdrop) == 1 && cratespawn2 == 0 && playerHealth < playerHealthMax) {
				cratespawn2 += 1;
				spawncrate2pos = Math.floor(Math.random() * 2);
				}
				if (Math.floor(Math.random() * chanceofdrop) == 1 && cratespawn == 0 && ammo < maxAmmo) {
				cratespawn += 1;
				spawncrate1pos = Math.floor(Math.random() * 2);
				}
				if (cratespawn == 0) {
					if (wave < 5) {
						if (spawncrate1pos == 1) {
						crate1X = 90;
						crate1Y = 90;
						} else {
						crate1X = 374;
						crate1Y = 184.5;
						}
					} else {
					crate1X = 374;
					crate1Y = 184.5;
					}
				}
				if (cratespawn2 == 0) {
					if (wave < 5) {
						if (spawncrate2pos == 1) {
						crateh1X = 520;
						crateh1Y = 110;
						} else {
						crateh1X = 399;
						crateh1Y = 184.5;
						}
					} else {
					crateh1X = 399;
					crateh1Y = 184.5;
					}
				}
			}
			if (wave < 5 && upgrademenu == 0 && pauseGame == 0 && countSwitch1 == 0) {
			money += moneyperendie;
				if (wave < 3) {
				moneyperendie = Math.floor(Math.random() * 2) + 1;
				}
				if (wave >= 3 && wave < 5) {
				moneyperendie = Math.floor(Math.random() * 3) + 2;
				}
			count += 1;
			countSwitch1 = 1;
			}
		}
	}
	if (wave < 7 && wave > 1) {
		if (BadDeath2 < 1 && badguy2.crashWith(badwavebox2)) {
		spawnbad2pos = Math.floor(Math.random() * 2);
		countSwitch2 = 0;
		}
		if (BadDeath2 > 0 && menu > 0 && badguy2.crashWith(badwavebox2)) {
			if (upgrademenu == 0 && pauseGame == 0 && countSwitch2 == 0) {
			money += moneyperendie2;
				if (wave < 6) {
				moneyperendie2 = Math.floor(Math.random() * 5) + 2;
				}
				if (wave == 6) {
				moneyperendie2 = Math.floor(Math.random() * 6) + 5;
				}
			count += 1;
			countSwitch2 = 1;
			}
			if (Math.floor(Math.random() * chanceofdrop2) == 1 && cratespawn2 == 0 && playerHealth < playerHealthMax) {
			cratespawn2 += 1;
			spawncrate2pos = Math.floor(Math.random() * 2);
			}
			if (Math.floor(Math.random() * chanceofdrop2) == 1 && cratespawn == 0 && ammo < maxAmmo) {
			cratespawn += 1;
			spawncrate1pos = Math.floor(Math.random() * 2);
			}
			if (wave > 4 && wave < 7) {
				if (spawnbad2pos == 0) {
				bad2posX = 50;
				bad2posY = 450;
				} else {
				bad2posX = 75;
				bad2posY = -50; 
				}
			} else {
			bad2posX = 50;
			bad2posY = 450;
			}
			if (cratespawn == 0 && wave < 5) {
				if (spawncrate1pos == 1) {
				crate1X = 90;
				crate1Y = 90;
				} else {
				crate1X = 374;
				crate1Y = 184.5;
				}
			}
			if (cratespawn2 == 0 && wave < 5) {
				if (spawncrate2pos == 1) {
				crateh1X = 520;
				crateh1Y = 110;
				} else {
				crateh1X = 399;
				crateh1Y = 184.5;
				}
			}
			if (cratespawn == 0 && wave > 4 && wave < 7) {
				if (spawncrate1pos == 1) {
				crate1X = 90;
				crate1Y = 90;
				} else {
				crate1X = 500;
				crate1Y = 270;
				}
			}
			if (cratespawn2 == 0 && wave > 4 && wave < 7) {
				if (spawncrate2pos == 1) {
				crateh1X = 250;
				crateh1Y = 40;
				} else {
				crateh1X = 710;
				crateh1Y = 70;
				}
			}
		}
	}
	if (wave < 5 && wave > 2) {
		if (BadDeath4 < 1) {
		countSwitch3 = 0;
		}
		if (BadDeath4 > 0 && recbox1.crashWith(recwavebox1)) {
			if (upgrademenu == 0 && pauseGame == 0 && countSwitch3 == 0) {
			money += moneyperendie4;
			count += 1;
				if (wave < 4) {
				Math.floor(Math.random() * 6) + 3;
				}
				if (wave == 4) {
				moneyperendie4 = Math.floor(Math.random() * 4) + 7;
				}
			countSwitch3 = 1;
			}
			if (Math.floor(Math.random() * chanceofdrop4) == 1 && cratespawn2 == 0 && playerHealth < playerHealthMax) {
			cratespawn2 += 1;
			spawncrate2pos = Math.floor(Math.random() * 2);
			}
			if (Math.floor(Math.random() * chanceofdrop4) == 1 && cratespawn == 0 && ammo < maxAmmo) {
			cratespawn += 1;
			spawncrate1pos = Math.floor(Math.random() * 2);
			}
			if (cratespawn == 0) {
				if (wave < 5) {
					if (spawncrate1pos == 1) {
					crate1X = 90;
					crate1Y = 90;
					} else {
					crate1X = 374;
					crate1Y = 184.5;
					}
				} else {
				crate1X = 374;
				crate1Y = 184.5;
				}
			}
			if (cratespawn2 == 0) {
				if (wave < 5) {
					if (spawncrate2pos == 1) {
					crateh1X = 520;
					crateh1Y = 110;
					} else {
					crateh1X = 399;
					crateh1Y = 184.5;
					}
				} else {
				crateh1X = 399;
				crateh1Y = 184.5;
				}
			}
		}
	}
	if (wave > 4 && wave < 7) {
		if (BadDeath3 < 1 && tribox.crashWith(triwavebox1)) {
		spawnbad3pos = Math.floor(Math.random() * 2);
		countSwitch4 = 0;
		}
		if (BadDeath3 > 0 && tribox.crashWith(triwavebox1)) {
			if (upgrademenu == 0 && pauseGame == 0 && countSwitch4 == 0) {
			money += moneyperendie3;
			count += 1;
				if (wave < 6) {
				moneyperendie3 = Math.floor(Math.random() * 8) + 3;
				}
				if (wave == 6) {
				moneyperendie3 = Math.floor(Math.random() * 4) + 12;
				}
			countSwitch4 = 1;
			}
			if (wave > 4 && wave < 7) {
				if (Math.floor(Math.random() * chanceofdrop3) == 1 && cratespawn2 == 0 && playerHealth < playerHealthMax) {
				cratespawn2 += 1;
				spawncrate2pos = Math.floor(Math.random() * 2);
				}
				if (Math.floor(Math.random() * chanceofdrop3) == 1 && cratespawn == 0 && ammo < maxAmmo) {
				cratespawn += 1;
				spawncrate1pos = Math.floor(Math.random() * 2);
				}
			}
			if (spawnbad3pos == 0) {
			tri1posX = 700;
			tri1posY = -50;
			} else {
			tri1posX = 65;
			tri1posY = 450; 
			}
			if (cratespawn == 0) {
				if (wave > 4 && wave < 7) {
					if (spawncrate1pos == 1) {
					crate1X = 90;
					crate1Y = 90;
					} else {
					crate1X = 500;
					crate1Y = 270;
					}
				} else {
				crate1X = 90;
				crate1Y = 90;
				}
			}
			if (cratespawn2 == 0) {
				if (wave > 4 && wave < 7) {
					if (spawncrate2pos == 1) {
					crateh1X = 250;
					crateh1Y = 40;
					} else {
					crateh1X = 710;
					crateh1Y = 70;
					}
				} else {
				crateh1X = 250;
				crateh1Y = 40;
				}
			}
		}
	}
	if (wave > 5 && wave < 7) {
		if (BadDeath5 < 1 && xbox1.crashWith(xwavebox1)) {
		spawnbad4pos = Math.floor(Math.random() * 2);
		countSwitch5 = 0;
		}
		if (BadDeath5 > 0 && xbox1.crashWith(xwavebox1)) {
			if (upgrademenu == 0 && pauseGame == 0 && countSwitch5 == 0) {
			money += moneyperendie5;
			count += 1;
				if (wave == 6) {
				moneyperendie5 = Math.floor(Math.random() * 4) + 12;
				}
			countSwitch5 = 1;
			}
			if (wave > 5 && wave < 7) {
				if (Math.floor(Math.random() * chanceofdrop5) == 1 && cratespawn2 == 0 && playerHealth < playerHealthMax) {
				cratespawn2 += 1;
				spawncrate5pos = Math.floor(Math.random() * 2);
				}
				if (Math.floor(Math.random() * chanceofdrop5) == 1 && cratespawn == 0 && ammo < maxAmmo) {
				cratespawn += 1;
				spawncrate5pos = Math.floor(Math.random() * 2);
				}
			}
			if (spawnbad4pos == 1) {
			x1posX = 400;
			x1posY = -50;
			} else {
			x1posX = 30;
			x1posY = 450; 
			}
			if (cratespawn == 0) {
				if (wave > 5 && wave < 7) {
					if (spawncrate1pos == 1) {
					crate1X = 90;
					crate1Y = 90;
					} else {
					crate1X = 500;
					crate1Y = 270;
					}
				} else {
				crate1X = 90;
				crate1Y = 90;
				}
			}
			if (cratespawn2 == 0) {
				if (wave > 5 && wave < 7) {
					if (spawncrate2pos == 1) {
					crateh1X = 250;
					crateh1Y = 40;
					} else {
					crateh1X = 710;
					crateh1Y = 70;
					}
				} else {
				crateh1X = 250;
				crateh1Y = 40;
				}
			}
		}
	}
	if (upgrademenu == 0) {
		if (wave < 7 || wave > 7) {
			if (count == numofbad) {
			money += moneyperwave;
			moneyperwave = Math.floor(Math.random() * 4) + 7;
			wave += 1;
			}
		}
		if (count >= numofbad) {
		count = 0;
		}
		switch (wave) {
			case 3:
			numofbad = 15;
			moneyperendie = Math.floor(Math.random() * 3) + 2;
			break;
			case 4:
			revivecost = 150;
			moneyperendie4 = Math.floor(Math.random() * 4) + 7;
			break;
			case 5:
			numofbad = 20;
			break;
			case 6:
			revivecost = 200;
			moneyperendie2 = Math.floor(Math.random() * 6) + 5;
			moneyperendie3 = Math.floor(Math.random() * 4) + 12;
			break;
		}
	}
}

var BadDeath = 1;
var Badhealth1 = 0;
var PlayerDamageDeal = 20;
var Bad1DamageDeal = 0.1;
function badboxspawn() {
	switch (difficulty) {
		case 0:
		Bad1DamageDeal = 0.1;
		break;
		case 1:
		Bad1DamageDeal = 0.2;
		break;
		case 2:
		Bad1DamageDeal = 0.5;
		break;
	}
	if (wave < 5) {
		if (bullbox.crashWith(badguy1) && Badhealth1 >= 0 && fire > 0) {
		Badhealth1 -= PlayerDamageDeal;
		fire = 0;
		}
		if (Badhealth1 > 0) {
		BadDeath = 0;
		}
		if (Badhealth1 <= 0) {
		BadDeath = 1;
		Badhealth1 = 0;
		}
	}
}

function crashhitai1() {
	if (BadDeath < 1) {
		if (badguy1.crashWith(wallright)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -1;
			badguy1.speedX = -1;
			}
		}
		if (badguy1.crashWith(wallhouse3)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -1;
			badguy1.speedX = -1;
			}
		}
		if (badguy1.crashWith(wallhouse7)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -2;
			badguy1.speedX = -2;
			}
		}
		if (badguy1.crashWith(wallhouse2_2)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -1;
			badguy1.speedX = -1;
			}
		}
		if (badguy1.crashWith(wall2house3)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -1;
			badguy1.speedX = -1;
			}
		}
		if (badguy1.crashWith(wall2house7)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -2;
			badguy1.speedX = -2;
			}
		}
		if (badguy1.crashWith(wall2house2_2)) {
		touchwallrightbad1 = 1;
			if (touchwallrightbad1 == 1) {
			badguypic1.speedX = -1;
			badguy1.speedX = -1;
			}
		}
		if (!badguy1.crashWith(wallright)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse3)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse2_2)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse7)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house3)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house2_2)) {
		touchwallrightbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house7)) {
		touchwallrightbad1 = 0;
		}
		if (badguy1.crashWith(wallleft)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 1;
			badguy1.speedX = 1;
			}
		}
		if (badguy1.crashWith(wallhouse3_2)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 1;
			badguy1.speedX = 1;
			}
		}
		if (badguy1.crashWith(wallhouse2)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 1;
			badguy1.speedX = 1;
			}
		}
		if (badguy1.crashWith(wallhouse5)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 2;
			badguy1.speedX = 2;
			}
		}
		if (badguy1.crashWith(wall2house3_2)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 1;
			badguy1.speedX = 1;
			}
		}
		if (badguy1.crashWith(wall2house2)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 1;
			badguy1.speedX = 1;
			}
		}
		if (badguy1.crashWith(wall2house5)) {
		touchwallleftbad1 = 1;
			if (touchwallleftbad1 == 1) {
			badguypic1.speedX = 2;
			badguy1.speedX = 2;
			}
		}
		if (!badguy1.crashWith(wallleft)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse3_2)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse2)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse5)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house3_2)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house2)) {
		touchwallleftbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house5)) {
		touchwallleftbad1 = 0;
		}
		if (badguy1.crashWith(wall3)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wallhouse1)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wallhouse4_2)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wallhouse6_2)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wall2house1)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wall2house4_2)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (badguy1.crashWith(wall2house6_2)) {
		touchwallupbad1 = 1;
			if (touchwallupbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (insidehouse1 == 0 && badguy1.crashWith(wallhouse8)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (inside2house1 == 0 && badguy1.crashWith(wall2house8)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
			}
		}
		if (!badguy1.crashWith(wall3)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse1)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse4_2)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse6_2)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house1)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house4_2)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house6_2)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse8)) {
		touchwallupbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house8)) {
		touchwallupbad1 = 0;
		}
		if (badguy1.crashWith(wall4)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wallhouse1_2)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wallhouse4)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wallhouse6)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wall2house1_2)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wall2house4)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (badguy1.crashWith(wall2house6)) {
		touchwalldownbad1 = 1;
			if (touchwalldownbad1 == 1) {
			badguypic1.speedY = -1;
			badguy1.speedY = -1;
			}
		}
		if (!badguy1.crashWith(wall4)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse1_2)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse4)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wallhouse6)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house1_2)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house4)) {
		touchwalldownbad1 = 0;
		}
		if (!badguy1.crashWith(wall2house6)) {
		touchwalldownbad1 = 0;
		}
	}
	if (BadDeath2 < 1) {
		if (badguy2.crashWith(wallright)) {
		touchwallrightbad2 = 1;
			if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -1;
			badguy2.speedX = -1;
			}
		}
		if (!badguy2.crashWith(wallright)) {
		touchwallrightbad2 = 0;
		}
		if (badguy2.crashWith(wallleft)) {
		touchwallleftbad2 = 1;
			if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 1;
			badguy2.speedX = 1;
			}
		}
		if (!badguy2.crashWith(wallleft)) {
		touchwallleftbad2 = 0;
		}
		if (badguy2.crashWith(wall3)) {
		touchwallupbad2 = 1;
			if (touchwallupbad1 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
			}
		}
		if (!badguy2.crashWith(wall3)) {
		touchwallupbad2 = 0;
		}
		if (badguy2.crashWith(wall4)) {
		touchwalldownbad2 = 1;
			if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
			}
		}
		if (!badguy2.crashWith(wall4)) {
		touchwalldownbad2 = 0;
		}
		if (wave < 5) {
			if (badguy2.crashWith(wallhouse3)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (badguy2.crashWith(wallhouse2_2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (badguy2.crashWith(wallhouse7)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (badguy2.crashWith(wall2house3)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (badguy2.crashWith(wall2house2_2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (badguy2.crashWith(wall2house7)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wallhouse3)) {
			touchwallrightbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse2_2)) {
			touchwallrightbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse7)) {
			touchwallrightbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house3)) {
			touchwallrightbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house2_2)) {
			touchwallrightbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house7)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wallhouse3_2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (badguy2.crashWith(wallhouse2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (badguy2.crashWith(wallhouse5)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (badguy2.crashWith(wall2house3_2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (badguy2.crashWith(wall2house2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (badguy2.crashWith(wall2house5)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wallhouse3_2)) {
			touchwallleftbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse2)) {
			touchwallleftbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse5)) {
			touchwallleftbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house3_2)) {
			touchwallleftbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house2)) {
			touchwallleftbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house5)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wallhouse1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wallhouse4_2)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wallhouse6_2)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wall2house1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wall2house4_2)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wall2house6_2)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (insidehouse1 == 0 && badguy2.crashWith(wallhouse8)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (inside2house1 == 0 && badguy2.crashWith(wall2house8)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wallhouse1)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse4_2)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse6_2)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house1)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house4_2)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house6_2)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse8)) {
			touchwallupbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house8)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wallhouse1_2)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (badguy2.crashWith(wallhouse4)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (badguy2.crashWith(wallhouse6)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (badguy2.crashWith(wall2house1_2)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (badguy2.crashWith(wall2house4)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (badguy2.crashWith(wall2house6)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wallhouse1_2)) {
			touchwalldownbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse4)) {
			touchwalldownbad2 = 0;
			}
			if (!badguy2.crashWith(wallhouse6)) {
			touchwalldownbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house1_2)) {
			touchwalldownbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house4)) {
			touchwalldownbad2 = 0;
			}
			if (!badguy2.crashWith(wall2house6)) {
			touchwalldownbad2 = 0;
			}
		}
		if (wave >= 5 && wave < 7) {
			if (badguy2.crashWith(wall3house1)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall3house1)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall3house1_2)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall3house1_2)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall3house2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (!badguy2.crashWith(wall3house2)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall3house2_2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (!badguy2.crashWith(wall3house2_2)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall3house3)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 1;
				badguy2.speedX = 1;
				}
			}
			if (!badguy2.crashWith(wall3house3)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall3house3_2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -1;
				badguy2.speedX = -1;
				}
			}
			if (!badguy2.crashWith(wall3house3_2)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall3house4)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall3house4)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall3house4_2)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall3house4_2)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall3house4_3)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wall3house4_3)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall3house5)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall3house5)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall3house5_2)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall3house5_2)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall3house5_3)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wall3house5_3)) {
			touchwallrightbad2 = 0;
			}
			if (inside3house1 == 0 && badguy2.crashWith(wall3house6)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (badguy2.crashWith(wall4house1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall4house1)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall4house1_1)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall4house1_1)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall4house2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wall4house2)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall4house2_1)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wall4house2_1)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall4house3)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wall4house3)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall4house3_1)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wall4house3_1)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall4house4)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall4house4)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall4house4_1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall4house4_1)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall4house4_2)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wall4house4_2)) {
			touchwallleftbad2 = 0;
			}
			if (badguy2.crashWith(wall4house5)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall4house5)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall4house5_1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall4house5_1)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall4house5_2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wall4house5_2)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall4house6)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}
			}
			if (!badguy2.crashWith(wall4house6)) {
			touchwalldownbad2 = 0;
			}
			if (badguy2.crashWith(wall4house6_1)) {
			touchwallupbad2 = 1;
				if (touchwallupbad2 == 1) {
				badguypic2.speedY = 1;
				badguy2.speedY = 1;
				}
			}
			if (!badguy2.crashWith(wall4house6_1)) {
			touchwallupbad2 = 0;
			}
			if (badguy2.crashWith(wall4house6_2)) {
			touchwallrightbad2 = 1;
				if (touchwallrightbad2 == 1) {
				badguypic2.speedX = -2;
				badguy2.speedX = -2;
				}
			}
			if (!badguy2.crashWith(wall4house6_2)) {
			touchwallrightbad2 = 0;
			}
			if (badguy2.crashWith(wall4house6_3)) {
			touchwallleftbad2 = 1;
				if (touchwallleftbad2 == 1) {
				badguypic2.speedX = 2;
				badguy2.speedX = 2;
				}
			}
			if (!badguy2.crashWith(wall4house6_3)) {
			touchwallleftbad2 = 0;
			}
			if (inside4house1 == 0 && badguy2.crashWith(wall4house7)) {
			touchwalldownbad2 = 1;
				if (touchwalldownbad2 == 1) {
				badguypic2.speedY = -1;
				badguy2.speedY = -1;
				}	
			}
		}
	}
	if (BadDeath3 < 1) {
		if (tribox.crashWith(wallright)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
			}
		}
		if (!tribox.crashWith(wallright)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wallleft)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
			}
		}
		if (!tribox.crashWith(wallleft)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall3)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall3)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall4)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall4)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall3house1)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall3house1)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall3house1_2)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall3house1_2)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall3house2)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
			}
		}
		if (!tribox.crashWith(wall3house2)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall3house2_2)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
			}
		}
		if (!tribox.crashWith(wall3house2_2)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall3house3)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
			}
		}
		if (!tribox.crashWith(wall3house3)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall3house3_2)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
			}
		}
		if (!tribox.crashWith(wall3house3_2)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall3house4)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall3house4)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall3house4_2)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall3house4_2)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall3house4_3)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
			}
		}
		if (!tribox.crashWith(wall3house4_3)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall3house5)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall3house5)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall3house5_2)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall3house5_2)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall3house5_3)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
			}
		}
		if (!tribox.crashWith(wall3house5_3)) {
		touchwallleftbad3 = 0;
		}
		if (inside3house1 == 0 && tribox.crashWith(wall3house6)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (tribox.crashWith(wall4house1)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall4house1)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall4house1_1)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall4house1_1)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall4house2)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
			}
		}
		if (!tribox.crashWith(wall4house2)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall4house2_1)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
			}
		}
		if (!tribox.crashWith(wall4house2_1)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall4house3)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
			}
		}
		if (!tribox.crashWith(wall4house3)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall4house3_1)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
			}
		}
		if (!tribox.crashWith(wall4house3_1)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall4house4)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall4house4)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall4house4_1)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall4house4_1)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall4house4_2)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
			}
		}
		if (!tribox.crashWith(wall4house4_2)) {
		touchwallleftbad3 = 0;
		}
		if (tribox.crashWith(wall4house5)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall4house5)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall4house5_1)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall4house5_1)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall4house5_2)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
			}
		}
		if (!tribox.crashWith(wall4house5_2)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall4house6)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}
		}
		if (!tribox.crashWith(wall4house6)) {
		touchwalldownbad3 = 0;
		}
		if (tribox.crashWith(wall4house6_1)) {
		touchwallupbad3 = 1;
			if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
			}
		}
		if (!tribox.crashWith(wall4house6_1)) {
		touchwallupbad3 = 0;
		}
		if (tribox.crashWith(wall4house6_2)) {
		touchwallrightbad3 = 1;
			if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
			}
		}
		if (!tribox.crashWith(wall4house6_2)) {
		touchwallrightbad3 = 0;
		}
		if (tribox.crashWith(wall4house6_3)) {
		touchwallleftbad3 = 1;
			if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
			}
		}
		if (!tribox.crashWith(wall4house6_3)) {
		touchwallleftbad3 = 0;
		}
		if (inside4house1 == 0 && tribox.crashWith(wall4house7)) {
		touchwalldownbad3 = 1;
			if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
			}	
		}
	}
	if (BadDeath5 < 1) {
		if (xbox1.crashWith(wallright)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
			}
		}
		if (!xbox1.crashWith(wallright)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wallleft)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
			}
		}
		if (!xbox1.crashWith(wallleft)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall3)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall3)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall4)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall4)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall3house1)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall3house1)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall3house1_2)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall3house1_2)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall3house2)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
			}
		}
		if (!xbox1.crashWith(wall3house2)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall3house2_2)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
			}
		}
		if (!xbox1.crashWith(wall3house2_2)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall3house3)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
			}
		}
		if (!xbox1.crashWith(wall3house3)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall3house3_2)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
			}
		}
		if (!xbox1.crashWith(wall3house3_2)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall3house4)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall3house4)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall3house4_2)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall3house4_2)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall3house4_3)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
			}
		}
		if (!xbox1.crashWith(wall3house4_3)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall3house5)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall3house5)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall3house5_2)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall3house5_2)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall3house5_3)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
			}
		}
		if (!xbox1.crashWith(wall3house5_3)) {
		touchwallleftbad5 = 0;
		}
		if (inside3house1 == 0 && xbox1.crashWith(wall3house6)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (xbox1.crashWith(wall4house1)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall4house1)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall4house1_1)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall4house1_1)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall4house2)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
			}
		}
		if (!xbox1.crashWith(wall4house2)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall4house2_1)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
			}
		}
		if (!xbox1.crashWith(wall4house2_1)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall4house3)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
			}
		}
		if (!xbox1.crashWith(wall4house3)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall4house3_1)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
			}
		}
		if (!xbox1.crashWith(wall4house3_1)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall4house4)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall4house4)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall4house4_1)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall4house4_1)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall4house4_2)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
			}
		}
		if (!xbox1.crashWith(wall4house4_2)) {
		touchwallleftbad5 = 0;
		}
		if (xbox1.crashWith(wall4house5)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall4house5)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall4house5_1)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall4house5_1)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall4house5_2)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
			}
		}
		if (!xbox1.crashWith(wall4house5_2)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall4house6)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}
		}
		if (!xbox1.crashWith(wall4house6)) {
		touchwalldownbad5 = 0;
		}
		if (xbox1.crashWith(wall4house6_1)) {
		touchwallupbad5 = 1;
			if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
			}
		}
		if (!xbox1.crashWith(wall4house6_1)) {
		touchwallupbad5 = 0;
		}
		if (xbox1.crashWith(wall4house6_2)) {
		touchwallrightbad5 = 1;
			if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
			}
		}
		if (!xbox1.crashWith(wall4house6_2)) {
		touchwallrightbad5 = 0;
		}
		if (xbox1.crashWith(wall4house6_3)) {
		touchwallleftbad5 = 1;
			if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
			}
		}
		if (!xbox1.crashWith(wall4house6_3)) {
		touchwallleftbad5 = 0;
		}
		if (inside4house1 == 0 && xbox1.crashWith(wall4house7)) {
		touchwalldownbad5 = 1;
			if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
			}	
		}
	}
	if (BadDeath4 < 1) {
		if (recbox1.crashWith(wallright)) {
		touchwallrightbad4 = 1;
			if (touchwallrightbad4 == 1) {
			recenemypic1.speedX = -1;
			recbox1.speedX = -1;
			}
		}
		if (!recbox1.crashWith(wallright)) {
		touchwallrightbad4 = 0;
		}
		if (recbox1.crashWith(wallleft)) {
		touchwallleftbad4 = 1;
			if (touchwallleftbad4 == 1) {
			recenemypic1.speedX = 1;
			recbox1.speedX = 1;
			}
		}
		if (!recbox1.crashWith(wallleft)) {
		touchwallleftbad4 = 0;
		}
		if (recbox1.crashWith(wall3)) {
		touchwallupbad4 = 1;
			if (touchwallupbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
			}
		}
		if (!recbox1.crashWith(wall3)) {
		touchwallupbad4 = 0;
		}
		if (recbox1.crashWith(wall4)) {
		touchwalldownbad4 = 1;
			if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = -1;
			recbox1.speedY = -1;
			}
		}
		if (!recbox1.crashWith(wall4)) {
		touchwalldownbad4 = 0;
		}
		if (wave < 5 && wave > 2) {
			if (recbox1.crashWith(wallhouse3)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -1;
				recbox1.speedX = -1;
				}
			}
			if (recbox1.crashWith(wallhouse2_2)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -1;
				recbox1.speedX = -1;
				}
			}
			if (recbox1.crashWith(wallhouse7)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -2;
				recbox1.speedX = -2;
				}
			}
			if (recbox1.crashWith(wall2house3)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -1;
				recbox1.speedX = -1;
				}
			}
			if (recbox1.crashWith(wall2house2_2)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -1;
				recbox1.speedX = -1;
				}
			}
			if (recbox1.crashWith(wall2house7)) {
			touchwallrightbad4 = 1;
				if (touchwallrightbad4 == 1) {
				recenemypic1.speedX = -2;
				recbox1.speedX = -2;
				}
			}
			if (!recbox1.crashWith(wallhouse3)) {
			touchwallrightbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse2_2)) {
			touchwallrightbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse7)) {
			touchwallrightbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house3)) {
			touchwallrightbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house2_2)) {
			touchwallrightbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house7)) {
			touchwallrightbad4 = 0;
			}
			if (recbox1.crashWith(wallhouse3_2)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 1;
				recbox1.speedX = 1;
				}
			}
			if (recbox1.crashWith(wallhouse2)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 1;
				recbox1.speedX = 1;
				}
			}
			if (recbox1.crashWith(wallhouse5)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 2;
				recbox1.speedX = 2;
				}
			}
			if (recbox1.crashWith(wall2house3_2)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 1;
				recbox1.speedX = 1;
				}
			}
			if (recbox1.crashWith(wall2house2)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 1;
				recbox1.speedX = 1;
				}
			}
			if (recbox1.crashWith(wall2house5)) {
			touchwallleftbad4 = 1;
				if (touchwallleftbad4 == 1) {
				recenemypic1.speedX = 2;
				recbox1.speedX = 2;
				}
			}
			if (!recbox1.crashWith(wallhouse3_2)) {
			touchwallleftbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse2)) {
			touchwallleftbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse5)) {
			touchwallleftbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house3_2)) {
			touchwallleftbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house2)) {
			touchwallleftbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house5)) {
			touchwallleftbad4 = 0;
			}
			if (recbox1.crashWith(wallhouse1)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (recbox1.crashWith(wallhouse4_2)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (recbox1.crashWith(wallhouse6_2)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (recbox1.crashWith(wall2house1)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (recbox1.crashWith(wall2house4_2)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (recbox1.crashWith(wall2house6_2)) {
			touchwallupbad4 = 1;
				if (touchwallupbad4 == 1) {
				recenemypic1.speedY = 1;
				recbox1.speedY = 1;
				}
			}
			if (!recbox1.crashWith(wallhouse1)) {
			touchwallupbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse4_2)) {
			touchwallupbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse6_2)) {
			touchwallupbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house1)) {
			touchwallupbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house4_2)) {
			touchwallupbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house6_2)) {
			touchwallupbad4 = 0;
			}
			if (recbox1.crashWith(wallhouse1_2)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (recbox1.crashWith(wallhouse4)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (recbox1.crashWith(wallhouse6)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (recbox1.crashWith(wall2house1_2)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (recbox1.crashWith(wall2house4)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (recbox1.crashWith(wall2house6)) {
			touchwalldownbad4 = 1;
				if (touchwalldownbad4 == 1) {
				recenemypic1.speedY = -1;
				recbox1.speedY = -1;
				}
			}
			if (!recbox1.crashWith(wallhouse1_2)) {
			touchwalldownbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse4)) {
			touchwalldownbad4 = 0;
			}
			if (!recbox1.crashWith(wallhouse6)) {
			touchwalldownbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house1_2)) {
			touchwalldownbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house4)) {
			touchwalldownbad4 = 0;
			}
			if (!recbox1.crashWith(wall2house6)) {
			touchwalldownbad4 = 0;
			}
		}
		if (insidehouse1 == 0 && recbox1.crashWith(wallhouse8)) {
		touchwalldownbad4 = 1;
			if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
			}
		}
		if (inside2house1 == 0 && recbox1.crashWith(wall2house8)) {
		touchwalldownbad4 = 1;
			if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
			}
		}
	}
}

var frameIndex_1 = 0;
var resetframe_1 = 5;
var bossTickCount = 0;
var ticksPerFrame_1 = 300;
var spawnBoss7 = 0;
var Boss7_Start_X = 400;
var Boss7_Start_Y = 200;
var Boss7_Pos2_X = 100;
var Boss7_Pos2_Y = 100;
var Boss7_Pos3_X = 700;
var Boss7_Pos3_Y = 100;
var Boss7_Pos4_X = 100;
var Boss7_Pos4_Y = 300;
var Boss7_Pos5_X = 700;
var Boss7_Pos5_Y = 300;
var ExplosionCycle = 0;
var EXCount = 0;
var MaxFrame = 7;
var BossDead = false;
var BossHealth = 1000;
var Slowdown = 10;
var switchBoss7 = 0;
var bossHealthBarColor = "green";
var readyToFire = false;
var bossFire = false;
var bossSheildMode = 0;
var _bossBullets = [];
var shootSec = 0;
var stopShoot = 60;
var BossDamageDue = 5;
var GuardDead = false;
var GuardHealth = 100;
var GuardHealthBack = 15;
var GuardAmmoBack = 5;
var GuardDamage = 0.2;
var GuardStart = 0;
var GuardSwitch = 0;
var guardHealthBarColor = "green";
var stopGuardSpawn = 0;
function Boss7AI() {
Explosion_2.x = (burntHouse1.x + burntHouse1.width/2) - Explosion_2.width/2;
Explosion_2.y = (burntHouse1.y + burntHouse1.height/2) - Explosion_2.height/2;
Explosion_3.x = (burntHouse2.x + burntHouse2.width/2) - Explosion_3.width/2;
Explosion_3.y = (burntHouse2.y + burntHouse2.height/2) - Explosion_3.height/2;
Explosion_4.x = 185 - Explosion_4.width/2;
Explosion_4.y = (burntHouse1.y + burntHouse1.height/2) - Explosion_4.height/2;
Explosion_5.x = 185 - Explosion_5.width/2;
Explosion_5.y = (burntHouse2.y + burntHouse2.height/2) - Explosion_5.height/2;
	switch (difficulty) {
		case 0:
		GuardDamage = 0.2;
		BossDamageDue = 5;
		break;
		case 1:
		GuardDamage = 0.3;
		BossDamageDue = 6;
		break;
		case 2:
		GuardDamage = 0.5;
		BossDamageDue = 8;
		break;
	}
guardianPic.x = guardianBox.x;
guardianPic.y = guardianBox.y;
guardianhealthbar.x = guardianBox.x - 12;
guardianhealthbar.y = guardianBox.y - 8;
guardianhealthbar.width = GuardHealth/2;
	if (!GuardDead && pauseGame == 0 && wave == 7 && GuardStart == 1 && Death1 == 0) {
		if (guardianBox.x + guardianBox.width < box.x) {
		guardianBox.x += 2;
		}
		if (guardianBox.x > box.x + box.width) {
		guardianBox.x -= 2;
		}
		if (guardianBox.y + guardianBox.height < box.y) {
		guardianBox.y += 2;
		}
		if (guardianBox.y > box.y + box.height) {
		guardianBox.y -= 2;
		}
	}
	if (guardianBox.crashWith(box) && !GuardDead && wave == 7 && pauseGame == 0 && Death1 == 0) {
	playerHealth -= GuardDamage;
	}
	if (GuardStart == 1 && guardianBox.crashWith(bullbox) && wave == 7 && GuardHealth > 0 && !GuardDead && fire > 0 && Death1 == 0) {
	GuardHealth -= PlayerDamageDeal;
	}
	if (GuardSwitch == 0 && !GuardDead) {
	guardianBox.y = bossWave7.y + 10;
	guardianBox.x = bossWave7.x + 10;
	GuardSwitch = 1;
	}
	if (frameIndex_1 != 4) {
	stopGuardSpawn = 1;
	}
	if (GuardDead && stopGuardSpawn == 0) {
	guardianBox.y = bossWave7.y + 10;
	guardianBox.x = bossWave7.x + 10;
	GuardHealth = 100;
	money += 2;
		if (playerHealth <= 85/100 * playerHealthMax && Death1 == 0) {
		playerHealth += GuardHealthBack;
		}
		if (ammo <= 85/100 * maxAmmo && Death1 == 0) {
		ammo += GuardAmmoBack;
		}
	}
	if (GuardHealth <= 0) {
	GuardDead = true;
	}
	if (GuardHealth > 0) {
	GuardDead = false;
	}
	if (wave != 7 || BossDead) {
	_bossBullets.length = 0;
	}
	for (var i = _bossBullets.length - 1; i >= 0; i--){
		if (_bossBullets[i].crashWith(box)) {
		playerHealth -= BossDamageDue;
		_bossBullets.splice(i, 1);
		}
	}
	for (var i = _bossBullets.length - 1; i >= 0; i--){
		if (_bossBullets[i].crashWith(bullbox)) {
		_bossBullets.splice(i, 1);
		}
	}
boss7healthbar.width = BossHealth / 2;
boss7healthbar.color = bossHealthBarColor;
var startTime_1 = 0;
var slowCount = 0;
bossWave7pic.x = bossWave7.x;
bossWave7pic.y = bossWave7.y;
bossWave7sheildPic.x = bossWave7.x;
bossWave7sheildPic.y = bossWave7.y;
	if (bossSheildMode != 0) {
	GuardStart = 1;
	stopGuardSpawn = 0;
	bossHealthBarColor = "lightblue";
	} else {
		if (BossHealth > 750) {
		bossHealthBarColor = "green";
		}
		if (BossHealth <= 750) {
		bossHealthBarColor = "yellow";
		}
		if (BossHealth <= 500) {
		bossHealthBarColor = "orange";
		}
		if (BossHealth <= 250) {
		bossHealthBarColor = "red";
		}
	}
	if (bossWave7.x == Boss7_Start_X && bossWave7.y == Boss7_Start_Y && frameIndex_1 == 4) {
	bossSheildMode = 1;
	} else {
	bossSheildMode = 0;
	}
	if (frameIndex_1 < 4) {
	ticksPerFrame_1 = 300;
	}
	if (frameIndex_1 == 4) {
	ticksPerFrame_1 = 1000;
	}
	if (startTime_1 == 1) {
	slowCount++;
		if (slowCount >= Slowdown) {
		startTime_1 = 0;	
		}
	}
	if (BossHealth > 0) {
	BossDead = false;
	}
	if (BossHealth <= 0) {
	BossDead = true;
	}
	if (switchBoss7 == 0 && BossDead) {
	wave = 8;
	miniBossShip = 1;
	localStorage && (localStorage.Ms = miniBossShip);
	switchBoss7 = 1;
	money += 200;
	}
	switch (ExplosionCycle) {
		case 0:
		Explosion.color = "explosion_frame_1";
		Explosion_2.color = "explosion_frame_1";
		Explosion_3.color = "explosion_frame_1";
		Explosion_4.color = "explosion_frame_1";
		Explosion_5.color = "explosion_frame_1";
		break;
		case 1:
		Explosion.color = "explosion_frame_2";
		Explosion_2.color = "explosion_frame_2";
		Explosion_3.color = "explosion_frame_2";
		Explosion_4.color = "explosion_frame_2";
		Explosion_5.color = "explosion_frame_2";
		break;
		case 2:
		Explosion.color = "explosion_frame_3";
		Explosion_2.color = "explosion_frame_3";
		Explosion_3.color = "explosion_frame_3";
		Explosion_4.color = "explosion_frame_3";
		Explosion_5.color = "explosion_frame_3";
		break;
		case 3:
		Explosion.color = "explosion_frame_4";
		Explosion_2.color = "explosion_frame_4";
		Explosion_3.color = "explosion_frame_4";
		Explosion_4.color = "explosion_frame_4";
		Explosion_5.color = "explosion_frame_4";
		break;
		case 4:
		Explosion.color = "explosion_frame_5";
		Explosion_2.color = "explosion_frame_5";
		Explosion_3.color = "explosion_frame_5";
		Explosion_4.color = "explosion_frame_5";
		Explosion_5.color = "explosion_frame_5";
		break;
		case 5:
		Explosion.color = "explosion_frame_6";
		Explosion_2.color = "explosion_frame_6";
		Explosion_3.color = "explosion_frame_6";
		Explosion_4.color = "explosion_frame_6";
		Explosion_5.color = "explosion_frame_6";
		break;
		case 6:
		Explosion.color = "explosion_frame_7";
		Explosion_2.color = "explosion_frame_7";
		Explosion_3.color = "explosion_frame_7";
		Explosion_4.color = "explosion_frame_7";
		Explosion_5.color = "explosion_frame_7";
		break;
	}
	if (bossTickCount > ticksPerFrame_1) {
	bossTickCount = 0;
	frameIndex_1 += 1; 
	}
	if (frameIndex_1 == resetframe_1) {
	frameIndex_1 = 0;		
	}
	if (wave == 7 && menu > 0 && upgrademenu == 0 && pauseGame == 0) {
		if (spawnBoss7 == 1) {
		bossTickCount += 1;
		EXCount = 0;
		ExplosionCycle = 0;
		shootSec++;
			if (shootSec >= stopShoot) {
			shootSec = 0;
			bossFire = true;
			}
			if (bossFire == true && bossSheildMode == 0) {
			var __bossBullet = new component(15, 15, "boss_1_bullet", bossWave7.getMidX(), bossWave7.getMidY(), "img");
			_bossBullets.push(__bossBullet);
			bossFire = false;
			}
			for (var i = _bossBullets.length - 1; i >= 0; i--){
				if (_bossBullets[i].x < box.getMidX() - _bossBullets[i].width/2) {
				_bossBullets[i].x += 5;
				}
				if (_bossBullets[i].x > box.getMidX() - _bossBullets[i].width/2) {
				_bossBullets[i].x -= 5;
				}
				if (_bossBullets[i].y < box.getMidY() - _bossBullets[i].width/2) {
				_bossBullets[i].y += 5;
				}
				if (_bossBullets[i].y > box.getMidY() - _bossBullets[i].width/2) {
				_bossBullets[i].y -= 5;
				}
			}
			switch (frameIndex_1) {
				case 0:
					if (bossWave7.x > Boss7_Pos2_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = -2;
							break;
							case 1:
							bossWave7.speedX = -1;
							break;
						}
					}
					if (bossWave7.x < Boss7_Pos2_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = 2;
							break;
							case 1:
							bossWave7.speedX = 1;
							break;
						}
					}
					if (bossWave7.x == Boss7_Pos2_X) {
					bossWave7.speedX = 0;
					}
					if (bossWave7.y > Boss7_Pos2_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = -2;
							break;
							case 1:
							bossWave7.speedY = -1;
							break;
						}
					}
					if (bossWave7.y < Boss7_Pos2_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = 2;
							break;
							case 1:
							bossWave7.speedY = 1;
							break;
						}
					}
					if (bossWave7.y == Boss7_Pos2_Y) {
					bossWave7.speedY = 0;
					}
				break;
				case 1:
					if (bossWave7.x > Boss7_Pos3_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = -2;
							break;
							case 1:
							bossWave7.speedX = -1;
							break;
						}
					}
					if (bossWave7.x < Boss7_Pos3_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = 2;
							break;
							case 1:
							bossWave7.speedX = 1;
							break;
						}
					}
					if (bossWave7.x == Boss7_Pos3_X) {
					bossWave7.speedX = 0;
					}
					if (bossWave7.y > Boss7_Pos3_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = -2;
							break;
							case 1:
							bossWave7.speedY = -1;
							break;
						}
					}
					if (bossWave7.y < Boss7_Pos3_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = 2;
							break;
							case 1:
							bossWave7.speedY = 1;
							break;
						}
					}
					if (bossWave7.y == Boss7_Pos3_Y) {
					bossWave7.speedY = 0;
					}
				break;
				case 2:
					if (bossWave7.x > Boss7_Pos4_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = -2;
							break;
							case 1:
							bossWave7.speedX = -1;
							break;
						}
					}
					if (bossWave7.x < Boss7_Pos4_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = 2;
							break;
							case 1:
							bossWave7.speedX = 1;
							break;
						}
					}
					if (bossWave7.x == Boss7_Pos4_X) {
					bossWave7.speedX = 0;
					}
					if (bossWave7.y > Boss7_Pos4_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = -2;
							break;
							case 1:
							bossWave7.speedY = -1;
							break;
						}
					}
					if (bossWave7.y < Boss7_Pos4_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = 2;
							break;
							case 1:
							bossWave7.speedY = 1;
							break;
						}
					}
					if (bossWave7.y == Boss7_Pos4_Y) {
					bossWave7.speedY = 0;
					}
				break;
				case 3:
					if (bossWave7.x > Boss7_Pos5_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = -2;
							break;
							case 1:
							bossWave7.speedX = -1;
							break;
						}
					}
					if (bossWave7.x < Boss7_Pos5_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = 2;
							break;
							case 1:
							bossWave7.speedX = 1;
							break;
						}
					}
					if (bossWave7.x == Boss7_Pos5_X) {
					bossWave7.speedX = 0;
					}
					if (bossWave7.y > Boss7_Pos5_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = -2;
							break;
							case 1:
							bossWave7.speedY = -1;
							break;
						}
					}
					if (bossWave7.y < Boss7_Pos5_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = 2;
							break;
							case 1:
							bossWave7.speedY = 1;
							break;
						}
					}
					if (bossWave7.y == Boss7_Pos5_Y) {
					bossWave7.speedY = 0;
					}
				break;
				case 4:
					if (bossWave7.x > Boss7_Start_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = -2;
							break;
							case 1:
							bossWave7.speedX = -1;
							break;
						}
					}
					if (bossWave7.x < Boss7_Start_X) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedX = 2;
							break;
							case 1:
							bossWave7.speedX = 1;
							break;
						}
					}
					if (bossWave7.x == Boss7_Start_X) {
					bossWave7.speedX = 0;
					}
					if (bossWave7.y > Boss7_Start_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = -2;
							break;
							case 1:
							bossWave7.speedY = -1;
							break;
						}
					}
					if (bossWave7.y < Boss7_Start_Y) {
						switch (startTime_1) {
							case 0:
							bossWave7.speedY = 2;
							break;
							case 1:
							bossWave7.speedY = 1;
							break;
						}
					}
					if (bossWave7.y == Boss7_Start_Y) {
					bossWave7.speedY = 0;
					}
				break; 
			}
			if (bullbox.crashWith(bossWave7) && BossHealth > 0 && fire > 0) {
				if (bossSheildMode == 0) {
				BossHealth -= PlayerDamageDeal;
				}
			fire = 0;
			}
		}
		if (spawnBoss7 == 0 && pauseGame == 0) {
		EXCount += 1;
			if (EXCount >= 12) {
			ExplosionCycle++;
			EXCount = 0;
			}
			if (ExplosionCycle > MaxFrame) {
			spawnBoss7 = 1;
			}
		} 
	}
}

var sidebad1 = 0;
var touchwallrightbad1 = 0;
var touchwallleftbad1 = 0;
var touchwallupbad1 = 0;
var touchwalldownbad1 = 0;
var badspeedai1 = 1;
var negbadspeedai1 = -1;
var badhurtspeedai1 = 1.5;
var negbadhurtspeedai1 = -1.5;
function badai1() {
badguypic1.x = badguy1.x;
badguypic1.y = badguy1.y;
badguy1healthbar.x = badguy1.x - 12;
badguy1healthbar.y = badguy1.y - 8;
badguy1healthbar.color = badHealthBarColor;
badguy1healthbar.width = Badhealth1 / 2;
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0 && wave < 5) {
		if (BadDeath > 0) {
			if (badguy1.x > badpos1.x) {
			badguy1.speedX = -5;
			}
			if (badguy1.x < badpos1.x) {
			badguy1.speedX = 5;
			}
			if (badguy1.crashWith(badpos1)) {
			badguy1.speedY = 0;
			badguy1.speedX = 0;
			Badhealth1 = 100;
			BadDeath = 0;
			badspeedai1 = 1;
			negbadspeedai1 = -1;
			badhurtspeedai1 = 1.5;
			negbadhurtspeedai1 = -1.5;
			startTime = 0;
			}
			if (badguy1.y > badpos1.y) {
			badguy1.speedY = -5;
			}
			if (badguy1.y < badpos1.y) {
			badguy1.speedY = 5;
			}
		}
		if (BadDeath < 1) {
			if (Badhealth1 <= 100) {
			badHealthBarColor = "green";
			}
			if (Badhealth1 <= 75) {
			badHealthBarColor = "yellow";
			}
			if (Badhealth1 <= 50) {
			badHealthBarColor = "orange";
			}
			if (Badhealth1 <= 25) {
			badHealthBarColor = "red";
			}
			if (!badguy1.crashWith(wallright) && !badguy1.crashWith(wallleft) && !badguy1.crashWith(wall3) && !badguy1.crashWith(wall4)) {
				if (badguy1.x > box.x + badguy1.width) {
				badguy1.speedX = negbadspeedai1;
					if (Badhealth1 <= 50) {
					badguy1.speedX = negbadhurtspeedai1;
					}
				}
				if (badguy1.x <= box.x + badguy1.width && badguy1.x + badguy1.width >= box.x) {
				badguy1.speedX = 0;
				}
				if (badguy1.x + badguy1.width < box.x) {
				badguy1.speedX = badspeedai1;
					if (Badhealth1 <= 50) {
					badguy1.speedX = badhurtspeedai1;
					}
				}
				if (badguy1.y > box.y + badguy1.height) {
				badguy1.speedY = negbadspeedai1;
					if (Badhealth1 <= 50) {
					badguy1.speedY = negbadhurtspeedai1;
					}
				}
				if (badguy1.y <= box.y + badguy1.height && badguy1.y + badguy1.height >= box.y) {
				badguy1.speedY = 0;
				}
				if (badguy1.y + badguy1.height < box.y) {
				badguy1.speedY = badspeedai1;
					if (Badhealth1 <= 50) {
					badguy1.speedY = badhurtspeedai1;
					}
				}
			}
			if (box.crashWith(badguy1) && playerHealth > 0) {
			playerHealth -= Bad1DamageDeal;
			}
			if (weapon == 1 && bullbox.crashWith(badguy1) && fire > 0 && startTime == 0) {
			startTime = 1;
			}
			if (startTime != 0) {
			badspeedai1 = 0.1;
			negbadspeedai1 = -0.1;
			badhurtspeedai1 = 0.2;
			negbadhurtspeedai1 = -0.2;
			} else {
			badspeedai1 = 1;
			negbadspeedai1 = -1;
			badhurtspeedai1 = 1.5;
			negbadhurtspeedai1 = -1.5;
			}
		}
	}
}

var BadDeath2 = 1;
var Badhealth2 = 0;
var Bad2DamageDeal = 0.1;
function badboxspawn2() {
	switch (difficulty) {
		case 0:
		Bad2DamageDeal = 0.1;
		break;
		case 1:
		Bad2DamageDeal = 0.2;
		break;
		case 2:
		Bad2DamageDeal = 0.5;
		break;
	}
	if (wave < 7 && wave > 1) {
		if (badguy2.crashWith(bullbox) && Badhealth2 >= 0 && fire > 0) {
		Badhealth2 -= PlayerDamageDeal;
		fire = 0;
		}
		if (Badhealth2 > 0) {
		BadDeath2 = 0;
		}
		if (Badhealth2 <= 0) {
		BadDeath2 = 1;
		Badhealth2 = 0;
		}
	}
}

var sidebad2 = 0;
var touchwallrightbad2 = 0;
var touchwallleftbad2 = 0;
var touchwallupbad2 = 0;
var touchwalldownbad2 = 0;
var badspeedai2 = 1;
var negbadspeedai2 = -1;
var badhurtspeedai2 = 1.5;
var negbadhurtspeedai2 = -1.5;
function badai2() {
badguypic2.x = badguy2.x;
badguypic2.y = badguy2.y;
badguy1healthbar2.x = badguy2.x - 12;
badguy1healthbar2.y = badguy2.y - 8;
badguy1healthbar2.color = badHealthBarColor2;
badguy1healthbar2.width = Badhealth2 / 2;
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0 && wave > 1 && wave < 7) {
		if (BadDeath2 > 0) {
			if (badguy2.x > badpos2.x) {
			badguy2.speedX = -5;
			}
			if (badguy2.x < badpos2.x) {
			badguy2.speedX = 5;
			}
			if (badguy2.crashWith(badpos2)) {
			badguy2.speedY = 0;
			badguy2.speedX = 0;
			Badhealth2 = 100;
			BadDeath2 = 0;
			badspeedai2 = 1;
			negbadspeedai2 = -1;
			badhurtspeedai2 = 1.5;
			negbadhurtspeedai2 = -1.5;
			startTime2 = 0;
			}
			if (badguy2.y > badpos2.y) {
			badguy2.speedY = -5;
			}
			if (badguy2.y < badpos2.y) {
			badguy2.speedY = 5;
			}
		}
		if (BadDeath2 < 1) {
			if (Badhealth2 <= 100) {
			badHealthBarColor2 = "green";
			}
			if (Badhealth2 <= 75) {
			badHealthBarColor2 = "yellow";
			}
			if (Badhealth2 <= 50) {
			badHealthBarColor2 = "orange";
			}
			if (Badhealth2 <= 25) {
			badHealthBarColor2 = "red";
			}
			if (!badguy2.crashWith(wallright) && !badguy2.crashWith(wallleft) && !badguy2.crashWith(wall3) && !badguy2.crashWith(wall4)) {
				if (wave < 5) {
					if (!badguy2.crashWith(wallhouse3) && !badguy2.crashWith(wallhouse2_2) && !badguy2.crashWith(wallhouse7) && !badguy2.crashWith(wallhouse3_2) && !badguy2.crashWith(wallhouse2) && !badguy2.crashWith(wallhouse5) && !badguy2.crashWith(wallhouse1) && !badguy2.crashWith(wallhouse4_2) && !badguy2.crashWith(wallhouse6_2) && !badguy2.crashWith(wallhouse1_2) && !badguy2.crashWith(wallhouse4) && !badguy2.crashWith(wallhouse6) && !badguy2.crashWith(wall2house3) && !badguy2.crashWith(wall2house2_2) && !badguy2.crashWith(wall2house7) && !badguy2.crashWith(wall2house3_2) && !badguy2.crashWith(wall2house2) && !badguy2.crashWith(wall2house5) && !badguy2.crashWith(wall2house1) && !badguy2.crashWith(wall2house4_2) && !badguy2.crashWith(wall2house6_2) && !badguy2.crashWith(wall2house1_2) && !badguy2.crashWith(wall2house4) && !badguy2.crashWith(wall2house6) && !badguy2.crashWith(wallhouse8) && !badguy2.crashWith(wall2house8)) {
						if (badguy2.x > box.x + badguy2.width) {
						badguy2.speedX = negbadspeedai2;
							if (Badhealth2 <= 50) {
							badguy2.speedX = negbadhurtspeedai2;
							}
						}
						if (badguy2.x <= box.x + badguy2.width && badguy2.x + badguy2.width >= box.x) {
						badguy2.speedX = 0;
						}
						if (badguy2.x + badguy2.width < box.x) {
						badguy2.speedX = badspeedai2;
							if (Badhealth2 <= 50) {
							badguy2.speedX = badhurtspeedai2;
							}
						}
						if (badguy2.y > box.y + badguy2.height) {
						badguy2.speedY = negbadspeedai2;
							if (Badhealth2 <= 50) {
							badguy2.speedY = negbadhurtspeedai2;
							}
						}
						if (badguy2.y <= box.y + badguy2.height && badguy2.y + badguy2.height >= box.y) {
						badguy2.speedY = 0;
						}
						if (badguy2.y + badguy2.height < box.y) {
						badguy2.speedY = badspeedai2;
							if (Badhealth2 <= 50) {
							badguy2.speedY = badhurtspeedai2;
							}
						}
					}
				}
				if (wave < 7 && wave > 4) {
					if (badguy2.x > box.x + badguy2.width) {
					badguy2.speedX = negbadspeedai2;
						if (Badhealth2 <= 50) {
						badguy2.speedX = negbadhurtspeedai2;
						}
					}
					if (badguy2.x + badguy2.width < box.x) {
					badguy2.speedX = badspeedai2;
						if (Badhealth2 <= 50) {
						badguy2.speedX = badhurtspeedai2;
						}
					}
					if (badguy2.x <= box.x + badguy2.width && badguy2.x + badguy2.width >= box.x) {
					badguy2.speedX = 0;
					}
					if (badguy2.y > box.y + badguy2.height) {
					badguy2.speedY = negbadspeedai2;
						if (Badhealth2 <= 50) {
						badguy2.speedY = negbadhurtspeedai2;
						}
					}
					if (badguy2.y <= box.y + badguy2.height && badguy2.y + badguy2.height >= box.y) {
					badguy2.speedY = 0;
					}
					if (badguy2.y + badguy2.height < box.y) {
					badguy2.speedY = badspeedai2;
						if (Badhealth2 <= 50) {
						badguy2.speedY = badhurtspeedai2;
						}
					}
				}
			}
			if (box.crashWith(badguy2) && playerHealth > 0) {
			playerHealth -= Bad2DamageDeal;
			}
			if (weapon == 1 && bullbox.crashWith(badguy2) && fire > 0 && startTime2 == 0) {
			startTime2 = 1;
			}
			if (startTime2 != 0) {
			badspeedai2 = 0.1;
			negbadspeedai2 = -0.1;
			badhurtspeedai2 = 0.2;
			negbadhurtspeedai2 = -0.2;
			} else {
			badspeedai2 = 1;
			negbadspeedai2 = -1;
			badhurtspeedai2 = 1.5;
			negbadhurtspeedai2 = -1.5;
			}
		}
	}
}

var Badhealth3 = 0;
var Bad3DamageDeal = 0.05;
function badtriboxspawn() {
	switch (difficulty) {
		case 0:
		Bad3DamageDeal = 0.05;
		break;
		case 1:
		Bad3DamageDeal = 0.07;
		break;
		case 2:
		Bad3DamageDeal = 0.1;
		break;
	}
	if (wave > 4 && wave < 7) {
		if (bullbox.crashWith(tribox) && Badhealth3 >= 0 && fire > 0) {
		Badhealth3 -= PlayerDamageDeal;
		fire = 0;
		}
		if (Badhealth3 > 0) {
		BadDeath3 = 0;
		}
		if (Badhealth3 <= 0) {
		BadDeath3 = 1;
		Badhealth3 = 0;
		}
	}
}

var BadDeath3 = 1;
var sidebad3 = 0;
var touchwallrightbad3 = 0;
var touchwallleftbad3 = 0;
var touchwallupbad3 = 0;
var touchwalldownbad3 = 0;
var badspeedai3 = 1;
var negbadspeedai3 = -1;
var badhurtspeedai3 = 1.6;
var negbadhurtspeedai3 = -1.6;
function triangleAI() {
trienemypic.x = tribox.x;
trienemypic.y = tribox.y;
badguy1healthbar4.x = tribox.x - 12;
badguy1healthbar4.y = tribox.y - 8;
badguy1healthbar4.color = badHealthBarColor4;
badguy1healthbar4.width = Badhealth3 / 2;
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0 && wave > 4 && wave < 7) {
		if (BadDeath3 > 0) {
			if (tribox.x > tripos1.x) {
			tribox.speedX = -5;
			}
			if (tribox.x < tripos1.x) {
			tribox.speedX = 5;
			}
			if (tribox.crashWith(tripos1)) {
			tribox.speedY = 0;
			tribox.speedX = 0;
			Badhealth3 = 120;
			BadDeath3 = 0;
			badspeedai3 = 1;
			negbadspeedai3 = -1;
			badhurtspeedai3 = 1.6;
			negbadhurtspeedai3 = -1.6;
			startTime3 = 0;
			}
			if (tribox.y > tripos1.y) {
			tribox.speedY = -5;
			}
			if (tribox.y < tripos1.y) {
			tribox.speedY = 5;
			}
		}
		if (BadDeath3 < 1) {
			if (Badhealth3 <= 120) {
			badHealthBarColor4 = "green";
			}
			if (Badhealth3 <= 75) {
			badHealthBarColor4 = "yellow";
			}
			if (Badhealth3 <= 50) {
			badHealthBarColor4 = "orange";
			}
			if (Badhealth3 <= 25) {
			badHealthBarColor4 = "red";
			}
			if (!tribox.crashWith(wallright) && !tribox.crashWith(wallleft) && !tribox.crashWith(wall3) && !tribox.crashWith(wall4)) {
				if (tribox.x > box.x + tribox.width) {
				sidebad3 = 0;
				}
				if (tribox.x + tribox.width < box.x) {
				sidebad3 = 1;
				}
				if (tribox.x > box.x + tribox.width && sidebad3 == 0) {
				tribox.speedX = negbadspeedai3;
					if (Badhealth3 <= 50) {
					tribox.speedX = negbadhurtspeedai3;
					}
				}
				if (tribox.x + tribox.width < box.x && sidebad3 == 1) {
				tribox.speedX = badspeedai3;
					if (Badhealth3 <= 50) {
					tribox.speedX = badhurtspeedai3;
					}
				}
				if (tribox.y > box.y + tribox.height) {
				tribox.speedY = negbadspeedai3;
					if (Badhealth3 <= 50) {
					tribox.speedY = negbadhurtspeedai3;
					}
				}
				if (tribox.y + tribox.height < box.y) {
				tribox.speedY = badspeedai3;
					if (Badhealth3 <= 50) {
					tribox.speedY = badhurtspeedai3;
					}
				}
			}
			if (box.crashWith(tribox) && playerHealth > 0) {
			playerHealth -= Bad3DamageDeal;
			}
			if (weapon == 1 && bullbox.crashWith(tribox) && fire > 0 && startTime3 == 0) {
			startTime3 = 1;
			}
			if (startTime3 != 0) {
			badspeedai3 = 0.3;
			negbadspeedai3 = -0.3;
			badhurtspeedai3 = 0.5;
			negbadhurtspeedai3 = -0.5;
			} else {
			badspeedai3 = 1;
			negbadspeedai3 = -1;
			badhurtspeedai3 = 1.6;
			negbadhurtspeedai3 = -1.6;
			}
		}
	}
}

var Badhealth5 = 0;
var Bad5DamageDeal = 2;
function badxboxspawn() {
	switch (difficulty) {
		case 0:
		Bad5DamageDeal = 0.02;
		break;
		case 1:
		Bad5DamageDeal = 0.07;
		break;
		case 2:
		Bad5DamageDeal = 0.12;
		break;
	}
	if (wave > 5 && wave < 7) {
		if (bullbox.crashWith(xbox1) && Badhealth5 >= 0 && fire > 0) {
		Badhealth5 -= PlayerDamageDeal;
		fire = 0;
		}
		if (Badhealth5 > 0) {
		BadDeath5 = 0;
		}
		if (Badhealth5 <= 0) {
		BadDeath5 = 1;
		Badhealth5 = 0;
		}
	}
}

var BadDeath5 = 1;
var sidebad5 = 0;
var touchwallrightbad5 = 0;
var touchwallleftbad5 = 0;
var touchwallupbad5 = 0;
var touchwalldownbad5 = 0;
var badspeedai5 = 1.6;
var negbadspeedai5 = -1.6;
var badhurtspeedai5 = 2;
var negbadhurtspeedai5 = -2;
function xAI() {
xenemypic1.x = xbox1.x;
xenemypic1.y = xbox1.y;
badguy1healthbar5.x = xbox1.x - 12;
badguy1healthbar5.y = xbox1.y - 8;
badguy1healthbar5.color = badHealthBarColor5;
badguy1healthbar5.width = Badhealth5 / 2;
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0 && wave == 6) {
		if (BadDeath5 > 0) {
			if (xbox1.x > xpos1.x) {
			xbox1.speedX = -5;
			}
			if (xbox1.x < xpos1.x) {
			xbox1.speedX = 5;
			}
			if (xbox1.crashWith(xpos1)) {
			xbox1.speedY = 0;
			xbox1.speedX = 0;
			Badhealth5 = 100;
			BadDeath5 = 0;
			badspeedai5 = 1.6;
			negbadspeedai5 = -1.6;
			badhurtspeedai5 = 2;
			negbadhurtspeedai5 = -2;
			startTime7 = 0;
			}
			if (xbox1.y > xpos1.y) {
			xbox1.speedY = -5;
			}
			if (xbox1.y < xpos1.y) {
			xbox1.speedY = 5;
			}
		}
		if (BadDeath5 < 1) {
			if (Badhealth5 <= 120) {
			badHealthBarColor5 = "green";
			}
			if (Badhealth5 <= 75) {
			badHealthBarColor5 = "yellow";
			}
			if (Badhealth5 <= 50) {
			badHealthBarColor5 = "orange";
			}
			if (Badhealth5 <= 25) {
			badHealthBarColor5 = "red";
			}
			if (!xbox1.crashWith(wallright) && !xbox1.crashWith(wallleft) && !xbox1.crashWith(wall3) && !xbox1.crashWith(wall4)) {
				if (xbox1.x > box.x + xbox1.width) {
				sidebad5 = 0;
				}
				if (xbox1.x + xbox1.width < box.x) {
				sidebad5 = 1;
				}
				if (xbox1.x > box.x + xbox1.width && sidebad5 == 0) {
				xbox1.speedX = negbadspeedai5;
					if (Badhealth5 <= 50) {
					xbox1.speedX = negbadhurtspeedai5;
					}
				}
				if (xbox1.x + xbox1.width < box.x && sidebad5 == 1) {
				xbox1.speedX = badspeedai5;
					if (Badhealth5 <= 50) {
					xbox1.speedX = badhurtspeedai5;
					}
				}
				if (xbox1.y > box.y + xbox1.height) {
				xbox1.speedY = negbadspeedai5;
					if (Badhealth5 <= 50) {
					xbox1.speedY = negbadhurtspeedai5;
					}
				}
				if (xbox1.y + xbox1.height < box.y) {
				xbox1.speedY = badspeedai5;
					if (Badhealth5 <= 50) {
					xbox1.speedY = badhurtspeedai5;
					}
				}
			}
			if (box.crashWith(xbox1) && playerHealth > 0) {
			playerHealth -= Bad5DamageDeal;
			}
			if (weapon == 1 && bullbox.crashWith(xbox1) && fire > 0 && startTime7 == 0) {
			startTime7 = 1;
			}
			if (startTime7 == 0) {
			badspeedai5 = 1.6;
			negbadspeedai5 = -1.6;
			badhurtspeedai5 = 2;
			negbadhurtspeedai5 = -2;
			} else {
			badspeedai5 = 0.5;
			negbadspeedai5 = -0.5;
			badhurtspeedai5 = 0.7;
			negbadhurtspeedai5 = -0.7;
			}
		}
	}
}

var BadDeath4 = 1;
var Badhealth4 = 0;
var Bad4DamageDeal = 0.13;
function badrecspawn1() {
	switch (difficulty) {
		case 0:
		Bad4DamageDeal = 0.10;
		break;
		case 1:
		Bad4DamageDeal = 0.13;
		break;
		case 2:
		Bad4DamageDeal = 0.16;
		break;
	}
	if (wave < 5 && wave > 2) {
		if (recbox1.crashWith(bullbox) && Badhealth4 >= 0 && fire > 0) {
		Badhealth4 -= PlayerDamageDeal;
		fire = 0;
		}
		if (Badhealth4 > 0) {
		BadDeath4 = 0;
		}
		if (Badhealth4 <= 0) {
		BadDeath4 = 1;
		Badhealth4 = 0;
		}
	}
}

var sidebad4 = 0;
var touchwallrightbad4 = 0;
var touchwallleftbad4 = 0;
var touchwallupbad4 = 0;
var touchwalldownbad4 = 0;
var badspeedai4 = 1.2;
var negbadspeedai4 = -1.2;
var badhurtspeedai4 = 1.6;
var negbadhurtspeedai4 = -1.6;
function badrecai1() {
recenemypic1.x = recbox1.x;
recenemypic1.y = recbox1.y;
badguy1healthbar3.x = recbox1.x - 16;
badguy1healthbar3.y = recbox1.y - 8;
badguy1healthbar3.color = badHealthBarColor3;
badguy1healthbar3.width = Badhealth4 / 2;
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0 && wave > 2 && wave < 5) {
		if (BadDeath4 > 0) {
			if (recbox1.x > recpos1.x) {
			recbox1.speedX = -5;
			}
			if (recbox1.x < recpos1.x) {
			recbox1.speedX = 5;
			}
			if (recbox1.crashWith(recpos1)) {
			recbox1.speedY = 0;
			recbox1.speedX = 0;
			Badhealth4 = 120;
			BadDeath4 = 0;
			badspeedai4 = 1;
			negbadspeedai4 = -1;
			badhurtspeedai4 = 1.5;
			negbadhurtspeedai4 = -1.5;
			startTime4 = 0;
			}
			if (recbox1.y > recpos1.y) {
			recbox1.speedY = -5;
			}
			if (recbox1.y < recpos1.y) {
			recbox1.speedY = 5;
			}
		}
		if (BadDeath4 < 1) {
			if (Badhealth4 <= 120) {
			badHealthBarColor3 = "green";
			}
			if (Badhealth4 <= 75) {
			badHealthBarColor3 = "yellow";
			}
			if (Badhealth4 <= 50) {
			badHealthBarColor3 = "orange";
			}
			if (Badhealth4 <= 25) {
			badHealthBarColor3 = "red";
			}
			if (!recbox1.crashWith(wallright) && !recbox1.crashWith(wallleft) && !recbox1.crashWith(wall3) && !recbox1.crashWith(wall4) && !recbox1.crashWith(wallhouse3) && !recbox1.crashWith(wallhouse2_2) && !recbox1.crashWith(wallhouse7) && !recbox1.crashWith(wallhouse3_2) && !recbox1.crashWith(wallhouse2) && !recbox1.crashWith(wallhouse5) && !recbox1.crashWith(wallhouse1) && !recbox1.crashWith(wallhouse4_2) && !recbox1.crashWith(wallhouse6_2) && !recbox1.crashWith(wallhouse1_2) && !recbox1.crashWith(wallhouse4) && !recbox1.crashWith(wallhouse6) && !recbox1.crashWith(wall2house3) && !recbox1.crashWith(wall2house2_2) && !recbox1.crashWith(wall2house7) && !recbox1.crashWith(wall2house3_2) && !recbox1.crashWith(wall2house2) && !recbox1.crashWith(wall2house5) && !recbox1.crashWith(wall2house1) && !recbox1.crashWith(wall2house4_2) && !recbox1.crashWith(wall2house6_2) && !recbox1.crashWith(wall2house1_2) && !recbox1.crashWith(wall2house4) && !recbox1.crashWith(wall2house6)) {
				if (recbox1.x > box.x + recbox1.width) {
				recbox1.speedX = negbadspeedai4;
					if (Badhealth4 <= 50) {
					recbox1.speedX = negbadhurtspeedai4;
					}
				}
				if (recbox1.x <= box.x + recbox1.width && recbox1.x + recbox1.width >= box.x) {
				recbox1.speedX = 0;
				}
				if (recbox1.x + recbox1.width < box.x) {
				recbox1.speedX = badspeedai4;
					if (Badhealth4 <= 50) {
					recbox1.speedX = badhurtspeedai4;
					}
				}
				if (recbox1.y > box.y + recbox1.height) {
				recbox1.speedY = negbadspeedai4;
					if (Badhealth4 <= 50) {
					recbox1.speedY = negbadhurtspeedai4;
					}
				}
				if (recbox1.y <= box.y + recbox1.height && recbox1.y + recbox1.height >= box.y) {
				recbox1.speedY = 0;
				}
				if (recbox1.y + recbox1.height < box.y) {
				recbox1.speedY = badspeedai4;
					if (Badhealth4 <= 50) {
					recbox1.speedY = badhurtspeedai4;
					}
				}
			}
			if (box.crashWith(recbox1) && playerHealth > 0) {
			playerHealth -= Bad4DamageDeal;
			}
			if (weapon == 1 && bullbox.crashWith(recbox1) && fire > 0 && startTime4 == 0) {
			startTime4 = 1;
			}
			if (startTime4 == 0) {
			badspeedai4 = 1.2;
			negbadspeedai4 = -1.2;
			badhurtspeedai4 = 1.6;
			negbadhurtspeedai4 = -1.6;
			} else {
			badspeedai4 = 0.15;
			negbadspeedai4 = -0.15;
			badhurtspeedai4 = 0.25;
			negbadhurtspeedai4 = -0.25;
			}
		}
	}
}
	
var autoUpVar = 0;
var autoDownVar = 0;
var autoLeftVar = 0;
var autoRightVar = 0;
function autoUp() {
	if (upgrademenu == 0) {
	autoUpVar = 1;
	}
}
	
function autoDown() {
	if (upgrademenu == 0) {
	autoDownVar = 1;
	}
}
	
function autoLeft() {
	if (upgrademenu == 0) {
	autoLeftVar = 1;
	}
}
	
function autoRight() {
	if (upgrademenu == 0) {
	autoRightVar = 1;
	}
}
	
function clearAutoU() {
autoUpVar = 0;
}
	
function clearAutoD() {
autoDownVar = 0;
}

function clearAutoL() {
autoLeftVar = 0;
}

function clearAutoR() {
autoRightVar = 0;
}

var startTimer = 0;
var coolTick = 0;
function fireCoolDown() {
	if (startTimer == 1) {
	coolTick++;
		if (coolTick >= WeaponCoolDown) {
		startTimer = 0;	
		}
	}
	if (startTimer == 0) {
	coolTick = 0;
	}
}

var fire = 0;
var fireR = 0;
var fireL = 0;
var fireU = 0;
var fireD = 0;
var ammocon = 1;
function shootUp() {
	if (Death1 == 0 && fire == 0 && startTimer == 0 && ammo > 0) {
	fire = 1;
	fireU = 1;
	startTimer = 1;
	ammo -= ammocon;
		if (menu == 0) {
		starttime = 1;
		}
		if (menu > 0 && frameIndex5 == 0) {
		firesoundstart = 1;
		}
	}
}
	
function shootDown() {
	if (Death1 == 0 && fire == 0 && startTimer == 0 && ammo > 0) {
	fire = 1;
	fireD = 1;
	startTimer = 1;
	ammo -= ammocon;
		if (menu == 0) {
		starttime = 1;
		}
		if (menu > 0 && frameIndex5 == 0) {
		firesoundstart = 1;
		}
	}
}
	
function shootLeft() {
	if (Death1 == 0 && fire == 0 && startTimer == 0 && ammo > 0) {
	fire = 1;
	fireL = 1;
	startTimer = 1;
	ammo -= ammocon;
		if (menu == 0) {
		starttime = 1;
		}
		if (menu > 0 && frameIndex5 == 0) {
		firesoundstart = 1;
		}
	}
}
	
function shootRight() {
	if (Death1 == 0 && fire == 0 && startTimer == 0 && ammo > 0) {
	fire = 1;
	fireR = 1;
	startTimer = 1;
	ammo -= ammocon;
		if (menu == 0) {
		starttime = 1;
		}
		if (menu > 0 && frameIndex5 == 0) {
		firesoundstart = 1;
		}
	}
}

var tribullettime = 0;
var tribulletfirerate = 5;
var tribullrange = 3;
var trifire = 0;
var trisidebad = 0;
var TriBullDamageDeal = 2;
function tribulletai() {
tribpic.x = tribbox.x;
tribpic.y = tribbox.y;
	switch (difficulty) {
		case 0:
		TriBullDamageDeal = 2;
		break;
		case 1:
		TriBullDamageDeal = 3;
		break;
		case 2:
		TriBullDamageDeal = 5;
		break;
	}
	if (trifire == 0) {
	tribpic.angle = 0;
	tribbox.x = tribox.x + tribox.width/2 - tribbox.width/2;
	tribbox.y = tribox.y + tribox.height/2 - tribbox.height/2;
	}
	if (menu == 2 && upgrademenu == 0 && pauseGame == 0 && Death1 == 0) {
		if (trifire == 0) {
			if (tribox.crashWith(detectbox)) {
			tribullettime += 0.5;	
			}	
		} else {
		tribpic.angle += 0.08;
			if (-10 + tribbox.x > box.x) {
			tribbox.speedX = -tribullrange;
			} 
			if (-10 + tribbox.x < box.x) {
			tribbox.speedX = tribullrange;
			}
			if (-10 + tribbox.y > box.y) {
			tribbox.speedY = -tribullrange;
			}
			if (-10 + tribbox.y < box.y) {
			tribbox.speedY = tribullrange;
			}
			if (wave > 4 && wave < 7 && tribbox.crashWith(box) && playerHealth > 0) {
			playerHealth -= TriBullDamageDeal;
			trifire = 0;
			}
		} 
		if (tribullettime >= tribulletfirerate) {
		tribullettime = 0;
		trifire = 1;
		}
		if (tribbox.crashWith(wallright) || tribbox.crashWith(wallleft) || tribbox.crashWith(wall3) || tribbox.crashWith(wall4)) {
		trifire = 0;
		}
		if (tribbox.crashWith(wall3house1) || tribbox.crashWith(wall3house1_2) || tribbox.crashWith(wall3house2) || tribbox.crashWith(wall3house2_2) || tribbox.crashWith(wall3house3) || tribbox.crashWith(wall3house3_2) || tribbox.crashWith(wall3house4_4) || tribbox.crashWith(wall3house5_4) || tribbox.crashWith(wall4house1) || tribbox.crashWith(wall4house1_1) || tribbox.crashWith(wall4house2) || tribbox.crashWith(wall4house2_1) || tribbox.crashWith(wall4house3) || tribbox.crashWith(wall4house3_1) || tribbox.crashWith(wall4house4_3) || tribbox.crashWith(wall4house5_3) || tribbox.crashWith(wall4house6_4)) {
		trifire = 0;
		}
	}
}

var starttime = 0;
var timeforbullet = 0;
function resetfire() {
	if (starttime == 1) {
	timeforbullet += 1;
	}
	if (timeforbullet > 100 && menu == 0) {
	menu = 1;
	timeforbullet = 0;
	}
	if (menu > 0) {
	starttime = 0;
	}
}

var bullrange = 3;
var bulletHomeRange = 20;
function bulletai() {
bullcir.radius = bulletHomeRange;
bullcir.x = bullbox.x + bullbox.width/2;
bullcir.y = bullbox.y + bullbox.height/2;
bpic.x = bullbox.x;
bpic.y = bullbox.y;
bpic2.x = bullbox.x;
bpic2.y = bullbox.y;
bpic3.x = bullbox.x;
bpic3.y = bullbox.y;
bpic4.x = bullbox.x;
bpic4.y = bullbox.y;
bpic5.x = bullbox.x;
bpic5.y = bullbox.y;
	if (fire == 0) {
	bullettime = 0;
	bullbox.speedX = 0;
	bullbox.speedY = 0;
	bullbox.x = (box.x + box.width/2) - bullbox.width/2;
	bullbox.y = (box.y + box.height/2) - bullbox.height/2;
	} else {
		if (fireL > 0) {
		bullbox.speedX -= bullrange;
		bullbox.speedY = 0;
		bullettime += 0.5;
		}
		if (fireR > 0) {
		bullbox.speedX += bullrange;
		bullbox.speedY = 0;
		bullettime += 0.5;
		}
		if (fireU > 0) {
		bullbox.speedX = 0;
		bullbox.speedY -= bullrange;
		bullettime += 0.5;
		}
		if (fireD > 0) {
		bullbox.speedX = 0;
		bullbox.speedY += bullrange;
		bullettime += 0.5;
		}
		if (bullettime >= 5) {
		fire = 0;
		fireR = 0;
		fireL = 0;
		fireU = 0;
		fireD = 0;
		bullettime = 0;
		}
	}
	if (bullbox.crashWith(wallright) || bullbox.crashWith(wallleft) || bullbox.crashWith(wall3) || bullbox.crashWith(wall4)) {
	fire = 0;
	}
	if (wave < 5) {
		if (bullbox.crashWith(wallhouse3) || bullbox.crashWith(wallhouse2_2) || bullbox.crashWith(wallhouse7) || bullbox.crashWith(wallhouse3_2) || bullbox.crashWith(wallhouse2) || bullbox.crashWith(wallhouse5) || bullbox.crashWith(wallhouse1) || bullbox.crashWith(wallhouse4_2) || bullbox.crashWith(wallhouse6_2) || bullbox.crashWith(wallhouse1_2) || bullbox.crashWith(wallhouse4) || bullbox.crashWith(wallhouse6) || bullbox.crashWith(wall2house3) || bullbox.crashWith(wall2house2_2) || bullbox.crashWith(wall2house7) || bullbox.crashWith(wall2house3_2) || bullbox.crashWith(wall2house2) || bullbox.crashWith(wall2house5) || bullbox.crashWith(wall2house1) || bullbox.crashWith(wall2house4_2) || bullbox.crashWith(wall2house6_2) || bullbox.crashWith(wall2house1_2) || bullbox.crashWith(wall2house4) || bullbox.crashWith(wall2house6)) {
		fire = 0;
		}
	}
	if (wave >= 5 && wave < 7) {
		if (bullbox.crashWith(wall3house1) || bullbox.crashWith(wall3house1_2) || bullbox.crashWith(wall3house2) || bullbox.crashWith(wall3house2_2) || bullbox.crashWith(wall3house3) || bullbox.crashWith(wall3house3_2) || bullbox.crashWith(wall3house4_4) || bullbox.crashWith(wall3house5_4) || bullbox.crashWith(wall4house1) || bullbox.crashWith(wall4house1_1) || bullbox.crashWith(wall4house2) || bullbox.crashWith(wall4house2_1) || bullbox.crashWith(wall4house3) || bullbox.crashWith(wall4house3_1) || bullbox.crashWith(wall4house4_3) || bullbox.crashWith(wall4house5_3) || bullbox.crashWith(wall4house6_4)) {
		fire = 0;
		}
	}
}

var UI_Shadows = true;
var Level_Shadows = true;
var PlayerShadowsOn = true;
function PlayerShadowHandler(PlayerShipArray, ShadowColor, ShadowBlur, ShadowXOffSetMax, ShadowYOffSetMax) {
this.PlayerShipArray = PlayerShipArray;
this.ShadowColor = ShadowColor;
this.ShadowBlur = ShadowBlur;
this.ShadowXOffSetMax = ShadowXOffSetMax;
this.ShadowYOffSetMax = ShadowYOffSetMax;
	this.update = function() {
		for (let i = 0; i < this.PlayerShipArray.length; i++) {
			if (PlayerShadowsOn) {
			this.PlayerShipArray[i].shadowColor_ = this.ShadowColor;
			this.PlayerShipArray[i].shadowBlur_ = this.ShadowBlur;
				if (up == 1) {
					if (this.PlayerShipArray[i].shadowOffsetY_ < this.ShadowYOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetY_ += 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetY_ >= this.ShadowYOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetY_ = this.ShadowYOffSetMax;
					}
					if (left == 0 && right != 1) {
						if (this.PlayerShipArray[i].shadowOffsetX_ < 0) {
						this.PlayerShipArray[i].shadowOffsetX_ += 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetX_ >= 0) {
						this.PlayerShipArray[i].shadowOffsetX_ = 0;
						}
					}
					if (right == 0 && left != 1) {
						if (this.PlayerShipArray[i].shadowOffsetX_ > 0) {
						this.PlayerShipArray[i].shadowOffsetX_ -= 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetX_ <= 0) {
						this.PlayerShipArray[i].shadowOffsetX_ = 0;
						}
					}
				}
				if (down == 1) {
					if (this.PlayerShipArray[i].shadowOffsetY_ > -this.ShadowYOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetY_ -= 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetY_ <= -this.ShadowYOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetY_ = -this.ShadowYOffSetMax;
					}
					if (left == 0 && right != 1) {
						if (this.PlayerShipArray[i].shadowOffsetX_ < 0) {
						this.PlayerShipArray[i].shadowOffsetX_ += 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetX_ >= 0) {
						this.PlayerShipArray[i].shadowOffsetX_ = 0;
						}
					}
					if (right == 0 && left != 1) {
						if (this.PlayerShipArray[i].shadowOffsetX_ > 0) {
						this.PlayerShipArray[i].shadowOffsetX_ -= 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetX_ <= 0) {
						this.PlayerShipArray[i].shadowOffsetX_ = 0;
						}
					}
				}
				if (left == 1) {
					if (this.PlayerShipArray[i].shadowOffsetX_ < this.ShadowXOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetX_ += 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetX_ >= this.ShadowXOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetX_ = this.ShadowXOffSetMax;
					}
					if (up == 0 && down != 1) {
						if (this.PlayerShipArray[i].shadowOffsetY_ < 0) {
						this.PlayerShipArray[i].shadowOffsetY_ += 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetY_ >= 0) {
						this.PlayerShipArray[i].shadowOffsetY_ = 0;
						}
					}
					if (down == 0 && up != 1) {
						if (this.PlayerShipArray[i].shadowOffsetY_ > 0) {
						this.PlayerShipArray[i].shadowOffsetY_ -= 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetY_ <= 0) {
						this.PlayerShipArray[i].shadowOffsetY_ = 0;
						}
					}
				}
				if (right == 1) {
					if (this.PlayerShipArray[i].shadowOffsetX_ > -this.ShadowXOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetX_ -= 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetX_ <= -this.ShadowXOffSetMax) {
					this.PlayerShipArray[i].shadowOffsetX_ = -this.ShadowXOffSetMax;
					}
					if (up == 0 && down != 1) {
						if (this.PlayerShipArray[i].shadowOffsetY_ < 0) {
						this.PlayerShipArray[i].shadowOffsetY_ += 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetY_ >= 0) {
						this.PlayerShipArray[i].shadowOffsetY_ = 0;
						}
					}
					if (down == 0 && up != 1) {
						if (this.PlayerShipArray[i].shadowOffsetY_ > 0) {
						this.PlayerShipArray[i].shadowOffsetY_ -= 0.05;
						}
						if (this.PlayerShipArray[i].shadowOffsetY_ <= 0) {
						this.PlayerShipArray[i].shadowOffsetY_ = 0;
						}
					}
				}
				if (up == 0 && down == 0 && left == 0 && right == 0) {
					if (this.PlayerShipArray[i].shadowOffsetY_ < 0) {
					this.PlayerShipArray[i].shadowOffsetY_ += 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetY_ > 0) {
					this.PlayerShipArray[i].shadowOffsetY_ -= 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetY_ == 0) {
					this.PlayerShipArray[i].shadowOffsetY_ = 0;
					}
					if (this.PlayerShipArray[i].shadowOffsetX_ < 0) {
					this.PlayerShipArray[i].shadowOffsetX_ += 0.05;
					}
					if (this.PlayerShipArray[i].shadowOffsetX_ == 0) {
					this.PlayerShipArray[i].shadowOffsetX_ = 0;
					}
					if (this.PlayerShipArray[i].shadowOffsetX_ > 0) {
					this.PlayerShipArray[i].shadowOffsetX_ -= 0.05;
					}
				}
			} else {
			this.PlayerShipArray[i].shadowColor_ = "";
			this.PlayerShipArray[i].shadowBlur_ = 0;
			this.PlayerShipArray[i].shadowOffsetY_ = 0;
			this.PlayerShipArray[i].shadowOffsetX_ = 0;
			}
		}
	}
}

var bullettime = 0;
var upE = 0;
var downE = 0;
var leftE = 0;
var rightE = 0;
var lockUpE = 0;
var lockDownE = 0;
var lockLeftE = 0;
var lockRightE = 0;
var up = 0;
var down = 0;
var left = 0;
var right = 0;
function moveUp() {
up = 1;
upE = 1;
lockUpE = 1;
}

function moveDown() {
down = 1;
downE = 1;
lockDownE = 1;
}

function moveLeft() {
left = 1;
leftE = 1;
lockLeftE = 1;
}

function moveRight() {
right = 1;
rightE = 1;
lockRightE = 1;
}

function clearmoveu() {
lockUpE = 0;
	if (upE > 0) {
	up = 0;
	}
}

function clearmoved() {
lockDownE = 0;
	if (downE > 0) {
	down = 0;
	}
}

function clearmovel() {
lockLeftE = 0;
	if (leftE > 0) {
	left = 0;
	}
}

function clearmover() {
lockRightE = 0;
	if (rightE > 0) {
	right = 0;
	}
}

var mutemusic = 0;

var firesoundstart = 0;
var sound = 0
function Play_sound() {
	Music_Volume.innerHTML = "Music: " + music_volume.value + "%";
	Sound_Effects_Volume.innerHTML = "Sound Effects: " + sfx_volume.value + "%";
	if (mutemusic == 0) {
		if (upgrademenu == 0 && Death1 == 0 && wave < 5 && menu > 0 && music_level_1.paused) {
			music_level_1.play();
		}
		if (menu == 0 && Death1 == 0 && music_title.paused) {
			music_title.play();
		}
		if (Death1 > 0 && music_death.paused) {
			music_death.play();
		}
		if (upgrademenu > 0 && Death1 == 0 && music_upgrade_menu.paused) {
			music_upgrade_menu.play();
		}
		if (menu != 0 && wave == 22 && music_warp_zone.paused) {
			music_warp_zone.play();
		}
		if (upgrademenu == 0 && Death1 == 0 && wave > 4 && wave < 7 && menu > 0 && music_level_2.paused) {
			music_level_2.play();
		}
		if (upgrademenu == 0 && Death1 == 0 && wave == 7 && menu > 0 && music_boss_1.paused) {
			music_boss_1.play();
		}
		if (upgrademenu == 0 && wave == 7 && count != 10 && menu > 0 && pauseGame == 0 && spawnBoss7 == 0 && sfx_explosion.paused) {
			sfx_explosion.play();
		}
		if (ammo <= 20/100 * maxAmmo && playerHealth > 0 && sfx_lowammo.paused) {
			sfx_lowammo.play();
		}
		if (fire == 1 && frameIndex5 == 0 && menu > 0 && sfx_firesound.paused) {
			sfx_firesound.play();
		}
	} 
}
	
function Set_volume() {
	if (mutemusic != 0) {
		music_level_1.volume = 0;
		music_level_2.volume = 0;
		music_boss_1.volume = 0;
		music_title.volume = 0;
		music_upgrade_menu.volume = 0;
		music_warp_zone.volume = 0;
		music_death.volume = 0;
		sfx_firesound.volume = 0;
		sfx_lowammo.volume = 0;
		sfx_explosion.volume = 0;
	} else {
		music_level_1.volume = music_volume.value / 100;
		music_level_2.volume = music_volume.value / 100;
		music_boss_1.volume = music_volume.value / 100;
		music_title.volume = music_volume.value / 100;
		music_upgrade_menu.volume = music_volume.value / 100;
		music_warp_zone.volume = music_volume.value / 100;
		music_death.volume = music_volume.value / 100;
		if (!mute_SHOOTING.checked) {
			sfx_firesound.volume = sfx_volume.value / 300;
		} else {
			sfx_firesound.volume = 0;
		}
		if (!mute_LOW_AMMO.checked) {
			sfx_lowammo.volume = sfx_volume.value / 300;
		} else {
			sfx_lowammo.volume = 0;
		}
		if (!mute_EXPLOSION.checked) {
			sfx_explosion.volume = sfx_volume.value / 300;
		} else {
			sfx_explosion.volume = 0;
		}
	}
	if (mutemusic > 1) {
		mutemusic = 0;
	}
}
	
function Skip_sound() {
	if (upgrademenu == 1) {
		music_level_1.pause();
		music_level_1.currentTime = 0;
		music_level_2.pause();
		music_level_2.currentTime = 0;
		music_boss_1.pause();
		music_boss_1.currentTime = 0;
		sfx_firesound.pause();
		sfx_firesound.currentTime = 0;
	}
	if (Death1 > 0) {
		music_level_1.pause();
		music_level_1.currentTime = 0;
		music_level_2.pause();
		music_level_2.currentTime = 0;
		music_boss_1.pause();
		music_boss_1.currentTime = 0;
		sfx_firesound.pause();
		sfx_firesound.currentTime = 0;
		music_title.pause();
		music_title.currentTime = 0;
		music_upgrade_menu.pause();
		music_upgrade_menu.currentTime = 0;
	}
	if (Death1 == 0) {
		music_death.pause();
		music_death.currentTime = 0;
	}
	if (wave >= 5) {
		music_level_1.pause();
		music_level_1.currentTime = 0;
	}
	if (wave >= 7 || wave < 5) {
		music_level_2.pause();
		music_level_2.currentTime = 0;
	}
	if (wave < 7 || wave > 7) {
		music_boss_1.pause();
		music_boss_1.currentTime = 0;
		sfx_explosion.pause();
		sfx_explosion.currentTime = 0;
	}
	if (menu > 0) {
		if (upgrademenu == 0) {
			music_title.pause();
			music_title.currentTime = 0;
			music_upgrade_menu.pause();
			music_upgrade_menu.currentTime = 0;
		}
	}
	if (wave != 22) {
		music_warp_zone.pause();
		music_warp_zone.currentTime = 0;
	}
	if (frameIndex5 == 3 || fire == 0) {
		sfx_firesound.pause();
		sfx_firesound.currentTime = 0;
	}
	if (ammo > 20/100 * maxAmmo || playerHealth <= 0) {
		sfx_lowammo.pause();
		sfx_lowammo.currentTime = 0;
	}
}

function statscommand() {
statstxt = new component("30px", "Consolas", "white", 45, upgrade1Y + 0, "text");
statstxt.font = "15px Consolas";
statstxt.text = "Weapon Stats:";
stats2txt = new component("30px", "Consolas", "white", 555, upgrade1Y + 0, "text");
stats2txt.font = "15px Consolas";
stats2txt.text = "Ship Stats:";
stat1_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat1_w.font = "15px Consolas";
stat1_w.text = "Number: #1";
stat1_2w = new component("30px", "Consolas", "white", 555, upgrade1Y + 30, "text");
stat1_2w.font = "15px Consolas";
stat1_2w.text = "Starting Max Health: 100";
stat1_3w = new component("30px", "Consolas", "white", 555, upgrade1Y + 45, "text");
stat1_3w.font = "15px Consolas";
stat1_3w.text = "Max Health: " + playerHealthMax;
stat1_4w = new component("30px", "Consolas", "white", 555, upgrade1Y + 60, "text");
stat1_4w.font = "15px Consolas";
stat1_4w.text = "Starting Speed: " + playerStartSpeed;
stat1_5w = new component("30px", "Consolas", "white", 555, upgrade1Y + 75, "text");
stat1_5w.font = "15px Consolas";
stat1_5w.text = "Max Speed: " + playerMaxSpeed;
stat2_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat2_w.font = "15px Consolas";
stat2_w.text = "Number: #2";
stat3_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat3_w.font = "15px Consolas";
stat3_w.text = "Number: #3";
stat4_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat4_w.font = "15px Consolas";
stat4_w.text = "Number: #4";
stat5_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat5_w.font = "15px Consolas";
stat5_w.text = "Number: #5";
stat6_w = new component("30px", "Consolas", "white", 555, upgrade1Y + 15, "text");
stat6_w.font = "15px Consolas";
stat6_w.text = "Number: #6";
stat6_w_1 = new component("30px", "Consolas", "white", 555, upgrade1Y + 90, "text");
stat6_w_1.font = "15px Consolas";
stat6_w_1.text = "Beat The Saint Patrick's Day";
stat6_w_2 = new component("30px", "Consolas", "white", 555, upgrade1Y + 105, "text");
stat6_w_2.font = "15px Consolas";
stat6_w_2.text = "Boss On Hard To Unlock The";
stat6_w_3 = new component("30px", "Consolas", "white", 555, upgrade1Y + 120, "text");
stat6_w_3.font = "15px Consolas";
stat6_w_3.text = "Ships Special Weapon!";
stat1 = new component("30px", "Consolas", "white", 45, upgrade1Y + 15, "text");
stat1.font = "15px Consolas";
stat1.text = "Name: " + weapname;
stat1_2 = new component("30px", "Consolas", "white", 45, upgrade1Y + 30, "text");
stat1_2.font = "15px Consolas";
stat1_2.text = "Damage: " + PlayerDamageDeal;
stat1_3 = new component("30px", "Consolas", "white", 45, upgrade1Y + 45, "text");
stat1_3.font = "15px Consolas";
stat1_3.text = "Range: " + bullrange;
stat1_5 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
stat1_5.font = "15px Consolas";
stat1_5.text = "Cool Down: " + WeaponCoolDown;
stat1_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 75, "text");
stat1_4.font = "15px Consolas";
stat1_4.text = "Special: Nothing";
stat2_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 75, "text");
stat2_4.font = "15px Consolas";
stat2_4.text = "Special: Slows Enemies";
stat3_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 75, "text");
stat3_4.font = "15px Consolas";
stat3_4.text = "Special: Uses Less Ammo";
	if (pauseGame == 1 && pauseGameKeys == false) {
	statstxt.update();
	stats2txt.update();
		switch (playerShip) {
			case 0:
			stat1_w.update();
			stat1_2w.update();
			stat1_3w.update();
			stat1_4w.update();
			stat1_5w.update();
			break;
			case 1:
			stat2_w.update();
			stat1_2w.update();
			stat1_3w.update();	
			stat1_4w.update();
			stat1_5w.update();
			break;
			case 2:
			stat3_w.update();
			stat1_2w.update();
			stat1_3w.update();	
			stat1_4w.update();
			stat1_5w.update();
			break;
			case 3:
			stat4_w.update();
			stat1_2w.update();
			stat1_3w.update();	
			stat1_4w.update();
			stat1_5w.update();
			break;
			case 4:
			stat5_w.update();
			stat1_2w.update();
			stat1_3w.update();	
			stat1_4w.update();
			stat1_5w.update();
			break;
			case 5:
			stat6_w.update();
				if (STPRIZEWEAPON == 0) {
				stat6_w_1.update();
				stat6_w_2.update();
				stat6_w_3.update();
				}
			stat1_2w.update();
			stat1_3w.update();	
			stat1_4w.update();
			stat1_5w.update();
			break;
		}
		stat1.update();
		stat1_2.update();
		stat1_3.update();
		stat1_5.update();
		if (weapon == 0) {
		stat1_4.update();
		}
		if (weapon == 1) {
		stat2_4.update();
		}
		if (weapon == 2) {
		stat1_4.update();
		}
		if (weapon == 3) {
		stat3_4.update();
		}
		if (weapon == 4) {
		stat1_4.update();
		}
	}
}

var Earth_Text_Global_Alpha_Swap = false;
var Earth_Popup_Message_Show = false;
function warpZone() {
	if (wave != 22) {
	Earth_Text_Global_Alpha_Swap = false;
	Earth_Popup_Message_Show = false;
	}
	if (wave == 22) {
	ammo = maxAmmo;
	playerHealth = playerHealthMax;
	upgrademenu = 0;
		if (Level_Shadows) {
		Earth_Planet.shadowColor_ = "black";
		Earth_Planet.shadowBlur_ = 3;
		Earth_Planet.shadowOffsetX_ = 3;
		Earth_Planet.shadowOffsetY_ = 3;
		} else {
		Earth_Planet.shadowColor_ = "";
		Earth_Planet.shadowBlur_ = 0;
		Earth_Planet.shadowOffsetX_ = 0;
		Earth_Planet.shadowOffsetY_ = 0;
		}
		if (UI_Shadows) {
		EarthHitEnterText.y = 126;
		EarthHitEnterText.shadowColor_ = "black";
		EarthHitEnterText.shadowBlur_ = 2;
		EarthHitEnterText.shadowOffsetX_ = 1;
		EarthHitEnterText.shadowOffsetY_ = 1;
		Earth_PopUp_Message_Border.shadowColor_ = "black";
		Earth_PopUp_Message_Border.shadowBlur_ = 3;
		Earth_PopUp_Message_Border.shadowOffsetX_ = 3;
		Earth_PopUp_Message_Border.shadowOffsetY_ = 3;
		Earth_Location_Text.shadowColor_ = "black";
		Earth_Location_Text.shadowBlur_ = 2;
		Earth_Location_Text.shadowOffsetX_ = 1;
		Earth_Location_Text.shadowOffsetY_ = 1;
		Earth_Type_Text.shadowColor_ = "black";
		Earth_Type_Text.shadowBlur_ = 2;
		Earth_Type_Text.shadowOffsetX_ = 1;
		Earth_Type_Text.shadowOffsetY_ = 1;
		Earth_NumOfWaves_Text.shadowColor_ = "black";
		Earth_NumOfWaves_Text.shadowBlur_ = 2;
		Earth_NumOfWaves_Text.shadowOffsetX_ = 1;
		Earth_NumOfWaves_Text.shadowOffsetY_ = 1;
		Earth_NumOfBosses_Text.shadowColor_ = "black";
		Earth_NumOfBosses_Text.shadowBlur_ = 2;
		Earth_NumOfBosses_Text.shadowOffsetX_ = 1;
		Earth_NumOfBosses_Text.shadowOffsetY_ = 1;
		Earth_Completed_Text.shadowColor_ = "black";
		Earth_Completed_Text.shadowBlur_ = 2;
		Earth_Completed_Text.shadowOffsetX_ = 1;
		Earth_Completed_Text.shadowOffsetY_ = 1;
		Earth_PopUp_Yes_Button.shadowColor_ = "black";
		Earth_PopUp_Yes_Button.shadowBlur_ = 3;
		Earth_PopUp_Yes_Button.shadowOffsetX_ = 3;
		Earth_PopUp_Yes_Button.shadowOffsetY_ = 3;
		Earth_PopUp_Yes_Text.shadowColor_ = "white";
		Earth_PopUp_Yes_Text.shadowBlur_ = 2;
		Earth_PopUp_Yes_Text.shadowOffsetX_ = 1;
		Earth_PopUp_Yes_Text.shadowOffsetY_ = 1;
		Earth_PopUp_No_Button.shadowColor_ = "black";
		Earth_PopUp_No_Button.shadowBlur_ = 3;
		Earth_PopUp_No_Button.shadowOffsetX_ = 3;
		Earth_PopUp_No_Button.shadowOffsetY_ = 3;
		Earth_PopUp_No_Text.shadowColor_ = "white";
		Earth_PopUp_No_Text.shadowBlur_ = 2;
		Earth_PopUp_No_Text.shadowOffsetX_ = 1;
		Earth_PopUp_No_Text.shadowOffsetY_ = 1;
		} else {
		EarthHitEnterText.y = 124;
		EarthHitEnterText.shadowColor_ = "";
		EarthHitEnterText.shadowBlur_ = 0;
		EarthHitEnterText.shadowOffsetX_ = 0;
		EarthHitEnterText.shadowOffsetY_ = 0;
		Earth_PopUp_Message_Border.shadowColor_ = "";
		Earth_PopUp_Message_Border.shadowBlur_ = 0;
		Earth_PopUp_Message_Border.shadowOffsetX_ = 0;
		Earth_PopUp_Message_Border.shadowOffsetY_ = 0;
		Earth_Location_Text.shadowColor_ = "";
		Earth_Location_Text.shadowBlur_ = 0;
		Earth_Location_Text.shadowOffsetX_ = 0;
		Earth_Location_Text.shadowOffsetY_ = 0;
		Earth_Type_Text.shadowColor_ = "";
		Earth_Type_Text.shadowBlur_ = 0;
		Earth_Type_Text.shadowOffsetX_ = 0;
		Earth_Type_Text.shadowOffsetY_ = 0;
		Earth_NumOfWaves_Text.shadowColor_ = "";
		Earth_NumOfWaves_Text.shadowBlur_ = 0;
		Earth_NumOfWaves_Text.shadowOffsetX_ = 0;
		Earth_NumOfWaves_Text.shadowOffsetY_ = 0;
		Earth_NumOfBosses_Text.shadowColor_ = "";
		Earth_NumOfBosses_Text.shadowBlur_ = 0;
		Earth_NumOfBosses_Text.shadowOffsetX_ = 0;
		Earth_NumOfBosses_Text.shadowOffsetY_ = 0;
		Earth_Completed_Text.shadowColor_ = "";
		Earth_Completed_Text.shadowBlur_ = 0;
		Earth_Completed_Text.shadowOffsetX_ = 0;
		Earth_Completed_Text.shadowOffsetY_ = 0;
		Earth_PopUp_Yes_Button.shadowColor_ = "";
		Earth_PopUp_Yes_Button.shadowBlur_ = 0;
		Earth_PopUp_Yes_Button.shadowOffsetX_ = 0;
		Earth_PopUp_Yes_Button.shadowOffsetY_ = 0;
		Earth_PopUp_Yes_Text.shadowColor_ = "";
		Earth_PopUp_Yes_Text.shadowBlur_ = 0;
		Earth_PopUp_Yes_Text.shadowOffsetX_ = 0;
		Earth_PopUp_Yes_Text.shadowOffsetY_ = 0;
		Earth_PopUp_No_Button.shadowColor_ = "";
		Earth_PopUp_No_Button.shadowBlur_ = 0;
		Earth_PopUp_No_Button.shadowOffsetX_ = 0;
		Earth_PopUp_No_Button.shadowOffsetY_ = 0;
		Earth_PopUp_No_Text.shadowColor_ = "";
		Earth_PopUp_No_Text.shadowBlur_ = 0;
		Earth_PopUp_No_Text.shadowOffsetX_ = 0;
		Earth_PopUp_No_Text.shadowOffsetY_ = 0;
		}
		if (circle.circleCrashWith(Earth_Planet_Circle_Collider)) {
			if (EarthHitEnterText.globalAlpha < 1 && !Earth_Text_Global_Alpha_Swap) {
			EarthHitEnterText.globalAlpha += 0.02;
			}
			if (EarthHitEnterText.globalAlpha >= 1) {
			EarthHitEnterText.globalAlpha = 1;
			Earth_Text_Global_Alpha_Swap = true;
			}
			if (EarthHitEnterText.globalAlpha > 0 && Earth_Text_Global_Alpha_Swap) {
			EarthHitEnterText.globalAlpha -= 0.02;
			}
			if (EarthHitEnterText.globalAlpha <= 0) {
			EarthHitEnterText.globalAlpha = 0;
			Earth_Text_Global_Alpha_Swap = false;
			}
		}
		if (!circle.circleCrashWith(Earth_Planet_Circle_Collider)) {
			if (EarthHitEnterText.globalAlpha > 0) {
			EarthHitEnterText.globalAlpha -= 0.02;
			}
			if (EarthHitEnterText.globalAlpha <= 0) {
			EarthHitEnterText.globalAlpha = 0;
			}
		}
	WarpZone_BG.update();
	Earth_Planet.update();
	EarthHitEnterText.update();
	Earth_PopUp_Message_Border.update();
	Earth_PopUp_Message.update();
	Earth_Location_Text.update();
	Earth_Type_Text.update();
	Earth_NumOfWaves_Text.update();
	Earth_NumOfBosses_Text.update();
	Earth_Completed_Text.update();
	Earth_PopUp_Yes_Button.update();
	Earth_PopUp_Yes_Text.update();
	Earth_PopUp_No_Button.update();
	Earth_PopUp_No_Text.update();
		if (Earth_Popup_Message_Show) {
			if (circle.mixCrashWith(Earth_PopUp_Yes_Button)) {
			PlayerShadowManager.ShadowColor = "green";
			}
			if (circle.mixCrashWith(Earth_PopUp_No_Button)) {
			PlayerShadowManager.ShadowColor = "red";
			}
		}
		if (!circle.mixCrashWith(Earth_PopUp_Yes_Button) && !circle.mixCrashWith(Earth_PopUp_No_Button)) {
			if (Earth_Popup_Message_Show) {
			PlayerShadowManager.ShadowColor = "black";
			}
		}
	}
	if (!Earth_Popup_Message_Show) {
	PlayerShadowManager.ShadowColor = "black";
		if (Earth_PopUp_Message.globalAlpha > 0) {
		Earth_PopUp_Message.globalAlpha -= 0.02;
		Earth_PopUp_Message_Border.globalAlpha -= 0.02;
		Earth_Location_Text.globalAlpha -= 0.02;
		Earth_Type_Text.globalAlpha -= 0.02;
		Earth_NumOfWaves_Text.globalAlpha -= 0.02;
		Earth_NumOfBosses_Text.globalAlpha -= 0.02;
		Earth_Completed_Text.globalAlpha -= 0.02;
		Earth_PopUp_Yes_Button.globalAlpha -= 0.02;
		Earth_PopUp_Yes_Text.globalAlpha -= 0.02;
		Earth_PopUp_No_Button.globalAlpha -= 0.02;
		Earth_PopUp_No_Text.globalAlpha -= 0.02;
		}
		if (Earth_PopUp_Message.globalAlpha <= 0) {
		Earth_PopUp_Message.globalAlpha = 0;
		Earth_PopUp_Message_Border.globalAlpha = 0;
		Earth_Location_Text.globalAlpha = 0;
		Earth_Type_Text.globalAlpha = 0;
		Earth_NumOfWaves_Text.globalAlpha = 0;
		Earth_NumOfBosses_Text.globalAlpha = 0;
		Earth_Completed_Text.globalAlpha = 0;
		Earth_PopUp_Yes_Button.globalAlpha = 0;
		Earth_PopUp_Yes_Text.globalAlpha = 0;
		Earth_PopUp_No_Button.globalAlpha = 0;
		Earth_PopUp_No_Text.globalAlpha = 0;
		}
	} else  {
		if (Earth_PopUp_Message.globalAlpha < 1) {
		Earth_PopUp_Message.globalAlpha += 0.02;
		Earth_PopUp_Message_Border.globalAlpha += 0.02;
		Earth_Location_Text.globalAlpha += 0.02;
		Earth_Type_Text.globalAlpha += 0.02;
		Earth_NumOfWaves_Text.globalAlpha += 0.02;
		Earth_NumOfBosses_Text.globalAlpha += 0.02;
		Earth_Completed_Text.globalAlpha += 0.02;
		Earth_PopUp_Yes_Button.globalAlpha += 0.02;
		Earth_PopUp_Yes_Text.globalAlpha += 0.02;
		Earth_PopUp_No_Button.globalAlpha += 0.02;
		Earth_PopUp_No_Text.globalAlpha += 0.02;
		}
		if (Earth_PopUp_Message.globalAlpha >= 1) {
		Earth_PopUp_Message.globalAlpha = 1;
		Earth_PopUp_Message_Border.globalAlpha = 1;
		Earth_Location_Text.globalAlpha = 1;
		Earth_Type_Text.globalAlpha = 1;
		Earth_NumOfWaves_Text.globalAlpha = 1;
		Earth_NumOfBosses_Text.globalAlpha = 1;
		Earth_Completed_Text.globalAlpha = 1;
		Earth_PopUp_Yes_Button.globalAlpha = 1;
		Earth_PopUp_Yes_Text.globalAlpha = 1;
		Earth_PopUp_No_Button.globalAlpha = 1;
		Earth_PopUp_No_Text.globalAlpha = 1;
		}
	}
}

function WarpZoneControls() {
	if (wave == 22 && menu == 2 && pauseGame == 0) {
		if (Earth_PopUp_Message.globalAlpha <= 0 && circle.circleCrashWith(Earth_Planet_Circle_Collider) && !Earth_Popup_Message_Show) {
		Earth_Popup_Message_Show = true;
		}
		if (Earth_PopUp_Message.globalAlpha >= 1 && Earth_Popup_Message_Show) {
			if (circle.mixCrashWith(Earth_PopUp_Yes_Button)) {
			goBack = 1;
			}
			if (circle.mixCrashWith(Earth_PopUp_No_Button)) {
			Earth_Popup_Message_Show = false;
			}
		}
	}
}

var locationV = "Monty Forest Cabins";
var namebX = 620;
var namebY = 450;
var blockKeys = false;
var weaponVault = 0;
var goBack = 0;
var goToWarpZone = 0;
document.getElementById('Easy_').onfocus = function() { 
document.getElementById('Medium_').checked = false;
document.getElementById('Hard_').checked = false;
difficulty = 0;
}
document.getElementById('Medium_').onfocus = function() { 
document.getElementById('Easy_').checked = false;
document.getElementById('Hard_').checked = false;
difficulty = 1;
}
document.getElementById('Hard_').onfocus = function() { 
document.getElementById('Easy_').checked = false;
document.getElementById('Medium_').checked = false;
difficulty = 2;
}

function nameFC() {
locationN = new component("30px", "Consolas", "white", namebX - 40, namebY + 45, "text");
locationN.font="12px Consolas";
locationN.text= "Location: " + locationV;
locationN.update();
	if (wave < 5) {
	locationV = "Monty Forest Cabins";
	switchpos = 0;
	}
	if (wave >= 5 && wave < 7) {
	locationV = "Monty Trailer Park";
	}
	if (wave == 22) {
	locationV = "Warp Zone";
	}
	if (goToWarpZone == 1) {
	wave = 22;
	count = 0;
	pauseGame = 0;
	cratespawn = 0;
	cratespawn2 = 0;
	goToWarpZone = 0;
	totalMoney = (Number(totalMoney)+Number(money));
	localStorage && (localStorage.totalMoney_ = totalMoney);
	}
	if (goBack == 1) {
	goBack = 0;
		if (wave == 22) {
		money = 50;
		}
	PlayerShipsArray = [];
	switchpos = 0;
	wave = 1;
	count = 0;
	pauseGame = 0;
	ammo = maxAmmo;
	playerHealthMax = 100;
	playerHealth = playerHealthMax;
	weaponupgrade1 = 0;
	backSwitch = 0;
	weapon = 0;
	resetcrate = 0;
	cratespawn = 0;
	cratespawn2 = 0;
	badguy1.x = 650;
	badguy1.y = 450;
	badguy2.x = 40;
	badguy2.y = 150;
	recbox1.x = 450;
	recbox1.y = 60;
	tribox.x = 430;
	tribox.y = 100;
	crate1X = 374;
	crate1Y = 184.5;
	crateh1X = 399;
	crateh1Y = 184.5;
	cratesw1X = 640;
	cratesw1Y = 50;
	GuardStart = 0;
	GuardHealth = 100;
	GuardDead = false;
	GuardSwitch = 0;
	frameIndex_1 = 0;
	spawnBoss7 = 0;
	ExplosionCycle = 0;
	stopGuardSpawn = 0;
	switchBoss7 = 0;
	bullbox = new component(10, 10, "orange", 400, 180, "rec");
	bpic = new component(10, 10, "bullet_1", 400, 180, "animated-img-rot");
	bpic2 = new component(10, 10, "bullet_2", 400, 180, "animated-img-rot");
	bpic3 = new component(10, 10, "bullet_3", 400, 180, "animated-img-rot");
	bpic4 = new component(10, 10, "bullet_4", 400, 180, "img");
	bpic5 = new component(10, 10, "bullet_5", 400, 180, "animated-img-rot");
	box = new component(25, 25, "black", playerX, playerY, "rec");
	ship1 = new component(32, 32, "player_1", playerX - 3.5, playerY - 3.5, "animated-img-rot");
	PlayerShipsArray.push(ship1);
	ship2 = new component(25, 25, "player_2", playerX, playerY, "animated-img-rot");
	PlayerShipsArray.push(ship2);
	ship3 = new component(25, 25, "player_3", playerX, playerY, "animated-img-rot");
	PlayerShipsArray.push(ship3);
	ship4 = new component(25, 25, "player_4", playerX, playerY, "animated-img-rot");
	PlayerShipsArray.push(ship4);
	ship5 = new component(32, 32, "player_5", playerX - 3.5, playerY - 3.5, "animated-img-rot");
	PlayerShipsArray.push(ship5);
	ship6 = new component(25, 25, "player_6", playerX, playerY, "animated-img-rot");
	PlayerShipsArray.push(ship6);
	PlayerShadowManager = new PlayerShadowHandler(PlayerShipsArray, "black", 5, 3, 3);
	}
}

var money = 50;
var totalMoney = 0;
function playerMoney() {
money_text = new component("30px", "Consolas", "green", 580, 480, "text");
money_text.font="30px Consolas";
left_UI = new component(300, 100, "#63218a", 575, 455, "rec");
left_UI_edge = new component(300, 100, "black", 570, 450, "rec");
	if (wave < 22) {
	money_text.text = "$"+Math.round(money);
	}
	if (wave >= 22) {
	money_text.text = "$"+Math.round(totalMoney); 
	}
left_UI_edge.update();
left_UI.update();
money_text.update();
}

var switchy = 0;
function swapweap1() {
	if (specialWandS == 0) {
		if (switchy == -1) {
		switchy = 0;
		}
		if (stcget == 1) {
		switchy += 1;
		}
		if (stcget == 0) {
		switchy = 0;
		weapon = 0;
		}
	}
	if (specialWandS == 1) {
		if (playerShip == 5 && STPRIZEWEAPON == 1) {
		switchy = -1;
		weapon = 4;
		}
	}
}

function swapweap2() {
	if (specialWandS == 0) {
		if (weaponupgrade1 > 0) {
			if (stcweapon == 1) {
			switchy = -1;
			}
		weapon = 1;
		}
	}
}

function swapweap3() {
	if (specialWandS == 0) {
		if (weaponupgrade1 > 1) {
			if (stcweapon == 1) {
			switchy = -1;
			}
		weapon = 2;
		}
	}
}

var pauseGame = 0;
var backSwitch = 0;
function backfunc() {
backSwitch = 0;
	if (specialalert1 == 0 && pauseGame == 0 && upgrademenu > 0) {
	backSwitch = 1;
	upgrademenu = 0;
	}
	if (specialalert1 == 1) {
	specialalert1 = 0;
	}
	if (backSwitch == 0 && upgrademenu == 0 && menu > 0) {
	pauseGame += 1;
	}
	if (Death1 > 0) {
	goBack = 1;
	}
}

var NOUPGRADESAVAILABLE = false;
var upgrade1trigger = false;
var healthUpgradeTrigger = false;
var ammoUpgradeTrigger = false;
function UpgradeMenuTrigger() {
	if (weaponupgrade1 == 0) {
		if (money >= 100) {
		upgrade1trigger = true;
		}
		if (money < 100) {
		upgrade1trigger = false;
		}
	}
	if (weaponupgrade1 == 1) {
		if (money >= 200) {
		upgrade1trigger = true;
		}
		if (money < 200) {
		upgrade1trigger = false;
		}
	}
	if (playerHealth != playerHealthMax) {
		if (Math.floor(playerHealthMax - playerHealth) <= money) {
		healthUpgradeTrigger = true;
		}
		if (Math.floor(playerHealthMax - playerHealth) > money) {
		healthUpgradeTrigger = false;
		}
	}
	if (playerHealth >= playerHealthMax) {
	healthUpgradeTrigger = false;
	}
	if (ammo != maxAmmo) {
		if (Math.floor(maxAmmo - ammo) <= money) {
		ammoUpgradeTrigger = true;
		}
		if (Math.floor(maxAmmo - ammo) > money) {
		ammoUpgradeTrigger = false;
		}
	}
	if (ammo >= maxAmmo) {
	ammoUpgradeTrigger = false;
	}
	if (healthUpgradeTrigger || ammoUpgradeTrigger || upgrade1trigger) {
	NOUPGRADESAVAILABLE = false;
	}
	if (!healthUpgradeTrigger && !ammoUpgradeTrigger && !upgrade1trigger) {
	NOUPGRADESAVAILABLE = true;
	}
	if (upgrademenu != 1) {
		if (money == 0 || NOUPGRADESAVAILABLE) {
		upgrademenu = 0;
		}
	}
}

var nextUpgrade = 0;
function upgrade1func() {
	if (upgrademenu > 0) {
	nextUpgrade = 1;	
		if (weaponupgrade1 == 0 && money >= 100) {
		weaponupgrade1 = 1;
		money -= 100;
		nextUpgrade = 0;
		}
		if (nextUpgrade == 1 && weaponupgrade1 == 1 && money >= 200) {
		weaponupgrade1 = 2;
		money -= 200;
		}
	}
}

var healthLocker = 0;
function healthRecovery() {
	if (upgrademenu == 1) {
	healthLocker = 1;
		if (playerHealth != playerHealthMax && healthLocker == 1 && Math.floor(playerHealthMax - playerHealth) <= money) {
		money -= Math.floor(playerHealthMax - playerHealth);
		playerHealth += (playerHealthMax - playerHealth);
		healthLocker = 0;
		}
	}
}

var ammoLocker = 0;
function ammoRecovery() {
	if (upgrademenu == 1) {
	ammoLocker = 1;
		if (ammo != maxAmmo && ammoLocker == 1 && Math.floor(maxAmmo - ammo) <= money) {
		money -= Math.floor(maxAmmo - ammo);
		ammo += (maxAmmo - ammo);
		ammoLocker = 0;
		}
	}
}

window.onload = start();