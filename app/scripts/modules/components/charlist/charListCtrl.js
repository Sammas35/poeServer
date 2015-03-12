(function(){
    'use strict';

    angular
        .module('poeServer')
        .controller('charListCtrl', charListCtrl);

    /* @ngInject */
    function charListCtrl(poemodel, _, $routeParams) {
        var vm = this;
        
        vm.poemodel = poemodel;
        vm.noInventory = noInventory;
        vm.noFlask = noFlask;
        vm.searchresult = [];

        if($routeParams.charname){
            vm.poemodel.setCurrentChar($routeParams.charname);
        }


        function noInventory(item) {
            return item.inventoryId !== 'MainInventory';

        }

        function noFlask(item) {
            return item.inventoryId !== 'Flask';
        }
    }
})();
