function substrCount(n, s) {
    const repeatedLetters = [];
    let repeatedIndex = 0;
    let currentLetter = s[0];
    let previousLetter;
    let specialPalindromesAmount = 0;
    const getPermutationsAmount = (amount) => (amount * (amount + 1)) / 2;
    for (let i = 0; i < n; i++) {
        previousLetter = currentLetter;
        currentLetter = s[i];
        switch (true) {
            case i === 0: {
                repeatedLetters[repeatedIndex] = {
                    letter: currentLetter,
                    amount: 1,
                };
                break;
            }
            case currentLetter === previousLetter: {
                repeatedLetters[repeatedIndex].amount += 1;
                break;
            }
            default: {
                repeatedIndex += 1;
                repeatedLetters[repeatedIndex] = {
                    letter: currentLetter,
                    amount: 1,
                };
                break;
            }
        }
    }
    repeatedLetters.forEach((item, index) => {
        const amount = item.amount;
        if (amount > 1) {
            const permutationsAmount = getPermutationsAmount(amount);
            specialPalindromesAmount += permutationsAmount;
        }
        if (amount === 1) {
            specialPalindromesAmount += 1;
            if (index !== 0 && index < repeatedLetters.length - 1) {
                const prevItem = repeatedLetters[index - 1];
                const nextItem = repeatedLetters[index + 1];
                if (prevItem.letter === nextItem.letter) {
                    const minimumSideAmount = Math.min(prevItem.amount, nextItem.amount);
                    specialPalindromesAmount += minimumSideAmount;
                }
            }
        }
    });
    return specialPalindromesAmount;
}
