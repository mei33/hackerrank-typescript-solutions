function commonChild(s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;
    const lenthCounter = [];
    for (let i = 0; i <= s1Length; ++i) {
        lenthCounter[i] = [];
        for (let j = 0; j <= s2Length; ++j) {
            lenthCounter[i][j] = 0;
        }
    }
    for (let i = 0; i <= s1Length; i++) {
        for (let j = 0; j <= s2Length; j++) {
            if (i === 0 || j === 0) {
                lenthCounter[i][j] = 0;
            }
            else if (s1[i - 1] === s2[j - 1]) {
                lenthCounter[i][j] = lenthCounter[i - 1][j - 1] + 1;
            }
            else {
                const a = lenthCounter[i - 1][j];
                const b = lenthCounter[i][j - 1];
                lenthCounter[i][j] = a > b ? a : b;
            }
        }
    }
    return lenthCounter[s1Length][s2Length];
}
