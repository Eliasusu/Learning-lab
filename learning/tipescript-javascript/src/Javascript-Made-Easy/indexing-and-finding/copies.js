const userIds = [4653,3473,1255];
console.log(userIds);

const copyOfUserIds = [...userIds];
console.log(copyOfUserIds);

copyOfUserIds[0] = 5312;
console.log(copyOfUserIds);
console.log(userIds);


const users = [
    {id: 4653, name: 'Jonh Doe', bill: '$3,000.00'}, 
    {id: 3473, name: 'Jane Doe', bill: '$1,000.00'}, 
    {id: 1255, name: 'Jonh Dutton', bill: '$300,000.00'}
];

const copyOfUsers = [...users];
console.log(copyOfUsers);

copyOfUsers[0].name = 'John Smith';
console.log(copyOfUsers);
console.log(users);
