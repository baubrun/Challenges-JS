/*
On the Nth Day of Christmas...
Throughout the 12 days of Christmas, my true love gave me in total 364 items.

Create a function where given n days as an argument, return the total amount of items received throughout those days as an integer.

Examples
xmas_items(12) ➞ 364

xmas_items(3) ➞ 10

xmas_items(31) ➞ 5456
Notes
You will only be given valid inputs.
Remember to return as an integer.
0 as input should return 0.
Check the Resources tab for more information.


# xmas song verse example
On the first day of Christmas my true love sent to me
A partridge in a pear tree.

On the second day of Christmas my true love sent to me
Two turtle doves,
And a partridge in a pear tree.

On the third day of Christmas my true love sent to me
Three French hens,
Two turtle doves,
And a partridge in a pear tree....

*/


function xmasItems(n){
    if (n === 0) return 0
    let arr
    let range = []
    const reducer = (acc, val) => acc + val
    for (let i = 1; i < n + 2; i++) {
        for (let j = 1; j < i; j++) {
            range.push(j)
        }
    }
    arr = range.reduce(reducer)
    return arr
}

console.log(xmasItems(12))
console.log(xmasItems(3))
console.log(xmasItems(31))

