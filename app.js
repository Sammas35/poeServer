var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var _ = require('lodash');

var poeapi = require('./poeapi.js');

var server;
var port = 3000;
var app = express();
var io;

app.use(bodyParser.urlencoded({
    extended: false
}));


app.set('port', 3000);


var characters;

var sessions = {};

app.get('/chars/:sessionId', function(req, res) {
    var sessionId = req.params.sessionId;

    poeapi.getCharacters(sessionId)
        .then(function(data){
            res.send(data);
        });
});

app.get('/chars/:sessionId/:name', function(req, res) {
    var sessionId = req.params.sessionId;
    var name = req.params.name;
    var result;

    result = _.find(sessions[sessionId], {
        'name': name
    });

    res.send(result);
});

app.get('/chars/:sessionId/:name/items/', function(req, res) {
    var sessionId = req.params.sessionId;
    var name = req.params.name;
    
    poeapi.getItems(sessionId, name)
        .then(function(data){
            res.send(data);
        });
});

app.get('/stash/:sessionId/:stashIndex/', function(req, res) {
    var sessionId = req.params.sessionId;
    var stashIndex = req.params.stashIndex;

    console.log('Stash request for Stash/Session: ' + stashIndex + '/' + sessionId );

    poeapi.getStash(sessionId, stashIndex)
        .then(function(data){
            res.send(data);
        });
});

app.post('/users', function(req, res) {
    res.send(req.body);
});

app.use(express.static(__dirname + '/app'));

server = http.createServer(app);

server.listen(port);

console.log("Server running on port " + port);
