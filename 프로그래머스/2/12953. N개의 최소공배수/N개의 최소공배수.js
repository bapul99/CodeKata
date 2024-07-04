// 최대공약수(GCD)를 구하는 함수
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM)를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 주어진 배열의 모든 수에 대해 최소공배수를 구하는 함수
function solution(arr) {
    return arr.reduce((acc, curr) => lcm(acc, curr));
}