(function () {
    'use strict';

    angular
        .module('poeServer')
        .controller('serverCtrl', serverCtrl);

    /* @ngInject */
    function serverCtrl(poemodel) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'serverCtrl';
        vm.sessionid = 'f4a5c9c3b524a0aacd4b4d96ed9ea4cd';
        vm.loadData = loadData;

        activate();

        ////////////////

        function activate() {
        }


        function loadData() {
            poemodel.getChars(vm.sessionid);
            poemodel.getStashs(vm.sessionid);
        }
    }
})();
