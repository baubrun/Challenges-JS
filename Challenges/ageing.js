/*
Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

ex:

afterNYears({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
})
// ➞ 1 {
//     "Joel": 33,
//     "Fred": 45,
//     "Reginald": 66,
//     "Susan": 34,
//     "Julian": 14
// }


Notes
Assume that everyone is immortal (it would be a bit grim 
    if I told you to remove names once they reached 75).
n should be a positive number because last time I 
checked, people don't tend to age backwards. Therefore, use the absolute value of n.
*/

const afterNYears = ({
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
})
// ➞ 1 {
//     "Joel": 33,
//     "Fred": 45,
//     "Reginald": 66,
//     "Susan": 34,
//     "Julian": 14
// }


function ageIng(names, n) {
    let o = {}
    copy = Object.entries(names)
    for (let i = 0; i < copy.length; i++) {
        o[copy[i][0]] = copy[i][1] + Math.abs(n)
        
    }
    return o
}




const ans = ageIng(afterNYears, 5)
console.log(ans)
