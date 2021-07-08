// init Isotope start
var $grid = $('.final_div').isotope({
    // options
  });
  // filter items on button click
  $('.isoto').on( 'click', 'a ', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//heart
// $(document).on('click', ".heart", function() {
//   var count = $(this).next('span');

//   $(this).toggleClass('notliked liked');

//   if ($(this).hasClass('liked')) {
//     count.text(Number(count.text()) + 1);
//   } else {
//     count.text(Number(count.text()) - 1);
//   }
// });




