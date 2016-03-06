//business logic

//interface
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-main-menu').removeClass("show");
  // $('#js-category-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-main-menu').slideToggle(function(){
      if($('#js-main-menu').is(':hidden')) {
        $('#js-main-menu').removeAttr('style');
      }
      // $('#js-category-menu').slideToggle(function(){
      //   if($('#js-category-menu').is(':hidden')) {
      //     $('#js-category-menu').removeAttr('style');
      //   }
    });
  });
});
