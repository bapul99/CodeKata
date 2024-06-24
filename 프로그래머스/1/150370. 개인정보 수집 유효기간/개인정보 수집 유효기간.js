function solution(today, terms, privacies) {
    const termMap = new Map();
    
    terms.forEach(term => {
        const [key, value] = term.split(' ');
        termMap.set(key, parseInt(value));
    });

    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
    const todayTotalDays = todayYear * 12 * 28 + todayMonth * 28 + todayDay;

    const result = [];

    privacies.forEach((privacy, index) => {
        const [date, termType] = privacy.split(' ');
        const [year, month, day] = date.split('.').map(Number);
        const termDuration = termMap.get(termType);

        const expiryYear = year + Math.floor((month + termDuration - 1) / 12);
        const expiryMonth = (month + termDuration - 1) % 12 + 1;
        const expiryDay = day;

        const expiryTotalDays = expiryYear * 12 * 28 + expiryMonth * 28 + expiryDay;

        if (todayTotalDays >= expiryTotalDays) {
            result.push(index + 1);
        }
    });

    return result;
}

