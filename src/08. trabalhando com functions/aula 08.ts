console.log('aula 08');

function person_(name: string, age: number|string): string{
    let str = `Meu nome é ${name} e minha idade é ${age} anos`;
    console.log(str);
    return str;
};
person_('Luis', 29);

function sum_(num1: number, num2: number): number{
    console.log(num1 + num2);
    return num1 + num2;
};
sum_(1, 2);