//Opposite number
function opposite(number) {
    return number = -number
}
//Reversed Strings
function solution(str){
    let arrayString = str.split("")
    let reverseArray = arrayString.reverse()
    let reverseString = reverseArray.join("")
    return reverseString;
}
//Remove First and Last Character
function removeChar(str) {
    return str.slice(1, -1);
}