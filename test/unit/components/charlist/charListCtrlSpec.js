'use strict';

describe('charListCtrl', function () {
    var ctrl;

    beforeEach(module('poeServer'));
    beforeEach(inject(function ($controller, $window) {
        var _ = $window._;
        ctrl = $controller('charListCtrl', {'_': _});
    }));
});
