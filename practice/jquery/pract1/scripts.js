$(document).ready(() => {

    $('nav div').on('click', function(){

        let $fruit = $(this).attr('class');
        console.log($fruit);
        $('div.blue').removeClass('blue');
        $(this).addClass('blue');
        $('p.show').removeClass('show');
        $(`p.${$fruit}`).addClass('show');

    })

});

//1.
// $('#btn').click(() => {
//     const $p = $('#p1');
//     $p.css({"color":"red","font-size":"34px"});
// });
// //2.
// const $link = $('#link');
// $link.hover(
//     () => {
//         $link.css('color', 'orange');
//     },
//     () => {
//         $link.css('color', 'blue');
//     });
// //3.
// $('#btn2').click(() => {
//     const $p2 = $('#p2');
//     ($('p.aaa').length === 0)? $p2.addClass("aaa"): $p2.removeClass("aaa");
// });
// //4.
// $('li').each((ind, el)=>{
//     console.log(`${ind+1} ${$(el).text()}`);
// });
// hide()
// show()
// slideUp() - схлопывание
// slideDown()
// slideToggle()
// fade() прозрачность
// fadeTo() прозрачность до
// animate()
// queue() - очередь анимации