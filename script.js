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