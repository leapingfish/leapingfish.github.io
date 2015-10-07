var scoreA = 0;
var scoreB = 0;

$(function(){
  
  $('form').on('change', function(){
    var a = parseInt($('input[name=playerA]:checked').val());
    var b = parseInt($('input[name=playerB]:checked').val());
    var total = a + b;
    if(total == 3) {
      $('#winner').html('Odds');
      scoreA++;
      $('#scoreA').html(scoreA);
      $('input:radio').prop('checked', false);
    } else if (total == 2 || total == 4) {
      $('#winner').html('Evens');
      scoreB++;
      $('#scoreB').html(scoreB);
      $('input:radio').prop('checked', false);
    } else {
      $('#winner').html('');
    }
  });
  
});