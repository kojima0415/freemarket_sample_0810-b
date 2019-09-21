$(function () {
  $(".side_cost").keyup(function() { 
    var val = $('#sum').val();
    if(val >= 300){
    var fee = val*0.1
    var benefit = val-fee
    $(".side_fee").text(fee);
    $(".side_benefit").text(benefit);
    }
    if(val<300){
      $(".side_fee").text("-");
      $(".side_benefit").text("-");
      }
  });
  $("#formbtn").click(function(){
    var val = $('#sum').val();
    if(val < 300){
      $(".sale__error").css('display','inline-block')
      return false;
    }
  })
});
