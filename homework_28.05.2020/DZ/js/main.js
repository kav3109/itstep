$(document).ready(() => {

    let $star = $('.far');
    $star.click(function(){
        let $stars = $('.fa-star');
        $stars.each((ind, el) => {
            $(el).removeClass('fas');
            $(el).removeClass('yellow');
            $(el).removeClass('black');
        });
        let $rate = $(this).index();
        for(let $i = 0; $i < $stars.length; $i++) {
            $($stars.get($i)).removeClass('far');
            $($stars.get($i)).addClass('fas');
            ($rate <= $i)? $($stars.get($i)).addClass('black'): $($stars.get($i)).addClass('yellow');
        }
    });

});