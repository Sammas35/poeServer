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
            scope: {
                char: '='
            },
            templateUrl: 'scripts/modules/core/directive/poe-chardetail.html'
            //,
            //controller : poeCharDetailCtrl,
            //controllerAs : vm
        };
        return directive;
    }
})();