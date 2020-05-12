$(document).ready(() => {

    $('.generate').click(() => {

        if(validate() === false) return;
        $res = '';
        $str = '';
        $num = '1234567890';
        $big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $small = 'abcdefghijklmnopqrstuvwxyz';
        if($('#result').val() !== '') $('#result').val('');
        if($('#digit').prop('checked') === true) $str = $num;
        if($('#uppercase').prop('checked') === true) $str += $big;
        if($('#lowercase').prop('checked') === true) $str += $small;
        for ($i = 0; $i < $('.long').val(); $i++) {
            $res += $str.charAt(Math.floor(Math.random() * $str.length));
        }
        $('#result').val($res);

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