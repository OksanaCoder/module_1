/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = function(l1, l2) {
    return sum = (l1 * 2) + (l2 * 2);
}
console.log(area(5, 10));
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = function(a, b) {
    if (a == b) {
        return result = (a + b) * 3;
    }
}
console.log(crazySum(2, 2));
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
const crazyDiff = function(x) {

    return diff = x - 19;
        if(x > 19) {
          return triple = diff * 3;
        }
}
console.log(crazyDiff(210));
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = function(N) {
    if( N >= 20 &&  N <= 100 || N == 400){
        return true;
    } else {
        return false;
    }
}
console.log(boundary(19));
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, 
if the given string begins with "Strive" then return the original string.
*/

const strivify = function(S) {
   
    arr = S.split(' ');
    if (arr[0] == 'Strive') {
        return S;
    } else {
        return false;
    }
}
console.log(strivify('Strive'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it 
is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function(num) {
    if(num % 3 == 0 || num % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(27));
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string 
(es.: Strive => evirtS).
*/

const reverseString = function(str) {
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}
console.log(reverseString('Strive'));
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string 
passed as parameter
*/
const upperFirst = function(str) {
    let splitedStr = str.toUpperCase().split('');
     return splitedStr.join('');
}
console.log(upperFirst('Ksena'));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
const cutString = function(str) {
    let splitedStr = str.split('');
    splitedStr.pop();
    splitedStr.shift();
    return splitedStr.join('');
}
console.log(cutString('Roaller'));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = function(n) {
    let arrWithNums = [];
    for(i = 0; i < n; i++) {
         arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    return arrWithNums;
}
console.log(giveMeRandom(4));
