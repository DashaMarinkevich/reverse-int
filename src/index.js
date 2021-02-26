module.exports = function reverse(n) {
    let str = Math.abs(n).toString();
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = +reverseArray.join("");
    return joinArray;
}