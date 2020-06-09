(function($) {
    $(document).ready(() => {

        const $load = $('button');
        $load.click(()=>{
            const $log = $('#log');
            // 1.
            // $log.load('https://reqres.in/api/users'); // response - html
            // 2.
            // $.get('https://reqres.in/api/users', { // response - json
            //     "page": 2
            // }, (data)=>{
            //     console.log(data);
            // });
            // 3.
            // const jqXHR = $.get('https://reqres.in/api/users', { // response - json
            //     "page": 2
            // });
            // jqXHR.always((data) => {//instead of done() and fail()
            //     console.log(data);
            // });
            // 4.
            const jqXHR = $.get('https://reqres.in/api/users', { // response - json
                "page": 2
            });
            jqXHR.then(function success(data) {//instead of done() and fail() and always
                console.log(data);
            }, function error(jqXHR) {
                console.log(jqXHR);
            });


        });
    });
})(jQuery);