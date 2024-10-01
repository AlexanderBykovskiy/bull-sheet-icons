export const isValidColor = (rawColor: string): boolean => {
    const hexPattern = /^[0-9A-Fa-f]{6}$/
    return hexPattern.test(rawColor)
}
