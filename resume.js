$(() => {

  $('.dropdown').click(function() {
    $(this).next('ul.child').slideToggle('slow');
  });

});