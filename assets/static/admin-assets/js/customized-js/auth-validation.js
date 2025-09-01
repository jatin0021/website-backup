
// Login Page Validation
$("#login").validate({
    rules: {
        username: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
            email:true,
        },
        password: {
            required: true, 
            minlength: 8,
            maxlength: 35,
            normalizer: function (value) {
                return $.trim(value);
            }
        },
    },
    messages: {
        username: {
            required: "Please enter your email address",
        },
        password: {
            required: "Please enter password",
            minlength: "At least 8 characters required!",
            maxlength: "At most 35 characters only!"
        },
    }
});

// password toggle 
function changetype(){
    if ($("#password").attr('type') == "password"){
        document.getElementById("password").type = "text";
    }
    else{
        document.getElementById("password").type = "password";
    }
}

function changetype_(){
    if ($("#confirm_password").attr('type') == "password"){
        document.getElementById("confirm_password").type = "text";
    }
    else{
        document.getElementById("confirm_password").type = "password";
    }
}
function changetype__(){
    if ($("#current_password").attr('type') == "password"){
        document.getElementById("current_password").type = "text";
    }
    else{
        document.getElementById("current_password").type = "password";
    }
}

$(document).ready( function () {
    $('#full_year').text(new Date().getFullYear());
});

// SignUp Page Validation
$("#SignUp-form").validate({
    rules: {
        full_name: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        // first_name: {
        //     required: true,
        //     normalizer: function (value) {
        //         return $.trim(value);
        //     },
        // },
        // last_name: {
        //     required: true,
        //     normalizer: function (value) {
        //         return $.trim(value);
        //     },
        // },
        email: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
            email:true,
            is_email_exists:true,
        },
        password: {
            required: true,
            minlength: 8,
            normalizer: function( value ) {
                return $.trim( value );
            },
            strongpassword:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$",
        },
        // confirm_password: {
        //     required: true,
        //     minlength: 8,
        //     equalTo: "#password",
        //     normalizer: function( value ) {
        //         return $.trim( value );
        //     },
        //     strongpassword:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$",
        // },
        term_and_condition:{
            required: true, 
            normalizer: function (value) {
                return $.trim(value);
            },
        },
    },
    messages: {
        full_name: {
            required: "Please enter full name",
        },
        // first_name: {
        //     required: "Please enter first name",
        // },
        // last_name: {
        //     required: "Please enter last name",
        // },
        email: {
            required: "Please enter email",
        },
        password: {
            required: "Please enter password",
            minlength: jQuery.validator.format("At least {0} characters required!"),
            strongpassword:"Password must have one uppercase, lowercase, symbol and number"
        },
        // confirm_password: {
        //     required: "Please enter confirm password",
        //     minlength: jQuery.validator.format("At least {0} characters required!"),
        //     equalTo: "Passwords do not match!",
        //     strongpassword:"Password must have one uppercase, lowercase, symbol and number"
        // },
        term_and_condition: {
            required: "Please indicate you are agree with our term and conditions",
        },
    }
});


//Contact Page Validation
$("#contact-form").validate({
    rules: {
        name: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        email: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
            email:true,
        },
        subject: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
        message: {
            required: true,
            normalizer: function (value) {
                return $.trim(value);
            },
        },
    },
    messages: {
        name: {
            required: "Please enter your name",
        },
        email: {
            required: "Please enter your email",
        },
        subject: {
            required: "Please enter subject",
        },
        message: {
            required: "Please write message",
        },
    }
});

// Change Password
$("#change-password").validate({
    rules: {
        current_password: {
            required: true,
            minlength: 8,
            normalizer: function( value ) {
                return $.trim( value );
            },
            strongpassword:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$",
        },
        password: {
            required: true,
            minlength: 8,
            normalizer: function( value ) {
                return $.trim( value );
            },
            strongpassword:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$",
        },
        confirm_password: {
            required: true,
            minlength: 8,
            equalTo: "#password",
            normalizer: function( value ) {
                return $.trim( value );
            },
            strongpassword:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$",
        },
        
    },
    messages: {
        current_password: {
            required: "Please enter current password",
            minlength: jQuery.validator.format("At least {0} characters required!"),
            strongpassword:"Password must have one uppercase, lowercase, symbol and number"
        },
        password: {
            required: "Please enter new password",
            minlength: jQuery.validator.format("At least {0} characters required!"),
            strongpassword:"Password must have one uppercase, lowercase, symbol and number"
        },
        confirm_password: {
            required: "Please confirm password",
            minlength: jQuery.validator.format("At least {0} characters required!"),
            equalTo: "Passwords do not match!",
            strongpassword:"Password must have one uppercase, lowercase, symbol and number"
        },
    }
});


// Change Password
$("#delete-form").validate({
    rules: {
        select_reason:{
            required:true,
        },
    },
    messages: {
        select_reason:{
            'required':"Please select reason"
        },
    }
});