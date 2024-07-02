function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let width = 3; width <= Math.sqrt(total); width++) {
        if (total % width === 0) {
            const height = total / width;
            
            // (width - 2) * (height - 2) = yellow
            if ((width - 2) * (height - 2) === yellow) {
                return [height, width];
            }
        }
    }
    return [];
}
