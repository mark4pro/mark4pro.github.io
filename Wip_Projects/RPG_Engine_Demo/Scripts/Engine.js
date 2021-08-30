var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var scaleWidth = 0;
var scaleHeight = 0;
function sreenResizer(width,height) {
this.width = width;
this.height = height;
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
scaleWidth = deviceWidth/this.width;
scaleHeight = deviceHeight/this.height;
canvas.width = deviceWidth;
canvas.height = deviceHeight;
ctx.setTransform(scaleWidth,0,0,scaleHeight,0,0);
}


//Updates positions
function updatePos(target, obj) {
this.target = target;
this.obj = obj;
	this.update = function() {
	target.x = obj.x;
	target.y = obj.y;
	}
}

//Mouse related functions
//Gets mouse info for the cursor
function getMouseInfo(data, XorY) {
this.data = data;
this.XorY = XorY;
	switch (this.XorY) {
	case "x": 
	return (this.data/scaleWidth);
	break;
	case "y": 
	return (this.data/scaleHeight);
	break;
	}
}

//Mouse/Touch
var pressed = false;
var rPressed = false;
var mousePos = {x:-10,y:-10};
window.addEventListener("mousemove", function(event) {
mousePos.x = getMouseInfo(event.clientX, "x");
mousePos.y = getMouseInfo(event.clientY, "y");
});
document.onmousedown = function(event){
mouse_button = event.button;
	if (event.button == 0) {
	pressed = true;
	}
	if (event.button == 2) {
	rPressed = true;
	}
}
document.addEventListener("contextmenu", function(e){
e.preventDefault();
}, false);
document.onmouseup = function(event){
mouse_button = event.button;
	if (event.button == 0) {
	pressed = false;
	}
	if (event.button == 2) {
	rPressed = false;
	}
}

function getRotation(target, obj) {
this.target = target;
this.obj = obj;
return Math.atan2(-this.target.y + this.obj.y, -this.target.x + this.obj.x)+1.57079633;
}

function updateText(object, text) {
this.object = object;
this.text = text;
	this.update = function() {
	this.object.op2 = this.text;
	}
}

var ui = [];
var playersEnemies = [];
var mapObjectsImages = [];
var mapObjects = [];
var mapTilesImages = [];
var mapTiles = [];
var updaters = [];
var mainObjectArray = [];
function renderer() {
	for (let i=0;i<mainObjectArray.length;i++) {
		if (mainObjectArray[i] != null) {
		mainObjectArray[i].update();
			if (mainObjectArray[i].globalAlpha != undefined) {
			mainObjectArray[i].newPos();
			}
		}
	}
}

//make player render under objects and walls
function mapLoader() {
this.map;
this.colorPalette;
this.width = 0;
this.height = 0;
this.playerSpawned = false;
this.loaded = false;
this.old_X = 0;
this.old_Y = 0;
this.moveMap = false;
this.reset = false;
this.save_Map = false;
this.load_Map = false;
this.spawn = {x:0,y:0};//revamp this to this format: [{x:0,y:0,id:1,active:true}]
this.startMapPos = {x:0,y:0};
	this.init = function(move) {
	this.move = move;
		for (let i=0;i<maps.length;i++) {
			if (maps[i].data.id == playerController_1.data.stage) {
			this.map = maps[i];
			}
		}
		for (let i=0;i<colorPalettes.length;i++) {
			if (colorPalettes[i].id == this.map.data.paletteId) {
			this.colorPalette = colorPalettes[i];
			}
		}
	this.old_X = this.map.data.x;
	this.old_Y = this.map.data.y;
		if (!this.move) {
		this.startMapPos = {x:this.map.data.x,y:this.map.data.y};
		}
		for (let i=0;i<this.map.layer1.length;i++) {
			if (mapTiles.length != this.map.layer1.length) {
			tile = new component(this.map.data.x+this.map.xOffsetLayer1[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer1[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer1[i],this.map.data.tileSize/this.map.heightScaleLayer1[i],this.colorPalette.colors[this.map.layer1[i]],"rec",this.map.collisionInfoLayer1[i].id,this.colorPalette.names[this.map.layer1[i]],"","","","",1,"black",5,2,2);
			tile.angle = this.map.angleLayer1[i];
				if (this.map.collisionInfoLayer1[i].collisionType == 1) {
				tile.type = "tri";
				} else {
				tile.type = "rec";
				}
				if (this.colorPalette.textures_enabled) {
				tile.globalAlpha = 0;
				if (typeof this.colorPalette.textures[this.map.layer1[i]] != "string") {
				tileImage = new component(this.map.data.x+this.map.xOffsetLayer1[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer1[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer1[i],this.map.data.tileSize/this.map.heightScaleLayer1[i],this.colorPalette.textures[this.map.layer1[i]][this.map.collisionInfoLayer1[i].collisionType],"img",this.map.collisionInfoLayer1[i].id,this.colorPalette.names[this.map.layer1[i]],"","","","",1,"black",5,2,2);
				} else {
				tileImage = new component(this.map.data.x+this.map.xOffsetLayer1[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer1[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer1[i],this.map.data.tileSize/this.map.heightScaleLayer1[i],this.colorPalette.textures[this.map.layer1[i]],"img",this.map.collisionInfoLayer1[i].id,this.colorPalette.names[this.map.layer1[i]],"","","","",1,"black",5,2,2);
				}
				tileImage.angle = this.map.angleLayer1[i];
				mapTilesImages.push(tileImage);
				}
			mapTiles.push(tile);
				if (this.map.layer2[i] != 0) {
				tile = new component(this.map.data.x+this.map.xOffsetLayer2[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer2[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer2[i],this.map.data.tileSize/this.map.heightScaleLayer2[i],this.colorPalette.colors[this.map.layer2[i]],"rec",this.map.collisionInfoLayer2[i].id,this.colorPalette.names[this.map.layer2[i]],"","","","",1,"black",5,2,2);
				tile.angle = this.map.angleLayer2[i];
				if (this.map.collisionInfoLayer2[i].collisionType == 1) {
				tile.type = "tri";
				} else {
				tile.type = "rec";
				}
				if (this.colorPalette.textures_enabled) {
				tile.globalAlpha = 0;
				if (typeof this.colorPalette.textures[this.map.layer2[i]] != "string") {
				tileImage = new component(this.map.data.x+this.map.xOffsetLayer2[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer2[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer2[i],this.map.data.tileSize/this.map.heightScaleLayer2[i],this.colorPalette.textures[this.map.layer2[i]][this.map.collisionInfoLayer2[i].collisionType],"img",this.map.collisionInfoLayer2[i].id,this.colorPalette.names[this.map.layer2[i]],"","","","",1,"black",5,2,2);
				} else {
				tileImage = new component(this.map.data.x+this.map.xOffsetLayer2[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.y+this.map.yOffsetLayer2[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2,this.map.data.tileSize/this.map.widthScaleLayer2[i],this.map.data.tileSize/this.map.heightScaleLayer2[i],this.colorPalette.textures[this.map.layer2[i]],"img",this.map.collisionInfoLayer2[i].id,this.colorPalette.names[this.map.layer2[i]],"","","","",1,"black",5,2,2);
				}
				tileImage.angle = this.map.angleLayer2[i];
				mapObjectsImages.push(tileImage);
				}
				mapObjects.push(tile);
				} else {
				if (this.colorPalette.textures_enabled) {
				mapObjectsImages.push(null);	
				}
				mapObjects.push(null);
				}
			}
			if (this.move) {
			mapTiles[i].x = this.map.data.x+this.map.xOffsetLayer1[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2;
			mapTiles[i].y = this.map.data.y+this.map.yOffsetLayer1[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2;
				if (mapTilesImages.length > 0) {
				mapTilesImages[i].x = mapTiles[i].x;
				mapTilesImages[i].y = mapTiles[i].y;
				}
				if (mapObjects[i] != null) {
				mapObjects[i].x = this.map.data.x+this.map.xOffsetLayer2[i]+this.width*this.map.data.tileSize+this.map.data.tileSize/2;
				mapObjects[i].y = this.map.data.y+this.map.yOffsetLayer2[i]+this.height*this.map.data.tileSize+this.map.data.tileSize/2;
					if (mapObjectsImages.length > 0) {
					mapObjectsImages[i].x = mapObjects[i].x;
					mapObjectsImages[i].y = mapObjects[i].y;
					}
				}
			}
		this.width++;
			if (this.width >= this.map.data.width) {
			this.width = 0;
			this.height++;
			}
			if (this.height >= this.map.data.height) {
			this.height = 0;
			this.moveMap = false;
			this.reset = false;
			this.loaded = true;
			}
		}
	}
	this.update = function() {
		if (this.load_Map) {
			for (let i=0;i<playerController_1.data.stageObjects.length;i++) {
				if (playerController_1.data.stageObjects[i] == null) {
					if (mapObjects[i] != null) {
					mapObjects[i] = null;
					mapObjectsImages[i] = null;
					reset = true;
					}
				}
			}
		this.load_Map = false;
		}
		if (this.reset) {
			for (let i=0;i<mapObjects.length;i++) {
				if (mapObjects[i] != null) {
					if (mapObjects[i].color == "cyan") {
						for (let j=0;j<playersEnemies.length;j++) {
							if (playersEnemies[j].name == "player_1") {
							playersEnemies[j].moveX = 0;
							playersEnemies[j].moveY = 0;
							}
						}
					}
				}
			}
		this.map.data.x = this.startMapPos.x;
		this.map.data.y = this.startMapPos.y;
			if (this.colorPalette.textures_enabled) {
			mapTiles = [];
			mapTilesImages = [];
			mapObjects = [];
			mapObjectsImages = [];
			this.loaded = false;
			reset = true;
			}
		}
		if (!this.loaded) {
		this.init(this.moveMap);
		}
		if (this.loaded) {
			if (this.old_X != this.map.data.x || this.old_Y != this.map.data.y) {
			this.moveMap = true;
			this.old_X = this.map.data.x;
			this.old_Y = this.map.data.y;
			}
			if (this.moveMap) {
			this.init(this.moveMap);
			} else {
			this.width = 0;
			this.height = 0;
			}
		}
		for (let i=0;i<mapObjects.length;i++) {
			if (mapObjects[i] != null) {
				if (!this.playerSpawned) {
					if (mapObjects[i].color == "cyan") {
					player = new component(mapObjects[i].x,mapObjects[i].y,this.map.data.tileSize/2,this.map.data.tileSize/2,"blue","rec",0,"player_1","","","","",1,"black",5,2,2);
					playersEnemies.push(player);
					reset = true;
					this.playerSpawned = true;
					}
				}
				for (let j=0;j<playersEnemies.length;j++) {
					if (playersEnemies[j].name == "player_1") {
					if (mapObjects[i].color == "cyan") {
					this.spawn = {x:mapObjects[i].x,y:mapObjects[i].y}
					if (!this.reset) {
					playersEnemies[j].x = playersEnemies[j].moveX+mapObjects[i].x;
					playersEnemies[j].y = playersEnemies[j].moveY+mapObjects[i].y;
					}
					playersEnemies[j].moveAngle = getRotation(playersEnemies[j],cursor);
					if (!popUpWindow.show) {
					playersEnemies[j].angle = getRotation(playersEnemies[j],cursor);
					}
						if (!this.reset) {
							for (let h=0;h<this.map.collisionInfoLayer1.length;h++) {
								if (this.map.collisionInfoLayer1[h].collision == 1) {
								playersEnemies[j].circleLine(mapTiles[h],true,false);
								}
								if (this.map.collisionInfoLayer2[h].collision) {
									if (mapObjects[h] != null) {
									playersEnemies[j].circleLine(mapObjects[h],true,false);
									}
								}
							}
						}
					}
					//player pick ups
						if (!this.reset) {
							if (playersEnemies[j].circleCrashWith(mapObjects[i])) {
								if (mapObjects[i].name == "Yellow Key") {
									if (use) {
									popUpWindow.type = "pickup";
									popUpWindow.name = mapObjects[i].name;
									popUpWindow.show = true;
									}
									if (popUpWindow.pickup) {
									playerController_1.data.inventory.keys.push(mapObjects[i].id);
									mapObjectsImages[i] = null;
									mapObjects[i] = null;
									reset = true;
									}
									if (!popUpWindow.show) {
									popUpWindow.button_Text.globalAlpha = 1;
									}
								}
							} 
							if (mapObjects[i] != null && playersEnemies[j].circleLine(mapObjects[i])) {
								if (mapObjects[i] != null && mapObjects[i].name == "Yellow Door") {
									if (playerController_1.data.inventory.keys.count(mapObjects[i].id) == 0) {
									popUpWindow.need_Text.globalAlpha = 1;
									popUpWindow.need_Text.op2 = "You don't have a Yellow Key!";
									}
									for (let h=0;h<playerController_1.data.inventory.keys.length;h++) {
										if (playerController_1.data.inventory.keys[h] != undefined && playerController_1.data.inventory.keys[h] == mapObjects[i].id) {
											if (use) {
											popUpWindow.type = "open";
											popUpWindow.name = mapObjects[i].name;
											popUpWindow.show = true;
											}
											if (popUpWindow.pickup) {
											mapObjectsImages[i] = null;
											mapObjects[i] = null;
											playerController_1.data.inventory.keys.splice(h,1);
											reset = true;
											}
											if (!popUpWindow.show) {
											popUpWindow.button_Text.globalAlpha = 1;
											}
										}
									}
								}
							}
							if (mapObjects[i] != null && mapObjects[i].circleLine(playersEnemies[j])) {
								if (mapObjects[i] != null && mapObjects[i].name == "Portal") {
									if (use) {
										for (let h=0;h<mapObjects.length;h++) {
											if (mapObjects[h] != null) {
												if (mapObjects[h].name == "Portal Exit" && mapObjects[i].id == mapObjects[h].id) {
												playersEnemies[j].moveX = mapObjects[h].x-this.spawn.x;
												playersEnemies[j].moveY = mapObjects[h].y-this.spawn.y;
												use = false;
												}
											}
										}
									}
									popUpWindow.buttonTextAddition = " to enter Portal";
									popUpWindow.button_Text.globalAlpha = 1;
								}
							}
							if (mapObjects[i] != null && mapObjects[i].circleLine(playersEnemies[j])) {
								if (mapObjects[i] != null && mapObjects[i].name == "Portal Exit") {
									if (use) {
										for (let h=0;h<mapObjects.length;h++) {
											if (mapObjects[h] != null) {
												if (mapObjects[h].name == "Portal" && mapObjects[i].id == mapObjects[h].id) {
												playersEnemies[j].moveX = mapObjects[h].x-this.spawn.x;
												playersEnemies[j].moveY = mapObjects[h].y-this.spawn.y;
												use = false;
												}
											}
										}
									}
									popUpWindow.buttonTextAddition = " to enter Portal";
									popUpWindow.button_Text.globalAlpha = 1;
								}
							}
							//add chests/exits
						}
					}
				}
			}
		}
	}
}

function getMove(currentLevel, type, currentMoves, getById, wantedId) {
this.currentLevel = currentLevel;
this.type = type;
this.currentMoves = currentMoves;
this.getById = getById;
this.wantedId = wantedId
var done = false;
this.randomMove = Math.abs(Math.floor(Math.random()*moves.length));
while (!done) {
	for (let i=0;i<this.currentMoves.length;i++) {
		if (!this.getById) {
			if (moves[this.randomMove] != undefined && this.currentLevel >= moves[this.randomMove].minLevel && moves[this.randomMove].id != currentMoves[i] && moves[this.randomMove].type == this.type) {
			return moves[this.randomMove];
			done = true;
			} else {
			this.randomMove = Math.abs(Math.floor(Math.random()*moves.length));
			}
		} else {
			for (let j=0;j<moves.length;j++) {
				if (moves[j].id == this.wantedId) {
				return moves[j];
				}
			}
		}
	}
}
}

Object.defineProperties(Array.prototype, {
    count: {
        value: function(query) {
            var count = 0;
            for(let i=0; i<this.length; i++)
                if (this[i]==query)
                    count++;
            return count;
        }
    }
});

//key data format {name:Yellow key,id:1}
//set a multiplier * the level then check it with the xp. Max level 100.
function playerController() {
this.data;
this.save_slot = 0;
this.multiplayer = false;
this.moving = false;
this.movement_type = "basic";
this.save_Player = false;
this.load_Player = true;
this.reset_Player = false;
this.loaded = false;
this.init = false;
	this.update = function() {
		if (this.load_Player) {
			if (localStorage.getItem("player_Slot_"+this.save_slot) == null) {
			this.data = player1Data;
			this.save_Player = true;
			this.load_Player = false;
			} else {
			var loadDATA = localStorage.getItem("player_Slot_"+this.save_slot);
			this.data = JSON.parse(loadDATA);
			this.loaded = true;
			this.init = false;
				if (mapManager.map != undefined) {
				mapManager.load_Map = true;
				mapManager.map.data.x = this.data.stagePosition.x;
				mapManager.map.data.y = this.data.stagePosition.y;
				this.load_Player = false;
				}
			}
		}
		if (this.reset_Player) {
		this.loaded = false;
		localStorage.removeItem("player_Slot_"+this.save_slot);
			if (!this.save_Player) {
			this.load_Player = true;
			mapManager.reset = true;
			this.reset_Player = false;
			}
		}
		for (let i=0;i<playersEnemies.length;i++) {
			if (playersEnemies[i].name == this.data.playerId) {
			this.data.stagePosition.x = mapManager.map.data.x;
			this.data.stagePosition.y = mapManager.map.data.y;
				if (this.save_Player) {
				this.data.stageObjects = mapObjects;
				var saveDATA = JSON.stringify(this.data);
				localStorage.setItem("player_Slot_"+this.save_slot, saveDATA);
				this.init = false;
				console.log("Saved");
				this.save_Player = false;
				}
				if (startGame) {
					if (this.loaded && !this.init) {
					playersEnemies[i].moveX = this.data.playerPosition.x;
					playersEnemies[i].moveY = this.data.playerPosition.y;
					playersEnemies[i].health = this.data.health;
					this.init = true;
					}
					if (this.init) {
					this.data.playerPosition.x = playersEnemies[i].moveX;
					this.data.playerPosition.y = playersEnemies[i].moveY;
					this.data.health = playersEnemies[i].health;
					}
					if (this.data.texture_enabled) {
					playersEnemies[i].color = this.data.texture;
					}
					if (!this.multiplayer) {
						if (this.movement_type == "basic") {
							for (let j=0;j<ui.length;j++) {
								if (ui[j].name == "cursor") {
									if (this.moving && !playersEnemies[i].circleCrashWith(ui[j])) {
										if (playersEnemies[i].speed < this.data.maxSpeed) {
										playersEnemies[i].speed += this.data.acceleration;
										}
										if (playersEnemies[i].speed >= this.data.maxSpeed) {
										playersEnemies[i].speed = this.data.maxSpeed;
										}
									} else {
										if (playersEnemies[i].speed > 0) {
										playersEnemies[i].speed -= this.data.acceleration;
										}
										if (playersEnemies[i].speed <= 0) {
										playersEnemies[i].speed = 0;
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

function popUp(type, name) {
this.type = type;
this.name = name;
this.show = false;
this.pickup = false;
this.buttonTextAddition = "";
popUp_Background = new component(400,300,150,50,"darkgrey","rec",0,"","","","","",0,"black",5,2,2);
ui.push(popUp_Background);
popUp_Text = new component(400,300,"10px Consolas","center","white","text",0,"",false,"Pick up a "+this.name+"?","","",0,"black",5,2,2);
ui.push(popUp_Text);
yes_Button = new component(375,315,40,10,"#737373","rec",0,"continue","","","","",0,"black",5,2,2);
ui.push(yes_Button);
yes_Button_Text = new component(375,317.5,"10px Consolas","center","white","text",0,"",false,"Yes","","",0,"black",5,2,2);
ui.push(yes_Button_Text);
no_Button = new component(425,315,40,10,"#737373","rec",0,"continue","","","","",0,"black",5,2,2);
ui.push(no_Button);
no_Button_Text = new component(425,317.5,"10px Consolas","center","white","text",0,"",false,"No","","",0,"black",5,2,2);
ui.push(no_Button_Text);
this.button_Text = new component(-10,-10,"10px Consolas","center","white","text",0,"",false,"Press "+useKey.key.toUpperCase()+"!","","",0,"black",5,2,2);
ui.push(this.button_Text);
this.need_Text = new component(-10,-10,"10px Consolas","center","white","text",0,"",false,"You need a _ !","","",0,"black",5,2,2);
ui.push(this.need_Text);
	this.update = function() {
		this.button_Text.op2 = "Press "+useKey.key.toUpperCase()+this.buttonTextAddition+"!";
		for (let i=0;i<playersEnemies.length;i++) {
			if (playersEnemies[i].name == playerController_1.data.playerId) {
			this.button_Text.x = playersEnemies[i].x;
			this.button_Text.y = playersEnemies[i].y-playersEnemies[i].width/2;
			this.need_Text.x = playersEnemies[i].x;
			this.need_Text.y = playersEnemies[i].y-playersEnemies[i].width/2;
			}
		}
		if (this.show) {
		this.need_Text.globalAlpha = 0;
		this.button_Text.globalAlpha = 0;
		popUp_Background.globalAlpha = 1;
		popUp_Text.globalAlpha = 1;
		yes_Button.globalAlpha = 1;
		yes_Button_Text.globalAlpha = 1;
		no_Button.globalAlpha = 1;
		no_Button_Text.globalAlpha = 1;
		} else {
		this.need_Text.globalAlpha = 0;
		this.buttonTextAddition = "";
		this.button_Text.globalAlpha = 0;
		this.pickup = false;
		popUp_Background.globalAlpha = 0;
		popUp_Text.globalAlpha = 0;
		yes_Button.globalAlpha = 0;
		yes_Button_Text.globalAlpha = 0;
		no_Button.globalAlpha = 0;
		no_Button_Text.globalAlpha = 0;
		}
		if (this.type == "pickup") {
		popUp_Text.op2 = "Pick up a "+this.name+"?";
		}
		if (this.type == "open") {
		popUp_Text.op2 = "Open "+this.name+"?";
		}
		if (pressed && cursor.crashWith(yes_Button)) {
		this.show = false;
		this.pickup = true;
		}
		if (cursor.crashWith(yes_Button)) {
		yes_Button.color = "#969696";
		} else {
		yes_Button.color = "#737373";	
		}
		if (pressed && cursor.crashWith(no_Button)) {
		this.show = false;
		}
		if (cursor.crashWith(no_Button)) {
		no_Button.color = "#969696";
		} else {
		no_Button.color = "#737373";	
		}
	}
}

function gameCamera() {
	this.update = function() {
		for (let i=0;i<playersEnemies.length;i++) {
			if (playersEnemies[i].name == playerController_1.data.playerId) {
				if (!mapManager.reset) {
					if (playersEnemies[i].x <= 50) {
					mapManager.map.data.x += playerController_1.data.maxSpeed;
					}
					if (playersEnemies[i].x >= 750) {
					mapManager.map.data.x -= playerController_1.data.maxSpeed;
					}
					if (playersEnemies[i].y <= 50) {
					mapManager.map.data.y += playerController_1.data.maxSpeed;
					}
					if (playersEnemies[i].y >= 550) {
					mapManager.map.data.y -= playerController_1.data.maxSpeed;
					}
				}
			}
		}
	}
}

function mainMenu() {
this.state = 0;
this.deleteBttn_State = 0;
this.deleteBttn = 0;
this.lock = false;
//main menu
mainMenu_Background = new component(400,300,800,600,"mainMenuBackground","img",0,"","","","","",0,"black",5,2,2);
ui.push(mainMenu_Background);
startButton_Background = new component(400,450,150,50,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(startButton_Background);
startButton_Text = new component(400,460,"30px Consolas","center","white","text",0,"",false,"Start","","",0,"black",5,2,2);
ui.push(startButton_Text);
optionsButton_Background = new component(400,525,150,50,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(optionsButton_Background);
optionsButton_Text = new component(400,535,"30px Consolas","center","white","text",0,"",false,"Settings","","",0,"black",5,2,2);
ui.push(optionsButton_Text);
//loading menu/settings menu
loadMenu_Background = new component(400,300,800,600,"darkgrey","rec",0,"","","","","",0,"black",5,2,2);
ui.push(loadMenu_Background);
loadMenu_Text = new component(400,40,"30px Consolas","center","white","text",0,"",false,"Pick a save slot:","","",0,"black",5,2,2);
ui.push(loadMenu_Text);
//loading menu
slot1Button_Background = new component(400,100,200,70,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(slot1Button_Background);
slot1Button_Text = new component(400,110,"30px Consolas","center","white","text",0,"",false,"Slot 1","","",0,"black",5,2,2);
ui.push(slot1Button_Text);
deleteSlot1Button = new component(500,65,20,20,"closeUIButton","img",0,"",0,0,50,50,0,"black",5,-2,2);
ui.push(deleteSlot1Button);
slot2Button_Background = new component(400,200,200,70,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(slot2Button_Background);
slot2Button_Text = new component(400,210,"30px Consolas","center","white","text",0,"",false,"Slot 2","","",0,"black",5,2,2);
ui.push(slot2Button_Text);
deleteSlot2Button = new component(500,165,20,20,"closeUIButton","img",0,"",0,0,50,50,0,"black",5,-2,2);
ui.push(deleteSlot2Button);
slot3Button_Background = new component(400,300,200,70,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(slot3Button_Background);
slot3Button_Text = new component(400,310,"30px Consolas","center","white","text",0,"",false,"Slot 3","","",0,"black",5,2,2);
ui.push(slot3Button_Text);
deleteSlot3Button = new component(500,265,20,20,"closeUIButton","img",0,"",0,0,50,50,0,"black",5,-2,2);
ui.push(deleteSlot3Button);
warning_Background = new component(400,325,750,100,"grey","rec",0,"","","","","",0,"black",5,2,2);
ui.push(warning_Background);
warning_Text = new component(400,310,"20px Consolas","center","#ececec","text",0,"",false,"Warning this will delete your save data in this slot!","","",0,"red",10,0,0);
ui.push(warning_Text);
warning_Text2 = new component(400,330,"20px Consolas","center","#ececec","text",0,"",false,"If you want to delete the data click the X over the slot.","","",0,"red",10,0,0);
ui.push(warning_Text2);
warning_Text3 = new component(400,350,"20px Consolas","center","#ececec","text",0,"",false,"If you want to cancel right click anywhere on screen.","","",0,"red",10,0,0);
ui.push(warning_Text3);
//settings menu
moveButton_Text = new component(400,100,"30px Consolas","center","white","text",0,"",false,"","","",0,"black",5,2,2);
ui.push(moveButton_Text);
moveButton_Background = new component(400,150,200,70,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(moveButton_Background);
moveButton_Background_Text = new component(400,160,"30px Consolas","center","white","text",0,"",false,"Change","","",0,"black",5,2,2);
ui.push(moveButton_Background_Text);
useButton_Text = new component(400,235,"30px Consolas","center","white","text",0,"",false,"","","",0,"black",5,2,2);
ui.push(useButton_Text);
useButton_Background = new component(400,285,200,70,"#737373","rec",0,"","","","","",0,"black",5,2,2);
ui.push(useButton_Background);
useButton_Background_Text = new component(400,295,"30px Consolas","center","white","text",0,"",false,"Change","","",0,"black",5,2,2);
ui.push(useButton_Background_Text);
closeButton = new component(787.5,12.5,25,25,"closeUIButton","img",0,"",0,0,50,50,0,"black",5,-2,2);
ui.push(closeButton);
	this.update = function() {
		if (this.deleteBttn_State == 1) {
		warning_Text.globalAlpha = 0.7;
		warning_Text2.globalAlpha = 0.7;
		warning_Text3.globalAlpha = 0.7;
		warning_Background.globalAlpha = 0.7;
		} else {
		warning_Text.globalAlpha = 0;
		warning_Text2.globalAlpha = 0;
		warning_Text3.globalAlpha = 0;
		warning_Background.globalAlpha = 0;
		}
		if (!startGame) {
			if (this.state == 0) {
			//main menu logic
			mainMenu_Background.globalAlpha = 1;
			startButton_Background.globalAlpha = 1;
			startButton_Text.globalAlpha = 1;
			optionsButton_Background.globalAlpha = 1;
			optionsButton_Text.globalAlpha = 1;
			loadMenu_Background.globalAlpha = 0;
			loadMenu_Text.globalAlpha = 0;
			slot1Button_Background.globalAlpha = 0;
			slot1Button_Text.globalAlpha = 0;
			deleteSlot1Button.globalAlpha = 0;
			slot2Button_Background.globalAlpha = 0;
			slot2Button_Text.globalAlpha = 0;
			deleteSlot2Button.globalAlpha = 0;
			slot3Button_Background.globalAlpha = 0;
			slot3Button_Text.globalAlpha = 0;
			deleteSlot3Button.globalAlpha = 0;
			moveButton_Text.globalAlpha = 0;
			moveButton_Background.globalAlpha = 0;
			moveButton_Background_Text.globalAlpha = 0;
			useButton_Text.globalAlpha = 0;
			useButton_Background.globalAlpha = 0;
			useButton_Background_Text.globalAlpha = 0;
			closeButton.globalAlpha = 0;
				if (cursor.crashWith(startButton_Background)) {
				startButton_Background.color = "#969696";
				} else {
				startButton_Background.color = "#737373";	
				}
				if (pressed && cursor.crashWith(startButton_Background)) {
				this.state = 1;
				}
				if (cursor.crashWith(optionsButton_Background)) {
				optionsButton_Background.color = "#969696";
				} else {
				optionsButton_Background.color = "#737373";	
				}
				if (pressed && cursor.crashWith(optionsButton_Background)) {
				this.state = 2;
				}
			} else {
				//loading menu logic
				if (this.state == 1) {
				mainMenu_Background.globalAlpha = 0;
				startButton_Background.globalAlpha = 0;
				startButton_Text.globalAlpha = 0;
				optionsButton_Background.globalAlpha = 0;
				optionsButton_Text.globalAlpha = 0;
				loadMenu_Background.globalAlpha = 1;
				loadMenu_Text.globalAlpha = 1;
				loadMenu_Text.op2 = "Pick a save slot:";
				slot1Button_Background.globalAlpha = 1;
				slot1Button_Text.globalAlpha = 1;
				deleteSlot1Button.globalAlpha = 1;
				slot2Button_Background.globalAlpha = 1;
				slot2Button_Text.globalAlpha = 1;
				deleteSlot2Button.globalAlpha = 1;
				slot3Button_Background.globalAlpha = 1;
				slot3Button_Text.globalAlpha = 1;
				deleteSlot3Button.globalAlpha = 1;
				moveButton_Text.globalAlpha = 0;
				moveButton_Background.globalAlpha = 0;
				moveButton_Background_Text.globalAlpha = 0;
				useButton_Text.globalAlpha = 0;
				useButton_Background.globalAlpha = 0;
				useButton_Background_Text.globalAlpha = 0;
				closeButton.globalAlpha = 1;
					if (!cursor.crashWith(deleteSlot1Button)) {
					deleteSlot1Button.op1 = 0;
						if (!popUpWindow.show && cursor.crashWith(slot1Button_Background)) {
						slot1Button_Background.color = "#969696";
						} else {
						slot1Button_Background.color = "#737373";	
						}
						if (pressed && cursor.crashWith(slot1Button_Background)) {
						slotSelector(1);
						}
					} else {
					slot1Button_Background.color = "#737373";
					deleteSlot1Button.op1 = 50;
						if (pressed && cursor.crashWith(deleteSlot1Button)) {
							if (!this.lock && this.deleteBttn != 2 && this.deleteBttn != 3) {
							this.deleteBttn = 1;
							this.deleteBttn_State++;
							this.lock = true;
							}
						}
					}
					if (!cursor.crashWith(deleteSlot2Button)) {
					deleteSlot2Button.op1 = 0;
						if (cursor.crashWith(slot2Button_Background)) {
						slot2Button_Background.color = "#969696";
						} else {
						slot2Button_Background.color = "#737373";	
						}
						if (pressed && cursor.crashWith(slot2Button_Background)) {
						slotSelector(2);
						}
					} else {
					slot2Button_Background.color = "#737373";
					deleteSlot2Button.op1 = 50;
						if (pressed && cursor.crashWith(deleteSlot2Button)) {
							if (!this.lock && this.deleteBttn != 1 && this.deleteBttn != 3) {
							this.deleteBttn = 2;
							this.deleteBttn_State++;
							this.lock = true;
							}
						}
					}
					if (!cursor.crashWith(deleteSlot3Button)) {
					deleteSlot3Button.op1 = 0;
						if (cursor.crashWith(slot3Button_Background)) {
						slot3Button_Background.color = "#969696";
						} else {
						slot3Button_Background.color = "#737373";	
						}
						if (pressed && cursor.crashWith(slot3Button_Background)) {
						slotSelector(3);
						}
					} else {
					slot3Button_Background.color = "#737373";	
					deleteSlot3Button.op1 = 50;
						if (pressed && cursor.crashWith(deleteSlot3Button)) {
							if (!this.lock && this.deleteBttn != 1 && this.deleteBttn != 2) {
							this.deleteBttn = 3;
							this.deleteBttn_State++;
							this.lock = true;
							}
						}
					}
					if (!pressed) {
					this.lock = false;
					}
					if (rPressed) {
					this.deleteBttn_State = 0;
					this.deleteBttn = 0;
					}
					if (this.deleteBttn_State == 2) {
					pressed = false;
						if (this.deleteBttn == 1) {
						playerController_1.save_slot = 1;
						playerController_1.reset_Player = true;
						}
						if (this.deleteBttn == 2) {
						playerController_1.save_slot = 2;
						playerController_1.reset_Player = true;
						}
						if (this.deleteBttn == 3) {
						playerController_1.save_slot = 3;
						playerController_1.reset_Player = true;
						}
					this.deleteBttn_State = 0;
					this.deleteBttn = 0;
					}
					if (cursor.crashWith(closeButton)) {
					closeButton.op1 = 50;
					} else {
					closeButton.op1 = 0;	
					}
					if (this.deleteBttn_State == 0 && pressed && cursor.crashWith(closeButton)) {
					this.state = 0;
					}
				}
			}
		} else {
		mainMenu_Background.globalAlpha = 0;
		startButton_Background.globalAlpha = 0;
		startButton_Text.globalAlpha = 0;
		optionsButton_Background.globalAlpha = 0;
		optionsButton_Text.globalAlpha = 0;
		slot1Button_Background.globalAlpha = 0;
		slot1Button_Text.globalAlpha = 0;
		deleteSlot1Button.globalAlpha = 0;
		slot2Button_Background.globalAlpha = 0;
		slot2Button_Text.globalAlpha = 0;
		deleteSlot2Button.globalAlpha = 0;
		slot3Button_Background.globalAlpha = 0;
		slot3Button_Text.globalAlpha = 0;
		deleteSlot3Button.globalAlpha = 0;
			if (this.state != 2) {
			loadMenu_Background.globalAlpha = 0;
			loadMenu_Text.globalAlpha = 0;
			moveButton_Text.globalAlpha = 0;
			moveButton_Background.globalAlpha = 0;
			moveButton_Background_Text.globalAlpha = 0;
			useButton_Text.globalAlpha = 0;
			useButton_Background.globalAlpha = 0;
			useButton_Background_Text.globalAlpha = 0;
			closeButton.globalAlpha = 0;
			}
		}
		//settings menu logic
		if (this.state == 2) {
		loadMenu_Background.globalAlpha = 1;
		loadMenu_Text.globalAlpha = 1;
		loadMenu_Text.op2 = "Settings:";
		moveButton_Text.globalAlpha = 1;
		moveButton_Background.globalAlpha = 1;
		moveButton_Background_Text.globalAlpha = 1;
		useButton_Text.globalAlpha = 1;
		useButton_Background.globalAlpha = 1;
		useButton_Background_Text.globalAlpha = 1;
		closeButton.globalAlpha = 1;
			if (cursor.crashWith(moveButton_Background)) {
			moveButton_Background.color = "#969696";
			} else {
			moveButton_Background.color = "#737373";	
			}
			if (pressed && cursor.crashWith(moveButton_Background)) {
			keySetter("moveKey");
			}
			if (cursor.crashWith(useButton_Background)) {
			useButton_Background.color = "#969696";
			} else {
			useButton_Background.color = "#737373";	
			}
			if (pressed && cursor.crashWith(useButton_Background)) {
			keySetter("useKey");
			}
			if (cursor.crashWith(closeButton)) {
			closeButton.op1 = 50;
			} else {
			closeButton.op1 = 0;	
			}
			//save settings when closing
			if (pressed && !unlockControls && cursor.crashWith(closeButton)) {
			this.state = 0;
			}
		}
	}
}

function slotSelector(slot) {
playerController_1.save_slot = slot;
playerController_1.load_Player = true;
startGame = true;
}

var pause = false;
var startGame = false;
function initGame() {
keyUpdater = new updateKeys();
updaters.push(keyUpdater);
playerController_1 = new playerController();
updaters.push(playerController_1);
mapManager = new mapLoader();
updaters.push(mapManager);
mainCamera = new gameCamera();
updaters.push(mainCamera);
mainMenu = new mainMenu();
ui.push(mainMenu);
keyLoader();
popUpWindow = new popUp("pickup", "");
ui.push(popUpWindow);
cursor = new component(-5,-5,2,2,"orange","rec",0,"cursor","","","","",1,"black",5,2,2);
ui.push(cursor);
cursorMover = new updatePos(cursor,mousePos);
updaters.push(cursorMover);
document.addEventListener("keydown",keyDownHandler, false);	
document.addEventListener("keyup",keyUpHandler, false);
sreenResizer(800,600);
var updateLoop = setInterval("mainUpdateLoop()",0.1);
}

function component(x,y,width,height,color,type,id,name,op1,op2,op3,op4,globalAlpha,shadowColor,shadowBlur,shadowOffsetX,shadowOffsetY) {
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.color = color;
this.type = type;
this.id = id;
this.name = name;
//drawing data
this.points = [];
this.centered = true;
this.globalAlpha = globalAlpha;
this.shadowColor = shadowColor;
this.shadowBlur = shadowBlur;
this.shadowOffsetX = shadowOffsetX;
this.shadowOffsetY = shadowOffsetY;
if (this.type != "light") {
this.radius = (this.width/2);
}
this.op1 = op1;
this.op2 = op2;
this.op3 = op3;
this.op4 = op4;
//player data
this.moveX = 0;
this.moveY = 0;
this.alive = true;
this.health = 100;
this.speed = 0;
this.angle = 0;
this.moveAngle = 0;
this.rotateSpeed = 0;
	this.rotatePoints = function(point_X, point_Y, XorY) {
	this.XorY = XorY;
		if (this.XorY == "x") {
		return Math.cos(this.angle)*(point_X-this.x)-Math.sin(this.angle)*(point_Y-this.y)+this.x;
		} else
		if (this.XorY == "y") {
		return Math.sin(this.angle)*(point_X-this.x)+Math.cos(this.angle)*(point_Y-this.y)+this.y;
		}
	},
	this.update = function() {
	//drawing functions
		switch(this.type) {
		case "text":
		ctx.globalAlpha = this.globalAlpha;
		ctx.shadowColor = this.shadowColor;
		ctx.shadowBlur = this.shadowBlur;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
		ctx.font = this.width;
		ctx.textAlign = this.height;
		ctx.fillStyle = this.color;
			if (!this.op1) {
			ctx.fillText(this.op2, this.x, this.y);
			}
			if (this.op1) {
			ctx.strokeText(this.op2, this.x, this.y);
			}
		break;
		case "rec":
		ctx.globalAlpha = this.globalAlpha;
		ctx.shadowColor = this.shadowColor;
		ctx.shadowBlur = this.shadowBlur;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
			//calculate points
			if (this.centered) {
			this.points = [{x:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "y")}
			,{x:this.rotatePoints(-this.width/2+this.x, this.height/2+this.y, "x"),y:this.rotatePoints(-this.width/2+this.x, this.height/2+this.y, "y")}
			,this.points[0]];
			} else {
			this.points = [{x:this.rotatePoints(this.x, this.y, "x"),y:this.rotatePoints(this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.y, "x"),y:this.rotatePoints(this.width+this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.height+this.y, "x"),y:this.rotatePoints(this.width+this.x, this.height+this.y, "y")}
			,{x:this.rotatePoints(this.x, this.height+this.y, "x"),y:this.rotatePoints(this.x, this.height+this.y, "y")}
			,this.points[0]];
			}
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);//center position
			for (let i=0;i<this.points.length;i++) {
				if (this.points[i] != undefined) {
				ctx.lineTo(this.points[i].x, this.points[i].y);
				}
			}
		ctx.fillStyle = this.color;
		ctx.fill();
		break;
		case "tri":
		ctx.globalAlpha = this.globalAlpha;
		ctx.shadowColor = this.shadowColor;
		ctx.shadowBlur = this.shadowBlur;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
			//calculate points
			if (this.centered) {
			this.points = [{x:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(-this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, -this.height/2+this.y, "y")}
			,{x:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "x"),y:this.rotatePoints(this.width/2+this.x, this.height/2+this.y, "y")}
			,this.points[0]];
			} else {
			this.points = [{x:this.rotatePoints(this.x, this.y, "x"),y:this.rotatePoints(this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.y, "x"),y:this.rotatePoints(this.width+this.x, this.y, "y")}
			,{x:this.rotatePoints(this.width+this.x, this.height+this.y, "x"),y:this.rotatePoints(this.width+this.x, this.height+this.y, "y")}
			,this.points[0]];
			}
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);//center position
			for (let i=0;i<this.points.length;i++) {
				if (this.points[i] != undefined) {
				ctx.lineTo(this.points[i].x, this.points[i].y);
				}
			}
		ctx.fillStyle = this.color;
		ctx.fill();
		break;
		case "img":
		this.img = document.getElementById(this.color);
		if (this.op1 == undefined || this.op1 == "") {
		this.op1 = 0;
		}
		if (this.op2 == undefined || this.op2 == "") {
		this.op2 = 0;
		}
		if (this.op3 == undefined || this.op3 == "") {
		this.op3 = this.img.width;
		}
		if (this.op4 == undefined || this.op4 == "") {
		this.op4	= this.img.height;
		}
		ctx.globalAlpha = this.globalAlpha;
		ctx.shadowColor = this.shadowColor;
		ctx.shadowBlur = this.shadowBlur;
		ctx.shadowOffsetX = this.shadowOffsetX;
		ctx.shadowOffsetY = this.shadowOffsetY;
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.drawImage(this.img, this.op1, this.op2, this.op3, this.op4, this.width/-2, this.height/-2, this.width, this.height);
		ctx.restore();
		break;
		}
	}
	this.newPos = function() {
		//update component data
		if (this.health > 0) {
		this.alive = true;
		} else {
		this.alive = false;
		this.health = 0;
		}
		if (this.alive && !pause && !popUpWindow.show) {
		this.radius = (this.width/2);
		this.angle += this.rotateSpeed;
			if (this.globalAlpha != 0) {
			this.moveX += (Math.round(this.speed)*Math.sin(this.moveAngle));
			this.moveY += (Math.round(-this.speed)*Math.cos(this.moveAngle));
			}
		}
	}
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
	//circle vs. circle
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
	//circle vs. rectangle
	this.mixCrashWith = function(otherobj) {
		var widthHalf = (otherobj.width/2);
		var heightHalf = (otherobj.height/2);
		var distance_x = Math.abs(this.x - otherobj.x);
		var distance_y = Math.abs(this.y - otherobj.y);
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
	},
	this.distance = function(point_1, point_2) {
	var dx = point_1.x-point_2.x;
	var dy = point_1.y-point_2.y;
	return Math.sqrt((dx*dx)+(dy*dy));
	},
	//get direction of an object
	this.getDir = function(otherobj, return_) {
	this.otherobj = otherobj;
	this.return_ = return_;
	var result = "";
	this.anglef = (Math.atan2(-this.y+this.otherobj.y, -this.x+this.otherobj.x)+1.57079633).toFixed(2);
		if (!this.return_) {
			if (this.anglef > 5.89 && this.anglef <= 6.28) {
			result = "North";
			}
			if (this.anglef <= 0 && this.anglef > -0.39) {
			result = "North";
			}
			if (this.anglef >= 0 && this.anglef < 0.39) {
			result = "North";
			}
			if (this.anglef <= -0.39 && this.anglef >= -1.17) {
			result =  "NorthWest";
			}
			if (this.anglef >= 0.39 && this.anglef <= 1.17) {
			result =  "NorthEast";
			}
			if (this.anglef > 1.17 && this.anglef < 1.96) {
			result = "East";
			}
			if (this.anglef >= 1.96 && this.anglef <= 2.74) {
			result = "SouthEast";
			}
			if (this.anglef > 2.74 && this.anglef < 3.53) {
			result = "South";
			}
			if (this.anglef >= 3.53 && this.anglef <= 4.31) {
			result = "SouthWest";
			}
			if (this.anglef == -1.57) {
			result = "West";
			}
			if (this.anglef > 4.31 && this.anglef < 5.10) {
			result = "West";
			}
			if (this.anglef >= 5.10 && this.anglef <= 5.89) {
			result = "NorthWest";
			}
		} else {
		result = this.anglef;
		}
		return result;
	},
	//circle vs. line
	this.circleLine = function(otherobj, act, house) {
	this.otherobj = otherobj;
	this.act = act;
	this.house = house;
	if (this.house) {
		if (otherobj.points.length != 0) {
		var topSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[6],otherobj.points[7]]);
		var bottomSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[8]]);
		var leftSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[5],otherobj.points[6]]);
		var rightSide = this.getClosestPointOnLines({x:this.x,y:this.y}, [otherobj.points[7],otherobj.points[8]]);
		var topLeftDir = this.getDir(otherobj.points[6], false);
		var topLeftDir2 = this.getDir(otherobj.points[6], true);
		var topRightDir = this.getDir(otherobj.points[7], false);
		var bottomLeftDir = this.getDir(otherobj.points[5], false);
		var bottomRightDir = this.getDir(otherobj.points[8], false);
		var topSideDist = this.distance(topSide, this);
		var bottomSideDist = this.distance(bottomSide, this);
		var leftSideDist = this.distance(leftSide, this);
		var rightSideDist = this.distance(rightSide, this);
		}
	}
	var t = this.getClosestPointOnLines({x:this.x,y:this.y}, otherobj.points);
	var dir = this.getDir(t, false);
	var distance = this.distance(t, this);
	var topLeftCheck = false;
	var topRightCheck = false;
	var bottomLeftCheck = false;
	var bottomRightCheck = false;
		if (distance <= this.radius) {
			if (this.act) {
				if (this.house) {
					if (Math.abs(leftSide.x-topSide.x) <= this.radius && Math.abs(leftSide.x-topSide.x) > 5 && Math.abs(leftSide.y-topSide.y) <= this.radius && Math.abs(leftSide.y-topSide.y) > 5) {
						if (topLeftDir == "NorthEast") {
						this.moveX = this.moveX+Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "NorthWest") {
						this.moveX = this.moveX-Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthWest") {
						this.moveX = this.moveX+Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(topSideDist-this.radius);
						}
						if (topLeftDir == "SouthEast") {
						this.moveX = this.moveX-Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(topSideDist-this.radius);
						}
					topLeftCheck = true;
					} else {
					topLeftCheck = false;
					}
					if (Math.abs(rightSide.x-topSide.x) <= this.radius && Math.abs(rightSide.x-topSide.x) > 5 && Math.abs(rightSide.y-topSide.y) <= this.radius && Math.abs(rightSide.y-topSide.y) > 5) {
						if (topRightDir == "NorthWest") {
						this.moveX = this.moveX+Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "NorthEast") {
						this.moveX = this.moveX-Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthWest") {
						this.moveX = this.moveX+Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(topSideDist-this.radius);
						}
						if (topRightDir == "SouthEast") {
						this.moveX = this.moveX-Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(topSideDist-this.radius);
						}
					topRightCheck = true;
					} else {
					topRightCheck = false;
					}
					if (Math.abs(leftSide.x-bottomSide.x) <= this.radius && Math.abs(leftSide.x-bottomSide.x) > 5 && Math.abs(leftSide.y-bottomSide.y) <= this.radius && Math.abs(leftSide.y-bottomSide.y) > 5) {
						if (bottomLeftDir == "NorthWest") {
						this.moveX = this.moveX+Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "NorthEast") {
						this.moveX = this.moveX-Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthWest") {
						this.moveX = this.moveX+Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomLeftDir == "SouthEast") {
						this.moveX = this.moveX-Math.abs(leftSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(bottomSideDist-this.radius);
						}
					bottomLeftCheck = true;
					} else {
					bottomLeftCheck = false;
					}
					if (Math.abs(rightSide.x-bottomSide.x) <= this.radius && Math.abs(rightSide.x-bottomSide.x) > 5 && Math.abs(rightSide.y-bottomSide.y) <= this.radius && Math.abs(rightSide.y-bottomSide.y) > 5) {
						if (bottomRightDir == "NorthEast" || bottomRightDir == "East") {
						this.moveX = this.moveX+Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "NorthWest" || bottomRightDir == "West") {
						this.moveX = this.moveX-Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY+Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthWest") {
						this.moveX = this.moveX+Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(bottomSideDist-this.radius);
						}
						if (bottomRightDir == "SouthEast") {
						this.moveX = this.moveX-Math.abs(rightSideDist-this.radius);
						this.moveY = this.moveY-Math.abs(bottomSideDist-this.radius);
						}
					bottomRightCheck = true;
					} else {
					bottomRightCheck = false;
					}
				}
				if (!topLeftCheck && !topRightCheck && !bottomLeftCheck && !bottomRightCheck || !this.house) {
					if (dir == "NorthWest") {
					this.moveX = this.moveX+Math.abs(distance-this.radius);
					this.moveY = this.moveY+Math.abs(distance-this.radius);
					} else
					if (dir == "NorthEast") {
					this.moveX = this.moveX-Math.abs(distance-this.radius);
					this.moveY = this.moveY+Math.abs(distance-this.radius);
					} else
					if (dir == "SouthWest") {
					this.moveX = this.moveX+Math.abs(distance-this.radius);
					this.moveY = this.moveY-Math.abs(distance-this.radius);
					} else
					if (dir == "SouthEast") {
					this.moveX = this.moveX-Math.abs(distance-this.radius);
					this.moveY = this.moveY-Math.abs(distance-this.radius);
					}
					if (dir == "North") {
					this.moveY = this.moveY+Math.abs(distance-this.radius);
					} else
					if (dir == "South") {
					this.moveY = this.moveY-Math.abs(distance-this.radius);
					} else
					if (dir == "West") {
					this.moveX = this.moveX+Math.abs(distance-this.radius);
					} else
					if (dir == "East") {
					this.moveX = this.moveX-Math.abs(distance-this.radius);
					}
				}
			}
		return true;
		}
	return false;
	}
	//I got this from stack overflow! It works really well
	this.getClosestPointOnLines = function(pXy, aXys) {
	var minDist;
	var fTo;
	var fFrom;
	var x;
	var y;
	var i;
	var dist;
		if (aXys.length > 1) {
			for (var n = 1 ; n < aXys.length ; n++) {
				if (aXys[n] != undefined) {
					if (aXys[n].x != aXys[n - 1].x) {
					var a = (aXys[n].y - aXys[n - 1].y) / (aXys[n].x - aXys[n - 1].x);
					var b = aXys[n].y - a * aXys[n].x;
					dist = Math.abs(a * pXy.x + b - pXy.y) / Math.sqrt(a * a + 1);
					}
					else
					dist = Math.abs(pXy.x - aXys[n].x)
					// length^2 of line segment 
					var rl2 = Math.pow(aXys[n].y - aXys[n - 1].y, 2) + Math.pow(aXys[n].x - aXys[n - 1].x, 2);
					// distance^2 of pt to end line segment
					var ln2 = Math.pow(aXys[n].y - pXy.y, 2) + Math.pow(aXys[n].x - pXy.x, 2);
					// distance^2 of pt to begin line segment
					var lnm12 = Math.pow(aXys[n - 1].y - pXy.y, 2) + Math.pow(aXys[n - 1].x - pXy.x, 2);
					// minimum distance^2 of pt to infinite line
					var dist2 = Math.pow(dist, 2);
					// calculated length^2 of line segment
					var calcrl2 = ln2 - dist2 + lnm12 - dist2;
					// redefine minimum distance to line segment (not infinite line) if necessary
					if (calcrl2 > rl2)
						dist = Math.sqrt(Math.min(ln2, lnm12));
					if ((minDist == null) || (minDist > dist)) {
						if (calcrl2 > rl2) {
							if (lnm12 < ln2) {
							fTo = 0;//nearer to previous point
							fFrom = 1;
							}
							else {
							fFrom = 0;//nearer to current point
							fTo = 1;
							}
						}
						else {
						// perpendicular from point intersects line segment
						fTo = ((Math.sqrt(lnm12 - dist2)) / Math.sqrt(rl2));
						fFrom = ((Math.sqrt(ln2 - dist2)) / Math.sqrt(rl2));
						}
					minDist = dist;
					i = n;
					}
				}
			}
		var dx = aXys[i - 1].x - aXys[i].x;
		var dy = aXys[i - 1].y - aXys[i].y;
		x = aXys[i - 1].x - (dx * fTo);
		y = aXys[i - 1].y - (dy * fTo);
		}
	return { 'x': x, 'y': y, 'i': i, 'fTo': fTo, 'fFrom': fFrom, 'line': aXys[i]};
	}
}

var reset = false;
var loaded = false;
function mainUpdateLoop() {
	if (!loaded) {
	mainObjectArray = updaters.concat(mapTiles,mapTilesImages,mapObjects,mapObjectsImages,playersEnemies,ui);
	loaded = true;
	}
	if (reset) {
	mainObjectArray = [];
	loaded = false;
	reset = false;
	}
sreenResizer(800,600);
renderer();
}

//Key init
var use = false;
function keyInit() {
moveKey = new keyMaker("moveKey", moveButton_Text, "Move:", "w", false, "playerController_1.moving=true", "playerController_1.moving=false");
keys.push(moveKey);
useKey = new keyMaker("useKey", useButton_Text, "Use/Interact:", "e", false, "use=true", "use=false");
keys.push(useKey);
}

//Keybinder
var keys = [];
var keyHit = false;
var unlockControls = false;
var keyPressed = "";
function keyMaker(name, object, objectText, key, runIfPaused, downCode, upCode) {
this.name = name;
this.object = object;
this.objectText = objectText;
this.key = key;
this.runIfPaused = runIfPaused;
this.downCode = downCode;
this.upCode = upCode;
this.lock = 0;
this.locking = false;
	this.save = function() {
	localStorage.setItem(this.name, this.key);
	},
	this.load = function() {
		if (localStorage.getItem(this.name) != null) {
		this.key = localStorage.getItem(this.name);
		}
	},
	this.setText = function() {
		if (this.locking) {
		this.lock = 1;
		} else {
		this.lock = 0;
		}
		if (this.lock == 1) {
		this.object.op2 = "Hit Any Key";	
			if (keyHit) {
			this.key = keyPressed;
			unlockControls = false;
			this.save();
			this.locking = false;
			this.lock = 0;
			keyHit = false;
			}
		} else {
		this.object.op2 = this.objectText+" "+this.key.toUpperCase();	
		}
	},
	this.runCode = function(upOrDown) {
	this.upOrDown = upOrDown;
		if (this.upOrDown == "down") {
			if (this.runIfPaused) {
			eval(this.downCode);
			} else {
				if (!pause) {
				eval(this.downCode);
				}
			}
		} else if (this.upOrDown == "up") {
			if (this.runIfPaused) {
			eval(this.upCode);
			} else {
				if (!pause) {
				eval(this.upCode);
				}
			}
		}
	}
}
function keyLoader() {
	keyInit();
	for (let i=0;i<keys.length;i++) {
	keys[i].load();
	}
}
function updateKeys() {
	this.update = function() {
		for (let i=0;i<keys.length;i++) {
		keys[i].setText();
		}
	}
}
function keySetter(name) {
this.name = name;
unlockControls = true;
	for (let i=0;i<keys.length;i++) {
		if (keys[i].name == this.name) {
		keys[i].locking = true;
		} else {
		keys[i].locking = false;	
		}
	}
}
function keyDownHandler(event) {
keyPressed = event.key;
	if (keyPressed && unlockControls == true) {
	keyHit = true;
	}
	for (let i=0;i<keys.length;i++) {
		switch (keyPressed) {
			case keys[i].key:
			keys[i].runCode("down");
			break;
		}
	}
}
function keyUpHandler(event) {
keyPressed = event.key;
	for (let i=0;i<keys.length;i++) {
		switch (keyPressed) {
			case keys[i].key:
			keys[i].runCode("up");
			break;
		}
	}
}