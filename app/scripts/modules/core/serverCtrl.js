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
        vm.sessionid = '191d72d590740ff0cba23e86e6d87ffb';
        vm.loadData = loadData;

        activate();

        ////////////////

        function activate() {
        }


        function loadData() {
            console.log('serverCtrl.getChars');
            poemodel.getChars(vm.sessionid);
            console.log('serverCtrl.getStashs');
            poemodel.getStashs(vm.sessionid);
        }
    }
})();
