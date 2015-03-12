'use strict';

describe('lowerEqual', function () {
    var filter;
    beforeEach(module('poeServer'));

    beforeEach(inject(function (lowerEqualFilter) {
        filter = lowerEqualFilter;
    }));

    it("should be a function", function () {
        expect(filter).toBeDefined();
        expect(angular.isFunction(filter)).toBe(true);
    });

    it("should compare to a given field", function () {
        var item = {sockCount : 4};

        expect(filter([item], 'sockCount').length).toBe(1);
        expect(filter([item], 'sockCount', 3).length).toBe(0);
        expect(filter([item], 'sockCount', 4).length).toBe(1);
        expect(filter([item], 'sockCount', 5).length).toBe(1);
    });
});
