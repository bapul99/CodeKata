function solution(k, dungeons) {
 
    function getPermutations(arr) {
        const result = [];
        if (arr.length === 1) return [arr];

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
            const permutations = getPermutations(rest);
            const attached = permutations.map((perm) => [fixed, ...perm]);
            result.push(...attached);
        });

        return result;
    }

    const permutations = getPermutations(dungeons);
    let maxDungeons = 0;

    permutations.forEach((perm) => {
        let currentFatigue = k;
        let count = 0;

        for (const dungeon of perm) {
            const [requiredFatigue, consumeFatigue] = dungeon;
            if (currentFatigue >= requiredFatigue) {
                currentFatigue -= consumeFatigue;
                count++;
            } else {
                break;
            }
        }

        maxDungeons = Math.max(maxDungeons, count);
    });

    return maxDungeons;
}