console.log('aula 12');

// type aliases significa apelido para os tipos
// toda vez que vc tiver muitas repetições nas tipagens vc pode criar um "atalho"

type numberOrString = string|number;

function person6(name: string, age: numberOrString, address:{street:string,number:numberOrString}): string{
    console.log(name, age, address);
    return name;
};

let obj: {
    age: numberOrString,
};

obj = {
    age: 1
};

person6('Luis', 29, {street: 'Rua', number: 99});