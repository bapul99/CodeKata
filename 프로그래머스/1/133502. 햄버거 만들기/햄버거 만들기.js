function solution(ingredient) {
    const stack = [];
    let burgerCount = 0;
    
    ingredient.forEach(item => {
        stack.push(item);
        if (stack.length >= 4 && stack.slice(-4).join('') === '1231') {
            stack.splice(-4);
            burgerCount++;
        }
    });
    
    return burgerCount;
}
