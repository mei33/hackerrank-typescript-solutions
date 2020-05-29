function minimumSwaps(arr: number[]): number {
  const lastIdx = arr.length - 1;
  let swampsAmount = 0;
  let currentIdx = 0;

  while (currentIdx < lastIdx) {
    while (arr[currentIdx] === currentIdx + 1 && currentIdx < lastIdx) {
      currentIdx++;
    }

    if (currentIdx < lastIdx) {
      [arr[arr[currentIdx] - 1], arr[currentIdx]] = [arr[currentIdx], arr[arr[currentIdx] - 1]];
      swampsAmount += 1;
    }
  }

  return swampsAmount;
}
