function maximumToys(prices: number[], k: number): number {
  const sortedPrices = prices.sort((a, b) => a - b);
  let spendedMoney = 0;
  let indexAtFinish = 0;

  for (let i = 0; i < prices.length; i++) {
    if (!(spendedMoney + sortedPrices[i] > k)) {
      spendedMoney += sortedPrices[i];
    } else {
      indexAtFinish = i;
      break;
    }
  }

  return indexAtFinish;
}
