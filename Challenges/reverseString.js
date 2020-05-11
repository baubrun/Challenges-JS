/*-Write a function that reverses a string
 */

s = "asdf"


const reverseString = s => {
    const a = s.split("").reverse().join("")
    return a

}


const ans = reverseString(s)
console.log('ans:', ans)