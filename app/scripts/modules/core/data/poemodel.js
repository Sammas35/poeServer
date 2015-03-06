(function () {
    'use strict';

    angular.module('poeServer.core.data')
        .factory('poemodel', ['$http', function ($http) {
        var poemodel = {model: {}};

        poemodel.getChars = getChars;
        poemodel.getStashs = getStashs;

        function getChars(sessionid) {
            $http.get("/chars/" + sessionid)
                .success(function (data) {
                    poemodel.model.chars = data;
                    poemodel.currentChar = undefined;
                    angular.forEach(poemodel.model.chars, function (char) {
                        char.loadStatus = "loading...";
                        $http.get("chars/" + sessionid + "/" + char.name + '/items')
                            .success(function (data) {
                                char.items = data.items;
                                char.loadStatus = 'done';
                            });
                    });
                });
        };

        function getStash(sessionId, stashIndex) {
            $http.get("/stashs/" + sessionId + "/" + stashIndex)
                .then(function (data) {
                    poemodel.model.stashs[stashIndex] = data;
                    data.loadStatus = 'done';
                });
        }

        function getStashs(sessionId) {
            $http.get("/stashs/" + sessionId + "/0")
                .then(function (response) {
                    var i;
                    var firstStash = response.data;

                    poemodel.model.stashs = [firstStash];

                    for (i = 1; i < firstStash.numTabs; i++) {
                        poemodel.model.stashs.push({loadStatus: 'loading'});
                        getStash(sessionId, i);
                    }
                });
        };

        return poemodel;
    }]);
})();