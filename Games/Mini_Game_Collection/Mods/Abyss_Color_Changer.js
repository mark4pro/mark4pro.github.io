let uiLoaded = false;

let previewToggle = false;

//Allowed maps
let isOnAllowed = false;
let allowedMaps = ["Abyss"];

//Color vector
let abyssColorVec = new Vector2(0, 0, 0);

//R
let abyssColorRTitle = document.createElement("p");
abyssColorRTitle.innerHTML = "R: ";
abyssColorRTitle.style.textAlign = "center";
abyssColorRTitle.style.color = "white";
abyssColorRTitle.style.margin = "0px";
abyssColorRTitle.style.position = "fixed";
menuMG.lbMenu.appendChild(abyssColorRTitle);
let abyssColorRSlider = document.createElement("input");
abyssColorRSlider.classList.add("slider");
abyssColorRSlider.type = "range";
abyssColorRSlider.min = "0";
abyssColorRSlider.max = "255";
abyssColorRSlider.value = "0";
abyssColorRSlider.style.margin = "0px";
abyssColorRSlider.style.position = "fixed";
abyssColorRSlider.style.appearance = "none";
abyssColorRSlider.style.background = "lightgrey";
abyssColorRSlider.style.outline = "none";
abyssColorRSlider.style.borderRadius = "90px";
menuMG.lbMenu.appendChild(abyssColorRSlider);
//G
let abyssColorGTitle = document.createElement("p");
abyssColorGTitle.innerHTML = "G: ";
abyssColorGTitle.style.textAlign = "center";
abyssColorGTitle.style.color = "white";
abyssColorGTitle.style.margin = "0px";
abyssColorGTitle.style.position = "fixed";
menuMG.lbMenu.appendChild(abyssColorGTitle);
let abyssColorGSlider = document.createElement("input");
abyssColorGSlider.classList.add("slider");
abyssColorGSlider.type = "range";
abyssColorGSlider.min = "0";
abyssColorGSlider.max = "255";
abyssColorGSlider.value = "0";
abyssColorGSlider.style.margin = "0px";
abyssColorGSlider.style.position = "fixed";
abyssColorGSlider.style.appearance = "none";
abyssColorGSlider.style.background = "lightgrey";
abyssColorGSlider.style.outline = "none";
abyssColorGSlider.style.borderRadius = "90px";
menuMG.lbMenu.appendChild(abyssColorGSlider);
//B
let abyssColorBTitle = document.createElement("p");
abyssColorBTitle.innerHTML = "B: ";
abyssColorBTitle.style.textAlign = "center";
abyssColorBTitle.style.color = "white";
abyssColorBTitle.style.margin = "0px";
abyssColorBTitle.style.position = "fixed";
menuMG.lbMenu.appendChild(abyssColorBTitle);
let abyssColorBSlider = document.createElement("input");
abyssColorBSlider.classList.add("slider");
abyssColorBSlider.type = "range";
abyssColorBSlider.min = "0";
abyssColorBSlider.max = "255";
abyssColorBSlider.value = "0";
abyssColorBSlider.style.margin = "0px";
abyssColorBSlider.style.position = "fixed";
abyssColorBSlider.style.appearance = "none";
abyssColorBSlider.style.background = "lightgrey";
abyssColorBSlider.style.outline = "none";
abyssColorBSlider.style.borderRadius = "90px";
menuMG.lbMenu.appendChild(abyssColorBSlider);
//Preview button
let abyssPreviewBttn = document.createElement("button");
abyssPreviewBttn.style.textAlign = "center";
abyssPreviewBttn.style.backgroundColor = "gray"; //Change later
abyssPreviewBttn.style.color = "white";
abyssPreviewBttn.style.margin = "0px";
abyssPreviewBttn.style.position = "fixed";
abyssPreviewBttn.onmouseover = () => {
	abyssPreviewBttn.style.backgroundColor = "lightgrey";
};
abyssPreviewBttn.onmouseout = () => {
	abyssPreviewBttn.style.backgroundColor = "gray";
};
abyssPreviewBttn.onclick = () => {
	previewToggle = !previewToggle;
};
menuMG.lbMenu.appendChild(abyssPreviewBttn);

function updateLoop() {
	//Clamp
	abyssColorVec.x = clamp(abyssColorVec.x, 0, 255);
	abyssColorVec.y = clamp(abyssColorVec.y, 0, 255);
	abyssColorVec.r = clamp(abyssColorVec.r, 0, 255);
	//Convert to rgb css function
	let abyssColor = "rgb("+abyssColorVec.x+","+abyssColorVec.y+","+abyssColorVec.r+")";
	//Checks map and sets bg color
	if (currentMap != null) {
		if (currentMap.id == "Abyss") {
			currentMap.backgroundColor = abyssColor;
		}
	}
	if (gameData.gameMode == -1 && isOnAllowed) {
		screen.setColor(abyssColor);
	}
	//Returns to default
	if (!isOnAllowed) {
		screen.setColor("black");
		abyssColorRTitle.style.display = "none";
		abyssColorRSlider.style.display = "none";
		abyssColorGTitle.style.display = "none";
		abyssColorGSlider.style.display = "none";
		abyssColorBTitle.style.display = "none";
		abyssColorBSlider.style.display = "none";
		abyssPreviewBttn.style.display = "none";
	} else {
		abyssColorRTitle.style.display = "block";
		abyssColorRSlider.style.display = "block";
		abyssColorGTitle.style.display = "block";
		abyssColorGSlider.style.display = "block";
		abyssColorBTitle.style.display = "block";
		abyssColorBSlider.style.display = "block";
		abyssPreviewBttn.style.display = "block";
	}
	//Check map
	let localMap = gameModeData[1].settings.maps[gameModeData[1].settings.map.x];
	isOnAllowed = allowedMaps.includes(localMap.id);
	//Scaling
	let halfSize = menuMG.menuSize.div(2);
	abyssColorRTitle.style.top = parseFloat(abyssColorRSlider.style.top)-(40*screen.getScale().y)+"px";
	abyssColorRTitle.style.left = (((halfSize.x+300)-(abyssColorRTitle.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorRTitle.style.fontSize = (30*screen.getScale().x)+"px";
	abyssColorRTitle.innerHTML = "R: "+abyssColorVec.x;
	abyssColorRSlider.style.top = (120*screen.getScale().y)+"px";
	abyssColorRSlider.style.left = (((halfSize.x+300)-(abyssColorRSlider.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorRSlider.style.width = (300*screen.getScale().x)+"px";
	abyssColorRSlider.style.height = (20*screen.getScale().y)+"px";
	abyssColorVec.x = parseInt(abyssColorRSlider.value);
	abyssColorGTitle.style.top = parseFloat(abyssColorGSlider.style.top)-(40*screen.getScale().y)+"px";
	abyssColorGTitle.style.left = (((halfSize.x+300)-(abyssColorGTitle.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorGTitle.style.fontSize = (30*screen.getScale().x)+"px";
	abyssColorGTitle.innerHTML = "G: "+abyssColorVec.y;
	abyssColorGSlider.style.top = (180*screen.getScale().y)+"px";
	abyssColorGSlider.style.left = (((halfSize.x+300)-(abyssColorGSlider.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorGSlider.style.width = (300*screen.getScale().x)+"px";
	abyssColorGSlider.style.height = (20*screen.getScale().y)+"px";
	abyssColorVec.y = parseInt(abyssColorGSlider.value);
	abyssColorBTitle.style.top = parseFloat(abyssColorBSlider.style.top)-(40*screen.getScale().y)+"px";
	abyssColorBTitle.style.left = (((halfSize.x+300)-(abyssColorBTitle.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorBTitle.style.fontSize = (30*screen.getScale().x)+"px";
	abyssColorBTitle.innerHTML = "B: "+abyssColorVec.r;
	abyssColorBSlider.style.top = (240*screen.getScale().y)+"px";
	abyssColorBSlider.style.left = (((halfSize.x+300)-(abyssColorBSlider.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssColorBSlider.style.width = (300*screen.getScale().x)+"px";
	abyssColorBSlider.style.height = (20*screen.getScale().y)+"px";
	abyssColorVec.r = parseInt(abyssColorBSlider.value);
	abyssPreviewBttn.style.left = (((halfSize.x+300)-(abyssPreviewBttn.getBoundingClientRect().width/2))*screen.getScale().y)+"px";
	abyssPreviewBttn.style.top = (300*screen.getScale().y)+"px";
	abyssPreviewBttn.style.width = (300*screen.getScale().x)+"px";
	abyssPreviewBttn.style.height = (50*screen.getScale().y)+"px";
	abyssPreviewBttn.style.fontSize = (40*screen.getScale().x)+"px";
	//Preview
	if (previewToggle && isOnAllowed) {
		menuMG.lbBackground.style.display = "none";
		abyssPreviewBttn.innerHTML = "Preview NO";
	} else {
		menuMG.lbBackground.style.display = "block";
		abyssPreviewBttn.innerHTML = "Preview OFF";
	}
}

//Init
addUpdate(updateLoop, "mainLoop", "Abyss_Color_Changer");