modVars.addVar("Abyss_Color_Changer", "uiLoaded", false);
modVars.addVar("Abyss_Color_Changer", "previewToggle", false);

//Allowed maps
modVars.addVar("Abyss_Color_Changer", "isOnAllowed", false);
modVars.addVar("Abyss_Color_Changer", "allowedMaps", ["Abyss"]);

//Color vector
modVars.addVar("Abyss_Color_Changer", "abyssColorVec", new Vector2(0, 0, 0));

//R
modVars.addVar("Abyss_Color_Changer", "abyssColorRTitle", document.createElement("p"));
getModVar("Abyss_Color_Changer", "abyssColorRTitle").innerHTML = "R: ";
getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.textAlign = "center";
getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.color = "white";
getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorRTitle").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorRTitle"));
modVars.addVar("Abyss_Color_Changer", "abyssColorRSlider", document.createElement("input"));
getModVar("Abyss_Color_Changer", "abyssColorRSlider").classList.add("slider");
getModVar("Abyss_Color_Changer", "abyssColorRSlider").type = "range";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").min = "0";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").max = "255";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").value = "0";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.appearance = "none";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.background = "lightgrey";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.outline = "none";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.borderRadius = "90px";
getModVar("Abyss_Color_Changer", "abyssColorRSlider").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorRSlider"));
//G
modVars.addVar("Abyss_Color_Changer", "abyssColorGTitle", document.createElement("p"));
getModVar("Abyss_Color_Changer", "abyssColorGTitle").innerHTML = "G: ";
getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.textAlign = "center";
getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.color = "white";
getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorGTitle").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorGTitle"));
modVars.addVar("Abyss_Color_Changer", "abyssColorGSlider", document.createElement("input"));
getModVar("Abyss_Color_Changer", "abyssColorGSlider").classList.add("slider");
getModVar("Abyss_Color_Changer", "abyssColorGSlider").type = "range";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").min = "0";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").max = "255";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").value = "0";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.appearance = "none";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.background = "lightgrey";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.outline = "none";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.borderRadius = "90px";
getModVar("Abyss_Color_Changer", "abyssColorGSlider").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorGSlider"));
//B
modVars.addVar("Abyss_Color_Changer", "abyssColorBTitle", document.createElement("p"));
getModVar("Abyss_Color_Changer", "abyssColorBTitle").innerHTML = "B: ";
getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.textAlign = "center";
getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.color = "white";
getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorBTitle").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorBTitle"));
modVars.addVar("Abyss_Color_Changer", "abyssColorBSlider", document.createElement("input"));
getModVar("Abyss_Color_Changer", "abyssColorBSlider").classList.add("slider");
getModVar("Abyss_Color_Changer", "abyssColorBSlider").type = "range";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").min = "0";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").max = "255";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").value = "0";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.appearance = "none";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.background = "lightgrey";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.outline = "none";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.borderRadius = "90px";
getModVar("Abyss_Color_Changer", "abyssColorBSlider").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssColorBSlider"));
//Preview button
modVars.addVar("Abyss_Color_Changer", "abyssPreviewBttn", document.createElement("button"));
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.textAlign = "center";
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.backgroundColor = "gray"; //Change later
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.color = "white";
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.margin = "0px";
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.position = "fixed";
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").onmouseover = () => {
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.backgroundColor = "lightgrey";
};
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").onmouseout = () => {
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.backgroundColor = "gray";
};
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").onclick = () => {
	setModVar("Abyss_Color_Changer", "previewToggle", !getModVar("Abyss_Color_Changer", "previewToggle"));
};
getModVar("Abyss_Color_Changer", "abyssPreviewBttn").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(getModVar("Abyss_Color_Changer", "abyssPreviewBttn"));

modVars.addVar("Abyss_Color_Changer", "updateLoop", () => {
	//Clamp
	getModVar("Abyss_Color_Changer", "abyssColorVec").x = clamp(getModVar("Abyss_Color_Changer", "abyssColorVec").x, 0, 255);
	getModVar("Abyss_Color_Changer", "abyssColorVec").y = clamp(getModVar("Abyss_Color_Changer", "abyssColorVec").y, 0, 255);
	getModVar("Abyss_Color_Changer", "abyssColorVec").r = clamp(getModVar("Abyss_Color_Changer", "abyssColorVec").r, 0, 255);
	//Convert to rgb css function
	let abyssColor = "rgb("+getModVar("Abyss_Color_Changer", "abyssColorVec").x+","+getModVar("Abyss_Color_Changer", "abyssColorVec").y+","+getModVar("Abyss_Color_Changer", "abyssColorVec").r+")";
	//Checks map and sets bg color
	if (currentMap != null) {
		if (currentMap.id == "Abyss") {
			currentMap.backgroundColor = abyssColor;
		}
	}
	if (gameData.gameMode == -1 && getModVar("Abyss_Color_Changer", "isOnAllowed")) {
		screen.setColor(abyssColor);
	}
	//Returns to default
	if (!getModVar("Abyss_Color_Changer", "isOnAllowed")) {
		screen.setColor("black");
		getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.display = "none";
	} else {
		getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.display = "block";
	}
	//Check map
	let localMap = gameModeData[1].settings.maps[gameModeData[1].settings.map.x];
	setModVar("Abyss_Color_Changer", "isOnAllowed", getModVar("Abyss_Color_Changer", "allowedMaps").includes(localMap.id));
	//Scaling
	let halfSize = menuMG.menuSize.div(2);
	getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.top = parseFloat(getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.top)-(40*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorRTitle").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRTitle").style.fontSize = (30*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRTitle").innerHTML = "R: "+getModVar("Abyss_Color_Changer", "abyssColorVec").x;
	getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.top = (120*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorRSlider").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.width = (300*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorRSlider").style.height = (20*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorVec").x = parseInt(getModVar("Abyss_Color_Changer", "abyssColorRSlider").value);
	getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.top = parseFloat(getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.top)-(40*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorGTitle").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGTitle").style.fontSize = (30*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGTitle").innerHTML = "G: "+getModVar("Abyss_Color_Changer", "abyssColorVec").y;
	getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.top = (180*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorGSlider").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.width = (300*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorGSlider").style.height = (20*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorVec").y = parseInt(getModVar("Abyss_Color_Changer", "abyssColorGSlider").value);
	getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.top = parseFloat(getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.top)-(40*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorBTitle").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBTitle").style.fontSize = (30*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBTitle").innerHTML = "B: "+getModVar("Abyss_Color_Changer", "abyssColorVec").r;
	getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.top = (240*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssColorBSlider").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.width = (300*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorBSlider").style.height = (20*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssColorVec").r = parseInt(getModVar("Abyss_Color_Changer", "abyssColorBSlider").value);
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.left = (((halfSize.x+300)-(getModVar("Abyss_Color_Changer", "abyssPreviewBttn").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.top = (300*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.width = (300*screen.getScale().x)+"px";
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.height = (50*screen.getScale().y)+"px";
	getModVar("Abyss_Color_Changer", "abyssPreviewBttn").style.fontSize = (40*screen.getScale().x)+"px";
	//Preview
	if (getModVar("Abyss_Color_Changer", "previewToggle") && getModVar("Abyss_Color_Changer", "isOnAllowed")) {
		menuMG.lbBackground.style.display = "none";
		getModVar("Abyss_Color_Changer", "abyssPreviewBttn").innerHTML = "Preview NO";
	} else {
		menuMG.lbBackground.style.display = "block";
		getModVar("Abyss_Color_Changer", "abyssPreviewBttn").innerHTML = "Preview OFF";
	}
});

//Init
addUpdate(getModVar("Abyss_Color_Changer", "updateLoop"), "mainLoop", "Abyss_Color_Changer");

//Unload function
modVars.addVar("Abyss_Color_Changer", "unload", () => {
	menuMG.lbBackground.style.display = "block";
	currentMap.backgroundColor = currentMap.originalBGColor;
});