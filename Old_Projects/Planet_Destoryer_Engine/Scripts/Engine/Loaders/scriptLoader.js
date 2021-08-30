var SCRIPTLOADER = {
div:document.getElementById("Scripts"),
progress:0,
	resetProgress:function(){
	SCRIPTLOADER.progress = 0;
	},
	getProgress:function(){
		if (SCRIPTLOADER.progress !== ScriptArray.length-1) {
		return Math.floor(100*(SCRIPTLOADER.progress/ScriptArray.length));
		}
		if (SCRIPTLOADER.progress === ScriptArray.length-1) {
		return 100;
		}
	},
	check:function(){
		for (let j=ScriptArray.length;SCRIPTLOADER.progress<j;SCRIPTLOADER.progress++) {
		SCRIPTLOADER.injectScript(ScriptArray[SCRIPTLOADER.progress]);
		console.log("Script Loading Progress: %" + SCRIPTLOADER.getProgress());
		}
	},
	injectScript:function(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.type = "text/javascript";
			script.src = src;
			script.addEventListener('load', resolve);
			script.addEventListener('error', e => reject(e.error));
			SCRIPTLOADER.div.appendChild(script);
		});
	}
};