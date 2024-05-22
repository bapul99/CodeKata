function solution(n, m) {
    let answer = [];
    let minNum = Math.min(n, m);
    let maxNum = Math.max(n, m);
    answer[0] = gcd(minNum, maxNum);
    answer[1] = lcm(minNum, maxNum);
    return answer;
}
// 최대공약수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}
