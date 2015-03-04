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
    var poemodel = {};

    poemodel.getChars = function (sessionid) {
        $http.get("/chars/" + sessionid)
            .success(function (data, status, headers, config) {
                poemodel.model = data;
                poemodel.currentChar = undefined;
                poemodel.searchresult = [];
                angular.forEach(poemodel.model, function (char) {
                    char.loadStatus = "loading...";
                    $http.get("chars/" + sessionid + "/" + char.name + '/items')
                        .success(function (data, status, headers, config) {
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

    poemodel.getStacks = function (sessionId){
        //$http.get("/items/" + sessionId + "/" +)
    };

    return poemodel;
}]);
