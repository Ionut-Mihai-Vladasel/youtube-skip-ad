
function loop(){
	while(true){
		try{
			// skipe video ad 
			var collection = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
			if(collection != null){
				var btn =    collection.item(0);
				if(btn != null){
					btn.click();
				}
			}
			
			// close video banner 
			var collection = document.getElementsByClassName("ytp-ad-overlay-close-button");
			if(collection != null){
				var btn =    collection.item(0);
				if(btn != null){
					btn.click();
				}
			}
		}catch(e){
			console.log(e);
		}
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	try{
		loop();
	}catch(e){
		console.log(e);
	}
})

  