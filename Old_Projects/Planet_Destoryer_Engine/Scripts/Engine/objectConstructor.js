var collisionLayer = [];
var backgroundLayer = [];
var lowerObjectLayer = [];
var playerEnemySpawnLayer = [];
var upperObjectLayer = [];
var wallLayer = [];
var aboveWallLayer = [];
var uiLayer = [];
var mainObjectArray = [];
function component(width, height, color, defaultX, defaultY, type, radius, outcolor, thickness) {
//main vars
this.width = width;
this.height = height;
this.color = color;
this.defaultX = defaultX;
this.x = defaultX;
this.defaultY = defaultY;
this.y = defaultY;
this.type = type;
this.radius = radius;
this.outcolor = outcolor;
this.thickness = thickness;
//secondary vars
this.angle = 0;
this.rotateSpeed = 0;
this.OffsetX = outcolor;
this.OffsetY = thickness;
this.animationFrame = 0;
this.sx = 0; //image x position
this.sy = 0; //image y position
this.pointsX = [];
this.pointsY = [];
this.globalAlpha = 1;
this.shadowColor_ = "";
this.shadowBlur_ = 0;
this.shadowOffsetX_ = 0;
this.shadowOffsetY_ = 0;
this.endpositionY = outcolor;
this.endpositionX = radius;
this.isStroked = this.radius;
this.align = this.outcolor;
this.text = this.thickness;
//player state
this.alive = true;
this.crawling = false;
this.sneaking = false;
this.running = false;
this.speed = 0;
this.crawlSpeed = 0;
this.sneakSpeed = 0;
this.runSpeed = 0;
//bullet vars
this._bullets = [];
this.timeAlive = 0;
this.bulletPicId = "nineMill";
this.lockAngle = false;
this.bulletWidth = 5;
this.bulletHeight = 10;
this.bulletX = 0;
this.bulletY = 0;
//ai/player
this.health = 0;
this.healthBarColor = "";
this.ammo = 0;
this.damage = 0;
//ai
this.init = true;
this.aiSpeed = 0;
this.aiRunSpeed = 0;
	//update function
	this.update = function() {
		switch(this.type) {
			case "text":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.font = this.width + " " + this.height;
			ctx.fillStyle = this.color;
			ctx.textAlign = this.align;
				if (this.isStroked === false) {
				ctx.fillText(this.text, this.x, this.y);
				}
				if (this.isStroked === true) {
				ctx.strokeText(this.text, this.x, this.y);
				}
			break;
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
			case "path":
			ctx.beginPath();
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.lineWidth = this.width;
			ctx.lineCap = this.height;
			ctx.strokeStyle = this.color; 
			ctx.moveTo(this.radius[0][0], this.radius[0][1]);
			for (let i = 1; i < this.radius.length; i++) {
			ctx.lineTo(this.radius[i][0], this.radius[i][1]);
			}
			ctx.stroke();
			break;
			case "rec":
				if (this.OffsetX === "" || this.OffsetX === 0 || this.OffsetX === undefined || this.OffsetX === null) {
				this.OffsetX = 0;
				}
				if (this.OffsetY === "" || this.OffsetY === 0 || this.OffsetY === undefined || this.OffsetY === null) {
				this.OffsetY = 0;
				}
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			//calculate points
			this.pointsX[0]=(-this.width/2*Math.cos(this.angle)-(-this.width/2)*Math.sin(this.angle))+(this.OffsetX+this.x);
			this.pointsY[0]=(-this.height/2*Math.sin(this.angle)+(-this.height/2)*Math.cos(this.angle))+(this.OffsetY+this.y);
			this.pointsX[1]=(this.width/2*Math.cos(-this.angle)-this.width/2*Math.sin(-this.angle))+(this.OffsetX+this.x);
			this.pointsY[1]=(-this.height/2*Math.sin(-this.angle)+(-this.height/2)*Math.cos(-this.angle))+(this.OffsetY+this.y);
			this.pointsX[2]=(this.width/2*Math.cos(this.angle)-this.width/2*Math.sin(this.angle))+(this.OffsetX+this.x);
			this.pointsY[2]=(this.height/2*Math.sin(this.angle)+this.height/2*Math.cos(this.angle))+(this.OffsetY+this.y);
			this.pointsX[3]=(-this.width/2*Math.cos(-this.angle)-(-this.width/2)*Math.sin(-this.angle))+(this.OffsetX+this.x);
			this.pointsY[3]=(this.height/2*Math.sin(-this.angle)+this.height/2*Math.cos(-this.angle))+(this.OffsetY+this.y);
			ctx.beginPath();
			ctx.moveTo(this.x, this.y);//center position
			ctx.lineTo(this.pointsX[0], this.pointsY[0]);
			ctx.lineTo(this.pointsX[1], this.pointsY[1]);
			ctx.lineTo(this.pointsX[2], this.pointsY[2]);
			ctx.lineTo(this.pointsX[3], this.pointsY[3]);
			ctx.lineTo(this.pointsX[0], this.pointsY[0]);
			ctx.fillStyle = this.color;
			ctx.fill();
			break;
			case "cir":
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.lineWidth = this.thickness;
			ctx.strokeStyle = this.outcolor;
			ctx.stroke();
			break;
			case "img":
				if (this.OffsetX === "" || this.OffsetX === 0 || this.OffsetX === undefined || this.OffsetX === null) {
				this.OffsetX = this.width/-2;
				}
				if (this.OffsetY === "" || this.OffsetY === 0 || this.OffsetY === undefined || this.OffsetY === null) {
				this.OffsetY = this.height/-2;
				}
			ctx.globalAlpha = this.globalAlpha;
			ctx.shadowColor = this.shadowColor_;
			ctx.shadowBlur = this.shadowBlur_;
			ctx.shadowOffsetX = this.shadowOffsetX_;
			ctx.shadowOffsetY = this.shadowOffsetY_;
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.rotate(this.angle);
			var img = document.getElementById(this.color);
			ctx.drawImage(img, this.sx, this.sy, this.width, this.height, this.OffsetX, this.OffsetY, this.width, this.height);
			ctx.restore();
			break;
			//house constructor goes here!
			//***
		}
	},
	//update position
	this.newPos = function() {
		if (this.alive) {
		this.angle += this.rotateSpeed;
		this.x += (Math.round(this.speed)*Math.sin(this.angle));
		this.y += (Math.round(-this.speed)*Math.cos(this.angle));
		}
	},
	//precalculations
	this.getPointsFormated = function() {
		if (this.type === "rec") {
		return [{x:this.pointsX[0],y:this.pointsY[0]},
				{x:this.pointsX[1],y:this.pointsY[1]},
				{x:this.pointsX[2],y:this.pointsY[2]},
				{x:this.pointsX[3],y:this.pointsY[3]},
				{x:this.pointsX[0],y:this.pointsY[0]}];
		}
	},
	this.getTop = function() {
	return this.y;
	},
	this.getLeft = function() {
	return this.x;
	},
	this.getRight = function() {
	return (this.x+this.width);
	},
	this.getBottom = function() {
	return (this.y+this.height);
	},
	this.getMidX = function() {
	return ((this.width/2)+this.x);
	},
	this.getMidY = function() {
	return ((this.height/2)+this.y);
	},
	//collisions
	//only circles
	this.circleCrashWith = function(otherobj) {
	var distance_x = (this.x-otherobj.x);
	var distance_y = (this.y-otherobj.y);
	var rSum = (this.radius+otherobj.radius);
		if (((distance_x*distance_x)+(distance_y*distance_y)) <= (rSum*rSum)) { 
		return true;
		} else {
		return false;
		}
	},
	//rectangle vs. rectangle
	this.crashWith = function(otherobj) {
	var r1 = ((this.x-this.width/2) + this.width);
	var b1 = ((this.y-this.height/2) + this.height);
	var r2 = ((otherobj.x-otherobj.width/2) + otherobj.width);
	var b2 = ((otherobj.y-otherobj.height/2) + otherobj.height);
		if (b1 < otherobj.y-otherobj.height/2 || this.y-this.height/2 > b2 || r1 < otherobj.x-otherobj.width/2 || this.x-this.width/2 > r2) {
		return false;
		} else {
		return true;
		}
	},
	//circle vs. rectangle
	this.mixCrashWith = function(otherobj) {
		if (this.type === "cir") {
		var widthHalf = (otherobj.width/2);
		var heightHalf = (otherobj.height/2);
		var distance_x = Math.abs(this.x - otherobj.x - widthHalf);
		var distance_y = Math.abs(this.y - otherobj.y - heightHalf);
		var result1 = (widthHalf + this.radius);
		var result2 = (heightHalf + this.radius);
		var dx = (distance_x - widthHalf);
		var dy = (distance_y - heightHalf);
		var result3 = (Math.pow(dx, 2) + Math.pow(dy, 2));
		var result4 = Math.pow(this.radius, 2);
			if (distance_x > result1 || distance_y > result2) {
			return false;
			}
			if (distance_x <= widthHalf && distance_y <= heightHalf) {
			return true;
			} 
			if (result3 <= result4) {
			return true;
			}
		} else {
		var widthHalf = this.width/2;
		var heightHalf = this.height/2;
		var distance_x = Math.abs(otherobj.x - this.x - widthHalf);
		var distance_y = Math.abs(otherobj.y - this.y - heightHalf);
		var result1 = (widthHalf + otherobj.radius);
		var result2 = (heightHalf + otherobj.radius);
		var dx = (distance_x - widthHalf);
		var dy = (distance_y - heightHalf);
		var result3 = (Math.pow(dx, 2) + Math.pow(dy, 2));
		var result4 = Math.pow(otherobj.radius, 2);
			if (distance_x > result1 || distance_y > result2) {
			return false;
			}
			if (distance_x <= widthHalf && distance_y <= heightHalf) {
			return true;
			} 
			if (result3 <= result4) {
			return true;
			}
		}
	}
}
function degreeToRadian(number) {
this.number = number;
return this.number*(Math.PI/180);
}
function lookAt(object, target, offset, type) {
this.object = object;
this.target = target;
this.offset = offset;
this.type = type;
	if (this.type == 'object') {
	return Math.atan2(-this.object.y+this.target.y,-this.object.x+this.target.x)+degreeToRadian(this.offset);
	}
	if (this.type == 'array') {
	return Math.atan2(-this.object.y+this.target[0],-this.object.x+this.target[1])+degreeToRadian(this.offset);
	}
}