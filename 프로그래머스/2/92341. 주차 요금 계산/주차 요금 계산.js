function calculateTime(inTime, outTime) {
    const [inHour, inMin] = inTime.split(':').map(Number);
    const [outHour, outMin] = outTime.split(':').map(Number);
    return (outHour * 60 + outMin) - (inHour * 60 + inMin);
}

function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const parkingTime = {}; // 누적 주차 시간
    const inTimeRecord = {}; // 입차 시간 기록
    
    records.forEach(record => {
        const [time, car, type] = record.split(' ');
        if (type === 'IN') {
            inTimeRecord[car] = time;
        } else {
            const parkedTime = calculateTime(inTimeRecord[car], time);
            parkingTime[car] = (parkingTime[car] || 0) + parkedTime;
            delete inTimeRecord[car];
        }
    });

    // 23:59에 출차된 것으로 간주
    const endTime = "23:59";
    for (const car in inTimeRecord) {
        const parkedTime = calculateTime(inTimeRecord[car], endTime);
        parkingTime[car] = (parkingTime[car] || 0) + parkedTime;
    }

    // 요금 계산
    const result = Object.keys(parkingTime).sort().map(car => {
        const time = parkingTime[car];
        if (time <= basicTime) {
            return basicFee;
        }
        return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee;
    });

    return result;
}

