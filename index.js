import entradaDados from 'readline-sync';

//let nome = entradaDados.question("Infome seu nome:");
//console.log(`Olá, ${nome}!`);

let x = entradaDados.questionFloat("x: ");
let y = entradaDados.questionFloat("y: ");
//let total = Number(x) + Number(y);
console.log(`Total: ${x+y}`);

