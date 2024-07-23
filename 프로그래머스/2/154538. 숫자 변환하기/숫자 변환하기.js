function solution(x, y, n) {
    if (x === y) return 0; 

    const queue = [[y, 0]]; 
    const visited = new Set([y]); 

    while (queue.length > 0) {
        const [current, count] = queue.shift(); 

        const nextValues = [current - n, current % 2 === 0 ? current / 2 : -1, current % 3 === 0 ? current / 3 : -1];

        for (const next of nextValues) {
            if (next === x) return count + 1; 
            if (next > x && !visited.has(next) && next !== -1) { 
                queue.push([next, count + 1]); 
                visited.add(next); 
            }
        }
    }

    return -1; 
}

