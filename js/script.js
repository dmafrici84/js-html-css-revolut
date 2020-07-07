$(document).ready(function(){

  // al passaggio del cursore sul link della nav si apre il menu corrispondente
  $(".header-nav-bottom-central .parent-dropdown ").mouseenter(function(){
    $(this).children(".dropdown").addClass("visibile");
  });

  // quando esco col cursore dal link della nav si chiude il menu
  $(".header-nav-bottom-central .parent-dropdown").mouseleave(function(){
    $(this).children(".dropdown").removeClass("visibile");
  });

  // al click sull'icona hamburger compare il menu
  $(".header-nav-bottom-right .hamburger").click(
    function() {
      $(".hamburger-menu").addClass("visibile");
    }
  );

  // al click sulla X scompare il menu
  $(".hamburger-menu .chiudi").click(
    function() {
      $(".hamburger-menu").removeClass("visibile");
    }
  );

  $(".hamburger-menu-main .parent-dropdown").click(
    function() {
      console.log($(".hamburger-dropdown").hasClass("visibile"));

      if($(this).children(".hamburger-dropdown").hasClass("visibile")) {

        $(this).children(".hamburger-dropdown").removeClass("visibile");
        $(this).children(".hamburger-menu-linck").children("a").removeClass("color");
      } else {
        $(this).children(".hamburger-dropdown").addClass("visibile");
        $(this).children(".hamburger-menu-linck").children("a").addClass("color");
      }

    }
  );

});
