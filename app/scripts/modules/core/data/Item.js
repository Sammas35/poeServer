function Item(item) {
    var theItem = this;
    angular.extend(theItem, item);

    theItem.getName = getName;

    function getName(){
        return theItem.name || theItem.typeLine;
    };
}
