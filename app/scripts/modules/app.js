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
