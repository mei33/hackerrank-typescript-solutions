function rotLeft(a: number[], d: number): string {
  const formatResult = (arr: number[]) => arr.join(' ');

  if (a.length === d) {
    return formatResult(a);
  }

  const start = a.slice(0, d)
  const remain = a.slice(d)
  const rotated = [...remain, ...start];

  return formatResult(rotated);
}
