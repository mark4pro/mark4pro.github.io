//Set screen size
screen.setResolution(Vec2(1280,720));
SettingsMenu.menuScale = 0.85;
OptionsMenu.menuScale = 0.85;
keybinder.menuScale = 0.85;
ModLoader.menuScale = 0.85;
if (typeof require != "undefined") {
	SettingsMenu.menuScale = 0.75;
	OptionsMenu.menuScale = 0.75;
	keybinder.menuScale = 0.75;
	ModLoader.menuScale = 0.75;
}

//Create mod menu
ModLoader.createMenu();

//Version
const version = "V1.4.1";

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
const objectsPath = (game="lb") => {
	switch (game) {
		case "lb":
			return lbPath+"Objects/";
		break;
		case "tw":
			return twPath+"Objects/";
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
let mainMenuBG = imageD("mainMenuBG", imagePath+"Title_Screen.png", Vec2(1280, 720));
//Line Battle/Ball Bouncers Assets
let blueBall = imageD("blue_ball", playersPath("lb")+"Blue_Ball.png", Vec2(50, 50));
let redBall = imageD("red_ball", playersPath("lb")+"Red_Ball.png", Vec2(50, 50));
let yellowBall = imageD("yellow_ball", playersPath("lb")+"Yellow_Ball.png", Vec2(50, 50));
let greenBall = imageD("green_ball", playersPath("lb")+"Green_Ball.png", Vec2(50, 50));
let greyBall = imageD("grey_ball", playersPath("lb")+"Grey_Ball.png", Vec2(50, 50));
let distortionBG = imageD("distortion_background", levelsPath("lb")+"Distortion_Level_BG.png", Vec2(1280, 720));
let powerups = imageD("powerups", objectsPath("lb")+"Power-ups.png", Vec2(75, 50));
//Tank War Assets
let explosion = imageD("explosion", effectsPath("tw")+"Explosion_Frame_1.png", Vec2(45, 45));
let dirtRing = imageD("dirt_ring", effectsPath("tw")+"Dirt_Ring.png", Vec2(50, 50));
let dirtTracks = imageD("dirt_tracks", effectsPath("tw")+"Dirt_Tracks.png", Vec2(50, 50));
let blueTank = imageD("blue_tank", playersPath("tw")+"Blue_Tank.png", Vec2(50, 50));
let redTank = imageD("red_tank", playersPath("tw")+"Red_Tank.png", Vec2(50, 50));
let yellowTank = imageD("yellow_tank", playersPath("tw")+"Yellow_Tank.png", Vec2(50, 50));
let greenTank = imageD("green_tank", playersPath("tw")+"Green_Tank.png", Vec2(50, 50));
let deadTank = imageD("dead_tank", playersPath("tw")+"Dead_Tank.png", Vec2(50, 50));
let battleGroundBG = imageD("battle_ground_BG", levelsPath("tw")+"Tank_War_Background_1.png", Vec2(1280, 720));

/*Map doc
	tag("Bounce") - bouncy wall
	tag("Wall") - wall (collisions enabled)
	tag("obZone") - obstacle zone tag
	tag("goZone") - goal zone tag
	tag("puZone") - power-up zone tag
	tag("Exclude") - Exclude from obstacle/goal spawn check
*/

//Maps
let map_abyss = new Map("Abyss", "black",
[
	Vec2(40, 40, -degToRad(90), -degToRad(90)),
	Vec2(1240, 680, degToRad(90), -degToRad(90)),
	Vec2(40, 680, degToRad(90), -degToRad(90)),
	Vec2(1240, 40, -degToRad(90), -degToRad(90))
],
[/*objects*/],
[
	rectangle(8, base(false, tag("obZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("goZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("puZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
]);

let neon_blend = 0;
let neon_blend_state = Vec2(0, 1);
let neon_color = "rgb(0, 0, 0)";
let neon_color_list = {
	0:"rgb(73, 253, 2)",
	1:"rgb(246, 254, 24)",
	2:"rgb(0, 252, 252)",
	3:"rgb(255, 52, 232)",
};

let map_neon = new Map("Neon", "black",
[
	//Spawn points
	Vec2(40, 40, -degToRad(90), -degToRad(90)), //Left/Top Corner (Player 1)
	Vec2(1240, 680, degToRad(90), -degToRad(90)), //Right/Bottom Corner (Player 2)
	Vec2(40, 680, degToRad(90), -degToRad(90)), //Left/Bottom Corner (Player 3)
	Vec2(1240, 40, -degToRad(90), -degToRad(90)) //Right/Top Corner (Player 4)
],
[
	//Level objects
	rectangle(1, base(false, nt("Left_Border_Wall", "Wall_ChColor"), Vec2(10, 720), Vec2(5, 360), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Border_Wall", "Wall_ChColor"), Vec2(10, 720), Vec2(1275, 360), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Top_Border_Wall", "Wall_ChColor"), Vec2(1280, 10), Vec2(640, 5), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Bottom_Border_Wall", "Wall_ChColor"), Vec2(1280, 10), Vec2(640, 715), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Left_Top_Side_Wall", "Wall_ChColor"), Vec2(100, 210), Vec2(250, 180), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Left_Bottom_Side_Wall", "Wall_ChColor"), Vec2(100, 210), Vec2(250, 540), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Top_Side_Wall", "Wall_ChColor"), Vec2(100, 210), Vec2(1030, 180), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Bottom_Side_Wall", "Wall_ChColor"), Vec2(100, 210), Vec2(1030, 540), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	
	rectangle(1, base(false, nt("Left_Top_Top_Corner", "Wall_ChColor"), Vec2(100, 25), Vec2(540, 180), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Left_Top_Side_Corner", "Wall_ChColor"), Vec2(25, 110), Vec2(490, 222.5), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Left_Bottom_Bottom_Corner", "Wall_ChColor"), Vec2(100, 25), Vec2(740, 180), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Left_Bottom_Side_Corner", "Wall_ChColor"), Vec2(25, 110), Vec2(790, 222.5), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Top_Top_Corner", "Wall_ChColor"), Vec2(100, 25), Vec2(540, 540), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Top_Side_Corner", "Wall_ChColor"), Vec2(25, 110), Vec2(490, 497.5), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Bottom_Bottom_Corner", "Wall_ChColor"), Vec2(100, 25), Vec2(740, 540), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
	rectangle(1, base(false, nt("Right_Bottom_Side_Corner", "Wall_ChColor"), Vec2(25, 110), Vec2(790, 497.5), colorD("rgb("+neon_color[0]+","+neon_color[1]+","+neon_color[2]+")"))),
],
[
	//Obstacle zone
	rectangle(8, base(false, tag("obZone"), Vec2(405, 705), Vec2(275, 360), colorD())),
	rectangle(8, base(false, tag("obZone"), Vec2(405, 705), Vec2(1005, 360), colorD())),
	rectangle(8, base(false, tag("obZone"), Vec2(325, 162.5), Vec2(640, 88.75), colorD())),
	rectangle(8, base(false, tag("obZone"), Vec2(325, 162.5), Vec2(640, 631.25), colorD())),
],
[
	//Goal zone
	rectangle(8, base(false, tag("goZone"), Vec2(275, 335), Vec2(640, 360), colorD()))
],
[
	//Power-up zone
	rectangle(8, base(false, tag("puZone"), Vec2(405, 705), Vec2(275, 360), colorD())),
	rectangle(8, base(false, tag("puZone"), Vec2(405, 705), Vec2(1005, 360), colorD())),
	rectangle(8, base(false, tag("puZone"), Vec2(325, 162.5), Vec2(640, 88.75), colorD())),
	rectangle(8, base(false, tag("puZone"), Vec2(325, 162.5), Vec2(640, 631.25), colorD())),
],
() => {
	if (neon_blend_state.x > 3) {
		neon_blend_state.x = 0;
	}
	if (neon_blend_state.x < 0) {
		neon_blend_state.x = 3;
	}
	if (neon_blend_state.y > 3) {
		neon_blend_state.y = 0;
	}
	if (neon_blend_state.y < 0) {
		neon_blend_state.y = 3;
	}
	neon_color = colorBlend(neon_color_list[neon_blend_state.x], neon_color_list[neon_blend_state.y], neon_blend);
	neon_blend += 1.5 * delta;
	if (neon_blend > 100) {
		neon_blend_state = neon_blend_state.add(1);
		neon_blend = 0;
	}
	let colorWalls = getByNameTag(tag("ChColor"), 2, false, true);
	if (colorWalls != null) {
		for (let i=0,length=colorWalls.length;i<length;i++) {
			colorWalls[i].base.color.color = neon_color;
		}
	}
});

let map_fourColors = new Map("Four Colors", "black",
[
	//Spawn points
	Vec2(40, 40, -degToRad(90), -degToRad(90)), //Left/Top Corner (Player 1)
	Vec2(1240, 680, degToRad(90), -degToRad(90)), //Right/Bottom Corner (Player 2)
	Vec2(40, 680, degToRad(90), -degToRad(90)), //Left/Bottom Corner (Player 3)
	Vec2(1240, 40, -degToRad(90), -degToRad(90)) //Right/Top Corner (Player 4)
],
[
	sprite(1, base(false, nt("background", "Exclude"), Vec2(1280, 720), screen.halfResolution, distortionBG.getColor(0.9, 0, "invert(100%)"))),
	rectangle(2, base(false, nt("left_top_wall", "Bounce"), Vec2(40, 300), Vec2(250, 200, degToRad(-55)), colorD("blue", 0.75, 15), shadow(Vec2(), "blue", 100))),
	rectangle(2, base(false, nt("left_bottom_wall", "Bounce"), Vec2(40, 300), Vec2(250, 520, degToRad(55)), colorD("yellow", 0.75, 15), shadow(Vec2(), "yellow", 100))),
	rectangle(2, base(false, nt("right_top_wall", "Bounce"), Vec2(40, 300), Vec2(1030, 200, degToRad(55)), colorD("green", 0.75, 15), shadow(Vec2(), "green", 100))),
	rectangle(2, base(false, nt("right_bottom_wall", "Bounce"), Vec2(40, 300), Vec2(1030, 520, degToRad(-55)), colorD("red", 0.75, 15), shadow(Vec2(), "red", 100))),
	rectangle(2, base(false, nt("center_wall", "Wall"), Vec2(150, 150), Vec2(640, 360, degToRad(45)), colorD("white", 0.75, 20, shadow(Vec2(), "white", 100)))),
],
[
	rectangle(8, base(false, tag("obZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("goZone"), Vec2(400, 400), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("puZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
() => {
	let linePieces = getByNameTag(name("line"), 1, false, true);
	if (linePieces != null) {
		if (Array.isArray(linePieces)) {
			for (let i=0,length=linePieces.length;i<length;i++) {
				if (linePieces[i].base.color.comp != "lighten") {
					linePieces[i].base.color.comp = "lighten";
				}
			}
		}
	}
});

let map_portals = new Map("Portals", "rgb(70, 66, 69)",
[
	//Spawn points
	Vec2(40, 110, degToRad(180), -degToRad(90)), //Left/Top Corner (Player 1)
	Vec2(1240, 610, 0, -degToRad(90)), //Right/Bottom Corner (Player 2)
	Vec2(40, 610, degToRad(180), -degToRad(90)), //Left/Bottom Corner (Player 3)
	Vec2(1240, 110, 0, -degToRad(90)) //Right/Top Corner (Player 4)
],
[
	rectangle(7, base(false, nt("left_wall", "Wall"), Vec2(10, 720), Vec2(5, 360), colorD("grey"))),
	rectangle(7, base(false, nt("right_wall", "Wall"), Vec2(10, 720), Vec2(1275, 360), colorD("grey"))),
	rectangle(7, base(false, nt("left_center_1", "Wall"), Vec2(150, 100), Vec2(80, 360), colorD("grey"))),
	rectangle(7, base(false, nt("right_center_1", "Wall"), Vec2(150, 100), Vec2(1200, 360), colorD("grey"))),
	rectangle(7, base(false, nt("left_center_2", "Wall"), Vec2(200, 300), Vec2(355, 360), colorD("grey"))),
	rectangle(7, base(false, nt("right_center_2", "Wall"), Vec2(200, 300), Vec2(925, 360), colorD("grey"))),
	rectangle(7, base(false, nt("center_top", "Wall"), Vec2(372, 30), Vec2(640, 225), colorD("grey"))),
	rectangle(7, base(false, nt("center_bottom", "Wall"), Vec2(372, 30), Vec2(640, 495), colorD("grey"))),
	rectangle(7, base(false, nt("left_top", "Wall"), Vec2(75, 225), Vec2(455, 112.5), colorD("grey"))),
	rectangle(7, base(false, nt("left_bottom", "Wall"), Vec2(75, 225), Vec2(455, 607.5), colorD("grey"))),
	rectangle(7, base(false, nt("right_top", "Wall"), Vec2(75, 225), Vec2(825, 112.5), colorD("grey"))),
	rectangle(7, base(false, nt("right_bottom", "Wall"), Vec2(75, 225), Vec2(825, 607.5), colorD("grey"))),
	rectangle(7, base(false, nt("top_wall", "Wall"), Vec2(1280, 10), Vec2(640, 5), colorD("grey"))),
	rectangle(7, base(false, nt("bottom_wall", "Wall"), Vec2(1280, 10), Vec2(640, 715), colorD("grey"))),
	rectangle(7, base(false, nt("left_center_3", "Wall"), Vec2(160, 100), Vec2(61.5, 320, degToRad(25)), colorD("grey"))),
	rectangle(7, base(false, nt("left_center_4", "Wall"), Vec2(160, 100), Vec2(61.5, 400, degToRad(-25)), colorD("grey"))),
	rectangle(7, base(false, nt("right_center_3", "Wall"), Vec2(160, 100), Vec2(1218.5, 320, degToRad(-25)), colorD("grey"))),
	rectangle(7, base(false, nt("right_center_4", "Wall"), Vec2(160, 100), Vec2(1218.5, 400, degToRad(25)), colorD("grey"))),
	
	//Portals
	rectangle(7, base(false, nt("blue_portal_1", "Portal"), Vec2(20, 200), Vec2(407.5, 110), colorD("blue", 0.50), shadow(Vec2(-10, 0), "blue", 25))),
	rectangle(7, base(false, nt("blue_portal_2", "Portal"), Vec2(20, 200), Vec2(502.5, 610), colorD("blue", 0.50), shadow(Vec2(10, 0), "blue", 25))),
	rectangle(7, base(false, nt("red_portal_1", "Portal"), Vec2(20, 200), Vec2(872.5, 610), colorD("red", 0.50), shadow(Vec2(10, 0), "red", 25))),
	rectangle(7, base(false, nt("red_portal_2", "Portal"), Vec2(20, 200), Vec2(777.5, 110), colorD("red", 0.50), shadow(Vec2(-10, 0), "red", 25))),
	rectangle(7, base(false, nt("yellow_portal_1", "Portal"), Vec2(20, 200), Vec2(407.5, 610), colorD("yellow", 0.50), shadow(Vec2(-10, 0), "yellow", 25))),
	rectangle(7, base(false, nt("yellow_portal_2", "Portal"), Vec2(20, 200), Vec2(502.5, 110), colorD("yellow", 0.50), shadow(Vec2(10, 0), "yellow", 25))),
	rectangle(7, base(false, nt("green_portal_1", "Portal"), Vec2(20, 200), Vec2(872.5, 110), colorD("green", 0.50), shadow(Vec2(10, 0), "green", 25))),
	rectangle(7, base(false, nt("green_portal_2", "Portal"), Vec2(20, 200), Vec2(777.5, 610), colorD("green", 0.50), shadow(Vec2(-10, 0), "green", 25))),
	rectangle(7, base(false, nt("cyan_portal_1", "Portal"), Vec2(20, 20), Vec2(640, 110), colorD("cyan", 0.50), shadow(Vec2(), "cyan", 25))),
	rectangle(7, base(false, nt("cyan_portal_1_vis", "Portal"), Vec2(20, 20), Vec2(640, 110, degToRad(45)), colorD("lightcyan", 0.50), shadow(Vec2(), "lightcyan", 25))),
	rectangle(7, base(false, nt("cyan_portal_2", "Portal"), Vec2(20, 240), Vec2(465, 360), colorD("cyan", 0.50), shadow(Vec2(10, 0), "lightcyan", 25))),
	rectangle(7, base(false, nt("purple_portal_1", "Portal"), Vec2(20, 20), Vec2(640, 610), colorD("purple", 0.50), shadow(Vec2(), "purple", 25))),
	rectangle(7, base(false, nt("purple_portal_1_vis", "Portal"), Vec2(20, 20), Vec2(640, 610, degToRad(45)), colorD("#CB59EB", 0.50), shadow(Vec2(), "#CB59EB", 25))),
	rectangle(7, base(false, nt("purple_portal_2", "Portal"), Vec2(20, 240), Vec2(815, 360), colorD("purple", 0.50), shadow(Vec2(-10, 0), "#CB59EB", 25))),
],
[
	rectangle(7, base(false, tag("obZone"), Vec2(255, 200), Vec2(640, 110), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(255, 200), Vec2(640, 610), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(245, 400), Vec2(132.5, 360), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(245, 400), Vec2(1147.5, 360), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(145, 200), Vec2(327.5, 110), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(145, 200), Vec2(327.5, 610), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(145, 200), Vec2(952.5, 110), colorD())),
	rectangle(7, base(false, tag("obZone"), Vec2(145, 200), Vec2(952.5, 610), colorD())),
],
[
	rectangle(7, base(false, tag("goZone"), Vec2(255, 200), Vec2(640, 110), colorD())),
	rectangle(7, base(false, tag("goZone"), Vec2(255, 200), Vec2(640, 610), colorD())),
	rectangle(7, base(false, tag("goZone"), Vec2(330, 240), Vec2(640, 360), colorD())),
],
[
	rectangle(7, base(false, tag("puZone"), Vec2(255, 200), Vec2(640, 110), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(255, 200), Vec2(640, 610), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(245, 400), Vec2(132.5, 360), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(245, 400), Vec2(1147.5, 360), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(145, 200), Vec2(327.5, 110), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(145, 200), Vec2(327.5, 610), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(145, 200), Vec2(952.5, 110), colorD())),
	rectangle(7, base(false, tag("puZone"), Vec2(145, 200), Vec2(952.5, 610), colorD())),
],
() => {
	let ps = [pM.getPlayer(1).player_obj, pM.getPlayer(2).player_obj, pM.getPlayer(3).player_obj, pM.getPlayer(4).player_obj]
	let portals = getByNameTag(tag("Portal"), 2, false, true);
	if (portals != null) {
		for (let i=0,length=portals.length;i<length;i++) {
			let thisPortal = portals[i];
			for (let p=0;p<4;p++) {
				if (ps[p] != null) {
					let thisP = ps[p];
					if (cVpCollision(thisP, thisPortal)) {
						switch (thisPortal.base.nameTag.name) {
							case "blue_portal_1":
								thisP.base.position.x = 502.5+LBGM.data.player_size.x;
								thisP.base.position.y = 500+thisP.base.position.y;
							break;
							case "blue_portal_2":
								thisP.base.position.x = 407.5-LBGM.data.player_size.x;
								thisP.base.position.y = (thisP.base.position.y-500);
							break;
							case "red_portal_1":
								thisP.base.position.x = 777.5-LBGM.data.player_size.x;
								thisP.base.position.y = (thisP.base.position.y-500);
							break;
							case "red_portal_2":
								thisP.base.position.x = 872.5+LBGM.data.player_size.x;
								thisP.base.position.y = 500+thisP.base.position.y;
							break;
							case "yellow_portal_1":
								thisP.base.position.x = 502.5+LBGM.data.player_size.x;
								thisP.base.position.y = (thisP.base.position.y-500);
							break;
							case "yellow_portal_2":
								thisP.base.position.x = 407.5-LBGM.data.player_size.x;
								thisP.base.position.y = 500+thisP.base.position.y;
							break;
							case "green_portal_1":
								thisP.base.position.x = 777.5-LBGM.data.player_size.x;
								thisP.base.position.y = 500+thisP.base.position.y;
							break;
							case "green_portal_2":
								thisP.base.position.x = 872.5+LBGM.data.player_size.x;
								thisP.base.position.y = (thisP.base.position.y-500);
							break;
							case "cyan_portal_1":
								if (thisP.base.position.x > 640) {
									thisP.base.position.s *= -1;
								}
								thisP.base.position.x = 465+LBGM.data.player_size.x;
								thisP.base.position.y = 360;
							break;
							case "cyan_portal_2":
								let outVec1 = Vec2(640, 110).rotateVector2(Vec2(640+LBGM.data.player_size.x, 110), thisP.base.position.r-degToRad(90));
								thisP.base.position.x = outVec1.x;
								thisP.base.position.y = outVec1.y;
								thisP.base.position.s *= -1;
							break;
							case "purple_portal_1":
								if (thisP.base.position.x < 640) {
									thisP.base.position.s *= -1;
								}
								thisP.base.position.x = 815-LBGM.data.player_size.x;
								thisP.base.position.y = 360;
							break;
							case "purple_portal_2":
								let outVec2 = Vec2(640, 610).rotateVector2(Vec2(640+LBGM.data.player_size.x, 610), thisP.base.position.r-degToRad(90));
								thisP.base.position.x = outVec2.x;
								thisP.base.position.y = outVec2.y;
								thisP.base.position.s *= -1;
							break;
						}
					}
				}
			}
			switch (thisPortal.base.nameTag.name) {
				case "cyan_portal_1":
					thisPortal.base.position.r += 0.05 * delta;
				break;
				case "cyan_portal_1_vis":
					thisPortal.base.position.r -= 0.025 * delta;
				break;
				case "purple_portal_1":
					thisPortal.base.position.r += 0.05 * delta;
				break;
				case "purple_portal_1_vis":
					thisPortal.base.position.r -= 0.025 * delta;
				break;
			}
		}
	}
});

let map_test = new Map("Test", "black",
[
	Vec2(40, 40, -degToRad(90), -degToRad(90)),
	Vec2(1240, 680, degToRad(90), -degToRad(90)),
	Vec2(40, 680, degToRad(90), -degToRad(90)),
	Vec2(1240, 40, -degToRad(90), -degToRad(90))
],
[
	circle(1, base(false, nt("TEST", "Wall"), Vec2(100, 40), screen.halfResolution.dup(), colorD("cyan")))
],
[
	rectangle(8, base(false, tag("obZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("goZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
],
[
	rectangle(8, base(false, tag("puZone"), Vec2(1120, 720), screen.halfResolution.dup(), colorD()))
]);

//Controls
let Player1Left = K(
	"P1 Left",
	[
		keyD("a", 0)
	],
	Vec2(null, null)
);
let Player1Right = K(
	"P1 Right",
	[
		keyD("d", 0)
	],
	Vec2(null, null)
);
let Player1Powerup = K(
	"P1 Use Power-up",
	[
		keyD("q", 0)
	],
	Vec2(() => {
		if (!isPaused) {
			switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(1);
				break;
			}
		}
	}, null)
);
let Player2Left = K(
	"P2 Left",
	[
		keyD("ArrowLeft", 0)
	],
	Vec2(null, null)
);
let Player2Right = K(
	"P2 Right",
	[
		keyD("ArrowRight", 0)
	],
	Vec2(null, null)
);
let Player2Powerup = K(
	"P2 Use Power-up",
	[
		keyD("Delete", 0)
	],
	Vec2(() => {
		if (!isPaused) {
			switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(2);
				break;
			}
		}
	}, null)
);
let Player3Left = K(
	"P3 Left",
	[
		keyD("j", 0)
	],
	Vec2(null, null)
);
let Player3Right = K(
	"P3 Right",
	[
		keyD("l", 0)
	],
	Vec2(null, null)
);
let Player3Powerup = K(
	"P3 Use Power-up",
	[
		keyD("u", 0)
	],
	Vec2(() => {
		if (!isPaused) {
			switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(3);
				break;
			}
		}
	}, null)
);
let Player4Left = K(
	"P4 Left",
	[
		keyD("4", 3)
	],
	Vec2(null, null)
);
let Player4Right = K(
	"P4 Right",
	[
		keyD("6", 3)
	],
	Vec2(null, null)
);
let Player4Powerup = K(
	"P4 Use Power-up",
	[
		keyD("7", 3)
	],
	Vec2(() => {
		if (!isPaused) {
			switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(4);
				break;
			}
		}
	}, null)
);

//Controller setup
controllerManager.players = 4;
let Player1Movement = new controllerAxisBinding(1, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = nt(("player_"+(1)), "lineBattle");
			let player = getByNameTag(thisNameTag);

			const s_sign = (player.base.position.s > 0) ? 0 : -180;

			if (player != null && typeof player.ai == "undefined") {
				player.base.position.r = degToRad(e.angle(false) + s_sign);
			}
		}
	}
}, "Movement", 0);
let Player1Menu = new controllerBttnBinding(1, menuToggle, "Menu", "Start");
let Player1ResetGame = new controllerBttnBinding(1, (e) => {
	if (pointMG.winState && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				LBGM.resetGame(true);
				winScreen.hide();
			break;
		}
	}
}, "Reset Game", "Menu");
let Player1PowerupUse = new controllerBttnBinding(1, (e) => {
	if (!isPaused) {
		switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(1);
				break;
			}
	}
}, "Use Power-up", "L1");
let Player2Movement = new controllerAxisBinding(2, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = nt(("player_"+(2)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null && typeof player.ai == "undefined") {
				player.base.position.r = degToRad(e.angle(false));
			}
		}
	}
}, "Movement", 0);
let Player2Menu = new controllerBttnBinding(2, () => {
	let thisNameTag = nt(("player_"+(2)), "lineBattle");
	let player = getByNameTag(thisNameTag);
	if (player != null && typeof player.ai == "undefined") {
		menuToggle();
	}
}, "Menu", "Start");
let Player2ResetGame = new controllerBttnBinding(2, (e) => {
	if (pointMG.winState && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				let thisNameTag = nt(("player_"+(2)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				if (player != null && typeof player.ai == "undefined") {
					LBGM.resetGame(true);
					winScreen.hide();
				}
			break;
		}
	}
}, "Reset Game", "Menu");
let Player2PowerupUse = new controllerBttnBinding(2, (e) => {
	if (!isPaused) {
		switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(2);
				break;
			}
	}
}, "Use Power-up", "L1");
let Player3Movement = new controllerAxisBinding(3, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = nt(("player_"+(3)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null && typeof player.ai == "undefined") {
				player.base.position.r = degToRad(e.angle(false));
			}
		}
	}
}, "Movement", 0);
let Player3Menu = new controllerBttnBinding(3, () => {
	let thisNameTag = nt(("player_"+(3)), "lineBattle");
	let player = getByNameTag(thisNameTag);
	if (player != null && typeof player.ai == "undefined") {
		menuToggle();
	}
}, "Menu", "Start");
let Player3ResetGame = new controllerBttnBinding(3, (e) => {
	if (pointMG.winState && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				let thisNameTag = nt(("player_"+(3)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				if (player != null && typeof player.ai == "undefined") {
					LBGM.resetGame(true);
					winScreen.hide();
				}
			break;
		}
	}
}, "Reset Game", "Menu");
let Player3PowerupUse = new controllerBttnBinding(3, (e) => {
	if (!isPaused) {
		switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(3);
				break;
			}
	}
}, "Use Power-up", "L1");
let Player4Movement = new controllerAxisBinding(4, (e) => {
	if (!e.r && !isPaused) {
		if (gameData.gameMode == 1) {
			let thisNameTag = nt(("player_"+(4)), "lineBattle");
			let player = getByNameTag(thisNameTag);
			if (player != null && typeof player.ai == "undefined") {
				player.base.position.r = degToRad(e.angle(false));
			}
		}
	}
}, "Movement", 0);
let Player4Menu = new controllerBttnBinding(4, () => {
	let thisNameTag = nt(("player_"+(4)), "lineBattle");
	let player = getByNameTag(thisNameTag);
	if (player != null && typeof player.ai == "undefined") {
		menuToggle();
	}
}, "Menu", "Start");
let Player4ResetGame = new controllerBttnBinding(4, (e) => {
	if (pointMG.winState && !isPaused) {
		switch (gameData.gameMode) {
			case 1:
				let thisNameTag = nt(("player_"+(4)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				if (player != null && typeof player.ai == "undefined") {
					LBGM.resetGame(true);
					winScreen.hide();
				}
			break;
		}
	}
}, "Reset Game", "Menu");
let Player4PowerupUse = new controllerBttnBinding(4, (e) => {
	if (!isPaused) {
		switch (gameData.gameMode) {
				case 1:
					LBGM.usePowerup(4);
				break;
			}
	}
}, "Use Power-up", "L1");

//Game data
let gameData = {
	"gameMode":-1, //-1: Menus / 0: Tank War / 1: Line Battle / 2: Ball Bouncers
	"maxPlayers":Vec2(2, 4), //x: players / y: max players
	"showName":true,
	"uiAlpha":0.5,
};

let gameModeData = {
	0:{
		"name":"Tank Battle",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"mode":Vec2(0, 0), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal tank mode
				}
			},
			"map":Vec2(0, 0), //x-current map, y-total maps
			"maps":[] //map array
		}
	},
	1:{
		"name":"Line Battle",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"teams":false, //2v2 (only for 4 player matches)
			"line_length":50, //max line length (longer line makes the game harder but slows down the game!)
			"line_fade":true, //fades line
			"line_alpha_cutoff":0, //only detects collisions at or above this value
			"invert_time":5, //How long in seconds the controls will be inverted
			"object_amount":0, //amount of obstacles to spawn
			"powerups":false, //enables power-ups
			"mode":Vec2(0, 1), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal Tron like mode
				},
				1:{
					"name":"Point Collector" //Collect points to win
				}//Slither.io mode?
			},
			"map":Vec2(0, 0), //x-current map, y-total maps
			"maps":[] //map array
		}
	},
	2:{
		"name":"Ball Bouncers",
		"settings":{
			"winning_points":10, //total points needed to win
			"players":1, //amount of real players
			"ai":true, //enemy ai
			"mode":Vec2(0, 0), //x-current mode, y-total modes
			"modes":{
				0:{
					"name":"Normal" //Normal mode
				}
			},
			"map":Vec2(0, 0), //x-current map, y-total maps
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
	//Debug Settings
	//Show Obstacle Zones option
	this.showObstacleZonesDiv = document.createElement('div');
	this.showObstacleZonesDiv.style.marginLeft = "0px";
	this.showObstacleZonesDiv.style.marginRight = "0px";
	this.showObstacleZonesDiv.style.marginTop = "0px";
	this.showObstacleZonesDiv.style.marginBottom = "0px";
	this.showObstacleZonesDiv.style.width = "100%";
	this.showObstacleZonesDiv.style.height = "50px";
	this.showObstacleZonesDiv.style.backgroundColor = "darkgrey";
	OptionsMenu.optionsSep.appendChild(this.showObstacleZonesDiv);
	this.showObstacleZonesTxt = document.createElement('p');
	this.showObstacleZonesTxt.innerHTML = "Show Obstacle Zones:";
	this.showObstacleZonesTxt.style.fontSize = "35px";
	this.showObstacleZonesTxt.style.marginLeft = "0px";
	this.showObstacleZonesTxt.style.marginRight = "0px";
	this.showObstacleZonesTxt.style.marginTop = "0px";
	this.showObstacleZonesTxt.style.marginBottom = "0px";
	this.showObstacleZonesTxt.style.width = "100%";
	this.showObstacleZonesTxt.style.height = "100%";
	this.showObstacleZonesTxt.style.color = "white";
	this.showObstacleZonesTxt.style.display = "inline";
	this.showObstacleZonesDiv.appendChild(this.showObstacleZonesTxt);
	this.showObstacleZonesChkBx = document.createElement('input');
	this.showObstacleZonesChkBx.type = "checkbox";
	this.showObstacleZonesChkBx.style.marginLeft = "0px";
	this.showObstacleZonesChkBx.style.marginRight = "0px";
	this.showObstacleZonesChkBx.style.marginTop = "0px";
	this.showObstacleZonesChkBx.style.marginBottom = "0px";
	this.showObstacleZonesChkBx.style.width = "50px";
	this.showObstacleZonesChkBx.style.height = "100%";
	this.showObstacleZonesChkBx.style.float = "right";
	this.showObstacleZonesChkBx.style.display = "inline";
	this.showObstacleZonesChkBx.checked = false;
	if (localStorage.getItem("Obstacle_Zones_Show") != null) {
		this.showObstacleZonesChkBx.checked = JSON.parse(localStorage.getItem("Obstacle_Zones_Show"));
	}
	this.showObstacleZonesChkBx.onchange = () => {
		localStorage.setItem("Obstacle_Zones_Show", JSON.stringify(this.showObstacleZonesChkBx.checked));
	};
	this.showObstacleZonesDiv.appendChild(this.showObstacleZonesChkBx);
	//Show Goal Zones option
	this.showGoalZonesDiv = document.createElement('div');
	this.showGoalZonesDiv.style.marginLeft = "0px";
	this.showGoalZonesDiv.style.marginRight = "0px";
	this.showGoalZonesDiv.style.marginTop = "0px";
	this.showGoalZonesDiv.style.marginBottom = "0px";
	this.showGoalZonesDiv.style.width = "100%";
	this.showGoalZonesDiv.style.height = "50px";
	this.showGoalZonesDiv.style.backgroundColor = "darkgrey";
	OptionsMenu.optionsSep.appendChild(this.showGoalZonesDiv);
	this.showGoalZonesTxt = document.createElement('p');
	this.showGoalZonesTxt.innerHTML = "Show Goal Zones:";
	this.showGoalZonesTxt.style.fontSize = "35px";
	this.showGoalZonesTxt.style.marginLeft = "0px";
	this.showGoalZonesTxt.style.marginRight = "0px";
	this.showGoalZonesTxt.style.marginTop = "0px";
	this.showGoalZonesTxt.style.marginBottom = "0px";
	this.showGoalZonesTxt.style.width = "100%";
	this.showGoalZonesTxt.style.height = "100%";
	this.showGoalZonesTxt.style.color = "white";
	this.showGoalZonesTxt.style.display = "inline";
	this.showGoalZonesDiv.appendChild(this.showGoalZonesTxt);
	this.showGoalZonesChkBx = document.createElement('input');
	this.showGoalZonesChkBx.type = "checkbox";
	this.showGoalZonesChkBx.style.marginLeft = "0px";
	this.showGoalZonesChkBx.style.marginRight = "0px";
	this.showGoalZonesChkBx.style.marginTop = "0px";
	this.showGoalZonesChkBx.style.marginBottom = "0px";
	this.showGoalZonesChkBx.style.width = "50px";
	this.showGoalZonesChkBx.style.height = "100%";
	this.showGoalZonesChkBx.style.float = "right";
	this.showGoalZonesChkBx.style.display = "inline";
	this.showGoalZonesChkBx.checked = false;
	if (localStorage.getItem("Goal_Zones_Show") != null) {
		this.showGoalZonesChkBx.checked = JSON.parse(localStorage.getItem("Goal_Zones_Show"));
	}
	this.showGoalZonesChkBx.onchange = () => {
		localStorage.setItem("Goal_Zones_Show", JSON.stringify(this.showGoalZonesChkBx.checked));
	};
	this.showGoalZonesDiv.appendChild(this.showGoalZonesChkBx);
	//Show Power-up Zones option
	this.showPowerupZonesDiv = document.createElement('div');
	this.showPowerupZonesDiv.style.marginLeft = "0px";
	this.showPowerupZonesDiv.style.marginRight = "0px";
	this.showPowerupZonesDiv.style.marginTop = "0px";
	this.showPowerupZonesDiv.style.marginBottom = "0px";
	this.showPowerupZonesDiv.style.width = "100%";
	this.showPowerupZonesDiv.style.height = "50px";
	this.showPowerupZonesDiv.style.backgroundColor = "darkgrey";
	OptionsMenu.optionsSep.appendChild(this.showPowerupZonesDiv);
	this.showPowerupZonesTxt = document.createElement('p');
	this.showPowerupZonesTxt.innerHTML = "Show Power-up Zones:";
	this.showPowerupZonesTxt.style.fontSize = "35px";
	this.showPowerupZonesTxt.style.marginLeft = "0px";
	this.showPowerupZonesTxt.style.marginRight = "0px";
	this.showPowerupZonesTxt.style.marginTop = "0px";
	this.showPowerupZonesTxt.style.marginBottom = "0px";
	this.showPowerupZonesTxt.style.width = "100%";
	this.showPowerupZonesTxt.style.height = "100%";
	this.showPowerupZonesTxt.style.color = "white";
	this.showPowerupZonesTxt.style.display = "inline";
	this.showPowerupZonesDiv.appendChild(this.showPowerupZonesTxt);
	this.showPowerupZonesChkBx = document.createElement('input');
	this.showPowerupZonesChkBx.type = "checkbox";
	this.showPowerupZonesChkBx.style.marginLeft = "0px";
	this.showPowerupZonesChkBx.style.marginRight = "0px";
	this.showPowerupZonesChkBx.style.marginTop = "0px";
	this.showPowerupZonesChkBx.style.marginBottom = "0px";
	this.showPowerupZonesChkBx.style.width = "50px";
	this.showPowerupZonesChkBx.style.height = "100%";
	this.showPowerupZonesChkBx.style.float = "right";
	this.showPowerupZonesChkBx.style.display = "inline";
	this.showPowerupZonesChkBx.checked = false;
	if (localStorage.getItem("Powerup_Zones_Show") != null) {
		this.showPowerupZonesChkBx.checked = JSON.parse(localStorage.getItem("Powerup_Zones_Show"));
	}
	this.showPowerupZonesChkBx.onchange = () => {
		localStorage.setItem("Powerup_Zones_Show", JSON.stringify(this.showPowerupZonesChkBx.checked));
	};
	this.showPowerupZonesDiv.appendChild(this.showPowerupZonesChkBx);
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
	//UI Settings
	this.UISettingsDiv = document.createElement('div');
	this.UISettingsDiv.style.marginLeft = "0px";
	this.UISettingsDiv.style.marginRight = "0px";
	this.UISettingsDiv.style.marginTop = "0px";
	this.UISettingsDiv.style.marginBottom = "0px";
	this.UISettingsDiv.style.width = "100%";
	this.UISettingsDiv.style.height = "50px";
	this.UISettingsDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.UISettingsDiv);
	this.UISettingsTxt = document.createElement('p');
	this.UISettingsTxt.innerHTML = "UI";
	this.UISettingsTxt.style.fontSize = "35px";
	this.UISettingsTxt.style.marginLeft = "0px";
	this.UISettingsTxt.style.marginRight = "0px";
	this.UISettingsTxt.style.marginTop = "0px";
	this.UISettingsTxt.style.marginBottom = "0px";
	this.UISettingsTxt.style.width = "100%";
	this.UISettingsTxt.style.height = "100%";
	this.UISettingsTxt.style.textAlign = "center";
	this.UISettingsTxt.style.color = "white";
	this.UISettingsDiv.appendChild(this.UISettingsTxt);
	//UI opacity option
	this.UIAlphaDiv = document.createElement('div');
	this.UIAlphaDiv.style.marginLeft = "0px";
	this.UIAlphaDiv.style.marginRight = "0px";
	this.UIAlphaDiv.style.marginTop = "0px";
	this.UIAlphaDiv.style.marginBottom = "0px";
	this.UIAlphaDiv.style.width = "100%";
	this.UIAlphaDiv.style.height = "50px";
	this.UIAlphaDiv.style.backgroundColor = "darkgrey";
	this.lineBattleSettingsDiv.appendChild(this.UIAlphaDiv);
	this.UIAlphaTxt = document.createElement('p');
	this.UIAlphaTxt.innerHTML = "UI Alpha:";
	this.UIAlphaTxt.style.fontSize = "35px";
	this.UIAlphaTxt.style.marginLeft = "0px";
	this.UIAlphaTxt.style.marginRight = "0px";
	this.UIAlphaTxt.style.marginTop = "0px";
	this.UIAlphaTxt.style.marginBottom = "0px";
	this.UIAlphaTxt.style.width = "100%";
	this.UIAlphaTxt.style.height = "100%";
	this.UIAlphaTxt.style.color = "white";
	this.UIAlphaTxt.style.display = "inline";
	this.UIAlphaDiv.appendChild(this.UIAlphaTxt);
	this.UIAlphaSlider = document.createElement("input");
	this.UIAlphaSlider.classList.add("slider");
	this.UIAlphaSlider.type = "range";
	this.UIAlphaSlider.min = "0";
	this.UIAlphaSlider.max = "1";
	this.UIAlphaSlider.step = "0.01";
	this.UIAlphaSlider.value = gameData.uiAlpha.toString();
	this.UIAlphaSlider.style.width = "35%";
	this.UIAlphaSlider.style.height = "50%";
	this.UIAlphaSlider.style.marginLeft = "10px";
	this.UIAlphaSlider.style.marginRight = "0px";
	this.UIAlphaSlider.style.marginTop = "0px";
	this.UIAlphaSlider.style.marginBottom = "0px";
	this.UIAlphaSlider.style.appearance = "none";
	this.UIAlphaSlider.style.background = "lightgrey";
	this.UIAlphaSlider.style.outline = "none";
	this.UIAlphaSlider.style.borderRadius = "90px";
	this.UIAlphaSlider.style.display = "inline";
	if (localStorage.getItem("UI_Alpha") != null) {
		this.UIAlphaSlider.value = JSON.parse(localStorage.getItem("UI_Alpha"));
	}
	this.UIAlphaSlider.onchange = () => {
		localStorage.setItem("UI_Alpha", JSON.stringify(this.UIAlphaSlider.value));
	};
	this.UIAlphaDiv.appendChild(this.UIAlphaSlider);
	this.UIAlphaValueTxt = document.createElement('p');
	this.UIAlphaValueTxt.innerHTML = "OFF";
	this.UIAlphaValueTxt.style.fontSize = "35px";
	this.UIAlphaValueTxt.style.marginLeft = "10px";
	this.UIAlphaValueTxt.style.marginRight = "0px";
	this.UIAlphaValueTxt.style.marginTop = "0px";
	this.UIAlphaValueTxt.style.marginBottom = "0px";
	this.UIAlphaValueTxt.style.width = "100%";
	this.UIAlphaValueTxt.style.height = "100%";
	this.UIAlphaValueTxt.style.color = "white";
	this.UIAlphaValueTxt.style.display = "inline";
	this.UIAlphaDiv.appendChild(this.UIAlphaValueTxt);
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
	this.gameJoltNameSettingsTxt.innerHTML = "Use GameJolt Name?";
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
	this.gameJoltAvatarSettingsTxt.innerHTML = "Use GameJolt Avatar?";
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
		if (isPaused) {
			this.showObstacleZonesTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.showGoalZonesTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.showPowerupZonesTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineBattleSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineFadeTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineLengthTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineLengthValueTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineCollCutoffTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.lineCollCutoffValueTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.UISettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.UIAlphaTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.UIAlphaValueTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.playerSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player1NameSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.gameJoltNameSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player1AvatarSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.gameJoltAvatarSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player2NameSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player2AvatarSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player3NameSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player3AvatarSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player4NameSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.player4AvatarSettingsTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
			this.showNameTxt.style.fontSize = ((35*OptionsMenu.menuScale)*screen.getScale().x)+"px";
		}
		if (currentMap != null) {
			let obstacleZones = getByNameTag(tag("obZone"), 2, false, true);
			if (!Array.isArray(obstacleZones)) {
				obstacleZones = [obstacleZones];
			}
			if (this.showObstacleZonesChkBx.checked) {
				if (obstacleZones[0] == null) {
					for (let i=0,length=currentMap.obstacleZones.length;i<length;i++) {
						currentMap.obstacleZones[i].layerNumber = 8;
						currentMap.obstacleZones[i].base.color.color = "red";
						currentMap.obstacleZones[i].base.color.alpha = 0.1;
						addObject(currentMap.obstacleZones[i], 8);
					}
				}
			} else {
				if (obstacleZones[0] != null) {
					deleteByNameTag(tag("obZone"), 2, true);
				}
			}
			let goalZones = getByNameTag(tag("goZone"), 2, false, true);
			if (!Array.isArray(goalZones)) {
				goalZones = [goalZones];
			}
			if (this.showGoalZonesChkBx.checked) {
				if (goalZones[0] == null) {
					for (let i=0,length=currentMap.goalZones.length;i<length;i++) {
						currentMap.goalZones[i].layerNumber = 8;
						currentMap.goalZones[i].base.color.color = "lightgreen";
						currentMap.goalZones[i].base.color.alpha = 0.1;
						addObject(currentMap.goalZones[i], 8);
					}
				}
			} else {
				if (goalZones[0] != null) {
					deleteByNameTag(tag("goZone"), 2, true);
				}
			}
			let powerupZones = getByNameTag(tag("puZone"), 2, false, true);
			if (!Array.isArray(powerupZones)) {
				powerupZones = [powerupZones];
			}
			if (this.showPowerupZonesChkBx.checked) {
				if (powerupZones[0] == null) {
					for (let i=0,length=currentMap.powerupZones.length;i<length;i++) {
						currentMap.powerupZones[i].layerNumber = 8;
						currentMap.powerupZones[i].base.color.color = "cyan";
						currentMap.powerupZones[i].base.color.alpha = 0.1;
						addObject(currentMap.powerupZones[i], 8);
					}
				}
			} else {
				if (powerupZones[0] != null) {
					deleteByNameTag(tag("puZone"), 2, true);
				}
			}
		}
		gameModeData[1].settings.line_fade = this.lineFadeChkBx.checked;
		gameModeData[1].settings.line_length = this.lineLengthSlider.value;
		this.lineLengthValueTxt.innerHTML = this.lineLengthSlider.value;
		gameModeData[1].settings.line_alpha_cutoff = this.lineCollCutoffSlider.value;
		if (this.lineCollCutoffSlider.value == 0) {
			this.lineCollCutoffValueTxt.innerHTML = "OFF";
		} else {
			this.lineCollCutoffValueTxt.innerHTML = Math.round(this.lineCollCutoffSlider.value*100)+"%";
		}
		gameData.uiAlpha = parseFloat(this.UIAlphaSlider.value);
		if (this.UIAlphaSlider.value == 0) {
			this.UIAlphaValueTxt.innerHTML = "OFF";
		} else {
			this.UIAlphaValueTxt.innerHTML = Math.round(this.UIAlphaSlider.value*100)+"%";
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
		this.backBttn.style.fontSize = ((35*SettingsMenu.menuScale)*screen.getScale().x)+"px";
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
	this.size = Vec2(500, 100);
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
	this.menuSize = Vec2();
	this.menuScale = 0.8;
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
		this.gjLoginBG = rectangle(4, base(true, nt("Background", gjLoginTag), Vec2(300, 200), screen.halfResolution, colorD("darkgrey"), shadow(Vec2(5, 5), "black", 5)));
		this.gjLoginTitle = text(5, "Game Jolt Login", base(true, nt("Title", gjLoginTag), Vec2("30px Arial", false, "center"), screen.halfResolution.subV(Vec2(0, 82.5)), colorD("white")));
		this.userNameTxt = text(5, "Username:", base(true, nt("Username_Text", gjLoginTag), Vec2("20px Arial", false, "center"), screen.halfResolution.subV(Vec2(75, 35)), colorD("white")));
		this.userNameTxtBox = textBox(5, "30px Arial", "white", base(true, nt("Username", gjLoginTag), Vec2(125, 50), screen.halfResolution.subV(Vec2(-50, 35)), colorD("black")));
		this.userNameTxtBox.value = userName;
		this.tokenTxt = text(5, "Token:", base(true, nt("Token_Text", gjLoginTag), Vec2("20px Arial", false, "center"), screen.halfResolution.subV(Vec2(75, -20)), colorD("white")));
		this.tokenTxtBox = textBox(5, "30px Arial", "white", base(true, nt("Token", gjLoginTag), Vec2(125, 50), screen.halfResolution.subV(Vec2(-50, -20)), colorD("black")));
		this.tokenTxtBox.value = token;
		this.gjLoginBttn = rectangle(5, base(true, nt("Login_Bttn", gjLoginTag), Vec2(75, 35), screen.halfResolution.subV(Vec2(0, -75)), colorD("black"), shadow(Vec2(5, 5), "black", 7)));
		this.gjLoginBttnTxt = text(6, "Login", base(true, nt("Login_Bttn_Txt", gjLoginTag), Vec2("20px Arial", false, "center"), screen.halfResolution.subV(Vec2(0, -75)), colorD("white")));
		this.gjLoginBttnLink = bttnL(this.gjLoginBttn, this.gjLoginBttnTxt, recCollision, () => {
			if (!isPaused) {
				if (user != null) {
					GJAPI.UserLogout();
					user = null;
				} else {
					login(this.userNameTxtBox.value, this.tokenTxtBox.value);
				}
			}
		}, Vec2(colorD("black"), colorD("grey")));
		this.gjLoginBttnLink.link();
		this.gjLoginCloseBttn = sprite(5, base(true, nt("Close_Bttn", gjLoginTag), Vec2(15, 15), screen.halfResolution.subV(Vec2(-140, 90)), Close_UI.getColor(), shadow(Vec2(5, 5), "black", 7)));
		this.gjLoginCloseBttnLink = bttnL(this.gjLoginCloseBttn, null, recCollision, () => {
			if (!isPaused) {
				this.deleteGJLogin();
			}
		}, Vec2(Close_UI.getColor(), Close_UI_Hover.getColor()));
		this.gjLoginCloseBttnLink.link();
	}
	this.deleteGJLogin = function() {
		userName = this.userNameTxtBox.value;
		token = this.tokenTxtBox.value;
		this.gjLoginBttnLink.unlink();
		this.gjLoginCloseBttnLink.unlink();
		deleteByNameTag(nt("", gjLoginTag), 2);
		this.gjLoginBG = null;
		this.gjLoginBttnTxt = null;
		this.gjLoginBttnLink = null;
		this.gjLoginCloseBttnLink = null;
		if (!window.location.href.includes("gamejolt")) {
			this.mainLoginBttnLink.link();
		}
	}
	this.spawnMainMenu = function() {
		this.mainMenuBG = sprite(1, base(true, nt("Background", mainMenuTag), screen.resolution, screen.halfResolution, mainMenuBG.getColor()));
		this.mainMenuTitle = text(2, "Minigame Collection", base(true, nt("Title", mainMenuTag), Vec2("60px Arial", false, "center"), Vec2(screen.halfResolution.x, 40), colorD("white"), shadow(Vec2(2.5, 2.5), "black", 0)));
		this.mainMenuLineBattleBttn = rectangle(2, base(true, nt("LineBattleBttn", mainMenuTag), Vec2(200, 100), screen.halfResolution, colorD("black"), shadow(Vec2(5, 5), "black", 7)));
		this.mainMenuLineBattleBttnTxt = text(3, "Line Battle", base(true, nt("LineBattleBttnTxt", mainMenuTag), Vec2("40px Arial", false, "center"), screen.halfResolution, colorD("white")));
		this.mainMenuLineBattleBttnLink = bttnL(this.mainMenuLineBattleBttn, this.mainMenuLineBattleBttnTxt, recCollision, () => {
			if (this.gjLoginBG == null && !isPaused) {
				this.menuState = 2;
				this.lbBackground.play();
			}
		}, Vec2(colorD("black"), colorD("grey")));
		this.mainMenuLineBattleBttnLink.link();
		if (!window.location.href.includes("gamejolt")) {
			this.mainGjLoginBttn = rectangle(2, base(true, nt("Login_Bttn", mainMenuTag), Vec2(100, 50), Vec2(1225, 690), colorD("black"), shadow(Vec2(0, 0), "white", 5)));
			this.mainGjLoginTxt = text(6, "Login", base(true, nt("Login_Bttn_Txt", mainMenuTag), Vec2("20px Arial", false, "center"), Vec2(1225, 690), colorD("white")));
			this.mainLoginBttnLink = bttnL(this.mainGjLoginBttn, this.mainGjLoginTxt, recCollision, () => {
				if (this.gjLoginBG == null && !isPaused) {
					this.spawnGJLogin();
				}
			}, Vec2(colorD("black"), colorD("grey")));
			this.mainLoginBttnLink.link();
		}
		this.mainMenuVersionNum = text(2, version, base(true, nt("Version", mainMenuTag), Vec2("20px Arial", false, "left"), Vec2(5, screen.resolution.y-10), colorD("white"), shadow(Vec2(2.5, 2.5), "black", 0)));
	}
	this.deleteMainMenu = function() {
		this.mainMenuLineBattleBttnLink.unlink();
		if (!window.location.href.includes("gamejolt")) {
			this.mainLoginBttnLink.unlink();
		}
		deleteByNameTag(nt("", mainMenuTag), 2);
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
	this.lbModeSlider.max = gameModeData[1].settings.mode.y;
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
	//AI enable
	this.powerupBttn = document.createElement("button");
	this.powerupBttn.innerHTML = "Power-ups";
	this.powerupBttn.style.textAlign = "center";
	this.powerupBttn.style.backgroundColor = "red";
	this.powerupBttn.style.color = "white";
	this.powerupBttn.style.margin = "0px";
	this.powerupBttn.style.position = "fixed";
	this.powerupBttn.onmouseover = () => {
		switch (gameModeData[1].settings.powerups) {
			case false:
				this.powerupBttn.style.backgroundColor = "lightred";
			break;
			case true:
				this.powerupBttn.style.backgroundColor = "lightgreen";
			break;
		}
	};
	this.powerupBttn.onmouseout = () => {
		switch (gameModeData[1].settings.powerups) {
			case false:
				this.powerupBttn.style.backgroundColor = "red";
			break;
			case true:
				this.powerupBttn.style.backgroundColor = "green";
			break;
		}
	};
	this.powerupBttn.onclick = () => {
		gameModeData[1].settings.powerups = !gameModeData[1].settings.powerups;
		switch (gameModeData[1].settings.powerups) {
			case false:
				this.powerupBttn.style.backgroundColor = "red";
			break;
			case true:
				this.powerupBttn.style.backgroundColor = "green";
			break;
		}
	};
	this.lbMenu.appendChild(this.powerupBttn);
	//AI enable
	let aiState = 0;
	this.aiBttn = document.createElement("button");
	this.aiBttn.innerHTML = "AI Enable";
	this.aiBttn.style.textAlign = "center";
	this.aiBttn.style.backgroundColor = "red"; //Change later
	this.aiBttn.style.color = "white";
	this.aiBttn.style.margin = "0px";
	this.aiBttn.style.position = "fixed";
	this.aiBttn.onmouseover = () => {
		switch (aiState) {
			case 0:
				this.aiBttn.style.backgroundColor = "lightred";
			break;
			case 1:
				this.aiBttn.style.backgroundColor = "lightgreen";
			break;
		}
	};
	this.aiBttn.onmouseout = () => {
		switch (aiState) {
			case 0:
				this.aiBttn.style.backgroundColor = "red";
			break;
			case 1:
				this.aiBttn.style.backgroundColor = "green";
			break;
		}
	};
	this.aiBttn.onclick = () => {
		aiState++;
		if (aiState > 1) {
			aiState = 0;
		}
		switch (aiState) {
			case 0:
				this.aiBttn.style.backgroundColor = "red";
			break;
			case 1:
				this.aiBttn.style.backgroundColor = "green";
			break;
		}
	};
	this.lbMenu.appendChild(this.aiBttn);
	//Real players
	this.aiPlayersTitle = document.createElement("p");
	this.aiPlayersTitle.innerHTML = "AI Players: ";
	this.aiPlayersTitle.style.textAlign = "center";
	this.aiPlayersTitle.style.color = "white";
	this.aiPlayersTitle.style.margin = "0px";
	this.aiPlayersTitle.style.position = "fixed";
	this.lbMenu.appendChild(this.aiPlayersTitle);
	this.aiPlayersSlider = document.createElement("input");
	this.aiPlayersSlider.classList.add("slider");
	this.aiPlayersSlider.type = "range";
	this.aiPlayersSlider.max = "4";
	this.aiPlayersSlider.min = "1";
	this.aiPlayersSlider.value = "1";
	this.aiPlayersSlider.style.margin = "0px";
	this.aiPlayersSlider.style.position = "fixed";
	this.aiPlayersSlider.style.appearance = "none";
	this.aiPlayersSlider.style.background = "lightgrey";
	this.aiPlayersSlider.style.outline = "none";
	this.aiPlayersSlider.style.borderRadius = "90px";
	this.lbMenu.appendChild(this.aiPlayersSlider);
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
		this.menuSize = Vec2(screen.getDeviceRes().x, screen.getDeviceRes().y);
		let halfSize = this.menuSize.div(2);
		//lb menu
		this.lbBackground.style.top = (halfSize.y-(this.lbBackground.getBoundingClientRect().height/2))+"px";
		this.lbBackground.style.left = (halfSize.x-(this.lbBackground.getBoundingClientRect().width/2))+"px";
		this.lbTitle.style.left = (halfSize.x-(this.lbTitle.getBoundingClientRect().width/2))+"px";
		this.lbTitle.style.fontSize = ((60*this.menuScale)*screen.getScale().x)+"px";
		this.lbPlayersTitle.style.top = parseFloat(this.lbPlayersSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbPlayersTitle.style.left = (halfSize.x-(this.lbPlayersTitle.getBoundingClientRect().width/2))+"px";
		this.lbPlayersTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbPlayersTitle.innerHTML = "Players: "+gameData.maxPlayers.x;
		this.lbPlayersSlider.style.top = (120*screen.getScale().y)+"px";
		this.lbPlayersSlider.style.left = (halfSize.x-(this.lbPlayersSlider.getBoundingClientRect().width/2))+"px";
		this.lbPlayersSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbPlayersSlider.style.height = (20*screen.getScale().y)+"px";
		gameData.maxPlayers.x = parseInt(this.lbPlayersSlider.value);
		this.lbModeTitle.style.top = parseFloat(this.lbModeSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbModeTitle.style.left = (halfSize.x-(this.lbModeTitle.getBoundingClientRect().width/2))+"px";
		this.lbModeTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbModeTitle.innerHTML = "Mode: "+gameModeData[1].settings.modes[gameModeData[1].settings.mode.x].name;
		this.lbModeSlider.style.top = (180*screen.getScale().y)+"px";
		this.lbModeSlider.style.left = (halfSize.x-(this.lbModeSlider.getBoundingClientRect().width/2))+"px";
		this.lbModeSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbModeSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.mode.x = parseInt(this.lbModeSlider.value);
		this.lbMapTitle.style.top = parseFloat(this.lbMapSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbMapTitle.style.left = (halfSize.x-(this.lbMapTitle.getBoundingClientRect().width/2))+"px";
		this.lbMapTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbMapTitle.innerHTML = "Map: "+gameModeData[1].settings.maps[gameModeData[1].settings.map.x].id;
		this.lbMapSlider.style.top = (240*screen.getScale().y)+"px";
		this.lbMapSlider.style.left = (halfSize.x-(this.lbMapSlider.getBoundingClientRect().width/2))+"px";
		this.lbMapSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbMapSlider.style.height = (20*screen.getScale().y)+"px";
		this.lbMapSlider.max = gameModeData[1].settings.map.y;
		gameModeData[1].settings.map.x = parseInt(this.lbMapSlider.value);
		this.lbWinPointsTitle.style.top = parseFloat(this.lbWinPointsSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbWinPointsTitle.style.left = (halfSize.x-(this.lbWinPointsTitle.getBoundingClientRect().width/2))+"px";
		this.lbWinPointsTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbWinPointsTitle.innerHTML = "Winning Points: "+gameModeData[1].settings.winning_points;
		this.lbWinPointsSlider.style.top = (300*screen.getScale().y)+"px";
		this.lbWinPointsSlider.style.left = (halfSize.x-(this.lbWinPointsSlider.getBoundingClientRect().width/2))+"px";
		this.lbWinPointsSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbWinPointsSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.winning_points = parseInt(this.lbWinPointsSlider.value);
		this.lbObjAmountTitle.style.top = parseFloat(this.lbObjAmountSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbObjAmountTitle.style.left = (halfSize.x-(this.lbObjAmountTitle.getBoundingClientRect().width/2))+"px";
		this.lbObjAmountTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbObjAmountTitle.innerHTML = "Obstacles: "+gameModeData[1].settings.object_amount;
		this.lbObjAmountSlider.style.top = (360*screen.getScale().y)+"px";
		this.lbObjAmountSlider.style.left = (halfSize.x-(this.lbObjAmountSlider.getBoundingClientRect().width/2))+"px";
		this.lbObjAmountSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbObjAmountSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.object_amount = parseInt(this.lbObjAmountSlider.value);
		this.lbInvertTimeTitle.style.top = parseFloat(this.lbInvertTimeSlider.style.top)-(25*screen.getScale().y)+"px";
		this.lbInvertTimeTitle.style.left = (halfSize.x-(this.lbInvertTimeTitle.getBoundingClientRect().width/2))+"px";
		this.lbInvertTimeTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.lbInvertTimeTitle.innerHTML = "Invert Time: "+gameModeData[1].settings.invert_time;
		this.lbInvertTimeSlider.style.top = (420*screen.getScale().y)+"px";
		this.lbInvertTimeSlider.style.left = (halfSize.x-(this.lbInvertTimeSlider.getBoundingClientRect().width/2))+"px";
		this.lbInvertTimeSlider.style.width = (300*screen.getScale().x)+"px";
		this.lbInvertTimeSlider.style.height = (20*screen.getScale().y)+"px";
		gameModeData[1].settings.invert_time = parseInt(this.lbInvertTimeSlider.value);
		this.powerupBttn.style.left = (halfSize.x-(this.aiBttn.getBoundingClientRect().width/2))+"px";
		this.powerupBttn.style.top = (460*screen.getScale().y)+"px";
		this.powerupBttn.style.width = (200*screen.getScale().x)+"px";
		this.powerupBttn.style.height = (35*screen.getScale().y)+"px";
		this.powerupBttn.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.aiBttn.style.left = (halfSize.x-(this.aiBttn.getBoundingClientRect().width/2))+"px";
		this.aiBttn.style.top = (500*screen.getScale().y)+"px";
		this.aiBttn.style.width = (200*screen.getScale().x)+"px";
		this.aiBttn.style.height = (35*screen.getScale().y)+"px";
		this.aiBttn.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		//Change this after mod is finished
		if (gameModeData[1].settings.mode.x != 0 || gameModeData[1].settings.object_amount != 0) {
			aiState = 0;
			this.aiBttn.style.backgroundColor = "red";
			if (ModLoader.mods.some((m)=>{return m.id == "AI_TEST_FOR_LB"})) {
				ModLoader.deleteMod("AI_TEST_FOR_LB");
			}
		} else {
			switch (aiState) {
				case 0:
					if (ModLoader.mods.some((m)=>{return m.id == "AI_TEST_FOR_LB"})) {
						ModLoader.deleteMod("AI_TEST_FOR_LB");
						gameModeData[1].settings.ai = false;
					}
				break;
				case 1:
					if (!ModLoader.mods.some((m)=>{return m.id == "AI_TEST_FOR_LB"})) {
						ModLoader.path = "./Mods/AI_TEST_FOR_LB.js";
						ModLoader.loadBttn.onclick();
						ModLoader.path = "";
						gameModeData[1].settings.ai = true;
					}
				break;
			}
		}
		if (aiState == 0) {
			this.aiPlayersTitle.style.display = "none";
			this.aiPlayersSlider.style.display = "none";
		}
		if (aiState == 1) {
			this.aiPlayersTitle.style.display = "inline";
			this.aiPlayersSlider.style.display = "inline";
		}
		this.aiPlayersTitle.style.top = parseFloat(this.aiPlayersSlider.style.top)-(25*screen.getScale().y)+"px";
		this.aiPlayersTitle.style.left = (halfSize.x-(this.aiPlayersTitle.getBoundingClientRect().width/2))+"px";
		this.aiPlayersTitle.style.fontSize = ((30*this.menuScale)*screen.getScale().x)+"px";
		this.aiPlayersTitle.innerHTML = "AI Players: "+this.aiPlayersSlider.value;
		this.aiPlayersSlider.style.top = (530*screen.getScale().y)+"px";
		this.aiPlayersSlider.style.left = (halfSize.x-(this.aiPlayersSlider.getBoundingClientRect().width/2))+"px";
		this.aiPlayersSlider.style.width = (300*screen.getScale().x)+"px";
		this.aiPlayersSlider.style.height = (20*screen.getScale().y)+"px";
		this.aiPlayersSlider.max = gameData.maxPlayers.x.toString();
		gameModeData[1].settings.players = gameData.maxPlayers.x-parseInt(this.aiPlayersSlider.value);
		if (parseInt(this.aiPlayersSlider.value) > gameData.maxPlayers.x) {
			this.aiPlayersSlider.value = gameData.maxPlayers.x.toString();
		}
		this.lbPlayBttn.style.left = (halfSize.x-(this.lbPlayBttn.getBoundingClientRect().width/2))+"px";
		this.lbPlayBttn.style.width = (300*screen.getScale().x)+"px";
		this.lbPlayBttn.style.height = (50*screen.getScale().y)+"px";
		this.lbPlayBttn.style.fontSize = ((40*this.menuScale)*screen.getScale().x)+"px";
		this.lbBackBttn.style.left = (halfSize.x-(this.lbBackBttn.getBoundingClientRect().width/2))+"px";
		this.lbBackBttn.style.width = (300*screen.getScale().x)+"px";
		this.lbBackBttn.style.height = (50*screen.getScale().y)+"px";
		this.lbBackBttn.style.fontSize = ((40*this.menuScale)*screen.getScale().x)+"px";
		if (aiState == 0) {
			this.lbPlayBttn.style.top = (560*screen.getScale().y)+"px";
			this.lbBackBttn.style.top = (620*screen.getScale().y)+"px";
		}
		if (aiState == 1) {
			this.lbPlayBttn.style.top = (620*screen.getScale().y)+"px";
			this.lbBackBttn.style.top = (680*screen.getScale().y)+"px";
		}
		//State
		if (gameData.gameMode != -1) {
			if (this.mainMenuBG != null) {
				this.deleteMainMenu();
			}
			this.lbMenu.style.display = "none";
		} else {
			pointMG.reset(true);
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
		let thisNameTag = nt(("player_"+id), "lineBattle");
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
					let thisNameTag = nt(("player_"+(p.index+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (typeof player.ai == "undefined") {
						player.base.position.r -= 0.1 * delta;
					}
				}
			}
			p.controls.right.functions.x = () => {
				if (gameData.gameMode != -1) {
					let thisNameTag = nt(("player_"+(p.index+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (typeof player.ai == "undefined") {
						player.base.position.r += 0.1 * delta;
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

//Points manager
function pointManager() {
	this.points = [];
	this.newPoints = (name="") => {
		this.points.push({"name":name, "points":0});
	}
	this.getPoints = (name="") => {
		return this.points.find((p) => {return p.name == name});
	}
	this.indexToName = (index=0) => {
		return this.points[index].name;
	}
	this.changePoints = (name="", command="set", input=0, exclude=false) => {
		for (let i=0,l=this.points.length;i<l;i++) {
			let thisPoints = this.points[i];
			if (!Array.isArray(name)) {
				if (thisPoints.name == name) {
					switch (command) {
						case "set":
							thisPoints.points = input;
						break;
						case "add":
							thisPoints.points += input;
						break;
						case "sub":
							if (thisPoints.points != 0) {
								thisPoints.points -= input;
							}
						break;
						case "mul":
							if (thisPoints.points != 0) {
								thisPoints.points *= input;
							} else {
								thisPoints.points += 1;
							}
						break;
						case "div":
							if (thisPoints.points != 0) {
								thisPoints.points /= input;
							}
						break;
					}
					thisPoints.points = Math.floor(thisPoints.points);
				}
			} else {
				if (!exclude) {
					if (name.includes(thisPoints.name)) {
						switch (command) {
							case "set":
								thisPoints.points = input;
							break;
							case "add":
								thisPoints.points += input;
							break;
							case "sub":
								if (thisPoints.points != 0) {
									thisPoints.points -= input;
								}
							break;
							case "mul":
								if (thisPoints.points != 0) {
									thisPoints.points *= input;
								} else {
									thisPoints.points += 1;
								}
							break;
							case "div":
								if (thisPoints.points != 0) {
									thisPoints.points /= input;
								}
							break;
						}
						thisPoints.points = Math.floor(thisPoints.points);
					}
				} else {
					if (!name.includes(thisPoints.name)) {
						switch (command) {
							case "set":
								thisPoints.points = input;
							break;
							case "add":
								thisPoints.points += input;
							break;
							case "sub":
								if (thisPoints.points != 0) {
									thisPoints.points -= input;
								}
							break;
							case "mul":
								if (thisPoints.points != 0) {
									thisPoints.points *= input;
								} else {
									thisPoints.points += 1;
								}
							break;
							case "div":
								if (thisPoints.points != 0) {
									thisPoints.points /= input;
								}
							break;
						}
						thisPoints.points = Math.floor(thisPoints.points);
					}
				}
			}
		}
	}
	this.targetPoints = 0;
	this.winState = false;
	this.tiedState = false;
	this.winner = null;
	this.reset = (hardReset=false) => {
		if (hardReset) {
			this.points = [];
			this.targetPoints = 0;
			this.winState = false;
		this.tiedState = false;
		} else {
			for (let i=0,l=this.points.length;i<l;i++) {
				this.points[i].points = 0;
			}
		}
		this.winner = null;
	}
	const update = () => {
		let sortedPoints = this.points.toSorted((a, b) => {return b.points - a.points});
		if (sortedPoints.length != 0 && sortedPoints[0].points >= this.targetPoints) {
			if (sortedPoints[0].points == sortedPoints[1].points) {
				this.winState = false;
				this.tiedState = true;
			} else {
				this.winState = true;
				this.tiedState = false;
				this.winner = sortedPoints[0].name;
			}
		}
	}
	addUpdate(update, "pointMG");
}

const pointMG = new pointManager();

//Tank War game manager
const TWGM = new tankWarGM();
function tankWarGM() {
	let localMap = currentMap;
	this.data = {
		"player_speed":Vec2(2.5, 5), //Every players base speed/boost speed
		//More advanced tank sprites for upgrades (split full sprite into multiple)
		//Tread mark size and fading speed
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
		"player_size":Vec2(50, 50), //Every players size
		"line_size":Vec2(15, 15), //Every players line size
		"obstacle":false,
		"end_of_match":false, //True when someone wins a match
		"players_loaded":false, //True when all players are loaded
		"obstacles_loaded":false, //True when all obstacles are loaded
		"goal_loaded":false, //True when the goal is loaded
		"game_loaded":false, //True when the players, obstacles, and goal is loaded
		"teams":false,
		"pointCollector":false,
		"player_image":{
			0:{
				"img":blueBall.getColor(),
				"color":colorD("blue")
			},
			1:{
				"img":redBall.getColor(),
				"color":colorD("red")
			},
			2:{
				"img":yellowBall.getColor(),
				"color":colorD("yellow")
			},
			3:{
				"img":greenBall.getColor(),
				"color":colorD("green")
			}
		},
		"obstacles_data":{
			0:{
				"color":colorD("darkred"),
				"size":Vec2(5, 5, 8),
				"points":Vec2(1, null, "sub"),
				"description":"Takes a point away from you."
			},
			1:{
				"color":colorD("#FF4A00"),
				"size":Vec2(7, 7, 10),
				"points":Vec2(1, 1, "sub", "sub"),
				"description":"Takes a point away from everyone."
			},
			"length":2
		},
		"points_data":{
			0:{
				"color":colorD("green"),
				"size":Vec2(10, 10, 13),
				"points":Vec2(1, null, "add"),
				"description":"Gives you 1 point"
			},
			1:{
				"color":colorD("#FFFD00"),
				"size":Vec2(10, 10, 13),
				"points":Vec2(2, null, "add"),
				"description":"Gives you 2 point"
			},
			2:{
				"color":colorD("purple"),
				"size":Vec2(10, 10, 13),
				"points":Vec2(1, 1, "add", "sub"),
				"description":"Steals 1 point from opponents and gives you 1 point"
			},
			3:{
				"color":colorD("lightblue"),
				"size":Vec2(10, 10, 13),
				"points":Vec2(2, null, "mul"),
				"description":"Doubles your points"
			},
			4:{
				"color":colorD("darkblue"),
				"size":Vec2(10, 10, 13),
				"points":Vec2(1, 2, "add", "div"),
				"description":"Halves your opponents points and gives you 1 point"
			},
			"length":5
		},
		"powerup_data":{
			0:{
				"img":powerups.getColor(),
				"glow":"#6abe30",
				"img_pos":Vec2(),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":7,
				"timer":Vec2(1, 10),
				"description":"Boosts holding players speed"
			},
			1:{
				"img":powerups.getColor(),
				"glow":"#beba30",
				"img_pos":Vec2(25, 0),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":3,
				"timer":Vec2(1, 10),
				"description":"Slows down a random player"
			},
			2:{
				"img":powerups.getColor(),
				"glow":"#a60da8",
				"img_pos":Vec2(50, 0),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":null,
				"timer":Vec2(1, 10),
				"description":"Inverts a random player's controls"
			},
			3:{
				"img":powerups.getColor(),
				"glow":"#0fa9c5",
				"img_pos":Vec2(0, 25),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":null,
				"timer":null,
				"description":"Switches holding player places with a random player"
			},
			4:{
				"img":powerups.getColor(),
				"glow":"#0f1dc5",
				"img_pos":Vec2(25, 25),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":null,
				"timer":Vec2(1, 10),
				"description":"Makes holding player invincible for a short time"
			},
			//Random (has to be last)
			5:{
				"img":powerups.getColor(),
				"glow":"#bdbdbd",
				"img_pos":Vec2(50, 25),
				"size":Vec2(25, 25),
				"scale":1.5,
				"modifier":null,
				"timer":null,
				"description":"Uses a random power-up effect"
			},
			"length":6,
			"blank":{
				"img":powerups.getColor(),
				"img_pos":Vec2(0, 50),
				"size":Vec2(25, 25),
				"scale":1.5,
			}
		}
	};
	this.powerupTimer = T(MSecond(10), true, false, false, () => {
		let check = getByNameTag(tag("power-up"), 2, false, true);
		if (check == null && gameModeData[1].settings.powerups && gameData.gameMode == 1) {
			this.spawnPowerup();
		}
	}, "power-up_timer", "lineBattle");
	this.getObstacleTypeData = (type) => {
		return this.data.obstacles_data[type];
	}
	this.getGoalTypeData = (type) => {
		return this.data.points_data[type];
	}
	this.spawnPlayers = () => {
		this.data.players_loaded = false;
		for (let i=0;i<gameData.maxPlayers.x;i++) {
			const data = this.data;
			let thisNameTag = nt(("player_"+(i+1)), "lineBattle");
			if (pointMG.points.length != gameData.maxPlayers.x+1) {
				pointMG.newPoints(thisNameTag.name);
			}
			deleteByNameTag(thisNameTag);
			let thisTextNameTag = nt(("player_"+(i+1)+"_points"), "lineBattle");
			deleteByNameTag(thisTextNameTag);
			let thisLineNameTag = nt(("player_"+(i+1)+"_line"), "lineBattle");
			deleteByNameTag(thisLineNameTag);
			let spawns = currentMap.spawns;
			let spawnPoint = ZERO;
			if (spawns.length > 4) {
				spawnPoint = spawns[rangeInt(0, spawns.length-1)];
			} else {
				spawnPoint = spawns[i];
			}
			let newPlayer = sprite(5, base(true, thisNameTag.duplicate(), data.player_size, spawnPoint.duplicate(), data.player_image[i].img.duplicate()));
			let playerPoints = text(5, pointMG.points[i].points, base(true, thisTextNameTag.duplicate(), Vec2("25px Arial", false, "center"), spawnPoint.duplicate().subV(Vec2(0, newPlayer.base.size.div(2).y)), colorD("white")));
			newPlayer.collectedPoints = false;
			newPlayer.dead = false;
			newPlayer.powerup = null;
			newPlayer.invincible = false;
			newPlayer.base.position.s = this.data.player_speed;
			newPlayer.hitPlayer = false;
			newPlayer.linePieces = [];
			newPlayer.lineNameTag = thisLineNameTag.duplicate();
			newPlayer.drawLine = () => {
				let position = Vec2(newPlayer.base.position.x, newPlayer.base.position.y, newPlayer.base.position.r, newPlayer.base.position.o)
				let linePiece = rectangle(4, base(false, newPlayer.lineNameTag.duplicate(), data.line_size, position, data.
				player_image[i].color.duplicate()));
				linePiece.time = 0;
				newPlayer.linePieces.push(linePiece.duplicate());
				addObject(newPlayer.linePieces[newPlayer.linePieces.length-1]);
			};
			newPlayer.deleteLine = () => {
				deleteByNameTag(newPlayer.lineNameTag);
				newPlayer.linePieces = [];
			};
		}
		this.data.players_loaded = true;
	}
	this.spawnObstacles = (silent=false, avoid=false) => {
		if (!silent) {
			this.data.obstacles_loaded = false;
		}
		for (let i=0;i<gameModeData[1].settings.object_amount;i++) {
			let thisNameTag = nt(("obstacle_"+(i+1)), "lineBattle_obstacles");
			if (!silent) {
				deleteByNameTag(thisNameTag);
			}
			if (getByNameTag(thisNameTag) == null) {
				let obstacleType = rangeInt(0, this.data.obstacles_data.length-1);
				let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
				let zone = currentMap.obstacleZones[zoneIndex];
				let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleType).size.x);
				let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleType).size.y);
				let spawnPoint = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
				let newObstacle = light(3, base(true, thisNameTag.duplicate(), this.getObstacleTypeData(obstacleType).size, spawnPoint.duplicate(), this.getObstacleTypeData(obstacleType).color), 0.5);
				newObstacle.obstacleType = obstacleType;
			}
		}
		if (!silent || avoid) {
			let obstacleArray = getByNameTag(tag("lineBattle_obstacles"), 2);
			if (obstacleArray != null) {
				let currentPowerup = getByNameTag(nt("power-up", "lineBattle_power-up"));
				if (Array.isArray(obstacleArray)) {
					//Avoid objects
					for (let o=0,length=obstacleArray.length;o<length;o++) {
						//Avoid other obstacles
						for (let o2=0,length=obstacleArray.length;o2<length;o2++) {
							if (o == o2) {
								o2++;
							}
							if (o2 > length) {
								o2 = 0;
							}
							if (obstacleArray[o2] != undefined) {
								if (cirCollision(obstacleArray[o], obstacleArray[o2]) || obstacleArray[o].base.position.distance(obstacleArray[o2].base.position) < 25) {
									let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
									let zone = currentMap.obstacleZones[zoneIndex];
									let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleArray[o2].obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleArray[o2].obstacleType).size.x);
									let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleArray[o2].obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleArray[o2].obstacleType).size.y);
									obstacleArray[o2].base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
								}
							}
						}
						for (let ob=0,length=currentMap.objects.length;ob<length;ob++) {
							if (obstacleArray[o] != undefined) {
								if (cirPolyCollision(obstacleArray[o], currentMap.objects[ob], null, true, true) && !currentMap.objects[ob].base.nameTag.tag.includes("Exclude")) {
									let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
									let zone = currentMap.obstacleZones[zoneIndex];
									let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x);
									let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y);
									obstacleArray[o].base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
								}
							}
						}
						if (currentPowerup != null) {
							if (obstacleArray[o] != undefined) {
								if (cirCollision(obstacleArray[o], currentPowerup) || currentPowerup.base.position.distance(obstacleArray[o].base.position) < 25) {
									let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
									let zone = currentMap.obstacleZones[zoneIndex];
									let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x);
									let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y);
									obstacleArray[o].base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
								}
							}
						}
						for (let ob=0,length=currentMap.objects.length;ob<length;ob++) {
							if (obstacleArray[o] != undefined) {
								if (cirPolyCollision(obstacleArray[o], currentMap.objects[ob], null, true, true) && !currentMap.objects[ob].base.nameTag.tag.includes("Exclude")) {
									let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
									let zone = currentMap.obstacleZones[zoneIndex];
									let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.x);
									let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleArray[o].obstacleType).size.y);
									obstacleArray[o].base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
								}
							}
						}
					}
				} else {
					for (let ob=0,length=currentMap.objects.length;ob<length;ob++) {
						if (obstacleArray != undefined) {
							if (cirPolyCollision(obstacleArray, currentMap.objects[ob], null, true, true) && !currentMap.objects[ob].base.nameTag.tag.includes("Exclude")) {
								let zoneIndex = rangeInt(0, currentMap.obstacleZones.length-1);
								let zone = currentMap.obstacleZones[zoneIndex];
								let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getObstacleTypeData(obstacleArray.obstacleType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getObstacleTypeData(obstacleArray.obstacleType).size.x);
								let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getObstacleTypeData(obstacleArray.obstacleType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getObstacleTypeData(obstacleArray.obstacleType).size.y);
								obstacleArray.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
							}
						}
					}
				}
			}
			this.data.obstacles_loaded = true;
		}
	}
	this.spawnGoal = (silent=false, avoid=false) => {
		if (!silent) {
			this.data.goal_loaded = false;
		}
		if (this.data.pointCollector && !avoid) {
			let thisNameTag = nt("goal", "lineBattle_goal");
			deleteByNameTag(thisNameTag);
			let goalType = rangeInt(0, this.data.points_data.length-1);
			let zoneIndex = rangeInt(0, currentMap.goalZones.length-1);
			let zone = currentMap.goalZones[zoneIndex];
			let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getGoalTypeData(goalType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getGoalTypeData(goalType).size.x);
			let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getGoalTypeData(goalType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getGoalTypeData(goalType).size.y);
			let spawnPoint = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
			let newGoal = light(3, base(true, thisNameTag.duplicate(), this.getGoalTypeData(goalType).size, spawnPoint.duplicate(), this.getGoalTypeData(goalType).color), 0.5);
			newGoal.goalType = goalType;
		}
		if (!silent || avoid) {
			let goal = getByNameTag(nt("goal", "lineBattle_goal"));
			for (let ob=0,length=currentMap.objects.length;ob<length;ob++) {
				if (goal != undefined) {
					if (cirPolyCollision(goal, currentMap.objects[ob], null, true, true) && !currentMap.objects[ob].base.nameTag.tag.includes("Exclude")) {
						let zoneIndex = rangeInt(0, currentMap.goalZones.length-1);
						let zone = currentMap.goalZones[zoneIndex];
						let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getGoalTypeData(goal.goalType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getGoalTypeData(goal.goalType).size.x);
						let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getGoalTypeData(goal.goalType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getGoalTypeData(goal.goalType).size.y);
						goal.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
					}
				}
			}
			let obstacleArray = getByNameTag(tag("lineBattle_obstacles"), 2);
			if (obstacleArray != null) {
				if (Array.isArray(obstacleArray)) {
					for (let o=0,length=obstacleArray.length;o<length;o++) {
						if (goal != undefined) {
							if (cirCollision(goal, obstacleArray[o]) || obstacleArray[o].base.position.distance(goal.base.position) < 25) {
								let zoneIndex = rangeInt(0, currentMap.goalZones.length-1);
								let zone = currentMap.goalZones[zoneIndex];
								let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getGoalTypeData(goal.goalType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getGoalTypeData(goal.goalType).size.x);
								let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getGoalTypeData(goal.goalType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getGoalTypeData(goal.goalType).size.y);
								goal.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
							}
						}
					}
				} else {
					if (goal != undefined) {
						if (cirCollision(goal, obstacleArray) || obstacleArray.base.position.distance(goal.base.position) < 25) {
							let zoneIndex = rangeInt(0, currentMap.goalZones.length-1);
							let zone = currentMap.goalZones[zoneIndex];
							let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getGoalTypeData(goal.goalType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getGoalTypeData(goal.goalType).size.x);
							let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getGoalTypeData(goal.goalType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getGoalTypeData(goal.goalType).size.y);
							goal.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
						}
					}
				}
			}
			let currentPowerup = getByNameTag(nt("power-up", "lineBattle_power-up"));
			if (currentPowerup != null) {
				if (goal != undefined) {
					if (cirCollision(goal, currentPowerup) || currentPowerup.base.position.distance(goal.base.position) < 25) {
						let zoneIndex = rangeInt(0, currentMap.goalZones.length-1);
						let zone = currentMap.goalZones[zoneIndex];
						let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+this.getGoalTypeData(goal.goalType).size.x, (zone.base.position.x+(zone.base.size.x/2))-this.getGoalTypeData(goal.goalType).size.x);
						let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+this.getGoalTypeData(goal.goalType).size.y, (zone.base.position.y+(zone.base.size.y/2))-this.getGoalTypeData(goal.goalType).size.y);
						goal.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
					}
				}
			}
		}
		if (!silent) {this.data.obstacles_loaded
			this.data.goal_loaded = true;
		}
	}
	this.spawnPowerup = () => {
		let randomNum = rangeInt(0, this.data.powerup_data.length-1);
		let thisPowerupData = this.data.powerup_data[randomNum];
		let zoneIndex = rangeInt(0, currentMap.powerupZones.length-1);;
		let spawnPoint = null;
		if (currentMap.powerupZones[zoneIndex] != undefined) {
			if (currentMap.powerupZones[zoneIndex].type != "vector2") {
				let zone = currentMap.powerupZones[zoneIndex];
				let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+thisPowerupData.size.x, (zone.base.position.x+(zone.base.size.x/2))-thisPowerupData.size.x);
				let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+thisPowerupData.size.y, (zone.base.position.y+(zone.base.size.y/2))-thisPowerupData.size.y);
				spawnPoint = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
			} else {
				spawnPoint = currentMap.powerupZones[zoneIndex];
			}
			let newPowerup = sprite(3, base(true, nt("power-up", "lineBattle_power-up"), thisPowerupData.size.multi(thisPowerupData.scale), spawnPoint, thisPowerupData.img, shadow(Vec2(), thisPowerupData.glow, 10)), spriteM(thisPowerupData.img_pos, thisPowerupData.size));
			newPowerup.type = randomNum;
			if (currentMap.powerupZones[zoneIndex].type != "vector2") {
				for (let ob=0,length=currentMap.objects.length;ob<length;ob++) {
					if (newPowerup != undefined) {
						if (cirPolyCollision(newPowerup, currentMap.objects[ob], null, true, true) && !currentMap.objects[ob].base.nameTag.tag.includes("Exclude")) {
							let zoneIndex = rangeInt(0, currentMap.powerupZones.length-1);
							let zone = currentMap.powerupZones[zoneIndex];
							let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+thisPowerupData.size.x, (zone.base.position.x+(zone.base.size.x/2))-thisPowerupData.size.x);
							let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+thisPowerupData.size.y, (zone.base.position.y+(zone.base.size.y/2))-thisPowerupData.size.y);
							newPowerup.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
						}
					}
				}
				let obstacleArray = getByNameTag(tag("lineBattle_obstacles"), 2);
				if (obstacleArray != null) {
					if (Array.isArray(obstacleArray)) {
						for (let o=0,length=obstacleArray.length;o<length;o++) {
							if (cirCollision(newPowerup, obstacleArray[o]) || obstacleArray[o].base.position.distance(newPowerup.base.position) < 25) {
								let zoneIndex = rangeInt(0, currentMap.powerupZones.length-1);
								let zone = currentMap.powerupZones[zoneIndex];
								let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+thisPowerupData.size.x, (zone.base.position.x+(zone.base.size.x/2))-thisPowerupData.size.x);
								let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+thisPowerupData.size.y, (zone.base.position.y+(zone.base.size.y/2))-thisPowerupData.size.y);
								newPowerup.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
							}
						}
					} else {
						if (cirCollision(newPowerup, obstacleArray) || obstacleArray.base.position.distance(newPowerup.base.position) < 25) {
							let zoneIndex = rangeInt(0, currentMap.powerupZones.length-1);
							let zone = currentMap.powerupZones[zoneIndex];
							let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+thisPowerupData.size.x, (zone.base.position.x+(zone.base.size.x/2))-thisPowerupData.size.x);
							let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+thisPowerupData.size.y, (zone.base.position.y+(zone.base.size.y/2))-thisPowerupData.size.y);
							newPowerup.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
						}
					}
				}
				let currentGoal = getByNameTag(nt("goal", "lineBattle_goal"));
				if (currentGoal != null) {
					if (cirCollision(newPowerup, currentGoal) || currentGoal.base.position.distance(newPowerup.base.position) < 25) {
						let zoneIndex = rangeInt(0, currentMap.powerupZones.length-1);
						let zone = currentMap.powerupZones[zoneIndex];
						let boundsX = Vec2((zone.base.position.x-(zone.base.size.x/2))+thisPowerupData.size.x, (zone.base.position.x+(zone.base.size.x/2))-thisPowerupData.size.x);
						let boundsY = Vec2((zone.base.position.y-(zone.base.size.y/2))+thisPowerupData.size.y, (zone.base.position.y+(zone.base.size.y/2))-thisPowerupData.size.y);
						newPowerup.base.position = Vec2(rangeFloat(boundsX.x, boundsX.y), rangeFloat(boundsY.x, boundsY.y));
					}
				}
			}
		}
	}
	this.usePowerup = (id=1) => {
		let player = pM.getPlayer(id).player_obj;
		if (player.powerup != null) {
			let randomNum = rangeInt(1, gameData.maxPlayers.x);
			if (randomNum == id) {
				this.usePowerup(id);
			} else {
				let target = pM.getPlayer(randomNum).player_obj;
				let powerupData = this.data.powerup_data[player.powerup];
				switch (player.powerup) {
					case 0:
						player.timer.pause();
						player.timer.mSeconds = Second(rangeInt(powerupData.timer.dup().x, powerupData.timer.dup().y));
						player.base.position.s = powerupData.modifier;
						player.timer.start(true);
						player.powerup = null;
					break;
					case 1:
						if (target != null) {
							target.timer.pause();
							target.timer.mSeconds = Second(rangeInt(powerupData.timer.dup().x, powerupData.timer.dup().y));
							target.base.position.s = -player.base.position.s;
							target.timer.start(true);
							player.powerup = null;
						}
					break;
					case 2:
						target.timer.pause();
						target.timer.mSeconds = Second(rangeInt(powerupData.timer.dup().x, powerupData.timer.dup().y));
						target.base.position.s = -player.base.position.s;
						target.timer.start(true);
						player.powerup = null;
					break;
					case 3:
						if (target != null) {
							var oldPos = player.base.position.dup();
							player.base.position.x = target.base.position.x;
							player.base.position.y = target.base.position.y;
							target.base.position.x = oldPos.x;
							target.base.position.y = oldPos.y;
							player.deleteLine();
							target.deleteLine();
							player.powerup = null;
						}
					break;
					case 4:
						player.timer.pause();
						player.invincible = true;
						player.timer.mSeconds = Second(rangeInt(powerupData.timer.dup().x, powerupData.timer.dup().y));
						player.timer.start(true);
						player.powerup = null;
					break;
					case 5:
						var randNum = rangeInt(0, this.data.powerup_data.length-2);
						player.powerup = randNum;
						this.usePowerup(id);
					break;
				}
			}
		}
	}
	const resetGame = () => {this.resetGame()};
	this.resetGame = (resetPoints=false) => {
		//Add points
		if (!resetPoints) {
			for (let i=0;i<gameData.maxPlayers.x;i++) {
				let thisNameTag = nt(("player_"+(i+1)), "lineBattle");
				let player = getByNameTag(thisNameTag);
				if (player != undefined && player.collectedPoints && !this.data.obstacle) {
					pointMG.changePoints(thisNameTag.name, "add", 1);
					player.collectedPoints = false;
				}
			}
		}
		//Reset points
		if (resetPoints) {
			pointMG.reset(true);
		}
		if (!resetPoints) {
			setTimeout(() => {
				this.data.end_of_match = false;
				//Reset players
				this.spawnPlayers();
				//Reset obstacles
				this.spawnObstacles();
				//Reset goal
				this.spawnGoal();
			}, 500);
		} else {
			this.data.end_of_match = false;
			if (currentMap != null) {
				//Reset players
				this.spawnPlayers();
				//Reset obstacles
				this.spawnObstacles();
				//Reset goal
				this.spawnGoal();
			}
		}
	}
	this.update = () => {
		if (gameData.gameMode == 1) {
			//Set target
			pointMG.targetPoints = gameModeData[1].settings.winning_points;
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
			//Check game win
			if (pointMG.winState) {
				winScreen.show(parseInt(pointMG.winner.replace("player_", "")));
			}
			//Set local map
			if (localMap == null && currentMap != null && currentMap != undefined) {
				localMap = currentMap;
			}
			if (localMap != null && localMap.id != currentMap.id) {
				localMap = currentMap;
			}
			//UI for power-ups
			const powerupUI_NT = (id=1) => { return nt("Player_"+id+"_powerup_ui", "lineBattle") };
			let p1_powerup_ui = getByNameTag(powerupUI_NT(1));
			let p2_powerup_ui = getByNameTag(powerupUI_NT(2));
			let p3_powerup_ui = getByNameTag(powerupUI_NT(3));
			let p4_powerup_ui = getByNameTag(powerupUI_NT(4));
			if (gameModeData[1].settings.powerups) {
				if (p1_powerup_ui == null) {
					let newP1PowerupUI = sprite(8, base(true, powerupUI_NT(1), Vec2(25, 25).multi(this.data.powerup_data.blank.scale), Vec2(30, 30), this.data.powerup_data.blank.img, shadow(Vec2(), "white", 5)), spriteM(this.data.powerup_data.blank.img_pos, this.data.powerup_data.blank.size));
				}
				if (p2_powerup_ui == null) {
					let newP2PowerupUI = sprite(8, base(true, powerupUI_NT(2), Vec2(25, 25).multi(this.data.powerup_data.blank.scale), Vec2(1250, 690), this.data.powerup_data.blank.img, shadow(Vec2(), "white", 5)), spriteM(this.data.powerup_data.blank.img_pos, this.data.powerup_data.blank.size));
				}
				if (p3_powerup_ui == null && gameData.maxPlayers.x >= 3) {
					let newP3PowerupUI = sprite(8, base(true, powerupUI_NT(3), Vec2(25, 25).multi(this.data.powerup_data.blank.scale), Vec2(30, 690), this.data.powerup_data.blank.img, shadow(Vec2(), "white", 5)), spriteM(this.data.powerup_data.blank.img_pos, this.data.powerup_data.blank.size));
				}
				if (p3_powerup_ui != null && gameData.maxPlayers.x < 3) {
					p3_powerup_ui.base.destroy();
				}
				if (p4_powerup_ui == null && gameData.maxPlayers.x == 4) {
					let newP4PowerupUI = sprite(8, base(true, powerupUI_NT(4), Vec2(25, 25).multi(this.data.powerup_data.blank.scale), Vec2(1250, 30), this.data.powerup_data.blank.img, shadow(Vec2(), "white", 5)), spriteM(this.data.powerup_data.blank.img_pos, this.data.powerup_data.blank.size));
				}
				if (p4_powerup_ui != null && gameData.maxPlayers.x < 4) {
					p4_powerup_ui.base.destroy();
				}
				if (p1_powerup_ui != null) {
					let thisP1 = pM.getPlayer(1).player_obj;
					if (thisP1 != null) {
						if (thisP1.powerup != null) {
							p1_powerup_ui.base.color = this.data.powerup_data[thisP1.powerup].img.dup();
							p1_powerup_ui.animator.setClipPos(this.data.powerup_data[thisP1.powerup].img_pos);
							p1_powerup_ui.animator.setClipSize(this.data.powerup_data[thisP1.powerup].size);
						} else {
							p1_powerup_ui.base.color = this.data.powerup_data.blank.img.dup();
							p1_powerup_ui.animator.setClipPos(this.data.powerup_data.blank.img_pos);
							p1_powerup_ui.animator.setClipSize(this.data.powerup_data.blank.size);
						}
					}
					p1_powerup_ui.base.color.alpha = gameData.uiAlpha;
				}
				if (p2_powerup_ui != null) {
					let thisP2 = pM.getPlayer(2).player_obj;
					if (thisP2 != null) {
						if (thisP2.powerup != null) {
							p2_powerup_ui.base.color = this.data.powerup_data[thisP2.powerup].img.dup();
							p2_powerup_ui.animator.setClipPos(this.data.powerup_data[thisP2.powerup].img_pos);
							p2_powerup_ui.animator.setClipSize(this.data.powerup_data[thisP2.powerup].size);
						} else {
							p2_powerup_ui.base.color = this.data.powerup_data.blank.img.dup();
							p2_powerup_ui.animator.setClipPos(this.data.powerup_data.blank.img_pos);
							p2_powerup_ui.animator.setClipSize(this.data.powerup_data.blank.size);
						}
					}
					p2_powerup_ui.base.color.alpha = gameData.uiAlpha;
				}
				if (p3_powerup_ui != null) {
					let thisP3 = pM.getPlayer(3).player_obj;
					if (thisP3 != null) {
						if (thisP3.powerup != null) {
							p3_powerup_ui.base.color = this.data.powerup_data[thisP3.powerup].img.dup();
							p3_powerup_ui.animator.setClipPos(this.data.powerup_data[thisP3.powerup].img_pos);
							p3_powerup_ui.animator.setClipSize(this.data.powerup_data[thisP3.powerup].size);
						} else {
							p3_powerup_ui.base.color = this.data.powerup_data.blank.img.dup();
							p3_powerup_ui.animator.setClipPos(this.data.powerup_data.blank.img_pos);
							p3_powerup_ui.animator.setClipSize(this.data.powerup_data.blank.size);
						}
					}
					p3_powerup_ui.base.color.alpha = gameData.uiAlpha;
				}
				if (p4_powerup_ui != null) {
					let thisP4 = pM.getPlayer(4).player_obj;
					if (thisP4 != null) {
						if (thisP4.powerup != null) {
							p4_powerup_ui.base.color = this.data.powerup_data[thisP4.powerup].img.dup();
							p4_powerup_ui.animator.setClipPos(this.data.powerup_data[thisP4.powerup].img_pos);
							p4_powerup_ui.animator.setClipSize(this.data.powerup_data[thisP4.powerup].size);
						} else {
							p4_powerup_ui.base.color = this.data.powerup_data.blank.img.dup();
							p4_powerup_ui.animator.setClipPos(this.data.powerup_data.blank.img_pos);
							p4_powerup_ui.animator.setClipSize(this.data.powerup_data.blank.size);
						}
					}
					p4_powerup_ui.base.color.alpha = gameData.uiAlpha;
				}
			} else {
				if (p1_powerup_ui != null) {
					p1_powerup_ui.base.destroy();
				}
				if (p2_powerup_ui != null) {
					p2_powerup_ui.base.destroy();
				}
				if (p3_powerup_ui != null) {
					p3_powerup_ui.base.destroy();
				}
				if (p4_powerup_ui != null) {
					p4_powerup_ui.base.destroy();
				}
			}
			//Player spawn
			for (let i=0;i<gameData.maxPlayers.x;i++) {
				if (localMap != null && localMap.id == currentMap.id) {
					let thisNameTag = nt(("player_"+(i+1)), "lineBattle");
					let player = getByNameTag(thisNameTag);
					if (player != undefined) {
						player.rotOffset = (player.base.position.s > 0) ? 0 : degToRad(180)

						if (player.invincible) {
							player.base.shadow = shadow(Vec2(), "cyan", 10);
						} else {
							player.base.shadow = DEFAULT_SHADOW;
						}
						//Dead
						if (player.dead) {
							player.base.color = greyBall.getColor();
							if (!this.data.pointCollector) {
								this.data.end_of_match = true;
							}
						}
						//Win state
						if (this.data.end_of_match) {
							player.base.position.s = 0;
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
						let obstacleArray = getByNameTag(tag("obstacles"), 2, false, true);
						this.spawnObstacles(true, true);
						let goalObj = getByNameTag(tag("goal"), 2, false, true);
						this.spawnGoal(false, true);
						let powerupObj = getByNameTag(tag("power-up"), 2, false, true);
						if (this.data.game_loaded && !isPaused) {
							if (obstacleArray != null) {
								if (Array.isArray(obstacleArray)) {
									obstacleArray.forEach((object) => {
										let obstData = this.getObstacleTypeData(object.obstacleType);
										if (cirCollision(player, object) && !player.invincible) {
											if (!pointMG.winState) {
												if (obstData.points.x != null) {
													pointMG.changePoints(thisNameTag.name, obstData.points.r, obstData.points.x);
												}
												if (obstData.points.y != null) {
													pointMG.changePoints([thisNameTag.name], obstData.points.o, obstData.points.y, true);
												}
											}
											deleteByNameTag(object.base.nameTag);
											this.spawnObstacles(true, true);
										}
									});
								} else {
									let obstData = this.data.obstacles_data[obstacleArray.obstacleType];
									if (cirCollision(player, obstacleArray)) {
										if (!pointMG.winState) {
											if (obstData.points.x != null) {
												pointMG.changePoints(thisNameTag.name, obstData.points.r, obstData.points.x);
											}
											if (obstData.points.y != null) {
												pointMG.changePoints([thisNameTag.name], obstData.points.o, obstData.points.y, true);
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
									if (!pointMG.winState) {
										if (goalData.points.x != null) {
											pointMG.changePoints(thisNameTag.name, goalData.points.r, goalData.points.x);
										}
										if (goalData.points.y != null) {
											pointMG.changePoints([thisNameTag.name], goalData.points.o, goalData.points.y, true);
										}
									}
									deleteByNameTag(goalObj.base.nameTag);
								}
							} else {
								this.spawnGoal(true);
							}
							if (powerupObj != null) {
								if (cirCollision(player, powerupObj) && player.powerup == null) {
									player.powerup = powerupObj.type;
									deleteByNameTag(powerupObj.base.nameTag);
								}
							} else {
								if (!this.powerupTimer.active) {
									this.powerupTimer.start();
								}
							}
						}
						//Player collisions
						for (let i=0;i<gameData.maxPlayers.x;i++) {
							if (!pointMG.winState && !isPaused) {
								let thisNameTag2 = nt(("player_"+(i+1)), "lineBattle");
								let player2 = getByNameTag(thisNameTag2);
								let isSame = player.base.nameTag.same(thisNameTag2);
								if (!isSame) {
									//Ball physics hitPlayer
									if (!this.data.end_of_match) {
										if (cirPolyCollision(player, player2)){
											if (!player.hitPlayer) {
												cirPolyCollision(player, player2, null, false)
												player.base.position.s = -player.base.position.s;
												player2.base.position.s = -player2.base.position.s;
												player.hitPlayer = true;
												player2.hitPlayer = true;
											}
										} else {
											player.hitPlayer = false;
											player2.hitPlayer = false;
										}
									}
									//Line collide check
									const p2_linepieces = player2.linePieces;

									for (let i=0,l=p2_linepieces.length; i<l; i++) {
										const linePiece = p2_linepieces[i];

										if (linePiece != undefined) {
											let lineBase = linePiece.base;

											if (cirPolyCollision(player, linePiece)) {
												if (!this.data.pointCollector && !player.invincible) {
													if (lineBase.color.alpha >= gameModeData[1].settings.line_alpha_cutoff) {
														if (!player.dead) {
															getByNameTag(name(lineBase.nameTag.name.slice(0, 8)), 1).collectedPoints = true;
															player.dead = true;
														}
													}
												} else {
													for (let v=0; v<l; v++) {
														const linePiece2 = p2_linepieces[v];
														const lineBase2 = linePiece2.base;

														if (v <= i) {
															lineBase2.marked = true;
														}
													}
													p2_linepieces.splice(0, i);
													deleteByMarked();
												}
											}
										}
									}
								}
							}
						}
						//Points text
						let thisNameTag2 = nt(("player_"+(i+1)+"_points"), "lineBattle");
						let playerPoints = getByNameTag(thisNameTag2);
						playerPoints.base.position = player.base.position.duplicate().subV(Vec2(0, player.base.size.div(2).y));
						if (gameData.showName) {
							playerPoints.text = pM.getPlayer(i+1).player_info.name.slice(0, 8)+": "+pointMG.getPoints(thisNameTag.name).points;
						} else {
							playerPoints.text = pointMG.getPoints(thisNameTag.name).points;
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
			deleteByNameTag(nt("", "lineBattle"), 2, true);
		}
	}
}

//Map creator
const BLANK_MAP = new Map();
function Map(id="#", backgroundColor="black", spawns=[Vec2(),Vec2(),Vec2(),Vec2()], objects=[], obstacleZones=[], goalZones=[], powerupZones=[], script=null, modded=false) {
	this.id = id; //id for map (so you can have scripts for certain maps)
	this.originalBGColor = backgroundColor;
	this.backgroundColor = backgroundColor; //canvas color
	this.spawns = spawns; //Array of vectors | 4 spawns | x/y/r | use r to set spawn rotation
	this.objects = objects; //Array of objects
	this.obstacleZones = obstacleZones; //Array of squares for the obstacles to spawn in
	this.goalZones = goalZones; //Array of squares for the goals to spawn in
	this.powerupZones = powerupZones; //Array of square or points for power-ups to spawn in
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
				let thisLineNameTag = nt(("player_"+(i+1)+"_line"), "lineBattle");
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
			this.obstacleZones.forEach((x) => {deleteByNameTag(x.base.nameTag)});
			this.goalZones.forEach((x) => {deleteByNameTag(x.base.nameTag)});
			this.powerupZones.forEach((x) => {deleteByNameTag(x.base.nameTag)});
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
		const currentPlayers = [getByNameTag(name("player_1"), 1),getByNameTag(nt("player_2"), 1),getByNameTag(nt("player_3"), 1),getByNameTag(nt("player_4"), 1)].filter((p) => {return p != null;});
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

			if (gameData.gameMode == 1) {
				for (let w=0,length=bouncyWalls.length;w<length;w++) {
					let wall = bouncyWalls[w];
					if (cirPolyCollision(player, wall)) {
						cirPolyCollision(player, wall, null, false);
						player.base.position.s = -player.base.position.s;
					}
				}
			}
		}
		if (currentMap != null && currentMap.id != this.id && loaded) {
			this.unload();
		}
	}
	this.unload();
}

function addMap(map=BLANK_MAP, mode=0) {
	gameModeData[mode].settings.maps.push(map);
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
		if (gameData.gameMode == -1) {
			currentMap.unload();
		} else {
			currentMap.load();
		}
	} else {
		if (currentMap != null) {
			currentMap.unload();
			currentMap = null;
		}
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
	deleteByNameTag(nt("delete"), 1);
}

//Init
addMap(map_abyss, 1);
addMap(map_neon, 1);
addMap(map_fourColors, 1);
addMap(map_portals, 1);
addMap(map_test, 1);
addUpdate(gameUpdateLoop, "mainGameLoop", "main");
