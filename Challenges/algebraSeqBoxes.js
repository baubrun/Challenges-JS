/*
Create a function that takes a number (step) as an argument
and returns the amount of boxes in that step of the sequence.

Box Sequence Image

Step 0: Start with 0
Step 1: Add 3
Step 2: Subtract 1
Repeat Step 1 & 2 ...

Examples
box_seq(0) ➞ 0

box_seq(1) ➞ 3

box_seq(2) ➞ 2
Notes
Step (the input) is always a positive integer (or zero).
*/

function box_seq(step){
    let ans
    if (step === 0){
        return 0
    }
    for (let i = 1; i < step + 1; i++) {
        if (i % 2 === 1){
            ans += 3
        } else {
            ans -= 1
        }
    }
    return ans
}


console.log(box_seq(0))
console.log(box_seq(1))
console.log(box_seq(2))
console.log(box_seq(6))
