var level = 1;
var player;
var player2;
var time;
var bullet;
var Dead = 0;
var won = 0;
var firef = 0;
function startGame() {
player = new component(30, 30, "red", 50, 150);
player2 = new aicomponent(30, 30, "blue", 400, 150);
player3 = new aicomponent(30, 30, "purple", 400, 150);
wall = new component(10, 500, "darkred", -8, 0);
wall2 = new component(10, 500, "darkred", 498, 0);
wall4 = new component(500, 1, "darkred", 0, 299);
wall3 = new component(500, 1, "darkred", 0, 0);
wall5 = new component(5, 50, "darkred", 255, 0);
wall5_1 = new component(5, 50, "darkred", 250, 0);
wall5_2 = new component(6, 5, "darkred", 252, 45);
wall6 = new component(5, 50, "darkred", 315, 0);
wall6_1 = new component(5, 50, "darkred", 310, 0);
wall6_2 = new component(6, 5, "darkred", 312, 45);
ammo = new component(10, 10, "lightblue", 280, 20);
bullet = new bullet(10, 10, "orange", 20 + player.x, 10 + player.y);
myGameArea.start();
updateGameArea();
}

function ResetGame() {
if (Dead == 1) {
Dead = 0;
if (level == 1) {
player.x = 50;
player.y = 150;
player.speedX = 0;
player.speedY = 0;
player2.x = 400;
player2.y = 150;
player2.speedX = 0;
player2.speedY = 0;
}
if (level == 2) {
player.x = 50;
player.y = 150;
player.speedX = 0;
player.speedY = 0;
player2.x = 400;
player2.y = 150;
player2.speedX = 0;
player2.speedY = 0;
ammo.x = 201;
level2obj();
}
if (level == 3) {
player.x = 190;
player.y = 20;
player.speedX = 0;
player.speedY = 0;
player2.x = 400;
player2.y = 150;
player2.speedX = 0;
player2.speedY = 0;
ammo.x = 201;
ammo.y = 210;
level3obj();
}
if (level == 4) {
player.x = 190;
player.y = 20;
player.speedX = 0;
player.speedY = 0;
player2.x = 400;
player2.y = 150;
player2.speedX = 0;
player2.speedY = 0;
player3.x = 400;
player3.y = 80;
player3.speedX = 0;
player3.speedY = 0;
ammo.x = 400;
ammo.y = 120;
}
}
}

function level2obj() {
wall = new component(40, 500, "darkred", 0, 0);
wall2 = new component(100, 500, "darkred", 440, 0);
wall4 = new component(500, 200, "darkred", 0, 185);
wall3 = new component(500, 10, "darkred", 0, 0);
wall7 = new component(182, 145, "darkred", 0, 0);
wall7_1 = new component(5, 145, "darkred", 182, 0);
wall8 = new component(282, 145, "darkred", 227, 0);
wall8_1 = new component(5, 145, "darkred", 225, 0);
}

function level3obj() {
wall = new component(182, 500, "darkred", 0, 0);
wall2 = new component(100, 500, "darkred", 440, 0);
wall4 = new component(500, 200, "darkred", 0, 235);
wall3 = new component(500, 10, "darkred", 0, 0);
wall8 = new component(282, 145, "darkred", 227, 0);
wall8_1 = new component(5, 145, "black", 225, 0);
wall8_2 = new component(5, 50, "darkred", 225, 0);
wall8_3 = new component(5, 55, "darkred", 225, 90);
wall8_4 = new component(175, 5, "darkred", 225, 140);
wall8_5 = new component(5, 55, "darkred", 395, 90);
wall8_6 = new component(300, 5, "darkred", 225, 45);
wall8_7 = new component(175, 5, "darkred", 225, 90);
wall8_8 = new component(215, 5, "black", 225, 140);
wall9 = new component(400, 5, "darkred", 0, 185);
wall9_1 = new component(400, 5, "darkred", 0, 190);
wall9_2 = new component(5, 5, "darkred", 395, 187.5);
}

var myGameArea = {
canvas : document.createElement("canvas"),
start : function() {
this.canvas.width = 500;
this.canvas.height = 300;
this.context = this.canvas.getContext("2d");
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

function component(width, height, color, x, y, type) {
this.type = type;
if (type == "image") {
this.image = new Image();
this.image.src = color;
}
this.width = width;
this.height = height;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.update = function() {
ctx = myGameArea.context;
if (type == "image") {
ctx.drawImage(this.image,
this.x,
this.y,
this.width, this.height);
}
if (this.type == "text") {
ctx.font =this.width + " " + this.height;
ctx.fillStyle = color;
ctx.fillText(this.text, this.x, this.y);
} else {
ctx.fillStyle = color;
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

function aicomponent(width, height, color, x, y, type) {
this.type = type;
if (type == "image") {
this.image = new Image();
this.image.src = color;
}
this.width = width;
this.height = height;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.update = function() {
ctx = myGameArea.context;
if (type == "image") {
ctx.drawImage(this.image,
this.x,
this.y,
this.width, this.height);
}
if (this.type == "text") {
ctx.font =this.width + " " + this.height;
ctx.fillStyle = color;
ctx.fillText(this.text, this.x, this.y);
} else {
ctx.fillStyle = color;
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

function bullet(width, height, color, x, y, type) {
this.type = type;
if (type == "image") {
this.image = new Image();
this.image.src = color;
}
this.width = width;
this.height = height;
this.speedX = 0;
this.speedY = 0;
this.x = x;
this.y = y;
this.update = function() {
ctx = myGameArea.context;
if (type == "image") {
ctx.drawImage(this.image,
this.x,
this.y,
this.width, this.height);
}
if (this.type == "text") {
ctx.font =this.width + " " + this.height;
ctx.fillStyle = color;
ctx.fillText(this.text, this.x, this.y);
} else {
ctx.fillStyle = color;
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
if (Dead == 0) {
if (won == 0) {
if (firef > 0) {
bullet.update();
bulletai();
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
if (level == 2 || level == 3) {
if (level == 2) {
wall7.update();
wall7_1.update();
}
wall8.update();
wall8_1.update();
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
}
player.newPos();
player.update();
player2.newPos();
player2.update();
bullet.newPos();
if (level == 4) {
player3.newPos();
player3.update();
}
}
}
if (Dead == 1) {
if (won == 0) {
death = new component("50px", "Consolas", "white", 125, 150, "text");
death.text="YOU DIED!";
death.update();
player.speedX = 0;
player.speedY = 0;
player2.speedX = 0;
player2.speedY = 0;
}
}
if (bullet.crashWith(player2)) {
if (firef > 0) {
win = new component("50px", "Consolas", "white", 155, 150, "text");
win.text="You win!";
win.update();
wintxt = new component("50px", "Consolas", "white", 125, 200, "text");
wintxt.text="Hit Next...";
wintxt.update();
won = 1;
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
if (level == 4) {
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
}
function player3ai() {
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
}
function moveup() {
if (Dead == 0) {
if (firef == 0) {
player.speedY = -2.5;
player2ai();
if (level == 4) {
player3ai();
}
}
}
}
function movedown() {
if (Dead == 0) {
if (firef == 0) {
player.speedY = 2.5;
player2ai();
if (level == 4) {
player3ai();
}
}
}
}
function moveleft() {
if (Dead == 0) {
if (firef == 0) {
player.speedX = -2.5;
player2ai();
if (level == 4) {
player3ai();
}
}
}
}
function moveright() {
if (Dead == 0) {
if (firef == 0) {
player.speedX = 2.5;
player2ai();
if (level == 4) {
player3ai();
}
}
}
}
function clearmove() {
player.speedX = 0;
player.speedY = 0;
player2.speedX = 0;
player2.speedY = 0;
if (level == 4) {
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
if (player.crashWith(ammo)) {
firef = 1;
bullet.x = 20 + player.x;
bullet.y = 10 + player.y;
}
}
}

function NextLevel() {
if (won == 1) {
level += 1;
firef = 0;
won = 0;
Dead = 1;
ResetGame();
}
}
