// file: app.js
var express = require('express');
var app = express();
var request = require('request');
var apiKey = 'fdb970a6ea0d487d98a195850182002';

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
    console.log('Your app listening at https://%s:%s', host, port);
});