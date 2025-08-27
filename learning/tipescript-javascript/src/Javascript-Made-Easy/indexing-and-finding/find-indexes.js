const names = ["Alice", "Bob", "Charlie", "David", 'Alice'];

console.log(names.indexOf("Alice")); //First Alice appear in the array
console.log(names.indexOf("Alice",1)); //Another Alice in the array

console.log(names.indexOf("Elias")); //A name that not in the array /-1

console.log(names.lastIndexOf("Alice")); //4

console.log(names.findIndex((name) => name === "Bob")); //The best option for objects 

