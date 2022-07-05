console.log('aula 11');

// para adicionar uma propriedade e parâmetro como opcionais basta adicionar interrogação ao final

// com objeto
let person5: {
    name: string,
    age: number,
    isAdmin?: boolean,
    color?: string
}

person5 = {
    name: 'Luis',
    age: 29,
    isAdmin: true
};

// com funções
// Um parâmetro obrigatório não pode ser colocado após um parâmetro opcional
function person4(name: string, age: number, isAdmin?: true, color?: string): number{
    console.log(name, age, isAdmin, color);
    return age;
};