var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(process.env.PORT || 40, function () {
  var port = server.address().port;
  console.log('Listening at port ' + port);
});