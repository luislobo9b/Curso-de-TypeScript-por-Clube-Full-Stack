console.log('aula 06');

// na matemática tupla significa lista finita ou lista ordenada
// ou seja, trabalhar com tuplas significa criar um padrão sequêncial que deve ser seguido

// coloque qualquer valor em qualquer ordem
let array1 = ['a', 1, 2, 3, 'b'];

// com tuplas você cria o padrão
let array2: [string, string, number?]; // ? = opcional

// array2 = [1, 2, '3']; // error
array2 = ['1', '2', 3]; // apenas o primeiro precisa seguir o padrão,
// o restante não precisa seguir a mesma sequência, apenas deve ser de um dos tipos definidos
array2.push('a', 'b', 'c');

let array3: [string];
// array3 = ['a', 'b']; // erro, só aceita um único item
array3 = ['a'];
array3.push('aaa');

console.log(array1, array2, array3);