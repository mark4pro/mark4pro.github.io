var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
function resizeHandler() {
var nativeWidth = JSONREADER.returnParse("canvas").nativeWidth; 
var nativeHeight = JSONREADER.returnParse("canvas").nativeHeight;
deviceWidth = window.innerWidth;
deviceHeight = window.innerHeight;
var scaleFillNativeWidth = deviceWidth / nativeWidth;
var scaleFillNativeHeight = deviceHeight / nativeHeight;
Screen.width = deviceWidth;
Screen.height = deviceHeight;
ctx.setTransform(scaleFillNativeWidth,0,0,scaleFillNativeHeight,0,0);
console.log("Scale Fill: W: " + scaleFillNativeWidth + " H: " + scaleFillNativeHeight);
}