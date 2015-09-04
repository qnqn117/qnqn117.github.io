$('#myModal').modal({
  keyboard: true,
  show:false
});

$('.menu h1').mouseover(function() {
	this.className = this.className + " tada";
	setTimeout(function() {
		$('.menu h1').removeClass('tada');
	}, 500);
});