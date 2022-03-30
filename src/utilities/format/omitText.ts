export const omitText = (text: string, length: number): string => {
    if(/[a-z0-9]/.test(text)){
        length += 3;
    }
    if(text.length <= length) {
        return text;
    }

    let resultStr: string = '';
    let i: number = 0;

    for(let char of text.split('')) {
        if(length <= i) {
            break;
        }
        i++;
        resultStr += char;
    }
    return `${resultStr}...`;
}