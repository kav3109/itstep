export default class Player {

    constructor(array, timeOut) {
        this.array = array;
        this.timeOut = timeOut;
    }

    get array() {
        return this._privateArray;
    }
    set array(x) {
        this._privateArray = x;
    }
    get timeOut() {
        return this._privateTimeOut;
    }
    set timeOut(ms) {
        this._privateTimeOut = ms;
    }

    // listen controllers
    listenButtons(array, timeOut) {

        // screen size
        $('.screen').click(function() {
            $('.expand').toggleClass('hidden');
            $('.compress').toggleClass('hidden');
            $('.wrapper').toggleClass('full-wrap');
            $('.presentation, img').toggleClass('full-presentation');
        });

        // last slide
        $('.fa-fast-forward, .fa-circle:last-child').click(function () {
            if($(this).hasClass('disabled') || $(this).hasClass('checked')) return;
            let $currentSlide = $('.showed');
            let $lastSlide = $('img').last();
            $currentSlide.fadeOut(timeOut, function() {
                $(this).toggleClass('showed hidden');
            });
            $lastSlide.fadeIn(timeOut, function() {
                $(this).toggleClass('showed hidden');
            });
            new Player().setButtonStyle(array, array.length);
        });

        // first slide
        $('.fa-fast-backward, .fa-circle:first-child').click(function () {
            if($(this).hasClass('disabled') || $(this).hasClass('checked')) return;
            let $currentSlide = $('.showed');
            let $firstSlide = $('img').first();
            $currentSlide.fadeOut(timeOut, function() {
                $(this).toggleClass('showed hidden');
            });
            $firstSlide.fadeIn(timeOut, function() {
                $(this).toggleClass('showed hidden');
            });
            new Player().setButtonStyle(array, 1);
        });
    };

    // set controllers style
    setButtonStyle(array, num) {
        let $allArrows = $('.fas, .far');
        let $btnStart = $('.fa-fast-backward');
        let $btnBack = $('.fa-backward');
        let $btnNext = $('.fa-forward');
        let $btnLast = $('.fa-fast-forward');
        let $currentPage = $('.checked');

        // clear all styles
        $allArrows.removeClass('disabled');
        $currentPage.toggleClass('far fas checked');

        //disable first two buttons
        if(num === 1) {
            $btnStart.addClass('disabled');
            $btnBack.addClass('disabled');
            $('.fa-circle').first().toggleClass('far fas checked');
        }
        //disable second two buttons
        if(num === array.length) {
            $btnNext.addClass('disabled');
            $btnLast.addClass('disabled');
            $('.fa-circle').last().toggleClass('far fas checked');
        }
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