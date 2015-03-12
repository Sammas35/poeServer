angular
    .module('poeServer')
    .filter('join', function () {
    return function (input) {
        return input.join(', ');
    }
});
