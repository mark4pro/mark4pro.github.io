function resetObjectArrays() {
var collisionLayer = [];
var backgroundLayer = [];
var lowerObjectLayer = [];
var playerEnemySpawnLayer = [];
var upperObjectLayer = [];
var wallLayer = [];
var aboveWallLayer = [];
var uiLayer = [];
}
function arrayRenderer() {
	for (let i=0,j=mainObjectArray.length;i<j;i++) {
		if (mainObjectArray[i].alive === true) {
		mainObjectArray[i].update();
		}
		if (pause === false) {
		mainObjectArray[i].newPos();
		}
	}
}