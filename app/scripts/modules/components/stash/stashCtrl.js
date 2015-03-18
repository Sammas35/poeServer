(function () {
    'use strict';

    angular
        .module('poeServer')
        .controller('stashCtrl', stashCtrl);

    /* @ngInject */
    function stashCtrl(poemodel, $routeParams) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'stashCtrl';
        vm.poemodel = poemodel;

        if($routeParams.stashname){
            vm.poemodel.setCurrentStash($routeParams.stashname);
        }

        activate();

        ////////////////

        function activate() {
        }
    }
})();