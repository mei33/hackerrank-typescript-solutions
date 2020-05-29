function isValid(s: string): "YES" | "NO" {
  const yes = "YES";
  const no = "NO";

  if (s.length === 0) {
    return no;
  }

  if (s.length === 1) {
    return yes;
  }

  const iterableString = [...s];
  const lettersCounter: Record<string, number> = {};

  iterableString.forEach((letter) => {
    if (!lettersCounter[letter]) {
      lettersCounter[letter] = 1;
    } else {
      lettersCounter[letter] += 1;
    }
  });

  if (Object.keys(lettersCounter).length === 1) {
    return yes;
  }

  const countersFrequency: Record<string, number> = {};

  Object.keys(lettersCounter).forEach((key) => {
    const letter = lettersCounter[key];

    if (!countersFrequency[letter]) {
      countersFrequency[letter] = 1;
    } else {
      countersFrequency[letter] += 1;
    }
  });

  const counters = Object.keys(countersFrequency).map((freq) => Number(freq));

  switch (counters.length) {
    case 1:
      return yes;
    case 2:
      const biggestAmount = Math.max(...counters);
      const smallestAmount = Math.min(...counters);

      if (
        countersFrequency[smallestAmount] === 1 ||
        (Math.abs(counters[0] - counters[1]) === 1 &&
          countersFrequency[biggestAmount] === 1)
      ) {
        return yes;
      } else {
        return no;
      }
    default:
      return no;
  }
}
