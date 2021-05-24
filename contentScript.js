

function findAndSkipAd(){
	try{
		// video without button 
		let videoCollection = document.getElementsByClassName("video-stream html5-main-video");
		if(videoCollection && videoCollection.item(0)){
			var videoTag =  videoCollection.item(0);
			
			// btn info video can not be skiped 
			var collection = document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text");
			if(collection && collection.item(0)){
				// currentTime in seconds
				videoTag.currentTime = videoTag.duration;
				console.log("video cannot be skiped, just skiped");
			}
		}
		
		// video with skip btn 
		var videoAdBtns = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
		if(videoAdBtns.length > 0){
			for(let btn of videoAdBtns){
					btn.click();
					console.log("video skiped");
			}
		}
		
		// banner 
		var overlayAdBtns = document.getElementsByClassName("ytp-ad-overlay-close-button");
		if(overlayAdBtns.length > 0){
			for(let btn of overlayAdBtns){
					btn.click();
					console.log("Banner closed");
			}
		}
	}catch(e){
		console.log(e);
	}
}

function setup(){
	let collection = document.getElementsByClassName("video-stream html5-main-video");
	if(collection && collection.item(0)){
		var videoTag = collection.item(0);
			videoTag.addEventListener('canplay', (event) => {
				 setTimeout(findAndSkipAd, 1000); 
				 setTimeout(findAndSkipAd, 2000); 			
				}); 
	}
	console.log("setup done");
}
 

window.addEventListener('DOMContentLoaded', (event) => { 
	setup();
})

setup();