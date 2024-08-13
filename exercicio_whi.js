import entradaDados from 'readline-sync';

//let num = entradaDados.questionInt("Digite um numero da tabuada:");
//let cont = 0;
//while(cont <= 10) {
//let resultado = num * cont;
//console.log(`${num} x ${cont} = ${resultado}`);
//cont++;
//}

//* atividade 02 *//

let alunos = entradaDados.questionFloat("quantidade de alunos na sala:");
let cont = 1;
let notatotal = 0;

while (cont <= alunos) {
    let nota1 = entradaDados.questionFloat('Nota do primeiro bimestre:');
    let nota2 = entradaDados.questionFloat('Nota do segundo bimestre:');
    let nota3 = entradaDados.questionFloat('Nota do terceiro bimestre:');
    let nota4 = entradaDados.questionFloat('Nota do quarto bimestre:');
    let notaAlunos = (nota1 + nota2 + nota3 + nota4) / 4;

    console.log(`A media do aluno é : ${alunos}`);
    notatotal += notaAlunos;
    cont++;
};

let media = notatotal / alunos;
console.log(`A media da sala é: ${media}`);


//*atividade 3*//

import rl from 'readline-sync';

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar a variável de tentativa do usuário
let tentativa;

// Iniciar o loop do-while
do {
    // Solicitar ao usuário que faça uma tentativa
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");

    // Verificar se a tentativa está correta, maior ou menor que o número aleatório
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

    // Continuar o loop enquanto a tentativa estiver incorreta
} while (tentativa !== numeroAleatorio);



//*atividade For 4*//

let anterior = 0;
let atual = 1;
console.log(anterior)
console.log(atual);

for (let i = 3; i <= 20; i++ ){
    let proximo = anterior + atual;
    console.log(proximo);
    anterior = atual;
    atual = proximo;
}


//*atividade 5*//

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    // Calcular o imposto de renda conforme a tabela
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075; //7,5 / 100 = 0.075
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    // Imprimir o nome e o valor do imposto de renda
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}




