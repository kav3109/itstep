$(document).ready(() => {

    $(window).on('mousemove', (e) => {
        $('img').css({position: "absolute", top: e.pageY-50, left: e.pageX-50});
    })

});