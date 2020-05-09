/**Emma is playing a new mobile game that starts with consecutively numbered clouds.

She can jump on any cumulus cloud having a number 
that is equal to the number of the current cloud plus 1 or 2.

Some of the clouds are thunderheads and others are cumulus.

She must avoid the thunderheads.

Determine the minimum number of jumps it will
take Emma to jump from her starting position to the last cloud.
It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if
they are safe or 1 if they must be avoided.

For example c = [0,1,0,0,0,1,0],  indexed from 0...6.
The number on each cloud is its index in the list so she must avoid
the clouds at indexes 1 and 5.

She could follow the following two paths: 0-2-4-6 or 2-3-4-6 .
The first path takes 3 jumps while the second takes 4.
 */



const clouds = (arr) => {
    let jumps = 0
    const end = arr.length - 1
    const n = arr.length
    i = 0
    while (i <= n) {
        if (i === end) {
            return jumps
        }
        if (i === end - 1) {
            jumps += 1
            return jumps
        } else {
            if (arr[i + 2] === 0) {
                jumps += 1
                i += 2
            } else {
                jumps += 1
                i += 1
            }
        }
    }
}


const c = [0, 1, 0, 0, 0, 1, 0]

const ans = clouds(c)
console.log(ans)