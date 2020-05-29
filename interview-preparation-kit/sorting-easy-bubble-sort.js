function countSwaps(a) {
    const arrayLength = a.length;
    let swapsCount = 0;
    function swap(array, index1, index2) {
        swapsCount += 1;
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
            }
        }
    }
    console.log(`Array is sorted in ${swapsCount} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[arrayLength - 1]}`);
    return swapsCount;
}
