$(() => {

  $('.dropdown').click(function() {
    $(this).next('ul.child').slideToggle('slow');
  });

  $('#project1').mouseover(function() {
    $(this).css({'background-image': 'url(images/project1.png)', 'background-position': 'bottom'});
  }).mouseout(function() {
    $(this).css({'background-image': 'none'});
  })

  $('#project2').mouseover(function() {
    $(this).css({'background-image': 'url(images/project2.png)'});
  }).mouseout(function() {
    $(this).css({'background-image': 'none'});
  })

  $('#project3').mouseover(function() {
    $(this).css({'background-image': 'url(images/project3.png)'});
  }).mouseout(function() {
    $(this).css({'background-image': 'none'});
  })

  $('.body').click(function () {
    $(this).css({'background-color': '#2F4F4F', 'color': 'white'});
  })

});