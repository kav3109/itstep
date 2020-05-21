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
        //native
        let items = document.querySelectorAll('.colors div');
        items.forEach((item) => {
            item.addEventListener('click', () => {
                let shadow = document.querySelectorAll('.shadow');
                if(shadow.length > 0) {
                    shadow.forEach((ele) => {
                        ele.classList.remove('shadow');
                    })
                }
                document.querySelectorAll(`.${item.className}`).forEach((el) => {
                    el.classList.add('shadow');
                })
            })
        });
        // jquery (doesn't work)
        // $colors.find('div').each((ind, el) => {
        //     $(this).on('click', (e) => {
        //         console.log($(this));
        //         // el.hasClass(el.className).addClass('shadow');
        //     })
        // })
    }



});