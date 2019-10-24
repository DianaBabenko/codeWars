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
//Be Concise I - The Ternary Operator

function describeAge(age) {
    return "You're a(n) "
        + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}