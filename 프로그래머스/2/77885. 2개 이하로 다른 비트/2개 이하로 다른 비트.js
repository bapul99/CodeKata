function solution(numbers) {
    return numbers.map(f);
}

function f(x) {
    if (x % 2 === 0) return x + 1; 
    
    let binX = x.toString(2); 
    let indexOfZero = binX.lastIndexOf('0'); 

    if (indexOfZero === -1) { 
        return parseInt('10' + binX.slice(1), 2);
    } else {
        let next = binX.split('');
        next[indexOfZero] = '1';
        next[indexOfZero + 1] = '0'; 
        return parseInt(next.join(''), 2);
    }
}