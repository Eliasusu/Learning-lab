const users = [{id: 4653, name: 'Jonh Doe', bill: 3000}, {id: 3473, name: 'Jane Doe', bill: 1000}, {id: 1255, name: 'Jonh Dutton', bill: 300000}];


const richPeople = users.filter((bill) => bill > 2000);

console.log(richPeople);