(function () {
    'use strict';

    angular
        .module('poeServer')
        .controller('itemsearchCtrl', itemsearchCtrl);

    /* @ngInject */
    function itemsearchCtrl(poemodel, _) {
        var vm = this;

        vm.poemodel = poemodel;

        vm.name = '';
        vm.sockmin = undefined;
        vm.sockmax = undefined;

        vm.search = search;
        vm.searchInSockets = searchInSockets;
        vm.searchInItem = searchInItem;
        vm.searchInChar = searchInChar;
        vm.byName = byName;

        vm.result = [];

        function searchInSockets(search) {
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
        }

        function searchInItem(search) {
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
        }

        function searchInChar(search) {
            return function (char) {
                if (!search) {
                    return false;
                }

                if (_.some(char.items, vm.searchInItem(search))) {
                    return true;
                }
                return false;
            };
        }

        function byName(search) {
            return function (item) {
                var regex = new RegExp(search, "i");
                if (!search) {
                    return true;
                }

                if (regex.test(item.getName())) {
                    return true;
                }
                return false;
            };
        }

        function search() {
            vm.result = getItemList();
            //vm.result = _.chain(getItemList())
            //    .filter(byName(vm.name))
            //    .value();
        }


        function getItemList() {
            var result = [];
            _.forEach(vm.poemodel.model.chars, function (char) {
                    _.forEach(char.items, function (item) {
                        result.push(new Item(item, char.name));
                        _.forEach(item.socketedItems, function (gem) {
                            result.push(new Item(gem, char.name, item.name));
                        });
                    });
                }
            );

            _.forEach(vm.poemodel.model.stashs, function (stash) {
                _.forEach(stash.items, function (item) {
                    result.push(new Item(item, item.inventoryId))
                })
            })

            return result;
        }
    }
})();