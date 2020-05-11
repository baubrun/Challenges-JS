// -Write a function that finds the most frequent element in an array



const mostFrequent = (arr) => {
    let d = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in d) {
            d[arr[i]] += 1
        } else {
            d[arr[i]] = 1
        }
    }

    return Object.entries(d).sort((a, b) => b[1] - a[1])[0][0]
}


const arr = ["a", 145, 1, 89, 999, 1, 23, 56, 999, 4, 7, 8, 6, 3, 999, "a"]

const ans = mostFrequent(arr)
console.log(ans)

