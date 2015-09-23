// OPEN
$('.main__primary__article__cta').on('click', function(event) {
	event.preventDefault();
	$('.main__primary__article__hidden-text').slideDown();
	$('.main__primary__article__cta').hide();
	$('.main__primary__article__cta-less').show();
});

// CLOSE
$('.main__primary__article__cta-less').on('click', function(event) {
	event.preventDefault();
	$('.main__primary__article__hidden-text').slideUp();
	$('.main__primary__article__cta').show();
	$('.main__primary__article__cta-less').hide();
});

// OPEN
$('.main__aside__cta').on('click', function(event) {
	event.preventDefault();
	$('.main__aside__hidden-text').slideDown();
	$('.main__aside__cta').hide();
	$('.main__aside__cta-less').show();
});

// CLOSE
$('.main__aside__cta-less').on('click', function(event) {
	event.preventDefault();
	$('.main__aside__hidden-text').slideUp();
	$('.main__aside__cta').show();
	$('.main__aside__cta-less').hide();
});
