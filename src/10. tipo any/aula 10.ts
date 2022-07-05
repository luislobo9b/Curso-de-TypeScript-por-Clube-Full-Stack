console.log('aula 10');

// any significa qualquer tipo

// variável com any
let a: any;
a = true;
a = 'a';
a = null;
a = 1;

// array com any
let b: any[] = [];
b.push(true);
b.push('a');
b.push(null);
b.push(1);

// objeto com any
let c: {
    name: any,
    age: any
};
c = {name: 1, age: null}

// função com any
function d(a: any, b: any): any{
    return a + b;
};

console.log(a, b, c, d);