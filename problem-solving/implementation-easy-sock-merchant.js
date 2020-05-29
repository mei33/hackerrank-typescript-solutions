function sockMerchant(n, ar) {
    const store = {};
    ar.forEach((colorCode) => {
        if (!store[colorCode]) {
            store[colorCode] = 1;
        }
        else {
            store[colorCode] = store[colorCode] + 1;
        }
    });
    let matched = 0;
    Object.keys(store).forEach((key) => {
        const pairsAmount = Math.floor(store[key] / 2);
        matched += pairsAmount;
    });
    return matched;
}
