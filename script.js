/* Initialising! */
var css = document.querySelector("h3");
var color1 = document.querySelector(".leftColour");
var color2 = document.querySelector(".rightColour");
var body = document.getElementById("gradient");

/* Function Setting Background! */
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);