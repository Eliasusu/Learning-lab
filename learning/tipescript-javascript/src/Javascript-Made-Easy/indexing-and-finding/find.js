const users = [{id: 4653, name: 'Jonh Doe', bill: '$3,000.00'}, {id: 3473, name: 'Jane Doe', bill: '$1,000.00'}, {id: 1255, name: 'Jonh Dutton', bill: '$300,000.00'}];

const user = users.find(person => person.name === 'Jonh Dutton');

console.log(user)