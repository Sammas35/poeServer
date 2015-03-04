'use strict';

describe('stashCtrl', function () {
    var stashCtrl;

    beforeEach(module('poeServer.components.stash'));
    beforeEach(module('poeServer.core.data'));

    beforeEach(inject(function ($controller) {
        stashCtrl = $controller('stashCtrl');
    }));

    it("should exist", function () {
        expect(stashCtrl).toBeDefined();
    });
});