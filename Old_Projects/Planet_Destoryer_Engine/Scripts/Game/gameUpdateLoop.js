function gameUpdate() {
//levels go here
	debugUI.loadLevel();
	if (debugUI.loaded) {
	FPS_CONTROLLER();
	}
	if (typeof level1 === 'object') {
	level1.resetLevel();
	level1.loadLevel();
	//loop when game logic is not paused
		if (!pause) {
			if (level1.levelNumber === level && level1.loaded) {
			
			}
		}
	}
	for (let i=0;i<FunctionArray.length;i++) {
	FunctionArray[i]();
	}
}
var pathFindingUpdater = setInterval(function(){
pathUpdater();
},10);
