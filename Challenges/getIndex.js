/*-Implement a function that returns the index of an 
element in an array
 */


const arr = [1, 2, 3, 4, "a"]

const index = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i
        }
    }
    return "nf"
}

const ans = index(arr, "a")
const ans2 = index(arr, "b")
console.log('ans:', ans)
console.log('ans2:', ans2)