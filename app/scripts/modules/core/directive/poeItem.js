(function () {
    'use strict';

    angular
        .module('poeServer')
        .directive('poeItem', poeItem);

    /* @ngInject */
    function poeItem($window)
    {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            scope: {
                poeItem: '='
            },
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attributes) {

            var className = 'standard';
            if(scope.poeItem === 0){
                className = 'standard';
            }else if(scope.poeItem === 1){
                className = 'magic';
            }else if(scope.poeItem === 2){
                className = 'rare';
            }else if(scope.poeItem === 3){
                className = 'unique';
            }else if(scope.poeItem === 4){
                className = 'gem';
            }else if(scope.poeItem === 5){
                className = 'currency';
            }else if(scope.poeItem === 6){
                className = 'quest';
            }

            element.addClass(className);
        }
    }
})();