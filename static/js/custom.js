$('#about').click(function() {
	$('.about').css("display", "inline");
	$('.home').css("display", "none");
});

$('#home').click(function() {
	$('.home').css("display", "inline");
	$('.about').css("display", "none");
})