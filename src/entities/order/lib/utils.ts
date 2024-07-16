export const pad = (num: number, size: number) => {
    let numString = num.toString();
    debugger
    while (numString.length < size) {
        numString = "0" + num;
    }
    return numString;
}
