"use_strict"
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

nbSlides = slides.length;

//On crée un compteur à 0
let count = 0;

        // PARTIE DOTS

// Une boucle pour créer des dots en fct du nombre d'objets dans le tableau slide 
// alternative : for (let i=0; i < slides.length; i++)
for (let slide of slides) {
	let allDots = document.querySelector(".dots");
	let dot = document.createElement("div");
	dot.className = "dot";
	allDots.appendChild(dot);
}

//On crée un tableau avec toutes les divs "dot" construites précédemment
let dots = document.querySelectorAll (".dot");
let dotsArray = Array.from(dots);

//Rendre la première dot active
let dotSelected = dotsArray[count];
dotSelected.className = "dot dot_selected";



//event listeners sur les flèches
const buttonLeft = document.querySelector (".arrow_left");
buttonLeft.addEventListener("click", previous);

const buttonRight = document.querySelector (".arrow_right");
buttonRight.addEventListener("click", next);

function next (){
	if(count < nbSlides - 1){
		count++;
	} else{
		count = 0;
	};
	console.log(count);
	
	//On change le bullet point actif
	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";
}

function previous (){
	if(count > 0){
		count--;
	} else{
		count = nbSlides - 1;
	};
	console.log(count);

	//On change le bullet point actif
	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";
}




