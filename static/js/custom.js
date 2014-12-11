$('#about').click(function() {
	$('.about').css("display", "inline");
	$('.home').css("display", "none");
});

$('#home').click(function() {
	$('.home').css("display", "inline");
	$('.about').css("display", "none");
})

$('#submit').click(function() {
	var drawFunc = (function() {
		//prevent cross site scripting
		var document = undefined;
		var window = undefined;
		return eval(editor.getValue());
	});
	drawFunc();
})