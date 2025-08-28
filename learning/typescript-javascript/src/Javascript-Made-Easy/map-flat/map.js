// Map of scalars 

const numbers = [10,20,30,40,50,60,70];

// This return a New Array
const numbersTimes10 = numbers.map((value) => value * 10);

console.log(numbersTimes10);

// This return a New Array of objects 
// Before the => If is a object, we need to put the name of the property
const numbersTimes10Obj = numbers.map((v) => ({value: v * 10}));
console.log(numbersTimes10Obj)

// Chaining Map and filter
const numbersPostivesAndNegatives = [-20,-10,0,10,20,30,50,-30];

// Firts we apply the filter and then the map
const numbersPositiveBy10 = numbersPostivesAndNegatives.filter((v) => v > 0).map((v) => v * 10);
console.log(numbersPositiveBy10);

// Mapping over objects 

// Chep clone
const cheapClone = (obj) => 
    JSON.parse(JSON.stringify(obj));


const people = [
    {firstName: 'Jonh', lastName: 'Dutton', address: { city: 'Montana'}, age: 45},
    {firstName: 'Kayce', lastName: 'Dutton', address: { city: 'Montana'}, age: 30},
    {firstName: 'Beth', lastName: 'Dutton', address: { city: 'Montana'}, age: 25}
];

const fullNames = people.map((p) => cheapClone ({
    ...p,
    fullName: `${p.firstName} ${p.lastName}`
}));

console.log(fullNames);


fullNames[0].firstName = 'Lee';
console.log(fullNames);


fullNames[0].address.city = 'Below Montana :(';
console.log(fullNames);
console.log(people);

