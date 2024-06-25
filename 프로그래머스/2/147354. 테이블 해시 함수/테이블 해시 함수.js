function solution(data, col, row_begin, row_end) {
    // 1. 정렬
    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0]; // 첫 번째 컬럼의 값으로 내림차순 정렬
        }
        return a[col - 1] - b[col - 1]; // col 번째 컬럼의 값으로 오름차순 정렬
    });

    // 2. S_i 계산 및 3. XOR 연산
    let hashValue = 0;

    for (let i = row_begin - 1; i < row_end; i++) {
        let S_i = data[i].reduce((acc, val) => acc + (val % (i + 1)), 0);
        hashValue ^= S_i; // XOR 연산
    }

    return hashValue;
}
