/*
Filter Repeating Character Strings
Create a function that keeps only strings 
with at least 2 repeating identical characters 

Examples
twoRepeated(["aaaaaa", "bc", "d", "eeee", "xyz"]) 
➞ ["aaaaaa", "eeee"]

twoRepeated(["88", "999", "22", "545", "133"]) 
➞ [ '88', '999', '22', '133' ]

twoRepeated(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) 
➞ [ 'xxxxo', 'ooxxoo' ]

Notes

If there are no strings with repeating identical characters, 
return an empty array (see example #3).
*/


function twoRepeated(arr) {
    const regex = /(\w)\1/
    return arr.filter(x => regex.test(x))
}


console.log(twoRepeated(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]))
console.log(twoRepeated(["88", "999", "22", "545", "133"]))