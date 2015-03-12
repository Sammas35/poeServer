(function () {
    'use strict';

    angular
        .module('poeServer')
        .controller('poeCharDetailCtrl', poeCharDetailCtrl);

    /* @ngInject */
    function poeCharDetailCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'poeCharDetailCtrl';

        activate();

        ////////////////

        function activate() {
        }
    }
})();