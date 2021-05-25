

function findAndSkipAd(){
	try{
		console.log("tring to skip ads..");
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

var setupDone = false;

function setup(){

	let collection = document.getElementsByClassName("video-stream html5-main-video");
	console.log("collection: " + JSON.stringify(collection));
	if(collection && collection.item(0)){
		var videoTag = collection.item(0);
		videoTag.addEventListener('canplay', (event) => {
			 setTimeout(findAndSkipAd, 1000); 
			 setTimeout(findAndSkipAd, 2000); 			
			}); 
	    console.log("setup done");
		setupDone = true;
	}
	console.log("setup: " +setupDone);
}
 
document.addEventListener('DOMContentLoaded', (event) => { 
 	
		switch (document.readyState) {
		  case "loading":
			console.log("The document is still loading.");
			break;
		  case "interactive":
			console.log("The document has finished loading. We can now access the DOM elements.");
			setTimeout(setup,500);
			break;
		  case "complete":
			console.log("The page is fully loaded."); 
			setup();
			break;
		}
})

 
 document.addEventListener("mousedown", (event) => {
	 if(!setupDone){
		 setup();
	 }
 });