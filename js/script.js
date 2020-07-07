$(document).ready(function(){

    // Quando l'utente scorre la pagina, esegue la funzione scroola
  window.onscroll = function() {scrolla()};

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
      $("body").addClass("noScrollbar");
    }
  );

  // al click sulla X scompare il menu
  $(".hamburger-menu .chiudi").click(
    function() {
      $(".hamburger-menu").removeClass("visibile");
      $("body").removeClass("noScrollbar");
    }
  );

  // al click sui tag li del menu hamburger
  $(".hamburger-menu-main .parent-dropdown").click(
    function() {

      var hamburgerDropdown = $(this).children(".hamburger-dropdown");

      var cambiaColore = $(this).children(".hamburger-menu-linck").children("a");

      if(hamburgerDropdown.hasClass("visibile")) {

        hamburgerDropdown.removeClass("visibile");
        cambiaColore.removeClass("color");

      } else {

        hamburgerDropdown.addClass("visibile");
        cambiaColore.addClass("color");

      }

    });



});

// funzioni

  // funzione scrolla

    // Ottieni la barra di navigazione
    var navbar = document.getElementById("header-nav-bottom");

    // Ottieni la posizione di offset della barra di navigazione
    var sticky = navbar.offsetTop;

    // Aggiungi la classe sticky alla barra di navigazione quando raggiungi la sua posizione di scorrimento. Rimuovere sticky quando si lascia la posizione di scorrimento
    function scrolla() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
