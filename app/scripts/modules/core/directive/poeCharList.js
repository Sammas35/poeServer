angular
    .module('poeServer')
    .directive('poeCharList', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/poe-charlist.html'
    };
});
