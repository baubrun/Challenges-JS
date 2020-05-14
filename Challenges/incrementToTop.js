/*
Create  a function that returns the total number of steps 
it takes to transform each element to the maximal element in the array. 
Each step consists of incrementing a digit by one.

Examples
incrementToTop([3, 4, 5]) ➞ 3
// 3 increments: 3 -> 4, 4 -> 5; 4 -> 5

incrementToTop([4, 3, 4]) ➞ 1

incrementToTop([3, 3, 3]) ➞ 0

incrementToTop([3, 10, 3]) ➞ 14
Notes
If the array contains only the Same digits, return 0 (see example #2).

Bonus: Can you write a solution that achieves 
this by only traversing the array once? 
(i.e. without finding the max before hand)
*/

function incrementToTop(arr) {
    let steps = 0
    let max = Math.max(...arr)
    for (let num of arr){
        steps += max - num
    }
    return steps
}

console.log(incrementToTop([3, 4, 5]))
console.log(incrementToTop([4, 3, 4]))
console.log(incrementToTop([3, 3, 3]))
console.log(incrementToTop([3, 10, 3]))