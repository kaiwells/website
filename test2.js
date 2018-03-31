function draw() {
	//var canvas = document.getElementById("myCanvas");
	//var ctx = canvas.getContext("2d");
	
	var ctx = document.getElementById('myCanvas').getContext('2d');
	//var img = new Image();   // Create new img element
	//img.src = 'pikachu_silhouette.png'; // Set source path
	//img.onload = function() {
	//	ctx.drawImage(img, 20, 20);
	//}
	
	ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
	
	//img.addEventListener('load', function() {
	//  ctx.drawImage(img, 0, 0);
	//}, false);
	
}