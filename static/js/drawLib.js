var drawRectangle = (function(x, y, width, height, color) {
	
	var ctx= document.getElementById("myCanvas").getContext("2d");
	ctx.fillStyle="#"+color;
	ctx.fillRect(x,y,width,height);
});