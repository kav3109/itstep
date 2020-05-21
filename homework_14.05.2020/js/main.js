$(document).ready(() => {

    $('.menu').on('click', () => {
        $('span').toggleClass('show');
    });

    const getColors = () => {
        let $arr = [];
        $('.wrap').children('div').each((ind, el) => {
            if($arr.includes(el.className) === false) $arr.push(el.className);
        });
        return $arr;
    };

    if(getColors().length !== 0) {
        $('section').prepend('<div class="colors"><h3>Select color:</h3></div>');
        let $colors = $('.colors');
        getColors().forEach((item) => {
            $colors.append(`<div class="${item}">${item}</div>`);
        });
        $colors.find('div').each(function(){
            $(this).on('click', function(){
                let $color = $(this).text();
                $('div').find(`.${$color}`).toggleClass('shadow');
            })
        })
    }



});