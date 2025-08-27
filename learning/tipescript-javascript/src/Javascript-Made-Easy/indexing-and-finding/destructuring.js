const users = [{id: 4653, name: 'Jonh Doe', bill: '$3,000.00'}, {id: 3473, name: 'Jane Doe', bill: '$1,000.00'}, {id: 1255, name: 'Jonh Dutton', bill: '$300,000.00'}];

// One form to destructurize an Array is:
// const first = numbers[0];
// const second = numbers[1];

const [user1, ...rest] = users;
console.log(user1);
console.log(rest);