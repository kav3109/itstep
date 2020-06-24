import Products from './Products.js';
import Basket from './Basket.js';
import DataBase from './DataBase.js';

(function($) {
    $(document).ready(() => {
        const $products = new Products;
        const $basket = new Basket;
        const $db = new DataBase;
        const $section = $('section');

        //listen the nav button "Products"
        $('.product').click(function () {
            setActiveButton($(this));
            setProductPage();
        });

        //listen the nav button "Basket"
        $('.basket').click(function () {
            setActiveButton($(this));
            setBasketPage();
        });

        //listen the nav button "Admin page"
        $('.admin').click(function () {

            setActiveButton($(this));
            //TODO Paskal's job))
        });


        function setActiveButton(element) {

            //check if current button is active
            if(element.hasClass('active')) return;

            //clear active button
            $('.active').removeClass('active');

            //set new active button
            element.addClass('active');
            $section.empty();
        }

        function setBasketPage() {
            $basket.setTitle($section);
            if(localStorage.length === 0) return;
            $basket.setTableHeader($section);
            let $arr, $totalSum = 0;
            for(let i = 0; i < localStorage.length; i++){
                $arr = localStorage.getItem(localStorage.key(i)).split(',');
                $basket.setItems(
                    i+1, //item row number
                    `${$arr[0]}(${$arr[1]})`, //title and country
                    $arr[2], //price
                    $arr[3], //current quantity
                    $arr[4] //max quantity
                );
                $totalSum = $totalSum + (+$arr[3]*(+$arr[2]));
                if(i === localStorage.length - 1) $basket.setTotal($totalSum);
            }

            //listen quantity
            let $elCount = $('input[type="number"]');

            //clear invalid class from input on focusing
            $elCount.focus(function () {$(this).removeClass('invalid');});

            //change quantity
            $elCount.change(function () {
                if(+$(this).val() > +$(this).data(count)) $(this).addClass('invalid');
                //TODO recount cums
            })

        }

        function setProductPage() {
            //build page and listen elements
            $products.setTitle($section);
            $db.getData().forEach((e, id)=>{
                if(e.count > 0)$products.setItems(id, e.title, e.image, e.country, e.price, e.count);
            });

            //clear invalid class from input on focusing
            $('.counter').focus(function () {$(this).removeClass('invalid');});

            //listen the button "Buy"
            let $ident, $maxCount, $elCount;
            $('input[type="button"]').click(function () {

                $ident = $(this).data('num');
                $maxCount = $(this).data('count');
                $elCount = $(`#${$ident} .counter`);

                // check max count
                if(+$elCount.val() > $maxCount || +$elCount.val() < 1) return $elCount.addClass('invalid');

                //save to local storage
                localStorage.setItem($ident,
                    $(`#${$ident} .item`).text() + ',' + // title of item
                    $(`#${$ident} .country`).text()+ ',' + // country
                    $(`#${$ident} .price`).text()+ ',' + // price
                    $elCount.val() + ',' + // current quantity
                    $maxCount // max quantity
                );
            });
        }

        //set start page
        setProductPage();
    });
})(jQuery);