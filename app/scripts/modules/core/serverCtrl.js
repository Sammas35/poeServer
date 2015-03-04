(function () {
    'use strict';

    angular
        .module('poeServer.core')
        .controller('serverCtrl', serverCtrl);

    /* @ngInject */
    function serverCtrl(poemodel) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'serverCtrl';
        vm.sessionid = 'aa8b5052865cd63c9d5be692b3ff6d36';
        vm.getChars = getChars;

        activate();

        ////////////////

        function activate() {
        }


        function getChars() {
            console.log('serverCtrl.getChars');
            poemodel.getChars(vm.sessionid);
        }
    }
})();
