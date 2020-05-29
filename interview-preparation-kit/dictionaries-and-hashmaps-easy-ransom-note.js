function checkMagazine(magazine, note) {
    const availableWordsMap = {};
    let availableAsNeed = true;
    magazine.forEach(word => {
        if (!availableWordsMap[word]) {
            availableWordsMap[word] = 1;
        }
        else {
            availableWordsMap[word] += 1;
        }
    });
    for (let i = 0; i < note.length; i++) {
        const requiredWord = note[i];
        if (availableWordsMap[requiredWord]) {
            availableWordsMap[requiredWord] -= 1;
        }
        else {
            availableAsNeed = false;
            break;
        }
    }
    console.log(availableAsNeed ? 'Yes' : 'No');
}
