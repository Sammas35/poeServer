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
            .when('/charlist/:charname', {
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
                templateUrl: 'partials/stash.html',
                controller: 'stashCtrl',
                controllerAs: 'vm'
            })
            .when('/stash/:stashname', {
                templateUrl: 'partials/stash.html',
                controller: 'stashCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/charlist'
            });
    }

    angular.module('poeServer')
        .config(RoutesConfig)
})();