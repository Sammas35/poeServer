'use strict';

describe('stashCtrl', function () {
    var stashCtrl;

    beforeEach(module('poeServer'));

    beforeEach(inject(function ($controller) {
        stashCtrl = $controller('stashCtrl');
    }));

    it("should exist", function () {
        expect(stashCtrl).toBeDefined();
    });
});