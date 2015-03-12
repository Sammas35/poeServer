(function () {
    'use strict';

    angular
        .module('poeServer')
        .controller('stashCtrl', stashCtrl);

    stashCtrl.$inject = ['poemodel'];

    /* @ngInject */
    function stashCtrl(poemodel) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'stashCtrl';
        vm.poemodel = poemodel;

        activate();

        ////////////////

        function activate() {
        }
    }
})();