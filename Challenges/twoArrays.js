/**
-Write a function that finds common elements in 
two arrays (assume no object or nested array)
 */



const common_arrays = (arr1, arr2) => {
    arr1.sort()
    arr2.sort()
    let common = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            common.push(arr1[i])
            i++
            j++
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
    }
    return common
}

a = [1, 2, 3, "a", "b", "c", "1"]
b = [1, 2, 3, "a", 4, 5, 6, ]

const ans = common_arrays(a, b)
console.log('ans:', ans)