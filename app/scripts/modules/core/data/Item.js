function Item(item, charname, itemname) {
    var theItem = this;
    angular.extend(theItem, item);

    theItem.charname = charname;
    theItem.itemname = itemname;
    theItem.socketCount = theItem.sockets ? theItem.sockets.length : 0;
    theItem.getName = getName;

    function getName(){
        return theItem.name || theItem.typeLine;
    };
}
