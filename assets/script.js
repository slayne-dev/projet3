const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//event listeners sur les flèches
const buttonLeft = document.querySelector (".arrow_left");
buttonLeft.addEventListener("click", function () {
	console.log ("cliqué ! G")
});

const buttonRight = document.querySelector (".arrow_right");
buttonRight.addEventListener("click", function () {
	console.log ("cliqué ! D")
});



for (var i=0; i < slides.length; i++) {
	let allDots = document.querySelector(".dots");
	
}