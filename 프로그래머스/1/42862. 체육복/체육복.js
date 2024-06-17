function solution(n, lost, reserve) {
    // 중복 제거
    let realLost = lost.filter(student => !reserve.includes(student));
    let realReserve = reserve.filter(student => !lost.includes(student));

    // 정렬 (필요한 경우)
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    // 체육복 빌리기
    realLost = realLost.filter(student => {
        let lendIndex = realReserve.findIndex(res => Math.abs(res - student) === 1);
        if (lendIndex !== -1) {
            realReserve.splice(lendIndex, 1);
            return false; // 체육복을 빌렸으므로 lost 리스트에서 제거
        }
        return true; // 체육복을 빌리지 못한 학생
    });

    // 최종적으로 체육수업을 들을 수 있는 학생의 수
    return n - realLost.length;
}

// 예시 실행
let n = 5;
let lost = [2, 4];
let reserve = [1, 3, 5];
console.log(solution(n, lost, reserve)); // 5
