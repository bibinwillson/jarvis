var express = require('express');
var app     = express();
var request = require('request');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  request('http://54.148.94.75:5000/containers/json?all=1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
      // do more stuff
      res.send(info);
    }
  })
});

app.get('/home', function (req, res) {
  res.send('Hello World!');
})

var server = app.listen(3000, '0.0.0.0', function() {
  console.log('Listening on port %d', server.address().port);
});