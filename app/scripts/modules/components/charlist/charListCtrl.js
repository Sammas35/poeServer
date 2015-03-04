(function(){
    'use strict';

    angular
        .module('poeServer.components.charlist')
        .controller('charListCtrl', charListCtrl);

    /* @ngInject */
    function charListCtrl(poemodel, _) {
        var vm = this;
        
        vm.poemodel = poemodel;

        vm.getQuality = function (item) {
            var quality = findPropertyValue(item.properties, 'Quality');

            if (quality) {
                return quality;
            }

            return '';
        };

        vm.noInventory = function (item) {
            return item.inventoryId !== 'MainInventory';

        };

        vm.noFlask = function (item) {
            return item.inventoryId !== 'Flask';
        };

        vm.searchresult = [];

        var findPropertyValue = function (properties, name) {
            var property;

            _.forEach(properties, function (value, key) {
                if(value.name === name){
                    property = value;
                }
            } );

            if (property) {
                return property.values[0][0];
            }

            return undefined;
        };

        vm.getDefences = function (item) {
            var result = [];
            var energyShield = findPropertyValue(item.properties, 'Energy Shield');
            var evasionRating = findPropertyValue(item.properties, 'Evasion Rating');
            var armour = findPropertyValue(item.properties, 'Armour');

            if (energyShield) {
                result.push('Energy Shield ' + energyShield);
            }
            if (evasionRating) {
                result.push('Evasion Rating ' + evasionRating);
            }
            if (armour) {
                result.push('Armour ' + armour);
            }

            return result;
        };

        vm.getRequirements = function (item) {
            var result = [];

            angular.forEach(item.requirements, function (n) {
                result.push(n.name + ' ' + n.values[0][0]);
            });


            return result;
        };


        vm.getImplicit = function (item) {
            return item.implicitMods || [];
        };

        vm.getExplicit = function (item) {
            return item.explicitMods || [];
        };

        vm.getCorrupted = function (item) {
            return item.corrupted ? 'Corrupted' : '';
        };
    }
})();
