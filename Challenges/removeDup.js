/*-Write a function that removes duplicates in an array (assume no object or nested array)*/


const removeDups = arr => {
    //  alternative return [...new Set(arr)]
    return arr.filter((item, idx) => arr.indexOf(item) === idx )
}

const arr = ["a", 15978, "1", 3, 1, "a", "1", 1]
const ans = removeDups(arr)

console.log("unique:", ans)

