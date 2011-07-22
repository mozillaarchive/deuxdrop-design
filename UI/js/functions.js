$(document).ready(function($) {

    $('button.notify').click(function() {
        $('#alert').addClass('visible');
    });
    
    $('#alert button.cancel').click(function() {
        $('#alert').removeClass('visible');
    });

});
