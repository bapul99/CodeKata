function solution(park, routes) {
    const directions = {
        'N': [-1, 0],
        'S': [1, 0],
        'E': [0, 1],
        'W': [0, -1]
    };

    let startX, startY;

    // 시작 위치 찾기
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                startX = i;
                startY = j;
                break;
            }
        }
        if (startX !== undefined) break;
    }

    let currentX = startX;
    let currentY = startY;

    for (let route of routes) {
        const [direction, distanceStr] = route.split(' ');
        const distance = parseInt(distanceStr);
        const [dx, dy] = directions[direction];

        let newX = currentX;
        let newY = currentY;
        let validMove = true;

        for (let step = 0; step < distance; step++) {
            newX += dx;
            newY += dy;

            if (newX < 0 || newX >= park.length || newY < 0 || newY >= park[0].length || park[newX][newY] === 'X') {
                validMove = false;
                break;
            }
        }

        if (validMove) {
            currentX = newX;
            currentY = newY;
        }
    }

    return [currentX, currentY];
}