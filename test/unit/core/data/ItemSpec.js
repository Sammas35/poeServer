'use strict';

describe('Item', function () {
    var itemJson;
    var itemJsonGem;
    var item;
    var gem;
    beforeEach(function () {
        itemJson = { "verified": false, "w": 2, "h": 3, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Armours/BodyArmours/CloakOfDefiance.png?scale=1&w=2&h=3&v=5d19fbad8ef651d06403d69b4be73ec83", "support": true, "league": "Standard", "sockets": [{ "group": 0, "attr": "I"}, { "group": 0, "attr": "I"}, { "group": 0, "attr": "I"}, { "group": 0, "attr": "I"}, { "group": 0, "attr": "I"}, { "group": 1, "attr": "I"}], "name": "Cloak of Defiance", "typeLine": "Lacquered Garb", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Quality", "values": [["+20%", 1]], "displayMode": 0}, { "name": "Evasion Rating", "values": [["488", 1]], "displayMode": 0}, { "name": "Energy Shield", "values": [["143", 1]], "displayMode": 0}], "requirements": [{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Str", "values": [["64", 0]], "displayMode": 1}, { "name": "Dex", "values": [["76", 0]], "displayMode": 1}, { "name": "Int", "values": [["146", 0]], "displayMode": 1}], "explicitMods": ["119% increased Evasion and Energy Shield", "+95 to maximum Mana", "49% increased Mana Regeneration Rate", "When Hit, 10% of Damage is taken from Mana before Life", "Mind Over Matter"], "flavourText": ["When the throat roars,\r", "As eyes weep,\r", "When the hand grips hard\r", "With trembling fingers,\r", "When belly twists\r", "Yet legs stand strong,\r", "That is the work\r", "Of the Defiant Heart."], "frameType": 3, "x": 0, "y": 0, "inventoryId": "BodyArmour", "socketedItems": [{ "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/CurseOnHit.png?scale=1&w=1&h=1&v=05db155f8ee3abfd38be282240134f573", "support": true, "sockets": [], "name": "", "typeLine": "Curse On Hit", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Curse, Trigger, Support", "values": [], "displayMode": 0}, { "name": "Level", "values": [["18", 0]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["88224844/89834713", 0]], "displayMode": 2, "progress": 0.982079684734}], "requirements": [{ "name": "Level", "values": [["64", 0]], "displayMode": 0}, { "name": "Int", "values": [["102", 0]], "displayMode": 1}], "explicitMods": ["16% reduced Curse Duration", "Supported Skills apply supported Curses on Hit", "You cannot Cast Supported Curses"], "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.", "frameType": 4, "socket": 0, "colour": "I", "socketedItems": []}, { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Arc.png?scale=1&w=1&h=1&v=f26af5a0e939a9fca4a511bad42ec8953", "support": false, "sockets": [], "name": "", "typeLine": "Arc", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Lightning, Spell, Chaining", "values": [], "displayMode": 0}, { "name": "Level", "values": [["19", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["25", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["0.8 sec", 0]], "displayMode": 0}, { "name": "Critical Strike Chance", "values": [["5%", 0]], "displayMode": 0}, { "name": "Damage Effectiveness", "values": [["50%", 0]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["7036187/146938899", 0]], "displayMode": 2, "progress": 0.0478851236403}], "requirements": [{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Int", "values": [["146", 0]], "displayMode": 1}], "secDescrText": "An arc of lightning stretches from the caster to a targeted nearby enemy and chains on to additional targets.", "explicitMods": ["Deals 35-660 Lightning Damage", "10% chance to Shock enemies", "Chains 5 Times"], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 1, "colour": "I", "socketedItems": []}, { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ElementalWeakness.png?scale=1&w=1&h=1&v=37d7c0d6764d631c4de927ffa72e2b193", "support": false, "sockets": [], "name": "", "typeLine": "Elemental Weakness", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Curse, Spell, AoE, Duration", "values": [], "displayMode": 0}, { "name": "Level", "values": [["19", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["55", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["0.5 sec", 0]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["13363670/146938899", 0]], "displayMode": 2, "progress": 0.0909471213818}], "requirements": [{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Int", "values": [["146", 0]], "displayMode": 1}], "secDescrText": "Curses all targets in an area, making them less resistant to elemental damage.", "explicitMods": ["Base duration is 11.88 seconds", "90% increased Area of Effect radius", "Cursed enemies lose 38% Elemental Resistances"], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 2, "colour": "I", "socketedItems": []}, { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Flammability.png?scale=1&w=1&h=1&v=6fbf7cfcddcc267b1f44fb84314dbe043", "support": false, "sockets": [], "name": "", "typeLine": "Flammability", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Fire, Curse, Spell, AoE, Duration", "values": [], "displayMode": 0}, { "name": "Level", "values": [["19", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["55", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["0.5 sec", 0]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["86769289/146938899", 0]], "displayMode": 2, "progress": 0.590512752533}], "requirements": [{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Str", "values": [["64", 0]], "displayMode": 1}, { "name": "Int", "values": [["92", 0]], "displayMode": 1}], "secDescrText": "Curses all targets in an area, making them less resistant to fire damage and giving them a chance to be ignited by fire damage.", "explicitMods": ["Base duration is 11.88 seconds", "90% increased Area of Effect radius", "Cursed enemies lose 38% Fire Resistance", "Cursed enemies have +13% chance to be Ignited by Fire Damage"], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 3, "colour": "I", "socketedItems": []}, { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Vulnerability.png?scale=1&w=1&h=1&v=d5e4ae8c4fa14e3b4c870e0caa0177513", "support": false, "sockets": [], "name": "", "typeLine": "Vulnerability", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Curse, Spell, AoE, Duration", "values": [], "displayMode": 0}, { "name": "Level", "values": [["18", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["54", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["0.5 sec", 0]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["4141972/89834713", 0]], "displayMode": 2, "progress": 0.0461065880954}], "requirements": [{ "name": "Level", "values": [["64", 0]], "displayMode": 0}, { "name": "Int", "values": [["142", 0]], "displayMode": 1}], "secDescrText": "Curses all targets in an area, making them take increased physical damage and degeneration.", "explicitMods": ["Base duration is 11.77 seconds", "85% increased Area of Effect radius", "Cursed enemies take 28% increased Physical damage", "Cursed enemies take 33% increased damage from Damage Over Time effects"], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 4, "colour": "I", "socketedItems": []}, { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ConversionTrap.png?scale=1&w=1&h=1&v=4b89517e2d00d3abc64bd30dd65c31813", "support": false, "sockets": [], "name": "", "typeLine": "Conversion Trap", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Trap, Spell, Duration", "values": [], "displayMode": 0}, { "name": "Level", "values": [["17", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["35", 0]], "displayMode": 0}, { "name": "Cooldown Time", "values": [["8 sec (3 uses)", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["1 sec", 0]], "displayMode": 0}, { "name": "Quality", "values": [["+8%", 1]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["8553351/50550118", 0]], "displayMode": 2, "progress": 0.169205352664}], "requirements": [{ "name": "Level", "values": [["62", 0]], "displayMode": 0}, { "name": "Dex", "values": [["60", 0]], "displayMode": 1}, { "name": "Int", "values": [["87", 0]], "displayMode": 1}], "secDescrText": "Throws a trap that, when triggered by an enemy, converts that enemy to your side for a short duration. Does not affect unique monsters or players.", "explicitMods": ["Trap lasts 30 seconds", "Base duration is 9.30 seconds", "6% increased Duration "], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 5, "colour": "I", "socketedItems": []}]};
        itemJsonGem = { "verified": false, "w": 1, "h": 1, "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53", "support": false, "sockets": [], "name": "", "typeLine": "Fire Trap", "identified": true, "corrupted": false, "lockedToCharacter": false, "properties": [{ "name": "Fire, Trap, Spell, Duration, AoE", "values": [], "displayMode": 0}, { "name": "Level", "values": [["19", 0]], "displayMode": 0}, { "name": "Mana Cost", "values": [["34", 0]], "displayMode": 0}, { "name": "Cooldown Time", "values": [["3 sec (3 uses)", 0]], "displayMode": 0}, { "name": "Cast Time", "values": [["1 sec", 0]], "displayMode": 0}, { "name": "Critical Strike Chance", "values": [["5%", 0]], "displayMode": 0}, { "name": "Quality", "values": [["+8%", 1]], "displayMode": 0}], "additionalProperties": [{ "name": "Experience", "values": [["26620498/147034823", 0]], "displayMode": 2, "progress": 0.181048944592}], "requirements": [{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Dex", "values": [["92", 0]], "displayMode": 1}, { "name": "Int", "values": [["64", 0]], "displayMode": 1}], "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.", "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds", "12% increased Burning Damage"], "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.", "frameType": 4, "socket": 1, "colour": "D", "socketedItems": []}

        item = new Item(itemJson);
        gem = new Item(itemJsonGem);
    });

    describe("copy constructor", function () {
        it("should be a function", function () {
            expect(Item).toBeDefined();
            expect(angular.isFunction(Item)).toBe(true);
        });

        describe("with an itemJson", function () {
            it("should have the json members", function () {
                expect(item.name).toBe('Cloak of Defiance');
                expect(item.typeLine).toBe('Lacquered Garb');
                expect(item.socketedItems.length).toBe(6);
            });
        });
        describe("with an itemJsonGem", function () {
            it("should have the json members", function () {
                expect(gem.name).toBe('');
                expect(gem.typeLine).toBe('Fire Trap');
                expect(gem.socketedItems.length).toBe(0);
            });
        });
        describe("init socketCount", function () {
            it("should be 0 without sockets", function () {
                itemJson.sockets = undefined;
                item = new Item(itemJson);
                expect(item.socketCount).toBe(0);
            });

            it("should be 2 without 2 sockets", function () {
                itemJson.sockets = [{ "group": 0, "attr": "D"}, { "group": 0, "attr": "I"}];
                item = new Item(itemJson);

                expect(item.socketCount).toBe(2);
            });
        });
        describe("use charname", function () {
            it("should have empty charname without charname as param", function () {
                expect(item.charname).toBeUndefined();
            });
            it("should have a charname with charname as param", function () {
                item = new Item(itemJson, 'Hansi');
                expect(item.charname).toBe('Hansi');
            });
        });
    });

    describe("getName", function () {
        it("should be a function", function () {
            expect(item.getName).toBeDefined();
            expect(angular.isFunction(item.getName)).toBe(true);
        });

        describe("with an item", function () {
            it('should return Cloak of Defiance', function () {
                expect(item.getName()).toBe('Cloak of Defiance');
            });
        });
        describe("with a gem", function () {
            it('should return Fire Trap', function () {
                expect(gem.getName()).toBe('Fire Trap');
            });
        });
    });


    describe("getQuality", function () {
        it("should be a function", function () {
            expect(item.getQuality).toBeDefined();
            expect(angular.isFunction(item.getQuality)).toBe(true);
        });

        it("should return +20%", function () {
            expect(item.getQuality()).toBe('+20%');
        });
    });

    describe("getDefences", function () {
        it("should be a function", function () {
            expect(item.getDefences).toBeDefined();
            expect(angular.isFunction(item.getDefences)).toBe(true);
        });

        it("should find the Defence values", function () {
            var result = item.getDefences();

            expect(result.length).toBe(2);
            expect(result[0]).toBe('Energy Shield 143');
            expect(result[1]).toBe('Evasion Rating 488');
        });
    });

    describe("getRequirements", function () {
        it("should be a function", function () {
            expect(item.getRequirements).toBeDefined();
            expect(angular.isFunction(item.getRequirements)).toBe(true);
        });

        //[{ "name": "Level", "values": [["66", 0]], "displayMode": 0}, { "name": "Str", "values": [["64", 0]], "displayMode": 1}, { "name": "Dex", "values": [["76", 0]], "displayMode": 1}, { "name": "Int", "values": [["146", 0]], "displayMode": 1}]
        it("should find the requirements", function () {
            var result = item.getRequirements();

            expect(result.length).toBe(4);
            expect(result[0]).toBe('Level 66');
            expect(result[1]).toBe('Str 64');
            expect(result[2]).toBe('Dex 76');
            expect(result[3]).toBe('Int 146');
        });
    });

    describe("getImplicit", function () {
        it("should be a function", function () {
            expect(item.getImplicit).toBeDefined();
            expect(angular.isFunction(item.getImplicit)).toBe(true);
        });

        it("should give the implicit mod", function () {
            var result = item.getImplicit();

            expect(result.length).toBe(0);

            item.implicitMods = ['God mode'];

            result = item.getImplicit();

            expect(result.length).toBe(1);
            expect(result[0]).toBe('God mode');
        });
    });

    describe("getExplicit", function () {
        it("should be a function", function () {
            expect(item.getExplicit).toBeDefined();
            expect(angular.isFunction(item.getExplicit)).toBe(true);
        });

        it("should give the explicit mods", function () {
            var result = item.getImplicit();

            result = item.getExplicit();

            expect(result.length).toBe(5);
            expect(result[0]).toBe('119% increased Evasion and Energy Shield');
            expect(result[1]).toBe('+95 to maximum Mana');
            expect(result[2]).toBe('49% increased Mana Regeneration Rate');
            expect(result[3]).toBe('When Hit, 10% of Damage is taken from Mana before Life');
            expect(result[4]).toBe('Mind Over Matter');
        });
    });
    describe("getCorrupted", function () {
        it("should be a function", function () {
            expect(item.getCorrupted).toBeDefined();
            expect(angular.isFunction(item.getCorrupted)).toBe(true);
        });

        it("should return that item is not corrupted", function () {
            expect(item.getCorrupted()).toBe('');
            item.corrupted = true;
            expect(item.getCorrupted()).toBe('Corrupted');
        });
    });

    describe("getLevel", function () {
        it("should be a function", function () {
            expect(gem.getLevel).toBeDefined();
            expect(angular.isFunction(gem.getLevel)).toBe(true);
        });

        it("should return 19 with the gem", function () {
            expect(gem.getLevel()).toBe('19');
        });
        it("should return empty string with the item", function () {
            expect(item.getLevel()).toBe('');
        });
    });
});
