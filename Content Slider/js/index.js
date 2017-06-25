$(document).ready(function(){

  var speed = 500;
  var autoSwitch = true;
  var autoSwitchSpeed = 4000; //auto-slider speed

  //Add initial active class
  $('.slide').first().addClass('active'); // add acitve class to the first div with class slide

  // Hide All slides
  $('.slide').hide();

  // Show first slide
  $('.active').show(); //hide() and show() are pre-defined functions in jquery()

  // Configuring Next Button--------------------------------------------

  $('#next').on('click',nextSlide);





  // Configuring Previous Button--------------------------------------------

  $('#prev').on('click',prevSlide);




// Configuring Auto Slider--------------------------------------------
if(autoSwitch == true){
  setInterval(nextSlide,autoSwitchSpeed);
}






function nextSlide(){

      //remove the "active" class and add "oldActive" class to the current slide
      $('.active').removeClass('active').addClass('oldActive');

      // to play the slides in a loop -> when the slider reaches the last image, you then loop back to the first one
      if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active');
      }
      else{
        $('.oldActive').next().addClass('active'); //next() is a jQuery method
      }

      //removing the 'oldActive' class altogether
      $('.oldActive').removeClass('oldActive');

      // fade-in and fade-out
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
}







function prevSlide(){
  //remove the "active" class and add "oldActive" class to the current slide
  $('.active').removeClass('active').addClass('oldActive');

  // to play the slides in a loop -> when the slider reaches the last image, you then loop back to the first one
  if($('.oldActive').is(':first-child')){
    $('.slide').last().addClass('active');
  }
  else{
    $('.oldActive').prev().addClass('active'); //prev() is a jQuery method
  }

  //removing the 'oldActive' class altogether
  $('.oldActive').removeClass('oldActive');

  // fade-in and fade-out
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}



});
