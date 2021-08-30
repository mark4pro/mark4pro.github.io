function update() {
mainObjectArray = collisionLayer.concat(backgroundLayer, lowerObjectLayer, playerEnemySpawnLayer, upperObjectLayer, wallLayer, aboveWallLayer, uiLayer);
//key binder update function
keyBinderUpdate();
//update info logic
if (openPatchInfo === 1) {
document.getElementById("updateInfo").style.visibility = "visible";
}
if (openPatchInfo === 0) {
document.getElementById("updateInfo").style.visibility = "hidden";
}
//game update function
if (typeof gameUpdate === 'function') {
gameUpdate();
}
//renderer
arrayRenderer();
}