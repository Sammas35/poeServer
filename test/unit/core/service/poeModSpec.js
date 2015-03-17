'use strict';

describe('poeMod', function () {
    var poeMod;
    beforeEach(module('poeServer'));
    beforeEach(inject(function (_poeMod_) {
        poeMod = _poeMod_;
    }));

    it("should be injectible", function () {
        expect(poeMod).toBeDefined();
    });

    describe("toPattern", function () {
        it("should be a function", function () {
            expect(poeMod.toPattern).toBeDefined();
            expect(angular.isFunction(poeMod.toPattern)).toBe(true);
        });
        it("should return an empty string for an empty string", function () {
            expect(poeMod.toPattern('')).toBe('');
        });
        it("should return an empty string for undefined or null", function () {
            expect(poeMod.toPattern(undefined)).toBe('');
            expect(poeMod.toPattern(null)).toBe('');
        });
        it("should replace a number with 'X'", function () {
            var result;

            result = poeMod.toPattern('123');

            expect(result).toBe('X');
        });
        it("should replace a number in text with 'X'", function () {
            var result;

            result = poeMod.toPattern('Hansi 123 Joe');

            expect(result).toBe('Hansi X Joe');
        });
        it("should replace every number in text with 'X'", function () {
            var result;

            result = poeMod.toPattern('Hansi 123 Joe 3847 Bill 2');

            expect(result).toBe('Hansi X Joe X Bill X');
        });
    });

    describe("collectPatterns", function () {
        it("should be a function", function () {
            expect(poeMod.collectPatterns).toBeDefined();
            expect(angular.isFunction(poeMod.collectPatterns)).toBe(true);
        });

        it("should return an empty array for undefined or null or number or string or function", function () {
            var result;

            result = poeMod.collectPatterns(undefined);
            expect(angular.isArray(result)).toBe(true);

            result = poeMod.collectPatterns(null);
            expect(angular.isArray(result)).toBe(true);

            result = poeMod.collectPatterns(3);
            expect(angular.isArray(result)).toBe(true);

            result = poeMod.collectPatterns('3');
            expect(angular.isArray(result)).toBe(true);

            result = poeMod.collectPatterns(function () {
            });
            expect(angular.isArray(result)).toBe(true);
        });

        it("should return one pattern for one explicit mod in one item", function () {
            var result;
            var input = [{
                "explicitMods": [
                    "119% increased Evasion and Energy Shield"]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(1);
            expect(result[0]).toBe("X% increased Evasion and Energy Shield");
        });
        it("should return one pattern for each explicit mod in one item", function () {
            var result;
            var input = [{
                "explicitMods": [
                    "119% increased Evasion and Energy Shield",
                    "+95 to maximum Mana",
                    "49% increased Mana Regeneration Rate",
                    "When Hit, 10% of Damage is taken from Mana before Life",
                    "Mind Over Matter"
                ]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(5);
            expect(result[0]).toBe("X% increased Evasion and Energy Shield");
            expect(result[1]).toBe("+X to maximum Mana");
            expect(result[2]).toBe("X% increased Mana Regeneration Rate");
            expect(result[3]).toBe("When Hit, X% of Damage is taken from Mana before Life");
            expect(result[4]).toBe("Mind Over Matter");
        });
        it("should return one pattern for one implicit mod in one item", function () {
            var result;
            var input = [{
                "implicitMods": ["+25 to maximum Mana"]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(1);
            expect(result[0]).toBe("+X to maximum Mana");
        });
        it("should return one pattern for each explicit and each implicit mod in one item", function () {
            var result;
            var input = [{
                "implicitMods": ["+25 to maximum Health"],
                "explicitMods": [
                    "119% increased Evasion and Energy Shield",
                    "+95 to maximum Mana",
                    "49% increased Mana Regeneration Rate",
                    "When Hit, 10% of Damage is taken from Mana before Life",
                    "Mind Over Matter"
                ]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(6);
            expect(result[0]).toBe("X% increased Evasion and Energy Shield");
            expect(result[1]).toBe("+X to maximum Mana");
            expect(result[2]).toBe("X% increased Mana Regeneration Rate");
            expect(result[3]).toBe("When Hit, X% of Damage is taken from Mana before Life");
            expect(result[4]).toBe("Mind Over Matter");
            expect(result[5]).toBe("+X to maximum Health");
        });
        it("should return one pattern for each implicit mod in each item", function () {
            var result;
            var input = [{
                "implicitMods": ["+25 to maximum Mana"]
            }, {
                "implicitMods": ["+25 to maximum Health"]
            }, {
                "implicitMods": ["+25 to maximum Energy Shield"]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(3);
            expect(result[0]).toBe("+X to maximum Mana");
            expect(result[1]).toBe("+X to maximum Health");
            expect(result[2]).toBe("+X to maximum Energy Shield");
        });
        it("should return one pattern for each explicit mod in each item", function () {
            var result;
            var input = [{
                "explicitMods": [
                    "119% increased Evasion and Energy Shield",
                    "+95 to maximum Mana",
                    "49% increased Mana Regeneration Rate",
                    "When Hit, 10% of Damage is taken from Mana before Life",
                    "Mind Over Matter"
                ]
            }, {
                "explicitMods": [
                    "+10 to Intelligence",
                    "+5% to all Elemental Resistances",
                    "+5 Mana Gained on Kill",
                    "Enemies can have 1 additional Curse"
                ]
            }
            ];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(9);
            expect(result[0]).toBe("X% increased Evasion and Energy Shield");
            expect(result[1]).toBe("+X to maximum Mana");
            expect(result[2]).toBe("X% increased Mana Regeneration Rate");
            expect(result[3]).toBe("When Hit, X% of Damage is taken from Mana before Life");
            expect(result[4]).toBe("Mind Over Matter");
            expect(result[5]).toBe("+X to Intelligence");
            expect(result[6]).toBe("+X% to all Elemental Resistances");
            expect(result[7]).toBe("+X Mana Gained on Kill");
            expect(result[8]).toBe("Enemies can have X additional Curse");
        });
        it("should return one unique pattern for each explicit mod in each item", function () {
            var result;
            var input = [{
                "explicitMods": [
                    "119% increased Evasion and Energy Shield",
                    "+95 to maximum Mana",
                    "49% increased Mana Regeneration Rate",
                    "When Hit, 10% of Damage is taken from Mana before Life",
                    "Mind Over Matter"
                ]
            }, {
                "explicitMods": [
                    "+10 to Intelligence",
                    "+5% to all Elemental Resistances",
                    "+95 to maximum Mana",
                    "+5 Mana Gained on Kill",
                    "When Hit, 10% of Damage is taken from Mana before Life",
                    "Enemies can have 1 additional Curse"
                ]
            }
            ];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(9);
            expect(result[0]).toBe("X% increased Evasion and Energy Shield");
            expect(result[1]).toBe("+X to maximum Mana");
            expect(result[2]).toBe("X% increased Mana Regeneration Rate");
            expect(result[3]).toBe("When Hit, X% of Damage is taken from Mana before Life");
            expect(result[4]).toBe("Mind Over Matter");
            expect(result[5]).toBe("+X to Intelligence");
            expect(result[6]).toBe("+X% to all Elemental Resistances");
            expect(result[7]).toBe("+X Mana Gained on Kill");
            expect(result[8]).toBe("Enemies can have X additional Curse");
        });

        it("should return one pattern for one crafted mod in one item", function () {
            var result;
            var input = [{
                "craftedMods":["+28 to Dexterity"]
            }];

            result = poeMod.collectPatterns(input);

            expect(result.length).toBe(1);
            expect(result[0]).toBe("+X to Dexterity");
        });
    });
});
