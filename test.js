var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img = new Image();   // Create new img element
img.addEventListener('load', function() {
  ctx.drawImage(img, 0, 0);
}, false);
img.src = 'img/pikachu_silhouette.png'; // Set source path
img.width = 25;
