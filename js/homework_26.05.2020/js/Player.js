export default class Player {

    // listen controllers
    listenButtons(array, timeOut) {

        if(timeOut === undefined) timeOut = 800; //animation speed
        let paused = true; //current state of autoslider
        let interval; //time out function link

        // screen size controller
        $('.screen').click(function() {
            $('.expand').toggleClass('hidden');
            $('.compress').toggleClass('hidden');
            $('.wrapper').toggleClass('full-wrap');
            $('.presentation, img').toggleClass('full-presentation');
        });

        // button last slide
        $('.fa-fast-forward').click(function () {
            if($(this).hasClass('disabled') || paused === false) return;
            let $currentSlide = $('.showed');
            let $lastSlide = $('img').last();
            new Player().showSlide($currentSlide, $lastSlide, timeOut);
            new Player().setButtonStyle(array, array.length);
        });

        // button first slide
        $('.fa-fast-backward').click(function () {
            if($(this).hasClass('disabled') || paused === false) return;
            let $currentSlide = $('.showed');
            let $firstSlide = $('img').first();
            new Player().showSlide($currentSlide, $firstSlide, timeOut);
            new Player().setButtonStyle(array, 1);
        });

        // button previous
        $('.fa-backward').click(function () {
            if($(this).hasClass('disabled') || paused === false) return;
            let $currentSlide = $('.showed');
            let $nextIndex = $currentSlide.data('number')-2;
            let $nextSlide = $('img').eq($nextIndex);
            new Player().showSlide($currentSlide, $nextSlide, timeOut);
            new Player().setButtonStyle(array, $nextIndex+1);
        });

        // button next
        $('.fa-forward').click(function () {
            if($(this).hasClass('disabled') || paused === false) return;
            let $currentSlide = $('.showed');
            let $next = $currentSlide.data('number')+1;
            let $nextSlide = $('img').eq($next-1);
            new Player().showSlide($currentSlide, $nextSlide, timeOut);
            new Player().setButtonStyle(array, $next);
        });

        // page button
        $('.fa-circle').click(function () {
            if($(this).hasClass('checked') || paused === false) return;
            let $currentSlide = $('.showed');
            let $nextPage = $(this).data('number');
            let $nextSlide = $('img').eq($nextPage-1);
            new Player().showSlide($currentSlide, $nextSlide, timeOut);
            new Player().setButtonStyle(array, $nextPage);
        });

        // button play
        $('.fa-play-circle').click(function () {
            if($(this).hasClass('disabled')) return;
            $(this).toggleClass('fa-pause-circle fa-play-circle');
            if(paused) {
                setAutoplay();
                paused = false;
            } else {
                clearInterval(interval);
                paused = true;
            }
        });

        const setAutoplay = () => {
            let $currentSlide = $('.showed');
            if(($currentSlide.data('number') === array.length)) {
                new Player().showSlide($currentSlide, $('img').first(), timeOut);
                new Player().setButtonStyle(array, 1);
            }
            interval = setInterval(function(){
                $currentSlide = $('.showed');
                let $currentPage = $currentSlide.data('number');
                if(($currentPage === array.length-1)) setPause();
                let $nextSlide = $('img').eq($currentPage);
                let $nextPage = $currentPage+1;
                new Player().showSlide($currentSlide, $nextSlide, timeOut);
                new Player().setButtonStyle(array, $nextPage);
            }, 1000);
        };

        const setPause = () => {
            $('.fa-pause-circle').toggleClass('fa-pause-circle fa-play-circle');
            clearInterval(interval);
            paused = true;
        }
    };

    // show slide
    showSlide(current, next, timeOut) {
        current.fadeOut(timeOut, function() {
            $(this).toggleClass('showed hidden');
        });
        next.fadeIn(timeOut, function() {
            $(this).toggleClass('showed hidden');
        });
    }

    // set controllers state
    setButtonStyle(array, num) {
        let $allArrows = $('.fas, .far');
        let $btnStart = $('.fa-fast-backward');
        let $btnBack = $('.fa-backward');
        let $btnNext = $('.fa-forward');
        let $btnLast = $('.fa-fast-forward');
        let $currentPage = $('.checked');
        let $circles = $('.fa-circle');
        let $btnPlay = $('.fa-play-circle');

        // clear all styles
        $allArrows.removeClass('disabled');
        $currentPage.toggleClass('far fas checked');

        //disable all buttons if we have only one page
        if(array.length === 1) {
            $btnNext.addClass('disabled');
            $btnLast.addClass('disabled');
            $btnPlay.addClass('disabled');
        }

        //disable first two buttons if showed first page
        if(+num === 1) {
            $btnStart.addClass('disabled');
            $btnBack.addClass('disabled');
            $circles.first().toggleClass('far fas checked');
            return;
        }
        //disable second two buttons if showed last page
        if(+num === array.length) {
            $btnNext.addClass('disabled');
            $btnLast.addClass('disabled');
            $circles.last().toggleClass('far fas checked');
            return;
        }
        //set next page
        $circles.eq(num-1).toggleClass('far fas checked');
    }

    //set images and pagination to html
    setFirstView(array) {
        if(array.length === 0) console.error('Array of images is empty');
        let $presentation = $('.presentation');
        let $pagination = $('.pagination');
        array.forEach((el, ind) => {
            if(ind === 0) {
                $presentation.append('<img data-number="'+(ind+1)+'" class="showed" src="'+ el +'" alt="Picture">');
                $pagination.append('<i data-number="'+(ind+1)+'" class="fas fa-circle checked"></i>');
            } else {
                $presentation.append('<img data-number="'+(ind+1)+'" class="hidden" src="'+ el +'" alt="Picture">');
                $pagination.append('<i data-number="'+(ind+1)+'" class="far fa-circle"></i>');
            }
        });
        this.setButtonStyle(array, 1);
    };
}