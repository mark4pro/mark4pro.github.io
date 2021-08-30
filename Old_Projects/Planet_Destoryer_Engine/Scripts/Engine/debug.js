var fps = {
startTime : 0,
frameNumber : 0,
	getFPS : function(){
	this.frameNumber++;
	var d = new Date().getTime(),currentTime = (d-this.startTime)/600,result = Math.floor((this.frameNumber/currentTime));
		if( currentTime > 1 ){
		this.startTime = new Date().getTime();
		this.frameNumber = 0;
		}
	return result;
	}
};
function FPS_CONTROLLER() {
	if (debug) {
	FPSText.globalAlpha = 1;
	FPSText.text = "FPS: "+fps.getFPS();
	} else {
	FPSText.globalAlpha = 0;
	}
	if (UI_Shadows) {
		FPSText.shadowColor_ = "black";
		FPSText.shadowBlur_ = 2;
		FPSText.shadowOffsetX_ = 1;
		FPSText.shadowOffsetY_ = 1;
	}
	if (!UI_Shadows) {
		FPSText.shadowColor_ = "";
		FPSText.shadowBlur_ = 0;
		FPSText.shadowOffsetX_ = 0;
		FPSText.shadowOffsetY_ = 0;
	}
}
var debugUI = {
loaded:false,
	loadLevel:function(){
		if (!debugUI.loaded) {
		//level objects go here
		//***(width, height, color, x, y, type, radius, outcolor, thickness)
		//collisionLayer|same layer bottom
		FPSText = new component("30px","arial bold","gray",10,25,"text",false,"start","FPS: ");
		uiLayer.push(FPSText);
		//uiLayer|same layer top
		debugUI.loaded = true;
		}
	}
}