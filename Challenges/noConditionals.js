/*
No Conditionals?
Write a function that returns 0 if the input is 1, 
and returns 1 if the input is 0.

Examples
flip(1) ➞ 0

flip(0) ➞ 1
Notes
Try completing this challenge without using any:

Conditionals
Ternary operators
Negations
Bit operators
*/




function flip(y) {
    let n = Math.abs(y - 1)
    return n
}


const ans = flip(0)
const ans2 = flip(1)
console.log(ans)
console.log(ans2)