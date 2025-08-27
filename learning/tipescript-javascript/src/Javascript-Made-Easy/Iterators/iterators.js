// Kind of iterators

//FOR (good form)

const arrayOfNumbers = [];

for(let i=0; i<=10; i++){
    console.log('Pushing the number:', i, 'into de array');
    arrayOfNumbers.push(i);
};


// bad form
for(let index=0; index <= arrayOfNumbers.length; index++){
    console.log(arrayOfNumbers[index]);
};


// For in loop

const numbers = [10,20,30,40,50];

for(const i in numbers){
    console.log(i);
    console.log(numbers[i]);
};

// For of loop
for(const value of arrayOfNumbers){
    console.log(arrayOfNumbers[value]);
};


// forEach
// In this cases it uses a arrow function

arrayOfNumbers.forEach((value, index) => {
    console.log(value);
    console.log(index);
});

// In simple terms, forEach is a function of the type Array
// And inside it (the forEach) I use another function that have a callback
// So this combination makes it not possible use a break or async await methods.



