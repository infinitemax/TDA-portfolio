/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* Back to top button */

// Get the button:
let toTopBtn = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopBtn.style.opacity = 1;
    toTopBtn.disables = "false"
  } else {
    toTopBtn.style.opacity = 0;
    toTopBtn.disables = "true"
  }
}

function backToTop() {
  window.scrollTo({top: 0, behavior: "smooth"})
}