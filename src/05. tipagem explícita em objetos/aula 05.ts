console.log('aula 05');

let names: string[] = ['Luis', 'Fernando'];
let namesAndAges: (string | number)[] = ['Luis', 29, 'Fernando', 29];

// se você colocar object ele também vai aceitar array
// let person: object;
// person = []; // isso seria aceito

// definindo um padrão
let person: {
    name: string,
    age: number,
    random?: string | number | null // ? = opcional
};

// agora ele precisa seguir o padrão acima
person = {
    name: 'Luis',
    age: 29
};

// o typescript também impede qualquer conteúdo adicional como:
// person.address = 1;

console.log(names, namesAndAges, person);