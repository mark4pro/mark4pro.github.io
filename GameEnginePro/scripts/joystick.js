var options = {
	   zone: document.getElementById("zone_joystick"),
	   mode: 'static',
	   color: 'purple',
	   identifier: 0,
	   threshold: 0.2,
	   size: 100,
	   restOpacity: 1,
	   position:{x: 105, y: 220}
	};
	var manager = nipplejs.create(options);
function bindings() {
 manager.on('0:start', function(evt, data) {
	manager.on('dir:up', function(evt, data) {
		moveUp();
		down = 0;
		left = 0;
		right = 0;
	}).on('dir:down', function(evt, data) {
		moveDown();
		up = 0;
		left = 0;
		right = 0;
	}).on('dir:left', function(evt, data) {
		moveLeft();
		down = 0;
		up = 0;
		right = 0;
	}).on('dir:right', function(evt, data) {
		moveRight();
		down = 0;
		left = 0;
		up = 0;
	});
  });
  manager.on('0:end dir', function(evt, data) {
		clearmoveu();
	}).on('0:end dir', function(evt, data) {
		clearmoved();
	}).on('0:end dir', function(evt, data) {
		clearmovel();
	}).on('0:end dir', function(evt, data) {
		clearmover();
	});
}
