/*"""
Transform Upvotes
Create a function that transforms a string of upvote counts i
nto an array of numbers. 
Each k represents a thousand.

Examples
transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]

transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]

transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
Notes
Return the upvotes as an array.
"""*/


function transformUpvotes(str){
    let split = str.split(" ")
    let amounts = []
    split.forEach(a => {
        if (a.slice(-1) === "k"){
            let no_k_d = a.slice(0, -1).split(".").join("")
            amounts.push(parseInt(no_k_d) * 100)
        }
        else {
            amounts.push(parseInt(a))
        }
    })
    return amounts
}

console.log(transformUpvotes("20.3k 3.8k 7.7k 992"))
console.log(transformUpvotes("5.5k 8.9k 32"))
console.log(transformUpvotes("6.8k 13.5k"))

