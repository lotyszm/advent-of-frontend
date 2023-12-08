export const CountryTypes = ["pl", "de", "us"] as const;

export interface Letter {
  content: string;
  country: (typeof CountryTypes)[number];
  priority: "high" | "medium" | "low";
}

export interface ILetterSorterStrategy {
  sort(letters: Letter[]): Letter[];
}

export class LetterSorter {
  constructor(private strategy: ILetterSorterStrategy) {}

  sortLetters(letters: Letter[]): Letter[] {
    return this.strategy.sort(letters);
  }
}

export class PriorityStrategy implements ILetterSorterStrategy {
  sort(letters: Letter[]): Letter[] {
    return letters.sort((a, b) => {
      if (a.priority === "high") {
        return -1;
      }
      if (a.priority === "medium" && b.priority === "low") {
        return -1;
      }
      return 1;
    });
  }
}

export class CountryStrategy implements ILetterSorterStrategy {
  sort(letters: Letter[]): Letter[] {
    return letters.sort((a, b) => {
      return CountryTypes.indexOf(a.country) - CountryTypes.indexOf(b.country);
    });
  }
}

export class LengthStrategy implements ILetterSorterStrategy {
  sort(letters: Letter[]): Letter[] {
    return letters.sort((a, b) => {
      if (a.content.length < b.content.length) {
        return -1;
      }
      return 1;
    });
  }
}
