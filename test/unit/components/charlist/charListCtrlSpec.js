'use strict';

describe('charListCtrl', function () {
    var ctrl;

    beforeEach(module('poeServer.components.charlist'));
    beforeEach(module('poeServer.core.data'));
    beforeEach(inject(function ($controller, $window) {
        var _ = $window._;
        ctrl = $controller('charListCtrl', {'_': _});
    }));

    describe('getQuality', function () {
        var item;

        beforeEach(function () {
            item = {
                "name": "The Searing Touch",
                "typeLine": "Long Staff",
                "properties": [{
                    "name": "Quality",
                    "values": [
                        ["+20%", 1]
                    ],
                    "displayMode": 0
                }, {
                    "name": "Evasion Rating",
                    "values": [
                        ["488", 1]
                    ],
                    "displayMode": 0
                }, {
                    "name": "Energy Shield",
                    "values": [
                        ["143", 1]
                    ],
                    "displayMode": 0
                }]
            };
        });

        it('should exist and be a function', function () {
            expect(ctrl.getQuality).toBeDefined();
            expect(angular.isFunction(ctrl.getQuality)).toBe(true);
        });


        it('should give 20%', function () {
            expect(ctrl.getQuality(item)).toBe('+20%');
        });

        it('should give empty string for no quality', function () {
            item.properties.shift();
            expect(ctrl.getQuality(item)).toBe('');
        });

        it('should give empty string for no properties', function () {
            item.properties = undefined;
            expect(ctrl.getQuality(item)).toBe('');
        });
    });

    describe('getDefences', function () {
        var item;

        beforeEach(function () {
            item = {
                "name": "The Searing Touch",
                "typeLine": "Long Staff",
                "properties": [{
                    "name": "Quality",
                    "values": [
                        ["+20%", 1]
                    ],
                    "displayMode": 0
                }, {
                    "name": "Evasion Rating",
                    "values": [
                        ["488", 1]
                    ],
                    "displayMode": 0
                }, {
                    "name": "Energy Shield",
                    "values": [
                        ["143", 1]
                    ],
                    "displayMode": 0
                }]
            };
        });

        it("should exist and be a funtcion", function () {
            expect(ctrl.getDefences).toBeDefined();
            expect(angular.isFunction(ctrl.getDefences)).toBe(true);
        });

        it("should deliver an empty array when no defences exist", function () {
            var result;
            item.properties.pop();
            item.properties.pop();

            result = ctrl.getDefences(item);

            expect(result).toBeDefined();
            expect(result.length).toBe(0);
        });

        it("should find energy shield and evasion when in properties", function () {
            var result;

            result = ctrl.getDefences(item);

            expect(result).toBeDefined();
            expect(result.length).toBe(2);
        });


        it("should find armour when in properties", function () {
            var result;

            item.properties.pop();
            item.properties.pop();
            item.properties.push({
                "name": "Armour",
                "values": [
                    ["143", 1]
                ],
                "displayMode": 0
            });

            result = ctrl.getDefences(item);

            expect(result).toBeDefined();
            expect(result.length).toBe(1);
        });
    });

    describe("getRequirements", function () {
        var item;

        beforeEach(function () {
            item = {
                "name": "The Searing Touch",
                "typeLine": "Long Staff",
                "requirements": [{
                    "name": "Level",
                    "values": [
                        ["66", 0]
                    ],
                    "displayMode": 0
                }, {
                    "name": "Str",
                    "values": [
                        ["64", 0]
                    ],
                    "displayMode": 1
                }, {
                    "name": "Dex",
                    "values": [
                        ["76", 0]
                    ],
                    "displayMode": 1
                }, {
                    "name": "Int",
                    "values": [
                        ["142", 0]
                    ],
                    "displayMode": 1
                }]
            };
        });

        it("should exist and be a function", function () {
            expect(ctrl.getRequirements).toBeDefined();
            expect(angular.isFunction(ctrl.getRequirements)).toBe(true);
        });

        it("should give an empty array if there are no requirements", function () {
            var result;

            item.requirements = [];

            result = ctrl.getRequirements(item);

            expect(result).toBeDefined();
            expect(result.length).toBe(0);
        });

        it("should find all 4 requirements", function () {
            var result;

            result = ctrl.getRequirements(item);

            expect(result).toBeDefined();
            expect(result.length).toBe(4);
        });
    });

    describe("getCorrupted", function () {
        it("should exist and be a function", function () {
            expect(ctrl.getCorrupted).toBeDefined();
            expect(angular.isFunction(ctrl.getCorrupted)).toBe(true);
        });

        it("should give 'Corrupted' if corrupted", function () {
            var corrupted;
            var item = {corrupted: true};

            corrupted = ctrl.getCorrupted(item);
            expect(corrupted).toBe('Corrupted');
        });
    });
});
