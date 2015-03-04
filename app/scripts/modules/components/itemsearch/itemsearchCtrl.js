(function () {
    'use strict';

    angular
        .module('poeServer.components.itemsearch')
        .controller('itemsearchCtrl', itemsearchCtrl);

    /* @ngInject */
    function itemsearchCtrl(poemodel, _) {
        var vm = this;

        vm.poemodel = poemodel;

        vm.search = "Fire";

        vm.searchInSockets = function (search) {
            return function (sock) {
                var regex = new RegExp(search, "i");

                if (!search) {
                    return false;
                }

                if (regex.test(sock.typeLine)) {
                    return true;
                }

                return false;
            };
        };

        vm.searchInItem = function (search) {
            return function (item) {
                var regex = new RegExp(search, "i");

                if (regex.test(item.name)) {
                    return true;
                }

                if (_.some(item.socketedItems, vm.searchInSockets(search))) {
                    return true;
                }
                return false;
            };
        };

        vm.searchInChar = function (search) {
            return function (char) {
                if (!search) {
                    return false;
                }

                if (_.some(char.items, vm.searchInItem(search))) {
                    return true;
                }
                return false;
            };
        };
    }
})();