function solution(answers) {
    let supoPerson1 = [1, 2, 3, 4, 5];
    let supoPerson2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supoPerson3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cntArray = [0,0,0];
    let length1 = supoPerson1.length, length2 = supoPerson2.length, length3 = supoPerson3.length ;
    let result =[];
    
    for(let i=0; i<answers.length ; i++){
       if(supoPerson1[i%length1] === answers[i]) cntArray[0]+=1;
       if(supoPerson2[i%length2] === answers[i]) cntArray[1]+=1;
       if(supoPerson3[i%length3] === answers[i]) cntArray[2]+=1;
    }
    
    let maxValue = Math.max(...cntArray);
    
    if(maxValue){
        cntArray.forEach((item, idx)=>item === maxValue ? result.push(idx+1) : '')
    }
    return result;
}