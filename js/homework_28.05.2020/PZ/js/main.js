$(document).ready(() => {

    $('nav div').on('click', function(){

        let $fruit = $(this).data('fruit');
        $('div').attr('data-color', '');
        $(this).attr('data-color', 'blue');
        $('p').attr('data-show', '');
        $(`p[data-fruit="${$fruit}"]`).attr('data-show', 'show');
    })

});