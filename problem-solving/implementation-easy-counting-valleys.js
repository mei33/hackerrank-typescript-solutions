function countingValleys(n, s) {
    const steps = Array.from(s);
    let level = 0;
    let valleysAmount = 0;
    let isInValley = false;
    steps.forEach((step) => {
        if (step === "D") {
            level -= 1;
        }
        else {
            level += 1;
        }
        let isInValleyNow = level < 0;
        if (isInValleyNow !== isInValley && isInValleyNow) {
            valleysAmount += 1;
        }
        isInValley = isInValleyNow;
    });
    return valleysAmount;
}
