$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        // Submit form via Ajax
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize()
        }).then(function() {
            alert('Thanks! An agent will be contacting you shortly.');
        }).fail(function() {
            alert('Oops! There was an error. Please try again.');
        });
    });
});