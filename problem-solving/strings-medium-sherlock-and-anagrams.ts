function sherlockAndAnagrams(s: string): number {
  const lettersCounter: Record<string, number> = {};
  const sLength = s.length;
  let anagramsAmount = 0;

  for (let i = 0; i < sLength; i++) {
    for (let j = i + 1; j <= sLength; j++) {
      const substring = s.substring(i, j);
      const substringFlatten = substring.split("").sort().join("");

      if (!lettersCounter[substringFlatten]) {
        lettersCounter[substringFlatten] = 1;
      } else {
        anagramsAmount += lettersCounter[substringFlatten];
        lettersCounter[substringFlatten] += 1;
      }
    }
  }

  return anagramsAmount;
}
