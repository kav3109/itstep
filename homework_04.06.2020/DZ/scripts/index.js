(function($) {
    $(document).ready(() => {

        // password complexity
        const getComplexity = (pass) => {
            let $complexity;
            if((/^\d+$/).test(pass) || (/^[a-z]+$/).test(pass) || (/^[A-Z]+$/).test(pass))
                return $complexity = '(Very easy)';
            if((/^[A-Z0-9]+$/).test(pass) || (/^[a-z0-9]+$/).test(pass))
                return $complexity = '(Easy)';
            if((/^[A-z0-9]+$/).test(pass))
                return $complexity = '(Normal)';
            if((/^[#$-/:-?{-~!"^_`\[\]A-z0-9]+$/).test(pass))
                return $complexity = '(Hard)';
        };

        // custom name validator
        window.Parsley
            .addValidator('notEqualTo', {
                requirementType: 'string',
                validateString: function(value, requirement) {
                    return null === requirement.match(value);
                },
                messages: {
                    en: 'Username "admin" or "user" or "test" is not allowed',
                }
            });

        // submit form validator
        $('#form').parsley().on('field:validated', function() {
            let ok = $('.parsley-error').length === 0;
            if(!ok) $('body').css('width', '810px');
            if(ok) $('body').css('width', '450px');
        })
            .on('form:submit', function() {
                console.log('done');
            });
    });
})(jQuery);