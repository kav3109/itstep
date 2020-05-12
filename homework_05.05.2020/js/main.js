$(document).ready(() => {

    $('.generate').click(() => {

        if(validate() === false) return;
        let $res = '';
        let $str = '';
        const $num = '1234567890';
        const $big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const $small = 'abcdefghijklmnopqrstuvwxyz';
        const $inpRes = $('#result');
        if($inpRes.val() !== '') $inpRes.val('');
        if($('#digit').prop('checked') === true) $str = $num;
        if($('#uppercase').prop('checked') === true) $str += $big;
        if($('#lowercase').prop('checked') === true) $str += $small;
        for ($i = 0; $i < $('.long').val(); $i++) {
            $res += $str.charAt(Math.floor(Math.random() * $str.length));
        }
        $inpRes.val($res);

    });

    const validate = () => {
        if($('.long').val() === '') {
            alert('Enter long of string, please!');
            return false;
        }
        if($("input:checkbox:checked").length === 0) {
            alert('Check type of symbols in the string, please!');
            return false;
        }
        return true;
    }

});