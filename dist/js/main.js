$(function () {
  "use strict";

  //toggle sidebar
  $(".toggle-sidebar").on("click", function () {
    $(".content-area , .sidebar").toggleClass("no-sidebar");
  });

  //toggle submenu
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });
});

//Open / Close FullScreen
$(".toggle-fullscreen").on("click", function () {
  $(this).toggleClass("full-screen");
  if ($(this).hasClass("full-screen")) {
    openFullscreen();
  } else {
    closeFullscreen();
  }

  //Toggle Settings
  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });
});

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.WebkitRequestFullScreen) {
    /* chrome, Safari and Opera */
    elem.webkitRequestFullScreen();
  } else if (elem.msRequestFullScreen) {
    /* IE/Edge */
    elem.msRequestFullScreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.WebkitExitFullScreen) {
    /* chrome, Safari and Opera */
    document.WebkitExitFullScreen();
  } else if (document.msExitFullScreen) {
    /* IE/Edge */
    document.msExitFullScreen();
  }
}
