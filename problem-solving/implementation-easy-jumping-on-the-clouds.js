function jumpingOnClouds(c) {
    const cloudsAmount = c.length;
    let stepsAmount = 0;
    let i = 0;
    while (i < cloudsAmount - 1) {
        if (c[i + 2] === 0) {
            i += 2;
        }
        else {
            i += 1;
        }
        stepsAmount += 1;
    }
    return stepsAmount;
}
