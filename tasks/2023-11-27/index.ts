export function calculateTilesNeeded(sections: Array<{ width: number; height: number; }>): number {
  // let totalTiles = 0;
  // for (let i = 0; i < sections.length; i++) {
  //   totalTiles += sections[i].width * sections[i].height;
  // }
  // return totalTiles;
  return sections.reduce((acc, section) => acc + section.width * section.height, 0);
}