(function($) {
    $(document).ready(() => {
        const $arrCard = ['&#10084;','&#9885;','&#9742;','&#9875;', '&#9731;'];

        const $getRandomCards = () => {
            return $arrCard.concat($arrCard).sort(function(){
                return Math.random() - 0.5;
            });
        };

        const $setCards = (arr) => {

        };

        $('input').click(function () {
            $()
        })
    });
})(jQuery);