(function () {
    'use strict';

    angular
        .module('poeServer')
        .factory('poeMod', poeMod);

    /* @ngInject */
    function poeMod() {
        var service = {
            toPattern: toPattern,
            collectPatterns: collectPatterns
        };

        return service;

        ////////////////

        function toPattern(input) {
            var result;
            if (!input) {
                return '';
            }

            result = input.replace(/\d+/g, 'X');

            return result;
        }

        function collectPatterns(itemList) {
            var mods = [];
            if (!itemList) {
                return [];
            }

            if (!angular.isArray(itemList)) {
                return [];
            }

            _.forEach(itemList, function (item) {
                _.forEach(item.explicitMods, function (mod) {
                    mods.push(toPattern(mod));
                })
                _.forEach(item.implicitMods, function (mod) {
                    mods.push(toPattern(mod));
                })
                _.forEach(item.craftedMods, function (mod) {
                    mods.push(toPattern(mod));
                })
            });

            return _.unique( mods);
        }
    }
})
();