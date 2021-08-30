var IMAGELOADER = {
div:document.getElementById("Images"),
progress:0,
	resetProgress:function(){
	IMAGELOADER.progress = 0;
	},
	getProgress:function(){
		if (IMAGELOADER.progress !== ImageArray.length-1) {
		return Math.floor(100*(IMAGELOADER.progress/ImageArray.length));
		}
		if (IMAGELOADER.progress === ImageArray.length-1) {
		return 100;
		}
	},
	check:function(){
		for (let j=ImageArray.length;IMAGELOADER.progress<j;IMAGELOADER.progress++) {
		IMAGELOADER.injectScript(ImageArray[IMAGELOADER.progress].src,ImageArray[IMAGELOADER.progress].id);
		console.log("Image Loading Progress: %" + IMAGELOADER.getProgress());
		}
	},
	injectScript:function(src, id) {
		return new Promise((resolve, reject) => {
		const image = document.createElement('img');
		image.id = id;
		image.src = src;
		image.style.width = "0px";
		image.style.height = "0px";
		image.addEventListener('load', resolve);
		image.addEventListener('error', e => reject(e.error));
		IMAGELOADER.div.appendChild(image);
		});
	}
};