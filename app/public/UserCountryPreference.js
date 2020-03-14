/*=========================================================================================
    File Name: dashboard-ecommerce.js
    Description: dashboard ecommerce page content with Apexchart Examples
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Version: 2.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function () {
  /*------ Country button click event handler ----------*/
  $(".btn-view-country").click(function() {
    $("#country_modal").modal('show');
  })

  $(".list-group-item-action").click(function() {
    $(".list-group-item-action").removeClass('selected');
    $(this).addClass('selected');
  });

  $(".btn-set-country").click(function() {
    var country = $(".list-group-item-action.selected").find('h5').text();
    if (!country) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "/country/set",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },  
      data: {
        country: country
      },
      cache: false,
      success: function(data) {
         console.log(data);
         $("#country_modal .result").text(data.msg);
         if (data.code == 1)  {
          $("#country_modal .result").addClass("success");
          $("#main-menu-navigation .country-preference").text("Country Preference: " + country);
         } else {
          $("#country_modal .result").removeClass("success");
         }
      }
    });
  });
});