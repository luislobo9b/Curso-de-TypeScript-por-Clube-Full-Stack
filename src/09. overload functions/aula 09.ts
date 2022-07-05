// overload significa sobrecarga, mas para melhor entendimento leia como
// molde, ou assinatura. a forma como a função tem que ser
// se você criar um molde você precisa obrigatoriamente utilizá-lo

// criando um overload com funções comuns
function person2(a: string, b: number): number;

function person2(name: string, age: number){
    return age;
};

// criando overload com arrow functions
let person3: (a: string, b: number) => number;

person3 = (name: string, age: number) => {
    return age;
};