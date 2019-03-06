var playerX = 22;
var playerY = 180;

function start() {
 player = new component(25, 25, "black", playerX, playerY, "rec");
 wallleft = new component(20, 500, "black", -10, 0, "rec");
 wallright = new component(20, 500, "black", 790, 0, "rec");
 wall3 = new component(800, 20, "black", 0, -10, "rec");
 wall4 = new component(800, 20, "black", 0, 490, "rec");
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
 var img = document.getElementById("");
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

function updateGameArea() {
Board.clear();
player.update();
player.newPos();
wallleft.update();
wallright.update();
wall3.update();
wall4.update();
if (up == 1) {
 if (touchtop == 0) {
 if (player.speedY >= -4) {
 player.speedY -= 0.05;
 } else {
 player.speedY = -4;
 }
 } else {
 player.speedY = 0;
 }
}
if (down == 1) {
 if (touchbottom == 0){
 if (player.speedY <= 4) {
 player.speedY += 0.05;
 } else {
 player.speedY = 4;
 }
 } else {
 player.speedY = 0;
 }
}
if (left == 1) {
 if (touchleft == 0) {
 if (player.speedX >= -4) {
 player.speedX -= 0.05;
 } else {
 player.speedX = -4;
 }
 } else {
 player.speedX = 0;
 }
}
if (right == 1) {
 if (touchright == 0) {
 if (player.speedX <= 4) {
 player.speedX += 0.05;
 } else {
 player.speedX = 4;
 }
 } else {
 player.speedX = 0;
 }
}
if (player.crashWith(wallleft)) {
 touchleft = 1;
}
if (player.crashWith(wallright)) {
 touchright = 1;
}
if (player.crashWith(wall3)) {
 touchtop = 1;
}
if (player.crashWith(wall4)) {
 touchbottom = 1;
}
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
		case 87:
            moveUp();
            break;
		case 65:
            moveLeft();
            break;
		case 68:
            moveRight();
            break;
		case 83:
            moveDown();
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
    }
};

var touchleft = 0;
var touchright = 0;
var touchtop = 0;
var touchbottom = 0;
var up = 0;
var down = 0;
var left = 0;
var right = 0;

function moveUp() {
 if (touchtop == 0) {
up = 1;
}
}
function moveDown() {
 if (touchbottom == 0) {
down = 1;
}
}
function moveLeft() {
 if (touchleft == 0) {
left = 1;
}
}
function moveRight() {
 if (touchright == 0) {
right = 1;
}
}

function clearmoveu() {
 if (player.crashWith(wall3) == false) {
 touchtop = 0;
 }
 up = 0;
player.speedY = 0;
}

function clearmoved() {
 if (player.crashWith(wall4) == false) {
 touchbottom = 0;
 }
 down = 0;
player.speedY = 0;
}

function clearmovel() {
 if (player.crashWith(wallleft) == false) {
 touchleft = 0;
 }
 left = 0;
player.speedX = 0;
}

function clearmover() {
 if (player.crashWith(wallright) == false) {
 touchright = 0;
 }
 right = 0;
player.speedX = 0;
}

