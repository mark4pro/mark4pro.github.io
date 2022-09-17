var interval;

if (!('ongamepadconnected' in window)) {
  // No gamepad events available, poll instead.
  interval = setInterval(pollGamepads, 60);
}

var conx = 0;
var cony = 0;

function pollGamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    var gp = gamepads[0];
    if (gp) {
	console.log("Gamepad connected at index " + gp.index + ": " + gp.id +
        ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");
		if (gp.buttons[0].pressed == true) {
		console.log("x pressed");
		autoDown();
		}
		if (gp.buttons[1].pressed == true) {
		console.log("o pressed");
		autoRight();
		}
		if (gp.buttons[3].pressed == true) {
		console.log("tri pressed");
		autoUp();
		}
		if (gp.buttons[2].pressed == true) {
		console.log("squ pressed");
		autoLeft();
		}
		if (gp.buttons[0].pressed == false) {
		clearAutoD();
		}
		if (gp.buttons[1].pressed == false) {
		clearAutoR();
		}
		if (gp.buttons[2].pressed == false) {
		clearAutoL();
		}
		if (gp.buttons[3].pressed == false) {
		clearAutoU();
		}
	if(gp.axes[0] != 0) {
    conx = gp.axes[0];
    } 
    if(gp.axes[1] != 0) {
    cony = gp.axes[1];
    }
	if (cony < -0.2) {
	if (touchtop == 0) {
            moveUp();
			}
	}
	if (cony > 0.2) {
	if (touchbottom == 0) {
            moveDown();
			}
	}
	if (conx < -0.2) {
	if (touchleft == 0) {
            moveLeft();
			}
	}
	if (conx > 0.2) {
	if (touchright == 0) {
            moveRight();
			}
	}
	if (cony > -0.2 && cony != 0.2) {
	clearmoveu();
	}
	if (cony < 0.2 && cony != -0.2) {
	clearmoved();
	}
	if (conx > -0.2 && conx != 0.2) {
	clearmovel();
	}
	if (conx < 0.2 && conx != -0.2) {
	clearmover();
	}
  console.log("x: " + conx + " y: " + cony);
  }
}