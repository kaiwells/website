var Images = {};
var IMAGES_LOADED = 0;
var toggle = 0;
var canvas = document.getElementById("myCanvas");
var ctx = document.querySelector("canvas").getContext("2d");

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
                 document.querySelector("span").innerText = "Who's that Pokemon?";
				//startGame();
				IMAGES_LOADED = 1;
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
     name: "BlueBomb",
     url: "img/blue bomb.png"
},{
     name: "BlueStar",
     url: "img/blue star.png"
},{
     name: "BlueTile",
     url: "img/blue tile.png"
}]);

//The main draw loop
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(IMAGES_LOADED === 1){
		if(toggle === 0) {
			drawImage("PikachuSilhouette");
			//toggle = 1;
		} else {
			drawImage("Pikachu");
			//toggle = 0;	
		}	
	}

}


setInterval(draw, 10);
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Select";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  var guess = document.getElementById("pokemonGuess").value;
  var cry = document.getElementById("pikachuCry"); 
  var fail = document.getElementById("fail");
  if(guess==="pikachu") {
	  cry.play(); 
	  drawImage("Pikachu");
	  toggle = 1;
	  //alert("Correct");

  }
  else {
	  //alert("wrong");
	  fail.play(); 
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