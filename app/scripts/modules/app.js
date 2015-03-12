'use strict';

var app = angular.module('poeServer', ['ngRoute']);

app.factory('_', ['$window',
    function ($window) {
        return $window._;
    }
]);
