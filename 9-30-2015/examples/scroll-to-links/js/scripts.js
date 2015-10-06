$('a').on('click', jump);

function jump(event) {
    event.preventDefault();

    // GET THE LINK WE CLICKED ON
    var $currentTarget = $(event.currentTarget);

    // GOT THE NAME OF THE ID SPECIFIC TO THE TARGET
    var targetId = $currentTarget.attr('href');

    // MEASURE DISTANCE FROM ID TO TOP OF DOCUMENT
    var offsetTop = $(targetId).offset().top;

    // ANIMATE PAGE TO SCROLLTOP PROPERTY
    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
}
