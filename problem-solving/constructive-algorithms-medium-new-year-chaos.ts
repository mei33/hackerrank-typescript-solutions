function minimumBribes(q: number[]): void {
  const maxBribesAmount = 2;
  let bribesAmount = 0;
  let tooChaotic = false;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - (i + 1) > maxBribesAmount) {
      tooChaotic = true;
      break;
    }

    for (let j = Math.max(0, q[i] - maxBribesAmount); j < i; j++) {
      if (q[j] > q[i]) {
        bribesAmount += 1;
      }
    }
  }

  console.log(tooChaotic ? "Too chaotic" : bribesAmount);
}
