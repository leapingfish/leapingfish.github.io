(function() {

	'use strict';

	/*
	 * Attach click events and pass event specific data
	 */

	$('.main__primary__article__hidden-trigger').on('click', {
			hiddenElement: '.main__primary__article__hidden',
			moreText: 'Read More',
			lessText: 'Read Less'
		}, addShowToggle);

	$('.main__aside__hidden-trigger').on('click', {
			hiddenElement: '.main__aside__hidden',
			moreText: 'Learn More',
			lessText: 'Learn Less'
		}, addShowToggle);

	/*
	 * Create reusable function
	 * to hide and show specific elements on page
	 */

	function addShowToggle(event) {

		// Prevent default click event
		event.preventDefault();

		var $hiddenElement = $(event.data.hiddenElement);

		$hiddenElement.css('display') === 'none'
			? $(this).text(event.data.lessText)
			: $(this).text(event.data.moreText);

		$hiddenElement.slideToggle();
	}
})();
