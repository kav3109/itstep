$(document).ready(() => {

    let $arrow = $('.arrow'), $top, $bottom, $line, $curHeightTop, $curHeightBottom, $lock = false ;

    $arrow.on('click', () => {

        let $nav = $('nav');

        $arrow.toggleClass('left');
        $arrow.toggleClass('right');
        $nav.toggleClass('opened');
        $nav.toggleClass('closed');
        $('p.line1').toggleClass('hidden');
    });

    $(document).mousemove((e) => {
        let $change = e.clientY - $curHeightTop;
        let $changeTop = $curHeightTop + $change;
        let $changeBottom = $curHeightBottom - $change;
        if($changeTop <= 100) {$changeTop = 100; $changeBottom = "calc(100vh - 106px)"}
        if($changeBottom <= 100) {$changeBottom = 100; $changeTop = "calc(100vh - 106px)"}

        if($lock) {
            $top.css("height", $changeTop);
            $line.css("top", $changeTop);
            $bottom.css("height", $changeBottom);
        }
    });

    $('.grab').each((ind, el) => {
        $(el).mousedown((e) => {
            $top = $('.top').eq(ind);
            $bottom = $('.bottom').eq(ind);
            $line = $('.grab').eq(ind);
            $curHeightTop = $top.height();
            $curHeightBottom = $bottom.height();
            $lock = true;
        });
    });

    $(document).mouseup((e) => {
        $lock = false;
    });

    //reset sizes when window size is changed
    $(window).resize((e) => {
        $('.block1').css("height", "calc(50vh - 6px)");
        $('.block2').css("height", "50vh");
        $('.line1').css("top", "calc(50vh - 6px)");
        $('.block3').css("height", "calc(70vh - 6px)");
        $('.block4').css("height", "30vh");
        $('.line2').css("top", "calc(70vh - 6px)");
    })

});