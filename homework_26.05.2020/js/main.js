import Player from './Player.js'

$(document).ready(() => {

    const $imagesArr = [
        'https://i.picsum.photos/id/1018/1920/1080.jpg',
        'https://i.picsum.photos/id/1019/1920/1080.jpg',
        'https://i.picsum.photos/id/1021/1920/1080.jpg',
    ];

    const player = new Player();
    player.setFirstView($imagesArr);
    player.listenButtons($imagesArr, 1000);

});