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

  /*------------- Start Camera -------------*/
  function startCamera() {
    $(".video-container").html("<video></video>");
    
    var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      var video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
        video.play();
        $("#main-menu-navigation .webcam-state").text("Your Webcam:  Started");
      };
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
  }

  /*------- "Start" click event handler --------*/
  $(".btn-start-cam").click(function() {
    startCamera();
  })

  /*------- "Stop" click event handler --------*/
  $(".btn-stop-cam").click(function() {
    var video = document.querySelector('video');  // Get video element.
    if (video != null) {
      video.pause();  // Pause the video playing.
      if (video.srcObject) {
        video.srcObject.getTracks().forEach(function(track) {
          track.stop();
          $("#main-menu-navigation .webcam-state").text("Your Webcam: Stopped");
        });
      }
      video.removeAttribute('src'); // empty source
      $(video).remove();
    }
  })
});