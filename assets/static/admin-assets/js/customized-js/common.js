
let typingTimer; // Timer identifier
const doneTypingInterval = 400; // Time in milliseconds (2000ms = 2 seconds)

// Event listener for keyup events
function SearchFunction() {
    clearTimeout(typingTimer); // Clear the previous timer
    if ($("#global_search").val() != "" ){
        if ($('#search_box_span').hasClass('d-none')){
            $('#search_box_span').removeClass('d-none')
        }
        else{
            if ($('#search_toggle').length == 0){
                   $('#search_box_span').html(`<i class="fad fa-spinner-third fa-spin" id="search_toggle"></i>`)
                }
            }
        typingTimer = setTimeout(GlobalSearch, doneTypingInterval); // Set a new timer
    }
    else{
        resetSearchForm()
    }

    // check for form submit on enter click for first option 
     if (this.event.keyCode == 13) {
        first_option = $('.OptionUrl').first()
        if(first_option.length > 0){
            refer_link = $(first_option).attr('href')
            window.location.href=refer_link
        }
    }
}


function GlobalSearch(){
    $('#append-div').removeClass('d-none')

    var search=$('#global_search').val()
    if (search && search.length > 1){
        $.ajax({
            url: "/global-search/",
            type: "GET",
            data: {'search':search},
            async:false,
            success: function (data) {
                $('#search_box_span').html(`<button class="close-btn" onclick="resetSearchForm()"></button>`)
                if (data.country_count){
                    $('#append-div').html(data.local_country)
                }
                else{
                    $('#append-div').html(`
                    <div>
                    <ul class="countries-list-append position-absolute">
                        <a href="">
                            <li><span data-testid="Asia-name">Data not found!!</span> 
                            </li>
                        </a>
                    </ul>
                </div>
                `)
                }
            }
        });
        }
    else{
      $('#append-div').html('')
    }
}

function resetSearchForm(){
    $('#global_search').val("")
    $('#search_box_span').html(`<i class="fad fa-spinner-third fa-spin" id="search_toggle"></i>`)
        setTimeout(function(){
            $('#search_box_span').addClass("d-none")
            $('#append-div').html('')
        },200)
    }
  
function setLocalCurrency(short_name){
    $.ajax({
    url: '/change-currency/',
    type: 'POST',
    data: {
        'short_name': short_name,
    },
    success: function(response) {
        window.location.reload();
    },
    error: function(xhr, status, error) {
        error
    }
    });  
}

$.validator.addMethod(
    "strongpassword",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please Choose Strong Password."
);
jQuery.validator.addMethod("is_email_exists", 
function(value, element) {
    let is_valid = true
    $.ajax({
        url: "/accounts/validations/",
        type: "GET",
        data: { email: value },
        async:false,
        success: function (data) {
            if(data.email == true){
                is_valid = false
            }else{
                is_valid =  true
            }
          
        },
      });        
    return is_valid
},'Email already exists!');

jQuery.validator.addMethod("is_username_exists", 
function(value, element) {
    let is_valid = true
    $.ajax({
        url: "/accounts/validations/",
        type: "GET",
        data: { username: value },
        async:false,
        success: function (data) {
            if(data.username == true){
                is_valid = false
            }else{
                is_valid =  true
            }
            
        },
        });        
    return is_valid
},'Username already exists!');

jQuery.validator.addMethod("is_mobile_exists", 
function(value, element) {
    let is_valid = true
    $.ajax({
        url: "/accounts/validations/",
        type: "GET",
        data: { mobile_no: value,country_code:$('#country_code').val()},
        async:false,
        success: function (data) {
            if(data.mobile_no == true){
                is_valid = false
            }else{
                is_valid =  true
            }
        },
        });        
    return is_valid
},'Mobile number already exists!');

// Refresh page on Browser Back Button to Remove the Loader
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();



function Loader(formID) {
        loader_html = `
        <div class="maindiv">
            <div>
                <div class="loadericon">
                    <div class="outerCircle"></div>
                        <div class="icon logoname">
                            <img alt="" width="40" src="/static/admin-assets/images/logo.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        if ($('#'+formID).length){
            if ($('#'+formID).valid()){
                $('body').append(loader_html);
                $('body').css('pointer-events','none');
                $('.btn').css('pointer-events','none');
            }
        }else{
            $('body').append(loader_html);
            $('body').css('pointer-events','none');
            $('.btn').css('pointer-events','none');
        }
    }


    
$(document).ready( function () {
    $('#full_year').text(new Date().getFullYear());
});

$(document).ready( function () {
    if (sessionStorage.getItem("more_countries")=='true' ){
        if ($('#all_countries').hasClass('d-none')){
            $('#all_countries').removeClass('d-none')
        }
        $("#show_more").addClass('d-none')
        $('#show_less').removeClass('d-none')
        $('#popluar_countries').addClass('d-none')
    }
});


if($('.clickable-row').length > 0 ){
    $(document).on('click', '.clickable-row', function() {
        window.location = $(this).data("href");
    });
}

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
})

$(".submenu ").click(function(){
        $(".subdrop").addClass("active");
      });

$(document).ready(function () {
    $('.timezone').val(Intl.DateTimeFormat().resolvedOptions().timeZone)
});

$('.number_field').keypress(function(event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
        ((event.which < 48 || event.which > 57) &&
        (event.which != 0 && event.which != 8))) {
        event.preventDefault();
    }

    var text = $(this).val();

    if ((text.indexOf('.') != -1) &&
        (text.substring(text.indexOf('.')).length > 2) &&
        (event.which != 0 && event.which != 8) &&
        ($(this)[0].selectionStart >= text.length - 2)) {
        event.preventDefault();
    }
    });

    $("#show_more").click(function (){
        if (sessionStorage.getItem("more_countries") == null){
            sessionStorage.setItem("more_countries", "true");
        }
        $('#all_countries').removeClass('d-none')
        $('#popluar_countries').addClass('d-none')
        $(this).addClass("d-none")
        $('#show_less').removeClass('d-none')
      });
    
      $("#show_less").click(function (){
        if (sessionStorage.getItem("more_countries") == 'true' ){
            sessionStorage.removeItem("more_countries");
        }
        $('#all_countries').addClass('d-none')
        $('#popluar_countries').removeClass('d-none')
        $(this).addClass("d-none")
        $('#show_more').removeClass('d-none')
      });


function GetCurrencyRates(search){
    $.ajax({
        url: "/transactions/get-currency-rates/",
        type: "GET",
        data: {search:search},
        async:false,
        success: function (data) {
        $('.currency-list-card').html(data.data)
        }
    });
}

function capitalizeAfterSpace(input) {
    result=input.value
    // Capitalize the first letter and convert the rest of the word to lowercase with spaces intact in input
    output = result.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    $(input).val(output);
}

function voucherCodeConverter(input) {
    let result = input.value;
    // Remove spaces, keep only A-Z and 0-9, convert to uppercase
    let output = result.replace(/[^A-Za-z0-9]/g, '') // Remove non-alphanumeric
                      .toUpperCase(); // Convert to uppercase
    $(input).val(output);
}

for (i = new Date().getFullYear(); i > new Date().getFullYear() - 5; i--)
{
    $('#years').append($('<option />').val(i).html(i));
    $('#r_years').append($('<option />').val(i).html(i));
}
