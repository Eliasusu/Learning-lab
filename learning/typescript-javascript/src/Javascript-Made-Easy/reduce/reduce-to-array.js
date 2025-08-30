const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let arr = [];

for (const value of numbers){
    arr = [...arr, value];
    console.log(arr);
}

console.log(arr);

numbers.reduce((arr, number) => {
    return [...arr, number];
}, []);

const numbersReduced = numbers.reduce((arr, number) => {
    return [...arr, number];
}, []);

console.log(numbersReduced);

const numbersReducedRight = numbers.reduceRight((arr, number) => {
    return [...arr, number];
}, []);

console.log(numbersReducedRight);

const group = [
    [1,3],
    [3,4],
    [2,5]
]

const groupReduced = group.reduce((arr, [count, value]) => [
    ...arr, ...Array(count).fill(value)
], []);

console.log(groupReduced);