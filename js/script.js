$(document).ready(function(){

  $(".header-nav-bottom-central .parent-dropdown > a").mouseenter(function(){
    $(this).next().addClass("visibile");
  });

  $(".header-nav-bottom-central .parent-dropdown > a").mouseleave(function(){
    $(this).next().removeClass("visibile");
  });


});
