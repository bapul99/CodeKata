const solution = (sizes) => {
    const totalMax = Math.max(...sizes.join(',').split(',').map(Number))
    const subMax = Math.max(...sizes.map(el => el[0] > el[1] ? el[1] : el[0]))
    return subMax * totalMax
}