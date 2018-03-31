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

var pokemonData = [{
     name: "pikachu",
     silhoutteUrl: "img/pikachu_silhouette.png",
	 normalUrl: "img/pikachu.png",
	 cry: document.getElementById("pikachuCry")
},{
     name: "bulbasaur",
     silhoutteUrl: "img/bulbasaur_silhouette.png",
	 normalUrl: "img/bulbasaur.png",
	 cry: document.getElementById("bulbasaurCry")
},{
     name: "charmander",
     silhoutteUrl: "img/charmander_silhouette.png",
	 normalUrl: "img/charmander.png",
	 cry: document.getElementById("charmanderCry")
}];

//Loop over the list of images and add them to the Images Object. Wait for them all to load
function loadImages(list){
     var total = 0;
     document.querySelector("span").innerText = "Loading...";
     for(var i = 0; i < list.length * 2; i++){
		 if(i%2 === 0) {
			 var index = Math.floor(i/2);
			 var img = new Image();
			 Images[list[index].name + "s"] = img;
			 img.onload = function(){
				 total++;			 
			 };
			 img.src = list[index].silhoutteUrl;
		 } else {
			 var index = Math.floor(i/2);
			 var img = new Image();
			 Images[list[index].name + "n"] = img;
			 img.onload = function(){	
				 total++;
				 if(total == list.length * 2){
					 document.querySelector("span").innerText = "Who's that Pokemon? (WIP game)";
					//startGame();
					IMAGES_LOADED = 1;
					chosenPokemon = Math.floor(Math.random() * 3);
				 }
			 };
			 img.src = list[index].normalUrl;
		 }
		 /*
         var imgS = new Image(); //silhoutte image
		 var imgN = new Image(); //normal image
         Images[list[i].name + "s"] = imgS;
		 Images[list[i].name + "n"] = imgN;
         imgS.onload = function(){
             total++;
             if(total == list.length){
                 document.querySelector("span").innerText = "Who's that Pokemon? (WIP game)";
				//startGame();
				IMAGES_LOADED = 1;
				chosenPokemon = Math.floor(Math.random() * 3);
             }
         };
         imgS.src = list[i].silhoutteUrl;
		 imgN.src = list[i].normalUrl;
		 */
     }
}
function drawImage(img){
     ctx.drawImage(Images[img], 0, 0, 200, 200);
}

// add all of the images you want to use for the game to this list. name: "theNameYouReferenceTheImageWith url: "thePathToTheFile"
var images = loadImages(pokemonData);

//The main draw loop
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(IMAGES_LOADED === 1){
		if(guessIsCorrect === 0) {
			drawImage(pokemonData[chosenPokemon].name + "s");
		} else {
			drawImage(pokemonData[chosenPokemon].name + "n");
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
	if(guess===pokemonData[chosenPokemon].name) {
		var cry = pokemonData[chosenPokemon].cry;
		cry.play(); 
		drawImage(pokemonData[chosenPokemon].name+"n");
		guessIsCorrect = 1;
		waitTime = 200;
	} else {
		//fail.pause(); 
		//fail.rewind(); 
		fail.load();
		fail.play();
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

//Let's add something else


