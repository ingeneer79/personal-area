export const pad = (num: number, size: number) => {
    let numString = num.toString();
    while (numString.length < size) {
        numString = "0" + num;
    }
    return numString;
}
