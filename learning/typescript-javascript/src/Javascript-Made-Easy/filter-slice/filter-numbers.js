const numbers = [-20,-10,0,10,20];

const positiveNumbers = numbers.filter((value) => value > 0 );
const negativeNumbers = numbers.filter((value) => value < 0);
const beetwenNumbers = numbers.filter((value) => value < 0).filter((value) => value < 20)

console.log(positiveNumbers, negativeNumbers, beetwenNumbers);
