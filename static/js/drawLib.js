var drawRectangle = (function(x, y, width, height, color) {
	
	var ctx= document.getElementById("myCanvas").getContext("2d");
	ctx.fillStyle="#"+color;
	ctx.fillRect(x,y,width,height);
});

var colorPix = (function(x, y, color) {
	var ctx= document.getElementById("myCanvas").getContext("2d")
	ctx.fillStyle="#"+color;
	ctx.fillRect(x,y,1,1);
});

var rgb2hex = (function(r,g,b) {
	r = Math.floor(r);
	g = Math.floor(g);
	b = Math.floor(b);
	if (r < 16) {
		rp = "0"+r.toString(16);
	} else {
		rp = r.toString(16);
	}
	if (g < 16) {
		gp = "0"+g.toString(16);
	} else {
		gp = g.toString(16);
	}
	if (b < 16) {
		bp = "0"+b.toString(16);
	} else {
		bp = b.toString(16);
	}
	return "#"+rp+gp+bp
});

var hsb2hex = (function(h,s,b) {
	h = Math.floor(h%360);
	var C = b/100*s/100;
	var X = C*(1-Math.abs((h/60)%2-1));
	var m = b/100-C;
	switch (Math.floor(h/60)) {
		case 0:
			return rgb2hex(255*(C+m), 255*(X+m), 255*(m));
		case 1:
			return rgb2hex(255*(X+m), 255*(C+m), 255*(m));
		case 2:
			return rgb2hex(255*(m), 255*(C+m), 255*(X+m));
		case 3:
			return rgb2hex(255*(m), 255*(X+m), 255*(C+m));
		case 4:
			return rgb2hex(255*(X+m), 255*(m), 255*(C+m));
		case 5:
			return rgb2hex(255*(C+m), 255*(m), 255*(X+m));
	}
});