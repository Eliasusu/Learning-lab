const randomNumbers = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];

const lookup = {};
let acc = 0

for(const number of randomNumbers){
    lookup[`numberRandom ${acc}`] = number
    acc += 1
};

console.log(lookup);

const randomNumbersReduced = randomNumbers.reduce((lookup, value, index) => ({
    ...lookup,
    [`numberRandom ${index}`]: (value) + 1
}), {}); 
console.log(randomNumbersReduced);