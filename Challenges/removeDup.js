/*-Write a function that removes duplicates in an array (assume no object or nested array)*/


const removeDups = arr => {
    // return [...new Set(arr)]
    // indexOf only returns 1e idx not others
    return arr.filter((item, idx) => arr.indexOf(item) === idx )
}

const arr = ["a", 15978, "1", 3, 1, "a", "1", 1]
const ans = removeDups(arr)

console.log("unique:", ans)

// const obj =  {"a": 2, "b": 3}
// const condition = 4 in Object.values(obj) 
// console.log(condition)


