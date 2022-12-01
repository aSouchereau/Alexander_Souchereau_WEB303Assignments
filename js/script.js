$(document).ready(function (){
    let $form = $('form');
    let $submitBtn = $('input[type="submit"]');

    $submitBtn.prop('disabled', true);
    let errorMsg = [];


    //Populate countries dropdown list
    $(countries).each(function () {
        let element = '<option value="' + this.code + '">' + this.name + '</option>';
        $('select#country').append(element);
    });

    // On input, check if form is able to be submitted
    $form.on('input', function () {
        if (validateUsername() && validatePassword() && confirmPassword() && validateTerms() && validateCountry()) {
            $submitBtn.prop('disabled', false);
        }
        else {
            console.log("Invalid entries");
        }
    });

    // Intercept submit action and display message
    $form.on('submit', function (e) {
       e.preventDefault();
       $form.find('.successMsg').empty();
       let successMessage = '<div class="successMsg"><p>Welcome ' +
           $('#username').val() +
           '! The country code you selected is ' +
           $('#country').val() + '</p></div>'
       $form.append(successMessage);
       console.log("Sign up successful...");
    });

    // Username validation
    function validateUsername() {
        if ($('#username').val()) {
            return true;
        } else {
            return false;
        }
    }

    // Password validation
    function validatePassword() {
        if ($('#password').val().length >= 12) {
            return true;
        } else {
            return false;
        }
    }

    // Password confirmation {
    function confirmPassword() {
        if ($('#password').val() == $('#confirmPassword').val()) {
            return true;
        } else {
            return false;
        }
    }

    // Terms Validation
    function validateTerms() {
        if ($('#terms').is(':checked')) {
            return true;
        } else {
            return false;
        }
    }

    // Country Validations
    function validateCountry() {
        if ($('#country').val() && $('#country').val() != "unselected") {
            return true;
        } else {
            return false;
        }
    }


});
