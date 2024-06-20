function solution(s, skip, index) {
    const skipSet = new Set(skip);
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    const validChars = [...alphabet].filter(char => !skipSet.has(char));

    s.split('').forEach(char => {
        let charIndex = validChars.indexOf(char);
        let newIndex = (charIndex + index) % validChars.length;
        result += validChars[newIndex];
    });

    return result;
}