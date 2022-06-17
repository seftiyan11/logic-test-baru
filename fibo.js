const a = [15, 1, 3]
let b = 21

for (let i of a) {
    b -= (i++)
}

console.log (b);