'use strict';

var app = angular.module('poeServer', ['ngRoute', 'poeServer.components', 'poeServer.core']);

app.factory('_', ['$window',
    function($window) {
        return $window._;
    }
]);

app.filter('join', function () {
    return function (input) {
        return input.join(', ');
    }
});

app.directive('poeCharList', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/poe-charlist.html'
    };
});
app.directive('poeCharDetail', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/poe-chardetail.html'
    };
});
/*
app.controller('mainCtrl', ['$scope', '$http', '_', function ($scope, $http, _) {
    $scope.sessionid = 'a';

    $scope.searchInSockets = function (search) {
        return function (sock) {
            var regex = new RegExp(search, "i");

            if (!search) {
                return false;
            }

            if (regex.test(sock.typeLine)) {
                return true;
            }

            return false;
        };
    };

    $scope.searchInItem = function (search) {
        return function (item) {
            var regex = new RegExp(search, "i");

            if (regex.test(item.name)) {
                return true;
            }

            if (_.some(item.socketedItems, $scope.searchInSockets(search))) {
                return true;
            }
            return false;
        };
    };

    $scope.searchInChar = function (search) {
        return function (char) {
            if (!search) {
                return false;
            }

            if (_.some(char.items, $scope.searchInItem(search))) {
                return true;
            }
            return false;
        };
    };

    $scope.getChars = function () {
        $http.get("/chars/" + $scope.sessionid)
            .success(function (data, status, headers, config) {
                $scope.model = data;
                $scope.searchresult = [];
                _.each($scope.model, function (char) {
                    char.loadStatus = "loading...";
                    $http.get("chars/" + $scope.sessionid + "/" + char.name + '/items')
                        .success(function (data, status, headers, config) {
                            char.itemdata = data;
                            char.loadStatus = 'done';
                            $scope.searchresult.push({
                                'char': char,
                                'items': char.itemdata.items
                            });
                        });
                });
            });
    };

}]);
*/
