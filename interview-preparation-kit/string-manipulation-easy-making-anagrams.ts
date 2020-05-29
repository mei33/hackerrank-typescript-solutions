function makeAnagram(a: string, b: string): number {
  const aLetters = [...a];
  const bLetters = [...b];

  const countLetters = (letters: string[]) => {
    return letters.reduce((counter: Record<string, number>, letter) => {
      counter[letter] = (counter[letter] || 0) + 1;

      return counter;
    }, {});
  };

  const aLettersCounter = countLetters(aLetters);
  const bLettersCounter = countLetters(bLetters);
  const usedLetters = new Set([...a, ...b]);
  let diffCounter = 0;

  usedLetters.forEach((key) => {
    const aAmount = aLettersCounter[key] || 0;
    const bAmount = bLettersCounter[key] || 0;

    if (aAmount !== bAmount) {
      diffCounter += Math.abs(aAmount - bAmount);
    }
  });

  return diffCounter;
}
