$(function(){
  var spinners = ['|','/','-','\\','|','/','-','\\'];
  var laser = '-';
  var counter = 0;
  var spinDuration = 10;
  var loading = "Loading...";
  var loadingPct = 0;

  $('.loading-container').css('margin-top',(window.innerHeight)/2 - 30);

  var timeoutIDL = window.setInterval(function(){
    if(counter <= spinDuration){
      $('.spin-it-L').text(spinners[counter % spinners.length]);
    } else if(counter <= spinDuration + loading.length){
      $('.spin-it-L').text('');
      $('.laser').text(laser);
      $('.loading').text(loading.substring(0,counter-spinDuration));

    } else {
      $('.laser').text(loadingPct + '%');
      $('.spin-it-R').text(spinners[counter % spinners.length]);
      if(loadingPct >= 100){
        window.clearInterval(timeoutIDL);
        $('.spin-it-R').text('');
      } else {
        loadingPct += 5;
      }
    }
    counter++;
  },50);
});