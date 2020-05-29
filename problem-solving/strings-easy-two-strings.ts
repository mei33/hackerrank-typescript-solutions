function twoStrings(s1: string, s2: string): 'YES' | 'NO' {
  const s2Map: Record<string, boolean> = {};
  let hasCommonSubstring = false;

  [...s2].forEach((letter) => {
    if (!s2Map[letter]) {
      s2Map[letter] = true;
    }
  });

  for (let i = 0; i < s1.length; i++) {
    if (s2Map[s1[i]]) {
      hasCommonSubstring = true;
      break;
    }
  }

  return hasCommonSubstring ? "YES" : "NO";
}
