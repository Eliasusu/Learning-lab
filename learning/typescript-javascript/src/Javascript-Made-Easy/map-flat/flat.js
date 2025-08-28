const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

numbers.flat();
console.log(numbers.flat());

const arrayDeepNumbers = [
    [[1, 2, [3, 4]]],
    [[5, 6, [7, 8]]],
    [[9, 10, [11, 12]]]
];

arrayDeepNumbers.flat(1);
arrayDeepNumbers.flat(2);
arrayDeepNumbers.flat(Infinity);

console.log(arrayDeepNumbers.flat(1));
console.log(arrayDeepNumbers.flat(2));
console.log(arrayDeepNumbers.flat(Infinity));

