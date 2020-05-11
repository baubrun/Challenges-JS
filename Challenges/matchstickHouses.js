/* see image for instructions */


function matchHouses(step) {
    let sides = 0
    let collapseBorders = 0
    if (step <= 0) return 0
    if (step === 1) return 6
    else {
        collapseBorders = step - 1
        sides = (step * 6) - collapseBorders
    }
    return sides
}


const ans = matchHouses(4)
console.log(ans)