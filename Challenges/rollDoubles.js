/*
Don't Roll Doubles!
John is playing a dice game. The rules are as follows.

Roll two dice.
Add the numbers on the dice together.
Add the total to your overall score.
Repeat this for three rounds.
But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

Create a function which takes in a matrix as input, and return John's score after his game has ended.

Examples
diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
*/


function diceGame(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j + 1]) {
                return 0
            } else {
                sum += arr[i][j]
            }
        }
    }
    return sum

    // alternate
    // const reducer = (acc, val) => acc + val
    // const arr1 = arr.map(a => a.reduce(reducer))
    // return arr1.reduce(reducer)
}



console.log(diceGame([
    [1, 2],
    [3, 4],
    [5, 6]
]))
console.log(diceGame([
    [1, 1],
    [5, 6],
    [6, 4]
]))
console.log(diceGame([
    [4, 5],
    [4, 5],
    [4, 5]
]))