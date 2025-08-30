const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;
for (const value of numbers){
    sum += value;
}

console.log(sum);

numbers.reduce((sum, value) => {
    sum += value;
    return sum;
}, 0);

console.log(sum);

numbers.reduce((sum, value) => sum + value, 0);

numbers.reduce((avg, value, _,  arr) => avg + (value / arr.length), 0);

// The third param is the index 

const names = ["Alice", "Bob", "Charlie", "David"];

const namesReduced = names.reduce((str, name) => str + ", " + name, "" );

const namesReduced2 = names.reduce((str, name, index) => str + (index > 0 ? ", " : "") + name, "" );

console.log(namesReduced);
console.log(namesReduced2);

// The best option to do the above is to use the `join` method
const namesJoined = names.join(", ");
console.log(namesJoined);
