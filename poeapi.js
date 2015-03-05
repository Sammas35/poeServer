'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');
var Promise = require('promise');

var read = Promise.denodeify(fs.readFile);
var write = Promise.denodeify(fs.writeFile);

//-----------------------------------------------------------------------------------------------------------------
//
//   Poe Server functions
//
//-----------------------------------------------------------------------------------------------------------------

var promisePoeRequest = function (sessionId, apiFunction) {
    return new Promise(function (resolve, reject) {

        var options = url.parse('http://www.pathofexile.com/' + apiFunction);
        var request;
        options.method = 'GET';

        var proxyOptions = {
            host: "172.23.110.2",
            port: 3130,
            path: options.href,
            method: 'GET',
            headers: {
                Host: options.host,
                Cookie: 'PHPSESSID=' + sessionId
            }
        };

        request = http.request(proxyOptions, function (res) {
            var result = '';

            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                result += chunk;
            });


            res.on('end', function () {
                var data = null;
                if (result) {
                    data = JSON.parse(result);
                    if (data) {
                        resolve(data);
                    } else {
                        reject({message: 'request target not found on poe server.'})
                    }
                }
                reject();

            });
        });

        request.on('error', function () {
            console.log('reading data from poe server had an error');
            reject();
        });

        request.end();
    });
};

//-----------------------------------------------------------------------------------------------------------------
//
//   File Cache Access
//
//-----------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------
//
//   API 
//
//-----------------------------------------------------------------------------------------------------------------

function handleFileLoadSuccess(message) {
    return function (data) {
        console.log(message);
        return JSON.parse(data);
    };
}


var getCharacters = function (sessionId) {
    var filename = './data/characterlist.json';

    return new Promise(function (resolve) {
        read(filename, 'utf8')
            .then(handleFileLoadSuccess('characterlist in cache -> loading from file. (' + sessionId + ')'),
            function (err, data) {
                if (err.errno === 34) {
                    console.log('characterlist not in cache -> loading from server. (' + sessionId + ')');
                }

                return promisePoeRequest(sessionId, 'character-window/get-characters')
                    .then(function (data) {
                        write(filename, JSON.stringify(data));
                        return data;
                    },
                    function (err) {
                        console.log('no data ' + err);
                    });
            })
            .then(function (data) {
                resolve(data);
            });
    });
};

var getStash = function (sessionId, stashIndex) {
    var filename = './data/stash' + stashIndex + '.json';

    return new Promise(function (resolve) {
        read(filename, 'utf8')
            .then(
            handleFileLoadSuccess('stash' + stashIndex + ' in cache -> loading from file. (' + sessionId + ')'),
            function (err) {
                if (err.errno === 34) {
                    console.log('stash' + stashIndex + ' not in cache -> loading from server. (' + sessionId + ')');
                    return promisePoeRequest(sessionId, 'character-window/get-stash-items?league=Standard&tabIndex=' + stashIndex)
                        .then(function (data) {
                            write(filename, JSON.stringify(data));
                            return data;
                        },
                        function (err) {
                            console.log(err.message);
                        });
                }
                console.log('Error from poe : ' + err);
            })
            .then(function (data) {
                resolve(data);
            });
    });
};


var getItems = function (sessionId, name) {
    var filename = './data/' + name + '.json';

    return new Promise(function (resolve) {
        read(filename, 'utf8')
            .then(
            handleFileLoadSuccess('character items for <' + name + '> in cache -> loading from file. (' + sessionId + ')'),
            function (err) {
                if (err.errno === 34) {
                    console.log('character items for <' + name + '> not in cache -> loading from server. (' + sessionId + ')');
                }

                return promisePoeRequest(sessionId, 'character-window/get-items?character=' + name)
                    .then(function (data) {
                        write(filename, JSON.stringify(data));
                        return data;
                    });
            })
            .then(function (data) {
                resolve(data);
            });
    });
};

module.exports.getCharacters = getCharacters;
module.exports.getItems = getItems;
module.exports.getStash = getStash;


