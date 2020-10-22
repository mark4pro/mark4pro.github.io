var maxLevel = 5;
var level = 1;
var Dead = 0;
var won = 0;
var firef = 0;
function startGame() {
player = new component(30, 30, "red", 50, 150, "rec");
player2 = new component(30, 30, "blue", 400, 150, "rec");
player3 = new component(30, 30, "purple", 400, 150, "rec");
wall = new component(10, 500, "darkred", -8, 0, "rec");
wall2 = new component(10, 500, "darkred", 498, 0, "rec");
wall4 = new component(500, 1, "darkred", 0, 299, "rec");
wall3 = new component(500, 1, "darkred", 0, 0, "rec");
wall5 = new component(5, 50, "darkred", 255, 0, "rec");
wall5_1 = new component(5, 50, "darkred", 250, 0, "rec");
wall5_2 = new component(6, 5, "darkred", 252, 45, "rec");
wall6 = new component(5, 50, "darkred", 315, 0, "rec");
wall6_1 = new component(5, 50, "darkred", 310, 0, "rec");
wall6_2 = new component(6, 5, "darkred", 312, 45, "rec");
wall7 = new component(182, 145, "darkred", 0, 0, "rec");
wall7_1 = new component(5, 145, "darkred", 182, 0, "rec");
wall8 = new component(282, 145, "darkred", 227, 0, "rec");
wall8_1 = new component(5, 145, "darkred", 225, 0, "rec");
wall8_2 = new component(5, 50, "darkred", 225, 0, "rec");
wall8_3 = new component(5, 55, "darkred", 225, 90, "rec");
wall8_4 = new component(175, 5, "darkred", 225, 140, "rec");
wall8_5 = new component(5, 55, "darkred", 395, 90, "rec");
wall8_6 = new component(300, 5, "darkred", 225, 45, "rec");
wall8_7 = new component(175, 5, "darkred", 225, 90, "rec");
wall8_8 = new component(215, 5, "black", 225, 140, "rec");
wall9 = new component(400, 5, "darkred", 0, 185, "rec");
wall9_1 = new component(400, 5, "darkred", 0, 190, "rec");
wall9_2 = new component(5, 5, "darkred", 395, 187.5, "rec");
ammo = new component(10, 10, "lightblue", 280, 20, "rec");
bullet = new component(10, 10, "orange", 20 + player.x, 10 + player.y, "rec");
bullet2 = new component(10, 10, "orange", 20 + player.x, 10 + player.y, "rec");
thank = new component("40px", "Consolas", "white", 500/2, 300/2-20, "text", "Thanks for playing!", "center");
thanktxt = new component("40px", "Consolas", "white", 500/2, 300/2+20, "text", "Hit OK to restart...", "center");
death = new component("50px", "Consolas", "white", 500/2, 300/2-20, "text", "YOU DIED!", "center");
deathtxt = new component("50px", "Consolas", "white", 500/2, 300/2+20, "text", "Hit OK...", "center");
win = new component("50px", "Consolas", "white", 500/2, 300/2-20, "text", "You win!", "center");
wintxt = new component("50px", "Consolas", "white", 500/2, 300/2+20, "text", "Hit OK...", "center");
window.addEventListener('resize', resizeHandler);
resizeHandler();
myGameArea.start();
updateGameArea();
}

function Ok() {
if (won == 1) {
if (level == (maxLevel+1)) {
level = 1;
} else {
level += 1;
}
firef = 0;
won = 0;
Dead = 1;
}
if (Dead == 1) {
if (level == 1) {
player.x = 50;
player.y = 150;
player.speedX = 0;
player.speedY = 0;
player2.x = 400;
player2.y = 150;
player2.speedX = 0;
player2.speedY = 0;
ammo.x = 280;
ammo.y = 20;
//change level objects//
wall.width = 10;
wall.height = 500;
wall.x = -8;
wall.y = 0;
wall2.width = 10;
wall2.height = 500;
wall2.x = 498;
wall2.y = 0;
wall3.width = 500;
wall3.height = 1;
wall3.x = 0;
wall3.y = 0;
wall4.width = 500;
wall4.height = 1;
wall4.x = 0;
wall4.y = 299;
wall5.width = 5;
wall5.height = 50;
wall5.x = 255;
wall5.y = 0;
wall5_1.width = 5;
wall5_1.height = 50;
wall5_1.x = 250;
wall5_1.y = 0;
wall5_2.width = 6;
wall5_2.height = 5;
wall5_2.x = 252;
wall5_2.y = 45;
wall6.width = 5;
wall6.height = 50;
wall6.x = 315;
wall6.y = 0;
wall6_1.width = 5;
wall6_1.height = 50;
wall6_1.x = 310;
wall6_1.y = 0;
wall6_2.width = 6;
wall6_2.height = 5;
wall6_2.x = 312;
wall6_2.y = 45;
wall8_1.color = "darkred";
wall8_8.color = "darkred";
}
if (level == 2) {
player.x = 50;
player.y = 150;
player2.x = 400;
player2.y = 150;
ammo.x = 201;
ammo.y = 20;
//change level objects//
wall.width = 40;
wall.height = 500;
wall.x = 0;
wall.y = 0;
wall2.width = 100;
wall2.height = 500;
wall2.x = 440;
wall2.y = 0;
wall3.width = 500;
wall3.height = 10;
wall3.x = 0;
wall3.y = 0;
wall4.width = 500;
wall4.height = 200;
wall4.x = 0;
wall4.y = 185;
wall7.width = 182;
wall7.height = 145;
wall7.x = 0;
wall7.y = 0;
wall7_1.width = 5;
wall7_1.height = 145;
wall7_1.x = 182;
wall7_1.y = 0;
wall8.width = 282;
wall8.height = 145;
wall8.x = 227;
wall8.y = 0;
wall8_1.width = 5;
wall8_1.height = 145;
wall8_1.x = 225;
wall8_1.y = 0;
}
if (level == 3) {
player.x = 190;
player.y = 20;
player2.x = 400;
player2.y = 150;
ammo.x = 201;
ammo.y = 210;
//change level objects//
wall.width = 182;
wall.height = 500;
wall.x = 0;
wall.y = 0;
wall2.width = 100;
wall2.height = 500;
wall2.x = 440;
wall2.y = 0;
wall3.width = 500;
wall3.height = 10;
wall3.x = 0;
wall3.y = 0;
wall4.width = 500;
wall4.height = 200;
wall4.x = 0;
wall4.y = 235;
wall8.width = 282;
wall8.height = 145;
wall8.x = 227;
wall8.y = 0;
wall8_1.width = 5;
wall8_1.height = 145;
wall8_1.x = 225;
wall8_1.y = 0;
wall8_1.color = "black";
wall8_2.width = 5;
wall8_2.height = 50;
wall8_2.x = 225;
wall8_2.y = 0;
wall8_3.width = 5;
wall8_3.height = 55;
wall8_3.x = 225;
wall8_3.y = 90;
wall8_4.width = 175;
wall8_4.height = 5;
wall8_4.x = 225;
wall8_4.y = 140;
wall8_5.width = 5;
wall8_5.height = 55;
wall8_5.x = 395;
wall8_5.y = 90;
wall8_6.width = 300;
wall8_6.height = 5;
wall8_6.x = 225;
wall8_6.y = 45;
wall8_7.width = 175;
wall8_7.height = 5;
wall8_7.x = 225;
wall8_7.y = 90;
wall8_8.width = 215;
wall8_8.height = 5;
wall8_8.x = 225;
wall8_8.y = 140;
wall8_8.color = "black";
wall9.width = 400;
wall9.height = 5;
wall9.x = 0;
wall9.y = 185;
wall9_1.width = 400;
wall9_1.height = 5;
wall9_1.x = 0;
wall9_1.y = 190;
wall9_2.width = 5;
wall9_2.height = 5;
wall9_2.x = 395;
wall9_2.y = 187.5;
}
if (level == 4) {
player.x = 190;
player.y = 20;
player2.x = 400;
player2.y = 150;
player3.x = 400;
player3.y = 80;
player3.speedX = 0;
player3.speedY = 0;
ammo.x = 400;
ammo.y = 120;
}
if (level == 5) {
player.x = 20;
player.y = 20;
player2.x = 400;
player2.y = 150;
player3.x = 400;
player3.y = 80;
player3.speedX = 0;
player3.speedY = 0;
ammo.x = 400;
ammo.y = 120;
//change level objects//
wall.width = 10;
wall.height = 500;
wall.x = 0;
wall.y = 0;
wall2.width = 10;
wall2.height = 500;
wall2.x = 490;
wall2.y = 0;
wall3.width = 500;
wall3.height = 10;
wall3.x = 0;
wall3.y = 0;
wall4.width = 500;
wall4.height = 10;
wall4.x = 0;
wall4.y = 290;
}
Dead = 0;
}
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
this.context = this.canvas.getContext("2d");
this.canvas.className = "unselectable";
myGameArea.canvas.width = 500;
myGameArea.canvas.height = 300;
this.context.imageSmoothingEnabled = false;
document.body.insertBefore(this.canvas, document.body.childNodes[0]);
this.frameNo = 0;
this.interval = setInterval(updateGameArea, 10);
},
clear : function() {
this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
stop : function() {
clearInterval(this.interval);
}
}
var ctx = myGameArea.context;

function resizeHandler() {
var nativeWidth = 500; 
var nativeHeight = 300;
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
var scaleFillNativeWidth = deviceWidth / nativeWidth;
var scaleFillNativeHeight = deviceHeight / nativeHeight;
myGameArea.canvas.width = deviceWidth;
myGameArea.canvas.height = deviceHeight;
ctx = myGameArea.canvas.getContext("2d");
ctx.setTransform(scaleFillNativeWidth,0,0,scaleFillNativeHeight,0,0);
console.log("Scale Fill: W: " + scaleFillNativeWidth + " H: " + scaleFillNativeHeight);
}

function component(width, height, color, x, y, type, text, align) {
this.width = width;
this.height = height;
this.color = color;
this.x = x;
this.y = y;
this.type = type;
this.text = text;
this.align = align;
this.speedX = 0;
this.speedY = 0;
this.update = function() {
if (this.type == "text") {
ctx.textAlign = this.align;
ctx.font = this.width + " " + this.height;
ctx.fillStyle = this.color;
ctx.fillText(this.text, this.x, this.y);
}
if (this.type == "rec") {
ctx.fillStyle = this.color;
ctx.fillRect(this.x, this.y, this.width, this.height);
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

function updateGameArea() {
myGameArea.clear();
if (won == 0) {
if (Dead == 0) {
if (firef == 1) {
clearmove();
}
if (level < (maxLevel+1)) {
if (player.crashWith(ammo)) {
fire();
}
if (firef == 0) {
ammo.update();
}
wall.update();
wall2.update();
wall3.update();
wall4.update();
if (level == 1) {
wall5.update();
wall5_1.update();
wall5_2.update();
wall6.update();
wall6_1.update();
wall6_2.update();
}
if (level == 2) {
wall7.update();
wall7_1.update();
}
if (level == 2 || level == 3) {
wall8.update();
wall8_1.update();
}
if (level == 3) {
wall9.update();
wall9_1.update();
wall9_2.update();
wall8_2.update();
wall8_3.update();
wall8_8.update();
wall8_4.update();
wall8_5.update();
wall8_6.update();
wall8_7.update();
}
if (firef > 0) {
bullet.update();
bulletai();
if (level == 4 || level == 5) {
bullet2.update();
}
}
player.newPos();
player.update();
player2.newPos();
player2.update();
bullet.newPos();
if (level == 4 || level == 5) {
bullet2.newPos();
player3.newPos();
player3.update();
}
}
}
if (Dead == 1) {
death.update();
deathtxt.update();
player.speedX = 0;
player.speedY = 0;
player2.speedX = 0;
player2.speedY = 0;
player3.speedX = 0;
player3.speedY = 0;
}
}
if (level == (maxLevel+1) && won == 0 && Dead == 0) {
won = 1;
}
if (level == (maxLevel+1)) {
thank.update();
thanktxt.update();
}
if (level < 4) {
if (bullet.crashWith(player2)) {
if (firef > 0) {
win.update();
wintxt.update();
won = 1;
}
}
}
if (level == 4 || level == 5) {
if (bullet.crashWith(player2) && bullet2.crashWith(player3)) {
if (firef > 0) {
win.update();
wintxt.update();
won = 1;
}
}
}
if (player.crashWith(wall)) {
clearmove();
player.speedX += 1;
}
if (level == 3) {
if (player.crashWith(wall9_2)) {
clearmove();
player.speedX += 1;
}
if (player.crashWith(wall8_5)) {
clearmove();
player.speedX += 1;
}
}
if (level == 1) {
if (player.crashWith(wall5)) {
clearmove();
player.speedX += 1;
}
if (player.crashWith(wall6)) {
clearmove();
player.speedX += 1;
}
}
if (level == 2 || level == 3) {
if (level == 2) {
if (player.crashWith(wall7_1)) {
clearmove();
player.speedX += 1;
}
}
}
if (player.crashWith(wall2)) {
clearmove();
player.speedX -= 1;
}
if (level == 1) {
if (player.crashWith(wall5_1)) {
clearmove();
player.speedX -= 1;
}
if (player.crashWith(wall6_1)) {
clearmove();
player.speedX -= 1;
}
}
if (level == 2) {
if (player.crashWith(wall8_1)) {
clearmove();
player.speedX -= 1;
}
}
if (level == 3) {
if (player.crashWith(wall8_2)) {
clearmove();
player.speedX -= 1;
}
if (player.crashWith(wall8_3)) {
clearmove();
player.speedX -= 1;
}
}
if (player.crashWith(wall3)) {
clearmove();
player.speedY += 1;
}
if (level == 3) {
if (player.crashWith(wall9_1)) {
clearmove();
player.speedY += 1;
}
if (player.crashWith(wall8_6)) {
clearmove();
player.speedY += 1;
}
}
if (level == 1) {
if (player.crashWith(wall5_2)) {
clearmove();
player.speedY += 1;
}
if (player.crashWith(wall6_2)) {
clearmove();
player.speedY += 1;
}
}
if (level == 2) {
if (player.crashWith(wall7)) {
clearmove();
player.speedY += 1;
}
if (player.crashWith(wall8)) {
clearmove();
player.speedY += 1;
}
}
if (level == 3) {
if (player.crashWith(wall8_4)) {
clearmove();
player.speedY += 1;
}
}
if (player.crashWith(wall4)) {
clearmove();
player.speedY -= 1;
}
if (level == 3) {
if (player.crashWith(wall9)) {
clearmove();
player.speedY -= 1;
}
if (player.crashWith(wall8_7)) {
clearmove();
player.speedY -= 1;
}
}
if (player2.crashWith(wall)) {
clearmove2();
player2.speedX += 1;
}
if (level == 3) {
if (player2.crashWith(wall9_2)) {
clearmove2();
player2.speedX += 1;
}
}
if (level == 1) {
if (player2.crashWith(wall5)) {
clearmove2();
player2.speedX += 1;
}
if (player2.crashWith(wall6)) {
clearmove2();
player2.speedX += 1;
}
}
if (level == 2 || level == 3) {
if (level == 2) {
if (player2.crashWith(wall7_1)) {
clearmove2();
player2.speedX += 1;
}
}
}
if (player2.crashWith(wall2)) {
clearmove2();
player2.speedX -= 1;
}
if (level == 1) {
if (player2.crashWith(wall5_1)) {
clearmove2();
player2.speedX -= 1;
}
if (player2.crashWith(wall6_1)) {
clearmove2();
player2.speedX -= 1;
}
}
if (level == 2 || level == 3) {
if (player2.crashWith(wall8_1)) {
clearmove2();
player2.speedX -= 1;
}
}
if (player2.crashWith(wall3)) {
clearmove2();
player2.speedY += 1;
}
if (level == 3) {
if (player2.crashWith(wall9_1)) {
clearmove2();
player2.speedY += 1;
}
}
if (level == 1) {
if (player2.crashWith(wall5_2)) {
clearmove2();
player2.speedY += 1;
}
if (player2.crashWith(wall6_2)) {
clearmove2();
player2.speedY += 1;
}
}
if (level == 2 || level == 3) {
if (level == 2) {
if (player2.crashWith(wall7)) {
clearmove2();
player2.speedY += 1;
}
}
if (player2.crashWith(wall8)) {
clearmove2();
player2.speedY += 1;
}
}
if (player2.crashWith(wall4)) {
clearmove2();
player2.speedY -= 1;
}
if (level == 3) {
if (player2.crashWith(wall9)) {
clearmove2();
player2.speedY -= 1;
}
}
if (player.crashWith(player2)) {
Dead = 1;
}
if (level == 4 || level == 5) {
if (player3.crashWith(wall)) {
clearmove3();
player3.speedX += 1;
}
if (player3.crashWith(wall2)) {
clearmove3();
player3.speedX -= 1;
}
if (player3.crashWith(wall3)) {
clearmove3();
player3.speedY += 1;
}
if (player3.crashWith(wall4)) {
clearmove3();
player3.speedY -= 1;
}
if (player.crashWith(player3)) {
Dead = 1;
}
}
}

function player2ai() {
if (player.x < player2.x){
player2.speedX = -2;
}
if (player.x > player2.x){
player2.speedX = 2;
}
if (player.y < player2.y){
player2.speedY = -2;
}
if (player.y > player2.y){
player2.speedY = 2;
}
if (firef == 1) {
clearmove2();
}
if (level == 4 || level == 5) {
if (player.x < player3.x){
player3.speedX = -2;
}
if (player.x > player3.x){
player3.speedX = 2;
}
if (player.y < player3.y){
player3.speedY = -2;
}
if (player.y > player3.y){
player3.speedY = 2;
}
if (firef == 1) {
clearmove3();
}
}
}

function bulletai() {
if (bullet.x > 10 + player2.x){
bullet.speedX = -2;
}
if (bullet.x < 10 + player2.x){
bullet.speedX = 2;
}
if (bullet.y > 10 + player2.y){
bullet.speedY = -2;
}
if (bullet.y < 10 + player2.y){
bullet.speedY = 2;
}
if (level == 4 || level == 5) {
if (bullet2.x > 10 + player3.x){
bullet2.speedX = -2;
}
if (bullet2.x < 10 + player3.x){
bullet2.speedX = 2;
}
if (bullet2.y > 10 + player3.y){
bullet2.speedY = -2;
}
if (bullet2.y < 10 + player3.y){
bullet2.speedY = 2;
}
}
}

function moveup() {
if (Dead == 0) {
if (firef == 0) {
player.speedY = -2.5;
player2ai();
}
}
}

function movedown() {
if (Dead == 0) {
if (firef == 0) {
player.speedY = 2.5;
player2ai();
}
}
}

function moveleft() {
if (Dead == 0) {
if (firef == 0) {
player.speedX = -2.5;
player2ai();
}
}
}

function moveright() {
if (Dead == 0) {
if (firef == 0) {
player.speedX = 2.5;
player2ai();
}
}
}

function clearmove() {
player.speedX = 0;
player.speedY = 0;
player2.speedX = 0;
player2.speedY = 0;
if (level == 4 || level == 5) {
player3.speedX = 0;
player3.speedY = 0;
}
}

function clearmove2() {
player2.speedX = 0;
player2.speedY = 0;
}

function clearmove3() {
player3.speedX = 0;
player3.speedY = 0;
}

function fire() {
if (won == 0) {
if (firef == 0) {
firef = 1;
bullet.x = 20 + player.x;
bullet.y = 10 + player.y;
if (level == 4 || level == 5) {
bullet2.x = 20 + player.x;
bullet2.y = 10 + player.y;
}
}
}
}