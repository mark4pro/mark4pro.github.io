//Set screen size
screen.setResolution(new Vector2(800, 500));

//House constructor
function House(layerNumber=[1,1,1,1], houseData= new Vector2(20, 45, 0), floorRoofTexture=new Vector2(), lightData=new Vector2(1,50,1,0,["white"]), base=EMPTY_OBJECT, line=DEFAULT_LINE) {
	this.layerNumber = layerNumber; //0- floor, 1- wall, 2- light, 3- roof
	this.houseData = houseData; //x- wall width, y- door width, r- door offset
	this.floorRoofTexture = floorRoofTexture; //x- floor texture, y- roof texture
	this.lightData = lightData; //x- lightIntensity.x, y- lightIntensity.y, r- alpha, o- comp, s- light color array
	this.base = base;
	this.line = line;
	this.type = "rectangle";
	this.floor = new Sprite(this.layerNumber[0], new baseObject(new nameTag(this.base.nameTag.name+"_floor", this.base.nameTag.tag), this.base.size, this.base.position, this.floorRoofTexture.x));
	this.light = new Light(this.layerNumber[2], new baseObject(new nameTag(this.base.nameTag.name+"_light", this.base.nameTag.tag), this.base.size.div(2), this.base.position, this.lightData.s), this.lightData);
	this.roof = new Sprite(this.layerNumber[3], new baseObject(new nameTag(this.base.nameTag.name+"_roof", this.base.nameTag.tag), this.base.size, this.base.position, this.floorRoofTexture.y));
	let points = [];
	this.getPoints = function() {
		return points;
	}
	this.draw = function() {
		this.floor.base.size = this.base.size;
		this.floor.base.position = this.base.position;
		this.floor.base.color = this.floorRoofTexture.x;
		this.roof.base.size = this.base.size;
		this.roof.base.position = this.base.position;
		this.roof.base.color = this.floorRoofTexture.y;
		this.light.base.size = this.base.size.div(2);
		this.light.base.position = this.base.position;
		this.light.setColor(this.lightData.s);
		this.lightData.x = clamp(this.lightData.x, 1, this.base.size.x);
		this.lightData.y = clamp(this.lightData.y, 10, this.base.size.y);
		setupObject(this.base, this.line);
		points = [
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.base.size.x/2, this.base.position.y-this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x-this.base.size.x/2, this.base.position.y-this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x-this.base.size.x/2, this.base.position.y+this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.houseData.r-this.houseData.y/2, this.base.position.y+this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.houseData.r-this.houseData.y/2, this.base.position.y+this.base.size.y/2-this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x-this.base.size.x/2+this.houseData.x, this.base.position.y+this.base.size.y/2-this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x-this.base.size.x/2+this.houseData.x, this.base.position.y-this.base.size.y/2+this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.base.size.x/2-this.houseData.x, this.base.position.y-this.base.size.y/2+this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.base.size.x/2-this.houseData.x, this.base.position.y+this.base.size.y/2-this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.houseData.r+this.houseData.y/2, this.base.position.y+this.base.size.y/2-this.houseData.x), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.houseData.r+this.houseData.y/2, this.base.position.y+this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.base.size.x/2, this.base.position.y+this.base.size.y/2), this.base.position.r),
			this.base.rotOrigin.rotateVector2(new Vector2(this.base.position.x+this.base.size.x/2, this.base.position.y-this.base.size.y/2), this.base.position.r)];
		ctx.beginPath();
		ctx.moveTo(points[0], points[0]);
		for (let i=0;i<points.length;i++) {
			ctx.lineTo(points[i].x, points[i].y);
		}
		if (!this.line.stroked) {
			ctx.fill();
		} else {
			ctx.stroke();
		}
	}
	if (layerNumber[1] >= 1 && layerNumber[1] <= 8) {
		layer[layerNumber[1]].push(this);
		loaded = false;
	}
}

//Paths
const animationPath = "Animations/";
const bossessPath = "Bosses/";
const bulletsPath = "Bullets/";
const cratesPath = "Crates/";
const enemiesPath = "Enemies/";
const eventsPath = "Events/";
const levelassetsPath = "Level_Assets/";
const playerShipsPath = "Player_Ships/";

//Audio

//Images
const Floor_1 = new imageData("Floor_1", imagePath+levelassetsPath+"Floor_1.png", new Vector2(100, 100));
const Roof_1 = new imageData("Roof_1", imagePath+levelassetsPath+"Roof_1.png", new Vector2(120, 140));
const Background_1 = new imageData("Background_1", imagePath+levelassetsPath+"Wave_1-4_Background.png", new Vector2(800, 390));

//Controls

//Game data
const playAreaCenter = screen.halfResolution.subV(new Vector2(0, 55));
const players = [];
let data = {
	"playmode":0, //0- 
	"currentCampaign":null,
};

function campaign() {
	
}

testBackground = new Sprite(1, new baseObject(new nameTag("", ""), Background_1.getSize(), playAreaCenter, Background_1.getColor()));
testHouse = new House([2,4,3,5], new Vector2(10, 30, 0), new Vector2(Floor_1.getColor(), Roof_1.getColor(0)), new Vector2(1,75, 0.2,0,["rgba(256,256,256,0.5)"]), new baseObject(new nameTag("test", "test"), new Vector2(200, 100), screen.halfResolution, new colorData("grey")))