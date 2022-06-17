function letterMiddle(a, b) {
    let alpha1 = Alphabet.indexOf(a);
    let alpha2 = Alphabet.indexOf(b);
    let center = (alpha1 + alpha2) / 2;
    let letterLength;

    if (center % 2 == 0.5) {
        letterLength = 2;
    } else {
        letterLength = 1;
    }

    return Alphabet.substring(center, center + letterLength);
}

var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(letterMiddle("Q", "U"));
console.log(letterMiddle("R", "U"));
console.log(letterMiddle("T", "Z"));
console.log(letterMiddle("Q",  "Z"));