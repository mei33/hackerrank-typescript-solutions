function alternatingCharacters(s) {
    const iterableString = [...s];
    let counter = 0;
    iterableString.forEach((letter, i) => {
        if (iterableString[i + 1] && iterableString[i] === iterableString[i + 1]) {
            counter += 1;
        }
    });
    return counter;
}
