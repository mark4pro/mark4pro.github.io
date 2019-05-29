function start() {
	pokedown = new component(30, 30, "black", moveX, moveY, "pokedown");
	walkright = new component(30, 30, "black", moveX, moveY, "walkright");
	walkright2 = new component(30, 30, "black", moveX, moveY, "walkright2");
	pokeright = new component(30, 30, "black", moveX, moveY, "pokeright");
	walkleft = new component(30, 30, "black", moveX, moveY, "walkleft");
	walkleft2 = new component(30, 30, "black", moveX, moveY, "walkleft2");
	pokeleft = new component(30, 30, "black", moveX, moveY, "pokeleft");
	walkup = new component(30, 30, "black", moveX + 1.5, moveY, "walkup");
	walkup2 = new component(30, 30, "black", moveX + 1.5, moveY, "walkup2");
	pokeup = new component(30, 30, "black", moveX - 0.5, moveY, "pokeup");
	walkdown = new component(30, 30, "black", moveX + 2, moveY, "walkdown");
	walkdown2 = new component(30, 30, "black", moveX + 2, moveY, "walkdown2");
	crashbox = new component(15, 30, "black", moveX + 7.5, moveY, "rec");
	topwall = new component(500, 10, "black", 0, -10, "rec");
	bottomwall = new component(500, 10, "black", 0, 300, "rec");
	leftwall = new component(10, 300, "black", -10, 0, "rec");
	rightwall = new component(10, 300, "black", 500, 0, "rec");
	document.getElementById('volume').value = 10;
	SetVolume(10);
	Board.start();
    updateGameArea();
	}
	
	var Board = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 500;
		this.canvas.height = 300;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.frameNo = 0;
		this.interval = setInterval(updateGameArea, 20);
		this.interval = setInterval(keysrefreash, 1);
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
}

var moveX = 10;
var moveY = 135;
var playerspeed = 1;
var playerspeedneg = -1;

function moveUp() {
	if (left != 2) {
	if (right != 2) {
    up = 2;
	down = 0;
    right = 0;
    left = 0;
	if (menu1 < 1) {
	if (up == 2) {
	pokedown.speedY = playerspeedneg;
	pokeup.speedY = playerspeedneg;
	pokeleft.speedY = playerspeedneg;
	pokeright.speedY = playerspeedneg;
	walkdown.speedY = playerspeedneg;
	walkup.speedY = playerspeedneg;
	walkleft.speedY = playerspeedneg;
	walkright.speedY = playerspeedneg;
	walkdown2.speedY = playerspeedneg;
	walkup2.speedY = playerspeedneg;
	walkleft2.speedY = playerspeedneg;
	walkright2.speedY = playerspeedneg;
	crashbox.speedY = playerspeedneg;
	   }
	  }
	 }
	}
	if (menu1 == 1) {
	menug -= 1;
	}
}
function moveDown() {
	if (left != 2) {
	if (right != 2) {
    up = 0;
	down = 2;
    right = 0;
    left = 0;
	if (menu1 < 1) {
	if (down == 2) {
	pokedown.speedY = playerspeed;
	pokeup.speedY = playerspeed;
	pokeleft.speedY = playerspeed;
	pokeright.speedY = playerspeed;
	walkdown.speedY = playerspeed;
	walkup.speedY = playerspeed;
	walkleft.speedY = playerspeed;
	walkright.speedY = playerspeed;
	walkdown2.speedY = playerspeed;
	walkup2.speedY = playerspeed;
	walkleft2.speedY = playerspeed;
	walkright2.speedY = playerspeed;
	crashbox.speedY = playerspeed;
	   }
	  }
	 }
    }
	if (menu1 == 1) {
	menug += 1;
	}
}
function moveLeft() {
	if (up != 2) {
	if (down != 2) {
    up = 0;
	down = 0;
    right = 0;
    left = 2;
	if (menu1 < 1) {
	if (left == 2) {
	pokedown.speedX = playerspeedneg;
	pokeup.speedX = playerspeedneg;
	pokeleft.speedX = playerspeedneg;
	pokeright.speedX = playerspeedneg;
	walkdown.speedX = playerspeedneg;
	walkup.speedX = playerspeedneg;
	walkleft.speedX = playerspeedneg;
	walkright.speedX = playerspeedneg;
	walkdown2.speedX = playerspeedneg;
	walkup2.speedX = playerspeedneg;
	walkleft2.speedX = playerspeedneg;
	walkright2.speedX = playerspeedneg;
	crashbox.speedX = playerspeedneg;
	   }
	  }
	 }
	}
}
function moveRight() {
	if (down != 2) {
	if (up != 2) {
    up = 0;
	down = 0;
    left = 0;
    right = 2;
	if (menu1 < 1) {
	if (right == 2) {
	pokedown.speedX = playerspeed;
	pokeup.speedX = playerspeed;
	pokeleft.speedX = playerspeed;
	pokeright.speedX = playerspeed;
	walkdown.speedX = playerspeed;
	walkup.speedX = playerspeed;
	walkleft.speedX = playerspeed;
	walkright.speedX = playerspeed;
	walkdown2.speedX = playerspeed;
	walkup2.speedX = playerspeed;
	walkleft2.speedX = playerspeed;
	walkright2.speedX = playerspeed;
	crashbox.speedX = playerspeed;
	   }
	  }
	 }
	}
}
function clearmoveu() {
   if (up >= 1) {
    pokedown.speedY = 0;
	pokeup.speedY = 0;
	pokeleft.speedY = 0;
	pokeright.speedY = 0;
	walkdown.speedY = 0;
	walkup.speedY = 0;
	walkleft.speedY = 0;
	walkright.speedY = 0;
	walkdown2.speedY = 0;
	walkup2.speedY = 0;
	walkleft2.speedY = 0;
	walkright2.speedY = 0;
	crashbox.speedY = 0;
   left = 0;
   right = 0;
   up = 1;
   down = 0;
   }
}

function clearmoved() {
   if (down >= 1) {
	pokedown.speedY = 0;
	pokeup.speedY = 0;
	pokeleft.speedY = 0;
	pokeright.speedY = 0;
	walkdown.speedY = 0;
	walkup.speedY = 0;
	walkleft.speedY = 0;
	walkright.speedY = 0;
	walkdown2.speedY = 0;
	walkup2.speedY = 0;
	walkleft2.speedY = 0;
	walkright2.speedY = 0;
	crashbox.speedY = 0;
   left = 0;
   right = 0;
   up = 0;
   down = 1;
   }
}

function clearmovel() {
	if (left >= 1) {
    pokedown.speedX = 0;
	pokeup.speedX = 0;
	pokeleft.speedX = 0;
	pokeright.speedX = 0;
	walkdown.speedX = 0;
	walkup.speedX = 0;
	walkleft.speedX = 0;
	walkright.speedX = 0;
	walkdown2.speedX = 0;
	walkup2.speedX = 0;
	walkleft2.speedX = 0;
	walkright2.speedX = 0;
	crashbox.speedX = 0;
   left = 1;
   right = 0;
   up = 0;
   down = 0;
   }
}

function clearmover() {
   if (right >= 1) { 
	pokedown.speedX = 0;
	pokeup.speedX = 0;
	pokeleft.speedX = 0;
	pokeright.speedX = 0;
	walkdown.speedX = 0;
	walkup.speedX = 0;
	walkleft.speedX = 0;
	walkright.speedX = 0;
	walkdown2.speedX = 0;
	walkup2.speedX = 0;
	walkleft2.speedX = 0;
	walkright2.speedX = 0;
	crashbox.speedX = 0;
	right = 1;
	left = 0;
	up = 0;
	down = 0;
	}
}

  var goup = 0;
  var godown = 0;
  var goleft = 0;
  var goright = 0;
var right = 1;
var left = 0;
var up = 0;
var down = 0;

function handler() {
  if (menu1 < 1) {
   if (right > 2) {
   right = 0;
   }
   if (left > 2) {
   left = 0;
   }
   if (up > 2) {
   up = 0;
   }
   if (down > 2) {
   down = 0;
   }
   if (right >= 2) {
   left = 0;
   up = 0;
   down = 0;
   }
   if (right == 1) {
   left = 0;
   up = 0;
   down = 0;
   }
   if (left >= 2) {
   right = 0;
   up = 0;
   down = 0;
   }
   if (left == 1) {
   right = 0;
   up = 0;
   down = 0;
   }
   if (up >= 2) {
   right = 0;
   left = 0;
   down = 0;
   }
   if (up == 1) {
   right = 0;
   left = 0;
   down = 0;
   }
   if (down >= 2) {
   right = 0;
   up = 0;
   left = 0;
   }
   if (down == 1) {
   right = 0;
   up = 0;
   left = 0;
   }
  }
}

function keysrefreash() {
	document.onkeydown = function(e) {
    switch (e.keyCode) {
		case 87:
		   if (goup == 0) {
            moveUp();
		   }
            break;
		case 65:
		   if (goleft == 0) {
            moveLeft();
		   }
            break;
		case 68:
		   if (goright == 0) {
            moveRight();
		   }
            break;
		case 83:
		   if (godown == 0) {
            moveDown();
		   }
            break;
		case 13:
            enter();
            break;
	    case 27:
		    back();
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
		  ctx.font =this.width + " " + this.height;
		  ctx.fillStyle = color;
		  ctx.fillText(this.text, this.x, this.y);
		} else {
		if (type == "rec") {
		this.width = width;
		this.height = height;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);        
		  } else {
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
		 var img = document.getElementById("menu");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "1img") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("play");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "2img") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("unplay");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "pokeright") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("pokeright");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkright") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk1right1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkright2") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk2right1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "pokeleft") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("pokeleft");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkleft") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk1left1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkleft2") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk2left1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "pokeup") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("pokeup");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkup") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk1up1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkup2") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk2up1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "pokedown") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("pokedown");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkdown") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk1down1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "walkdown2") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("walk2down1m");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "uncmm") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("uncmm");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
		 if (type == "cmm") {
		 this.width = width;
		 this.height = height;
		 var img = document.getElementById("cmm");
		ctx.drawImage(img, this.x, this.y, this.width, this.height);
		 }
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
 
 var menu1 = 1;
 var menug = 0;

function menuf() {
if (menu1 == 1) {
menu =new component(500, 300, "black", 0, 0, "img");
if (menug == 0) {
play =new component(500, 300, "black", 0, 5, "1img");
	} else {
unplay =new component(500, 300, "black", 0, 5, "2img");
	}
if (menug == 1) {
cmm =new component(500, 300, "black", -10, 20, "cmm");
	} else {
uncmm =new component(500, 300, "black", -10, 20, "uncmm");
	}
if (menug > 1) {
 menug = 0;
   }
if (menug < 0) {
 menug = 1;
   }
  }
}
 
function enter() {
if (menu1 == 1) {
if (menug == 0) {
menu1 -= 1;
  }
if (menu1 == 1) {
if (menug == 1) {
sound += 1;
   }
  }
 }
}

function back() {

}
 
 function wallcrash() {
 if (crashbox.crashWith(topwall)) {
	clearmoveu(); 
	goup = 1;
 } 
 if (crashbox.crashWith(topwall) == false) { 
	goup = 0;
 }
 if (crashbox.crashWith(bottomwall)) {
	clearmoved();
    godown = 1;	
 } 
 if (crashbox.crashWith(bottomwall) == false) {
    godown = 0;	
 } 
 if (crashbox.crashWith(leftwall)) {
	clearmovel(); 
	goleft = 1;
 }
 if (crashbox.crashWith(leftwall) == false) { 
	goleft = 0;
  }
 if (crashbox.crashWith(rightwall)) {
	clearmover(); 
	goright = 1;
 }
 if (crashbox.crashWith(rightwall) == false) { 
	goright = 0;
 }
}
 
 var insideId = 0;
 var worldId = 0;
 
 var resetframe = 3;
var tickCount = 0;
var walkvar = 0;
var ticksPerFrame = 10;
var startTime = 0;
function WalkingAnimationFramerate() {
if (startTime == 1) {
        tickCount += 1;	
        if (tickCount > ticksPerFrame) {
        	tickCount = 0;
            walkvar += 1; 
        }
		if (walkvar == resetframe) {
		    tickCount = 0;
            walkvar = 0;
            startTime = 0;			
        }
	}
}
 
 var gender = 0;
 var character = 0;
 
 function updateGameArea() {
    Board.clear();
	menuf();
	playSound();
	skipSound();
	handler();
	WalkingAnimationFramerate();
	if (menu1 == 1) {
	menu.update();
	if (menug == 0) {
	play.update();
	} else {
	unplay.update();
	}
	if (menug == 1) {
	cmm.update();
	} else {
	uncmm.update();
	}
 }
 if (menu1 <= 0) {
 //Nonmenu shit goes here!!!//
    wallcrash();
    pokedown.newPos();
	pokeup.newPos();
	pokeleft.newPos();
	pokeright.newPos();
	walkdown.newPos();
	walkup.newPos();
	walkleft.newPos();
	walkright.newPos();
	walkdown2.newPos();
	walkup2.newPos();
	walkleft2.newPos();
	walkright2.newPos();
	crashbox.newPos();
	crashbox.update();
    topwall.update();
	bottomwall.update();
	leftwall.update();
	rightwall.update();
 if (right == 2) {
	 startTime = 1;
  if (gender == 0) {
  if (character == 0) {
  if (walkvar == 0) {
 walkright2.update();
  }
  if (walkvar == 1) {
 pokeright.update();
  }
  if (walkvar == 2) {
 walkright.update();
   }
  }
 }
}
 if (right == 1) {
  startTime = 0;
  pokeright.update();
  }
 if (left == 2) {
 startTime = 1;
 if (gender == 0) {
  if (character == 0) {
  if (walkvar == 0) {
 walkleft2.update();
  }
  if (walkvar == 1) {
 pokeleft.update();
  }
  if (walkvar == 2) {
 walkleft.update();
   }
  }
 }
}
 if (left == 1) {
  startTime = 0;
  pokeleft.update();
  }
 if (up == 2) {
 startTime = 1;
 if (gender == 0) {
  if (character == 0) {
  if (walkvar == 0) {
 walkup2.update();
  }
  if (walkvar == 1) {
 pokeup.update();
  }
  if (walkvar == 2) {
 walkup.update();
   }
  }
 }
}
 if (up == 1) {
  startTime = 0;
  pokeup.update();
  }
 if (down == 2) {
 startTime = 1;
 if (gender == 0) {
  if (character == 0) {
  if (walkvar == 0) {
 walkdown2.update();
  }
  if (walkvar == 1) {
 pokedown.update();
  }
  if (walkvar == 2) {
 walkdown.update();
   }
  }
 }
}
 if (down == 1) {
  startTime = 0;
  pokedown.update();
  }
 }
}

var sound = 0
var level = 1
	
function playSound() {
   if (menu1 == 1) {
    if (sound == 0) {
    document.getElementById('menumusic').play();
	 }
	if (sound == 1) {
	document.getElementById('menumusic2').play();
	 }
	}
	if (menu1 == 0) {
	if (worldId == 0) {
	 if (insideId == 0) {
	document.getElementById('hometown').play();
	  }
     }	
	}
	if (sound > 1) {
	sound = 0;
	}
}
function SetVolume(val) {
        var player = document.getElementById('menumusic');
        player.volume = val / 100;
        var player2 = document.getElementById('menumusic2');
        player2.volume = val / 100;
		var player3 = document.getElementById('hometown');
        player3.volume = val / 100;
    }
function skipSound() {
   if (menu1 < 1) {
   menumusic.pause();
   menumusic.currentTime = 0;
   menumusic2.pause();
   menumusic2.currentTime = 0;
   }
   if (sound > 0) {
   menumusic.pause();
   menumusic.currentTime = 0;
   }
   if (sound < 1) {
   menumusic2.pause();
   menumusic2.currentTime = 0;
   }
   if (worldId != 0) {
	 if (insideId != 0) {
	hometown.pause();
    hometown.currentTime = 0;
     }	
	}
}