function arrayManipulation(n, queries) {
    const arrayToManipulate = Array(n).fill(0);
    queries.forEach((query) => {
        const value = query[2];
        arrayToManipulate[query[0] - 1] += value;
        if (query[1] <= n - 1) {
            arrayToManipulate[query[1]] -= value;
        }
    });
    let temp = 0;
    let maxValue = 0;
    arrayToManipulate.forEach((item) => {
        temp += item;
        if (temp > maxValue) {
            maxValue = temp;
        }
    });
    return maxValue;
}
