(function () {
    'use strict';

    angular
        .module('poeServer.components.stash')
        .controller('stashCtrl', stashCtrl);

    stashCtrl.$inject = ['poemodel'];

    /* @ngInject */
    function stashCtrl(poemodel) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'stashCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();