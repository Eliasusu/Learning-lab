# Javascript

## Table of content

- [Iterators](#iterators)
- [Indexing and Finding](#indexing-and-findind)

## Iterators

- [./projects/src/Javascript-Made-Easy/Iterators](https://github.com/Eliasusu/Learning-lab/blob/main/projects/src/Javascript-Made-Easy/Iterators)

### The sentence `for()`

Is a good option create and fill in a new Array. Example:

```js
const arrayOfNumbers = [];

for (let i = 0; i <= 10; i++) {
  console.log("Pushing the number:", i, "into de array");
  arrayOfNumbers.push(i);
}
```

### The sentence `for(const {variable} in {array})`

If I need a index of the values in the array, should use this option. Example:

```js
const numbers = [10, 20, 30, 40, 50];

for (const i in numbers) {
  console.log(i);
  console.log(numbers[i]);
}
```

### The sentence `for(const {variable} of {array})`

But, if I need the values, I should use `for( of )`
Example:

```js
for (const value of arrayOfNumbers) {
  console.log(arrayOfNumbers[value]);
}
```

### The method `{array}.forEach`

Another method to iterate an array, is a forEach that use a callback, the function can receive 3 params so I can't use a break and it is not compatible with async await. Example:

```js
arrayOfNumbers.forEach((value, index) => {
  console.log(value);
  console.log(index);
});
```

---

## Indexing and Findind

- [./projects/src/Javascript-Made-Easy/indexing-and-finding](https://github.com/Eliasusu/Learning-lab/blob/main/projects/src/Javascript-Made-Easy/indexing-and-finding/copies.js)

### Scalars and References

**Scalars** are primitive data like strings, integer, double, boolean, etc. When those are in an Array, they're in a persistent memory, so when I do a copy of them, I create another space in my memory with that array. eg:

```js
const userIds = [4653, 3473, 1255];

const copyOfUserIds = [...userIds];
```

So if I change the copy, just changed the copy, and the original version it will be the same.

```js
copyOfUserIds[0] = 5312;
console.log(copyOfUserIds);
console.log(userIds);

/* 
Console logs
[ 5312, 3473, 1255 ]
[ 4653, 3473, 1255 ]
*/
```

The **References** makes it when I use objects, and when I create a array of objects just exists one space in memory with the objects and if I create a copy of the original array, also references the same space. So if I change the copy array, I will change the space of memory and both arrays. eg:

```js
const users = [
  { id: 4653, name: "Jonh Doe", bill: "$3,000.00" },
  { id: 3473, name: "Jane Doe", bill: "$1,000.00" },
  { id: 1255, name: "Jonh Dutton", bill: "$300,000.00" },
];

const copyOfUsers = [...users];
console.log(copyOfUsers);

copyOfUsers[0].name = "John Smith";
console.log(copyOfUsers);
console.log(users);

/*
Console logs
[
  { id: 4653, name: 'Jonh Doe', bill: '$3,000.00' },
  { id: 3473, name: 'Jane Doe', bill: '$1,000.00' },
  { id: 1255, name: 'Jonh Dutton', bill: '$300,000.00' }
]
[
  { id: 4653, name: 'John Smith', bill: '$3,000.00' },
  { id: 3473, name: 'Jane Doe', bill: '$1,000.00' },
  { id: 1255, name: 'Jonh Dutton', bill: '$300,000.00' }
]
[
  { id: 4653, name: 'John Smith', bill: '$3,000.00' },
  { id: 3473, name: 'Jane Doe', bill: '$1,000.00' },
  { id: 1255, name: 'Jonh Dutton', bill: '$300,000.00' }
]
*/
```

## Map and Flat

### Mapping over objects

One of the cases that I code while I was see the [video](https://youtu.be/k42kEU2izKc?list=PLNqp92_EXZBJmAHWnJbVnXsl71hiHCrQh&t=350) it was:

If I have an array of objects and inside of one object I've another object, this object is a reference. So if I copy the entire array, these object is a reference and can be mutated. On the other hand, the original object with yours "atomic" properties are copy in other part of the memory and it can be mutated. For instance:

```js
const people = [
  {
    firstName: "Jonh",
    lastName: "Dutton",
    address: { city: "Montana" },
    age: 45,
  },
  {
    firstName: "Kayce",
    lastName: "Dutton",
    address: { city: "Montana" },
    age: 30,
  },
  {
    firstName: "Beth",
    lastName: "Dutton",
    address: { city: "Montana" },
    age: 25,
  },
];

const fullNames = people.map((p) => ({
  ...p,
  fullName: `${p.firstName} ${p.lastName}`,
}));

console.log(fullNames);

fullNames[0].firstName = "Lee";
console.log(fullNames);

fullNames[0].address.city = "Below Montana :(";
console.log(fullNames);
console.log(people);

/*
console logs:
  [{
    firstName: 'Jonh',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 45,
    fullName: 'Jonh Dutton'
  },
  {
    firstName: 'Kayce',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 30,
    fullName: 'Kayce Dutton'
  },
  {
    firstName: 'Beth',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 25,
    fullName: 'Beth Dutton'
  }
]

Mutted a "atomic" property
[
  {
    firstName: 'Lee', <-!--
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 45,
    fullName: 'Jonh Dutton' <- Here not mutated
  },
  {
    firstName: 'Kayce',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 30,
    fullName: 'Kayce Dutton'
  },
  {
    firstName: 'Beth',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 25,
    fullName: 'Beth Dutton'
  }
]

// And with the object address inside the original object
[
  {
    firstName: 'Lee',
    lastName: 'Dutton',
    address: { city: 'Below Montana :(' },
    age: 45,
    fullName: 'Jonh Dutton'
  },
  {
    firstName: 'Kayce',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 30,
    fullName: 'Kayce Dutton'
  },
  {
    firstName: 'Beth',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 25,
    fullName: 'Beth Dutton'
  }
]
[
  {
    firstName: 'Jonh',
    lastName: 'Dutton',
    address: { city: 'Below Montana :(' },
    age: 45
  },
  {
    firstName: 'Kayce',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 30
  },
  {
    firstName: 'Beth',
    lastName: 'Dutton',
    address: { city: 'Montana' },
    age: 25
  }
]

```

To avoid this, I should do a 'cheap copy'

```js
const cheapClone = (obj) => JSON.parse(JSON.stringify(obj));
```

And then use it for the array fullNames

```js
const fullNames = people.map((p) =>
  cheapClone({
    ...p,
    fullName: `${p.firstName} ${p.lastName}`,
  })
);
```

[I'm here in the playlist Javascript Made Easy - Jack Herrington](https://youtu.be/k42kEU2izKc?list=PLNqp92_EXZBJmAHWnJbVnXsl71hiHCrQh&t=328)
