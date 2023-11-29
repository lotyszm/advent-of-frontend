"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTilesNeeded = void 0;
function calculateTilesNeeded(sections) {
    // let totalTiles = 0;
    // for (let i = 0; i < sections.length; i++) {
    //   totalTiles += sections[i].width * sections[i].height;
    // }
    // return totalTiles;
    return sections.reduce((acc, section) => acc + section.width * section.height, 0);
}
exports.calculateTilesNeeded = calculateTilesNeeded;
