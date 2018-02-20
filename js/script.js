$(document).ready(function () {
    
  var data = $.get(
    'https://api.worldweatheronline.com/premium/v1/marine.ashx', 
    key: 'fdb970a6ea0d487d98a195850182002',
    q: location,
  )
  
  console.log(data);
  $('.data').text(data);
});
