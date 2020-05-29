function repeatedString(s, n) {
    const length = s.length;
    if (length >= n) {
        const stringIterable = Array.from(length === n ? s : s.slice(0, n));
        let matchedInPart = 0;
        stringIterable.forEach((item) => {
            if (item === "a") {
                matchedInPart += 1;
            }
        });
        return matchedInPart;
    }
    else {
        const stringIterable = Array.from(s);
        const repeated = Math.floor(n / length);
        const remained = n % length;
        let matchedInPart = 0;
        stringIterable.forEach((item) => {
            if (item === "a") {
                matchedInPart += repeated;
            }
        });
        stringIterable.slice(0, remained).forEach((item) => {
            if (item === "a") {
                matchedInPart += 1;
            }
        });
        return matchedInPart;
    }
}
