function hourglassSum(arr) {
    const sums = [];
    const rowLength = arr[0].length;
    const rowsAmount = arr.length;
    const hourglassWidth = 3;
    for (let arrRowIdx = 0; arrRowIdx <= rowsAmount - hourglassWidth; arrRowIdx++) {
        for (let arrInnerIdx = 0; arrInnerIdx <= rowLength - hourglassWidth; arrInnerIdx++) {
            // top left hourglass item
            let hourglassSum = 0;
            for (let i = 0; i < hourglassWidth; i++) {
                // first and last hourglass lines
                hourglassSum += (arr[arrRowIdx][arrInnerIdx + i] + arr[arrRowIdx + (hourglassWidth - 1)][arrInnerIdx + i]);
            }
            // middle hourglass line
            hourglassSum += arr[arrRowIdx + 1][arrInnerIdx + 1];
            sums.push(hourglassSum);
        }
    }
    return Math.max(...sums);
}
