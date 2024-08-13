import entradaDados from "readline-sync";

let num = entradaDados.questionFloat('Iforme o numero:')
let num2 = entradaDados.questionFloat('Iforme o outro numero:')
let operacao = entradaDados.questionFloat

switch (operacao) {
    case "+":
        console.log(`Resultado ${num + num2}`)
        break;
    case "-":
        console.log(`Resultado ${num - num2}`)
        break;
    case "/":
        console.log(`Resutado  ${num / num2}`)
        break;
    case "*":
        console.log(`Resutado  ${num * num2}`)
        break;
    default:
        console.log('Digite um número certo marmota!')
        break;

}