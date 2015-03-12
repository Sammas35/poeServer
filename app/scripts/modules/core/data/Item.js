function Item(item, charname, itemname) {
    var theItem = this;
    angular.extend(theItem, item);

    theItem.charname = charname;
    theItem.itemname = itemname;
    theItem.socketCount = theItem.sockets ? theItem.sockets.length : 0;
    theItem.getName = getName;
    theItem.getQuality = getQuality;
    theItem.getDefences = getDefences;
    theItem.getRequirements = getRequirements;
    theItem.getImplicit = getImplicit;
    theItem.getExplicit = getExplicit;
    theItem.getCorrupted = getCorrupted;
    theItem.getLevel = getLevel;

    function getName(){
        return theItem.name || theItem.typeLine;
    }

    function findPropertyValue(properties, name) {
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
    }


    function getQuality() {
        var quality = findPropertyValue(theItem.properties, 'Quality');

        if (quality) {
            return quality;
        }

        return '';
    }

    function getDefences() {
        var result = [];
        var energyShield = findPropertyValue(theItem.properties, 'Energy Shield');
        var evasionRating = findPropertyValue(theItem.properties, 'Evasion Rating');
        var armour = findPropertyValue(theItem.properties, 'Armour');

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
    }

    function getRequirements() {
        var result = [];

        angular.forEach(theItem.requirements, function (n) {
            result.push(n.name + ' ' + n.values[0][0]);
        });

        return result;
    }

    function getImplicit() {
        return theItem.implicitMods || [];
    }

    function getExplicit() {
        return theItem.explicitMods || [];
    }

    function getCorrupted() {
        return theItem.corrupted ? 'Corrupted' : '';
    }

    function getLevel() {
        return findPropertyValue(theItem.properties, 'Level') || '';
    }
}
