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
	document.getElementById("Sidebar").style.display = "block";
	document.getElementById("hamburger").style.display = "none";
	document.getElementById("cross").style.display = "block";
	document.getElementById("Menu_Button").setAttribute("onClick", "sidebar_close()");
}

function sidebar_close(){
	document.getElementById("Sidebar").style.display = "none";
	document.getElementById("hamburger").style.display = "block";
	document.getElementById("cross").style.display = "none";
	document.getElementById("Menu_Button").setAttribute("onClick", "sidebar_open()");
}
