/*There is still a serious work to be done on this code esecially with the reset button, it is supposed to reset the timer but all effort to do that was proving abortive, so i decided to reset the page insted. LOL. any help will be wiell appreciated. */


$(document).ready(function(){
  var sessionCounter = parseInt($('#sessionDisplay').html());
  var breakCounter = parseInt($('#breakDisplay').html());
  var counter = 0;
  
    
  //Call action when the start button is clicked
  
  $('#startSession').click(function(){
      function timer(){
    counter++;
    $('#mainOutput').html(converSeconds(sessionCounter*60-counter));
  }
    setInterval(timer, 1000);
    if (sessionCounter===0){
      clearInterval(timer);
    }
    $('#mainOutput').show();
    $('#timeType').html("SESSION TIMER");
     $('#startSession, #startBreak, #sessionDiv, #breakDiv').hide();
  });
  
  //call action for the break button
   $('#startBreak').click(function(){
      function timer(){
    counter++;
    $('#breakOutput').html(converSeconds(breakCounter*60-counter));
  }
    setInterval(timer, 1000);
    if (breakCounter===0){
      clearInterval(timer);
    }
    $('#breakOutput').show();
     $('#mainOutput').hide();
     $('#timeType').html("BREAK TIMER");
     $('#startSession, #startBreak, #sessionDiv, #breakDiv').hide();
  });
  
  
  
  //action for reset button
  $('#reset').click(function(){
    /*sessionCounter = 25;
    breakCounter =5;
    counter = 0;
    $('#sessionDisplay').html(sessionCounter);
    $('#breakDisplay').html(breakCounter);
    $('#mainOutput, #breakOutput').hide();
    
    $('#timeType').html("TIMER");
    $('#startSession, #startBreak, #sessionDiv, #breakDiv').show();
    */
    location.reload(true);
  });
    
    //session time settings
  //add button
    $('#sessionPlus').click(function(){
            sessionCounter++;
        $('#sessionDisplay').html(sessionCounter);
    });
  //session minus button
     $('#sessionMinus').click(function(){
            if (sessionCounter > 25 ){
              sessionCounter--;
        $('#sessionDisplay').html(sessionCounter);
            }
    });
  
   //Break time settings
  //add button
    $('#breakPlus').click(function(){
            if (breakCounter < sessionCounter - 5){
              breakCounter++;
            $('#breakDisplay').html(breakCounter);
            }
    });
  //Break minus button
     $('#breakMinus').click(function(){
            if (breakCounter > 5 ){
              breakCounter -=1;
        $('#breakDisplay').html(breakCounter);
            }
    });
  
  //function to display time and minutes
  function converSeconds(S){
    var mins = Math.floor(S/60);
    var sec = S % 60 ;
    if (sec < 10){
      return mins +':'+'0'+sec;
    }else{
    return mins +':'+sec;
    }
  }
  
  //Timer Function
  

    
});