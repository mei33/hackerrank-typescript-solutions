function rotLeft(a, d) {
    const formatResult = (arr) => arr.join(' ');
    if (a.length === d) {
        return formatResult(a);
    }
    const start = a.slice(0, d);
    const remain = a.slice(d);
    const rotated = [...remain, ...start];
    return formatResult(rotated);
}
