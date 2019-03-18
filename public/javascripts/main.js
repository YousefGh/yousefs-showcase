$(document).ready(function() {
     $('.img_container').mouseenter(function(){ 
          $(this).find(".title").fadeOut(250);
     });

     $('.img_container').mouseleave(function(){ 
          $(this).find(".title").fadeIn(250);
     });

     $('.img_container').mouseenter(function() {
          $(this).find(".overlay").fadeIn(250);
          $(this).find('.overlay').css('display', 'table');
     });

     $('.img_container').mouseleave(function() {
          $(this).find(".overlay").fadeOut(250);
     });
});