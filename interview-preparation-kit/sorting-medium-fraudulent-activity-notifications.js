function activityNotifications(expenditure, d) {
  const medianIdxCenterWithoutZero = (d - 1) / 2;
  const [medianIdxLeft, medianIdxRight] = [
    Math.floor(medianIdxCenterWithoutZero),
    Math.ceil(medianIdxCenterWithoutZero),
  ];
  const expendituresCounter = new Array(201).fill(0); // counting sort
  let notificationsAmount = 0;
  let medianValueLeft = 0;
  let medianValueRight = 0;
  for (let i = d - 1; i >= 0; i -= 1) {
    expendituresCounter[expenditure[i]] += 1;
  }
  for (let i = d; i < expenditure.length; i += 1) {
    for (
      let j = 0, k = 0;
      k <= medianIdxLeft;
      k += expendituresCounter[j], j += 1
    ) {
      medianValueLeft = j;
    }
    for (
      let j = 0, k = 0;
      k <= medianIdxRight;
      k += expendituresCounter[j], j += 1
    ) {
      medianValueRight = j;
    }
    const medianValue = (medianValueLeft + medianValueRight) / 2;
    if (expenditure[i] >= medianValue * 2) {
      notificationsAmount += 1;
    }
    // remove checked expenditure and add current for future calculations
    expendituresCounter[expenditure[i - d]] -= 1;
    expendituresCounter[expenditure[i]] += 1;
  }
  return notificationsAmount;
}
