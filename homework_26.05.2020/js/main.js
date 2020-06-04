$(document).ready(() => {

    const $imagesArr = [
        'https://i.picsum.photos/id/1018/1920/1080.jpg',
        'https://i.picsum.photos/id/1019/1920/1080.jpg',
        'https://i.picsum.photos/id/1021/1920/1080.jpg',
    ];
    const slideSpeed = 700;
    const timeOut = 3000;

    //expand or compress controller
    $('.screen').click(function() {
        $('.expand').toggleClass('hidden');
        $('.compress').toggleClass('hidden');
        $('.wrapper').toggleClass('full-wrap');
        $('.presentation, img').toggleClass('full-presentation');
    });

    //set images and pagination to html
    const $setImages = () => {
        let $presentation = $('.presentation');
        let $pagination = $('.pagination');
        $imagesArr.forEach((el, ind) => {
            if(ind === 0) {
                $presentation.append('<img src="'+ el +'" alt="Picture">');
                $pagination.append('<i class="fas fa-circle"></i>');
            } else {
                $presentation.append('<img class="hidden" src="'+ el +'" alt="Picture">');
                $pagination.append('<i class="far fa-circle"></i>');
            }

        });
    };
    $setImages();

    //autoslide
    // hide()
// show()
// slideUp() - схлопывание
// slideDown()
// slideToggle()
// fade() прозрачность
// fadeTo() прозрачность до
// animate()
// queue() - очередь анимации

});