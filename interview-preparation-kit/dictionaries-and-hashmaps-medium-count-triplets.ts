function countTriplets(arr: number[], r: number): number {
  const lettersCounter: Record<number, number> = {};
  const pairsCounter: Record<number, number> = {};
  let tripletsAmount = 0;

  arr.reverse().forEach((item, i) => {
    if (pairsCounter[item * r]) {
      tripletsAmount += pairsCounter[item * r];
    }
    if (lettersCounter[item * r]) {
      pairsCounter[item] = (pairsCounter[item] || 0) + lettersCounter[item * r];
    }

    lettersCounter[item] = (lettersCounter[item] || 0) + 1;
  });

  return tripletsAmount;
}
