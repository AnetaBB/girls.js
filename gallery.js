/* girls.js - Interaktywna Galeria/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod. 
 */
let currentNumber = 1
let playing = false;
let stopSlideShowInterval;

function startSlideShow (){
playing=true
document.querySelector("#play").classList.add("on");
slideShowInterval=setInterval(showNextSlide, 3000);

}



function stopSlideShow(){
playing=false
document.querySelector("#play").classList.remove("on");
clearInterval(slideShowInterval);
}


function playButtonClicked(){
	if (playing===true){playing=false;
		stopSlideShow()
	}else{playing=true;
		startSlideShow()
	}

}
document.querySelector("#play").addEventListener("click", playButtonClicked);

function selectPin (newNumber) {
	document.querySelector(".selected").classList.remove("selected");
	document.querySelector("#pin"+newNumber).classList.add("selected");	

}

function showSlide (newNumber) {
	document.querySelector(".show").classList.remove("show");
	document.querySelector("#slide"+newNumber).classList.add("show");
	currentNumber = newNumber;
	selectPin(newNumber);
}
for(let pinNumber = 1; pinNumber<=5; pinNumber++){
	document.querySelector("#pin"+pinNumber).addEventListener("click", function(){showSlide(pinNumber)});
}

function showNextSlide () {
	
	
	currentNumber = currentNumber+1
	if (currentNumber>5) {currentNumber=1}
	showSlide(currentNumber)
}
document.querySelector("#next").addEventListener("click", showNextSlide);


function showPreviousSlide () {
	
	
	currentNumber = currentNumber-1
	if (currentNumber<1) {currentNumber=5}
	showSlide(currentNumber)
}
document.querySelector("#prev").addEventListener("click", showPreviousSlide);








