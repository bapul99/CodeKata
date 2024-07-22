function solution(topping) {
    const leftMap = new Map();
    const rightMap = new Map();
    let fairCutCount = 0;

    // 모든 토핑을 오른쪽 해시맵에 저장
    topping.forEach(t => rightMap.set(t, (rightMap.get(t) || 0) + 1));

    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];
        
        // 오른쪽 해시맵에서 토핑 제거
        if (rightMap.get(t) === 1) {
            rightMap.delete(t);
        } else {
            rightMap.set(t, rightMap.get(t) - 1);
        }

        // 왼쪽 해시맵에 토핑 추가
        leftMap.set(t, (leftMap.get(t) || 0) + 1);

        // 왼쪽과 오른쪽의 토핑 종류 수가 같은지 비교
        if (leftMap.size === rightMap.size) {
            fairCutCount++;
        }
    }

    return fairCutCount;
}
