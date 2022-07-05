console.log('aula 03');

let name = 'Luis Lobo';
let age = 29;

// name = true; // string to boolean (error)
name = 'Luis'; // string to string (success)
// name = 99; // string to number (error)



let person = {
    name: 'Luis Lobo',
    age: 28,
    isAdmin: true
};

// person.name = false; // string to boolean (error)
person.age = 29; // number to number (success);
// person.isAdmin = 'true'; // boolean to string (error)
console.log(name, age, person);



let names = ['Luis']; // only string
let ages = [28, 29]; // only number
let example3 = ['Luis', 39, true]; // only string | number | boolean
// let example4 = []; // any (error)
console.log(names, ages, example3);

export {} // https://bobbyhadz.com/blog/typescript-cannot-redeclare-block-scoped-variable