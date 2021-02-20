/*Function for acquiring resolution from browser and passing on to
 * variables in style.css.
 * 
 * Portions of code acquired from:
 * 
*/
function get_resolution(){
	var width  = screen.width;
	var height = screen.height;
	var Home = document.getElementById('Home');
	console.log('height' + height);
	Home.style.setProperty('--height', height);
}

/* Function to control opening and closing of the sidebar navigation menu*/
function sidebar_open(){
	document.getElementById("Sidebar").style.width = "20%";
	document.getElementById("NavContainer").style.display = "block";
	document.getElementById("Menu_Button").style.width = "none";
}

function sidebar_close(){
	document.getElementById("Sidebar").style.width = "0";
	document.getElementById("NavContainer").style.display = "none";
	document.getElementById("Menu_Button").style.display = "block";
}

function changeImage(){
	console.log("Test");
	var next_top = false;
	var imgs = document.getElementById("carousel").children;
	for(var i = 0; i<imgs.length; i++){
		var temp = imgs[i];
		if (temp.className == "top_image"){
			next_top = true;
			temp.className = "deck_image";
		}else if(temp.className == "deck_image"){
			if(next_top){
				temp.className = "top_image";
				return;
			}
		}
	}

	imgs[0].className = "top_image";
	imgs[imgs.length-1].className = "deck_image";
	return;

}

function setCarouselScroll(){
	console.log("BRUH");
	setInterval(changeImage,5000);
}
