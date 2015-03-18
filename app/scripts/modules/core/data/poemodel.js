(function () {
    'use strict';

    angular.module('poeServer')
        .factory('poemodel', ['$http', function ($http) {
            var poemodel = {model: {}};

            poemodel.getChars = getChars;
            poemodel.getStashs = getStashs;
            poemodel.setCurrentChar = setCurrentChar;
            poemodel.currentChar = undefined;
            poemodel.currentStash = undefined;
            poemodel.setCurrentStash = setCurrentStash;

            function setCurrentStash(stashname) {
                var stash = _.find(poemodel.model.stashs, function (stash) {
                    return stash.items[0] && stash.items[0].inventoryId == stashname;
                });

                poemodel.currentStash = stash;
            }

            function setCurrentChar(charname) {
                var char = _.find(poemodel.model.chars, function(char){
                    return char.name === charname;
                });

                poemodel.currentChar = char;
            }

            function getChars(sessionid) {
                $http.get("/chars/" + sessionid)
                    .success(function (data) {
                        poemodel.model.chars = data;
                        poemodel.currentChar = undefined;
                        angular.forEach(poemodel.model.chars, function (char) {
                            char.loadStatus = "loading...";
                            $http.get("chars/" + sessionid + "/" + char.name + '/items')
                                .success(function (data) {
                                    char.items = _.map(data.items, function (item) {
                                        var newItem;

                                        newItem = new Item(item);

                                        newItem.socketedItems = _.map(newItem.socketedItems, function(gem){
                                            return new Item(gem);
                                        });

                                        return newItem;
                                    });
                                    char.loadStatus = 'done';
                                });
                        });
                    });
            }

            function getStash(sessionId, stashIndex) {
                $http.get("/stashs/" + sessionId + "/" + stashIndex)
                    .then(function (data) {
                        poemodel.model.stashs[stashIndex] = data.data;
                        poemodel.model.stashs[stashIndex].loadStatus = 'done';
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
            }

            return poemodel;
        }]);
})();