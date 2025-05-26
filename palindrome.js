let red = prompt("Enter the first word (RACECAR):");
let blue = prompt("Enter the second word (RECORDER):");

function reverseString(str) {
    return str.split('').reverse().join('');
}

let reversedRed = reverseString(red);
let reversedBlue = reverseString(blue);

console.log("Original Word 1:", red);
console.log("Reversed Word 1:", reversedRed);
console.log("Original Word 2:", blue);
console.log("Reversed Word 2:", reversedBlue);

console.log(`Is "${red}" a palindrome?`, red === reversedRed);
console.log(`Is "${blue}" a palindrome?`, blue === reversedBlue);
