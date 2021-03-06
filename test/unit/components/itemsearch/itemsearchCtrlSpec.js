'use strict';

describe('itemsearchCtrl', function () {
    var ctrl;
    var poemodel;

    beforeEach(module('poeServer'));
    beforeEach(inject(function ($controller, $window, _poemodel_) {
        var _ = $window._;
        poemodel = _poemodel_;
        ctrl = $controller('itemsearchCtrl', {'_' : _});
    }));

    describe('searchInSockets', function () {
        it('should exist and be a function', function () {
            expect(ctrl.searchInSockets).toBeDefined();
            expect(angular.isFunction(ctrl.searchInSockets)).toBe(true);
        });
        it('should find by search string', function () {
            var searchInSockets = ctrl.searchInSockets;

            var item = {
                "typeLine": "Fire Trap"
            };

            expect(searchInSockets('Fire Trap')(item)).toBeTruthy();
            expect(searchInSockets('Fire Trapper')(item)).toBeFalsy();
            expect(searchInSockets('')(item)).toBeFalsy();
            expect(searchInSockets(undefined)(item)).toBeFalsy();
        });
    });

    describe('searchInItem', function () {
        var item;

        beforeEach(function () {
            item = {
                "name": "The Searing Touch",
                "typeLine": "Long Staff",
                "socketedItems": [{
                    "typeLine": "Fire Penetration"
                }, {
                    "typeLine": "Chance to Ignite"
                }, {
                    "typeLine": "Elemental Proliferation"
                }, {
                    "typeLine": "Increased Area of Effect"
                }, {
                    "typeLine": "Fire Trap"
                }, {
                    "typeLine": "Increased Burning Damage"
                }]
            };
        });

        it('should exist and be a function', function () {
            expect(ctrl.searchInItem).toBeDefined();
            expect(angular.isFunction(ctrl.searchInItem)).toBe(true);

        });

        it('should find by item name', function () {
            expect(ctrl.searchInItem('Searing')(item)).toBeTruthy();
        });

        it('should find by socketed item name', function () {
            expect(ctrl.searchInItem('Elemental')(item)).toBeTruthy();
        });

        it('should not find by item wrong name neither socketed item name', function () {
            expect(ctrl.searchInItem('gibbet nich')(item)).toBeFalsy();
        });
    });

    describe('searchInChar', function () {
        var item;
        beforeEach(function () {
            item = {
                "items": [{
                    "verified": false,
                    "w": 2,
                    "h": 3,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Armours/BodyArmours/CloakOfDefiance.png?scale=1&w=2&h=3&v=5d19fbad8ef651d06403d69b4be73ec83",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 1,
                        "attr": "I"
                    }],
                    "name": "Cloak of Defiance",
                    "typeLine": "Lacquered Garb",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
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
                    }],
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
                    }],
                    "explicitMods": ["119% increased Evasion and Energy Shield", "+95 to maximum Mana", "49% increased Mana Regeneration Rate", "When Hit, 10% of Damage is taken from Mana before Life", "Mind Over Matter"],
                    "flavourText": ["When the throat roars,\r", "As eyes weep,\r", "When the hand grips hard\r", "With trembling fingers,\r", "When belly twists\r", "Yet legs stand strong,\r", "That is the work\r", "Of the Defiant Heart."],
                    "frameType": 3,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "BodyArmour",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/CurseOnHit.png?scale=1&w=1&h=1&v=05db155f8ee3abfd38be282240134f573",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Curse On Hit",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Curse, Trigger, Support",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["18", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["60840292/89834713", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.677247047424
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["102", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["16% reduced Curse Duration", "Supported Skills apply supported Curses on Hit", "You cannot Cast Supported Curses"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Arc.png?scale=1&w=1&h=1&v=f26af5a0e939a9fca4a511bad42ec8953",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Arc",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Lightning, Spell, Chaining",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["18", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["24", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.8 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Damage Effectiveness",
                            "values": [
                                ["50%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["69684656/89968595", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.774544239044
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["142", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "An arc of lightning stretches from the caster to a targeted nearby enemy and chains on to additional targets.",
                        "explicitMods": ["Deals 32-600 Lightning Damage", "10% chance to Shock enemies", "Chains 5 Times"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ElementalWeakness.png?scale=1&w=1&h=1&v=37d7c0d6764d631c4de927ffa72e2b193",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Elemental Weakness",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Curse, Spell, AoE, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["18", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["54", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["75948919/89968595", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.844171464443
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["142", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Curses all targets in an area, making them less resistant to elemental damage.",
                        "explicitMods": ["Base duration is 11.77 seconds", "85% increased Area of Effect radius", "Cursed enemies lose 37% Elemental Resistances"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Flammability.png?scale=1&w=1&h=1&v=6fbf7cfcddcc267b1f44fb84314dbe043",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Flammability",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Curse, Spell, AoE, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["55", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["59384737/146938899", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.404145777225
                        }],
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
                            "name": "Int",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Curses all targets in an area, making them less resistant to fire damage and giving them a chance to be ignited by fire damage.",
                        "explicitMods": ["Base duration is 11.88 seconds", "90% increased Area of Effect radius", "Cursed enemies lose 38% Fire Resistance", "Cursed enemies have +13% chance to be Ignited by Fire Damage"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 3,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Vulnerability.png?scale=1&w=1&h=1&v=d5e4ae8c4fa14e3b4c870e0caa0177513",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Vulnerability",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Curse, Spell, AoE, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["17", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["54", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["27320730/50550118", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.540468156338
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["62", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["138", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Curses all targets in an area, making them take increased physical damage and degeneration.",
                        "explicitMods": ["Base duration is 11.66 seconds", "80% increased Area of Effect radius", "Cursed enemies take 28% increased Physical damage", "Cursed enemies take 33% increased damage from Damage Over Time effects"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 4,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ConversionTrap.png?scale=1&w=1&h=1&v=4b89517e2d00d3abc64bd30dd65c31813",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Conversion Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Trap, Spell, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["16", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["8 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Quality",
                            "values": [
                                ["+8%", 1]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["2452045/21274363", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.115258201957
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["60", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["59", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["84", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that, when triggered by an enemy, converts that enemy to your side for a short duration. Does not affect unique monsters or players.",
                        "explicitMods": ["Trap lasts 30 seconds", "Base duration is 9.00 seconds", "6% increased Duration "],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 5,
                        "colour": "I",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png?scale=1&stackSize=37&w=1&h=1&v=333b8b5e28b73c62972fc66e7634c5c83",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Orb of Transmutation",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["37/40", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Upgrades a normal item to a magic item"],
                    "descrText": "Right click this item then left click a normal item to apply it.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 2,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6Mjk6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9saWZlZmxhc2s4Ijtz/OjI6InNwIjtkOjAuNjA4/NTE5MjY5Nzc2ODc2MzE0/ODE0NzI4NjMwMTUzNjk1/MTIxNDA3NTA4ODUwMDk3/NjU2MjU7czo1OiJsZXZl/bCI7aToxO31pOjE7aTo0/O2k6MDtpOjk7fQ,,/2244380be0/Item.png",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Sapping Hallowed Life Flask of Grounding",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Recovers %0 Life over %1 Seconds",
                        "values": [
                            ["3936", 1],
                            ["8", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Consumes %0 of %1 Charges on use",
                        "values": [
                            ["10", 0],
                            ["30", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Currently has %0 Charges",
                        "values": [
                            ["30", 0]
                        ],
                        "displayMode": 3
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["53", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["60% increased Life Recovered", "Removes 10% of Life Recovered from Mana when used", "Immunity to Shock during flask effect", "Removes Shock on use"],
                    "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
                    "frameType": 1,
                    "x": 1,
                    "y": 0,
                    "inventoryId": "Flask",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyIdentification.png?scale=1&stackSize=15&w=1&h=1&v=1b9b38c45be95c59d8900f91b2afd58b3",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Scroll of Wisdom",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["15/40", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Identifies an item"],
                    "descrText": "Right click this item then left click an unidentified item to apply it.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 1,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc623",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "S"
                    }, {
                        "group": 0,
                        "attr": "S"
                    }, {
                        "group": 0,
                        "attr": "S"
                    }, {
                        "group": 0,
                        "attr": "S"
                    }],
                    "name": "Skull Track",
                    "typeLine": "Ancient Greaves",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Armour",
                        "values": [
                            ["211", 1]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["66", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Str",
                        "values": [
                            ["105", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["28", 0]
                        ],
                        "displayMode": 1
                    }],
                    "explicitMods": ["40% increased Armour", "+33% to Fire Resistance", "+32% to Lightning Resistance", "30% increased Movement Speed", "13% increased Stun Recovery"],
                    "craftedMods": ["+45 to maximum Life"],
                    "frameType": 2,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Boots",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/CastOnDmgTaken.png?scale=1&w=1&h=1&v=e03ceb1a31e457dbfe30e968c76fb0d63",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Cast when Damage Taken",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support, Spell, Trigger",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["5", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.25 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["431204/431204", 0]
                            ],
                            "displayMode": 2,
                            "progress": 1
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["39", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["40", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["28", 0]
                            ],
                            "displayMode": 1
                        }],
                        "nextLevelRequirements": [{
                            "name": "Level",
                            "values": [
                                ["41", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["42", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["29", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["This Gem can only Support Skill Gems requiring Level 39 or lower", "54% less Damage", "You cannot Cast Supported Spells directly", "Casts Supported Spells when you take a total of 700 Damage"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "S",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/EnduringCry.png?scale=1&w=1&h=1&v=0d2d8a9713adc2828f4626110eaee3ef3",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Enduring Cry",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Spell, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["7", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["4 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["554379/554379", 0]
                            ],
                            "displayMode": 2,
                            "progress": 1
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["37", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["85", 0]
                            ],
                            "displayMode": 1
                        }],
                        "nextLevelRequirements": [{
                            "name": "Level",
                            "values": [
                                ["40", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Performs a warcry, adding endurance charges proportional to the number of surrounding enemies. Taunts all nearby enemies to attack the caster.",
                        "explicitMods": ["21 Endurance Charges granted per one hundred nearby enemies"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "S",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedDuration.png?scale=1&w=1&h=1&v=14b3a91933f0b921d1b573358e31f7683",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Increased Duration",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["150%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["4661624/146782704", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.0317586734891
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["105", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["63% increased Skill Effect Duration"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "S",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ImmortalCall.png?scale=1&w=1&h=1&v=3843ced383e5dca18e076e57e9f678193",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Immortal Call",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Spell, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["6", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["22", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.85 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["388734/388734", 0]
                            ],
                            "displayMode": 2,
                            "progress": 1
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["38", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["88", 0]
                            ],
                            "displayMode": 1
                        }],
                        "nextLevelRequirements": [{
                            "name": "Level",
                            "values": [
                                ["40", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Discharges Endurance Charges, making the character invulnerable to physical damage for a short time, proportional to how many endurance charges were expended.",
                        "explicitMods": ["Base duration is 0.25 seconds", "Additional 0.56 Seconds Base Duration per Endurance Charge"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 3,
                        "colour": "S",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 4,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/TwoHandWeapons/Staves/Staff4unique.png?scale=1&w=2&h=4&v=bd795d676bbd873ceeb39a71fcb6ddc93",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "S"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "D"
                    }, {
                        "group": 1,
                        "attr": "S"
                    }],
                    "name": "The Searing Touch",
                    "typeLine": "Long Staff",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Staff",
                        "values": [],
                        "displayMode": 0
                    }, {
                        "name": "Physical Damage",
                        "values": [
                            ["20-33", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Critical Strike Chance",
                        "values": [
                            ["6.5%", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Attacks per Second",
                        "values": [
                            ["1.25", 0]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["67", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Str",
                        "values": [
                            ["105", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Dex",
                        "values": [
                            ["92", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["106", 0]
                        ],
                        "displayMode": 1
                    }],
                    "implicitMods": ["12% Chance to Block"],
                    "explicitMods": ["+2 to Level of Socketed Fire Gems", "47% increased Spell Damage", "26% increased Fire Damage", "10% increased Cast Speed", "70% increased Burning Damage"],
                    "cosmeticMods": ["Has Infernal Weapon Effect"],
                    "flavourText": ["Burn to cinders, scar and maim,\r", "Rule a world, bathed in flame."],
                    "frameType": 3,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Weapon",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/FirePenetration.png?scale=1&w=1&h=1&v=71763309c9c93e038fdf49738e121e443",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Penetration",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Support",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["140%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["65248287/146782704", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.444523006678
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["105", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["Penetrates 34% Fire Resistance"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "S",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ChancetoIgnite.png?scale=1&w=1&h=1&v=edeeb9cb97280655b5a3be33a3d3ca573",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Chance to Ignite",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Support",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["110%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Quality",
                            "values": [
                                ["+12%", 1]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["72344363/146938899", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.49234315753
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["105", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["18% increased Ignite Duration on Enemies", "43% chance to Ignite"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ElementalProliferation.png?scale=1&w=1&h=1&v=e7ee8a5ac2a22cbec33c7eb55ad82cf13",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Elemental Proliferation",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Cold, Fire, Lightning, Support, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["140%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["65936118/146782704", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.449209064245
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["105", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["Elemental Status Effects caused by supported Skills spread to other enemies", "Radius: 30"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedAOE.png?scale=1&w=1&h=1&v=f0accbe4733628f443cd691574b3f6043",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Increased Area of Effect",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["150%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["66342941/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.4535767138
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["106", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["32% increased Area of Effect radius"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 3,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Quality",
                            "values": [
                                ["+20%", 1]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["45862523/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.311916083097
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds", "30% increased Burning Damage"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 4,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedBurnDuration.png?scale=1&w=1&h=1&v=87d793d532f58b25dfe364b61093f55e3",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Increased Burning Damage",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Support",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["120%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["65532168/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.448033601046
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["46", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["58% increased Burning Damage"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 5,
                        "colour": "S",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Amulets/TurquoiseAmulet.png?scale=1&w=1&h=1&v=484a8eac4316c65308deea4efcfbb6213",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "Viper Charm",
                    "typeLine": "Turquoise Amulet",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["35", 0]
                        ],
                        "displayMode": 0
                    }],
                    "implicitMods": ["+21 to Dexterity and Intelligence"],
                    "explicitMods": ["Adds 1-2 Physical Damage", "33% increased Global Critical Strike Multiplier", "+72 to maximum Life", "+26% to Cold Resistance", "+27% to Lightning Resistance"],
                    "frameType": 2,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Amulet",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MjU6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9zcHJpbnQiO3M6Mjoi/c3AiO2Q6MC42MDg1MTky/Njk3NzY4NzYzMTQ4MTQ3/Mjg2MzAxNTM2OTUxMjE0/MDc1MDg4NTAwOTc2NTYy/NTtzOjU6ImxldmVsIjtp/OjE7fWk6MTtpOjQ7aTow/O2k6OTt9/6446837133/Item.png",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Avenger's Quicksilver Flask of Adrenaline",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Lasts %0 Seconds",
                        "values": [
                            ["6", 1]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Consumes %0 of %1 Charges on use",
                        "values": [
                            ["20", 0],
                            ["50", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Currently has %0 Charges",
                        "values": [
                            ["50", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "",
                        "values": [
                            ["40% increased Movement Speed", 1]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["9", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["25% increased Movement Speed during flask effect", "Recharges 3 Charges when you take a Critical Strike"],
                    "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
                    "frameType": 1,
                    "x": 4,
                    "y": 0,
                    "inventoryId": "Flask",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MjY6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9ncmFuaXRlIjtzOjI6/InNwIjtkOjAuNjA4NTE5/MjY5Nzc2ODc2MzE0ODE0/NzI4NjMwMTUzNjk1MTIx/NDA3NTA4ODUwMDk3NjU2/MjU7czo1OiJsZXZlbCI7/aToxO31pOjE7aTo0O2k6/MDtpOjk7fQ,,/397bc7d897/Item.png",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Surgeon's Granite Flask of Heat",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Lasts %0 Seconds",
                        "values": [
                            ["4.8", 1]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Consumes %0 of %1 Charges on use",
                        "values": [
                            ["30", 0],
                            ["60", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Currently has %0 Charges",
                        "values": [
                            ["60", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "",
                        "values": [
                            ["+3000 to Armour", 1]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["27", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Immunity to Freeze and Chill during flask effect", "Removes Freeze and Chill on use", "Recharges 1 Charge when you deal a Critical Strike"],
                    "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
                    "frameType": 1,
                    "x": 3,
                    "y": 0,
                    "inventoryId": "Flask",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MzA6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9saWZlZmxhc2sxMCI7/czoyOiJzcCI7ZDowLjYw/ODUxOTI2OTc3Njg3NjMx/NDgxNDcyODYzMDE1MzY5/NTEyMTQwNzUwODg1MDA5/NzY1NjI1O3M6NToibGV2/ZWwiO2k6MTt9aToxO2k6/NDtpOjA7aTo5O30,/3afd394f30/Item.png",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Sapping Divine Life Flask of Dousing",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Recovers %0 Life over %1 Seconds",
                        "values": [
                            ["4032", 1],
                            ["7", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Consumes %0 of %1 Charges on use",
                        "values": [
                            ["15", 0],
                            ["45", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Currently has %0 Charges",
                        "values": [
                            ["45", 0]
                        ],
                        "displayMode": 3
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["65", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["40% increased Life Recovered", "Removes 10% of Life Recovered from Mana when used", "Immunity to Ignite during flask effect", "Removes Burning on use"],
                    "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
                    "frameType": 1,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Flask",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Belts/Belt3.png?scale=1&w=2&h=1&v=a559821037f54c94dae053b90bcea3633",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "Entropy Shackle",
                    "typeLine": "Leather Belt",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["51", 0]
                        ],
                        "displayMode": 0
                    }],
                    "implicitMods": ["+34 to maximum Life"],
                    "explicitMods": ["+28 to Strength", "+295 to Armour", "+98 to maximum Life", "+21% to Cold Resistance"],
                    "craftedMods": ["18% increased Trap Damage", "14% increased Mine Damage"],
                    "frameType": 2,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Belt",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyPortal.png?scale=1&stackSize=39&w=1&h=1&v=728696ea10d4fb1e789039debc5d8c3c3",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Portal Scroll",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["39/40", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Creates a portal to town"],
                    "descrText": "Right click on this item to use it.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 0,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 3,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/OneHandWeapons/OneHandSwords/OneHandSword3.png?scale=1&w=1&h=3&v=0bf4b174a0c80b2fd80a12026ed04a053",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "D"
                    }, {
                        "group": 1,
                        "attr": "D"
                    }, {
                        "group": 2,
                        "attr": "D"
                    }],
                    "name": "",
                    "typeLine": "Corsair Sword",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "One Handed Sword",
                        "values": [],
                        "displayMode": 0
                    }, {
                        "name": "Physical Damage",
                        "values": [
                            ["15-59", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Critical Strike Chance",
                        "values": [
                            ["5%", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Attacks per Second",
                        "values": [
                            ["1.65", 0]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["66", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Str",
                        "values": [
                            ["81", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Dex",
                        "values": [
                            ["117", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["64", 0]
                        ],
                        "displayMode": 1
                    }],
                    "implicitMods": ["18% increased Accuracy Rating"],
                    "frameType": 0,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Offhand2",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Quality",
                            "values": [
                                ["+14%", 1]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["204387/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.00139005854726
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds", "21% increased Burning Damage"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["18", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Quality",
                            "values": [
                                ["+8%", 1]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["89293245/90050815", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.991587340832
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["90", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["62", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 302-453 Fire Damage", "Trap lasts 30 seconds", "Deals 243 Base Fire Damage per second", "Base duration is 8.00 seconds", "12% increased Burning Damage"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["51476761/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.350099116564
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "D",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyUpgradeRandomly.png?scale=1&stackSize=5&w=1&h=1&v=e4049939b9cd61291562f94364ee0f003",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Orb of Chance",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["5/20", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Upgrades a normal item to a random rarity"],
                    "descrText": "Right click this item then left click a normal item to apply it.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 5,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png?scale=1&stackSize=17&w=1&h=1&v=6d9520174f6643e502da336e76b730d33",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Orb of Alteration",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["17/20", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Reforges a magic item with new random properties"],
                    "descrText": "Right click this item then left click a magic item to apply it.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 4,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Rings/TopazSapphire.png?scale=1&w=1&h=1&v=b7334698bf04b28f755467f256a3276b3",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "Havoc Nail",
                    "typeLine": "Two-Stone Ring",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["48", 0]
                        ],
                        "displayMode": 0
                    }],
                    "implicitMods": ["+16% to Cold and Lightning Resistances"],
                    "explicitMods": ["+33 to maximum Mana", "+7 to maximum Energy Shield", "+31% to Fire Resistance", "+38% to Lightning Resistance"],
                    "craftedMods": ["+22% to Cold Resistance"],
                    "frameType": 2,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Ring",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png?scale=1&stackSize=28&w=1&h=1&v=97e63b85807f2419f4208482fd0b48593",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Orb of Augmentation",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Stack Size",
                        "values": [
                            ["28/30", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["Enchants a magic item with a new random property"],
                    "descrText": "Right click this item then left click a magic item to apply it. Magic items can have up to two random properties.\nShift click to unstack.",
                    "frameType": 5,
                    "x": 3,
                    "y": 4,
                    "inventoryId": "MainInventory",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 1,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Rings/Ring3Unique.png?scale=1&w=1&h=1&v=689dcd2e6f55af30ca0fa8e1f795e8073",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "Doedre's Damning",
                    "typeLine": "Paua Ring",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "implicitMods": ["+22 to maximum Mana"],
                    "explicitMods": ["+9 to Intelligence", "+5% to all Elemental Resistances", "+5 Mana Gained on Kill", "Enemies can have 1 additional Curse"],
                    "flavourText": ["Where her mouth should have been\r", "there was only a whirling, black void."],
                    "frameType": 3,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Ring2",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/OneHandWeapons/Claws/Claw4.png?scale=1&w=2&h=2&v=9975238ccd62fc6440af5a30542276ad3",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "D"
                    }, {
                        "group": 0,
                        "attr": "D"
                    }, {
                        "group": 1,
                        "attr": "D"
                    }],
                    "name": "",
                    "typeLine": "Tiger's Paw",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Claw",
                        "values": [],
                        "displayMode": 0
                    }, {
                        "name": "Physical Damage",
                        "values": [
                            ["22-41", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Critical Strike Chance",
                        "values": [
                            ["6.2%", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Attacks per Second",
                        "values": [
                            ["1.50", 0]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["66", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Dex",
                        "values": [
                            ["92", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["64", 0]
                        ],
                        "displayMode": 1
                    }],
                    "implicitMods": ["+15 Life gained for each Enemy hit by your Attacks"],
                    "frameType": 0,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Weapon2",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["15004869/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.102049767971
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["6001573/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.040817361325
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Fire Trap",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Fire, Trap, Spell, Duration, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["34", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["3 sec (3 uses)", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["802749/147034823", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.00545958429575
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["92", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.",
                        "explicitMods": ["Deals 339-509 Fire Damage", "Trap lasts 30 seconds", "Deals 268 Base Fire Damage per second", "Base duration is 8.00 seconds"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "D",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 1,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MzA6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9tYW5hZmxhc2sxMCI7/czoyOiJzcCI7ZDowLjYw/ODUxOTI2OTc3Njg3NjMx/NDgxNDcyODYzMDE1MzY5/NTEyMTQwNzUwODg1MDA5/NzY1NjI1O3M6NToibGV2/ZWwiO2k6MTt9aToxO2k6/NDtpOjA7aTo5O30,/2e50001066/Item.png",
                    "support": true,
                    "league": "Standard",
                    "sockets": [],
                    "name": "",
                    "typeLine": "Saturated Divine Mana Flask of Staunching",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Recovers %0 Mana over %1 Seconds",
                        "values": [
                            ["1440", 1],
                            ["7.5", 1]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Consumes %0 of %1 Charges on use",
                        "values": [
                            ["15", 0],
                            ["45", 0]
                        ],
                        "displayMode": 3
                    }, {
                        "name": "Currently has %0 Charges",
                        "values": [
                            ["45", 0]
                        ],
                        "displayMode": 3
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["65", 0]
                        ],
                        "displayMode": 0
                    }],
                    "explicitMods": ["50% increased Amount Recovered", "33% reduced Recovery Speed", "Immunity to Bleeding during flask effect", "Removes Bleeding on use"],
                    "descrText": "Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.",
                    "frameType": 1,
                    "x": 2,
                    "y": 0,
                    "inventoryId": "Flask",
                    "socketedItems": []
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e3",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "S"
                    }],
                    "name": "Vortex Guardian",
                    "typeLine": "Solaris Circlet",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Energy Shield",
                        "values": [
                            ["124", 1]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["67", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Str",
                        "values": [
                            ["106", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["148", 0]
                        ],
                        "displayMode": 1
                    }],
                    "explicitMods": ["45% increased Energy Shield", "19% increased Rarity of Items found", "+23% to Fire Resistance", "+26% to Lightning Resistance", "+12% to Chaos Resistance", "14% increased Stun Recovery"],
                    "frameType": 2,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Helm",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Clarity.png?scale=1&w=1&h=1&v=f609c128e5ee053e773b391625757d6a3",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Clarity",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Aura, Spell, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["17", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Reserved",
                            "values": [
                                ["448", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1.2 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["50689250/50689250", 0]
                            ],
                            "displayMode": 2,
                            "progress": 1
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["62", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["138", 0]
                            ],
                            "displayMode": 1
                        }],
                        "nextLevelRequirements": [{
                            "name": "Level",
                            "values": [
                                ["64", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["142", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Casts an aura that grants mana regeneration to you and your allies.",
                        "explicitMods": ["37% increased Area of Effect radius", "You and nearby allies regenerate 21 Mana per second"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Discipline.png?scale=1&w=1&h=1&v=0f0cb9dd5e43499dd6f851958e9808f23",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Discipline",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Aura, Spell, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Reserved",
                            "values": [
                                ["60%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1.2 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["26354805/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.180183842778
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["148", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Casts an aura that grants energy shield to you and your allies.",
                        "explicitMods": ["39% increased Area of Effect radius", "You and nearby allies gain 303 additional Energy Shield"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Purity.png?scale=1&w=1&h=1&v=57df547b7efe8529ef9e421fb8ea3c1a3",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Purity of Elements",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Aura, Spell, AoE",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Reserved",
                            "values": [
                                ["40%", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1.2 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["24621107/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.168330818415
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["65", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["94", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Casts an aura that grants elemental resistances to you and your allies.",
                        "explicitMods": ["39% increased Area of Effect radius", "You and nearby allies gain +27% to all Elemental Resistances"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ReducedManaCost.png?scale=1&w=1&h=1&v=d8838346a48ae2a78920f10d5a9c2d233",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Reduced Mana",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["72%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["63799945/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.436190634966
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["106", 0]
                            ],
                            "displayMode": 1
                        }],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 3,
                        "colour": "S",
                        "socketedItems": []
                    }]
                }, {
                    "verified": false,
                    "w": 2,
                    "h": 2,
                    "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Gloves/Aurseize.png?scale=1&w=2&h=2&v=7d0390d691ffdb017894099d9f1390163",
                    "support": true,
                    "league": "Standard",
                    "sockets": [{
                        "group": 0,
                        "attr": "I"
                    }, {
                        "group": 0,
                        "attr": "D"
                    }, {
                        "group": 0,
                        "attr": "S"
                    }, {
                        "group": 0,
                        "attr": "I"
                    }],
                    "name": "Aurseize",
                    "typeLine": "Steelscale Gauntlets",
                    "identified": true,
                    "corrupted": false,
                    "lockedToCharacter": false,
                    "properties": [{
                        "name": "Quality",
                        "values": [
                            ["+20%", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Armour",
                        "values": [
                            ["93", 1]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Evasion Rating",
                        "values": [
                            ["93", 1]
                        ],
                        "displayMode": 0
                    }],
                    "requirements": [{
                        "name": "Level",
                        "values": [
                            ["67", 0]
                        ],
                        "displayMode": 0
                    }, {
                        "name": "Str",
                        "values": [
                            ["105", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Dex",
                        "values": [
                            ["87", 0]
                        ],
                        "displayMode": 1
                    }, {
                        "name": "Int",
                        "values": [
                            ["146", 0]
                        ],
                        "displayMode": 1
                    }],
                    "explicitMods": ["44% increased Armour and Evasion", "45% increased Rarity of Items found", "+15% to all Elemental Resistances", "5% reduced Movement Speed"],
                    "flavourText": ["Wealth is not to be borne lightly."],
                    "frameType": 3,
                    "x": 0,
                    "y": 0,
                    "inventoryId": "Gloves",
                    "socketedItems": [{
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/LightningWarp.png?scale=1&w=1&h=1&v=227de2fadd0ff1c98d6e3edcfacac9473",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Lightning Warp",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Lightning, Spell, AoE, Duration, Movement",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Cost",
                            "values": [
                                ["41", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["1 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Critical Strike Chance",
                            "values": [
                                ["5%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["65531307/146782704", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.446451157331
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["146", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Casts a delayed teleport to a target destination. When the teleport occurs, lightning damage is dealt to the area around both where the player was and where they teleported to.",
                        "explicitMods": ["Deals 26-485 Lightning Damage", "36% reduced Duration "],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 0,
                        "colour": "I",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/IceShield.png?scale=1&w=1&h=1&v=ff757926265cc653abe8e2cbc151931c3",
                        "support": false,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Arctic Armour",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Cold, Spell, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["17", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Reserved",
                            "values": [
                                ["0", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cooldown Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Cast Time",
                            "values": [
                                ["0.5 sec", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["37858392/50689250", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.746872246265
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["62", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Dex",
                            "values": [
                                ["87", 0]
                            ],
                            "displayMode": 1
                        }, {
                            "name": "Int",
                            "values": [
                                ["60", 0]
                            ],
                            "displayMode": 1
                        }],
                        "secDescrText": "Summons an icy shield that protects against physical and fire damage. It drains your mana while active and at a faster rate while you are moving. When you have no mana left, the skill turns off. While active, it leaves a trail of ground ice which lasts for a short duration.",
                        "explicitMods": ["Base duration is 2.86 seconds", "34 Mana drained per second", "Additional 169 Mana drained per second while moving", "-121 Physical Damage taken when hit", "-121 Fire Damage taken when hit"],
                        "descrText": "Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 1,
                        "colour": "D",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ReduceDuration.png?scale=1&w=1&h=1&v=dfdac92cf139c63c7a63ca99ff0ee3183",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Reduced Duration",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support, Duration",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["120%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["63160896/146782704", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.430302023888
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["66", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Str",
                            "values": [
                                ["105", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["43% reduced Skill Effect Duration"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 2,
                        "colour": "S",
                        "socketedItems": []
                    }, {
                        "verified": false,
                        "w": 1,
                        "h": 1,
                        "icon": "http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/FasterCast.png?scale=1&w=1&h=1&v=f70e30cd3755d11a81103b70957e579c3",
                        "support": true,
                        "sockets": [],
                        "name": "",
                        "typeLine": "Faster Casting",
                        "identified": true,
                        "corrupted": false,
                        "lockedToCharacter": false,
                        "properties": [{
                            "name": "Support, Spell",
                            "values": [],
                            "displayMode": 0
                        }, {
                            "name": "Level",
                            "values": [
                                ["19", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Mana Multiplier",
                            "values": [
                                ["120%", 0]
                            ],
                            "displayMode": 0
                        }],
                        "additionalProperties": [{
                            "name": "Experience",
                            "values": [
                                ["71262379/146266188", 0]
                            ],
                            "displayMode": 2,
                            "progress": 0.487210154533
                        }],
                        "requirements": [{
                            "name": "Level",
                            "values": [
                                ["67", 0]
                            ],
                            "displayMode": 0
                        }, {
                            "name": "Int",
                            "values": [
                                ["106", 0]
                            ],
                            "displayMode": 1
                        }],
                        "explicitMods": ["38% increased Cast Speed"],
                        "descrText": "This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.",
                        "frameType": 4,
                        "socket": 3,
                        "colour": "I",
                        "socketedItems": []
                    }]
                }],
                "character": {
                    "class": 6,
                    "league": "Standard"
                }
            };
        });

        it('should exist and be a function', function () {
            expect(ctrl.searchInChar).toBeDefined();
            expect(angular.isFunction(ctrl.searchInChar)).toBe(true);
        });

        it('should find by item name', function () {
            expect(ctrl.searchInChar('Fire Trap')(item)).toBeTruthy();
        });
    });

    describe("search", function () {
        beforeEach(function () {
            var jalabar = {"items":[{"verified":false,"w":2,"h":3,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Armours/BodyArmours/CloakOfDefiance.png?scale=1&w=2&h=3&v=5d19fbad8ef651d06403d69b4be73ec83","support":true,"league":"Standard","sockets":[{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":1,"attr":"I"}],"name":"Cloak of Defiance","typeLine":"Lacquered Garb","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Evasion Rating","values":[["488",1]],"displayMode":0},{"name":"Energy Shield","values":[["143",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["64",0]],"displayMode":1},{"name":"Dex","values":[["76",0]],"displayMode":1},{"name":"Int","values":[["146",0]],"displayMode":1}],"explicitMods":["119% increased Evasion and Energy Shield","+95 to maximum Mana","49% increased Mana Regeneration Rate","When Hit, 10% of Damage is taken from Mana before Life","Mind Over Matter"],"flavourText":["When the throat roars,\r","As eyes weep,\r","When the hand grips hard\r","With trembling fingers,\r","When belly twists\r","Yet legs stand strong,\r","That is the work\r","Of the Defiant Heart."],"frameType":3,"x":0,"y":0,"inventoryId":"BodyArmour","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/CurseOnHit.png?scale=1&w=1&h=1&v=05db155f8ee3abfd38be282240134f573","support":true,"sockets":[],"name":"","typeLine":"Curse On Hit","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Curse, Trigger, Support","values":[],"displayMode":0},{"name":"Level","values":[["18",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["88224844/89834713",0]],"displayMode":2,"progress":0.982079684734}],"requirements":[{"name":"Level","values":[["64",0]],"displayMode":0},{"name":"Int","values":[["102",0]],"displayMode":1}],"explicitMods":["16% reduced Curse Duration","Supported Skills apply supported Curses on Hit","You cannot Cast Supported Curses"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Arc.png?scale=1&w=1&h=1&v=f26af5a0e939a9fca4a511bad42ec8953","support":false,"sockets":[],"name":"","typeLine":"Arc","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Lightning, Spell, Chaining","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["25",0]],"displayMode":0},{"name":"Cast Time","values":[["0.8 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0},{"name":"Damage Effectiveness","values":[["50%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["7036187/146938899",0]],"displayMode":2,"progress":0.0478851236403}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Int","values":[["146",0]],"displayMode":1}],"secDescrText":"An arc of lightning stretches from the caster to a targeted nearby enemy and chains on to additional targets.","explicitMods":["Deals 35-660 Lightning Damage","10% chance to Shock enemies","Chains 5 Times"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ElementalWeakness.png?scale=1&w=1&h=1&v=37d7c0d6764d631c4de927ffa72e2b193","support":false,"sockets":[],"name":"","typeLine":"Elemental Weakness","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Curse, Spell, AoE, Duration","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["55",0]],"displayMode":0},{"name":"Cast Time","values":[["0.5 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["13363670/146938899",0]],"displayMode":2,"progress":0.0909471213818}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Int","values":[["146",0]],"displayMode":1}],"secDescrText":"Curses all targets in an area, making them less resistant to elemental damage.","explicitMods":["Base duration is 11.88 seconds","90% increased Area of Effect radius","Cursed enemies lose 38% Elemental Resistances"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Flammability.png?scale=1&w=1&h=1&v=6fbf7cfcddcc267b1f44fb84314dbe043","support":false,"sockets":[],"name":"","typeLine":"Flammability","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Curse, Spell, AoE, Duration","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["55",0]],"displayMode":0},{"name":"Cast Time","values":[["0.5 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["86769289/146938899",0]],"displayMode":2,"progress":0.590512752533}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["64",0]],"displayMode":1},{"name":"Int","values":[["92",0]],"displayMode":1}],"secDescrText":"Curses all targets in an area, making them less resistant to fire damage and giving them a chance to be ignited by fire damage.","explicitMods":["Base duration is 11.88 seconds","90% increased Area of Effect radius","Cursed enemies lose 38% Fire Resistance","Cursed enemies have +13% chance to be Ignited by Fire Damage"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":3,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Vulnerability.png?scale=1&w=1&h=1&v=d5e4ae8c4fa14e3b4c870e0caa0177513","support":false,"sockets":[],"name":"","typeLine":"Vulnerability","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Curse, Spell, AoE, Duration","values":[],"displayMode":0},{"name":"Level","values":[["18",0]],"displayMode":0},{"name":"Mana Cost","values":[["54",0]],"displayMode":0},{"name":"Cast Time","values":[["0.5 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["4141972/89834713",0]],"displayMode":2,"progress":0.0461065880954}],"requirements":[{"name":"Level","values":[["64",0]],"displayMode":0},{"name":"Int","values":[["142",0]],"displayMode":1}],"secDescrText":"Curses all targets in an area, making them take increased physical damage and degeneration.","explicitMods":["Base duration is 11.77 seconds","85% increased Area of Effect radius","Cursed enemies take 28% increased Physical damage","Cursed enemies take 33% increased damage from Damage Over Time effects"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":4,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ConversionTrap.png?scale=1&w=1&h=1&v=4b89517e2d00d3abc64bd30dd65c31813","support":false,"sockets":[],"name":"","typeLine":"Conversion Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Trap, Spell, Duration","values":[],"displayMode":0},{"name":"Level","values":[["17",0]],"displayMode":0},{"name":"Mana Cost","values":[["35",0]],"displayMode":0},{"name":"Cooldown Time","values":[["8 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Quality","values":[["+8%",1]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["8553351/50550118",0]],"displayMode":2,"progress":0.169205352664}],"requirements":[{"name":"Level","values":[["62",0]],"displayMode":0},{"name":"Dex","values":[["60",0]],"displayMode":1},{"name":"Int","values":[["87",0]],"displayMode":1}],"secDescrText":"Throws a trap that, when triggered by an enemy, converts that enemy to your side for a short duration. Does not affect unique monsters or players.","explicitMods":["Trap lasts 30 seconds","Base duration is 9.30 seconds","6% increased Duration "],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":5,"colour":"I","socketedItems":[]}]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Rings/Ring3Unique.png?scale=1&w=1&h=1&v=689dcd2e6f55af30ca0fa8e1f795e8073","support":true,"league":"Standard","sockets":[],"name":"Doedre's Damning","typeLine":"Paua Ring","identified":true,"corrupted":true,"lockedToCharacter":false,"implicitMods":["+25 to maximum Mana"],"explicitMods":["+10 to Intelligence","+5% to all Elemental Resistances","+5 Mana Gained on Kill","Enemies can have 1 additional Curse"],"flavourText":["Where her mouth should have been\r","there was only a whirling, black void."],"frameType":3,"x":0,"y":0,"inventoryId":"Ring2","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png?scale=1&stackSize=40&w=1&h=1&v=333b8b5e28b73c62972fc66e7634c5c83","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Orb of Transmutation","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Stack Size","values":[["40/40",0]],"displayMode":0}],"explicitMods":["Upgrades a normal item to a magic item"],"descrText":"Right click this item then left click a normal item to apply it.\nShift click to unstack.","frameType":5,"x":2,"y":4,"inventoryId":"MainInventory","socketedItems":[]},{"verified":false,"w":1,"h":2,"icon":"http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6Mjk6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9saWZlZmxhc2s4Ijtz/OjI6InNwIjtkOjAuNjA4/NTE5MjY5Nzc2ODc2MzE0/ODE0NzI4NjMwMTUzNjk1/MTIxNDA3NTA4ODUwMDk3/NjU2MjU7czo1OiJsZXZl/bCI7aToxO31pOjE7aTo0/O2k6MDtpOjk7fQ,,/2244380be0/Item.png","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Sapping Hallowed Life Flask of Grounding","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Recovers %0 Life over %1 Seconds","values":[["3936",1],["8",0]],"displayMode":3},{"name":"Consumes %0 of %1 Charges on use","values":[["10",0],["30",0]],"displayMode":3},{"name":"Currently has %0 Charges","values":[["30",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["53",0]],"displayMode":0}],"explicitMods":["60% increased Life Recovered","Removes 10% of Life Recovered from Mana when used","Immunity to Shock during flask effect","Removes Shock on use"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":1,"y":0,"inventoryId":"Flask","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyIdentification.png?scale=1&stackSize=13&w=1&h=1&v=1b9b38c45be95c59d8900f91b2afd58b3","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Scroll of Wisdom","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Stack Size","values":[["13/40",0]],"displayMode":0}],"explicitMods":["Identifies an item"],"descrText":"Right click this item then left click an unidentified item to apply it.\nShift click to unstack.","frameType":5,"x":1,"y":4,"inventoryId":"MainInventory","socketedItems":[]},{"verified":false,"w":2,"h":2,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Boots/BootsStr3.png?scale=1&w=2&h=2&v=98f1f6d1137161abc1ef30ee82dadc623","support":true,"league":"Standard","sockets":[{"group":0,"attr":"S"},{"group":0,"attr":"S"},{"group":0,"attr":"S"},{"group":0,"attr":"S"}],"name":"Skull Track","typeLine":"Ancient Greaves","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Armour","values":[["211",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1},{"name":"Int","values":[["28",0]],"displayMode":1}],"explicitMods":["40% increased Armour","+33% to Fire Resistance","+32% to Lightning Resistance","30% increased Movement Speed","13% increased Stun Recovery"],"craftedMods":["+45 to maximum Life"],"frameType":2,"x":0,"y":0,"inventoryId":"Boots","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/CastOnDmgTaken.png?scale=1&w=1&h=1&v=e03ceb1a31e457dbfe30e968c76fb0d63","support":true,"sockets":[],"name":"","typeLine":"Cast when Damage Taken","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support, Spell, Trigger","values":[],"displayMode":0},{"name":"Level","values":[["5",0]],"displayMode":0},{"name":"Cooldown Time","values":[["0.25 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["431204/431204",0]],"displayMode":2,"progress":1}],"requirements":[{"name":"Level","values":[["39",0]],"displayMode":0},{"name":"Str","values":[["40",0]],"displayMode":1},{"name":"Int","values":[["28",0]],"displayMode":1}],"nextLevelRequirements":[{"name":"Level","values":[["41",0]],"displayMode":0},{"name":"Str","values":[["42",0]],"displayMode":1},{"name":"Int","values":[["29",0]],"displayMode":1}],"explicitMods":["This Gem can only Support Skill Gems requiring Level 39 or lower","54% less Damage","You cannot Cast Supported Spells directly","Casts Supported Spells when you take a total of 700 Damage"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"S","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/EnduringCry.png?scale=1&w=1&h=1&v=0d2d8a9713adc2828f4626110eaee3ef3","support":false,"sockets":[],"name":"","typeLine":"Enduring Cry","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Spell, AoE","values":[],"displayMode":0},{"name":"Level","values":[["7",0]],"displayMode":0},{"name":"Mana Cost","values":[["19",0]],"displayMode":0},{"name":"Cooldown Time","values":[["4 sec",0]],"displayMode":0},{"name":"Cast Time","values":[["0.5 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["554379/554379",0]],"displayMode":2,"progress":1}],"requirements":[{"name":"Level","values":[["37",0]],"displayMode":0},{"name":"Str","values":[["85",0]],"displayMode":1}],"nextLevelRequirements":[{"name":"Level","values":[["40",0]],"displayMode":0},{"name":"Str","values":[["92",0]],"displayMode":1}],"secDescrText":"Performs a warcry, adding endurance charges proportional to the number of surrounding enemies. Taunts all nearby enemies to attack the caster.","explicitMods":["21 Endurance Charges granted per one hundred nearby enemies"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"S","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedDuration.png?scale=1&w=1&h=1&v=14b3a91933f0b921d1b573358e31f7683","support":true,"sockets":[],"name":"","typeLine":"Increased Duration","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support, Duration","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["150%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["32046176/146782704",0]],"displayMode":2,"progress":0.218323931098}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1}],"explicitMods":["63% increased Skill Effect Duration"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"S","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/ImmortalCall.png?scale=1&w=1&h=1&v=3843ced383e5dca18e076e57e9f678193","support":false,"sockets":[],"name":"","typeLine":"Immortal Call","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Spell, Duration","values":[],"displayMode":0},{"name":"Level","values":[["6",0]],"displayMode":0},{"name":"Mana Cost","values":[["22",0]],"displayMode":0},{"name":"Cooldown Time","values":[["0.5 sec",0]],"displayMode":0},{"name":"Cast Time","values":[["0.85 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["388734/388734",0]],"displayMode":2,"progress":1}],"requirements":[{"name":"Level","values":[["38",0]],"displayMode":0},{"name":"Str","values":[["88",0]],"displayMode":1}],"nextLevelRequirements":[{"name":"Level","values":[["40",0]],"displayMode":0},{"name":"Str","values":[["92",0]],"displayMode":1}],"secDescrText":"Discharges Endurance Charges, making the character invulnerable to physical damage for a short time, proportional to how many endurance charges were expended.","explicitMods":["Base duration is 0.25 seconds","Additional 0.56 Seconds Base Duration per Endurance Charge"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":3,"colour":"S","socketedItems":[]}]},{"verified":false,"w":2,"h":4,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/TwoHandWeapons/Staves/Staff4unique.png?scale=1&w=2&h=4&v=bd795d676bbd873ceeb39a71fcb6ddc93","support":true,"league":"Standard","sockets":[{"group":0,"attr":"S"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"D"},{"group":1,"attr":"S"}],"name":"The Searing Touch","typeLine":"Long Staff","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Staff","values":[],"displayMode":0},{"name":"Physical Damage","values":[["20-33",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["6.5%",0]],"displayMode":0},{"name":"Attacks per Second","values":[["1.25",0]],"displayMode":0}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["106",0]],"displayMode":1}],"implicitMods":["12% Chance to Block"],"explicitMods":["+2 to Level of Socketed Fire Gems","47% increased Spell Damage","26% increased Fire Damage","10% increased Cast Speed","70% increased Burning Damage"],"cosmeticMods":["Has Infernal Weapon Effect"],"flavourText":["Burn to cinders, scar and maim,\r","Rule a world, bathed in flame."],"frameType":3,"x":0,"y":0,"inventoryId":"Weapon","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/FirePenetration.png?scale=1&w=1&h=1&v=71763309c9c93e038fdf49738e121e443","support":true,"sockets":[],"name":"","typeLine":"Fire Penetration","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Support","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["140%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["92632839/146782704",0]],"displayMode":2,"progress":0.631088256836}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1}],"explicitMods":["Penetrates 34% Fire Resistance"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"S","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ChancetoIgnite.png?scale=1&w=1&h=1&v=edeeb9cb97280655b5a3be33a3d3ca573","support":true,"sockets":[],"name":"","typeLine":"Chance to Ignite","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Support","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["110%",0]],"displayMode":0},{"name":"Quality","values":[["+12%",1]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["99728915/146938899",0]],"displayMode":2,"progress":0.678710103035}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Int","values":[["105",0]],"displayMode":1}],"explicitMods":["18% increased Ignite Duration on Enemies","43% chance to Ignite"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ElementalProliferation.png?scale=1&w=1&h=1&v=e7ee8a5ac2a22cbec33c7eb55ad82cf13","support":true,"sockets":[],"name":"","typeLine":"Elemental Proliferation","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Cold, Fire, Lightning, Support, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["140%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["93320670/146782704",0]],"displayMode":2,"progress":0.635774314404}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Int","values":[["105",0]],"displayMode":1}],"explicitMods":["Elemental Status Effects caused by supported Skills spread to other enemies","Radius: 30"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedAOE.png?scale=1&w=1&h=1&v=f0accbe4733628f443cd691574b3f6043","support":true,"sockets":[],"name":"","typeLine":"Increased Area of Effect","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["150%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["93727493/146266188",0]],"displayMode":2,"progress":0.640800833702}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Int","values":[["106",0]],"displayMode":1}],"explicitMods":["32% increased Area of Effect radius"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":3,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0},{"name":"Quality","values":[["+20%",1]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["73247075/147034823",0]],"displayMode":2,"progress":0.498161405325}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds","30% increased Burning Damage"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":4,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/IncreasedBurnDuration.png?scale=1&w=1&h=1&v=87d793d532f58b25dfe364b61093f55e3","support":true,"sockets":[],"name":"","typeLine":"Increased Burning Damage","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Support","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["120%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["92662920/146266188",0]],"displayMode":2,"progress":0.633522450924}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Str","values":[["67",0]],"displayMode":1},{"name":"Int","values":[["46",0]],"displayMode":1}],"explicitMods":["58% increased Burning Damage"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":5,"colour":"S","socketedItems":[]}]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Amulets/TurquoiseAmulet.png?scale=1&w=1&h=1&v=484a8eac4316c65308deea4efcfbb6213","support":true,"league":"Standard","sockets":[],"name":"Viper Charm","typeLine":"Turquoise Amulet","identified":true,"corrupted":false,"lockedToCharacter":false,"requirements":[{"name":"Level","values":[["35",0]],"displayMode":0}],"implicitMods":["+21 to Dexterity and Intelligence"],"explicitMods":["Adds 1-2 Physical Damage","33% increased Global Critical Strike Multiplier","+72 to maximum Life","+26% to Cold Resistance","+27% to Lightning Resistance"],"frameType":2,"x":0,"y":0,"inventoryId":"Amulet","socketedItems":[]},{"verified":false,"w":1,"h":2,"icon":"http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MjU6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9zcHJpbnQiO3M6Mjoi/c3AiO2Q6MC42MDg1MTky/Njk3NzY4NzYzMTQ4MTQ3/Mjg2MzAxNTM2OTUxMjE0/MDc1MDg4NTAwOTc2NTYy/NTtzOjU6ImxldmVsIjtp/OjE7fWk6MTtpOjQ7aTow/O2k6OTt9/6446837133/Item.png","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Avenger's Quicksilver Flask of Adrenaline","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Lasts %0 Seconds","values":[["6",1]],"displayMode":3},{"name":"Consumes %0 of %1 Charges on use","values":[["20",0],["50",0]],"displayMode":3},{"name":"Currently has %0 Charges","values":[["50",0]],"displayMode":3},{"name":"","values":[["40% increased Movement Speed",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["9",0]],"displayMode":0}],"explicitMods":["25% increased Movement Speed during flask effect","Recharges 3 Charges when you take a Critical Strike"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":4,"y":0,"inventoryId":"Flask","socketedItems":[]},{"verified":false,"w":1,"h":2,"icon":"http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MjY6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9ncmFuaXRlIjtzOjI6/InNwIjtkOjAuNjA4NTE5/MjY5Nzc2ODc2MzE0ODE0/NzI4NjMwMTUzNjk1MTIx/NDA3NTA4ODUwMDk3NjU2/MjU7czo1OiJsZXZlbCI7/aToxO31pOjE7aTo0O2k6/MDtpOjk7fQ,,/397bc7d897/Item.png","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Avenger's Granite Flask of Heat","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Lasts %0 Seconds","values":[["4",0]],"displayMode":3},{"name":"Consumes %0 of %1 Charges on use","values":[["30",0],["60",0]],"displayMode":3},{"name":"Currently has %0 Charges","values":[["60",0]],"displayMode":3},{"name":"","values":[["+3000 to Armour",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["27",0]],"displayMode":0}],"explicitMods":["Immunity to Freeze and Chill during flask effect","Removes Freeze and Chill on use","Recharges 3 Charges when you take a Critical Strike"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":3,"y":0,"inventoryId":"Flask","socketedItems":[]},{"verified":false,"w":1,"h":2,"icon":"http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MzA6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9saWZlZmxhc2sxMCI7/czoyOiJzcCI7ZDowLjYw/ODUxOTI2OTc3Njg3NjMx/NDgxNDcyODYzMDE1MzY5/NTEyMTQwNzUwODg1MDA5/NzY1NjI1O3M6NToibGV2/ZWwiO2k6MTt9aToxO2k6/NDtpOjA7aTo5O30,/3afd394f30/Item.png","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Sapping Divine Life Flask of Dousing","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Recovers %0 Life over %1 Seconds","values":[["4032",1],["7",0]],"displayMode":3},{"name":"Consumes %0 of %1 Charges on use","values":[["15",0],["45",0]],"displayMode":3},{"name":"Currently has %0 Charges","values":[["45",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["65",0]],"displayMode":0}],"explicitMods":["40% increased Life Recovered","Removes 10% of Life Recovered from Mana when used","Immunity to Ignite during flask effect","Removes Burning on use"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":0,"y":0,"inventoryId":"Flask","socketedItems":[]},{"verified":false,"w":2,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Belts/Belt3.png?scale=1&w=2&h=1&v=a559821037f54c94dae053b90bcea3633","support":true,"league":"Standard","sockets":[],"name":"Entropy Shackle","typeLine":"Leather Belt","identified":true,"corrupted":false,"lockedToCharacter":false,"requirements":[{"name":"Level","values":[["51",0]],"displayMode":0}],"implicitMods":["+34 to maximum Life"],"explicitMods":["+28 to Strength","+295 to Armour","+98 to maximum Life","+21% to Cold Resistance"],"craftedMods":["18% increased Trap Damage","14% increased Mine Damage"],"frameType":2,"x":0,"y":0,"inventoryId":"Belt","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png?scale=1&stackSize=13&w=1&h=1&v=97e63b85807f2419f4208482fd0b48593","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Orb of Augmentation","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Stack Size","values":[["13/30",0]],"displayMode":0}],"explicitMods":["Enchants a magic item with a new random property"],"descrText":"Right click this item then left click a magic item to apply it. Magic items can have up to two random properties.\nShift click to unstack.","frameType":5,"x":3,"y":4,"inventoryId":"MainInventory","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyUpgradeRandomly.png?scale=1&stackSize=1&w=1&h=1&v=e4049939b9cd61291562f94364ee0f003","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Orb of Chance","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Stack Size","values":[["1/20",0]],"displayMode":0}],"explicitMods":["Upgrades a normal item to a random rarity"],"descrText":"Right click this item then left click a normal item to apply it.","frameType":5,"x":4,"y":4,"inventoryId":"MainInventory","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Currency/CurrencyPortal.png?scale=1&stackSize=39&w=1&h=1&v=728696ea10d4fb1e789039debc5d8c3c3","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Portal Scroll","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Stack Size","values":[["39/40",0]],"displayMode":0}],"explicitMods":["Creates a portal to town"],"descrText":"Right click on this item to use it.\nShift click to unstack.","frameType":5,"x":0,"y":4,"inventoryId":"MainInventory","socketedItems":[]},{"verified":false,"w":1,"h":3,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/OneHandWeapons/OneHandSwords/OneHandSword3.png?scale=1&w=1&h=3&v=0bf4b174a0c80b2fd80a12026ed04a053","support":true,"league":"Standard","sockets":[{"group":0,"attr":"D"},{"group":1,"attr":"D"},{"group":2,"attr":"D"}],"name":"","typeLine":"Corsair Sword","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"One Handed Sword","values":[],"displayMode":0},{"name":"Physical Damage","values":[["15-59",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0},{"name":"Attacks per Second","values":[["1.65",0]],"displayMode":0}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["81",0]],"displayMode":1},{"name":"Dex","values":[["117",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"implicitMods":["18% increased Accuracy Rating"],"frameType":0,"x":0,"y":0,"inventoryId":"Offhand2","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0},{"name":"Quality","values":[["+14%",1]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["27588939/147034823",0]],"displayMode":2,"progress":0.187635421753}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds","21% increased Burning Damage"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0},{"name":"Quality","values":[["+8%",1]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["26620498/147034823",0]],"displayMode":2,"progress":0.181048944592}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds","12% increased Burning Damage"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["78861313/147034823",0]],"displayMode":2,"progress":0.536344468594}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"D","socketedItems":[]}]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Rings/TopazSapphire.png?scale=1&w=1&h=1&v=b7334698bf04b28f755467f256a3276b3","support":true,"league":"Standard","sockets":[],"name":"Havoc Nail","typeLine":"Two-Stone Ring","identified":true,"corrupted":false,"lockedToCharacter":false,"requirements":[{"name":"Level","values":[["48",0]],"displayMode":0}],"implicitMods":["+16% to Cold and Lightning Resistances"],"explicitMods":["+33 to maximum Mana","+7 to maximum Energy Shield","+31% to Fire Resistance","+38% to Lightning Resistance"],"craftedMods":["+22% to Cold Resistance"],"frameType":2,"x":0,"y":0,"inventoryId":"Ring","socketedItems":[]},{"verified":false,"w":2,"h":2,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Weapons/OneHandWeapons/Claws/Claw4.png?scale=1&w=2&h=2&v=9975238ccd62fc6440af5a30542276ad3","support":true,"league":"Standard","sockets":[{"group":0,"attr":"D"},{"group":0,"attr":"D"},{"group":1,"attr":"D"}],"name":"","typeLine":"Tiger's Paw","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Claw","values":[],"displayMode":0},{"name":"Physical Damage","values":[["22-41",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["6.2%",0]],"displayMode":0},{"name":"Attacks per Second","values":[["1.50",0]],"displayMode":0}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"implicitMods":["+15 Life gained for each Enemy hit by your Attacks"],"frameType":0,"x":0,"y":0,"inventoryId":"Weapon2","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["42389421/147034823",0]],"displayMode":2,"progress":0.288295120001}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["33386125/147034823",0]],"displayMode":2,"progress":0.22706271708}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/FireTrap.png?scale=1&w=1&h=1&v=381ff7003b90e3fbe21228a5c47267f53","support":false,"sockets":[],"name":"","typeLine":"Fire Trap","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Fire, Trap, Spell, Duration, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["34",0]],"displayMode":0},{"name":"Cooldown Time","values":[["3 sec (3 uses)",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["28187301/147034823",0]],"displayMode":2,"progress":0.191704928875}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Dex","values":[["92",0]],"displayMode":1},{"name":"Int","values":[["64",0]],"displayMode":1}],"secDescrText":"Throws a trap that explodes when triggered, dealing fire damage to surrounding enemies and leaving an area of burning ground that damages enemies who walk through it.","explicitMods":["Deals 339-509 Fire Damage","Trap lasts 30 seconds","Deals 268 Base Fire Damage per second","Base duration is 8.00 seconds"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"D","socketedItems":[]}]},{"verified":false,"w":1,"h":2,"icon":"http://webcdn.pathofexile.com/gen/image/YTozOntpOjI7YTozOntz/OjE6ImYiO3M6MzA6IkFy/dC8yREl0ZW1zL0ZsYXNr/cy9tYW5hZmxhc2sxMCI7/czoyOiJzcCI7ZDowLjYw/ODUxOTI2OTc3Njg3NjMx/NDgxNDcyODYzMDE1MzY5/NTEyMTQwNzUwODg1MDA5/NzY1NjI1O3M6NToibGV2/ZWwiO2k6MTt9aToxO2k6/NDtpOjA7aTo5O30,/2e50001066/Item.png","support":true,"league":"Standard","sockets":[],"name":"","typeLine":"Saturated Divine Mana Flask of Staunching","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Recovers %0 Mana over %1 Seconds","values":[["1440",1],["7.5",1]],"displayMode":3},{"name":"Consumes %0 of %1 Charges on use","values":[["15",0],["45",0]],"displayMode":3},{"name":"Currently has %0 Charges","values":[["45",0]],"displayMode":3}],"requirements":[{"name":"Level","values":[["65",0]],"displayMode":0}],"explicitMods":["50% increased Amount Recovered","33% reduced Recovery Speed","Immunity to Bleeding during flask effect","Removes Bleeding on use"],"descrText":"Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.","frameType":1,"x":2,"y":0,"inventoryId":"Flask","socketedItems":[]},{"verified":false,"w":2,"h":2,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Helmets/HelmetInt9.png?scale=1&w=2&h=2&v=3aeebe40b6db3abe7e4d92e3402db35e3","support":true,"league":"Standard","sockets":[{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"I"},{"group":0,"attr":"S"}],"name":"Vortex Guardian","typeLine":"Solaris Circlet","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Energy Shield","values":[["124",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Str","values":[["106",0]],"displayMode":1},{"name":"Int","values":[["148",0]],"displayMode":1}],"explicitMods":["45% increased Energy Shield","19% increased Rarity of Items found","+23% to Fire Resistance","+26% to Lightning Resistance","+12% to Chaos Resistance","14% increased Stun Recovery"],"frameType":2,"x":0,"y":0,"inventoryId":"Helm","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Clarity.png?scale=1&w=1&h=1&v=f609c128e5ee053e773b391625757d6a3","support":false,"sockets":[],"name":"","typeLine":"Clarity","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Aura, Spell, AoE","values":[],"displayMode":0},{"name":"Level","values":[["18",0]],"displayMode":0},{"name":"Mana Reserved","values":[["472",0]],"displayMode":0},{"name":"Cooldown Time","values":[["0.5 sec",0]],"displayMode":0},{"name":"Cast Time","values":[["1.2 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["23983999/90043412",0]],"displayMode":2,"progress":0.26636043191}],"requirements":[{"name":"Level","values":[["64",0]],"displayMode":0},{"name":"Int","values":[["142",0]],"displayMode":1}],"secDescrText":"Casts an aura that grants mana regeneration to you and your allies.","explicitMods":["38% increased Area of Effect radius","You and nearby allies regenerate 22 Mana per second"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Discipline.png?scale=1&w=1&h=1&v=0f0cb9dd5e43499dd6f851958e9808f23","support":false,"sockets":[],"name":"","typeLine":"Discipline","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Aura, Spell, AoE","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Reserved","values":[["60%",0]],"displayMode":0},{"name":"Cooldown Time","values":[["0.5 sec",0]],"displayMode":0},{"name":"Cast Time","values":[["1.2 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["53739357/146266188",0]],"displayMode":2,"progress":0.367407917976}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Int","values":[["148",0]],"displayMode":1}],"secDescrText":"Casts an aura that grants energy shield to you and your allies.","explicitMods":["39% increased Area of Effect radius","You and nearby allies gain 303 additional Energy Shield"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ReducedManaCost.png?scale=1&w=1&h=1&v=d8838346a48ae2a78920f10d5a9c2d233","support":true,"sockets":[],"name":"","typeLine":"Reduced Mana","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["72%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["91184497/146266188",0]],"displayMode":2,"progress":0.623414695263}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Str","values":[["106",0]],"displayMode":1}],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":3,"colour":"S","socketedItems":[]}]},{"verified":false,"w":2,"h":2,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Armours/Gloves/Aurseize.png?scale=1&w=2&h=2&v=7d0390d691ffdb017894099d9f1390163","support":true,"league":"Standard","sockets":[{"group":0,"attr":"I"},{"group":0,"attr":"D"},{"group":0,"attr":"S"},{"group":0,"attr":"I"}],"name":"Aurseize","typeLine":"Steelscale Gauntlets","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Quality","values":[["+20%",1]],"displayMode":0},{"name":"Armour","values":[["93",1]],"displayMode":0},{"name":"Evasion Rating","values":[["93",1]],"displayMode":0}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1},{"name":"Dex","values":[["90",0]],"displayMode":1},{"name":"Int","values":[["146",0]],"displayMode":1}],"explicitMods":["44% increased Armour and Evasion","45% increased Rarity of Items found","+15% to all Elemental Resistances","5% reduced Movement Speed"],"flavourText":["Wealth is not to be borne lightly."],"frameType":3,"x":0,"y":0,"inventoryId":"Gloves","socketedItems":[{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/LightningWarp.png?scale=1&w=1&h=1&v=227de2fadd0ff1c98d6e3edcfacac9473","support":false,"sockets":[],"name":"","typeLine":"Lightning Warp","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Lightning, Spell, AoE, Duration, Movement","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Cost","values":[["41",0]],"displayMode":0},{"name":"Cast Time","values":[["1 sec",0]],"displayMode":0},{"name":"Critical Strike Chance","values":[["5%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["92915859/146782704",0]],"displayMode":2,"progress":0.63301640749}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Int","values":[["146",0]],"displayMode":1}],"secDescrText":"Casts a delayed teleport to a target destination. When the teleport occurs, lightning damage is dealt to the area around both where the player was and where they teleported to.","explicitMods":["Deals 26-485 Lightning Damage","36% reduced Duration "],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":0,"colour":"I","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/IceShield.png?scale=1&w=1&h=1&v=ff757926265cc653abe8e2cbc151931c3","support":false,"sockets":[],"name":"","typeLine":"Arctic Armour","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Cold, Spell, Duration","values":[],"displayMode":0},{"name":"Level","values":[["18",0]],"displayMode":0},{"name":"Mana Reserved","values":[["0",0]],"displayMode":0},{"name":"Cooldown Time","values":[["0.5 sec",0]],"displayMode":0},{"name":"Cast Time","values":[["0.5 sec",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["14533920/90043412",0]],"displayMode":2,"progress":0.161410152912}],"requirements":[{"name":"Level","values":[["64",0]],"displayMode":0},{"name":"Dex","values":[["90",0]],"displayMode":1},{"name":"Int","values":[["62",0]],"displayMode":1}],"secDescrText":"Summons an icy shield that protects against physical and fire damage. It drains your mana while active and at a faster rate while you are moving. When you have no mana left, the skill turns off. While active, it leaves a trail of ground ice which lasts for a short duration.","explicitMods":["Base duration is 2.97 seconds","35 Mana drained per second","Additional 176 Mana drained per second while moving","-133 Physical Damage taken when hit","-133 Fire Damage taken when hit"],"descrText":"Place into an item socket of the right colour to gain this skill. Right click to remove from a socket.","frameType":4,"socket":1,"colour":"D","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/ReduceDuration.png?scale=1&w=1&h=1&v=dfdac92cf139c63c7a63ca99ff0ee3183","support":true,"sockets":[],"name":"","typeLine":"Reduced Duration","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support, Duration","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["120%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["90545448/146782704",0]],"displayMode":2,"progress":0.616867303848}],"requirements":[{"name":"Level","values":[["66",0]],"displayMode":0},{"name":"Str","values":[["105",0]],"displayMode":1}],"explicitMods":["43% reduced Skill Effect Duration"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":2,"colour":"S","socketedItems":[]},{"verified":false,"w":1,"h":1,"icon":"http://webcdn.pathofexile.com/image/Art/2DItems/Gems/Support/FasterCast.png?scale=1&w=1&h=1&v=f70e30cd3755d11a81103b70957e579c3","support":true,"sockets":[],"name":"","typeLine":"Faster Casting","identified":true,"corrupted":false,"lockedToCharacter":false,"properties":[{"name":"Support, Spell","values":[],"displayMode":0},{"name":"Level","values":[["19",0]],"displayMode":0},{"name":"Mana Multiplier","values":[["120%",0]],"displayMode":0}],"additionalProperties":[{"name":"Experience","values":[["98646931/146266188",0]],"displayMode":2,"progress":0.674434244633}],"requirements":[{"name":"Level","values":[["67",0]],"displayMode":0},{"name":"Int","values":[["106",0]],"displayMode":1}],"explicitMods":["38% increased Cast Speed"],"descrText":"This is a Support Gem. It does not grant a bonus to your character, but to skills in sockets connected to it. Place into an item socket connected to a socket containing the Active Skill Gem you wish to augment. Right click to remove from a socket.","frameType":4,"socket":3,"colour":"I","socketedItems":[]}]}],"character":{"class":6,"league":"Standard"}};
            poemodel.model.chars = [{items:jalabar.items}];
            ctrl.search();
        });

        it("should be a function", function () {
            expect(ctrl.search).toBeDefined();
            expect(angular.isFunction(ctrl.search)).toBe(true);
        });

        it("should item be an Item", function () {
            var item;
            ctrl.search();
            item = ctrl.result[0];

            expect(item).toBeDefined();
            expect(item.getName).toBeDefined();
            expect(angular.isFunction(item.getName)).toBe(true);
        });

        it("should deliver 50 items", function () {
            var itemList;

            ctrl.search();
            itemList = ctrl.result;

            expect(itemList.length).toBe(50);
            expect(itemList[0].name).toBe('Cloak of Defiance');
            expect(itemList[1].typeLine).toBe('Curse On Hit');
            expect(itemList[2].typeLine).toBe('Arc');
            expect(itemList[3].typeLine).toBe('Elemental Weakness');
            expect(itemList[47].typeLine).toBe('Arctic Armour');
            expect(itemList[48].typeLine).toBe('Reduced Duration');
            expect(itemList[49].typeLine).toBe('Faster Casting');
        });
    });

    describe("byName", function () {
        it("should be a function", function () {
            expect(ctrl.byName).toBeDefined();
            expect(angular.isFunction(ctrl.byName)).toBe(true);
        });

        it("should be a function", function () {
            expect(ctrl.byName()).toBeDefined();
            expect(angular.isFunction(ctrl.byName())).toBe(true);
        });

        it('should return true if name fits', function () {
            var byNameFunc;
            var gem = new Item({"typeLine": "Fire Trap"});
            var item = new Item({"name": "Fire Cloak"});
            var result;

            byNameFunc = ctrl.byName('Fire Trap');
            result = byNameFunc(gem);
            expect(result).toBe(true);

            byNameFunc = ctrl.byName('Fire Cloak');
            result = byNameFunc(item);
            expect(result).toBe(true);
        });

        it('should return true if part of name fits, case insensitive', function () {
            var byNameFunc = ctrl.byName('fire');
            var gem = new Item({"typeLine": "Fire Trap"});
            var item = new Item({"name": "Fire Cloak"});
            var result = byNameFunc(gem);
            expect(result).toBe(true);

            result = byNameFunc(item);
            expect(result).toBe(true);
        });

        it('should return false if name doesnt fit', function () {
            var byNameFunc = ctrl.byName('Hansi');
            var gem = new Item({"typeLine": "Fire Trap"});
            var item = new Item({"name": "Fire Cloak"});
            var result;

            result = byNameFunc(gem);
            expect(result).toBe(false);

            result = byNameFunc(item);
            expect(result).toBe(false);
        });
    });
});

