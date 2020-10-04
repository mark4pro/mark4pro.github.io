	var EventDay = 3, EventMonth = 9, EventYear = 2020;
	var EndEventDay = 30;
	var today_date = new Date();
	var mydayofweek = today_date.getDay();
	var mytoday = today_date.getDate();
	var mymonth = today_date.getMonth();
	var myyear = today_date.getFullYear();
	function StartTimeCheck() {
	CheckTime();
	setInterval(function(){ CheckTime(); }, 0.2 * 60000);
	}
	function CheckTime() {
	mytoday = today_date.getDate();
	mymonth = today_date.getMonth();
	myyear = today_date.getFullYear();
	if (EventDay >= mytoday && mytoday <= EndEventDay && EventMonth >= mymonth && EventYear >= myyear) {
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
	function StopShowingNews() {
	pressed = false;
	}