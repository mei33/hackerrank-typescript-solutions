type ColorCode = number;

function sockMerchant(n: number, ar: ColorCode[]): number {
  const store: Record<string, number> = {};

  ar.forEach((colorCode) => {
    if (!store[colorCode]) {
      store[colorCode] = 1;
    } else {
      store[colorCode] = store[colorCode] + 1;
    }
  });

  let fullPairs = 0;

  Object.keys(store).forEach((key) => {
    const fullPairsOfSpecificColor = Math.floor(store[key] / 2);

    fullPairs += fullPairsOfSpecificColor;
  });

  return fullPairs;
}
