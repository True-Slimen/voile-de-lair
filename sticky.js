
    // Active la fonction lorsque l'utilisateur scroll
window.onscroll = function() {myFunction()};

// Selectionne la nav
var navbar = document.getElementById("navbar_fixed");

// Definis la variable sticky par rapport à la position de la nav en haut de la page.
var sticky = navbar.offsetTop;

// Ajoute la class sticky et shadow à la nav lorsque l'on atteint la position en scrollant. Les retire lorsque la nav quitte le sommet de la page.
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("shadow");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("shadow");
  }
}

