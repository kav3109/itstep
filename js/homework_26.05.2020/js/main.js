import Player from './Player.js'

(function($) {
    $(document).ready(() => {

        const $imagesArr = [
            'https://i.picsum.photos/id/1018/1920/1080.jpg',
            'https://i.picsum.photos/id/1019/1920/1080.jpg',
            'https://i.picsum.photos/id/1021/1920/1080.jpg',
            'https://i.picsum.photos/id/1022/1920/1080.jpg',
            'https://i.picsum.photos/id/1023/1920/1080.jpg',
        ];

        const player = new Player();
        player.setFirstView($imagesArr);
        player.listenButtons($imagesArr);

    });
})(jQuery);