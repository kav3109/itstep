(function($) {
    $(document).ready(() => {

        const getData = (func) => {
            $.get('https://reqres.in/api/users', { // response - json
                "page": 2
            }, "json").then(function success(data) {
                func(data);
            }, function error(jqXHR) {
                console.log(jqXHR);
            });
        };

        const $load = $('button');
        $load.click(()=>{
            const $log = $('#log');
            getData((data)=>{
                console.log(data.ad.company);
            })
        });
    });
})(jQuery);