$(document).ready(function(){

  $(".header-nav-bottom-central .parent-dropdown ").mouseenter(function(){
    $(this).children(".dropdown").addClass("visibile");
  });

  $(".header-nav-bottom-central .parent-dropdown").mouseleave(function(){
    $(this).children(".dropdown").removeClass("visibile");
  });

});
