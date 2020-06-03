$(document).ready(() => {

    const imagesArr = [
        'https://i.picsum.photos/id/1018/1920/1080.jpg',
        'https://i.picsum.photos/id/1019/1920/1080.jpg',
        'https://i.picsum.photos/id/1021/1920/1080.jpg',
    ];

    //expand or compress controller
    $('.screen').click(function() {
        $('.expand').toggleClass('hidden');
        $('.compress').toggleClass('hidden');
        $('.wrapper').toggleClass('full-wrap');
        $('.presentation, img').toggleClass('full-presentation');
    });

});