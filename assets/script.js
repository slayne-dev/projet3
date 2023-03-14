"use strict";
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

 let nbSlides = slides.length;

   		// CREATION D'UN COMPTEUR A 0

let count = 0;

		// PARTIE IMAGE ET TEXTE

let text = document.querySelector("#banner p");
text.innerHTML = slides[count].tagLine;

let image = document.querySelector(".banner-img");
image.setAttribute("src", `./assets/images/slideshow/${slides[count].image}`);
/* alternative : image.src = `./assets/images/slideshow/${slides[count].image}`; */

        // PARTIE DOTS

// Boucle pour créer des dots en fct du nombre d'objets dans le tableau slide 

/*for (let slide of slides) {
	let allDots = document.querySelector(".dots");
	let dot = document.createElement("div");
	dot.className = "dot";
	allDots.appendChild(dot);
}*/

let allDots = document.querySelector(".dots");
let dot = document.createElement("div");
	dot.className = "dot";
	allDots.appendChild(dot);

dot.forEach((element, cle) => {
	console.log(element, cle);
	cle === count ? element.classList.add("dotSelected") : element.classList.remove("dotSelected");
});


// On crée un tableau avec toutes les divs "dot" construites précédemment

let dots = document.querySelectorAll (".dot");
let dotsArray = Array.from(dots);

// Rendre la première dot active

let dotSelected = dotsArray[count];
dotSelected.className = "dot dot_selected";


		// EVENT LISTENERS SUR LES FLECHES

const buttonRight = document.querySelector (".arrow_right");
buttonRight.addEventListener("click", next);

const buttonLeft = document.querySelector (".arrow_left");
buttonLeft.addEventListener("click", previous);

		// LES FONCTIONS ACTIVEES AU CLIC SUR LES FLECHES

function next (){

	// Cliquer monte le compteur mais reste dans le cadre du tableau

	/*if(count < nbSlides - 1){
		count++;
	} else{
		count = 0;
	};
	console.log(count);*/

	count < nbSlides - 1 ? count++ : count = 0 ;

	// Modification du texte et de l'image
	
	text.innerHTML = slides[count].tagLine;
	image.setAttribute("src", `./assets/images/slideshow/${slides[count].image}`);
	
	// Modification de la dot active

	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";

}

function previous (){

	// Cliquer baisse le compteur mais reste dans le cadre des tableaux

	if(count > 0){
		count--;
	} else{
		count = nbSlides - 1;
	};

	// Modification du texte et de l'image

	text.innerHTML = slides[count].tagLine;
	image.setAttribute("src", `./assets/images/slideshow/${slides[count].image}`);

	// Modification de la dot active

	dotSelected.className = "dot";
	dotSelected = dotsArray[count];
	dotSelected.className = "dot dot_selected";
	
}



