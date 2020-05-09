/*Write a function that returns the sum of all even numbers in an array*/

const arr = [1, 2, 3, 4, 12]


const sumEven = arr => {
    const evens = arr.filter(value =>  value % 2 === 0)
    const sum = evens.reduce((acc, val) => acc + val)
    return sum
}

const ans = sumEven(arr)
console.log('even sum:', ans)