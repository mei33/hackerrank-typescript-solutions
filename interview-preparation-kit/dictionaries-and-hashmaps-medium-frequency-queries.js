function freqQuery(queries) {
    const exactMatches = [];
    const operandsFrequency = [];
    const operandsCounter = {};
    queries.forEach((query) => {
        const [operator, operand] = query;
        const initialOperandDictValue = operandsCounter[operand] || 0;
        switch (operator) {
            case 1: {
                const newOperandDictValue = initialOperandDictValue + 1;
                operandsCounter[operand] = newOperandDictValue;
                operandsFrequency[initialOperandDictValue] =
                    (operandsFrequency[initialOperandDictValue] || 0) - 1;
                operandsFrequency[newOperandDictValue] =
                    (operandsFrequency[newOperandDictValue] || 0) + 1;
                break;
            }
            case 2: {
                if (initialOperandDictValue < 1) {
                    break;
                }
                const newOperandDictValue = initialOperandDictValue - 1;
                operandsCounter[operand] = newOperandDictValue;
                operandsFrequency[newOperandDictValue] += 1;
                operandsFrequency[initialOperandDictValue] -= 1;
                break;
            }
            case 3: {
                exactMatches.push(operandsFrequency[operand] > 0 ? 1 : 0);
                break;
            }
        }
    });
    return exactMatches;
}
