$(document).ready(function () {

  var url = 'https://magicseaweed.com/api/';
  var apiKey = '466688abbaf73cd10126b262f6fab3a6';
  var spot = '/forecast/?spot_id=466';
  var units = "&units=us";

  var urlConstructed = url + apiKey + spot + units;
  console.log(urlConstructed);
  
  // Get info from API call
  $.getJSON(urlConstructed, function(data) {
    console.log(data);
    $('.data').append(data);
  });
});

