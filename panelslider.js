$(document).ready(function() {
	$('.btn').click(function() {
		$('.panel').slideToggle('slow');
		$('.btn img').toggleClass('btn-toggle');
		$('.btn p').html($('.btn p').html() == 'Close Panel' ? 'Open Panel' : 'Close Panel');
		return false;
	});
});
