var JSONREADER = {
SetupData_:JSON.parse(SetupData),
SetupCanvasData_:JSON.parse(SetupCanvasData),
gameData_:JSON.parse(gameData),
	returnParse:function(type){
		if (type == "page") {
		return JSONREADER.SetupData_;
		}
		if (type == "canvas") {
		return JSONREADER.SetupCanvasData_;
		}
		if (type == "game") {
		return JSONREADER.gameData_;
		}
	}
}