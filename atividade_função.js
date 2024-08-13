import rl from "readline-sync"

//Declaração de função
function caixaAlta(string) {
    return string.toUpperCase();

}
let nome = rl.question('Iforme seu nome: ')
console.log(`BOA TARDE ${caixaAlta(nome)}?`)


//expressãode função
const UpperCase = function (string) { return string.toUpperCase() };
console.log(`TUDO BEM ${UpperCase(nome)}?`);


//função de seta
const maiuscula = (string) => string.toUpperCase();
console.log(`ESPERO QUE FIQUE BEM ${maiuscula(nome)}`);

//questão 2

//02. Crie uma função que receba um número como
//parâmetro e verifique se ele é par ou ímpar. Retorne uma string.

function parImpar(num) {
    if (num % 2 == 0) {
        return `${num}é par!`
    }
}


