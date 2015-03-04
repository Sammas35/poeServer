(function () {
    'use strict';

    /* @ngInject */
    function RoutesConfig($routeProvider) {
        $routeProvider
            .when('/charlist', {
                templateUrl: 'partials/charlist.html',
                controller: 'charListCtrl',
                controllerAs: 'vm'
            })
            .when('/itemsearch', {
                templateUrl: 'partials/itemsearch.html',
                controller: 'itemsearchCtrl',
                controllerAs: 'vm'
            })
            .when('/stash', {
                templateUrl: 'partials/stash.html'
            })
            .otherwise({
                redirectTo: '/charlist'
            });
    }

    angular.module('poeServer')
        .config(RoutesConfig)
})();