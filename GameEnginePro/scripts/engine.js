var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);

var popup = 1;
var fallseason = 0;
var winterseason = 0;
var springseason = 0;
var stcweapon = 0;
var earlystart = 1;
var christmasSkin = 0;
var miniBossShip = 0;
var easyShipPrize = 0;
var STPRIZESHIP = 0;
var STPRIZEWEAPON = 0;
var STPDAYEVENTTRIGGER = 0;
function Datechecker() {
var today_date = new Date()
var mydayofweek = today_date.getDay()
var mytoday = today_date.getDate()
var mymonth = today_date.getMonth()
var myyear = today_date.getFullYear()
if (popup == 1) {
if (mymonth == 2) {
if (mytoday >= 2 && mytoday < 21) {
openpatchinfo = 1;
popup = 0;
   }
  }
 }
if (mymonth == 11 && christmasSkin == 0) { 
christmasSkin = 1;
localStorage && (localStorage.Cs = christmasSkin);
}
if (mymonth >= 8 && mymonth < 11) {
if (mytoday >= 1) {
fallseason = 1;
   }
  }
if (mymonth == 11 || mymonth >= 0 && mymonth < 2) {
if (mytoday >= 1) {
winterseason = 1;
   }
  }
if (mymonth >= 2 && mymonth < 5) {
if (mytoday >= 1) {
springseason = 1;
   }
  }
if (mymonth == 2) {
if (mytoday >= 1) {
STPDAYEVENTTRIGGER = 1;
   }
  }
if (mymonth == 8) {
if (mytoday >= 11 && mytoday < 30) {
stcweapon = 1;
   }
  }
if (earlystart == 1) {
if (mymonth == 9) {
stcweapon = 1;
  }
 }
}

var w = window.innerWidth;
var h = window.innerHeight;
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
var MusicOnOff = true;
var badHealthBarColor = "green";
var badHealthBarColor2 = "green";
var badHealthBarColor3 = "green";
var badHealthBarColor4 = "green";
var badHealthBarColor5 = "green";
var difficulty = 0;
function start() {
 if (localStorage && 'Cs' in localStorage) {
    christmasSkin = localStorage.Cs;
 }
 if (localStorage && 'Ms' in localStorage) {
    miniBossShip = localStorage.Ms;
 }
 if (localStorage && 'Es' in localStorage) {
    easyShipPrize = localStorage.Es;
 }
 if (localStorage && 'Ps' in localStorage) {
    STPRIZESHIP = localStorage.Ps;
 }
 if (localStorage && 'Pw' in localStorage) {
    STPRIZEWEAPON = localStorage.Pw;
 }
 MusicOnOff = confirm("Do you want sound?\nOk for yes.\nCancel for no.");
 document.getElementById("volume").value = "15";
 SetVolume(15);
 STPDAYEVENTBG = new component(800, 390, "ST_P_DAY_BG", 0, 0, "img");
 STPDAYEVENTPROP = new component(100, 100, "ST_P_DAY_PROP", 350, 150, "img");
 STPDAYEVENTBOSSINTRO = new component(25, 25, "ST_P_DAY_EVENT_PRIZE", 387.5, 190, "img-rot");
 STPDAYEVENTBOSS = new component(39, 42, "ST_P_DAY_EVENT_BOSS", 380.5, 181.5, "img-rot");
 STPDAYEVENTBOSSBOX = new component(39, 42, "black", 380.5, 181.5, "rec");
 STPDAYEVENTBOSSHEALTHBAR = new component(STBOSSHEALTH, 20, "darkgreen", 10, 20, "rec");
 STPDAYEVENTBOSSHEALTHBARTEXT = new component("", "", "white", 10, 15, "text");
 STPDAYEVENTBOSSHEALTHBARTEXT.font = "15px Consolas";
 STPDAYEVENTBOSSHEALTHBARTEXT.text = "BOSS:";
 endCard = new component(800, 390, "End", 0, 0, "img");
 guardianPic = new component(25, 25, "guardian", 650, 450, "img-rot");
 guardianBox = new component(25, 25, "red", 650, 450, "rec", "enemy");
 guardianhealthbar = new component(GuardHealth / 2, 5, guardHealthBarColor, guardianBox.x, guardianBox.y - 8, "rec");
 bossWave7pic = new component(35, 35, "wave7boss", Boss7_Start_X, Boss7_Start_Y, "img");
 bossWave7sheildPic = new component(35, 35, "wave7bossSheild", Boss7_Start_X, Boss7_Start_Y, "img");
 bossWave7 = new component(35, 35, "red", Boss7_Start_X, Boss7_Start_Y, "rec");
 boss7healthbar = new component(BossHealth / 2, 10, bossHealthBarColor, 150, 20, "rec");
 bosstxt = new component("30px", "Consolas", "white", 150, 15, "text");
 bosstxt.font = "15px Consolas";
 bosstxt.text = "BOSS:";
 bosstxt2 = new component("30px", "Consolas", "white", 150, 15, "text");
 bosstxt2.font = "15px Consolas";
 bosstxt2.text = "BOSS: Sheilded";
 recenemypic1 = new component(25, 25, "Rectangle", 450, 60, "animated-img-rot");
 recbox1 = new component(25, 25, "red", 450, 60, "rec", "enemy");
 badguy1healthbar3 = new component(Badhealth4 / 2, 5, badHealthBarColor3, recbox1.x, recbox1.y - 8, "rec");
 recpos1 = new component(25, 25, "orange", rec1posX, rec1posY, "rec", "enemy");
 recwavebox1 = new component(35, 35, "black", rec1posX - 5, rec1posY - 5, "rec");
 xenemypic1 = new component(31, 31, "X_Enemy", 450, 60, "img-rot");
 xbox1 = new component(31, 31, "red", 450, 60, "rec", "enemy");
 badguy1healthbar5 = new component(Badhealth5 / 2, 5, badHealthBarColor5, xbox1.x, xbox1.y - 8, "rec");
 xpos1 = new component(25, 25, "orange", rec1posX, rec1posY, "rec", "enemy");
 xwavebox1 = new component(35, 35, "black", rec1posX - 5, rec1posY - 5, "rec");
 badguypic1 = new component(25, 25, "badguy1img", 650, 450, "animated-img-rot");
 badguy1 = new component(25, 25, "red", 650, 450, "rec", "enemy");
 badguy1healthbar = new component(Badhealth1 / 2, 5, badHealthBarColor, badguy1.x, badguy1.y - 8, "rec");
 badpos1 = new component(25, 25, "orange", bad1posX, bad1posY, "rec", "enemy");
 badwavebox1 = new component(35, 35, "black", bad1posX - 5, bad1posY - 5, "rec");
 badguypic2 = new component(25, 25, "badguy1img", 40, 150, "animated-img-rot");
 badguy2 = new component(25, 25, "red", 40, 150, "rec", "enemy");
 badguy1healthbar2 = new component(Badhealth2 / 2, 5, badHealthBarColor2, badguy2.x, badguy2.y - 8, "rec");
 badpos2 = new component(25, 25, "orange", bad2posX, bad2posY, "rec");
 badwavebox2 = new component(35, 35, "black", bad2posX - 5, bad2posY - 5, "rec");
 trienemypic = new component(35, 35, "triimgdown", 430, 100, "img-rot");
 tribox = new component(35, 35, "red", 430, 100, "rec", "enemy");
 badguy1healthbar4 = new component(Badhealth3 / 2, 5, badHealthBarColor4, tribox.x, tribox.y - 8, "rec");
 tribpic = new component(10, 10, "enemybull", 400, 100, "img");
 tribbox = new component(10, 10, "orange", 400, 100, "rec");
 tripos1 = new component(5, 5, "orange", tri1posX, tri1posY, "rec");
 triwavebox1 = new component(15, 15, "black", tri1posX - 5, tri1posY - 5, "rec");
 bullbox = new component(10, 10, "orange", 400, 180, "rec");
 bpic = new component(10, 10, "bullpic", 400, 180, "img");
 bpic2 = new component(10, 10, "bullpic2", 400, 180, "img");
 bpic3 = new component(10, 10, "bullpic3", 400, 180, "img");
 bpic4 = new component(10, 10, "bullpic4", 400, 180, "img");
 bpic5 = new component(10, 10, "ST_P_DAY_EVENT_BOSS_BULLET", 400, 180, "img");
 box = new component(25, 25, "grey", playerX, playerY, "player1", "player");
 detectbox = new component(100, 100, "black", playerX - 37.5, playerY - 37.5, "rec");
 ship1 = new component(32, 32, "playerimg", playerX - 3.5, playerY - 3.5, "img");
 ship2 = new component(25, 25, "player2img", playerX, playerY, "img");
 ship3 = new component(25, 25, "player3img", playerX, playerY, "img");
 ship4 = new component(25, 25, "player4img", playerX, playerY, "img");
 ship5 = new component(32, 32, "player5img", playerX - 3.5, playerY - 3.5, "img");
 ship6 = new component(25, 25, "ST_P_DAY_EVENT_PRIZE", playerX, playerY, "img-rot");
 w1t5 = new component(800, 500, "wave1t5", 0, 0, "img");
 w5t7 = new component(800, 390, "wave5t7", 0, 0, "img");
 Explosion = new component(800, 390, "EXFrame1", 0, 0, "img");
 Fw1t5 = new component(800, 500, "Fwave1t5", 0, 0, "img");
 Fw5t7 = new component(800, 390, "Fwave5t7", 0, 0, "img");
 Ww1t5 = new component(800, 500, "Wwave1t5", 0, 0, "img");
 Ww5t7 = new component(800, 390, "Wwave5t7", 0, 0, "img");
 wallleft = new component(60, 400, "black", -60, 0, "rec");
 wallright = new component(60, 400, "black", 800, 0, "rec");
 wall3 = new component(800, 60, "black", 0, -60, "rec");
 wall4 = new component(800, 60, "black", 0, 390, "rec");
 roofhouse1 = new component(140, 130, "houseroof1", 70, 70, "img");
 insidedetect1 = new component(120, 140, "gray", 80, 80, "rec");
 floorhouse1 = new component(120, 120, "housefloor1", 80, 80, "img");
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
 wallhouse8 = new component(120, 20, "grey", 80, 190, "rec");
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
 wall2house8 = new component(190, 20, "grey", 510, 200, "rec");
 roof2house1 = new component(210, 120, "houseroof1", 500, 90, "img");
 inside2detect1 = new component(190, 130, "gray", 510, 100, "rec");
 floor2house1 = new component(200, 120, "housefloor1", 500, 90, "img");
 tree1_1_D = new component(50, 50, "black", 80, 290, "rec");
 tree1_1 = new component(50, 50, "tree", 80, 290, "img");
 tree1_2_D = new component(50, 50, "black", 650, 270, "rec");
 tree1_2 = new component(50, 50, "tree", 650, 270, "img");
 tree1_3_D = new component(50, 50, "black", 230, 90, "rec");
 tree1_3 = new component(50, 50, "tree", 230, 90, "img");
 tree1_4_D = new component(50, 50, "black", 270, 175, "rec");
 tree1_4 = new component(50, 50, "tree", 270, 175, "img");
 tree1_5_D = new component(50, 50, "black", 420, 70, "rec");
 tree1_5 = new component(50, 50, "tree", 420, 70, "img");
 tree1_6_D = new component(50, 50, "black", 620, 33, "rec");
 tree1_6 = new component(50, 50, "tree", 620, 33, "img");
 tree1_7_D = new component(50, 50, "black", 500, 285, "rec");
 tree1_7 = new component(50, 50, "tree", 500, 285, "img");
 tree1_8_D = new component(50, 50, "black", 300, 265, "rec");
 tree1_8 = new component(50, 50, "tree", 300, 265, "img");
 Ftree1_1 = new component(50, 50, "Ftrees", 80, 290, "img");
 Ftree1_2 = new component(50, 50, "Ftrees", 650, 270, "img");
 Ftree1_3 = new component(50, 50, "Ftrees", 230, 90, "img");
 Ftree1_4 = new component(50, 50, "Ftrees", 270, 175, "img");
 Ftree1_5 = new component(50, 50, "Ftrees", 420, 70, "img");
 Ftree1_6 = new component(50, 50, "Ftrees", 620, 33, "img");
 Ftree1_7 = new component(50, 50, "Ftrees", 500, 285, "img");
 Ftree1_8 = new component(50, 50, "Ftrees", 300, 265, "img");
 Wtree1_1 = new component(50, 50, "Wtrees", 80, 290, "img");
 Wtree1_2 = new component(50, 50, "Wtrees", 650, 270, "img");
 Wtree1_3 = new component(50, 50, "Wtrees", 230, 90, "img");
 Wtree1_4 = new component(50, 50, "Wtrees", 270, 175, "img");
 Wtree1_5 = new component(50, 50, "Wtrees", 420, 70, "img");
 Wtree1_6 = new component(50, 50, "Wtrees", 620, 33, "img");
 Wtree1_7 = new component(50, 50, "Wtrees", 500, 285, "img");
 Wtree1_8 = new component(50, 50, "Wtrees", 300, 265, "img");
 Stree1_1 = new component(50, 50, "Strees", 80, 290, "img");
 Stree1_2 = new component(50, 50, "Strees", 650, 270, "img");
 Stree1_3 = new component(50, 50, "Strees", 230, 90, "img");
 Stree1_4 = new component(50, 50, "Strees", 270, 175, "img");
 Stree1_5 = new component(50, 50, "Strees", 420, 70, "img");
 Stree1_6 = new component(50, 50, "Strees", 620, 33, "img");
 Stree1_7 = new component(50, 50, "Strees", 500, 285, "img");
 Stree1_8 = new component(50, 50, "Strees", 300, 265, "img");
 SWPart1 = new component(50, 75, "SWPart1_1", 110, 205.9, "img");
 SWPart2 = new component(75, 50, "SWPart2_2", 535, 230, "img");
 SWPart3 = new component(50, 75, "SWPart1_1", 560, 185, "img");
 SWPart4 = new component(75, 50, "SWPart2_2", 484.5, 230, "img");
 SWPart5 = new component(75, 50, "SWPart2_2", 434.5, 230, "img");
 SWPart6 = new component(50, 75, "SWPart1_1", 110, 182, "img");
 SWPart7 = new component(75, 50, "SWPart2_2", 384.5, 205, "img");
 SWPart8 = new component(75, 50, "SWPart2_2", 384.5, 230, "img");
 SWPart9 = new component(75, 50, "SWPart2_2", 334.5, 230, "img");
 SWPart10 = new component(75, 50, "SWPart2_2", 284.5, 230, "img");
 SWPart11 = new component(75, 50, "SWPart2_2", 234.5, 230, "img");
 SWPart12 = new component(75, 50, "SWPart2_2", 184.5, 230, "img");
 SWPart13 = new component(75, 50, "SWPart2_2", 134.5, 230, "img");
 SWPart14 = new component(50, 75, "SWPart1_1", 334.5, 205, "img");
 SWPart15 = new component(75, 50, "SWPart3_3", 334, 135, "img");
 SWPart16 = new component(50, 75, "SWPart1_1", 334.5, 180.5, "img");
 SWPart17 = new component(75, 50, "SWPart2_2", 384.5, 180, "img");
 SWPart18 = new component(75, 50, "SWPart4_4", 384.5, 135, "img");
 tree2_1_D = new component(50, 50, "black", 50, 20, "rec");
 tree2_1 = new component(50, 50, "tree", 50, 20, "img");
 tree2_2_D = new component(50, 50, "black", 230, 70, "rec");
 tree2_2 = new component(50, 50, "tree", 230, 70, "img");
 Ftree2_1 = new component(50, 50, "Ftrees", 50, 20, "img");
 Ftree2_2 = new component(50, 50, "Ftrees", 230, 70, "img");
 Wtree2_1 = new component(50, 50, "Wtrees", 50, 20, "img");
 Wtree2_2 = new component(50, 50, "Wtrees", 230, 70, "img");
 Stree2_1 = new component(50, 50, "Strees", 50, 20, "img");
 Stree2_2 = new component(50, 50, "Strees", 230, 70, "img");
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
 floor3house1 = new component(270, 100, "housefloor4", 480, 50, "img");
 burntHouse1 = new component(270, 100, "Burnt", 480, 50, "img");
 roof3house1 = new component(270, 100, "houseroof2", 480, 50, "img");
 roof3house2 = new component(50, 50, "houseroof2", 590, 120, "img");
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
 floor4house1 = new component(270, 90, "housefloor2", 480, 250, "img");
 burntHouse2 = new component(270, 100, "Burnt", 480, 250, "img");
 inside4detect1 = new component(250, 90, "black", 490, 245, "rec");
 roof4house1 = new component(270, 100, "houseroof3", 480, 250, "img");
 roof4house2 = new component(50, 50, "houseroof3", 530, 230, "img");
 roof4house3 = new component(50, 50, "houseroof3", 650, 230, "img");
 plantbox1_1 = new component(50, 50, "plantbox1", 360, 280, "img");
 plantbox2_1 = new component(50, 50, "plantbox1", 60, 280, "img");
 plantbox3_1 = new component(50, 50, "plantbox1", 260, 280, "img");
 plantbox4_1 = new component(50, 50, "plantbox1", 160, 280, "img");
 tree2_3_D = new component(50, 50, "black", 360, 280, "rec");
 tree2_3 = new component(50, 50, "tree", 360, 280, "img");
 tree2_4_D = new component(50, 50, "black", 60, 280, "rec");
 tree2_4 = new component(50, 50, "tree", 60, 280, "img");
 tree2_5_D = new component(50, 50, "black", 260, 280, "rec");
 tree2_5 = new component(50, 50, "tree", 260, 280, "img");
 tree2_6_D = new component(50, 50, "black", 160, 280, "rec");
 tree2_6 = new component(50, 50, "tree", 160, 280, "img");
 Ftree2_3 = new component(50, 50, "Ftrees", 360, 280, "img");
 Ftree2_4 = new component(50, 50, "Ftrees", 60, 280, "img");
 Ftree2_5 = new component(50, 50, "Ftrees", 260, 280, "img");
 Ftree2_6 = new component(50, 50, "Ftrees", 160, 280, "img");
 Wtree2_3 = new component(50, 50, "Wtrees", 360, 280, "img");
 Wtree2_4 = new component(50, 50, "Wtrees", 60, 280, "img");
 Wtree2_5 = new component(50, 50, "Wtrees", 260, 280, "img");
 Wtree2_6 = new component(50, 50, "Wtrees", 160, 280, "img");
 Stree2_3 = new component(50, 50, "Strees", 360, 280, "img");
 Stree2_4 = new component(50, 50, "Strees", 60, 280, "img");
 Stree2_5 = new component(50, 50, "Strees", 260, 280, "img");
 Stree2_6 = new component(50, 50, "Strees", 160, 280, "img");
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
 costToRevive = new component("30px", "Consolas", "darkred", 40, 490, "text");
 costToRevive.font = "30px Consolas";
 menuboard = new component(800, 500, "menupic", 0, 0, "img");
 formplat = new component(75, 75, "1-5platform", 359, 157, "img");
 formFplat = new component(75, 75, "1-5Fplatform", 359, 157, "img");
 formWplat = new component(75, 75, "1-5Wplatform", 359, 157, "img");
 border1_5 = new component(800, 390, "1-5sideborder", 0, 0, "img");
 Fborder1_5 = new component(800, 390, "1-5sideFborder", 0, 0, "img");
 Wborder1_5 = new component(800, 390, "1-5sideWborder", 0, 0, "img");
 LowHealth_ = new component(800, 390, "lowhealth", 0, 0, "img");
 LowHealthTxt = new component("30px", "Consolas", "orange", 30, 35, "text");
 LowHealthTxt.font = "35px Consolas";
 LowHealthTxt.text = "Low Health!";
 LowAmmoTxt = new component("30px", "Consolas", "yellow", 30, 380, "text");
 LowAmmoTxt.font = "35px Consolas";
 LowAmmoTxt.text = "Low Ammo!";
 StartOver = new component(205, 50, "#812bb3", 297.5, 450, "rec");
 StartOvertxt = new component("30px", "Consolas", "white", 400, 482.5, "text");
 StartOvertxt.align = "center";
 StartOvertxt.font = "20px Consolas";
 StartOvertxt.text = "(S) Start Over";
 TipsTxt = new component("30px", "Consolas", "white", 10, 482.5, "text");
 TipsTxt.font = "10px Consolas";
 TipsTxt.text = "Tip:";
 DeathForPlayer = new component(800, 500, "DeathScr", 0, 0, "img");
 console.log("width" + w);
 console.log("height" + h);
 animationInt();
 Board.start();
 updateGameArea();
 }
 
var Board = {
canvas : document.createElement("canvas"),
start : function() {
this.canvas.width = 800;
this.canvas.height = 500;
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
},
stop : function() {
        clearInterval(this.interval);
},
clear : function() {
this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

function animationInt() {
badguypic1_1_animation = new animationComponent(6, 0, 25);
badguypic2_1_animation = new animationComponent(6, 0, 25);
recenemypic1_1_animation = new animationComponent(6, 0, 15);
}

function animations() {
//badguypic1 enemy animation//
if (wave < 5 && BadDeath < 1 && Death1 == 0) {
badguypic1.angle += 0.05;
badguypic1_1_animation.frameTimer();
console.log("Current Frame: " + badguypic1_1_animation.currentFrame);
}
if (wave >= 5 || BadDeath > 0 || Death1 != 0) {
badguypic1.angle = 0;
badguypic1_1_animation.resetFrame();
console.log("Current Frame: " + badguypic1_1_animation.currentFrame);
}
if (badguypic1_1_animation.currentFrame == 0) {
badguypic1.sx = 0;
badguypic1.sy = 0;
}
if (badguypic1_1_animation.currentFrame == 1) {
badguypic1.sx = 25;
badguypic1.sy = 0;
}
if (badguypic1_1_animation.currentFrame == 2) {
badguypic1.sx = 50;
badguypic1.sy = 0;
}
if (badguypic1_1_animation.currentFrame == 3) {
badguypic1.sx = 75;
badguypic1.sy = 0;
}
if (badguypic1_1_animation.currentFrame == 4) {
badguypic1.sx = 0;
badguypic1.sy = 25;
}
if (badguypic1_1_animation.currentFrame == 5) {
badguypic1.sx = 25;
badguypic1.sy = 25;
}
//badguypic2 enemy animation//
if (wave < 7 && wave > 1 && BadDeath2 < 1 && Death1 == 0) {
badguypic2.angle += 0.05;
badguypic2_1_animation.frameTimer();
console.log("Current Frame 2: " + badguypic2_1_animation.currentFrame);
}
if (wave >= 7 || wave < 2 || BadDeath2 > 0 || Death1 != 0) {
badguypic2.angle = 0;
badguypic2_1_animation.resetFrame();
console.log("Current Frame 2: " + badguypic2_1_animation.currentFrame);
}
if (badguypic2_1_animation.currentFrame == 0) {
badguypic2.sx = 0;
badguypic2.sy = 0;
}
if (badguypic2_1_animation.currentFrame == 1) {
badguypic2.sx = 25;
badguypic2.sy = 0;
}
if (badguypic2_1_animation.currentFrame == 2) {
badguypic2.sx = 50;
badguypic2.sy = 0;
}
if (badguypic2_1_animation.currentFrame == 3) {
badguypic2.sx = 75;
badguypic2.sy = 0;
}
if (badguypic2_1_animation.currentFrame == 4) {
badguypic2.sx = 0;
badguypic2.sy = 25;
}
if (badguypic2_1_animation.currentFrame == 5) {
badguypic2.sx = 25;
badguypic2.sy = 25;
}
//recenemypic1 enemy animation//
if (wave > 2 && wave < 5 && BadDeath4 < 1 && Death1 == 0) {
recenemypic1.angle += 0.08;
recenemypic1_1_animation.frameTimer();
console.log("Current Frame 3: " + recenemypic1_1_animation.currentFrame);
}
if (wave >= 5 || wave <= 2 || BadDeath4 > 0 || Death1 != 0) {
recenemypic1.angle = 0;
recenemypic1_1_animation.resetFrame();
console.log("Current Frame 3: " + recenemypic1_1_animation.currentFrame);
}
if (recenemypic1_1_animation.currentFrame == 0) {
recenemypic1.sx = 0;
recenemypic1.sy = 0;
}
if (recenemypic1_1_animation.currentFrame == 1) {
recenemypic1.sx = 25;
recenemypic1.sy = 0;
}
if (recenemypic1_1_animation.currentFrame == 2) {
recenemypic1.sx = 50;
recenemypic1.sy = 0;
}
if (recenemypic1_1_animation.currentFrame == 3) {
recenemypic1.sx = 75;
recenemypic1.sy = 0;
}
if (recenemypic1_1_animation.currentFrame == 4) {
recenemypic1.sx = 0;
recenemypic1.sy = 25;
}
if (recenemypic1_1_animation.currentFrame == 5) {
recenemypic1.sx = 25;
recenemypic1.sy = 25;
}
}

function component(width, height, color ,x ,y, type, radius, outcolor, thickness) {
this.type = type;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.sx = 0;
this.sy = 0;
this.animationFrame = 0;
this.angle = 0;
this.align = "start";
this.globalAlpha = 1;
this.width = width;
this.height = height;
this.halfWidth = this.width * 0.5;
this.halfHeight = this.height * 0.5;
this.color = color;
this.update = function() {
ctx = Board.context;
if (this.type == "text") {
 ctx.textAlign = this.align;
 ctx.font = this.font;
 ctx.globalAlpha = this.globalAlpha;
 ctx.fillStyle = this.color;
 ctx.fillText(this.text, this.x, this.y);
} else {
if (this.type == "rec" || this.type == "player1" || this.type == "bull") {
this.id = radius;
ctx.globalAlpha = this.globalAlpha;
ctx.fillStyle = this.color;
ctx.fillRect(this.x, this.y, this.width, this.height);
  }
 }
 if (this.type == "cir") {
 this.thickness = thickness;
 this.outcolor = outcolor;
 this.radius = radius;
 ctx.beginPath();
 ctx.globalAlpha = this.globalAlpha;
 ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI, true);
 ctx.fillStyle = this.color;
 ctx.fill();
 ctx.lineWidth = thickness;
 ctx.strokeStyle = outcolor;
 ctx.stroke();
 } else {
 if (this.type == "img") {
 var img = document.getElementById(this.color);
 ctx.globalAlpha = this.globalAlpha;
 ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (this.type == "animated-img") {
 var img = document.getElementById(this.color);
 ctx.globalAlpha = this.globalAlpha;
 ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.x, this.y, this.width, this.height);
 }
 if (this.type == "img-rot") {
 ctx.save();
 ctx.globalAlpha = this.globalAlpha;
 ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
 ctx.rotate(this.angle);
 var img = document.getElementById(this.color);
 ctx.drawImage(img, this.width / -2, this.height / -2, this.width, this.height);
 ctx.restore();
 }
 if (this.type == "animated-img-rot") {
 ctx.save();
 ctx.globalAlpha = this.globalAlpha;
 ctx.translate(this.x + (this.width / 2), this.y + (this.height / 2));
 ctx.rotate(this.angle);
 var img = document.getElementById(this.color);
 ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.width / -2, this.height / -2, this.width, this.height);
 ctx.restore();
  }
 }
}
this.newPos = function() {
this.x += this.speedX;
this.y += this.speedY;
}
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
}
this.stopPhysics;
this.crashExeption = false;
this.crashWith = function(otherobj, target) {
var l1 = this.getLeft();
var t1 = this.getTop();
var r1 = this.getRight();
var b1 = this.getBottom();
var l2 = otherobj.getLeft();
var t2 = otherobj.getTop();
var r2 = otherobj.getRight();
var b2 = otherobj.getBottom();
var crash = true;
if (this.crashExeption == true && otherobj.id == target) {
 this.stopPhysics = true;
} else {
 this.stopPhysics = false;
}
if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2) {
 crash = false;
}
 return crash;
};
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
		if (exeption == null || exeption != true) {
		this.x = entity.getRight() + 0.5;
		}
			if (this.type == "player1") {
				if (lockLeftE == 1) {
				playerSpeedX = 0;
				}
			}
        } else {
		if (exeption == null || exeption != true) {
		this.x = entity.getLeft() - this.width - 0.5;
		}
			if (this.type == "player1") {
			   if (lockRightE == 1) {
				playerSpeedX = 0;
				}
		    }
        }		
    } else {
        if (dy < 0) {
		if (exeption == null || exeption != true) {
		this.y = entity.getBottom() + 0.5;
		}
			if (this.type == "player1") {
				if (lockUpE == 1) {
					playerSpeedY = 0;
			}
		}
    } else {
		if (exeption == null || exeption != true) {
		this.y = entity.getTop() - this.height - 0.5;
		}
			if (this.type == "player1") {
			    if (lockDownE == 1) {
					playerSpeedY = 0;
			    }
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
 if (playerHealth >= 1) {
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
  } else
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
ammocrate1picO = new component(20, 20, "ammopic1", crate1X, crate1Y, "img");
healthcrate1picO = new component(20, 20, "healthpic1", crateh1X, crateh1Y, "img");
SWeapon1 = new component(10, 10, "bullpic4", cratesw1X, cratesw1Y, "img");
SWeapon1Box = new component(10, 10, "orange", cratesw1X, cratesw1Y, "rec");
}
var wave = 1;
var oldwave = 1;
var upgrademenu = 0;
function checkwave() {
	if (oldwave != wave && wave > oldwave){
		upgrademenu = 1;
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
if (box.crashWith(insidedetect1) == false) {
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
if (box.crashWith(inside2detect1) == false) {
inside2house1 = 0; 
if (roof2house1.globalAlpha < 1) {
	roof2house1.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_1_D)) {
if (tree1_1.globalAlpha > 0.5) {
	tree1_1.globalAlpha -= 0.01;
	Stree1_1.globalAlpha -= 0.01;
	Ftree1_1.globalAlpha -= 0.01;
	Wtree1_1.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_1_D) == false) { 
if (tree1_1.globalAlpha < 1) {
	tree1_1.globalAlpha += 0.01;
	Stree1_1.globalAlpha += 0.01;
	Ftree1_1.globalAlpha += 0.01;
	Wtree1_1.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_2_D)) {
if (tree1_2.globalAlpha > 0.5) {
	tree1_2.globalAlpha -= 0.01;
	Stree1_2.globalAlpha -= 0.01;
	Ftree1_2.globalAlpha -= 0.01;
	Wtree1_2.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_2_D) == false) { 
if (tree1_2.globalAlpha < 1) {
	tree1_2.globalAlpha += 0.01;
	Stree1_2.globalAlpha += 0.01;
	Ftree1_2.globalAlpha += 0.01;
	Wtree1_2.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_3_D)) {
if (tree1_3.globalAlpha > 0.5) {
	tree1_3.globalAlpha -= 0.01;
	Stree1_3.globalAlpha -= 0.01;
	Ftree1_3.globalAlpha -= 0.01;
	Wtree1_3.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_3_D) == false) { 
if (tree1_3.globalAlpha < 1) {
	tree1_3.globalAlpha += 0.01;
	Stree1_3.globalAlpha += 0.01;
	Ftree1_3.globalAlpha += 0.01;
	Wtree1_3.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_4_D)) {
if (tree1_4.globalAlpha > 0.5) {
	tree1_4.globalAlpha -= 0.01;
	Stree1_4.globalAlpha -= 0.01;
	Ftree1_4.globalAlpha -= 0.01;
	Wtree1_4.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_4_D) == false) { 
if (tree1_4.globalAlpha < 1) {
	tree1_4.globalAlpha += 0.01;
	Ftree1_4.globalAlpha += 0.01;
	Ftree1_4.globalAlpha += 0.01;
	Wtree1_4.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_5_D)) {
if (tree1_5.globalAlpha > 0.5) {
	tree1_5.globalAlpha -= 0.01;
	Stree1_5.globalAlpha -= 0.01;
	Ftree1_5.globalAlpha -= 0.01;
	Wtree1_5.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_5_D) == false) { 
if (tree1_5.globalAlpha < 1) {
	tree1_5.globalAlpha += 0.01;
	Stree1_5.globalAlpha += 0.01;
	Ftree1_5.globalAlpha += 0.01;
	Wtree1_5.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_6_D)) {
if (tree1_6.globalAlpha > 0.5) {
	tree1_6.globalAlpha -= 0.01;
	Stree1_6.globalAlpha -= 0.01;
	Ftree1_6.globalAlpha -= 0.01;
	Wtree1_6.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_6_D) == false) { 
if (tree1_6.globalAlpha < 1) {
	tree1_6.globalAlpha += 0.01;
	Stree1_6.globalAlpha += 0.01;
	Ftree1_6.globalAlpha += 0.01;
	Wtree1_6.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_7_D)) {
if (tree1_7.globalAlpha > 0.5) {
	tree1_7.globalAlpha -= 0.01;
	Stree1_7.globalAlpha -= 0.01;
	Ftree1_7.globalAlpha -= 0.01;
	Wtree1_7.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_7_D) == false) { 
if (tree1_7.globalAlpha < 1) {
	tree1_7.globalAlpha += 0.01;
	Stree1_7.globalAlpha += 0.01;
	Ftree1_7.globalAlpha += 0.01;
	Wtree1_7.globalAlpha += 0.01;
}
  }
 if (box.crashWith(tree1_8_D)) {
if (tree1_8.globalAlpha > 0.5) {
	tree1_8.globalAlpha -= 0.01;
	Stree1_8.globalAlpha -= 0.01;
	Ftree1_8.globalAlpha -= 0.01;
	Wtree1_8.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree1_8_D) == false) { 
if (tree1_8.globalAlpha < 1) {
	tree1_8.globalAlpha += 0.01;
	Stree1_8.globalAlpha += 0.01;
	Ftree1_8.globalAlpha += 0.01;
	Wtree1_8.globalAlpha += 0.01;
}
  }
 }
if (wave >= 5 && wave < 7) {//gohere4//
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
if (box.crashWith(inside3detect1) == false) {
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
if (box.crashWith(inside4detect1) == false) {
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
if (box.crashWith(tree2_1_D)) {
if (tree2_1.globalAlpha > 0.5) {
	tree2_1.globalAlpha -= 0.01;
	Stree2_1.globalAlpha -= 0.01;
	Ftree2_1.globalAlpha -= 0.01;
	Wtree2_1.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_1_D) == false) { 
if (tree2_1.globalAlpha < 1) {
	tree2_1.globalAlpha += 0.01;
	Stree2_1.globalAlpha += 0.01;
	Ftree2_1.globalAlpha += 0.01;
	Wtree2_1.globalAlpha += 0.01;
}
  }
if (box.crashWith(tree2_2_D)) {
if (tree2_2.globalAlpha > 0.5) {
	tree2_2.globalAlpha -= 0.01;
	Stree2_2.globalAlpha -= 0.01;
	Ftree2_2.globalAlpha -= 0.01;
	Wtree2_2.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_2_D) == false) { 
if (tree2_2.globalAlpha < 1) {
	tree2_2.globalAlpha += 0.01;
	Stree2_2.globalAlpha += 0.01;
	Ftree2_2.globalAlpha += 0.01;
	Wtree2_2.globalAlpha += 0.01;
}
  }
if (box.crashWith(tree2_3_D)) {
if (tree2_3.globalAlpha > 0.5) {
	tree2_3.globalAlpha -= 0.01;
	Stree2_3.globalAlpha -= 0.01;
	Ftree2_3.globalAlpha -= 0.01;
	Wtree2_3.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_3_D) == false) { 
if (tree2_3.globalAlpha < 1) {
	tree2_3.globalAlpha += 0.01;
	Stree2_3.globalAlpha += 0.01;
	Ftree2_3.globalAlpha += 0.01;
	Wtree2_3.globalAlpha += 0.01;
}
  }
if (box.crashWith(tree2_4_D)) {
if (tree2_4.globalAlpha > 0.5) {
	tree2_4.globalAlpha -= 0.01;
	Stree2_4.globalAlpha -= 0.01;
	Ftree2_4.globalAlpha -= 0.01;
	Wtree2_4.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_4_D) == false) { 
if (tree2_4.globalAlpha < 1) {
	tree2_4.globalAlpha += 0.01;
	Stree2_4.globalAlpha += 0.01;
	Ftree2_4.globalAlpha += 0.01;
	Wtree2_4.globalAlpha += 0.01;
}
  }
if (box.crashWith(tree2_5_D)) {
if (tree2_5.globalAlpha > 0.5) {
	tree2_5.globalAlpha -= 0.01;
	Stree2_5.globalAlpha -= 0.01;
	Ftree2_5.globalAlpha -= 0.01;
	Wtree2_5.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_5_D) == false) { 
if (tree2_5.globalAlpha < 1) {
	tree2_5.globalAlpha += 0.01;
	Stree2_5.globalAlpha += 0.01;
	Ftree2_5.globalAlpha += 0.01;
	Wtree2_5.globalAlpha += 0.01;
}
  }
if (box.crashWith(tree2_6_D)) {
if (tree2_6.globalAlpha > 0.5) {
	tree2_6.globalAlpha -= 0.01;
	Stree2_6.globalAlpha -= 0.01;
	Ftree2_6.globalAlpha -= 0.01;
	Wtree2_6.globalAlpha -= 0.01;
}
  }
if (box.crashWith(tree2_6_D) == false) { 
if (tree2_6.globalAlpha < 1) {
	tree2_6.globalAlpha += 0.01;
	Stree2_6.globalAlpha += 0.01;
	Ftree2_6.globalAlpha += 0.01;
	Wtree2_6.globalAlpha += 0.01;
}
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
if (stcweapon == 0) {
if (switchy > 0) {
switchy = 0;
}
}
if (stcget == 1) {
if (switchy == 0) {
	weapon = 0;
}
}
if (switchy == 1) {
if (stcget == 1) {
if (stcweapon == 1) {
    weapon = 3;	
   }
  }
 }
}

//ST. Patty's Day Event//
var STPDAYEVENTSTART = false;
var touchRelic = false;
var STangleSpeed = 0;
var HatDeath = false;
var STBOSSBULLETS = [];
var canShootST = false;
var timeForShots = 100;
var timeST = 0;
var STBOSSDAMAGE = 5;
var STBOSSHEALTH = 500;
var STHEALTHBARCOLOR = "darkgreen";
var STPRIZEMONEY = 10;
var STPOPUP = 0;
function StPattysDay() {
STPDAYEVENTBOSS.x = STPDAYEVENTBOSSBOX.x;
STPDAYEVENTBOSS.y = STPDAYEVENTBOSSBOX.y;
STPDAYEVENTBOSSHEALTHBAR.width = STBOSSHEALTH / 5;
STPDAYEVENTBOSSHEALTHBAR.color = STHEALTHBARCOLOR;
if (STPOPUP == 1) {
pauseGame = 1;
}
if (difficulty == 0) {
STBOSSDAMAGE = 5;
}
if (difficulty == 1) {
STBOSSDAMAGE = 7;
}
if (difficulty == 2) {
STBOSSDAMAGE = 10;
}
if (STBOSSHEALTH >= 450) {
STHEALTHBARCOLOR = "darkgreen";
}
if (STBOSSHEALTH <= 400) {
STHEALTHBARCOLOR = "green";
}
if (STBOSSHEALTH <= 350) {
STHEALTHBARCOLOR = "yellow";
}
if (STBOSSHEALTH <= 300) {
STHEALTHBARCOLOR = "orange";
}
if (STBOSSHEALTH <= 250) {
STHEALTHBARCOLOR = "red";
}
if (STBOSSHEALTH <= 200) {
STHEALTHBARCOLOR = "darkred";
}
if (STBOSSHEALTH <= 150) {
STHEALTHBARCOLOR = "#750000";
}
if (STBOSSHEALTH <= 100) {
STHEALTHBARCOLOR = "#2e0000";
}
if (wave != 8000) {
touchRelic = false;
STPDAYEVENTSTART = false;
STangleSpeed = 0;
STPDAYEVENTBOSSINTRO.y = 190;
HatDeath = false;
STPDAYEVENTBOSSBOX.x = 380.5;
STPDAYEVENTBOSSBOX.y = 181.5;
STBOSSBULLETS.length = 0;
canShootST = false;
STBOSSHEALTH = 500;
timeST = 0;
}
if (wave == 8000 && switchpos == 2) {
if (touchRelic == false) {
STPDAYEVENTBOSSINTRO.angle = 0;
}
if (STPDAYEVENTBOSSINTRO.crashWith(box)) {
touchRelic = true;
}
if (touchRelic == true) {
if (STangleSpeed < 6.28) {
STangleSpeed += (STPDAYEVENTBOSSINTRO.angle + 0.01)
STPDAYEVENTBOSSINTRO.y -= 10;
STPDAYEVENTBOSSBOX.y -= 10;
}
STPDAYEVENTBOSSINTRO.angle = STangleSpeed;
if (STangleSpeed >= 6.28) {
STPDAYEVENTSTART = true;
}
//BOSS//
if (STPDAYEVENTSTART == true) {
STPDAYEVENTBOSS.angle = Math.atan2(-box.y + STPDAYEVENTBOSS.y, -box.x + STPDAYEVENTBOSS.x) + 1.57079633;
if (STPDAYEVENTBOSSBOX.x > box.x + box.width + 100) {
STPDAYEVENTBOSSBOX.x -= 1;	
}
if (STPDAYEVENTBOSSBOX.x < box.x - 100) {
STPDAYEVENTBOSSBOX.x += 1;	
}
if (STPDAYEVENTBOSSBOX.y > box.y + box.height + 100) {
STPDAYEVENTBOSSBOX.y -= 1;	
}
if (STPDAYEVENTBOSSBOX.y < box.y - 100) {
STPDAYEVENTBOSSBOX.y += 1;	
}
if (STBOSSHEALTH > 0) {
if (bullbox.crashWith(STPDAYEVENTBOSSBOX) && fire == 1) {
fire = 0;
STBOSSHEALTH -= PlayerDamageDeal;
}
}
if (STBOSSHEALTH <= 0) {
HatDeath = true;
goBack = 1;
//prize//
money += Math.floor(Math.random() * STPRIZEMONEY);
if (STPRIZESHIP == 0) {
STPOPUP = 1;
STPRIZESHIP = 1;
localStorage && (localStorage.Ps = STPRIZESHIP);
}
if (difficulty == 2 && STPRIZEWEAPON == 0) {
STPRIZEWEAPON = 1;
localStorage && (localStorage.Pw = STPRIZEWEAPON);
}
}
//shooting//
if (canShootST == false) {
timeST++;	
}
if (timeST >= timeForShots) {
canShootST = true;
timeST = 0;
}
if (canShootST == true && Death1 == 0) {
STPDAYEVENTBOSSBULLETS = new component(10, 10, "ST_P_DAY_EVENT_BOSS_BULLET", STPDAYEVENTBOSSBOX.x + (STPDAYEVENTBOSSBOX.width/2), STPDAYEVENTBOSSBOX.y + (STPDAYEVENTBOSSBOX.height/2), "img");
STBOSSBULLETS.push(STPDAYEVENTBOSSBULLETS);
canShootST = false;
}
for (var i = STBOSSBULLETS.length - 1; i >= 0; i--){
if (fire == 1) {
if (STBOSSBULLETS[i].crashWith(bullbox) == true) {
STBOSSBULLETS.splice(i,1);
}
} else
if (STBOSSBULLETS[i].crashWith(box) == true) {
playerHealth -= STBOSSDAMAGE;
STBOSSBULLETS.splice(i,1);
} else {
if (STBOSSBULLETS[i].x > box.x + box.width) {
STBOSSBULLETS[i].x -= 3;
}
if (STBOSSBULLETS[i].x < box.x) {
STBOSSBULLETS[i].x += 3;
}
if (STBOSSBULLETS[i].y > box.y + box.height) {
STBOSSBULLETS[i].y -= 3;
}
if (STBOSSBULLETS[i].y < box.y) {
STBOSSBULLETS[i].y += 3;
}	
}
}
}
}
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
ship1.y = box.y  - 3.5;
ship1.x = box.x  - 3.5;
ship2.y = box.y;
ship2.x = box.x;
ship3.y = box.y;
ship3.x = box.x;
ship4.y = box.y;
ship4.x = box.x;
ship5.y = box.y  - 3.5;
ship5.x = box.x  - 3.5;
ship6.y = box.y;
ship6.x = box.x;
ship6.angle += 0.05;
detectbox.x = box.x - 37.5;
detectbox.y = box.y - 37.5;
if (pauseGame > 1) {
   pauseGame = 0;
   }
Datechecker();
mute();
if (openpatchinfo == 1) {
document.getElementById("updateinfo").style.visibility = "visible";
 }
if (openpatchinfo == 0) {
document.getElementById("updateinfo").style.visibility = "hidden";
 }
val = document.getElementById("volume").value;
val2 = document.getElementById("soundvolume").value;
KeyZz = document.getElementById("Arrowz").checked;
KeyZz2 = document.getElementById("Esc_").checked;
Up_ = document.getElementById('moveUP').value;
Down_ = document.getElementById('moveDOWN').value;
Left_ = document.getElementById('moveLEFT').value;
Right_ = document.getElementById('moveRIGHT').value;
shootUp_ = document.getElementById('shootUP').value;
shootDown_ = document.getElementById('shootDOWN').value;
shootLeft_ = document.getElementById('shootLEFT').value;
shootRight_ = document.getElementById('shootRIGHT').value;
Esssc_ = document.getElementById("backBT").value;
Revive_ = document.getElementById("reviveBT").value;
Mute_ = document.getElementById("mute").value;
Patch_ = document.getElementById("patch").value;
HB = document.getElementById("HBshow").checked;
Up_2 = Up_.toUpperCase();
Down_2 = Down_.toUpperCase();
Left_2 = Left_.toUpperCase();
Right_2 = Right_.toUpperCase();
shootUp_2 = shootUp_.toUpperCase();
shootDown_2 = shootDown_.toUpperCase();
shootLeft_2 = shootLeft_.toUpperCase();
shootRight_2 = shootRight_.toUpperCase();
Esssc_2 = Esssc_.toUpperCase();
Revive_2 = Revive_.toUpperCase();
Mute_2 = Mute_.toUpperCase();
Patch_2 = Patch_.toUpperCase();
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
StPattysDay();
resetfire();
costToRevive.text = "You must have $" + revivecost + " to revive";
playSound();
skipSound();
detectbox.update();
box.update();
if (fire > 0) {
bullbox.update();
}
if (wave > 4 && wave < 7) {
if (BadDeath3 == 0) {
if (Death1 == 0) {
if (trifire == 0) {
tribbox.update();	
   }
  }
 }
}
if (wave < 7 && wave > 1) {
if (BadDeath2 < 1) {
if (Death1 == 0) {
badguy2.update();
  }
 }
}
if (wave > 2 && wave < 5) {
if (BadDeath4 == 0) {
recbox1.update();
 }
}
if (wave > 4 && wave < 7) {
if (BadDeath3 == 0) {
tribox.update();
 }
}
if (wave > 5 && wave < 7) {
if (BadDeath5 == 0) {
xbox1.update();
 }
}
if (wave < 5) {
if (BadDeath < 1) {
if (Death1 == 0) {
badguy1.update();
  }
 }
}
if (wave == 7 && spawnBoss7 == 1 && BossDead == false) {
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
if (menu > 0) {
if (cratespawn > 0) {
ammocrate1.update();
 }
}
if (menu > 0) {
if (cratespawn2 > 0) {
healthcrate1.update();
 }
}
if (menu > 0) {
if (wave == 3) {
if (stcget == 0) {
if (stcweapon > 0) {
SWeapon1Box.update();
   }
  }
 }
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
if (fallseason == 0 && winterseason == 0) {
w1t5.update();
}
if (fallseason == 1) {
Fw1t5.update();
}
if (winterseason == 1) {
Ww1t5.update();
}
SWPart6.update();
SWPart13.update();
SWPart1.update();
SWPart3.update();
SWPart18.update();
SWPart17.update();
SWPart16.update();
SWPart15.update();
SWPart14.update();
SWPart7.update();
SWPart12.update();
SWPart11.update();
SWPart10.update();
SWPart9.update();
SWPart8.update();
SWPart5.update();
SWPart4.update();
SWPart2.update();
if (fallseason == 0 && winterseason == 0) {
formplat.update();
}
if (fallseason == 1) {
formFplat.update();
}
if (winterseason == 1) {
formWplat.update();
}
floorhouse1.update();
floor2house1.update();
}
if (wave > 4 && wave < 8) {
wall3house6.update();
wall4house7.update();
inside3detect1.update();
inside4detect1.update();
if (fallseason == 0 && winterseason == 0) {
w5t7.update();
}
if (fallseason == 1) {
Fw5t7.update();
}
if (winterseason == 1) {
Ww5t7.update();
}
if (ExplosionCycle <= 4 && spawnBoss7 == 0) {
floor3house1.update();
floor4house1.update();
}
if (wave == 7 && spawnBoss7 == 1) {
burntHouse1.update();
burntHouse2.update();
}
plantbox1_1.update();
plantbox2_1.update();
plantbox3_1.update();
plantbox4_1.update();
}
//ST. Patty's Day Event//
if (wave == 8000) {
STPDAYEVENTBOSSBOX.update();
STPDAYEVENTBG.update();
STPDAYEVENTPROP.update();
if (STPDAYEVENTSTART == false) {
STPDAYEVENTBOSSINTRO.update();
}
}
if (menu > 0) {
if (cratespawn > 0) {
ammocrate1picO.update();
 }
}
if (menu > 0) {
if (cratespawn2 > 0) {
healthcrate1picO.update();
 }
}
if (menu > 0) {
if (wave == 3) {
if (stcget == 0) {
if (stcweapon > 0) {
SWeapon1.update();  
if (box.crashWith(SWeapon1Box)) {
stcget = 1;
tip = Math.floor(Math.random() * tips);
pauseGame = 1;
specialalert1 = 1;
}
   }
  }
 }
}
if (fire > 0) {
if (weapon == 0) {
bpic.update();
 }
if (weapon == 1) {
bpic2.update();
 }
if (weapon == 2) {
bpic3.update();
 }
if (weapon == 3) {
bpic4.update();
 }
if (weapon == 4) {
bpic5.update();
 }
}
if (wave < 5) {
if (BadDeath < 1) {
if (Death1 == 0) {
badguypic1.update();
if (HB == true) {
badguy1healthbar.update();
}
  }
 }
}
if (wave < 7 && wave > 1) {
if (BadDeath2 < 1) {
if (Death1 == 0) {
badguypic2.update();
if (HB == true) {
badguy1healthbar2.update();
}
  }
 }
}
tribulletai();
if (wave > 4 && wave < 7) {
if (BadDeath3 == 0) {
if (Death1 == 0) {
if (trifire == 1) {
tribpic.update();
   }
  }
 }
}
if (wave > 4 && wave < 7) {
if (BadDeath3 == 0) {
if (Death1 == 0) {
trienemypic.update();
if (HB == true) {
badguy1healthbar4.update();
}
  } 
 }
}
if (wave > 5 && wave < 7) {
if (BadDeath5 == 0) {
if (Death1 == 0) {
xenemypic1.update();
if (HB == true) {
badguy1healthbar5.update();
}
  } 
 }
}
if (wave > 2 && wave < 5) {
if (BadDeath4 == 0) {
if (Death1 == 0) {
recenemypic1.update();
if (HB == true) {
badguy1healthbar3.update();
}
  }
 }
}
if (wave == 7 && GuardDead == false && GuardStart == 1 && Death1 == 0) {
guardianPic.update();
if (HB == true) {
guardianhealthbar.update();
}
}
if (wave == 7 && spawnBoss7 == 1 && BossDead == false) {
bossWave7.newPos();
for (var i = _bossBullets.length - 1; i >= 0; i--){
_bossBullets[i].update();
}
if (bossSheildMode == 0) {
bossWave7pic.update();
}
if (bossSheildMode == 1) {
bossWave7sheildPic.update();	
 }
}
if (wave == 8000) {
if (STPDAYEVENTSTART == true && HatDeath == false) {
for (var i = STBOSSBULLETS.length - 1; i >= 0; i--){
STBOSSBULLETS[i].update();
}
STPDAYEVENTBOSS.update();
STPDAYEVENTBOSSHEALTHBAR.update();
STPDAYEVENTBOSSHEALTHBARTEXT.update();
}
}
badboxspawn();
badtriboxspawn();
badxboxspawn();
badboxspawn2();
badrecspawn1();
if (cratespawn > 0) {
if (box.crashWith(ammocrate1)) {
if (ammo <= 70/100 * maxAmmo) {
 cratespawn = 0;
 ammo += maxAmmo - 70/100 * maxAmmo;
 }
 }
}
if (cratespawn2 > 0) {
if (box.crashWith(healthcrate1)) {
if (playerHealth <= 75/100 * playerHealthMax) {
 cratespawn2 = 0;
 playerHealth += 25/100 * playerHealthMax;
 }
 }
}
if (Death1 == 0) {
if (playerShip == 0) {
ship1.update();	
}
if (playerShip == 1) {
ship2.update();	
}
if (playerShip == 2) {
ship3.update();	
}
if (playerShip == 3) {
ship4.update();
}
if (playerShip == 4) {
ship5.update();
}
if (playerShip == 5) {
ship6.update();
}
if (menu > 0) {
if (upgrademenu == 0) {
box.newPos();
detectbox.newPos();
  }
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
if (fallseason == 0 && winterseason == 0 && springseason == 0) {
tree1_1.update();
tree1_2.update();
tree1_3.update();
tree1_4.update();
tree1_5.update();
tree1_6.update();
tree1_7.update();
tree1_8.update();
 }
if (fallseason == 1) {
Ftree1_1.update();
Ftree1_2.update();
Ftree1_3.update();
Ftree1_4.update();
Ftree1_5.update();
Ftree1_6.update();
Ftree1_7.update();
Ftree1_8.update();
 }
 if (winterseason == 1) {
Wtree1_1.update();
Wtree1_2.update();
Wtree1_3.update();
Wtree1_4.update();
Wtree1_5.update();
Wtree1_6.update();
Wtree1_7.update();
Wtree1_8.update();
 }
if (springseason == 1) {
Stree1_1.update();
Stree1_2.update();
Stree1_3.update();
Stree1_4.update();
Stree1_5.update();
Stree1_6.update();
Stree1_7.update();
Stree1_8.update();
 }
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
wall4house6_4.update();//gohere3//
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
if (fallseason == 0 && winterseason == 0 && springseason == 0) {
tree2_1.update();
tree2_2.update();
tree2_3.update();
tree2_4.update();
tree2_5.update();
tree2_6.update();
 }
if (fallseason == 1) {
Ftree2_1.update();
Ftree2_2.update();
Ftree2_3.update();
Ftree2_4.update();
Ftree2_5.update();
Ftree2_6.update();
 }
if (winterseason == 1) {
Wtree2_1.update();
Wtree2_2.update();
Wtree2_3.update();
Wtree2_4.update();
Wtree2_5.update();
Wtree2_6.update();
 }
if (springseason == 1) {
Stree2_1.update();
Stree2_2.update();
Stree2_3.update();
Stree2_4.update();
Stree2_5.update();
Stree2_6.update();
 }
if (ExplosionCycle <= 4 && spawnBoss7 == 0 && wave == 7) {
Explosion.update();
}
if (wave == 7 && spawnBoss7 == 1 && BossDead == false) {
if (bossSheildMode == 0) {
bosstxt.update();
}
if (bossSheildMode == 1) {
bosstxt2.update();
}
boss7healthbar.update();
}
}
ui.update();
if (wave < 5) {
if (fallseason == 0 && winterseason == 0) {
border1_5.update();
 }
if (fallseason == 1) {
Fborder1_5.update();
 }
if (winterseason == 1) {
Wborder1_5.update();
 }
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
if (switchpos == 0) {
switchpos = 1;
}
if (switchpos == 1) {
box.x = playerXwave5;
box.y = playerYwave5;
detectbox.x = playerXwave5 - 37.5;
detectbox.y = playerYwave5 - 37.5;
switchpos = 2;
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
xwavebox1.y = x1posY - 5;//spawn//
}
Health1();
checkwave();
nameFC();
waveammoweapon();
ammocrate();
bulletai();
if (pauseGame == 0) {
badai1();
triangleAI();
xAI();
badai2();
badrecai1();
}
if (pauseGame == 1) {
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
if (weaponupgrade1 == 0) {
upgrade1txt.update();
upgrade1txtinfo.update();
upgrade1txtinfo2.update();
upgrade1txtinfo3.update();
upgrade1txtinfo4.update();
upgrade1txtinfo5.update();
upgrade1txtinfo6.update();
upgrade1txtinfo7.update();
 }
if (weaponupgrade1 == 1) {
upgrade1_2txt.update();
upgrade1_2txtinfo.update();
upgrade1_2txtinfo2.update();
upgrade1_2txtinfo3.update();
upgrade1_2txtinfo4.update();
upgrade1_2txtinfo5.update();
upgrade1_2txtinfo6.update();
}
if (weaponupgrade1 > 1) {
max1txt.update();
}
}
pauseboard = new component(800, 500, "#451661", 0, 0, "rec");
TipsText();
if (pauseGame == 1 && pauseGameKeys == false) {
weap_ship = new component(200, 200, "grey", 300, 40, "rec");
shiptxt = new component("30px", "Consolas", "white", 365, 55, "text");
shiptxt.font = "15px Consolas";
shiptxt.text = "Shipyard";
pausetxt = new component("30px", "Consolas", "white", 345, 30, "text");
pausetxt.font = "20px Consolas";
pausetxt.text = "Pause Menu";
pauseboard.update();
pausetxt.update();
StartOver.update();
StartOvertxt.update();
TipsTxt.update();
if (weaponVault == 0) {
shipHighLight1 = new component(32, 32, "highlight", 305, 60, "img");
shipHighLight1.globalAlpha = 0.5;
ship1Show = new component(32, 32, "playerimg", 305, 60, "img");
ship1txt = new component("30px", "Consolas", "white", 312.5, 105, "text");
ship1txt.font = "15px Consolas";
ship1txt.text = "#1";
shipHighLight2 = new component(32, 32, "highlight", 342, 60, "img");
shipHighLight2.globalAlpha = 0.5;
ship2Show = new component(32, 32, "player2img", 342, 60, "img");
ship2txt = new component("30px", "Consolas", "white", 349.5, 105, "text");
ship2txt.font = "15px Consolas";
ship2txt.text = "#2";
ship3Hidden = new component(32, 32, "hiddenShip", 379, 60, "img");
shipHighLight3 = new component(32, 32, "highlight", 379, 60, "img");
shipHighLight3.globalAlpha = 0.5;
ship3Show = new component(32, 32, "player3img", 379, 60, "img");
ship3txt = new component("30px", "Consolas", "white", 386.5, 105, "text");
ship3txt.font = "15px Consolas";
ship3txt.text = "#3";
ship4Hidden = new component(32, 32, "hiddenShip", 416, 60, "img");
shipHighLight4 = new component(32, 32, "highlight", 416, 60, "img");
shipHighLight4.globalAlpha = 0.5;
ship4Show = new component(32, 32, "player4img", 416, 60, "img");
ship4txt = new component("30px", "Consolas", "white", 423.5, 105, "text");
ship4txt.font = "15px Consolas";
ship4txt.text = "#4";
ship5Hidden = new component(32, 32, "hiddenShip", 453, 60, "img");
shipHighLight5 = new component(32, 32, "highlight", 453, 60, "img");
shipHighLight5.globalAlpha = 0.5;
ship5Show = new component(32, 32, "player5img", 453, 60, "img");
ship5txt = new component("30px", "Consolas", "white", 460.5, 105, "text");
ship5txt.font = "15px Consolas";
ship5txt.text = "#5";
ship6Hidden = new component(32, 32, "hiddenShip", 305, 110, "img");
shipHighLight6 = new component(32, 32, "highlight", 305, 110, "img");
shipHighLight6.globalAlpha = 0.5;
ship6Show = new component(32, 32, "ST_P_DAY_EVENT_PRIZE", 305, 110, "img");
ship6txt = new component("30px", "Consolas", "white", 312.5, 155, "text");
ship6txt.font = "15px Consolas";
ship6txt.text = "#6";
weap_ship.update();
shiptxt.update();
if (playerShip == 0) {
shipHighLight1.update();
}
ship1Show.update();
ship1txt.update();
if (playerShip == 1) {
shipHighLight2.update();
}
ship2Show.update();
ship2txt.update();
if (playerShip == 2) {
shipHighLight3.update();
}
if (christmasSkin == 1) {
ship3Show.update();
} else {
ship3Hidden.update();
}
ship3txt.update();
if (playerShip == 3) {
shipHighLight4.update();
}
if (miniBossShip == 1) {
ship4Show.update();
} else {
ship4Hidden.update();
}
ship4txt.update();
if (playerShip == 4) {
shipHighLight5.update();
}
if (easyShipPrize == 1) {
ship5Show.update();
} else {
ship5Hidden.update();
}
ship5txt.update();
if (playerShip == 5) {
shipHighLight6.update();
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
if (STPOPUP == 1) {
alerttxt1 = new component("30px", "Consolas", "white", 400, 60, "text");
alerttxt1.align = "center";
alerttxt1.font = "20px Consolas";
alerttxt1.text = "You Got A Special Gift Go To The Shipyard/Pause Menu!";
alert1 = new component(800, 500, "#451661", 0, 0, "rec");
alert1.update();
alerttxt1.update();
 }
}
if (specialalert1 == 0 && STPOPUP == 0) {
statscommand();
playerMoney();
nameFC();
}
if (pauseGameKeys == true) {
pauseboard.update();
}
if (wave == 8 && upgrademenu == 0 && pauseGame == 0) {
endCard.update();
}
if (menu == 0) {
if (upgrademenu == 0) {
menuboard.update();
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
if (upE == 1 && up == 0) {//gopl//
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
if (box.crashWith(wallleft) == true) {
box.elasticCollition(wallleft);
}
if (box.crashWith(wallright) == true) {
box.elasticCollition(wallright);
}
if (box.crashWith(wall3) == true) {
box.elasticCollition(wall3);
}
if (box.crashWith(wall4) == true) {
box.elasticCollition(wall4);
}
 if (wave < 5) {
if (box.crashWith(wallhouse1) == true) {
box.elasticCollition(wallhouse1);
}
if (box.crashWith(wallhouse1_2) == true) {
box.elasticCollition(wallhouse1_2);
}
if (box.crashWith(wallhouse2) == true) {
box.elasticCollition(wallhouse2);
}
if (box.crashWith(wallhouse2_2) == true) {
box.elasticCollition(wallhouse2_2);
}
if (box.crashWith(wallhouse3_2) == true) {
box.elasticCollition(wallhouse3_2);
}
if (box.crashWith(wallhouse3) == true) {
box.elasticCollition(wallhouse3);
}
if (box.crashWith(wallhouse4_3) == true) {
box.elasticCollition(wallhouse4_3);
}
if (box.crashWith(wallhouse6_3) == true) {
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
if (!('ongamepadconnected' in window) && controllerCon == 1) {
  // No gamepad events available, poll instead.
  pollGamepads();
}
if (pauseGameKeys == false && stopPause == false) {
pauseGame = 0;	
stopPause = true;
}
if (pauseGameKeys == true) {
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

var KeyZz = document.getElementById("Arrowz").checked;
var KeyZz2 = document.getElementById("Esc_").checked;
var Up_ = document.getElementById('moveUP').value;
var Down_ = document.getElementById('moveDOWN').value;
var Left_ = document.getElementById('moveLEFT').value;
var Right_ = document.getElementById('moveRIGHT').value;
var shootUp_ = document.getElementById('shootUP').value;
var shootDown_ = document.getElementById('shootDOWN').value;
var shootLeft_ = document.getElementById('shootLEFT').value;
var shootRight_ = document.getElementById('shootRIGHT').value;
var Esssc_ = document.getElementById("backBT").value;
var Revive_ = document.getElementById("reviveBT").value;
var Mute_ = document.getElementById("mute").value;
var Patch_ = document.getElementById("patch").value;
var Up_2 = Up_.toUpperCase();
var Down_2 = Down_.toUpperCase();
var Left_2 = Left_.toUpperCase();
var Right_2 = Right_.toUpperCase();
var shootUp_2 = shootUp_.toUpperCase();
var shootDown_2 = shootDown_.toUpperCase();
var shootLeft_2 = shootLeft_.toUpperCase();
var shootRight_2 = shootRight_.toUpperCase();
var Esssc_2 = Esssc_.toUpperCase();
var Revive_2 = Revive_.toUpperCase();
var Mute_2 = Mute_.toUpperCase();
var Patch_2 = Patch_.toUpperCase(); 
var controllerCon = 0;

var conx = 0;
var cony = 0;

function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    var gp = gamepads[0];
    if (gp) {
	console.log("Gamepad connected at index " + gp.index + ": " + gp.id +
        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
		if (gp.buttons[0].pressed == true) {
		console.log("x pressed");
		autoDown();
		}
		if (gp.buttons[1].pressed == true) {
		console.log("o pressed");
		autoRight();
		}
		if (gp.buttons[3].pressed == true) {
		console.log("tri pressed");
		autoUp();
		}
		if (gp.buttons[2].pressed == true) {
		console.log("squ pressed");
		autoLeft();
		}
		if (gp.buttons[0].pressed == false) {
		clearAutoD();
		}
		if (gp.buttons[1].pressed == false) {
		clearAutoR();
		}
		if (gp.buttons[2].pressed == false) {
		clearAutoL();
		}
		if (gp.buttons[3].pressed == false) {
		clearAutoU();
		}
	if(gp.axes[0] != 0) {
    conx = gp.axes[0];
    } 
    if(gp.axes[1] != 0) {
    cony = gp.axes[1];
    }
	if (cony < -0.2) {
	if (pauseGame == 0) {
            moveUp();
			}
	}
	if (cony > 0.2) {
	if (pauseGame == 0) {
            moveDown();
			}
	}
	if (conx < -0.2) {
	if (pauseGame == 0) {
            moveLeft();
			}
	}
	if (conx > 0.2) {
	if (pauseGame == 0) {
            moveRight();
			}
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
  console.log("x: " + conx + " y: " + cony);
  }
}

function keyDownHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
    
	if (keyPressed == Up_2 && blockKeys == false && pauseGameKeys == false)
	{		
		if (pauseGame == 0) {
            moveUp();
			}
	}
	else if (keyPressed == Down_2 && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            moveDown();
			}		
	}
	else if (keyPressed == Left_2 && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            moveLeft();
			}		
	}
	else if (keyPressed == Right_2 && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            moveRight();

			}		
	}
	if (keyPressed == Esssc_2 && KeyZz2 == false && blockKeys == false && pauseGameKeys == false) 
	{
		backfunc();
		tip = Math.floor(Math.random() * tips);
	}
	if (keyPressed == Revive_2 && blockKeys == false && pauseGameKeys == false)
	{
		relive();
	}
	if (keyPressed == Mute_2 && blockKeys == false && pauseGameKeys == false)
	{
		mutemusic += 1;
	}
	if (keyPressed == Patch_2 && blockKeys == false && pauseGameKeys == false)
	{
		patchinfo();
	}
	if (keyPressed == shootUp_2 && KeyZz == false && blockKeys == false && pauseGameKeys == false)
	{		
		if (pauseGame == 0) {
            autoUp();
		  }
	}
	else if (keyPressed == shootDown_2 && KeyZz == false && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            autoDown();
		  }	
	}
	else if (keyPressed == shootLeft_2 && KeyZz == false && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            autoLeft();
		  }		
	}
	else if (keyPressed == shootRight_2 && KeyZz == false && blockKeys == false && pauseGameKeys == false)
	{	
		if (pauseGame == 0) {
            autoRight();
		  }		
	}
}

function keyUpHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
	
	if (keyPressed == Up_2)
	{		
		clearmoveu();
	}
	else if (keyPressed == Down_2)
	{	
		clearmoved();		
	}
	else if (keyPressed == Left_2)
	{	
		clearmovel();		
	}
	else if (keyPressed == Right_2)
	{	
		clearmover();		
	}
	if (keyPressed == Revive_2)
	{
		stopshow();
	}
	if (keyPressed == shootUp_2 && KeyZz == false)
	{		
		clearAutoU();
	}
	else if (keyPressed == shootDown_2 && KeyZz == false)
	{	
		clearAutoD();		
	}
	else if (keyPressed == shootLeft_2 && KeyZz == false)
	{	
		clearAutoL();		
	}
	else if (keyPressed == shootRight_2 && KeyZz == false)
	{	
		clearAutoR();		
	}
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
		if (KeyZz == true && blockKeys == false && pauseGameKeys == false) {
		if (pauseGame == 0) {
            autoLeft();
		  }
		}
            break;
        case 38:
		if (KeyZz == true && blockKeys == false && pauseGameKeys == false) {
		if (pauseGame == 0) {
            autoUp();
		  }
		}
            break;
        case 39:
		if (KeyZz == true && blockKeys == false && pauseGameKeys == false) {
		if (pauseGame == 0) {
            autoRight();
		  }
		}
            break;
        case 40:
		if (KeyZz == true && blockKeys == false && pauseGameKeys == false) {
		if (pauseGame == 0) {
            autoDown();
		  }
		}
            break;
		case 27:
		if (KeyZz2 == true && blockKeys == false && pauseGameKeys == false) {
		    backfunc();
			tip = Math.floor(Math.random() * tips);
		}
			break;
		case 83:
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    goBack = 1;
		}
			break;
	    case 49:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap1();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 0;
			playerHealthMax = 100;
		}
		if (upgrademenu == 1 && blockKeys == false && pauseGameKeys == false) {
		    upgrade1func();
		}
			break;
		case 50:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap2();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 1;
			playerHealthMax = 100; //add maxHealthMod//
		}
			break;
		case 51:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap3();
		}
		if (upgrademenu == 0 && christmasSkin == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 2;
			playerHealthMax = 100;
		}
			break;
		case 52:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap4();
		}
		if (upgrademenu == 0 && miniBossShip == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 3;
			playerHealthMax = 300;
		}
			break;
		case 53:
		if (upgrademenu == 0 && easyShipPrize == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 4;
			playerHealthMax = 200;
		}
			break;
		case 54:
		if (upgrademenu == 0 && STPRIZESHIP == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 5;
			playerHealthMax = 200;
		}
		    break;
			case 72:
		if (upgrademenu == 1 && blockKeys == false && pauseGameKeys == false) {
			healthRecovery();
		}
			break;
			case 65:
		if (upgrademenu == 1 && blockKeys == false && pauseGameKeys == false) {
			ammoRecovery();
		}
			break;
		case 97:
		if (upgrademenu == 1 && blockKeys == false && pauseGameKeys == false) {
		    upgrade1func();
		}
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap1();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 0;
			playerHealthMax = 100;
		}
		    break;
		case 98:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap2();
		}
		if (upgrademenu == 0 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 1;
			playerHealthMax = 100;
		}
			break;
		case 99:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap3();
		}
		if (upgrademenu == 0 && christmasSkin == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 2;
			playerHealthMax = 100;
		}
			break;
		case 100:
		if (upgrademenu == 0 && pauseGame == 0 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    swapweap4();
		}
		if (upgrademenu == 0 && miniBossShip == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 3;
			playerHealthMax = 300;
		}
			break;
		case 101:
		if (upgrademenu == 0 && easyShipPrize == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 4;
			playerHealthMax = 200;
		}
		    break;
		case 102:
		if (upgrademenu == 0 && STPRIZESHIP == 1 && pauseGame == 1 && specialalert1 == 0 && STPOPUP == 0 && weaponVault == 0 && blockKeys == false && pauseGameKeys == false) {
		    playerShip = 5;
			playerHealthMax = 200;
		}
		    break;
		case 16:
		specialWandS = 1;
		    break;
    }
};
document.onkeyup = function(e) {
    switch (e.keyCode) {
		case 37:
		if (KeyZz == true) {
            clearAutoL();
		}
            break;
        case 38:
		if (KeyZz == true) {
            clearAutoU();
		}
            break;
        case 39:
		if (KeyZz == true) {
            clearAutoR();
		}
            break;
        case 40:
		if (KeyZz == true) {
            clearAutoD();
		}
            break;
		case 16:
		specialWandS = 0;
		    break;
    }
};
var openpatchinfo = 0;
function patchinfo() { 
openpatchinfo += 1;
if (openpatchinfo > 1) {
openpatchinfo = 0;
 }
}
var tip = 0;
var tips = 8;
function TipsText() {
if (tip == 0) {
TipsTxt.text = "Tip: Play in December..."
TipsTxt.font = "16px Consolas";
}
if (tip == 1) {
TipsTxt.text = "Tip: Die and get something special..."
TipsTxt.font = "14px Consolas";
}
if (tip == 2) {
TipsTxt.text = "Tip: Beat wave 7 boss..."
TipsTxt.font = "16px Consolas";
}
if (tip == 3) {
TipsTxt.text = "Tip: Watch your health..."
TipsTxt.font = "16px Consolas";
}
if (tip == 4) {
TipsTxt.text = "Tip: Watch your ammo..."
TipsTxt.font = "16px Consolas";
 }
if (tip == 5) {
TipsTxt.text = "Tip: Don't let them surround you..."
TipsTxt.font = "14px Consolas";
 }
if (tip == 6) {
TipsTxt.text = "Tip: Play in March and join the St. Patty's Day event..."
TipsTxt.font = "9px Consolas";
 }
if (tip == 7) {
TipsTxt.text = "Tip: Beat the St. Patty's Day event boss on hard..."
TipsTxt.font = "10px Consolas";
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
if (weapon == 0) {
 weapname = "Pistol";
 PlayerDamageDeal = 20;
 WeaponCoolDown = 30;
 bullrange = 3;
 ammocon = 1;
}
if (weapon == 1) {
if (weaponupgrade1 > 0) {
 weapname = "Hi-Beam";
 PlayerDamageDeal = 25;
 WeaponCoolDown = 20;
 bullrange = 2;
 ammocon = 1;
 }
}
if (weapon == 2) {
if (weaponupgrade1 > 1) {
 weapname = "Zapper";
 PlayerDamageDeal = 35;
 WeaponCoolDown = 20;
 bullrange = 4;
 ammocon = 1;
 }
}
if (weapon == 3) {
if (stcweapon == 1) {
if (stcget == 1) {
 weapname = "Cube";
 PlayerDamageDeal = 45;
 WeaponCoolDown = 25;
 bullrange = 1;
 ammocon = 0.5;
  }
 }
}
if (weapon == 4) {
if (STPRIZEWEAPON == 1) {
 weapname = "Lucky";
 PlayerDamageDeal = 40;
 WeaponCoolDown = 20;
 bullrange = 3;
 ammocon = 1;
 }
}
obo = new component(100, 80, "black", 350, 430, "rec"); 
obo2 = new component(63, 80, "black", 438, 447, "rec");
oba = new component(90, 80, "#63218a", 355, 435, "rec");
oba2 = new component(60, 60, "#63218a", 435, 452, "rec");
bam = new component(83, 15, "#812bb3", 358, 438, "rec");
bwa = new component(83, 15, "#812bb3", 358, 477, "rec");
ammotxt = new component("30px", "Consolas", "orange", 360, 450, "text");
ammotxt.font="18px Consolas";
ammotxt.text="Ammo:" + Math.floor(ammo);
weaptxt = new component("30px", "Consolas", "black", 358, 470, "text");
weaptxt.font="12px Consolas bold";
weaptxt.text="Weapon:" + weapname;
wavetxt = new component("30px", "Consolas", "lightgray", 360, 490, "text");
wavetxt.font="18px Consolas";
wavetxt.text="Wave:" + wave;
if (endless == 0 && wave == 9000) {
wavetxt.font="14px Consolas";
wavetxt.text="Wave:Ryan";
}
if (endless == 0 && wave == 8000) {
wavetxt.font="13px Consolas";
wavetxt.text="Wave:Clover";
}
UnmutedP = new component(50, 50, "UnmutedPic", 446, 450, "img");
MutedP = new component(50, 50, "MutedPic", 446, 450, "img");
obo.update();
obo2.update();
oba.update();
oba2.update();
bam.update();
bwa.update();
ammotxt.update();
weaptxt.update();
wavetxt.update();
if (mutemusic == 0) {
UnmutedP.update();
}
if (mutemusic == 1) {
MutedP.update();
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
var cratespawn2 = 0
var chanceofdrop = 3;
var chanceofdrop2 = 3;
var chanceofdrop3 = 2;
var chanceofdrop4 = 2.5;
var chanceofdrop5 = 2;
var resetcrate = 0;
function countwave() {
if (wave > 4 && wave < 8) {
if (resetcrate == 0) {
 crate1X = 90;
 crate1Y = 90;
 crateh1X = 250;
 crateh1Y = 40;
 resetcrate = 1;
 }
}

if (menu > 0) {
if (wave < 5) {
if (BadDeath < 1) {
countSwitch1 = 0;
 }
}
if (BadDeath > 0) {
if (badguy1.crashWith(badwavebox1)) {
if (upgrademenu == 0) {
if (Math.floor(Math.random() * chanceofdrop) == 1) {
if (cratespawn2 == 0) {
if (playerHealth < playerHealthMax) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop) == 1) {
if (cratespawn == 0) {
if (ammo < maxAmmo) {
cratespawn += 1;
spawncrate1pos = Math.floor(Math.random() * 2);
   }
  }
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
if (wave < 5) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (countSwitch1 == 0) {
money += moneyperendie;
if (wave < 3) {
moneyperendie = Math.floor(Math.random() * 2) + 1;
}
if (wave >= 3 && wave < 5) {
moneyperendie = Math.floor(Math.random() * 3) + 2;
}
count += 1;
countSwitch1 = 1;
console.log("Count: " + count);
       }
      }
     }
	}
   }
  }
 }
if (wave < 7 && wave > 1) {
if (BadDeath2 < 1) {
if (badguy2.crashWith(badwavebox2)) {
spawnbad2pos = Math.floor(Math.random() * 2);
countSwitch2 = 0;
 }
}
if (BadDeath2 > 0) {
if (menu > 0) {
if (badguy2.crashWith(badwavebox2)) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (countSwitch2 == 0) {
money += moneyperendie2;
if (wave < 6) {
moneyperendie2 = Math.floor(Math.random() * 5) + 2;
}
if (wave == 6) {
moneyperendie2 = Math.floor(Math.random() * 6) + 5;
}
count += 1;
countSwitch2 = 1;
console.log("Count: " + count);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop2) == 1) {
if (cratespawn2 == 0) {
if (playerHealth < playerHealthMax) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop2) == 1) {
if (cratespawn == 0) {
if (ammo < maxAmmo) {
cratespawn += 1;
spawncrate1pos = Math.floor(Math.random() * 2);
  }
 }
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
bad2posX = 50; //goherespawn//
bad2posY = 450;
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
  }
 }
if (cratespawn2 == 0) {
if (wave < 5) {
if (spawncrate2pos == 1) {
 crateh1X = 520;
 crateh1Y = 110;
 }
if (spawncrate2pos == 0) {
 crateh1X = 399;
 crateh1Y = 184.5;
   }
  }
}
if (cratespawn == 0) {
if (wave > 4 && wave < 7) {
if (spawncrate1pos == 1) {
 crate1X = 90;
 crate1Y = 90;
 }
if (spawncrate1pos == 0) {
 crate1X = 500;
 crate1Y = 270;
   }
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
  }
}
    }
   }
  }
 }
if (wave < 5 && wave > 2) {
if (BadDeath4 < 1) {
countSwitch3 = 0;
}
if (BadDeath4 > 0) {
if (recbox1.crashWith(recwavebox1)) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (countSwitch3 == 0) {
money += moneyperendie4;
count += 1;
if (wave < 4) {
Math.floor(Math.random() * 6) + 3;
}
if (wave == 4) {
moneyperendie4 = Math.floor(Math.random() * 4) + 7;
}
countSwitch3 = 1;
console.log("Count: " + count);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop4) == 1) {
if (cratespawn2 == 0) {
if (playerHealth < playerHealthMax) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop4) == 1) {
if (cratespawn == 0) {
if (ammo < maxAmmo) {
cratespawn += 1;
spawncrate1pos = Math.floor(Math.random() * 2);
  }
 }
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
 }
if (wave > 4 && wave < 7) {
if (BadDeath3 < 1) {
if (tribox.crashWith(triwavebox1)) {
spawnbad3pos = Math.floor(Math.random() * 2);
countSwitch4 = 0;
 }
}
if (BadDeath3 > 0) {
if (tribox.crashWith(triwavebox1)) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (countSwitch4 == 0) {
money += moneyperendie3;
count += 1;
if (wave < 6) {
moneyperendie3 = Math.floor(Math.random() * 8) + 3;
}
if (wave == 6) {
moneyperendie3 = Math.floor(Math.random() * 4) + 12;
}
countSwitch4 = 1;
console.log("Count: " + count);
  }
 }
}
if (wave > 4 && wave < 7) {
if (Math.floor(Math.random() * chanceofdrop3) == 1) {
if (cratespawn2 == 0) {
if (playerHealth < playerHealthMax) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 } 
}
if (Math.floor(Math.random() * chanceofdrop3) == 1) {
if (cratespawn == 0) {
if (ammo < maxAmmo) {
cratespawn += 1;
spawncrate1pos = Math.floor(Math.random() * 2);
   }
  }
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
 }
if (spawncrate1pos == 0) {
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
 }
 
if (wave > 5 && wave < 7) {
if (BadDeath5 < 1) {
if (xbox1.crashWith(xwavebox1)) {
spawnbad4pos = Math.floor(Math.random() * 2);
countSwitch5 = 0;
 }
}
if (BadDeath5 > 0) {
if (xbox1.crashWith(xwavebox1)) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (countSwitch5 == 0) {
money += moneyperendie5;
count += 1;
if (wave == 6) {
moneyperendie5 = Math.floor(Math.random() * 4) + 12;
}
countSwitch5 = 1;
console.log("Count: " + count);
  }
 }
}
if (wave > 5 && wave < 7) {
if (Math.floor(Math.random() * chanceofdrop5) == 1) {
if (cratespawn2 == 0) {
if (playerHealth < playerHealthMax) {
cratespawn2 += 1;
spawncrate5pos = Math.floor(Math.random() * 2);
  }
 } 
}
if (Math.floor(Math.random() * chanceofdrop5) == 1) {
if (cratespawn == 0) {
if (ammo < maxAmmo) {
cratespawn += 1;
spawncrate5pos = Math.floor(Math.random() * 2);
   }
  }
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
 }
if (spawncrate1pos == 0) {
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
 if (wave == 3) {
numofbad = 15;
moneyperendie = Math.floor(Math.random() * 3) + 2;
  }
 if (wave == 4) {
revivecost = 150;
moneyperendie4 = Math.floor(Math.random() * 4) + 7;
  }
 if (wave == 5) {
numofbad = 20;
  }
 if (wave == 6) {
revivecost = 200;
moneyperendie2 = Math.floor(Math.random() * 6) + 5;
moneyperendie3 = Math.floor(Math.random() * 4) + 12;
  }
 }
}
var BadDeath = 1;
var Badhealth1 = 0;
var PlayerDamageDeal = 20;
var Bad1DamageDeal = 0.1;
function badboxspawn() {
if (difficulty == 0) {
	Bad1DamageDeal = 0.1;
}
if (difficulty == 1) {
	Bad1DamageDeal = 0.2;
}
if (difficulty == 2) {
	Bad1DamageDeal = 0.5;
}
if (wave < 5) {
if (bullbox.crashWith(badguy1)) {
if (Badhealth1 >= 0) {
if (fire > 0) {
Badhealth1 -= PlayerDamageDeal;
fire = 0;
  }
 }
}
if (Badhealth1 >= 0) {
BadDeath = 0;
 }
if (Badhealth1 <= 0) {
BadDeath = 1;
 }
if (Badhealth1 < 0) {
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
	if (badguy1.crashWith(wallright) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse3) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse2_2) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse7) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wall2house3) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wall2house2_2) == false) {
	  touchwallrightbad1 = 0;
	}
	if (badguy1.crashWith(wall2house7) == false) {
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
	if (badguy1.crashWith(wallleft) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse3_2) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse2) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse5) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wall2house3_2) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wall2house2) == false) {
	  touchwallleftbad1 = 0;
	}
	if (badguy1.crashWith(wall2house5) == false) {
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
	if (insidehouse1 == 0) {
	if (badguy1.crashWith(wallhouse8)) {
		touchwalldownbad1 = 1;
		if (touchwalldownbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
		}
	 }
	}
	if (inside2house1 == 0) {
	if (badguy1.crashWith(wall2house8)) {
		touchwalldownbad1 = 1;
		if (touchwalldownbad1 == 1) {
			badguypic1.speedY = 1;
			badguy1.speedY = 1;
		}
	 }
	}
	if (badguy1.crashWith(wall3) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse1) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse4_2) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse6_2) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wall2house1) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wall2house4_2) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wall2house6_2) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse8) == false) {
	  touchwallupbad1 = 0;
	}
	if (badguy1.crashWith(wall2house8) == false) {
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
	if (badguy1.crashWith(wall4) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse1_2) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse4) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wallhouse6) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wall2house1_2) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wall2house4) == false) {
	  touchwalldownbad1 = 0;
	}
	if (badguy1.crashWith(wall2house6) == false) {
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
	if (badguy2.crashWith(wallright) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wallleft)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 1;
			badguy2.speedX = 1;
		}
	}
	if (badguy2.crashWith(wallleft) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall3)) {
		touchwallupbad2 = 1;
		if (touchwallupbad1 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
	if (badguy2.crashWith(wall3) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall4)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall4) == false) {
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
	if (badguy2.crashWith(wallhouse3) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse2_2) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse7) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wall2house3) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wall2house2_2) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wall2house7) == false) {
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
	if (badguy2.crashWith(wallhouse3_2) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse2) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse5) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall2house3_2) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall2house2) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall2house5) == false) {
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
	if (insidehouse1 == 0) {
	if (badguy2.crashWith(wallhouse8)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	 }
	}
	if (inside2house1 == 0) {
	if (badguy2.crashWith(wall2house8)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	 }
	}
	if (badguy2.crashWith(wallhouse1) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse4_2) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse6_2) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall2house1) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall2house4_2) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall2house6_2) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wallhouse8) == false) {
	  touchwallupbad2 = 0;
        }
	if (badguy2.crashWith(wall2house8) == false) {
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
	if (badguy2.crashWith(wallhouse1_2) == false) {
	  touchwalldownbad2 = 0;
	  }
	if (badguy2.crashWith(wallhouse4) == false) {
	  touchwalldownbad2 = 0;
	  }
	if (badguy2.crashWith(wallhouse6) == false) {
	  touchwalldownbad2 = 0;
	  }
	  if (badguy2.crashWith(wall2house1_2) == false) {
	  touchwalldownbad2 = 0;
	  }
	if (badguy2.crashWith(wall2house4) == false) {
	  touchwalldownbad2 = 0;
	  }
	if (badguy2.crashWith(wall2house6) == false) {
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
	if (badguy2.crashWith(wall3house1) == false) {
	  touchwalldownbad2 = 0;
	}
	if (badguy2.crashWith(wall3house1_2)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
	if (badguy2.crashWith(wall3house1_2) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall3house2)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -1;
			badguy2.speedX = -1;
		}
	}
	if (badguy2.crashWith(wall3house2) == false) {
	  touchwallrightbad2 = 0;
	}
	if (badguy2.crashWith(wall3house2_2)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 1;
			badguy2.speedX = 1;
		}
	}
	if (badguy2.crashWith(wall3house2_2) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall3house3)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 1;
			badguy2.speedX = 1;
		}
	}
	if (badguy2.crashWith(wall3house3) == false) {
	  touchwallleftbad2 = 0;
	}
	if (badguy2.crashWith(wall3house3_2)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -1;
			badguy2.speedX = -1;
		}
	}
	if (badguy2.crashWith(wall3house3_2) == false) {
	  touchwallrightbad2 = 0;
	}
    if (badguy2.crashWith(wall3house4)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
	if (badguy2.crashWith(wall3house4) == false) {
	  touchwallupbad2 = 0;
	}
	if (badguy2.crashWith(wall3house4_2)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall3house4_2) == false) {
	  touchwalldownbad2 = 0;
	}
	if (badguy2.crashWith(wall3house4_3)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 2;
			badguy2.speedX = 2;
		}
	}
	if (badguy2.crashWith(wall3house4_3) == false) {
	  touchwallleftbad2 = 0;
	}
    if (badguy2.crashWith(wall3house5)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
	if (badguy2.crashWith(wall3house5) == false) {
	  touchwallupbad2 = 0;
	}
    if (badguy2.crashWith(wall3house5_2)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall3house5_2) == false) {
	  touchwalldownbad2 = 0;
	}
    if (badguy2.crashWith(wall3house5_3)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -2;
			badguy2.speedX = -2;
		}
	}
	if (badguy2.crashWith(wall3house5_3) == false) {
	  touchwallrightbad2 = 0;
	}
    if (inside3house1 == 0) {
	if (badguy2.crashWith(wall3house6)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	 }
	}
    if (badguy2.crashWith(wall4house1)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
    if (badguy2.crashWith(wall4house1) == false) {
	  touchwallupbad2 = 0;
	}
    if (badguy2.crashWith(wall4house1_1)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall4house1_1) == false) {
	  touchwalldownbad2 = 0;
	}
    if (badguy2.crashWith(wall4house2)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -2;
			badguy2.speedX = -2;
		}
	}
	if (badguy2.crashWith(wall4house2) == false) {
	  touchwallrightbad2 = 0;
	}
    if (badguy2.crashWith(wall4house2_1)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 2;
			badguy2.speedX = 2;
		}
	}
	if (badguy2.crashWith(wall4house2_1) == false) {
	  touchwallleftbad2 = 0;
	}
    if (badguy2.crashWith(wall4house3)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 2;
			badguy2.speedX = 2;
		}
	}
	if (badguy2.crashWith(wall4house3) == false) {
	  touchwallleftbad2 = 0;
	}
    if (badguy2.crashWith(wall4house3_1)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -2;
			badguy2.speedX = -2;
		}
	}
	if (badguy2.crashWith(wall4house3_1) == false) {
	  touchwallrightbad2 = 0;
	}
    if (badguy2.crashWith(wall4house4)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall4house4) == false) {
	  touchwalldownbad2 = 0;
	}
    if (badguy2.crashWith(wall4house4_1)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
    if (badguy2.crashWith(wall4house4_1) == false) {
	  touchwallupbad2 = 0;
	}
    if (badguy2.crashWith(wall4house4_2)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 2;
			badguy2.speedX = 2;
		}
	}
	if (badguy2.crashWith(wall4house4_2) == false) {
	  touchwallleftbad2 = 0;
	}
    if (badguy2.crashWith(wall4house5)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall4house5) == false) {
	  touchwalldownbad2 = 0;
	}
    if (badguy2.crashWith(wall4house5_1)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
    if (badguy2.crashWith(wall4house5_1) == false) {
	  touchwallupbad2 = 0;
	}
    if (badguy2.crashWith(wall4house5_2)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -2;
			badguy2.speedX = -2;
		}
	}
	if (badguy2.crashWith(wall4house5_2) == false) {
	  touchwallrightbad2 = 0;
	}
    if (badguy2.crashWith(wall4house6)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	}
	if (badguy2.crashWith(wall4house6) == false) {
	  touchwalldownbad2 = 0;
	}
    if (badguy2.crashWith(wall4house6_1)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			badguypic2.speedY = 1;
			badguy2.speedY = 1;
		}
	}
    if (badguy2.crashWith(wall4house6_1) == false) {
	  touchwallupbad2 = 0;
	}
    if (badguy2.crashWith(wall4house6_2)) {
		touchwallrightbad2 = 1;
		if (touchwallrightbad2 == 1) {
			badguypic2.speedX = -2;
			badguy2.speedX = -2;
		}
	}
	if (badguy2.crashWith(wall4house6_2) == false) {
	  touchwallrightbad2 = 0;
	}
    if (badguy2.crashWith(wall4house6_3)) {
		touchwallleftbad2 = 1;
		if (touchwallleftbad2 == 1) {
			badguypic2.speedX = 2;
			badguy2.speedX = 2;
		}
	}
	if (badguy2.crashWith(wall4house6_3) == false) {
	  touchwallleftbad2 = 0;
	}
    if (inside4house1 == 0) {
	if (badguy2.crashWith(wall4house7)) {
		touchwalldownbad2 = 1;
		if (touchwalldownbad2 == 1) {
			badguypic2.speedY = -1;
			badguy2.speedY = -1;
		}
	 }	
	}	//gohere//
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
	if (tribox.crashWith(wallright) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wallleft)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
		    tribox.speedX = 1;
			trienemypic.speedX = 1;
		}
	}
	if (tribox.crashWith(wallleft) == false) {
	  touchwallleftbad3 = 0;
	}
	if (tribox.crashWith(wall3)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
		    tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall4)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
		    tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house1)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house1) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house1_2)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house1_2) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall3house2)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house2) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wall3house2_2)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house2_2) == false) {
	  touchwallleftbad3 = 0;
	}
	if (tribox.crashWith(wall3house3)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house3) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wall3house3_2)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house3_2) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall3house4)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house4) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall3house4_2)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house4_2) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house4_3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemypic.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house4_3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall3house5)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house5) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall3house5_2)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house5_2) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall3house5_3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemypic.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house5_3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (inside3house1 == 0) {
	if (tribox.crashWith(wall3house6)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	 }
	}
    if (tribox.crashWith(wall4house1)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
    if (tribox.crashWith(wall4house1) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall4house1_1)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4house1_1) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall4house2)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
		}
	}
	if (tribox.crashWith(wall4house2) == false) {
	  touchwallrightbad3 = 0;
	}
    if (tribox.crashWith(wall4house2_1)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
		}
	}
	if (tribox.crashWith(wall4house2_1) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall4house3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
		}
	}
	if (tribox.crashWith(wall4house3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall4house3_1)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
		}
	}
	if (tribox.crashWith(wall4house3_1) == false) {
	  touchwallrightbad3 = 0;
	}
    if (tribox.crashWith(wall4house4)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4house4) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall4house4_1)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
    if (tribox.crashWith(wall4house4_1) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall4house4_2)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
		}
	}
	if (tribox.crashWith(wall4house4_2) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall4house5)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4house5) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall4house5_1)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
    if (tribox.crashWith(wall4house5_1) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall4house5_2)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
		}
	}
	if (tribox.crashWith(wall4house5_2) == false) {
	  touchwallrightbad3 = 0;
	}
    if (tribox.crashWith(wall4house6)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;

			trienemypic.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4house6) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall4house6_1)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemypic.speedY = 1;
		}
	}
    if (tribox.crashWith(wall4house6_1) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall4house6_2)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -2;
			trienemypic.speedX = -2;
		}
	}
	if (tribox.crashWith(wall4house6_2) == false) {
	  touchwallrightbad3 = 0;
	}
    if (tribox.crashWith(wall4house6_3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 2;
			trienemypic.speedX = 2;
		}
	}
	if (tribox.crashWith(wall4house6_3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (inside4house1 == 0) {
	if (tribox.crashWith(wall4house7)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemypic.speedY = -1;
		}
	 }	
	}	//gohere2//
  }
  if (BadDeath5 < 1) {
	if (xbox1.crashWith(wallright)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
		    xbox1.speedX = -1;
			xenemypic1.speedX = -1;
		}
	}
	if (xbox1.crashWith(wallright) == false) {
	  touchwallrightbad5 = 0;
	}
	if (xbox1.crashWith(wallleft)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
		    xbox1.speedX = 1;
			xenemypic1.speedX = 1;
		}
	}
	if (xbox1.crashWith(wallleft) == false) {
	  touchwallleftbad5 = 0;
	}
	if (xbox1.crashWith(wall3)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
		    xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
	if (xbox1.crashWith(wall3) == false) {
	  touchwallupbad5 = 0;
	}
	if (xbox1.crashWith(wall4)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
		    xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall4) == false) {
	  touchwalldownbad5 = 0;
	}
	if (xbox1.crashWith(wall3house1)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall3house1) == false) {
	  touchwalldownbad5 = 0;
	}
	if (xbox1.crashWith(wall3house1_2)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
	if (xbox1.crashWith(wall3house1_2) == false) {
	  touchwallupbad5 = 0;
	}
	if (xbox1.crashWith(wall3house2)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
		}
	}
	if (xbox1.crashWith(wall3house2) == false) {
	  touchwallrightbad5 = 0;
	}
	if (xbox1.crashWith(wall3house2_2)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
		}
	}
	if (xbox1.crashWith(wall3house2_2) == false) {
	  touchwallleftbad5 = 0;
	}
	if (xbox1.crashWith(wall3house3)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
		}
	}
	if (xbox1.crashWith(wall3house3) == false) {
	  touchwallrightbad5 = 0;
	}
	if (xbox1.crashWith(wall3house3_2)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
		}
	}
	if (xbox1.crashWith(wall3house3_2) == false) {
	  touchwallleftbad5 = 0;
	}
    if (xbox1.crashWith(wall3house4)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
	if (xbox1.crashWith(wall3house4) == false) {
	  touchwallupbad5 = 0;
	}
	if (xbox1.crashWith(wall3house4_2)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall3house4_2) == false) {
	  touchwalldownbad5 = 0;
	}
	if (xbox1.crashWith(wall3house4_3)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 1;
			xenemypic1.speedX = 1;
		}
	}
	if (xbox1.crashWith(wall3house4_3) == false) {
	  touchwallleftbad5 = 0;
	}
    if (xbox1.crashWith(wall3house5)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
	if (xbox1.crashWith(wall3house5) == false) {
	  touchwallupbad5 = 0;
	}
    if (xbox1.crashWith(wall3house5_2)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall3house5_2) == false) {
	  touchwalldownbad5 = 0;
	}
    if (xbox1.crashWith(wall3house5_3)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = -1;
			xenemypic1.speedX = -1;
		}
	}
	if (xbox1.crashWith(wall3house5_3) == false) {
	  touchwallleftbad5 = 0;
	}
    if (inside3house1 == 0) {
	if (xbox1.crashWith(wall3house6)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	 }
	}
    if (xbox1.crashWith(wall4house1)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
    if (xbox1.crashWith(wall4house1) == false) {
	  touchwallupbad5 = 0;
	}
    if (xbox1.crashWith(wall4house1_1)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall4house1_1) == false) {
	  touchwalldownbad5 = 0;
	}
    if (xbox1.crashWith(wall4house2)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
		}
	}
	if (xbox1.crashWith(wall4house2) == false) {
	  touchwallrightbad5 = 0;
	}
    if (xbox1.crashWith(wall4house2_1)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
		}
	}
	if (xbox1.crashWith(wall4house2_1) == false) {
	  touchwallleftbad5 = 0;
	}
    if (xbox1.crashWith(wall4house3)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
		}
	}
	if (xbox1.crashWith(wall4house3) == false) {
	  touchwallleftbad5 = 0;
	}
    if (xbox1.crashWith(wall4house3_1)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
		}
	}
	if (xbox1.crashWith(wall4house3_1) == false) {
	  touchwallrightbad5 = 0;
	}
    if (xbox1.crashWith(wall4house4)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall4house4) == false) {
	  touchwalldownbad5 = 0;
	}
    if (xbox1.crashWith(wall4house4_1)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
    if (xbox1.crashWith(wall4house4_1) == false) {
	  touchwallupbad5 = 0;
	}
    if (xbox1.crashWith(wall4house4_2)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
		}
	}
	if (xbox1.crashWith(wall4house4_2) == false) {
	  touchwallleftbad5 = 0;
	}
    if (xbox1.crashWith(wall4house5)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall4house5) == false) {
	  touchwalldownbad5 = 0;
	}
    if (xbox1.crashWith(wall4house5_1)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
    if (xbox1.crashWith(wall4house5_1) == false) {
	  touchwallupbad5 = 0;
	}
    if (xbox1.crashWith(wall4house5_2)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
		}
	}
	if (xbox1.crashWith(wall4house5_2) == false) {
	  touchwallrightbad5 = 0;
	}
    if (xbox1.crashWith(wall4house6)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
	}
	if (xbox1.crashWith(wall4house6) == false) {
	  touchwalldownbad5 = 0;
	}
    if (xbox1.crashWith(wall4house6_1)) {
		touchwallupbad5 = 1;
		if (touchwallupbad5 == 1) {
			xbox1.speedY = 1;
			xenemypic1.speedY = 1;
		}
	}
    if (xbox1.crashWith(wall4house6_1) == false) {
	  touchwallupbad5 = 0;
	}
    if (xbox1.crashWith(wall4house6_2)) {
		touchwallrightbad5 = 1;
		if (touchwallrightbad5 == 1) {
			xbox1.speedX = -2;
			xenemypic1.speedX = -2;
		}
	}
	if (xbox1.crashWith(wall4house6_2) == false) {
	  touchwallrightbad5 = 0;
	}
    if (xbox1.crashWith(wall4house6_3)) {
		touchwallleftbad5 = 1;
		if (touchwallleftbad5 == 1) {
			xbox1.speedX = 2;
			xenemypic1.speedX = 2;
		}
	}
	if (xbox1.crashWith(wall4house6_3) == false) {
	  touchwallleftbad5 = 0;
	}
    if (inside4house1 == 0) {
	if (xbox1.crashWith(wall4house7)) {
		touchwalldownbad5 = 1;
		if (touchwalldownbad5 == 1) {
			xbox1.speedY = -1;
			xenemypic1.speedY = -1;
		}
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
	if (recbox1.crashWith(wallright) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wallleft)) {
		touchwallleftbad4 = 1;
		if (touchwallleftbad4 == 1) {
			recenemypic1.speedX = 1;
			recbox1.speedX = 1;
		}
	}
	if (recbox1.crashWith(wallleft) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wall3)) {
		touchwallupbad4 = 1;
		if (touchwallupbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
		}
	}
	if (recbox1.crashWith(wall3) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wall4)) {
		touchwalldownbad4 = 1;
		if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = -1;
			recbox1.speedY = -1;
		}
	}
	if (recbox1.crashWith(wall4) == false) {
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
	if (recbox1.crashWith(wallhouse3) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse2_2) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse7) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wall2house3) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wall2house2_2) == false) {
	  touchwallrightbad4 = 0;
	}
	if (recbox1.crashWith(wall2house7) == false) {
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
	if (recbox1.crashWith(wallhouse3_2) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse2) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse5) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wall2house3_2) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wall2house2) == false) {
	  touchwallleftbad4 = 0;
	}
	if (recbox1.crashWith(wall2house5) == false) {
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
	if (recbox1.crashWith(wallhouse1) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse4_2) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wallhouse6_2) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wall2house1) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wall2house4_2) == false) {
	  touchwallupbad4 = 0;
	}
	if (recbox1.crashWith(wall2house6_2) == false) {
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
	if (recbox1.crashWith(wallhouse1_2) == false) {
	  touchwalldownbad4 = 0;
	  }
	if (recbox1.crashWith(wallhouse4) == false) {
	  touchwalldownbad4 = 0;
	  }
	if (recbox1.crashWith(wallhouse6) == false) {
	  touchwalldownbad4 = 0;
	  }
	  if (recbox1.crashWith(wall2house1_2) == false) {
	  touchwalldownbad4 = 0;
	  }
	if (recbox1.crashWith(wall2house4) == false) {
	  touchwalldownbad4 = 0;
	  }
	if (recbox1.crashWith(wall2house6) == false) {
	  touchwalldownbad4 = 0;
	  }
	 }
	if (insidehouse1 == 0) {
	if (recbox1.crashWith(wallhouse8)) {
		touchwalldownbad4 = 1;
		if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
		}
	 }
	}
	if (inside2house1 == 0) {
	if (recbox1.crashWith(wall2house8)) {
		touchwalldownbad4 = 1;
		if (touchwalldownbad4 == 1) {
			recenemypic1.speedY = 1;
			recbox1.speedY = 1;
		}
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
if (difficulty == 0) {
	GuardDamage = 0.2;
	BossDamageDue = 5;
}
if (difficulty == 1) {
	GuardDamage = 0.3;
	BossDamageDue = 6;
}
if (difficulty == 2) {
	GuardDamage = 0.5;
	BossDamageDue = 8;
}
guardianPic.x = guardianBox.x;
guardianPic.y = guardianBox.y;
guardianhealthbar.x = guardianBox.x - 12;
guardianhealthbar.y = guardianBox.y - 8;
guardianhealthbar.width = GuardHealth/2;
if (GuardDead == false && pauseGame == 0 && wave == 7 && GuardStart == 1 && Death1 == 0) {
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
if (guardianBox.crashWith(detectbox)) {
guardianPic.angle += 8 * Math.PI / 180;
} else {
guardianPic.angle += 5 * Math.PI / 180;	
}
if (guardianBox.crashWith(box) && GuardDead == false && wave == 7 && pauseGame == 0 && Death1 == 0) {
playerHealth -= GuardDamage;
}
if (GuardStart == 1 && guardianBox.crashWith(bullbox) && wave == 7 && GuardHealth > 0 && GuardDead == false && fire > 0 && Death1 == 0) {
GuardHealth -= PlayerDamageDeal;
}
if (bossSheildMode == 1) {
GuardStart = 1;
stopGuardSpawn = 0;
}
if (GuardSwitch == 0 && GuardDead == false) {
guardianBox.y = bossWave7.y + 10;
guardianBox.x = bossWave7.x + 10;
GuardSwitch = 1;
}
if (frameIndex_1 != 4) {
stopGuardSpawn = 1;
}
if (GuardDead == true && stopGuardSpawn == 0) {
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
guardianPic.angle = 0;
}
if (GuardHealth >= 1) {
GuardDead = false;
}
if (wave != 7 || BossDead == true) {
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
if (bossSheildMode == 1) {
bossHealthBarColor = "lightblue";
}
if (BossHealth > 750 && bossSheildMode == 0) {
bossHealthBarColor = "green";
}
if (BossHealth <= 750 && bossSheildMode == 0) {
bossHealthBarColor = "yellow";
}
if (BossHealth <= 500 && bossSheildMode == 0) {
bossHealthBarColor = "orange";
}
if (BossHealth <= 250 && bossSheildMode == 0) {
bossHealthBarColor = "red";
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
if (switchBoss7 == 0 && BossDead == true) {
wave = 8;
miniBossShip = 1;
localStorage && (localStorage.Ms = miniBossShip);
switchBoss7 = 1;
money += 200;
}
if (ExplosionCycle == 0) {
Explosion.color = "EXFrame1";
}	
if (ExplosionCycle == 1) {
Explosion.color = "EXFrame2";
if (upgrademenu == 0 && wave == 7 && count != 10 && menu > 0 && pauseGame == 0 && spawnBoss7 == 0 && MusicOnOff == true) {
document.getElementById('explosion').play();
 }
}
if (ExplosionCycle == 2) {
Explosion.color = "EXFrame3";
}
if (ExplosionCycle == 3) {
Explosion.color = "EXFrame4";
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
		var __bossBullet = new component(15, 15, "Boss7Bull", bossWave7.getMidX(), bossWave7.getMidY(), "img");
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
	if (frameIndex_1 == 0) {
	if (bossWave7.x > Boss7_Pos2_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = -1;
	 }
	}
	if (bossWave7.x < Boss7_Pos2_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = 1;
	 }
	}
	if (bossWave7.x == Boss7_Pos2_X) {
		bossWave7.speedX = 0;
	}
	if (bossWave7.y > Boss7_Pos2_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = -1;
	 }
	}
	if (bossWave7.y < Boss7_Pos2_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = 1;
	 }
	}
	if (bossWave7.y == Boss7_Pos2_Y) {
		bossWave7.speedY = 0;
	 }
	}
	if (frameIndex_1 == 1) {
	if (bossWave7.x > Boss7_Pos3_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = -1;
	 }
	}
	if (bossWave7.x < Boss7_Pos3_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = 1;
	 }
	}
	if (bossWave7.x == Boss7_Pos3_X) {
		bossWave7.speedX = 0;
	}
	if (bossWave7.y > Boss7_Pos3_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = -1;
	 }
	}
	if (bossWave7.y < Boss7_Pos3_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = 1;
	 }
	}
	if (bossWave7.y == Boss7_Pos3_Y) {
		bossWave7.speedY = 0;
	 }
	} 
	if (frameIndex_1 == 2) {
	if (bossWave7.x > Boss7_Pos4_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = -1;
	 }
	}
	if (bossWave7.x < Boss7_Pos4_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = 1;
	 }
	}
	if (bossWave7.x == Boss7_Pos4_X) {
		bossWave7.speedX = 0;
	}
	if (bossWave7.y > Boss7_Pos4_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = -1;
	 }
	}
	if (bossWave7.y < Boss7_Pos4_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = 1;
	 }
	}
	if (bossWave7.y == Boss7_Pos4_Y) {
		bossWave7.speedY = 0;
	 }
	} 
	if (frameIndex_1 == 3) {
	if (bossWave7.x > Boss7_Pos5_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = -1;
	 }
	}
	if (bossWave7.x < Boss7_Pos5_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = 1;
	 }
	}
	if (bossWave7.x == Boss7_Pos5_X) {
		bossWave7.speedX = 0;
	}
	if (bossWave7.y > Boss7_Pos5_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = -1;
	 }
	}
	if (bossWave7.y < Boss7_Pos5_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = 1;
	 }
	}
	if (bossWave7.y == Boss7_Pos5_Y) {
		bossWave7.speedY = 0;
	 }
	} 
	if (frameIndex_1 == 4) {
	if (bossWave7.x > Boss7_Start_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = -1;
	 }
	}
	if (bossWave7.x < Boss7_Start_X) {
	if (startTime_1 == 0) {
		bossWave7.speedX = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedX = 1;
	 }
	}
	if (bossWave7.x == Boss7_Start_X) {
		bossWave7.speedX = 0;
	}
	if (bossWave7.y > Boss7_Start_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = -2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = -1;
	 }
	}
	if (bossWave7.y < Boss7_Start_Y) {
	if (startTime_1 == 0) {
		bossWave7.speedY = 2;
	}
	if (startTime_1 == 1) {
		bossWave7.speedY = 1;
	 }
	}
	if (bossWave7.y == Boss7_Start_Y) {
		bossWave7.speedY = 0;
	 }
	} 
	if (bullbox.crashWith(bossWave7)) {
    if (BossHealth > 0) {
    if (fire > 0) {
	if (bossSheildMode == 0) {
    BossHealth -= PlayerDamageDeal;
	}
    fire = 0;
       }
      }
     }
	}
	if (spawnBoss7 == 0 && pauseGame == 0) {
	EXCount += 1;
	if (EXCount >= 12) {
	ExplosionCycle++;
	EXCount = 0;
	 }
	if (ExplosionCycle > 4) {
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
if (wave < 5) {
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
if (menu > 0) {
if (badguy1.crashWith(wallright) == false) {
if (badguy1.crashWith(wallleft) == false) {
if (badguy1.crashWith(wall3) == false) {
if (badguy1.crashWith(wall4) == false) {
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
  }
 }
}
if (box.crashWith(badguy1)) {
if (upgrademenu == 0) {
if (playerHealth > 0) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= Bad1DamageDeal;
   }
  }
 }
}
if (weapon == 1) {
 if (bullbox.crashWith(badguy1)) {
 if (fire > 0) {
  if (startTime == 0) {
  startTime = 1;
    }
   }
  }
}
if (startTime == 1) {
 badspeedai1 = 0.1;
 negbadspeedai1 = -0.1;
 badhurtspeedai1 = 0.2;
 negbadhurtspeedai1 = -0.2;
   } else 
if (startTime == 0) {
 badspeedai1 = 1;
 negbadspeedai1 = -1;
 badhurtspeedai1 = 1.5;
 negbadhurtspeedai1 = -1.5;
   }
 }
 }
 }
}
var BadDeath2 = 1;
var Badhealth2 = 0;
var Bad2DamageDeal = 0.1;
function badboxspawn2() {
if (difficulty == 0) {
	Bad2DamageDeal = 0.1;
}
if (difficulty == 1) {
	Bad2DamageDeal = 0.2;
}
if (difficulty == 2) {
	Bad2DamageDeal = 0.5;
}
if (wave < 7 && wave > 1) {
if (badguy2.crashWith(bullbox)) {
if (Badhealth2 >= 0) {
if (fire > 0) {
Badhealth2 -= PlayerDamageDeal;
fire = 0;
  }
 }
}
if (Badhealth2 >= 0) {
BadDeath2 = 0;
 }
if (Badhealth2 <= 0) {
BadDeath2 = 1;
 }
if (Badhealth2 < 0) {
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
if (wave < 7 && wave > 1) {
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
if (menu > 0) {
if (badguy2.crashWith(wallright) == false) {
if (badguy2.crashWith(wallleft) == false) {
if (badguy2.crashWith(wall3) == false) {
if (badguy2.crashWith(wall4) == false) {
if (wave < 5) {
if (badguy2.crashWith(wallhouse3) == false) {
if (badguy2.crashWith(wallhouse2_2) == false) {
if (badguy2.crashWith(wallhouse7) == false) {
if (badguy2.crashWith(wallhouse3_2) == false) {
if (badguy2.crashWith(wallhouse2) == false) {
if (badguy2.crashWith(wallhouse5) == false) {
if (badguy2.crashWith(wallhouse1) == false) {
if (badguy2.crashWith(wallhouse4_2) == false) {
if (badguy2.crashWith(wallhouse6_2) == false) {
if (badguy2.crashWith(wallhouse1_2) == false) {
if (badguy2.crashWith(wallhouse4) == false) {
if (badguy2.crashWith(wallhouse6) == false) {
if (badguy2.crashWith(wall2house3) == false) {
if (badguy2.crashWith(wall2house2_2) == false) {
if (badguy2.crashWith(wall2house7) == false) {
if (badguy2.crashWith(wall2house3_2) == false) {
if (badguy2.crashWith(wall2house2) == false) {
if (badguy2.crashWith(wall2house5) == false) {
if (badguy2.crashWith(wall2house1) == false) {
if (badguy2.crashWith(wall2house4_2) == false) {
if (badguy2.crashWith(wall2house6_2) == false) {
if (badguy2.crashWith(wall2house1_2) == false) {
if (badguy2.crashWith(wall2house4) == false) {
if (badguy2.crashWith(wall2house6) == false) {
if (badguy2.crashWith(wallhouse8) == false) {
if (badguy2.crashWith(wall2house8) == false) {
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
                        }
                        }
	                }
	                }
	                }
	                }
	                }
	                }
	               }
	              }
	             } 
	            }
	           }
	          }
	         }
	        }
	       }
	      }
	     }
	    }
       }
      }
     }
    }
   }
if (wave < 7 && wave > 4) {
//put wall detect here!!//
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
  }
 }
}
if (box.crashWith(badguy2)) {
if (upgrademenu == 0) {
if (playerHealth > 0) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= Bad2DamageDeal;
   }
  }
 }
}
if (weapon == 1) {
 if (bullbox.crashWith(badguy2)) {
 if (fire > 0) {
  if (startTime2 == 0) {
  startTime2 = 1;
    }
   }
  }
}
if (startTime2 == 1) {
 badspeedai2 = 0.1;
 negbadspeedai2 = -0.1;
 badhurtspeedai2 = 0.2;
 negbadhurtspeedai2 = -0.2;
   } else 
if (startTime2 == 0) {
 badspeedai2 = 1;
 negbadspeedai2 = -1;
 badhurtspeedai2 = 1.5;
 negbadhurtspeedai2 = -1.5;
   }
 }
 }
 }
}
var Badhealth3 = 0;
var Bad3DamageDeal = 0.05;
function badtriboxspawn() {
if (difficulty == 0) {
	Bad3DamageDeal = 0.05;
}
if (difficulty == 1) {
	Bad3DamageDeal = 0.07;
}
if (difficulty == 2) {
	Bad3DamageDeal = 0.1;
}
if (wave > 4 && wave < 7) {
if (bullbox.crashWith(tribox)) {
if (Badhealth3 >= 0) {
if (fire > 0) {
Badhealth3 -= PlayerDamageDeal;
fire = 0;
  }
 }
}
if (Badhealth3 >= 0) {
BadDeath3 = 0;
 }
if (Badhealth3 <= 0) {
BadDeath3 = 1;
 }
if (Badhealth3 < 0) {
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
trienemypic.angle = Math.atan2(-box.y + trienemypic.y, -box.x + trienemypic.x) + 1.57079633;
badguy1healthbar4.x = tribox.x - 12;
badguy1healthbar4.y = tribox.y - 8;
badguy1healthbar4.color = badHealthBarColor4;
badguy1healthbar4.width = Badhealth3 / 2;
if (wave > 4 && wave < 7) {
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
if (menu > 0) {
if (tribox.crashWith(wallright) == false) {
if (tribox.crashWith(wallleft) == false) {
if (tribox.crashWith(wall3) == false) {
if (tribox.crashWith(wall4) == false) {
if (tribox.x > box.x + tribox.width) {
    sidebad3 = 0;
}
if (tribox.x + tribox.width < box.x) {
    sidebad3 = 1;
}
if (tribox.x > box.x + tribox.width) {
if (sidebad3 == 0) {
tribox.speedX = negbadspeedai3;
if (Badhealth3 <= 50) {
tribox.speedX = negbadhurtspeedai3;
  }
 }
} else if (tribox.x + tribox.width < box.x) {
if (sidebad3 == 1) {
tribox.speedX = badspeedai3;
if (Badhealth3 <= 50) {
tribox.speedX = badhurtspeedai3;
  }
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
  }
 }
}
if (box.crashWith(tribox)) {
if (upgrademenu == 0) {
if (playerHealth > 0) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= Bad3DamageDeal;
   }
  }
 }
}//goherenoww//
if (weapon == 1) {
 if (bullbox.crashWith(tribox)) {
 if (fire > 0) {
  if (startTime3 == 0) {
  startTime3 = 1;
    }
   }
  }
}
if (startTime3 == 1) {
 badspeedai3 = 0.3;
 negbadspeedai3 = -0.3;
 badhurtspeedai3 = 0.5;
 negbadhurtspeedai3 = -0.5;
   } else 
if (startTime3 == 0) {
 badspeedai3 = 1;
 negbadspeedai3 = -1;
 badhurtspeedai3 = 1.6;
 negbadhurtspeedai3 = -1.6;
   }
 }
 }
 }
}

var Badhealth5 = 0;
var Bad5DamageDeal = 2;
function badxboxspawn() {
if (difficulty == 0) {
	Bad5DamageDeal = 0.02;
}
if (difficulty == 1) {
	Bad5DamageDeal = 0.07;
}
if (difficulty == 2) {
	Bad5DamageDeal = 0.12;
}
if (wave > 5 && wave < 7) {
if (bullbox.crashWith(xbox1)) {
if (Badhealth5 >= 0) {
if (fire > 0) {
Badhealth5 -= PlayerDamageDeal;
fire = 0;
  }
 }
}
if (Badhealth5 >= 0) {
BadDeath5 = 0;
 }
if (Badhealth5 <= 0) {
BadDeath5 = 1;
 }
if (Badhealth5 < 0) {
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
if (wave > 4 && wave < 7) {
if (BadDeath5 > 0) {
if (xbox1.x > xpos1.x) {
xbox1.speedX = -5;
}
if (xbox1.x < xpos1.x) {
xbox1.speedX = 5;
}
if (xbox1.crashWith(xpos1)) {
xenemypic1.angle = 0;
xenemypic1.speedX = 0;
xenemypic1.speedY = 0;
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
xenemypic1.angle += 5 * Math.PI / 180;
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
if (menu > 0) {
if (xbox1.crashWith(wallright) == false) {
if (xbox1.crashWith(wallleft) == false) {
if (xbox1.crashWith(wall3) == false) {
if (xbox1.crashWith(wall4) == false) {
if (xbox1.x > box.x + xbox1.width) {
    sidebad5 = 0;
}
if (xbox1.x + xbox1.width < box.x) {
    sidebad5 = 1;
}
if (xbox1.x > box.x + xbox1.width) {
if (sidebad5 == 0) {
xbox1.speedX = negbadspeedai5;
if (Badhealth5 <= 50) {
xbox1.speedX = negbadhurtspeedai5;
  }
 }
} else if (xbox1.x + xbox1.width < box.x) {
if (sidebad5 == 1) {
xbox1.speedX = badspeedai5;
if (Badhealth5 <= 50) {
xbox1.speedX = badhurtspeedai5;
  }
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
  }
 }
}
if (box.crashWith(xbox1)) {
if (upgrademenu == 0) {
if (playerHealth > 0) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= Bad5DamageDeal;
   }
  }
 }
}
if (weapon == 1) {
 if (bullbox.crashWith(xbox1)) {
 if (fire > 0) {
  if (startTime7 == 0) {
  startTime7 = 1;
    }
   }
  }
}
if (startTime7 == 1) {
 badspeedai5 = 0.5;
 negbadspeedai5 = -0.5;
 badhurtspeedai5 = 0.7;
 negbadhurtspeedai5 = -0.7;
   } else 
if (startTime7 == 0) {
 badspeedai5 = 1.6;
 negbadspeedai5 = -1.6;
 badhurtspeedai5 = 2;
 negbadhurtspeedai5 = -2;
   }
 }
 }
 }
}

var BadDeath4 = 1;
var Badhealth4 = 0;
var Bad4DamageDeal = 0.13;
function badrecspawn1() {
if (difficulty == 0) {
	Bad4DamageDeal = 0.10;
}
if (difficulty == 1) {
	Bad4DamageDeal = 0.13;
}
if (difficulty == 2) {
	Bad4DamageDeal = 0.16;
}
if (wave < 5 && wave > 2) {
if (recbox1.crashWith(bullbox)) {
if (Badhealth4 >= 0) {
if (fire > 0) {
Badhealth4 -= PlayerDamageDeal;
fire = 0;
  }
 }
}
if (Badhealth4 >= 0) {
BadDeath4 = 0;
 }
if (Badhealth4 <= 0) {
BadDeath4 = 1;
 }
if (Badhealth4 < 0) {
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
if (wave < 5 && wave > 2) {
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
if (menu > 0) {
if (recbox1.crashWith(wallright) == false) {
if (recbox1.crashWith(wallleft) == false) {
if (recbox1.crashWith(wall3) == false) {
if (recbox1.crashWith(wall4) == false) {
if (wave < 5) {
if (recbox1.crashWith(wallhouse3) == false) {
if (recbox1.crashWith(wallhouse2_2) == false) {
if (recbox1.crashWith(wallhouse7) == false) {
if (recbox1.crashWith(wallhouse3_2) == false) {
if (recbox1.crashWith(wallhouse2) == false) {
if (recbox1.crashWith(wallhouse5) == false) {
if (recbox1.crashWith(wallhouse1) == false) {
if (recbox1.crashWith(wallhouse4_2) == false) {
if (recbox1.crashWith(wallhouse6_2) == false) {
if (recbox1.crashWith(wallhouse1_2) == false) {
if (recbox1.crashWith(wallhouse4) == false) {
if (recbox1.crashWith(wallhouse6) == false) {
if (recbox1.crashWith(wall2house3) == false) {
if (recbox1.crashWith(wall2house2_2) == false) {
if (recbox1.crashWith(wall2house7) == false) {
if (recbox1.crashWith(wall2house3_2) == false) {
if (recbox1.crashWith(wall2house2) == false) {
if (recbox1.crashWith(wall2house5) == false) {
if (recbox1.crashWith(wall2house1) == false) {
if (recbox1.crashWith(wall2house4_2) == false) {
if (recbox1.crashWith(wall2house6_2) == false) {
if (recbox1.crashWith(wall2house1_2) == false) {
if (recbox1.crashWith(wall2house4) == false) {
if (recbox1.crashWith(wall2house6) == false) {
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
	                }
	                }
	                }
	                }
	                }
	                }
	                }
	               }
	              }
	             } 
	            }
	           }
	          }
	         }
	        }
	       }
	      }
	     }
	    }
       }
      }
     }
    }
   }
if (wave < 7 && wave > 4) {
//put wall detect here!!//
if (recbox1.x + 5 > box.x + 23) {
    sidebad4 = 0;
}
if (recbox1.x < box.x - 23) {
    sidebad4 = 1;
}
if (sidebad4 == 0) {
if (recbox1.x + 5> box.x + 23) {
recenemypic1.speedX = negbadspeedai4;
recbox1.speedX = negbadspeedai4;
if (Badhealth4 <= 50) {
recenemypic1.speedX = negbadhurtspeedai4;
recbox1.speedX = negbadhurtspeedai4;
  }
 }
}
if (sidebad4 == 1) {
if (recbox1.x < box.x - 23) {
recenemypic1.speedX = badspeedai4;
recbox1.speedX = badspeedai4;
if (Badhealth4 <= 50) {
recenemypic1.speedX = badhurtspeedai4;
recbox1.speedX = badhurtspeedai4;
  }
 }
}
if (recbox1.y > box.y) {
recenemypic1.speedY = negbadspeedai4;
recbox1.speedY = negbadspeedai4;
if (Badhealth4 <= 50) {
recenemypic1.speedY = negbadhurtspeedai4;
recbox1.speedY = negbadhurtspeedai4;
 }
}
if (recbox1.y < box.y) {
recenemypic1.speedY = badspeedai4;
recbox1.speedY = badspeedai4;
if (Badhealth4 <= 50) {
recenemypic1.speedY = badhurtspeedai4;
recbox1.speedY = badhurtspeedai4;
 }
}
 }
   }
  }
 }
}
if (box.crashWith(recbox1)) {
if (upgrademenu == 0) {
if (playerHealth > 0) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= Bad4DamageDeal;
   }
  }
 }
}
if (weapon == 1) {
 if (bullbox.crashWith(recbox1)) {
 if (fire > 0) {
  if (startTime4 == 0) {
  startTime4 = 1;
    }
   }
  }
}
if (startTime4 == 1) {
 badspeedai4 = 0.15;
 negbadspeedai4 = -0.15;
 badhurtspeedai4 = 0.25;
 negbadhurtspeedai4 = -0.25;
   } else 
if (startTime4 == 0) {
 badspeedai4 = 1.2;
 negbadspeedai4 = -1.2;
 badhurtspeedai4 = 1.6;
 negbadhurtspeedai4 = -1.6;
   }
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
if (Death1 == 0) {
if (fire == 0 && startTimer == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireU += 1;
startTimer = 1;
ammo -= ammocon;
if (menu == 0) {
starttime = 1;
}
if (menu > 0) {
if (frameIndex5 == 0) {
firesoundstart = 1;
 }
}
	}
   }
  }
 }
}
	
function shootDown() {
if (Death1 == 0) {
if (fire == 0 && startTimer == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireD += 1;
startTimer = 1;
ammo -= ammocon;
if (menu == 0) {
starttime = 1;
}
if (menu > 0) {
if (frameIndex5 == 0) {
firesoundstart = 1;
 }
}
	}
   }
  }
 }
}
	
function shootLeft() {
if (Death1 == 0) {
if (fire == 0 && startTimer == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireL += 1;
startTimer = 1;
ammo -= ammocon;
if (menu == 0) {
starttime = 1;
}
if (menu > 0) {
if (frameIndex5 == 0) {
firesoundstart = 1;
 }
}
	}
   }
  }
 }
}
	
function shootRight() {
if (Death1 == 0) {
if (fire == 0 && startTimer == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireR += 1;
startTimer = 1;
ammo -= ammocon;
if (menu == 0) {
starttime = 1;
}
if (menu > 0) {
if (frameIndex5 == 0) {
firesoundstart = 1;
 }
}
	}
   }
  }
 }
}

var tribullettime = 0;
var tribullrange = 3;
var trifire = 0;
var trisidebad = 0;
var TriBullDamageDeal = 2;
function tribulletai() {//bull//
if (difficulty == 0) {
	TriBullDamageDeal = 2;
}
if (difficulty == 1) {
	TriBullDamageDeal = 3;
}
if (difficulty == 2) {
	TriBullDamageDeal = 5;
}
if (trifire < 1) {
if (-10 + tribbox.x > tribox.x) {
	tribpic.speedX = -10;
	tribbox.speedX = -10;
}
if (-10 + tribbox.x < tribox.x) {
	tribpic.speedX = 10;
	tribbox.speedX = 10;
}
if (tribox.crashWith(tribbox)) {
	tribpic.speedX = 0;
    tribpic.speedY = 0;
	tribbox.speedX = 0;
    tribbox.speedY = 0;
 }
if (-10 + tribbox.y > tribox.y) {
	tribpic.speedY = -10;
	tribbox.speedY = -10;
}
if (-10 + tribbox.y < tribox.y) {
	tribpic.speedY = 10;
	tribbox.speedY = 10;
 }
}
if (trifire > 0) {
if (-10 + tribbox.x > box.x) {
  tribpic.speedX = -tribullrange;
  tribbox.speedX = -tribullrange;
  } 
if (-10 + tribbox.x < box.x) {
  tribpic.speedX = tribullrange;
  tribbox.speedX = tribullrange;
  }
if (-10 + tribbox.y > box.y) {
  tribpic.speedY = -tribullrange;
  tribbox.speedY = -tribullrange;
}
if (-10 + tribbox.y < box.y) {
  tribpic.speedY = tribullrange;
  tribbox.speedY = tribullrange;
  }
 } 
if (tribullettime >= 5) {
  tribullettime = 0;
  trifire = 1;
  }
if (trifire == 0) {
if (tribox.crashWith(detectbox)) {
tribullettime += 0.5;	
 }	
}
if (tribbox.crashWith(wallright) || tribbox.crashWith(wallleft) || tribbox.crashWith(wall3) || tribbox.crashWith(wall4)) {
trifire = 0;
 }
if (tribbox.crashWith(wall3house1) || tribbox.crashWith(wall3house1_2) || tribbox.crashWith(wall3house2) || tribbox.crashWith(wall3house2_2) || tribbox.crashWith(wall3house3) || tribbox.crashWith(wall3house3_2) || tribbox.crashWith(wall3house4_4) || tribbox.crashWith(wall3house5_4) || tribbox.crashWith(wall4house1) || tribbox.crashWith(wall4house1_1) || tribbox.crashWith(wall4house2) || tribbox.crashWith(wall4house2_1) || tribbox.crashWith(wall4house3) || tribbox.crashWith(wall4house3_1) || tribbox.crashWith(wall4house4_3) || tribbox.crashWith(wall4house5_3) || tribbox.crashWith(wall4house6_4)) {
trifire = 0;
 }
if (wave > 4 && wave < 7) {
if (tribbox.crashWith(box)) {
if (upgrademenu == 0) {
if (pauseGame == 0) {
if (playerHealth > 0) {
if (trifire == 1) {
if (CapName != healthcheat || CapName != fullcheat) {
playerHealth -= TriBullDamageDeal;
trifire = 0;
       }
      }
     }
	}
   }
  }
 }
}

var starttime = 0;
var timeforbullet = 0;
function resetfire() {
if (starttime == 1) {
timeforbullet += 1;
 }
if (timeforbullet > 100) {
menu += 1;
 }
if (menu > 0) {
starttime = 0;
 }
}

var bullrange = 3;
function bulletai() {
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
if (fire < 1) {
if (-10 + bullbox.x > box.x) {
	bullbox.speedX = -5;

}
if (-10 + bullbox.x < box.x) {
	bullbox.speedX = 5;
}
if (box.crashWith(bullbox)) {
	bullbox.speedX = 0;
 }
if (-10 + bullbox.y > box.y) {
	bullbox.speedY = -5;
}
if (-10 + bullbox.y < box.y) {
	bullbox.speedY = 5;
}
if (box.crashWith(bullbox)) {
	bullbox.speedY = 0;
 }
}
if (fire > 0) {
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
var firesoundstart = 0;
var sound = 0
function playSound() {
if (MusicOnOff == true && mutemusic == 0) {
mutemusic = 0;
if (upgrademenu == 0) {
 if (Death1 == 0) {
if (wave < 5) {
if (menu > 0) {
document.getElementById('level1').play();
   }
  }
 }
}
if (menu == 0) {
if (Death1 == 0) {
document.getElementById('Menu').play();
 }
}
if (Death1 > 0) {
document.getElementById('Death').play();
}
if (upgrademenu > 0) {
if (Death1 == 0) {
document.getElementById('Menu').play();
 }
}
if (upgrademenu == 0) {
if (Death1 == 0) {
if (wave > 4 && wave < 7) {
if (menu > 0) {
document.getElementById('level2').play();
    }
   }
  }
 }
if (upgrademenu == 0) {
if (Death1 == 0) {
if (wave == 7) {
if (menu > 0) {
document.getElementById('boss7').play();
    }
   }
  }
 }
if (ammo <= 20/100 * maxAmmo && playerHealth > 0) {
document.getElementById('lowammo').play();
}
if (firesoundstart > 0) {
if (menu > 0) {
document.getElementById('firesound').play();
   }
  }
 } 
}
	
function SetVolume() {
if (mutemusic == 0) {
var player = document.getElementById('level1');
player.volume = val / 100;
var player2 = document.getElementById('level2');
player2.volume = val / 100;
var player3 = document.getElementById('boss7');
player3.volume = val / 100;
var menus = document.getElementById('Menu');
menus.volume = val / 100;
var Dead = document.getElementById('Death');
Dead.volume = val / 100;
 }
}

function SetVolume2() {
if (mutemusic == 0) {
var fireVolume = document.getElementById('firesound');
fireVolume.volume = val2 / 300;
var ammoVolume = document.getElementById('lowammo');
ammoVolume.volume = val2 / 300;
var explosionVolume = document.getElementById('explosion');
explosionVolume.volume = val2 / 300;
 }
}

var mutemusic = 0;
var val = document.getElementById("volume").value;
var val2 = document.getElementById("soundvolume").value;

function mute() {
if (mutemusic == 1) {
var player = document.getElementById('level1');
player.volume = 0 / 100;
var player2 = document.getElementById('level2');
player2.volume = 0 / 100;
var player3 = document.getElementById('boss7');
player3.volume = 0 / 100;
var menus = document.getElementById('Menu');
menus.volume = 0 / 100;
var Dead = document.getElementById('Death');
Dead.volume = 0 / 100;
var fireVolume = document.getElementById('firesound');
fireVolume.volume = 0 / 300;
var ammoVolume = document.getElementById('lowammo');
ammoVolume.volume = 0 / 300;
var explosionVolume = document.getElementById('explosion');
explosionVolume.volume = 0 / 300;
 }
if (mutemusic == 0) {
var player = document.getElementById('level1');
player.volume = val / 100;
var player2 = document.getElementById('level2');
player2.volume = val / 100;
var player3 = document.getElementById('boss7');
player3.volume = val / 100;
var menus = document.getElementById('Menu');
menus.volume = val / 100;
var Dead = document.getElementById('Death');
Dead.volume = val / 100;
var fireVolume = document.getElementById('firesound');
fireVolume.volume = val2 / 300;
var ammoVolume = document.getElementById('lowammo');
ammoVolume.volume = val2 / 300;
var explosionVolume = document.getElementById('explosion');
explosionVolume.volume = val2 / 300;
 }
if (mutemusic > 1) {
mutemusic = 0;
 }
}
	
function skipSound() {
 if (upgrademenu == 1) {
 level1.pause();
 level1.currentTime = 0;
 level2.pause();
 level2.currentTime = 0;
 boss7.pause();
 boss7.currentTime = 0;
 firesound.pause();
 firesound.currentTime = 0;
 }
 if (Death1 > 0) {
 level1.pause();
 level1.currentTime = 0;
 level2.pause();
 level2.currentTime = 0;
 boss7.pause();
 boss7.currentTime = 0;
 firesound.pause();
 firesound.currentTime = 0;
 Menu.pause();
 Menu.currentTime = 0;
 }
 if (Death1 == 0) {
 Death.pause();
 Death.currentTime = 0;
 }
 if (wave >= 5) {
 level1.pause();
 level1.currentTime = 0;
 }
 if (wave >= 7 || wave < 5) {
 level2.pause();
 level2.currentTime = 0;
 }
 if (wave < 7 || wave > 7) {
 boss7.pause();
 boss7.currentTime = 0;
 explosion.pause();
 explosion.currentTime = 0;
 }
 if (menu > 0) {
 if (upgrademenu == 0) {
 Menu.pause();
 Menu.currentTime = 0;
  }
 }
 if (fire == 0) {
 if (frameIndex5 == 1) {
 firesound.pause();
 firesound.currentTime = 0;
  }
 }
 if (ammo > 20/100 * maxAmmo || playerHealth <= 0) {
 lowammo.pause();
 lowammo.currentTime = 0;
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
if (playerShip == 0) {
stat1_w.update();
stat1_2w.update();
stat1_3w.update();
stat1_4w.update();
stat1_5w.update();
}
if (playerShip == 1) {
stat2_w.update();
stat1_2w.update();
stat1_3w.update();	
stat1_4w.update();
stat1_5w.update();
}
if (playerShip == 2) {
stat3_w.update();
stat1_2w.update();
stat1_3w.update();	
stat1_4w.update();
stat1_5w.update();
}
if (playerShip == 3) {
stat4_w.update();
stat1_2w.update();
stat1_3w.update();	
stat1_4w.update();
stat1_5w.update();
}
if (playerShip == 4) {
stat5_w.update();
stat1_2w.update();
stat1_3w.update();	
stat1_4w.update();
stat1_5w.update();
}
if (playerShip == 5) {
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

var locationV = "Monty Forest Cabins";
var namebX = 620;
var namebY = 450;
var ammocheat = "MOREAMMO";
var healthcheat = "MOREHEALTH";
var wavebonus = "RYANMACE";
var waveStPDay = "CLOVER";
var testwave = "TEST";
var resetcheat = "RESET";
var fullcheat = "FULLYMAXED";
var weapv = "VAULT";
var beginning = "STORY";
var blockKeys = false;
var weaponVault = 0;
var goBack = 0;
document.getElementById('name').onfocus = function() { 
blockKeys = true;
console.log("test1");
}
document.getElementById('name').onblur = function() { 
blockKeys = false;
console.log("test2");
}
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
 var name = document.getElementById('name').value;
 var CapName = name.toUpperCase();
function nameFC() {
 var nameg = "Name:";
 name = document.getElementById('name').value;
 document.getElementById('name').autofocus = false;
 CapName = name.toUpperCase();
 namef = new component("30px", "Consolas", "white", namebX, namebY, "text");
 m = new component(300, 20, "#63218a", namebX - 5, namebY - 15, "rec");
 namef.font="20px Consolas";
 namef.text=nameg + name;
 locationN = new component("30px", "Consolas", "white", namebX - 40, namebY + 45, "text");
 locationN.font="12px Consolas";
 locationN.text= "Location: " + locationV;
 m.update();
 namef.update();
 locationN.update();
 if (wave < 5) {
 locationV = "Monty Forest Cabins";
 switchpos = 0;
 }
 if (wave >= 5 && wave < 7) {
 locationV = "Monty Trailer Park";
 }
 if (wave == 8000) {
 locationV = "Blossom Fields";
 }
 if (CapName == ammocheat) {
 ammo = maxAmmo;
 }
 if (CapName == healthcheat) {
 playerHealth = playerHealthMax;
 }
 if (CapName == fullcheat) {
 playerHealth = playerHealthMax;
 ammo = maxAmmo;
 }
 if (CapName == wavebonus) {
 wave = 9000;
 document.getElementById('name').value = "";
 }
 if (CapName == waveStPDay && STPDAYEVENTTRIGGER == 1) {
 wave = 8000;
 switchpos = 0;
 document.getElementById('name').value = "";
 }
 if (CapName == beginning || goBack == 1) {
 goBack = 0;
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
 bpic = new component(10, 10, "bullpic", 400, 180, "img");
 bpic2 = new component(10, 10, "bullpic2", 400, 180, "img");
 bpic3 = new component(10, 10, "bullpic3", 400, 180, "img");
 bpic4 = new component(10, 10, "bullpic4", 400, 180, "img");
 bpic5 = new component(10, 10, "ST_P_DAY_EVENT_BOSS_BULLET", 400, 180, "img");
 box = new component(25, 25, "black", playerX, playerY, "rec");
 ship1 = new component(32, 32, "playerimg", playerX - 3.5, playerY - 3.5, "img");
 ship2 = new component(25, 25, "player2img", playerX, playerY, "img");
 ship3 = new component(25, 25, "player3img", playerX, playerY, "img");
 ship4 = new component(25, 25, "player4img", playerX, playerY, "img");
 ship5 = new component(32, 32, "player5img", playerX - 3.5, playerY - 3.5, "img");
 ship6 = new component(25, 25, "ST_P_DAY_EVENT_PRIZE", playerX, playerY, "img-rot");
 document.getElementById('name').value = "";
 }
 if (CapName == weapv) {
 vaultShow = 1;
 }
 if (CapName != weapv) {
 vaultShow = 0;
 }
 if (CapName == testwave) {
 wave = 5;
 weaponupgrade1 = 0;
 backSwitch = 0;
 document.getElementById('name').value = "fullymaxed";
 }
 if (CapName == resetcheat) {
 document.location.reload(true);
 }
}
var money = 50;
var mbX = 580;
var mbY = 480;
function playerMoney() {
 var moneyg = "$"
 moneyf = new component("30px", "Consolas", "green", mbX, mbY, "text");
 q = new component(300, 100, "#63218a", mbX - 5, mbY - 25, "rec");
 mbo = new component(300, 100, "black", 570, 450, "rec");
 nbo = new component(300, 100, "black", 610, 430, "rec");
 moneyf.font="30px Consolas";
 moneyf.text=moneyg + Math.round(money);
 nbo.update();
 mbo.update();
 q.update();
 moneyf.update();
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

function swapweap4() { //goherenow//

}
var pauseGame = 0;
var backSwitch = 0;
function backfunc() {
   backSwitch = 0;
   if (specialalert1 == 0 && STPOPUP == 0) {
   if (pauseGame == 0) {
   if (upgrademenu > 0) {
            backSwitch = 1;
			upgrademenu = 0;
		}
	  }
	}
   if (specialalert1 == 1) {
   specialalert1 = 0;
   }
   if (STPOPUP == 1) {
   STPOPUP = 0;
   }
   if (backSwitch == 0) {
   if (upgrademenu == 0) {
   if (menu > 0) {
   pauseGame += 1;
     }
    }
   }
	if (Death1 > 0) {
	document.getElementById('name').value = "story";
	}
}
	
var nextUpgrade = 0;
function upgrade1func() {
        if (upgrademenu > 0) {
        nextUpgrade = 1;	
		if (weaponupgrade1 == 0) {
		if (money >= 100) {
			weaponupgrade1 = 1;
			money -= 100;
			nextUpgrade = 0;
		}
	   }
	   if (nextUpgrade == 1) {
	    if (weaponupgrade1 == 1) {
		 if (money >= 200) {
			weaponupgrade1 = 2;
			money -= 200;
		 }
		}
	   }
	  }
}

var healthLocker = 0;
function healthRecovery() {
	if (upgrademenu == 1) {
	healthLocker = 1;
	if (playerHealth != playerHealthMax && healthLocker == 1) {
		if (Math.floor(playerHealthMax - playerHealth) <= money) {
			money -= Math.floor(playerHealthMax - playerHealth);
			playerHealth += (playerHealthMax - playerHealth);
			healthLocker = 0;
		}
	 }
	}
}

var ammoLocker = 0;
function ammoRecovery() {
	if (upgrademenu == 1) {
	ammoLocker = 1;
	if (ammo != maxAmmo && ammoLocker == 1) {
		if (Math.floor(maxAmmo - ammo) <= money) {
			money -= Math.floor(maxAmmo - ammo);
			ammo += (maxAmmo - ammo);
			ammoLocker = 0;
		}
	 }
	}
}
