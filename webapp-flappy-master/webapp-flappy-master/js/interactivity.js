jQuery('#scoresbtn').on('click', function() {
  jQuery('#content').empty();
  jQuery('#content').append(
    '<p>'+'>9000'+'</p>'
  )
});

jQuery('#creditsbtn').on('click', function() {
  jQuery('#content').empty();
  jQuery('#content').append(
    '<p>'+'Made by me'+'</p>'
  )
});

jQuery('#helpbtn').on('click', function() {
  jQuery('#content').empty();
  jQuery('#content').append(
    '<p>'+'work it yourself'+'</p>'
  )
});
