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
