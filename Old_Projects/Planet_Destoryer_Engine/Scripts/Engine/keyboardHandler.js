var keyHit = false;
var keyPressed = "";
var keyPressed2 = "";
function keyBinder(ButtonCode) {
this.ButtonCode = ButtonCode;
}

function keyBinderUpdate() {
	
}

function keyDownHandler(event) {
keyPressed = event.key;
keyPressed2 = String.fromCharCode(event.keyCode);
//update info control
	switch (keyPressed) {
	case "Tab":
	patchInfo();
	break;
	case "w":
	end.angle = 0;
	end.speed = 1;
	break;
	case "s":
	end.angle = 3.14159265;
	end.speed = 1;
	break;
	}
	switch (event.which) {
	case 32:
	pathFinding(start, end);
	break;
	}
}

function keyUpHandler(event) {
keyPressed = event.key;
keyPressed2 = String.fromCharCode(event.keyCode);
	switch (keyPressed) {
	case "w":
	end.speed = 0;
	break;
	case "s":
	end.speed = 0;
	break;
	}
}