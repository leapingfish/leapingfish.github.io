$('li[data-title]').on('click', function() {
    if ($(this).find('.popup').length > 0) {
        $(this).find('.popup').remove();
    } else {
        $('.popup').remove();
        var title = $(this).data('title');
        var html = '<div class="popup">';
            html += '<h3>' + title + '</h3>';
            html += '<a href="http://www.google.com" target="_blank">MORE</a>'
            html += '</div>';

        $(this).append(html);
    }
});
