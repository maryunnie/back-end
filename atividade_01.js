import entradaDados from "readline-sync";

let dia = entradaDados.questionInt("Imforme o dia da semana(de 1 a 7): ");

switch (dia) {
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sabádo")
        break;
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log('Dia não existente, paspalhão')
        break;
}