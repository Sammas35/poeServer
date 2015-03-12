"use strict";

describe('poemodel', function () {
    var poemodel;
    var $httpBackend;
    beforeEach(function () {
        module('poeServer');
    });

    beforeEach(inject(function (_poemodel_, _$httpBackend_) {
        poemodel = _poemodel_;
        $httpBackend = _$httpBackend_;
    }));

    it('check the existence of poemodel', function() {
        expect(poemodel).toBeDefined();
    });

    describe("getChars", function () {
        it("should be a function", function () {
            expect(poemodel.getChars).toBeDefined();
            expect(angular.isFunction(poemodel.getChars)).toBe(true);
        });
    });

    describe("getStashs", function () {
        it("should be a function", function () {
            expect(poemodel.getStashs).toBeDefined();
            expect(angular.isFunction(poemodel.getStashs)).toBe(true);
        });
    });
});
