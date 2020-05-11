/*
Removing Enemies
Remove enemies from the list of people, even if the enemy shows up twice.

Examples
removeEnemies(["Fred"], []) ➞ ["Fred"]

removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) 
➞ ["Adam", "Tanya"]

removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) 
➞ ["Emily", "Steve"]
Notes
All names to be removed will be in the enemies list; simply return the list, 
no fancy strings.
*/




function removeEnemies(names, enemies) {
    return names.filter(x => !enemies.includes(x))

}


console.log(removeEnemies(["Fred"], []))
console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]))
console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]))
