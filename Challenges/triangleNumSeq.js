/*
Triangular Number Sequence
This Triangular Number Sequence is generated from 
a pattern of dots that form a triangle. 
The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. 
Write a function that converts n number of places with its corresponding number.

Examples
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220
*/


function triangle(n) {
    s = 0
    for (let i = 1; i < n + 1; i++) {
        s += i
    }
    return s
}



console.log(triangle(1))
console.log(triangle(6))
console.log(triangle(215))