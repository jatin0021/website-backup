// Event listener for keyup events
function GetPackageCountries(id,search) {
    clearTimeout(typingTimer); // Clear the previous timer
    typingTimer = setTimeout(() => GetPackageCountries1(id, search), doneTypingInterval); // Set a new timer
}


let package_id = null;

function GetPackageCountries1(id,search){
  if(id !=''){
    package_id = id
    $('#exampleInputEmail1').val('')
  }
  $.ajax({
    url: "/get-package-countries/",
    type: "GET",
    data: { package_id:package_id,search:search},
    async:false,
    success: function (data) {
      $('.country-list-card').html(data.data)
    }
  });
}


// Event listener for keyup events
function GetPackageCountries_(id,search) {
    clearTimeout(typingTimer); // Clear the previous timer
    typingTimer = setTimeout(() => GetPackageCountries2(id, search), doneTypingInterval); // Set a new timer
}

function GetPackageCountries2(id,search){
  $.ajax({
    url: "/get-package-countries/",
    type: "GET",
    data: { package_id:id,search:search},
    async:false,
    success: function (data) {
      $('#country-list-card-countries').html(data.data)
    }
  });
}


// Event listener for keyup events
function GetPackageCountries__(id,search) {
  $('#country-list-card-networks').html('')
  $('#loader-div').removeClass('d-none')
    clearTimeout(typingTimer); // Clear the previous timer
    typingTimer = setTimeout(() => GetPackageCountries3(id, search), doneTypingInterval); // Set a new timer
}


function GetPackageCountries3(id,search){
  
  if(id !=''){
    package_id = id
    $('#exampleInputEmail1').val('')
  }
  $.ajax({
    url: "/get-package-countries-networks/",
    type: "GET",
    data: { package_id:package_id,search:search},
    async:false,
    success: function (data) {
      $('#loader-div').addClass('d-none')
      $('#country-list-card-networks').html(data.data)

    }
  });
}



// Event listener for keyup events
function GetPackageCountries___(id,search) {
  $('#country-list-card-networks').html('')
  $('#loader-div').removeClass('d-none')
    clearTimeout(typingTimer); // Clear the previous timer
    typingTimer = setTimeout(() => GetPackageCountries4(id, search), doneTypingInterval); // Set a new timer
}


function GetPackageCountries4(id,search){

  $.ajax({
    url: "/get-package-countries-networks/",
    type: "GET",
    data: { package_id:id,search:search},
    async:false,
    success: function (data) {
      $('#loader-div').addClass('d-none')
      $('#country-list-card-networks').html(data.data)

    }
  });
}

