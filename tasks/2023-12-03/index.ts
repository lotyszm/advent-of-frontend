export type Lokalizacja = {
  x: number;
  y: number;
  z: number;
  czas: number;
};

export type MapaCzasoprzestrzenna = (x: number, y: number, z: number, czas: number) => number;

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {
  if (mapa === null || mapa === undefined || typeof mapa !== "function" || lokalizacje === null || lokalizacje === undefined || lokalizacje.length === 0) {
    return null;
  }

  if (Number.isNaN(mapa(lokalizacje[0].x, lokalizacje[0].y, lokalizacje[0].z, lokalizacje[0].czas))) {
    return null;
  }

  let bagLocation = lokalizacje[0];
  lokalizacje.forEach((location) => {
    if (mapa(location.x, location.y, location.z, location.czas) > mapa(bagLocation.x, bagLocation.y, bagLocation.z, bagLocation.czas)) {
      bagLocation = location;
    }
  });

  return bagLocation;
}
