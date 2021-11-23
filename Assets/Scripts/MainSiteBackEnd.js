	var today_date = new Date();
	var startTime = new Date('11/5/2020 9:32:00:00 PM');
	var endTime = new Date('11/31/2020 12:00:00 AM');
	var eventBox = document.getElementById("EventBox");
	var eventButton = document.getElementById("EventButton");
	function StartTimeCheck() {
	setInterval(function(){ resizeHandler(); }, 0.1);
	CheckTime();
	setInterval(function(){ CheckTime(); }, 0.01 * 60000);
	setInterval(function(){ resetPressed(); }, 0.01 * 60000);
	}
	function CheckTime() {
	today_date = new Date();
	if (today_date >= startTime && today_date <= endTime) {
	if (eventBox.style.visibility == "hidden") {
	eventButton.innerHTML = "(*) News";
	}
	} else {
	if (eventBox.style.visibility == "hidden") {
	eventButton.innerHTML = "News";
	}
	}
	}
	var pressed = false;
	function resetPressed() {
	if (pressed == true) {
	pressed = false;
	}
	}
	function resizeHandler() {
	var scaleFillNativeWidth = (parseFloat(window.innerWidth / 1559));
	var scaleFillNativeHeight = (parseFloat(window.innerHeight / 790));
	if (eventBox.style.visibility != "hidden") {
	eventBox.style.width = (500*Math.max(scaleFillNativeWidth,scaleFillNativeHeight))+"px";
	eventBox.style.height = (500*Math.max(scaleFillNativeWidth,scaleFillNativeHeight))+"px";
	}
	eventButton.style.width = (60*Math.max(scaleFillNativeWidth,scaleFillNativeHeight))+"px";
	eventButton.style.height = (60*Math.max(scaleFillNativeWidth,scaleFillNativeHeight))+"px";
	eventButton.style.fontSize = (15*Math.max(scaleFillNativeWidth,scaleFillNativeHeight))+"px";
	}
	function ShowNews() {
	if (eventBox.style.visibility == "hidden" && pressed == false) {
	eventButton.innerHTML = "Close";
	eventBox.style.visibility = "visible";
	pressed = true;
	}
	if (eventBox.style.visibility == "visible" && pressed == false) {
	eventBox.style.visibility = "hidden";
	CheckTime();
	pressed = true;
	}
	}
