	var today_date = new Date();
	var startTime = new Date('10/22/2020 12:00:00 AM');
	var endTime = new Date('10/31/2020 12:00:00 AM');
	function StartTimeCheck() {
	CheckTime();
	setInterval(function(){ CheckTime(); }, 0.01 * 60000);
	setInterval(function(){ resetPressed(); }, 0.01 * 60000);
	}
	function CheckTime() {
	today_date = new Date();
	if (today_date >= startTime && today_date <= endTime) {
	if (document.getElementById("EventBox").style.visibility == "hidden") {
	document.getElementById("EventButton").innerHTML = "(*) News";
	}
	} else {
	if (document.getElementById("EventBox").style.visibility == "hidden") {
	//document.getElementById("EventBox").style.visibility = "hidden";
	document.getElementById("EventButton").innerHTML = "News";
	}
	}
	}
	var pressed = false;
	function resetPressed() {
	if (pressed == true) {
	pressed = false;
	}
	}
	function ShowNews() {
	if (document.getElementById("EventBox").style.visibility == "hidden" && pressed == false) {
	document.getElementById("EventButton").style.left = "422.5px";
	document.getElementById("EventButton").innerHTML = "Close";
	document.getElementById("EventBox").style.visibility = "visible";
	pressed = true;
	}
	if (document.getElementById("EventBox").style.visibility == "visible" && pressed == false) {
	document.getElementById("EventButton").style.left = "0px";
	document.getElementById("EventBox").style.visibility = "hidden";
	CheckTime();
	pressed = true;
	}
	}
