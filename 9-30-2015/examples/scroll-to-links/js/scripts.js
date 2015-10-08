$('a').on('click', smoothScrollJump);

function smoothScrollJump(event) {
    event.preventDefault();

    // GET THE LINK WE CLICKED ON
    var $currentTarget = $(event.currentTarget);

    // GOT THE NAME OF THE ID SPECIFIC TO THE TARGET
    var targetId = $currentTarget.attr('href');

    console.log($(targetId).offset());

    // MEASURE DISTANCE FROM ID TO TOP OF DOCUMENT
    var offsetTop = $(targetId).offset().top;

    // ANIMATE PAGE TO SCROLLTOP PROPERTY
    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
}
