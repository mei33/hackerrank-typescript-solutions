function alternatingCharacters(s: string): number {
  const iterableString = [...s];
  let counter = 0;

  iterableString.forEach((letter, i) => {
    if (iterableString[i + 1] && iterableString[i] === iterableString[i + 1]) {
      counter += 1;
    }
  });

  return counter;
}
