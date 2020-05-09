/*
Clear the Fog
Create a function which returns the word in the string, 
but with all the fog letters removed. 
However, if the string is clear from fog, return "It's a clear day!".

Examples
clearFog("sky") ➞ "It's a clear day!"

clearFog("fogfogfffoooofftreesggfoogfog") ➞ "trees"

clearFog("fogFogFogffffooobirdsandthebeesGGGfogFog") ➞ "birdsandthebees"
Notes
There won't be any fog inside of any of the actual words 
(won't include the letters f, o or g).
Hidden words are always in lowercase.
*/



function clearFog(str) {
    const regex = /[fog]/g
    if (!regex.test(str)) return "It's a clear day!"
    const ans = str.replace(regex, "")
    return ans
}




const ans = clearFog("fogfogfffoooofftreesggfoogfog")
console.log(ans)
