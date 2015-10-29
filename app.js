var express = require('express');
var http = require('http');
var path = require('path');
var exec = require('child_process').exec;
var util = require('util');
var slackTest = require('./helpers/slack');
var _ = require('underscore');

/* SETUP EXPRESS */
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// Points to static directory
app.use("/pushups", express.static(path.join(__dirname, '/app/pushups')));

/* ROUTES */
// Redirects to index.html, seems to be required for heroku
// app.get('/pushups', function(req, res) {
//   // res.type('text/html');
//   // res.send(req.query.text);
  
//   return res.redirect('index.html');
// });

app.get('/pushups', slackTest.postSlack);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});