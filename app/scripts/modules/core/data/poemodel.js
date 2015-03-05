//(function () {
//    'use strict';
//
//    angular
//        .module('poeserver.core.data')
//        .factory('poemodel', poemodel);
//
//    /* @ngInject */
//    function poemodel($http) {
//        var service = {
//            'getChars': getChars
//        };
//
//        return service;
//
//        ////////////////
//        function getChars(sessionid) {
//            $http.get("/chars/" + sessionid)
//                .success(function (data, status, headers, config) {
//                    service.model = data;
//                    service.currentChar = undefined;
//                    service.searchresult = [];
//                    _.each(service.model, function (char) {
//                        char.loadStatus = "loading...";
//                        $http.get("chars/" + sessionid + "/" + char.name + '/items')
//                            .success(function (data, status, headers, config) {
//                                char.itemdata = data;
//                                char.loadStatus = 'done';
//                                service.searchresult.push({
//                                    'char': char,
//                                    'items': char.itemdata.items
//                                });
//                            });
//                    });
//                });
//        }
//    }
//})();


'use strict';

var app = angular.module('poeServer.core.data');

app.factory('poemodel', ['$http', function ($http) {
    var poemodel = {model:{}};

    poemodel.getChars = function (sessionid) {
        $http.get("/chars/" + sessionid)
            .success(function (data) {
                poemodel.model.chars = data;
                poemodel.currentChar = undefined;
                poemodel.searchresult = [];
                angular.forEach(poemodel.model.chars, function (char) {
                    char.loadStatus = "loading...";
                    $http.get("chars/" + sessionid + "/" + char.name + '/items')
                        .success(function (data) {
                            char.itemdata = data;
                            char.loadStatus = 'done';
                            poemodel.searchresult.push({
                                'char': char,
                                'items': char.itemdata.items
                            });
                        });
                });
            });
    };

    function getStash(sessionId, stashIndex) {
        $http.get("/stashs/" + sessionId + "/" + stashIndex )
            .then(function (data) {
                poemodel.model.stashs[stashIndex] = data;
                data.loadStatus = 'done';
            });
    }

    poemodel.getStashs = function (sessionId){
        $http.get("/stashs/" + sessionId + "/0" )
            .then(function (response) {
                var i;
                var firstStash = response.data;

                poemodel.model.stashs = [firstStash];

                for(i=1; i<firstStash.numTabs; i++){
                    poemodel.model.stashs.push({loadStatus:'loading'});
                    getStash(sessionId, i);
                }
            });
    };

    return poemodel;
}]);
