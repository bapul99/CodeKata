function solution(elements) {
    const n = elements.length;
    const extended = elements.concat(elements); // 원형 수열을 처리하기 위해 수열을 두 번 이어붙임
    const sums = new Set(); // 고유한 부분 수열의 합을 저장할 집합
    
    // 부분 수열의 길이를 1부터 n까지 순회
    for (let length = 1; length <= n; length++) {
        // 각 길이에 대해 시작 지점을 0부터 n-1까지 순회
        for (let start = 0; start < n; start++) {
            let sum = 0;
            // 부분 수열의 합 계산
            for (let i = 0; i < length; i++) {
                sum += extended[start + i];
            }
            sums.add(sum); // 집합에 추가하여 고유한 합을 저장
        }
    }
    
    return sums.size; // 고유한 부분 수열 합의 개수를 반환
}