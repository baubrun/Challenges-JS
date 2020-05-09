/*
Add up the Numbers from a Single Number
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number 
you passed to the function. For example, 
if the input is 4 then your function should 
return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300*/

function addUp(num) {
    let ans = 0
	for (let i = 0; i < num + 1; i++) {
        ans += i
    }
    return ans
}


const ans = addUp(4)
console.log(ans)