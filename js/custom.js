/*global $, alert, console*/

//  responsive navbar
$("nav a.hidden").on("click", function () {

  $("nav ul").toggleClass('show');
});


/* start get slideIndex */
// when you first open slideshow it display slideshow 1
var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {

  showSlides(slideIndex += n); // slideIndex = slideIndex + 1
};

// Thumbnail image controls
function currentSlide(n) {

  showSlides(slideIndex = n);
}


/* end get slideIndex*/


function showSlides(n) { // n = slideIndex

  var i;
  // select elements
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // when you click next untile slideIndex increase than 3
  if (n > slides.length) {
    slideIndex = 1
  }

  // when you click prev untile slideIndex decrease than 1
  if (n < 1) {
    slideIndex = slides.length
  }



  // to hide mySlides elements
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  // to display slide
  slides[slideIndex - 1].style.display = "block";
  // autoplay slider

}


$(document).ready(function () {
    "use strict";

// start mixitup

// trigger mixitup
$("#nice").mixItUp();

// add class to button for mixitup
$(".filter").click(function () {
  $(this).addClass("selected").siblings().removeClass("selected");

});

// slider for our team

$('.slider').bxSlider({
       controls: false
   });
});
