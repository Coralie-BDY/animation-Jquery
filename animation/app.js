$(function(){
  $("button").click(function(){
    
      
    $("div").animate({
        left: "250px",
        height: "+=150px",
        width: "+=150px",
        fontSize: "+=50px"
    });
      
        
      $("div").animate({
        left: "250px",
        height: "-=150px",
        width: "-=150px",
        fontSize: "-=50px"
    });
      
      $("div").animate({  borderSpacing: -1800},
       {step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+now+'deg)'); 
        },},);
      
       $("div").animate({
         left: '10px',
        fontSize: "+=50px"
      });
    });
  });





