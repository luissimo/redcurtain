$(document).on(function() {
    // on body click remove notices
    $(document).on('click', 'body', function() {
        $('.alert').hide();
        $('.notice').hide();
    });
    $('#notice').hide();

    // If 'table is empty' notice is visible -> large buttons blink
    if ($('.alert-info').length && $('.text-center').length) {
        button = $('.btn-lg');
        button.fadeOut(50);
        button.fadeIn(2000);
    }

});


