var Images = {};
var IMAGES_LOADED = 0;
var guessIsCorrect = 0;
var canvas = document.getElementById("myCanvas");
var ctx = document.querySelector("canvas").getContext("2d");
var PIKACHU = 0;
var BULBASAUR = 1;
var CHARMANDER = 2;
var chosenPokemon = 0;
var waitTime = 0;

//Loop over the list of images and add them to the Images Object. Wait for them all to load
function loadImages(list){
     var total = 0;
     document.querySelector("span").innerText = "Loading...";
     for(var i = 0; i < list.length; i++){
         var img = new Image();
         Images[list[i].name] = img;
         img.onload = function(){
             total++;
             if(total == list.length){
                 document.querySelector("span").innerText = "Who's that Pokemon? (WIP game)";
				//startGame();
				IMAGES_LOADED = 1;
				chosenPokemon = Math.floor(Math.random() * 3);
             }
         };
         img.src = list[i].url;
     }
}
function drawImage(img){
     ctx.drawImage(Images[img], 0, 0, 200, 200);
}

// add all of the images you want to use for the game to this list. name: "theNameYouReferenceTheImageWith url: "thePathToTheFile"
var images = loadImages([{
     name: "PikachuSilhouette",
     url: "img/pikachu_silhouette.png"
},{
     name: "Pikachu",
     url: "img/pikachu.png"
},{
     name: "BulbasaurSilhouette",
     url: "img/bulbasaur_silhouette.png"
},{
     name: "Bulbasaur",
     url: "img/bulbasaur.png"
},{
     name: "CharmanderSilhouette",
     url: "img/charmander_silhouette.png"
},{
     name: "Charmander",
     url: "img/charmander.png"
}]);

//The main draw loop
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(IMAGES_LOADED === 1){
		if(guessIsCorrect === 0) {
			if(chosenPokemon === PIKACHU) {
				drawImage("PikachuSilhouette");
			}
			else if (chosenPokemon === BULBASAUR) {
				drawImage("BulbasaurSilhouette");
			}
			else if (chosenPokemon === CHARMANDER) {
				drawImage("CharmanderSilhouette");
			}
		} else {
			if(chosenPokemon === PIKACHU) {
				drawImage("Pikachu");
				if (waitTime !== 0) {
					waitTime--;
				} else {
					guessIsCorrect = 0;
					document.getElementById("pokemonGuess").value = "";
					chosenPokemon = Math.floor(Math.random() * 3);
				}
				
			}
			else if (chosenPokemon === BULBASAUR) {
				drawImage("Bulbasaur");
				if (waitTime !== 0) {
					waitTime--;
				} else {
					guessIsCorrect = 0;
					document.getElementById("pokemonGuess").value = "";
					chosenPokemon = Math.floor(Math.random() * 3);
				}
			}
			else if (chosenPokemon === CHARMANDER) {
				drawImage("Charmander");
				if (waitTime !== 0) {
					waitTime--;
				} else {
					guessIsCorrect = 0;
					document.getElementById("pokemonGuess").value = "";
					chosenPokemon = Math.floor(Math.random() * 3);
				}
			}
		}	
	}

}

setInterval(draw, 10);


// 1. Create the button
var button = document.createElement("button");
button.id = "selectButton";
button.innerHTML = "Select";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
	var guess = document.getElementById("pokemonGuess").value;
	 
	var fail = document.getElementById("fail");
	if(chosenPokemon === PIKACHU) {
		if(guess==="pikachu") {
			var cry = document.getElementById("pikachuCry");
			cry.play(); 
			drawImage("Pikachu");
			guessIsCorrect = 1;
			waitTime = 200;
		} else {
			fail.play(); 
		}
	} else if (chosenPokemon === BULBASAUR) {
		if(guess==="bulbasaur") {
			var cry = document.getElementById("bulbasaurCry");
			cry.play(); 
			drawImage("Bulbasaur");
			guessIsCorrect = 1;
			waitTime = 200;
		} else {
			fail.play(); 
		}
	} else if (chosenPokemon === CHARMANDER) {
		if(guess==="charmander") {
			var cry = document.getElementById("charmanderCry");
			cry.play(); 
			drawImage("Charmander");
			guessIsCorrect = 1;
			waitTime = 200;
		} else {
			fail.play(); 
		}
	}
	
  
});

document.getElementById("pokemonGuess")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("selectButton").click();
    }
});



function startGame() {
	drawImage("BlueTile");
}



/*
var ctx = document.querySelector("canvas").getContext("2d");
var img = new Image();
img.onload = function() {
ctx.drawImage(img,0,0,50,50);
};
img.src = "img_the_scream.jpg";
*/