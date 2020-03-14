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
   
  $(".gender-male").click(function() {

    $.ajax({
      type: "POST",
      url: "/gender/set",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },  
      data: {
        gender: "male"
      },
      cache: false,
      success: function(data) {
        $("#main-menu-navigation .gender-preference").text("Gender Preference:  Male ");
      }
    });
  
  });

  $(".gender-female").click(function() {
    // $("#main-menu-navigation .gender-preference").text("Gender Preference:  Female ");
    $.ajax({
      type: "POST",
      url: "/gender/set",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },  
      data: {
        gender: "female"
      },
      cache: false,
      success: function(data) {
        $("#main-menu-navigation .gender-preference").text("Gender Preference:  Female ");
      }
    });
  });
});