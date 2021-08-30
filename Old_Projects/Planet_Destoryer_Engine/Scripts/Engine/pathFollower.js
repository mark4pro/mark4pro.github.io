//A path following script
var grid;
var path;
var pathFinders = [];
var scale = 3;
var gridManager = {
	grid: new PF.Grid(Math.floor(JSONREADER.returnParse("canvas").nativeWidth/scale), Math.floor(JSONREADER.returnParse("canvas").nativeHeight/scale)),
	finder: new PF.AStarFinder({
	heuristic: PF.Heuristic.chebyshev,
	allowDiagonal: true,
	dontCrossCorners: true,
	biDirectional: true,
	weight: 10
	})
};
function follower(object, pathArray) {
this.object = object;
this.pathArray = pathArray;
this.speedI = 0;
this.i = 0;
this.done = false;
	this.update = function() {
		if (this.i<this.pathArray.length-1) {
			if (this.object.x/scale !== this.pathArray[this.pathArray.length-1][0] || this.object.y/scale !== this.pathArray[this.pathArray.length-1][1]) {
			this.speedI += this.object.aiSpeed;
			this.i = Math.round(this.speedI);
			this.object.x = this.pathArray[this.i][0]*scale;
			this.object.y = this.pathArray[this.i][1]*scale;
			object.angle = degreeToRadian(lookAt(object,[this.pathArray[this.i][0]*scale,this.pathArray[this.i][1]*scale],-45,'array'));
			}
			if (this.object.x/scale == this.pathArray[this.pathArray.length-1][0] && this.object.y/scale == this.pathArray[this.pathArray.length-1][1]) {
			this.done = true;
			} else {
			this.done = false;
			}
		}
	}
}
function pathFinding(object, target) {
this.object = object;
this.target = target;
grid = gridManager.grid.clone();
path = gridManager.finder.findPath(Math.floor(this.object.x/scale), Math.floor(this.object.y/scale), Math.floor(this.target.x/scale), Math.floor(this.target.y/scale), grid);
pathFinders.push(follower_ = new follower(this.object, path));
}
function pathUpdater() {
	for (let i=0;i<pathFinders.length;i++) {
	pathFinders[i].update();
	}	
}