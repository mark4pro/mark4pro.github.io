var level1 = {
loaded:false,
levelNumber:0,
	resetLevel:function(){
		if (level1.levelNumber !== level) {
		level1.loaded = false;
		resetObjectArrays();
		}
	},
	loadLevel:function(){
		if (level1.levelNumber === level && !level1.loaded) {
		//level objects go here
		//***(width, height, color, x, y, type, radius, outcolor, thickness)
		//collisionLayer|same layer bottom
		end = new component(20,20,"blue",790,490,"rec");
		collisionLayer.push(end);
		start = new component(20,20,"red",10,10,"rec");
		start.aiSpeed = 0.2;
		collisionLayer.push(start);
		//uiLayer|same layer top
		level1.loaded = true;
		}
	}
}