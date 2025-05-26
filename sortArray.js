let numbers = prompt("Enter numbers separated by commas (24,65,21,5,9,32,42,80,57):")
  .split(",")
  .map(num => parseInt(num.trim()));

let names = prompt("Enter names separated by commas (Zenvo,Erica,Jordie,Alicia,Redon):")
  .split(",")
  .map(name => name.trim());

let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names sorted alphabetically:", sortedNames);
