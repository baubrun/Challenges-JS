/* 
Bubble Sort
swap    a       
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]


Input Format

The first line contains an integer, n , the size of the array a.
The second line contains n space-separated integers a[i].

Constraints
2 <= n <= 600
1 <= a[i] <= 2 * 10 ** 6




Output Format

You must print the following three lines of output:

Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
First Element: firstElement, where firstElement is the first element in the sorted array.
Last Element: lastElement, where lastElement is the last element in the sorted array.
Sample Input 0

3
1 2 3
Sample Output 0

Array is sorted in 0 swaps.
First Element: 1
Last Element: 3


*/

function countSwaps(a) {
    let swapped
    let count = 0
    do {
        swapped = false
        for (let i = 0; i < a.length; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = temp
                count++
                swapped = true
            }
        }
    } while (swapped) {
        return [`Array is sorted in ${count} swaps.`, 
        `First Element: ${a[0]}`, 
        `Last Element: ${a.slice(-1)}`]
    }
}




module.exports = countSwaps