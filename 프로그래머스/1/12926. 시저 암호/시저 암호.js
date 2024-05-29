function solution(s, n) {
  const space = 32;
  const A = 65;
  const Z = 90;
  const a = 97;
  const z = 122;

  return s
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode === space) {
        return " ";
      }
      const newChar = charCode + n;
      if (charCode <= Z && newChar > Z) {
        return String.fromCharCode(newChar - Z + A - 1);
      }
      if (newChar > z) {
        return String.fromCharCode(newChar - z + a - 1);
      }
      return String.fromCharCode(newChar);
    })
    .join("");
}