function solution(keymap, targets) {
    // 문자-키 매핑 테이블 생성
    const keyMapTable = {};

    keymap.forEach((key, index) => {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const presses = i + 1;  // 키를 i+1번 눌러야 해당 문자가 나옴
            if (!keyMapTable[char] || keyMapTable[char] > presses) {
                keyMapTable[char] = presses;
            }
        }
    });

    // 목표 문자열 계산
    const result = targets.map(target => {
        let totalPresses = 0;
        for (const char of target) {
            if (keyMapTable[char]) {
                totalPresses += keyMapTable[char];
            } else {
                return -1;  // 목표 문자열을 작성할 수 없는 경우
            }
        }
        return totalPresses;
    });

    return result;
}

