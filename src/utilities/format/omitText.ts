export const omitText = (text: string, length: number): string => {
    if (/^[a-z0-9]+$/.test(text)) {
        length += 3
    }
    if (text.length <= length) {
        return text
    }

    const result = text.split('').reduce((pre, crr, i) => {
        if (i > length) {
            return pre + ''
        }

        return pre + crr
    }, '')

    return result.length <= length ? `${result}...` : result
}
