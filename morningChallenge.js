let firstArr = [1,4,11,2,37,-4] //true
let secondArr = [0,21,33,6,0,-9] //true
let thirdArr = [0,1,2,3,4,5] //false
// 1 create function
// 2 us a for loop to search the 2 numbers
// 3 use if statement inside for loop
// 4 check if 2 numbers = 0
// 5 if two numbers = 0 log true else log false
function addToZero (array) {
    for (i = 0; i < array.length; i++) {
        for (n = 0; n < array.length; n++) {
            if (array[i] + array[n] === 0 && i !== n) {
                return true
            }
        }
    }return false
}
let answer = addToZero(firstArr)
console.log(answer);