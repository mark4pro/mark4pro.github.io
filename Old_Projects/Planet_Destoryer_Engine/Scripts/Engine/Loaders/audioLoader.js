var AUDIOLOADER = {
div:document.getElementById("Audio"),
progress:0,
	resetProgress:function(){
	AUDIOLOADER.progress = 0;
	},
	getProgress:function(){
		if (AUDIOLOADER.progress !== AudioArray.length-1) {
		return Math.floor(100*(AUDIOLOADER.progress/AudioArray.length));
		}
		if (AUDIOLOADER.progress === AudioArray.length-1) {
		return 100;
		}
	},
	check:function(){
		for (let j=AudioArray.length;AUDIOLOADER.progress<j;AUDIOLOADER.progress++) {
		AUDIOLOADER.injectScript(AudioArray[AUDIOLOADER.progress].src,AudioArray[AUDIOLOADER.progress].id);
		console.log("Audio Loading Progress: %" + AUDIOLOADER.getProgress());
		}
	},
	injectScript:function(src, id) {
		return new Promise((resolve, reject) => {
		const audio = document.createElement('audio');
		audio.id = id;
		audio.src = src;
		audio.autoplay = false;
		audio.controls = false;
		audio.addEventListener('load', resolve);
		audio.addEventListener('error', e => reject(e.error));
		AUDIOLOADER.div.appendChild(audio);
		});
	}
};