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
var stcweapon = 0;
var earlystart = 1;
function Datechecker() {
var today_date= new Date()
var mydayofweek = today_date.getDay()
var mytoday = today_date.getDate()
var mymonth = today_date.getMonth()
var myyear = today_date.getFullYear()
if (popup == 1) {
if (mymonth == 9) {
if (mytoday >= 7 && mytoday < 20) {
openpatchinfo = 1;
popup = 0;
   }
  }
 }
if (mymonth >= 8 && mymonth < 11) {
if (mytoday >= 1) {
fallseason = 1;
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
var playerSpeed = 4;
var playerXwave5 = 30;
var playerYwave5 = 30;
var playerHealth = 100;
var menu = 0;
var backX = 430;
var backY = 350;
var upgrade1X = 430;
var upgrade1Y = 50;
var bad1posX = 760;
var bad1posY = 450;
var bad2posX = 20;
var bad2posY = 100;
var tri1posX = 760;
var tri1posY = 180;
var rec1posX = 350;
var rec1posY = 40;
function start() {
 document.getElementById("volume").value = "15";
 SetVolume(15);
 recenemypic1 = new component(25, 25, "red", 450, 60, "rec-enemypic");
 recbox1 = new component(25, 25, "red", 450, 60, "rec");
 recpos1 = new component(25, 25, "orange", rec1posX, rec1posY, "rec");
 recwavebox1 = new component(35, 35, "black", rec1posX - 5, rec1posY - 5, "rec");
 badguypic1 = new component(25, 25, "red", 650, 450, "img7");
 badguy1 = new component(25, 25, "red", 650, 450, "rec");
 badpos1 = new component(25, 25, "orange", bad1posX, bad1posY, "rec");
 badwavebox1 = new component(35, 35, "black", bad1posX - 5, bad1posY - 5, "rec");
 badguypic2 = new component(25, 25, "red", 40, 150, "img7");
 badguy2 = new component(25, 25, "red", 40, 150, "rec");
 badpos2 = new component(25, 25, "orange", bad2posX, bad2posY, "rec");
 badwavebox2 = new component(35, 35, "black", bad2posX - 5, bad2posY - 5, "rec");
 trienemyleft = new component(35, 35, "black", 430, 158, "rotleft");
 trienemyright = new component(35, 35, "black", 430, 158, "rotright");
 tribox = new component(35, 35, "red", 430, 158, "rec");
 tripos1 = new component(25, 25, "orange", tri1posX, tri1posY, "rec");
 triwavebox1 = new component(35, 35, "black", tri1posX - 5, tri1posY - 5, "rec");
 bullbox = new component(10, 10, "orange", 400, 180, "rec");
 bpic = new component(10, 10, "orange", 400, 180, "b1");
 bpic2 = new component(10, 10, "orange", 400, 180, "b2");
 bpic3 = new component(10, 10, "orange", 400, 180, "b3");
 bpic4 = new component(10, 10, "orange", 400, 180, "b4");
 box = new component(25, 25, "black", playerX, playerY, "rec");
 circle = new component(32, 32, "darkblue", playerX - 3.5, playerY - 3.5, "img");
 w1t5 = new component(800, 500, "darkblue", 0, 0, "img5");
 w5t7 = new component(800, 390, "darkblue", 0, 0, "waveimg5-7");
 Fw1t5 = new component(800, 500, "darkblue", 0, 0, "img5_1");
 Fw5t7 = new component(800, 390, "darkblue", 0, 0, "Fwaveimg5-7");
 wallleft = new component(20, 400, "black", -10, 0, "rec");
 wallright = new component(20, 400, "black", 790, 0, "rec");
 wall3 = new component(800, 20, "black", 0, -10, "rec");
 wall4 = new component(800, 20, "black", 0, 390, "rec");
 roofhouse1 = new component(140, 130, "black", 70, 70, "houseroof1_img");
 insidedetect1 = new component(120, 140, "gray", 80, 80, "rec");
 floorhouse1 = new component(120, 120, "black", 80, 80, "housefloor1_img");
 wallhouse1 = new component(120, 10, "grey", 80, 80, "rec");
 wallhouse1_2 = new component(120, 10, "grey", 80, 70, "rec");
 wallhouse2 = new component(10, 100, "grey", 80, 90, "rec");
 wallhouse2_2 = new component(10, 120, "grey", 70, 70, "rec");
 wallhouse3 = new component(10, 100, "grey", 190, 90, "rec");
 wallhouse3_2 = new component(10, 120, "grey", 200, 70, "rec");
 wallhouse4 = new component(15, 10, "grey", 90, 180, "rec");
 wallhouse4_2 = new component(35, 10, "grey", 70, 190, "rec");
 wallhouse4_3 = new component(40, 20, "grey", 70, 180, "rec");
 wallhouse5 = new component(10, 10, "grey", 100, 185, "rec");
 wallhouse6 = new component(25, 10, "grey", 165, 180, "rec");
 wallhouse6_2 = new component(45, 10, "grey", 165, 190, "rec");
 wallhouse6_3 = new component(50, 20, "grey", 160, 180, "rec");
 wallhouse7 = new component(10, 10, "grey", 160, 185, "rec");
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
 wall2house5 = new component(10, 10, "grey", 550, 195, "rec");
 wall2house6 = new component(85, 10, "grey", 615, 190, "rec");
 wall2house6_2 = new component(95, 10, "grey", 615, 200, "rec");
 wall2house6_3 = new component(100, 20, "grey", 610, 190, "rec");
 wall2house7 = new component(10, 10, "grey", 610, 195, "rec");
 wall2house8 = new component(190, 20, "grey", 510, 200, "rec");
 roof2house1 = new component(210, 120, "black", 500, 90, "houseroof1_img");
 inside2detect1 = new component(190, 130, "gray", 510, 100, "rec");
 floor2house1 = new component(200, 120, "black", 500, 90, "housefloor1_img");
 tree1_1 = new component(50, 50, "black", 80, 290, "tree_img");
 tree1_2 = new component(50, 50, "black", 650, 270, "tree_img");
 tree1_3 = new component(50, 50, "black", 230, 90, "tree_img");
 tree1_4 = new component(50, 50, "black", 270, 175, "tree_img");
 tree1_5 = new component(50, 50, "black", 420, 70, "tree_img");
 tree1_6 = new component(50, 50, "black", 620, 33, "tree_img");
 tree1_7 = new component(50, 50, "black", 500, 285, "tree_img");
 tree1_8 = new component(50, 50, "black", 300, 265, "tree_img");
 Ftree1_1 = new component(50, 50, "black", 80, 290, "Ftree_img");
 Ftree1_2 = new component(50, 50, "black", 650, 270, "Ftree_img");
 Ftree1_3 = new component(50, 50, "black", 230, 90, "Ftree_img");
 Ftree1_4 = new component(50, 50, "black", 270, 175, "Ftree_img");
 Ftree1_5 = new component(50, 50, "black", 420, 70, "Ftree_img");
 Ftree1_6 = new component(50, 50, "black", 620, 33, "Ftree_img");
 Ftree1_7 = new component(50, 50, "black", 500, 285, "Ftree_img");
 Ftree1_8 = new component(50, 50, "black", 300, 265, "Ftree_img");
 SWPart1 = new component(50, 75, "black", 110, 205.9, "SWP1");
 SWPart2 = new component(75, 50, "black", 535, 230, "SWP2");
 SWPart3 = new component(50, 75, "black", 560, 185, "SWP1");
 SWPart4 = new component(75, 50, "black", 484.5, 230, "SWP2");
 SWPart5 = new component(75, 50, "black", 434.5, 230, "SWP2");
 SWPart6 = new component(50, 75, "black", 110, 182, "SWP1");
 SWPart7 = new component(75, 50, "black", 384.5, 205, "SWP2");
 SWPart8 = new component(75, 50, "black", 384.5, 230, "SWP2");
 SWPart9 = new component(75, 50, "black", 334.5, 230, "SWP2");
 SWPart10 = new component(75, 50, "black", 284.5, 230, "SWP2");
 SWPart11 = new component(75, 50, "black", 234.5, 230, "SWP2");
 SWPart12 = new component(75, 50, "black", 184.5, 230, "SWP2");
 SWPart13 = new component(75, 50, "black", 134.5, 230, "SWP2");
 SWPart14 = new component(50, 75, "black", 334.5, 205, "SWP1");
 SWPart15 = new component(75, 50, "black", 334, 135, "SWP3");
 SWPart16 = new component(50, 75, "black", 334.5, 180.5, "SWP1");
 SWPart17 = new component(75, 50, "black", 384.5, 180, "SWP2");
 SWPart18 = new component(75, 50, "black", 384.5, 135, "SWP4");
 tree2_1 = new component(50, 50, "black", 50, 20, "tree_img");
 tree2_2 = new component(50, 50, "black", 230, 70, "tree_img");
 Ftree2_1 = new component(50, 50, "black", 50, 20, "Ftree_img");
 Ftree2_2 = new component(50, 50, "black", 230, 70, "Ftree_img");
 wall3house1 = new component(270, 10, "#666666", 480, 50, "rec");
 wall3house1_2 = new component(250, 10, "#666666", 490, 60, "rec");
 wall3house2 = new component(10, 90, "#666666", 480, 55, "rec");
 wall3house2_2 = new component(10, 80, "#666666", 490, 60, "rec");
 wall3house3 = new component(10, 90, "#666666", 740, 55, "rec");
 wall3house3_2 = new component(10, 80, "#666666", 730, 60, "rec");
 wall3house4 = new component(105, 10, "#666666", 480, 140, "rec");
 wall3house4_2 = new component(95, 10, "#666666", 490, 130, "rec");
 wall3house4_3 = new component(10, 10, "#666666", 580, 135, "rec");
 wall3house4_4 = new component(110, 20, "#666666", 480, 130, "rec");
 wall3house5 = new component(105, 10, "#666666", 645, 140, "rec");
 wall3house5_2 = new component(95, 10, "#666666", 645, 130, "rec");
 wall3house5_3 = new component(10, 10, "#666666", 640, 135, "rec");
 wall3house5_4 = new component(110, 20, "#666666", 640, 130, "rec");
 wall3house6 = new component(270, 10, "#666666", 480, 140, "rec");
 inside3detect1 = new component(260, 100, "black", 485, 60, "rec");
 floor3house1 = new component(270, 100, "grey", 480, 50, "housefloor4_img");
 roof3house1 = new component(270, 100, "grey", 480, 50, "houseroof2_img");
 roof3house2 = new component(50, 50, "grey", 590, 120, "houseroof2_img");
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
 upgrade1txtinfo6 = new component("30px", "Consolas", "white", 45, upgrade1Y + 105, "text");
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
 max1txt = new component("30px", "Consolas", "white", upgrade1X - 25, upgrade1Y + 30, "text");
 max1txt.font = "20px Consolas";
 max1txt.text = "MAXED";
 infoboard = new component(300, 500, "#63218a", 0, 0, "rec");
 infoboard2 = new component(310, 500, "black", 0, 0, "rec");
 upgradeboard = new component(800, 500, "#451661", 0, 0, "rec");
 upgradetxt = new component("30px", "Consolas", "white", 345, 30, "text");
 upgradetxt.font = "20px Consolas";
 upgradetxt.text = "Upgrade Menu";
 costToRevive = new component("30px", "Consolas", "darkred", 40, 490, "text");
 costToRevive.font = "30px Consolas";
 menuboard = new component(800, 500, "black", 0, 0, "img10");
 formplat = new component(75, 75, "black", 359, 157, "plat");
 formFplat = new component(75, 75, "black", 359, 157, "Fplat");
 border1_5 = new component(800, 390, "black", 0, 0, "bor");
 Fborder1_5 = new component(800, 390, "black", 0, 0, "Fbor");
 DeathForPlayer = new component(800, 500, "black", 0, 0, "DeathScreenPlayer");
 console.log("width" + w);
 console.log("height" + h);
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
this.frameNo = 60;
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
},
stop : function() {
        clearInterval(this.interval);
},
clear : function() {
this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
}
function component(width, height, color ,x ,y, type, radius, outcolor, thickness) {
this.type = type;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.thickness = thickness;
this.outcolor = outcolor;
this.radius = radius;
this.update = function() {
ctx = Board.context;
if (this.type == "text") {
 ctx.font = this.font;
 ctx.fillStyle = color;
 ctx.fillText(this.text, this.x, this.y);
} else {
if (type == "rec") {
this.width = width;
this.height = height;
ctx.fillStyle = color;
ctx.fillRect(this.x, this.y, this.width, this.height);
 }
 if (type == "cir") {
 ctx.beginPath();
 ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI, true);
 ctx.fillStyle = color;
 ctx.fill();
 ctx.lineWidth = thickness;
 ctx.strokeStyle = outcolor;
 ctx.stroke();
 } else {
 if (type == "img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("playerimg");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img5") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("wave1t5");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img5_1") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("Fwave1t5");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "b1") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("bullpic");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img7") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("badguy1img");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img8") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("ammopic1");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img9") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("healthpic1");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "img10") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("menupic");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "rotleft") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("triimgleft");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "rotright") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("triimgright");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "plat") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("1-5platform");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "Fplat") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("1-5Fplatform");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "bor") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("1-5sideborder");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "Fbor") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("1-5sideFborder");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "housefloor1_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("housefloor1");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "houseroof1_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("houseroof1");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "housefloor4_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("housefloor4");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "houseroof2_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("houseroof2");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "tree_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("tree");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
if (type == "Ftree_img") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("Ftrees");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "waveimg5-7") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("wave5t7");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "Fwaveimg5-7") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("Fwave5t7");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "DeathScreenPlayer") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("DeathScr");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "rec-enemypic") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("Rectangle");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "b2") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("bullpic2");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "b3") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("bullpic3");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "b4") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("bullpic4");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "SWP1") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("SWPart1_1");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "SWP2") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("SWPart2_2");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "SWP3") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("SWPart3_3");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "SWP4") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("SWPart4_4");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "UMP") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("UnmutedPic");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
 }
 if (type == "MP") {
 this.width = width;
 this.height = height;
 var img = document.getElementById("MutedPic");
ctx.drawImage(img, this.x, this.y, this.width, this.height);
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
}
var HealthX = 30;
var HealthY = 450;
var HealthWidth = 103;
var HealthHeight = 30;
var Death1 = 0;
var texth;
var word = "Health:";
var hcolor = "Darkgreen";
function Health1() {
 bo = new component(113, 56.5, "black", 25, 428, "rec");
 w1 = new component(5, 48, "black", HealthX - 5, HealthY - 17, "rec");
 w2 = new component(5, 48, "black", HealthX + 103, HealthY - 17, "rec");
 w3 = new component(113, 5, "black", HealthX - 5, HealthY - 22, "rec");
 w4 = new component(113, 5, "black", HealthX - 5, HealthY + 30, "rec");
 g = new component(HealthWidth, HealthHeight, "#812bb3", HealthX, HealthY - 17, "rec");
 texth = new component("30px", "Consolas", "red", HealthX + 2, HealthY - 2, "text");
 base = new component(HealthWidth, HealthHeight, "#63218a", HealthX, HealthY, "rec");
 full = new component(playerHealth, HealthHeight - 5, hcolor, HealthX + 1.5, HealthY + 2.5, "rec");
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
 if (playerHealth > 75) {
 hcolor = "Darkgreen";
 }
 if (playerHealth < 75) {
 hcolor = "green";
 }
 if (playerHealth < 50) {
 hcolor = "yellow";
 }
 if (playerHealth < 25) {
 hcolor = "orange";
 }
 if (playerHealth < 10) {
 hcolor = "red";
 }
 if (playerHealth < 1) {
Death1 = 1;
 }
 if (playerHealth > 1) {
Death1 = 0;
 }
}
var showmessage = 0;
var payback = 30;
var revivecost = 100;
function relive() {
if (Death1 > 0) {
if (money >= revivecost) {
 money -= revivecost;
 playerHealth = 100;
 if (ammo < 50) {
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
ammocrate1picO = new component(20, 20, "yellow", crate1X, crate1Y, "img8");
healthcrate1picO = new component(20, 20, "red", crateh1X, crateh1Y, "img9");
SWeapon1 = new component(10, 10, "orange", cratesw1X, cratesw1Y, "b4");
SWeapon1Box = new component(10, 10, "orange", cratesw1X, cratesw1Y, "rec");
}
var wave = 1;
var oldwave = 1;
var upgrademenu = 0;
function checkwave() {
	if (oldwave != wave){
		upgrademenu = 1;
		oldwave += 1;
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
var insidehouse1 = 0;
var inside2house1 = 0;
var inside3house1 = 0;
function housecontrols() {
if (wave < 5) {
if (box.crashWith(insidedetect1)) {
insidehouse1 = 1;
  }
if (box.crashWith(insidedetect1) == false) {
insidehouse1 = 0; 
  }
if (box.crashWith(inside2detect1)) {
inside2house1 = 1;
  }
if (box.crashWith(inside2detect1) == false) {
inside2house1 = 0; 
  }
 }
if (wave >= 5 && wave < 7) {//gohere4//
if (box.crashWith(inside3detect1)) {
inside3house1 = 1;
  }
if (box.crashWith(inside3detect1) == false) {
inside3house1 = 0; 
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
if (switchy == 0) {
	weapon = 0;
}
if (switchy == 1) {
if (stcget == 1) {
if (stcweapon == 1) {
    weapon = 3;	
   }
  }
 }
}

var keys1 = 0;
function keyswitcher() {
	var checklayout = document.getElementById("layout");
	if (checklayout.checked == true){
    keys1 = 1;
  } else {
    keys1 = 0;
  }
}

function updateGameArea() {
Board.clear();
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
weaponswitch();
keyswitcher();
firehandler();
framerate();
framerate2();
framerate3();
framerate4();
framerate5();
resetfire();
costToRevive.text = "You must have $" + revivecost + " to revive";
playSound();
skipSound();
box.update();
if (fire > 0) {
bullbox.update();
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
if (wave < 5) {
if (BadDeath < 1) {
if (Death1 == 0) {
badguy1.update();
  }
 }
}
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
if (fallseason == 0) {
w1t5.update();
}
if (fallseason == 1) {
Fw1t5.update();
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
if (fallseason == 0) {
formplat.update();
}
if (fallseason == 1) {
formFplat.update();
}
floorhouse1.update();
floor2house1.update();
}
if (wave > 4 && wave < 8) {
wall3house6.update();
inside3detect1.update();
if (fallseason == 0) {
w5t7.update();
}
if (fallseason == 1) {
Fw5t7.update();
}
floor3house1.update();
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
}
if (wave < 5) {
if (BadDeath < 1) {
if (Death1 == 0) {
badguypic1.update();
  }
 }
}
if (wave < 7 && wave > 1) {
if (BadDeath2 < 1) {
if (Death1 == 0) {
badguypic2.update();
  }
 }
}
if (wave > 4 && wave < 7) {
if (BadDeath3 == 0) {
if (Death1 == 0) {
if (box.x < tribox.x) {
trienemyleft.update();
} else {
trienemyright.update();
   }
  } 
 }
}
if (wave > 2 && wave < 5) {
if (BadDeath4 == 0) {
if (Death1 == 0) {
recenemypic1.update();
  }
 }
}
badboxspawn();
badtriboxspawn();
badboxspawn2();
badrecspawn1();
if (cratespawn > 0) {
if (box.crashWith(ammocrate1)) {
if (ammo < 111) {
 cratespawn = 0;
 ammo += 50;
 }
 }
}
if (cratespawn2 > 0) {
if (box.crashWith(healthcrate1)) {
if (playerHealth < 76) {
 cratespawn2 = 0;
 playerHealth += 25;
 }
 }
}
if (Death1 == 0) {
circle.update();
if (menu > 0) {
if (upgrademenu == 0) {
box.newPos();
circle.newPos();
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
if (inside2house1 == 0) {
roof2house1.update();
}
if (insidehouse1 == 0) {
roofhouse1.update();
 }
if (fallseason == 0) {
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
}
if (wave > 4 && wave < 8) {
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
wall3house5_4.update();//gohere3//
if (inside3house1 == 0) {
roof3house2.update();
roof3house1.update();
}
if (fallseason == 0) {
tree2_1.update();
tree2_2.update();
 }
if (fallseason == 1) {
Ftree2_1.update();
Ftree2_2.update();
 }
}
ui.update();
if (wave < 5) {
if (fallseason == 0) {
border1_5.update();
 }
if (fallseason == 1) {
Fborder1_5.update();
 }
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
trienemyright.newPos();
trienemyleft.newPos();
bpic.newPos();
bpic2.newPos();
bpic3.newPos();
bpic4.newPos();
if (wave == 5) {
if (switchpos == 0) {
switchpos = 1;
}
if (switchpos == 1) {
box.x = playerXwave5;
box.y = playerYwave5;
circle.x = playerXwave5 - 3.5;
circle.y = playerYwave5 - 3.5;
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
}
Health1();
checkwave();
name();
waveammoweapon();
ammocrate();
bulletai();
if (pauseGame == 0) {
badai1();
triangleAI();
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
trienemyleft.speedX = 0;
trienemyright.speedX = 0;
tribox.speedY = 0;
trienemyleft.speedY = 0;
trienemyright.speedY = 0;
recenemypic1.speedX = 0;
recbox1.speedX = 0;
recenemypic1.speedY = 0;
recbox1.speedY = 0;
}
housecontrols();
crashhitai1();
countwave();
if (upgrademenu == 1) {
upgradeboard.update();
infoboard2.update();
infoboard.update();
upgradetxt.update();
backbutton.update();
backtxt.update();
backtxtinfo.update();
upgrade1button.update();
if (weaponupgrade1 == 0) {
upgrade1txt.update();
upgrade1txtinfo.update();
upgrade1txtinfo2.update();
upgrade1txtinfo3.update();
upgrade1txtinfo4.update();
upgrade1txtinfo5.update();
upgrade1txtinfo6.update();
 }
if (weaponupgrade1 == 1) {
upgrade1_2txt.update();
upgrade1_2txtinfo.update();
upgrade1_2txtinfo2.update();
upgrade1_2txtinfo3.update();
upgrade1_2txtinfo4.update();
upgrade1_2txtinfo5.update();
}
if (weaponupgrade1 > 1) {
max1txt.update();
}
}
if (pauseGame == 1) {
pausetxt = new component("30px", "Consolas", "white", 345, 30, "text");
pausetxt.font = "20px Consolas";
pausetxt.text = "Pause Menu";
pauseboard = new component(800, 500, "#451661", 0, 0, "rec");
pauseboard.update();
pausetxt.update();
if (specialalert1 == 1) {
alerttxt1 = new component("30px", "Consolas", "white", 300, 60, "text");
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
name();
}
if (menu == 0) {
if (upgrademenu == 0) {
menuboard.update();
 }
}
if (Death1 > 0) {
DeathForPlayer.update();
}
if (showmessage == 1) {
costToRevive.update();
}
if (menu == 1) {
ammo = 160;
menu += 1;
}
if (up == 1) {
 if (touchtop == 0) {
 if (box.speedY >= -playerSpeed) {
 box.speedY -= 0.05;
 circle.speedY -= 0.05;
 } else {
 box.speedY = -playerSpeed;
 circle.speedY = -playerSpeed;
 }
 } else {
 box.speedY = 0;
 circle.speedY = 0;
 }
}
if (down == 1) {
 if (touchbottom == 0){
 if (box.speedY <= playerSpeed) {
 circle.speedY += 0.05;
 box.speedY += 0.05;
 } else {
 box.speedY = playerSpeed;
 circle.speedY = playerSpeed;
 }
 } else {
 box.speedY = 0;
 circle.speedY = 0;
 }
}
if (left == 1) {
 if (touchleft == 0) {
 if (box.speedX >= -playerSpeed) {
 circle.speedX -= 0.05;
 box.speedX -= 0.05;
 } else {
 box.speedX = -playerSpeed;
 circle.speedX = -playerSpeed;
 }
 } else {
 box.speedX = 0;
 circle.speedX = 0;
 }
}
if (right == 1) {
 if (touchright == 0) {
 if (box.speedX <= playerSpeed) {
 circle.speedX += 0.05;
 box.speedX += 0.05;
 } else {
 box.speedX = playerSpeed;
 circle.speedX = playerSpeed;
 }
 } else {
 box.speedX = 0;
 circle.speedX = 0;
 }
}
if (box.crashWith(wallleft)) {
 clearmovel(); 
 touchleft = 1;
}
if (box.crashWith(wallleft) == false) {
 touchleft = 0;
 }
if (box.crashWith(wallright)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wallright) == false) {
 touchright = 0;
 }
if (box.crashWith(wall3)) {
 clearmoveu(); 
 touchtop = 1;
}
if (box.crashWith(wall3) == false) {
 touchtop = 0;
 }
if (box.crashWith(wall4)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall4) == false) {
 touchbottom = 0;
 }
 if (wave < 5) {
 if (box.crashWith(wallhouse2_2) == false) {
 touchright = 0;
 }
 if (box.crashWith(wallhouse3) == false) {
 touchright = 0;
 }
 if (box.crashWith(wallhouse7) == false) {
 touchright = 0;
 }
 if (box.crashWith(wall2house2_2) == false) {
 touchright = 0;
 }
 if (box.crashWith(wall2house3) == false) {
 touchright = 0;
 }
 if (box.crashWith(wall2house7) == false) {
 touchright = 0;
 }
  if (box.crashWith(wallhouse1) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wallhouse4_2) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wallhouse6_2) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wall2house1) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wall2house4_2) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wall2house6_2) == false) {
 touchtop = 0;
 }
 if (box.crashWith(wallhouse1_2) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wallhouse4) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wallhouse6) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wall2house1_2) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wall2house4) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wall2house6) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wallhouse2) == false) {
 touchleft = 0;
 }
 if (box.crashWith(wallhouse3_2) == false) {
 touchleft = 0;
 }
 if (box.crashWith(wallhouse5) == false) {
 touchbottom = 0;
 }
 if (box.crashWith(wall2house2) == false) {
 touchleft = 0;
 }
 if (box.crashWith(wall2house3_2) == false) {
 touchleft = 0;
 }
 if (box.crashWith(wall2house5) == false) {
 touchbottom = 0;
 }
if (box.crashWith(wallhouse1)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wallhouse1_2)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wallhouse2)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wallhouse2_2)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wallhouse3_2)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wallhouse3)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wallhouse4_2)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wallhouse4)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wallhouse5)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wallhouse6_2)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wallhouse6)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wallhouse7)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall2house1)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall2house1_2)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall2house2)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall2house2_2)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall2house3_2)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall2house3)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall2house4_2)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall2house4)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall2house5)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall2house6_2)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall2house6)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall2house7)) {
 clearmover();
 touchright = 1;
}
 }
if (wave >= 5 && wave < 7) {
if (box.crashWith(wall3house1)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall3house1) == false) {
 touchbottom = 0;
 }
if (box.crashWith(wall3house1_2)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall3house1_2) == false) {
 touchtop = 0;
 }
if (box.crashWith(wall3house2)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall3house2) == false) {
 touchright = 0;
 }
if (box.crashWith(wall3house2_2)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall3house2_2) == false) {
 touchleft = 0;
 }
if (box.crashWith(wall3house3)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall3house3) == false) {
 touchleft = 0;
 }
if (box.crashWith(wall3house3_2)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall3house3_2) == false) {
 touchright = 0;
 }
if (box.crashWith(wall3house4)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall3house4) == false) {
 touchtop = 0;
 }
if (box.crashWith(wall3house4_2)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall3house4_2) == false) {
 touchbottom = 0;
 }
if (box.crashWith(wall3house4_3)) {
 clearmovel();
 touchleft = 1;
}
if (box.crashWith(wall3house4_3) == false) {
 touchleft = 0;
 } 
if (box.crashWith(wall3house5)) {
 clearmoveu();
 touchtop = 1;
}
if (box.crashWith(wall3house5) == false) {
 touchtop = 0;
 }
if (box.crashWith(wall3house5_2)) {
 clearmoved();
 touchbottom = 1;
}
if (box.crashWith(wall3house5_2) == false) {
 touchbottom = 0;
 }
if (box.crashWith(wall3house5_3)) {
 clearmover();
 touchright = 1;
}
if (box.crashWith(wall3house5_3) == false) {
 touchright = 0;
 }
 }
}
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
		if (keys1 == 0) {
		if (pauseGame == 0) {
            autoLeft();
			}
		}
            break;
        case 38:
		if (keys1 == 0) {
		if (pauseGame == 0) {
            autoUp();
			}
		}
            break;
        case 39:
		if (keys1 == 0) {
		if (pauseGame == 0) {
            autoRight();
			}
		}
            break;
        case 40:
		if (keys1 == 0) {
		if (pauseGame == 0) {
            autoDown();
			}
		}
            break;
		case 74:
		if (keys1 == 1) {
		if (pauseGame == 0) {
            autoLeft();
			}
		}
            break;
        case 73:
		if (keys1 == 1) {
		if (pauseGame == 0) {
            autoUp();
			}
		}
            break;
        case 76:
		if (keys1 == 1) {
		if (pauseGame == 0) {
            autoRight();
			}
		}
            break;
        case 75:
		if (keys1 == 1) {
		if (pauseGame == 0) {
            autoDown();
			}
		}
            break;
		case 87:
		if (pauseGame == 0) {
		 if (touchtop == 0) {
            moveUp();
			 }
			}
            break;
		case 65:
		if (pauseGame == 0) {
		 if (touchleft == 0) {
            moveLeft();
			 }
			}
            break;
		case 68:
		if (pauseGame == 0) {
		 if (touchright == 0) {
            moveRight();
			 }
			}
            break;
		case 83:
		if (pauseGame == 0) {
		 if (touchbottom == 0) {
            moveDown();
			 }
			}
            break;
		case 82:
            relive();
            break;
	    case 49:
		if (upgrademenu == 0) {
		    swapweap1();
		}
		if (upgrademenu == 1) {
		    upgrade1func();
		}
			break;
		case 50:
		if (upgrademenu == 0) {
		    swapweap2();
		}
			break;
		case 51:
		if (upgrademenu == 0) {
		    swapweap3();
		}
			break;
		case 52:
		if (upgrademenu == 0) {
		    swapweap4();
		}
			break;
		case 27:
		if (keys1 == 0) {
		    backfunc();
		}
			break;
		case 66:
		if (keys1 == 1) {
		    backfunc();
		}
			break;
		case 97:
		if (upgrademenu == 1) {
		    upgrade1func();
		}
		if (upgrademenu == 0) {
		    swapweap1();
		}
		    break;
		case 98:
		if (upgrademenu == 0) {
		    swapweap2();
		}
			break;
		case 99:
		if (upgrademenu == 0) {
		    swapweap3();
		}
			break;
		case 100:
		if (upgrademenu == 0) {
		    swapweap4();
		}
			break;
		case 80:
		    patchinfo();
			break;
		case 77:
		    mutemusic += 1;
			break;
    }
};
document.onkeyup = function(e) {
    switch (e.keyCode) {
		case 87:
            clearmoveu();
            break;
		case 65:
            clearmovel();
            break;
		case 68:
            clearmover();
            break;
		case 83:
            clearmoved();
            break;
		case 82:
            stopshow();
            break;
		case 37:
		if (keys1 == 0) {
            clearAutoL();
		}
            break;
        case 38:
		if (keys1 == 0) {
            clearAutoU();
		}
            break;
        case 39:
		if (keys1 == 0) {
            clearAutoR();
		}
            break;
        case 40:
		if (keys1 == 0) {
            clearAutoD();
		}
            break;
		case 74:
		if (keys1 == 1) {
            clearAutoL();
		}
            break;
        case 73:
		if (keys1 == 1) {
            clearAutoU();
		}
            break;
        case 76:
		if (keys1 == 1) {
            clearAutoR();
		}
            break;
        case 75:
		if (keys1 == 1) {
            clearAutoD();
		}
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
var weaponupgrade1 = 0;
var weapon = 0;
var ammo = 160;
var weapname = "Pistol";
var stcget = 0;
function waveammoweapon() {
if (weapon == 0) {
 weapname = "Pistol";
 PlayerDamageDeal = 20;
 bullrange = 3;
 ammocon = 1;
}
if (weapon == 1) {
if (weaponupgrade1 > 0) {
 weapname = "Hi-Beam";
 PlayerDamageDeal = 25;
 bullrange = 2;
 ammocon = 1;
 }
}
if (weapon == 2) {
if (weaponupgrade1 > 1) {
 weapname = "Zapper";
 PlayerDamageDeal = 35;
 bullrange = 4;
 ammocon = 1;
 }
}
if (weapon == 3) {
if (stcweapon == 1) {
if (stcget == 1) {
 weapname = "Cube";
 PlayerDamageDeal = 40;
 bullrange = 1;
 ammocon = 0.5;
  }
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
UnmutedP = new component(50, 50, "black", 446, 450, "UMP");
MutedP = new component(50, 50, "black", 446, 450, "MP");
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
var spawncrate2pos = Math.floor(Math.random() * 2);
var spawncrate1pos = Math.floor(Math.random() * 2);
var count = 0;
var countSwitch1 = 0;
var countSwitch2 = 0;
var countSwitch3 = 0;
var countSwitch4 = 0;
var numofbad = 10;
var moneyperwave = Math.floor(Math.random() * 4) + 7;
var moneyperendie = Math.floor(Math.random() * 2) + 1;
var moneyperendie2 = Math.floor(Math.random() * 5) + 2;
var moneyperendie3 = Math.floor(Math.random() * 8) + 3;
var moneyperendie4 = Math.floor(Math.random() * 6) + 3;
var cratespawn = 0;
var cratespawn2 = 0
var chanceofdrop = 3;
var chanceofdrop2 = 3;
var chanceofdrop3 = 2;
var chanceofdrop4 = 2.5;
function countwave() {
if (wave > 4 && wave < 8) {
 crate1X = 90;
 crate1Y = 90;
 crateh1X = 250;
 crateh1Y = 40;
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
if (playerHealth < 100) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop) == 1) {
if (cratespawn == 0) {
if (ammo < 160) {
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
if (playerHealth < 100) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop2) == 1) {
if (cratespawn == 0) {
if (ammo < 160) {
cratespawn += 1;
spawncrate1pos = Math.floor(Math.random() * 2);
  }
 }
}
if (wave > 4 && wave < 7) {
if (spawnbad2pos == 0) {
bad2posX = 20;
bad2posY = 100;
 } else {
bad2posX = 300;
bad2posY = 40; 
 }
} else {
bad2posX = 20;
bad2posY = 100;
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
if (playerHealth < 100) {
cratespawn2 += 1;
spawncrate2pos = Math.floor(Math.random() * 2);
  }
 }
}
if (Math.floor(Math.random() * chanceofdrop4) == 1) {
if (cratespawn == 0) {
if (ammo < 160) {
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
if (playerHealth < 100) {
cratespawn2 += 1;
  }
 } 
}
if (Math.floor(Math.random() * chanceofdrop3) == 1) {
if (cratespawn == 0) {
if (ammo < 160) {
cratespawn += 1;
   }
  }
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
numofbad = 20;
moneyperendie = Math.floor(Math.random() * 3) + 2;
  }
 if (wave == 4) {
revivecost = 150;
moneyperendie4 = Math.floor(Math.random() * 4) + 7;
  }
 if (wave == 5) {
numofbad = 25;
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
			badguypic1.speedY = 2;
			badguy1.speedY = 2;
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
			badguypic1.speedY = 2;
			badguy1.speedY = 2;
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
			badguypic1.speedY = 2;
			badguy1.speedY = 2;
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
			badguypic1.speedY = 2;
			badguy1.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
			badguypic2.speedY = 2;
			badguy2.speedY = 2;
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
	}	//gohere//
	 }
	}
	if (BadDeath3 < 1) {
	if (tribox.crashWith(wallright)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
		    tribox.speedX = -1;
			trienemyleft.speedX = -1;
			trienemyright.speedX = -1;
		}
	}
	if (tribox.crashWith(wallright) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wallleft)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
		    tribox.speedX = 1;
			trienemyleft.speedX = 1;
			trienemyright.speedX = 1;
		}
	}
	if (tribox.crashWith(wallleft) == false) {
	  touchwallleftbad3 = 0;
	}
	if (tribox.crashWith(wall3)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
		    tribox.speedY = 1;
			trienemyleft.speedY = 1;
			trienemyright.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall4)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
		    tribox.speedY = -1;
			trienemyleft.speedY = -1;
			trienemyright.speedY = -1;
		}
	}
	if (tribox.crashWith(wall4) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house1)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemyleft.speedY = -1;
			trienemyright.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house1) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house1_2)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemyleft.speedY = 1;
			trienemyright.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house1_2) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall3house2)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = -1;
			trienemyleft.speedX = -1;
			trienemyright.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house2) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wall3house2_2)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemyleft.speedX = 1;
			trienemyright.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house2_2) == false) {
	  touchwallleftbad3 = 0;
	}
	if (tribox.crashWith(wall3house3)) {
		touchwallrightbad3 = 1;
		if (touchwallrightbad3 == 1) {
			tribox.speedX = 1;
			trienemyleft.speedX = 1;
			trienemyright.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house3) == false) {
	  touchwallrightbad3 = 0;
	}
	if (tribox.crashWith(wall3house3_2)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemyleft.speedX = -1;
			trienemyright.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house3_2) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall3house4)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemyleft.speedY = 1;
			trienemyright.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house4) == false) {
	  touchwallupbad3 = 0;
	}
	if (tribox.crashWith(wall3house4_2)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemyleft.speedY = -1;
			trienemyright.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house4_2) == false) {
	  touchwalldownbad3 = 0;
	}
	if (tribox.crashWith(wall3house4_3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = 1;
			trienemyleft.speedX = 1;
			trienemyright.speedX = 1;
		}
	}
	if (tribox.crashWith(wall3house4_3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (tribox.crashWith(wall3house5)) {
		touchwallupbad3 = 1;
		if (touchwallupbad3 == 1) {
			tribox.speedY = 1;
			trienemyleft.speedY = 1;
			trienemyright.speedY = 1;
		}
	}
	if (tribox.crashWith(wall3house5) == false) {
	  touchwallupbad3 = 0;
	}
    if (tribox.crashWith(wall3house5_2)) {
		touchwalldownbad3 = 1;
		if (touchwalldownbad3 == 1) {
			tribox.speedY = -1;
			trienemyleft.speedY = -1;
			trienemyright.speedY = -1;
		}
	}
	if (tribox.crashWith(wall3house5_2) == false) {
	  touchwalldownbad3 = 0;
	}
    if (tribox.crashWith(wall3house5_3)) {
		touchwallleftbad3 = 1;
		if (touchwallleftbad3 == 1) {
			tribox.speedX = -1;
			trienemyleft.speedX = -1;
			trienemyright.speedX = -1;
		}
	}
	if (tribox.crashWith(wall3house5_3) == false) {
	  touchwallleftbad3 = 0;
	}
    if (inside3house1 == 0) {
	if (tribox.crashWith(wall3house6)) {
		touchwallupbad2 = 1;
		if (touchwallupbad2 == 1) {
			tribox.speedY = 1;
			trienemyleft.speedY = 1;
			trienemyright.speedY = 1;
		}
	 }
	}	//gohere2//
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
			recenemypic1.speedY = 2;
			recbox1.speedY = 2;
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
			recenemypic1.speedY = 2;
			recbox1.speedY = 2;
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
			recenemypic1.speedY = 2;
			recbox1.speedY = 2;
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
			recenemypic1.speedY = 2;
			recbox1.speedY = 2;
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
if (wave < 5) {
if (BadDeath > 0) {
if (badguy1.x > badpos1.x) {
badguypic1.speedX = -5;
badguy1.speedX = -5;
}
if (badguy1.x < badpos1.x) {
badguypic1.speedX = 5;
badguy1.speedX = 5;
}
if (badguy1.crashWith(badpos1)) {
badguypic1.speedX = 0;
badguypic1.speedY = 0;
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
badguypic1.speedY = -5;
badguy1.speedY = -5;
}
if (badguy1.y < badpos1.y) {
badguypic1.speedY = 5;
badguy1.speedY = 5;
}
 }
if (BadDeath < 1) {
if (menu > 0) {
if (badguy1.crashWith(wallright) == false) {
if (badguy1.crashWith(wallleft) == false) {
if (badguy1.crashWith(wall3) == false) {
if (badguy1.crashWith(wall4) == false) {
if (badguy1.x + 5 > box.x + 23) {
    sidebad1 = 0;
}
if (badguy1.x < box.x - 23) {
    sidebad1 = 1;
}
if (sidebad1 == 0) {
if (badguy1.x + 5 > box.x + 23) {
badguypic1.speedX = negbadspeedai1;
badguy1.speedX = negbadspeedai1;
if (Badhealth1 <= 50) {
badguypic1.speedX = negbadhurtspeedai1;
badguy1.speedX = negbadhurtspeedai1;
  }
 }
}
if (sidebad1 == 1) {
if (badguy1.x < box.x - 23) {
badguypic1.speedX = badspeedai1;
badguy1.speedX = badspeedai1;
if (Badhealth1 <= 50) {
badguypic1.speedX = badhurtspeedai1;
badguy1.speedX = badhurtspeedai1;
  }
 }
}
if (badguy1.y > box.y) {
badguypic1.speedY = negbadspeedai1;
badguy1.speedY = negbadspeedai1;
if (Badhealth1 <= 50) {
badguypic1.speedY = negbadhurtspeedai1;
badguy1.speedY = negbadhurtspeedai1;
 }
}
if (badguy1.y < box.y) {
badguypic1.speedY = badspeedai1;
badguy1.speedY = badspeedai1;
if (Badhealth1 <= 50) {
badguypic1.speedY = badhurtspeedai1;
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
playerHealth -= Bad1DamageDeal;
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
if (wave < 7 && wave > 1) {
if (BadDeath2 > 0) {
if (badguy2.x > badpos2.x) {
badguypic2.speedX = -5;
badguy2.speedX = -5;
}
if (badguy2.x < badpos2.x) {
badguypic2.speedX = 5;
badguy2.speedX = 5;
}
if (badguy2.crashWith(badpos2)) {
badguypic2.speedX = 0;
badguypic2.speedY = 0;
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
badguypic2.speedY = -5;
badguy2.speedY = -5;
}
if (badguy2.y < badpos2.y) {
badguypic2.speedY = 5;
badguy2.speedY = 5;
}
 }
if (BadDeath2 < 1) {
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
if (badguy2.x + 5 > box.x + 23) {
    sidebad2 = 0;
}
if (badguy2.x < box.x - 23) {
    sidebad2 = 1;
}
if (sidebad2 == 0) {
if (badguy2.x + 5> box.x + 23) {
badguypic2.speedX = negbadspeedai2;
badguy2.speedX = negbadspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedX = negbadhurtspeedai2;
badguy2.speedX = negbadhurtspeedai2;
  }
 }
}
if (sidebad2 == 1) {
if (badguy2.x < box.x - 23) {
badguypic2.speedX = badspeedai2;
badguy2.speedX = badspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedX = badhurtspeedai2;
badguy2.speedX = badhurtspeedai2;
  }
 }
}
if (badguy2.y > box.y) {
badguypic2.speedY = negbadspeedai2;
badguy2.speedY = negbadspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedY = negbadhurtspeedai2;
badguy2.speedY = negbadhurtspeedai2;
 }
}
if (badguy2.y < box.y) {
badguypic2.speedY = badspeedai2;
badguy2.speedY = badspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedY = badhurtspeedai2;
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
if (badguy2.x + 5 > box.x + 23) {
    sidebad2 = 0;
}
if (badguy2.x < box.x - 23) {
    sidebad2 = 1;
}
if (sidebad2 == 0) {
if (badguy2.x + 5> box.x + 23) {
badguypic2.speedX = negbadspeedai2;
badguy2.speedX = negbadspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedX = negbadhurtspeedai2;
badguy2.speedX = negbadhurtspeedai2;
  }
 }
}
if (sidebad2 == 1) {
if (badguy2.x < box.x - 23) {
badguypic2.speedX = badspeedai2;
badguy2.speedX = badspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedX = badhurtspeedai2;
badguy2.speedX = badhurtspeedai2;
  }
 }
}
if (badguy2.y > box.y) {
badguypic2.speedY = negbadspeedai2;
badguy2.speedY = negbadspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedY = negbadhurtspeedai2;
badguy2.speedY = negbadhurtspeedai2;
 }
}
if (badguy2.y < box.y) {
badguypic2.speedY = badspeedai2;
badguy2.speedY = badspeedai2;
if (Badhealth2 <= 50) {
badguypic2.speedY = badhurtspeedai2;
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
playerHealth -= Bad2DamageDeal;
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
var Bad3DamageDeal = 0.15;
function badtriboxspawn() {
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
if (wave > 4 && wave < 7) {
if (BadDeath3 > 0) {
if (tribox.x > tripos1.x) {
trienemyright.speedX = -5;
trienemyleft.speedX = -5;
tribox.speedX = -5;
}
if (tribox.x < tripos1.x) {
trienemyright.speedX = 5;
trienemyleft.speedX = 5;
tribox.speedX = 5;
}
if (tribox.crashWith(tripos1)) {
trienemyright.speedX = 0;
trienemyright.speedY = 0;
trienemyleft.speedX = 0;
trienemyleft.speedY = 0;
tribox.speedY = 0;
tribox.speedX = 0;
Badhealth3 = 120;
BadDeath3 = 0;
badspeedai3 = 1;
negbadspeedai3 = -1;
badhurtspeedai3 = 1.5;
negbadhurtspeedai3 = -1.5;
startTime3 = 0;
 }
if (tribox.y > tripos1.y) {
trienemyright.speedY = -5;
trienemyleft.speedY = -5;
tribox.speedY = -5;
}
if (tribox.y < tripos1.y) {
trienemyright.speedY = 5;
trienemyleft.speedY = 5;
tribox.speedY = 5;
}
 }
if (BadDeath3 < 1) {
if (menu > 0) {
if (tribox.crashWith(wallright) == false) {
if (tribox.crashWith(wallleft) == false) {
if (tribox.crashWith(wall3) == false) {
if (tribox.crashWith(wall4) == false) {
if (tribox.x + 5 > box.x + 23) {
    sidebad3 = 0;
}
if (tribox.x < box.x - 23) {
    sidebad3 = 1;
}
if (sidebad3 == 0) {
if (tribox.x + 5 > box.x + 23) {
trienemyright.speedX = negbadspeedai3;
trienemyleft.speedX = negbadspeedai3;
tribox.speedX = negbadspeedai3;
if (Badhealth3 <= 50) {
trienemyright.speedX = negbadhurtspeedai3;
trienemyleft.speedX = negbadhurtspeedai3;
tribox.speedX = negbadhurtspeedai3;
  }
 }
}
if (sidebad3 == 1) {
if (tribox.x < box.x - 23) {
trienemyright.speedX = badspeedai3;
trienemyleft.speedX = badspeedai3;
tribox.speedX = badspeedai3;
if (Badhealth3 <= 50) {
trienemyright.speedX = badhurtspeedai3;
trienemyleft.speedX = badhurtspeedai3;
tribox.speedX = badhurtspeedai3;
  }
 }
}
if (tribox.y + 5 > box.y) {
trienemyright.speedY = negbadspeedai3;
trienemyleft.speedY = negbadspeedai3;
tribox.speedY = negbadspeedai3;
if (Badhealth3 <= 50) {
trienemyright.speedY = negbadhurtspeedai3;
trienemyleft.speedY = negbadhurtspeedai3;
tribox.speedY = negbadhurtspeedai3;
 }
}
if (tribox.y + 5 < box.y) {
trienemyright.speedY = badspeedai3;
trienemyleft.speedY = badspeedai3;
tribox.speedY = badspeedai3;
if (Badhealth3 <= 50) {
trienemyright.speedY = badhurtspeedai3;
trienemyleft.speedY = badhurtspeedai3;
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
playerHealth -= Bad3DamageDeal;
  }
 }
}
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
var BadDeath4 = 1;
var Badhealth4 = 0;
var Bad4DamageDeal = 0.13;
function badrecspawn1() {
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
if (wave < 5 && wave > 2) {
if (BadDeath4 > 0) {
if (recbox1.x > recpos1.x) {
recenemypic1.speedX = -5;
recbox1.speedX = -5;
}
if (recbox1.x < recpos1.x) {
recenemypic1.speedX = 5;
recbox1.speedX = 5;
}
if (recbox1.crashWith(recpos1)) {
recenemypic1.speedX = 0;
recenemypic1.speedY = 0;
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
recenemypic1.speedY = -5;
recbox1.speedY = -5;
}
if (recbox1.y < recpos1.y) {
recenemypic1.speedY = 5;
recbox1.speedY = 5;
}
 }
if (BadDeath4 < 1) {
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
playerHealth -= Bad4DamageDeal;
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
var fire = 0;
var fireR = 0;
var fireL = 0;
var fireU = 0;
var fireD = 0;
var ammocon = 1;
function shootUp() {
if (Death1 == 0) {
if (fire == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireU += 1;
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
if (fire == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireD += 1;
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
if (fire == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireL += 1;
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
if (fire == 0) {
if (ammo > 0) {
if (box.crashWith(bullbox)) {
fire += 1;
fireR += 1;
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
if (fire < 1) {
if (-10 + bullbox.x > box.x) {
	bullbox.speedX = -5;
	bpic.speedX = -5;
	bpic2.speedX = -5;
	bpic3.speedX = -5;
	bpic4.speedX = -5;
}
if (-10 + bullbox.x < box.x) {
	bullbox.speedX = 5;
	bpic.speedX = 5;
	bpic2.speedX = 5;
	bpic3.speedX = 5;
	bpic4.speedX = 5;
}
if (box.crashWith(bullbox)) {
	bullbox.speedX = 0;
	bpic.speedX = 0;
	bpic2.speedX = 0;
	bpic3.speedX = 0;
	bpic4.speedX = 0;
 }
if (-10 + bullbox.y > box.y) {
	bullbox.speedY = -5;
	bpic.speedY = -5;
	bpic2.speedY = -5;
	bpic3.speedY = -5;
	bpic4.speedY = -5;
}
if (-10 + bullbox.y < box.y) {
	bullbox.speedY = 5;
	bpic.speedY = 5;
	bpic2.speedY = 5;
	bpic3.speedY = 5;
	bpic4.speedY = 5;
}
if (box.crashWith(bullbox)) {
	bullbox.speedY = 0;
	bpic.speedY = 0;
	bpic2.speedY = 0;
	bpic3.speedY = 0;
	bpic4.speedY = 0;
 }
}
if (fire > 0) {
 if (fireL > 0) {
  bullbox.speedX -= bullrange;
  bullbox.speedY = 0;
  bpic.speedX -= bullrange;
  bpic.speedY = 0;
  bpic2.speedX -= bullrange;
  bpic2.speedY = 0;
  bpic3.speedX -= bullrange;
  bpic3.speedY = 0;
  bpic4.speedX -= bullrange;
  bpic4.speedY = 0;
  bullettime += 0.5;
  }
 if (fireR > 0) {
  bullbox.speedX += bullrange;
  bullbox.speedY = 0;
  bpic.speedX += bullrange;
  bpic.speedY = 0;
  bpic2.speedX += bullrange;
  bpic2.speedY = 0;
  bpic3.speedX += bullrange;
  bpic3.speedY = 0;
  bpic4.speedX += bullrange;
  bpic4.speedY = 0;
  bullettime += 0.5;
  }
  if (fireU > 0) {
  bullbox.speedX = 0;
  bullbox.speedY -= bullrange;
  bpic.speedY -= bullrange;
  bpic.speedX = 0;
  bpic2.speedY -= bullrange;
  bpic2.speedX = 0;
  bpic3.speedY -= bullrange;
  bpic3.speedX = 0;
  bpic4.speedY -= bullrange;
  bpic4.speedX = 0;
  bullettime += 0.5;
  }
  if (fireD > 0) {
  bullbox.speedX = 0;
  bullbox.speedY += bullrange;
  bpic.speedY += bullrange;
  bpic.speedX = 0;
  bpic2.speedY += bullrange;
  bpic2.speedX = 0;
  bpic3.speedY += bullrange;
  bpic3.speedX = 0;
  bpic4.speedY += bullrange;
  bpic4.speedX = 0;
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
if (bullbox.crashWith(wall3house1) || bullbox.crashWith(wall3house1_2) || bullbox.crashWith(wall3house2) || bullbox.crashWith(wall3house2_2) || bullbox.crashWith(wall3house3) || bullbox.crashWith(wall3house3_2)) {
fire = 0;
  }
 }
}
var bullettime = 0;
var touchleft = 0;
var touchright = 0;
var touchtop = 0;
var touchbottom = 0;
var upE = 0;
var downE = 0;
var leftE = 0;
var rightE = 0;
var up = 0;
var down = 0;
var left = 0;
var right = 0;
function moveUp() {
up = 1;
upE = 1;
}
function moveDown() {
down = 1;
downE = 1;
}
function moveLeft() {
left = 1;
leftE = 1;
}
function moveRight() {
right = 1;
rightE = 1;
}
function clearmoveu() {
if (upE > 0) {
 up = 0;
 upE = 0;
circle.speedY = 0;
box.speedY = 0;
 }
}
function clearmoved() {
if (downE > 0) {
 down = 0;
 downE = 0;
circle.speedY = 0;
box.speedY = 0;
 }
}
function clearmovel() {
if (leftE > 0) {
 left = 0;
 leftE = 0;
circle.speedX = 0;
box.speedX = 0;
 }
}
function clearmover() {
if (rightE > 0) {
 right = 0;
 rightE = 0;
circle.speedX = 0;
box.speedX = 0;
 }
}
var firesoundstart = 0;
var sound = 0
var work = 1;
function playSound() {
if (work == 1) {
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
}
if (firesoundstart > 0) {
if (menu > 0) {
document.getElementById('firesound').play();
  }
 }
}
	
function SetVolume(val) {
if (mutemusic == 0) {
var player = document.getElementById('level1');
player.volume = val / 100;
var player2 = document.getElementById('level2');
player2.volume = val / 100;
var menus = document.getElementById('Menu');
menus.volume = val / 100;
var Dead = document.getElementById('Death');
Dead.volume = val / 100;
var fireVolume = document.getElementById('firesound');
fireVolume.volume = val / 300;
 }
}
var mutemusic = 0;
function mute() {
var val = 0;
val = document.getElementById("volume").value;
if (mutemusic == 1) {
var player = document.getElementById('level1');
player.volume = 0 / 100;
var player2 = document.getElementById('level2');
player2.volume = 0 / 100;
var menus = document.getElementById('Menu');
menus.volume = 0 / 100;
var Dead = document.getElementById('Death');
Dead.volume = 0 / 100;
var fireVolume = document.getElementById('firesound');
fireVolume.volume = 0 / 300;
 }
if (mutemusic == 0) {
var player = document.getElementById('level1');
player.volume = val / 100;
var player2 = document.getElementById('level2');
player2.volume = val / 100;
var menus = document.getElementById('Menu');
menus.volume = val / 100;
var Dead = document.getElementById('Death');
Dead.volume = val / 100;
var fireVolume = document.getElementById('firesound');
fireVolume.volume = val / 300;
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
 firesound.pause();
 firesound.currentTime = 0;
 }
 if (Death1 > 0) {
 level1.pause();
 level1.currentTime = 0;
 level2.pause();
 level2.currentTime = 0;
 firesound.pause();
 firesound.currentTime = 0;
 Menu.pause();
 Menu.currentTime = 0;
 }
 if (Death1 == 0) {
 Death.pause();
 Death.currentTime = 0;
 }
 if (wave == 5) {
 level1.pause();
 level1.currentTime = 0;
 }
 if (wave == 7) {
 level2.pause();
 level2.currentTime = 0;
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
}

var vaultShow = 0;//weapon vault function here//

function statscommand() {
 statstxt = new component("30px", "Consolas", "white", 45, upgrade1Y + 0, "text");
 statstxt.font = "15px Consolas";
 statstxt.text = "Stats:";
 stat1 = new component("30px", "Consolas", "white", 45, upgrade1Y + 15, "text");
 stat1.font = "15px Consolas";
 stat1.text = "Name: " + weapname;
 stat1_2 = new component("30px", "Consolas", "white", 45, upgrade1Y + 30, "text");
 stat1_2.font = "15px Consolas";
 stat1_2.text = "Damage: " + PlayerDamageDeal;
 stat1_3 = new component("30px", "Consolas", "white", 45, upgrade1Y + 45, "text");
 stat1_3.font = "15px Consolas";
 stat1_3.text = "Range: " + bullrange;
 stat1_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
 stat1_4.font = "15px Consolas";
 stat1_4.text = "Special: Nothing";
 stat2_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
 stat2_4.font = "15px Consolas";
 stat2_4.text = "Special: Slows Enemies";
 stat3_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
 stat3_4.font = "15px Consolas";
 stat3_4.text = "Special: Nothing";
 stat4_4 = new component("30px", "Consolas", "white", 45, upgrade1Y + 60, "text");
 stat4_4.font = "15px Consolas";
 stat4_4.text = "Special: Uses Less Ammo";
if (pauseGame == 1) {
statstxt.update();
stat1.update();
stat1_2.update();
stat1_3.update();
if (weapon == 0) {
stat1_4.update();
 }
if (weapon == 1) {
stat2_4.update();
 }
if (weapon == 2) {
stat3_4.update();
 }
if (weapon == 3) {
stat4_4.update();
 }
 }
}

var locationV = "Monty Forest Cabins";
var namebX = 620;
var namebY = 450;
var ammocheat = "moreammo";
var healthcheat = "morehealth";
var wavebonus = "ryanmace";
var testwave = "test";
var resetcheat = "reset";
var fullcheat = "FULLYMAXED";
var weapv = "vault";
var beginning = "story";
function name() {
 var nameg = "Name:"
 var name = document.getElementById('name');
 namef = new component("30px", "Consolas", "white", namebX, namebY, "text");
 m = new component(300, 20, "#63218a", namebX - 5, namebY - 15, "rec");
 namef.font="20px Consolas";
 namef.text=nameg + name.value;
 locationN = new component("30px", "Consolas", "white", namebX - 40, namebY + 45, "text");
 locationN.font="12px Consolas";
 locationN.text= "Location: " + locationV;
 m.update();
 namef.update();
 locationN.update();
 if (wave < 5) {
 locationV = "Monty Forest Cabins";
 }
 if (wave >= 5 && wave < 7) {
 locationV = "Monty Trailer Park";
 }
 if (name.value == ammocheat) {
 ammo = 160;
 }
 if (name.value == healthcheat) {
 playerHealth = 100;
 }
 if (name.value == fullcheat) {
 playerHealth = 100;
 ammo = 160;
 }
 if (name.value == wavebonus) {
 wave = 9000;
 oldwave = 9000;
 name.value = "";
 }
 if (name.value == beginning) {
 wave = 1;
 oldwave = 1;
 count = 0;
 pauseGame = 0;
 money = 50;
 ammo = 160;
 playerHealth = 100;
 weaponupgrade1 = 0;
 backSwitch = 0;
 weapon = 0;
 bullbox = new component(10, 10, "orange", 400, 180, "rec");
 bpic = new component(10, 10, "orange", 400, 180, "b1");
 bpic2 = new component(10, 10, "orange", 400, 180, "b2");
 bpic3 = new component(10, 10, "orange", 400, 180, "b3");
 box = new component(25, 25, "black", playerX, playerY, "rec");
 circle = new component(32, 32, "darkblue", playerX - 3.5, playerY - 3.5, "img");
 name.value = "";
 }
 if (name.value == weapv) {
 vaultShow = 1;
 }
 if (name.value != weapv) {
 vaultShow = 0;
 }
 if (name.value == testwave) {
 wave = 5;
 oldwave = 5;
 weaponupgrade1 = 0;
 backSwitch = 0;
 name.value = "FULLYMAXED";
 }
 if (name.value == resetcheat) {
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
if (switchy == -1) {
switchy = 0;
}
if (stcweapon == 1) {
switchy += 1;
 }
if (stcweapon == 0) {
switchy = 0;
 }
}
function swapweap2() {
if (weaponupgrade1 > 0) {
if (stcweapon == 1) {
    switchy = -1;
}
    weapon = 1;
 }
}
function swapweap3() {
if (weaponupgrade1 > 1) {
if (stcweapon == 1) {
    switchy = -1;
}
    weapon = 2;
 }
}

function swapweap4() { //goherenow//

}
var pauseGame = 0;
var backSwitch = 0;
function backfunc() {
   backSwitch = 0;
   if (specialalert1 == 0) {
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
   if (backSwitch == 0) {
   if (upgrademenu == 0) {
   if (menu > 0) {
   pauseGame += 1;
     }
    }
   }
	if (Death1 > 0) {
	document.location.reload(true);
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
