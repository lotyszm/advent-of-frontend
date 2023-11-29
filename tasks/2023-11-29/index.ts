export function znajdzSciezke(labirynt: number[][]): number[][] {
  if (labirynt.length === 0 || labirynt[0].length === 0) {
    return [];
  }

  const startPOI: [number, number] = [0, 0]; 
  const endPOI: [number, number] = [labirynt.length - 1, labirynt[0].length - 1];

  const queue: { pos: [number, number]; route: number[][] }[] = [{ pos: startPOI, route: [] }];
  const visited = new Set();

  while (queue.length > 0) {
    const { pos , route } = queue.shift() as { pos: [number, number], route: number[][] };
    

    const [x, y] = pos;

    if (x === endPOI[0] && y === endPOI[1]) {
      return route.concat([pos]);
    }

    if (x >= 0 && x < labirynt.length && y >= 0 && y < labirynt[0].length && labirynt[x][y] === 1 && !visited.has(`${x}-${y}`)) {
      visited.add(`${x}-${y}`);

      const newRoute = route.concat([pos]) as number[][];
      queue.push({ pos: [x - 1, y], route: newRoute });
      queue.push({ pos: [x + 1, y], route: newRoute });
      queue.push({ pos: [x, y - 1], route: newRoute });
      queue.push({ pos: [x, y + 1], route: newRoute });
    }
  }

  return [];
}