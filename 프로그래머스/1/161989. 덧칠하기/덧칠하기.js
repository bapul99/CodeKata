function solution(n, m, section) {
    let count = 0; // 페인트칠 횟수
    let currentEnd = 0; // 현재 페인트칠한 마지막 위치
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > currentEnd) {
            count++; // 새로운 페인트칠
            currentEnd = section[i] + m - 1; // 롤러가 칠할 수 있는 최대 구역 설정
        }
    }
    
    return count;
}
