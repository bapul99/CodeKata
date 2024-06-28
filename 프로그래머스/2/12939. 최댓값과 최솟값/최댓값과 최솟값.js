function solution(s) {
    // 문자열을 공백을 기준으로 분리하여 배열 생성
    const numbers = s.split(' ').map(Number);
    
    // 최소값과 최대값 찾기
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    // 결과 문자열 생성
    return `${min} ${max}`;
}