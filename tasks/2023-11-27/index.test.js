"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe('calculateTilesNeeded', () => {
    test('returns correct tile count for single section', () => {
        expect((0, index_1.calculateTilesNeeded)([{ width: 5, height: 3 }])).toBe(15);
    });
    test('returns correct tile count for multiple sections', () => {
        expect((0, index_1.calculateTilesNeeded)([
            { width: 5, height: 3 },
            { width: 2, height: 2 },
            { width: 3, height: 4 }
        ])).toBe(31);
    });
    test('returns zero when no sections are provided', () => {
        expect((0, index_1.calculateTilesNeeded)([])).toBe(0);
    });
});
