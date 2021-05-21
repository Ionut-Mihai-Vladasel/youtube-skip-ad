
function loop(){
	try{
		console.log("in loop");
		var collection = document.getElementsByClassName("ytp-ad-skip-button ytp-button");
		if(collection != null){
			var btn =    collection.item(0);
			if(btn != null){
				btn.click();
			}
		}
		
		var collection = document.getElementsByClassName("ytp-ad-overlay-close-button");
		if(collection != null){
			var btn =    collection.item(0);
			if(btn != null){
				btn.click();
			}
		}
		
		setTimeout(loop, 2000);
	}catch(e){
		console.log(e);
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	try{
		loop();
	}catch(e){
		console.log(e);
	}
})

  