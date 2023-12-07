type Letter = { [key: string]: number };
type ChangeTracker = (prop: string, val: number) => void;

export function createTrackedLetter(letter: Letter, changeTracker: ChangeTracker): Letter {
  return new Proxy(letter, {
    set: (target: Letter, property: string, value: number) => {
      changeTracker(property, value);
      return true;
    }, 
  });
}
