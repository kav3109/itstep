(function($) {
    $(document).ready(() => {

        // custom full name validator
        window.Parsley
            .addValidator('equalTo', {
                requirementType: 'string',
                validateString: function(value, requirement) {
                    requirement = /[a-zA-Z -]/g;
                    return (value.match(requirement) === null)? false: value.length === value.match(requirement).length;
                },
                messages: {
                    en: 'Full name may only contain letters, spaces, and dashes',
                }
            });

        // custom date validator
        window.Parsley
            .addValidator('dateIsMoreThan', {
                requirementType: 'string',
                validateString: function(value, requirement) {
                    requirement = -2208996124000;//date - 01/01/1900
                    return Date.parse(value) >= requirement;
                },
                messages: {
                    en: 'Min birthday is 01/01/1900',
                }
            });

        // set result
        const setResult = () => {
            let $fullName, $avatar, $birthday, $gender, $subscribtion;
            $fullName = $('#fullName').val();
            $avatar = $('#avatar').val();
            $birthday = $('#birthday').val();
            $gender = $('input[name="gender"]:checked').val();
            $subscribtion = $('#subscribtion:checked').length;

            $('#result').show();
            $('.fullName').text($fullName);
            $('.avatar').text($avatar);
            $('.birthday').text($birthday);
            $('div.gender').text($gender);
            $('.subscribe').text(($subscribtion > 0)?'Yes':'No');
        };

        // submit form validator
        $('#form').parsley().on('field:validated', function() {
            let ok = $('.parsley-error').length === 0;
            if(!ok) $('body').css('width', '810px');
            if(ok) $('body').css('width', '450px');
        })
            .on('form:submit', function(event) {
                setResult();
                return false;
            });
    });
})(jQuery);