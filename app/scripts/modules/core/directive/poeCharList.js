angular
    .module('poeServer')
    .directive('poeCharList', function () {
    return {
        restrict: 'E',
        templateUrl: 'scripts/modules/core/directive/poe-charlist.html'
    };
});
