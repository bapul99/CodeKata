function solution(lotto, win_nums) {
    const getRank = (count) => {
        switch(count) {
            case 6: return 1;
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5;
            default: return 6;
        }
    };

    let zeroCount = lotto.filter(num => num === 0).length;

    let correctCount = lotto.filter(num => win_nums.includes(num)).length;

    let highest = correctCount + zeroCount;
    
    let lowest = correctCount;

    return [getRank(highest), getRank(lowest)];
}

let lotto = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lotto, win_nums));
