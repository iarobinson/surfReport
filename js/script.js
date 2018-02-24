$(document).ready(function () {

  var url = 'https://magicseaweed.com/api/';
  var apiKey = '466688abbaf73cd10126b262f6fab3a6';
  var spot = '/forecast/?spot_id=466';
  var units = "&units=us";

  var urlConstructed = url + apiKey + spot + units;
  console.log(urlConstructed);
  
  // Get info from API call
  // $.getJSON(urlConstructed, function(data) {
  //   console.log(data);
  //   $('.data').append(data);
  // });
  
  //Get info from API call
  var xhr = createCORSRequest('GET', urlConstructed);
  console.log(xhr);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
});


// Thank you to https://www.html5rocks.com/en/tutorials/cors/ Monsur Hossain for this
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}