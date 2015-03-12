(function () {
    'use strict';

    angular
        .module('poeServer')
        .directive('poeCharDetail', poeCharDetail);

    /* @ngInject */
    function poeCharDetail() {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            restrict: 'E',
            templateUrl: 'views/poe-chardetail.html'
        };
        return directive;
    }
})();