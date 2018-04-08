var express = require('express');

var send = require('./route/send');
var app = express();

app.use('/send', send);

module.exports = app;