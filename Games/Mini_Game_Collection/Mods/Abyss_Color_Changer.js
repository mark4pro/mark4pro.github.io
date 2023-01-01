modVars.add(false, "uiLoaded", "Abyss_Color_Changer");
modVars.add(false, "previewToggle", "Abyss_Color_Changer");

//Allowed maps
modVars.add(false, "isOnAllowed", "Abyss_Color_Changer");
modVars.add(["Abyss"], "allowedMaps", "Abyss_Color_Changer");

//Color vector
modVars.add(new Vector2(0, 0, 0), "abyssColorVec", "Abyss_Color_Changer");

//R
modVars.add(document.createElement("p"), "abyssColorRTitle", "Abyss_Color_Changer");
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").innerHTML = "R: ";
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.textAlign = "center";
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.color = "white";
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorRTitle", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorRTitle", "Abyss_Color_Changer"));
modVars.add(document.createElement("input"), "abyssColorRSlider", "Abyss_Color_Changer");
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").classList.add("slider");
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").type = "range";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").min = "0";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").max = "255";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").value = "0";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.appearance = "none";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.background = "lightgrey";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.outline = "none";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.borderRadius = "90px";
modVars.get("abyssColorRSlider", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorRSlider", "Abyss_Color_Changer"));
//G
modVars.add(document.createElement("p"), "abyssColorGTitle", "Abyss_Color_Changer");
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").innerHTML = "G: ";
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.textAlign = "center";
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.color = "white";
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorGTitle", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorGTitle", "Abyss_Color_Changer"));
modVars.add(document.createElement("input"), "abyssColorGSlider", "Abyss_Color_Changer");
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").classList.add("slider");
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").type = "range";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").min = "0";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").max = "255";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").value = "0";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.appearance = "none";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.background = "lightgrey";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.outline = "none";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.borderRadius = "90px";
modVars.get("abyssColorGSlider", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorGSlider", "Abyss_Color_Changer"));
//B
modVars.add(document.createElement("p"), "abyssColorBTitle", "Abyss_Color_Changer");
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").innerHTML = "B: ";
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.textAlign = "center";
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.color = "white";
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorBTitle", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorBTitle", "Abyss_Color_Changer"));
modVars.add(document.createElement("input"), "abyssColorBSlider", "Abyss_Color_Changer");
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").classList.add("slider");
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").type = "range";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").min = "0";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").max = "255";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").value = "0";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.appearance = "none";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.background = "lightgrey";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.outline = "none";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.borderRadius = "90px";
modVars.get("abyssColorBSlider", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssColorBSlider", "Abyss_Color_Changer"));
//Preview button
modVars.add(document.createElement("button"), "abyssPreviewBttn", "Abyss_Color_Changer");
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.textAlign = "center";
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.backgroundColor = "gray"; //Change later
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.color = "white";
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.margin = "0px";
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.position = "fixed";
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").onmouseover = () => {
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.backgroundColor = "lightgrey";
};
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").onmouseout = () => {
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.backgroundColor = "gray";
};
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").onclick = () => {
	modVars.set(!modVars.get("previewToggle", "Abyss_Color_Changer"), "previewToggle", "Abyss_Color_Changer");
};
modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").classList.add("Abyss_Color_Changer");
menuMG.lbMenu.appendChild(modVars.get("abyssPreviewBttn", "Abyss_Color_Changer"));

function updateLoop() {
	//Clamp
	modVars.get("abyssColorVec", "Abyss_Color_Changer").x = clamp(modVars.get("abyssColorVec", "Abyss_Color_Changer").x, 0, 255);
	modVars.get("abyssColorVec", "Abyss_Color_Changer").y = clamp(modVars.get("abyssColorVec", "Abyss_Color_Changer").y, 0, 255);
	modVars.get("abyssColorVec", "Abyss_Color_Changer").r = clamp(modVars.get("abyssColorVec", "Abyss_Color_Changer").r, 0, 255);
	//Convert to rgb css function
	let abyssColor = "rgb("+modVars.get("abyssColorVec", "Abyss_Color_Changer").x+","+modVars.get("abyssColorVec", "Abyss_Color_Changer").y+","+modVars.get("abyssColorVec", "Abyss_Color_Changer").r+")";
	//Checks map and sets bg color
	if (currentMap != null) {
		if (currentMap.id == "Abyss") {
			currentMap.backgroundColor = abyssColor;
		}
	}
	if (gameData.gameMode == -1 && modVars.get("isOnAllowed", "Abyss_Color_Changer")) {
		screen.setColor(abyssColor);
	}
	//Returns to default
	if (!modVars.get("isOnAllowed", "Abyss_Color_Changer")) {
		screen.setColor("black");
		modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.display = "none";
		modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.display = "none";
	} else {
		modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.display = "block";
		modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.display = "block";
	}
	//Check map
	let localMap = gameModeData[1].settings.maps[gameModeData[1].settings.map.x];
	modVars.set(modVars.get("allowedMaps", "Abyss_Color_Changer").includes(localMap.id), "isOnAllowed", "Abyss_Color_Changer");
	//Scaling
	let halfSize = menuMG.menuSize.div(2);
	modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.top = parseFloat(modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.top)-(40*screen.getScale().y)+"px";
	modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorRTitle", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorRTitle", "Abyss_Color_Changer").style.fontSize = (30*screen.getScale().x)+"px";
	modVars.get("abyssColorRTitle", "Abyss_Color_Changer").innerHTML = "R: "+modVars.get("abyssColorVec", "Abyss_Color_Changer").x;
	modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.top = (120*screen.getScale().y)+"px";
	modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorRSlider", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.width = (300*screen.getScale().x)+"px";
	modVars.get("abyssColorRSlider", "Abyss_Color_Changer").style.height = (20*screen.getScale().y)+"px";
	modVars.get("abyssColorVec", "Abyss_Color_Changer").x = parseInt(modVars.get("abyssColorRSlider", "Abyss_Color_Changer").value);
	modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.top = parseFloat(modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.top)-(40*screen.getScale().y)+"px";
	modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorGTitle", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorGTitle", "Abyss_Color_Changer").style.fontSize = (30*screen.getScale().x)+"px";
	modVars.get("abyssColorGTitle", "Abyss_Color_Changer").innerHTML = "G: "+modVars.get("abyssColorVec", "Abyss_Color_Changer").y;
	modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.top = (180*screen.getScale().y)+"px";
	modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorGSlider", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.width = (300*screen.getScale().x)+"px";
	modVars.get("abyssColorGSlider", "Abyss_Color_Changer").style.height = (20*screen.getScale().y)+"px";
	modVars.get("abyssColorVec", "Abyss_Color_Changer").y = parseInt(modVars.get("abyssColorGSlider", "Abyss_Color_Changer").value);
	modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.top = parseFloat(modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.top)-(40*screen.getScale().y)+"px";
	modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorBTitle", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorBTitle", "Abyss_Color_Changer").style.fontSize = (30*screen.getScale().x)+"px";
	modVars.get("abyssColorBTitle", "Abyss_Color_Changer").innerHTML = "B: "+modVars.get("abyssColorVec", "Abyss_Color_Changer").r;
	modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.top = (240*screen.getScale().y)+"px";
	modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssColorBSlider", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.width = (300*screen.getScale().x)+"px";
	modVars.get("abyssColorBSlider", "Abyss_Color_Changer").style.height = (20*screen.getScale().y)+"px";
	modVars.get("abyssColorVec", "Abyss_Color_Changer").r = parseInt(modVars.get("abyssColorBSlider", "Abyss_Color_Changer").value);
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.left = (((halfSize.x+300)-(modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.top = (300*screen.getScale().y)+"px";
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.width = (300*screen.getScale().x)+"px";
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.height = (50*screen.getScale().y)+"px";
	modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").style.fontSize = (40*screen.getScale().x)+"px";
	//Preview
	if (modVars.get("previewToggle", "Abyss_Color_Changer") && modVars.get("isOnAllowed", "Abyss_Color_Changer")) {
		menuMG.lbBackground.style.display = "none";
		modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").innerHTML = "Preview NO";
	} else {
		menuMG.lbBackground.style.display = "block";
		modVars.get("abyssPreviewBttn", "Abyss_Color_Changer").innerHTML = "Preview OFF";
	}
}

//Init
addUpdate(updateLoop, "mainLoop", "Abyss_Color_Changer");