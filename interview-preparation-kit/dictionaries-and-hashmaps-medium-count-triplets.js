function countTriplets(arr, r) {
    const lettersCounter = {};
    const pairsCounter = {};
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
