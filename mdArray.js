let namesInput = prompt("Enter names separated by commas (Genevieve,Juan,Luna,Gabriel,Elise):");
let agesInput = prompt("Enter ages separated by commas (24,65,21,5,9):");

let names = namesInput.split(",").map(name => name.trim());
let ages = agesInput.split(",").map(age => parseInt(age.trim()));

let combinedArray = [];

for (let i = 0; i < names.length; i++) {
    combinedArray.push([names[i], ages[i]]);
}

console.log("Restructured Multi-Dimensional Array:");
for (let i = 0; i < combinedArray.length; i++) {
    console.log(`Name: ${combinedArray[i][0]}, Age: ${combinedArray[i][1]}`);
}
