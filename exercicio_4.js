class Veiculo {
    marca;
    modelo;
    ano;

    exibirInformacoes() {
        return `O carro é um ${this.modelo} de marca ${this.marca} fabricado no ano de ${this.ano}. `

    }
}

const carro = new Veiculo();
carro.marca = "Toyota"
carro.modelo = "Corolla"
carro.ano = 2022

const motocicleta = new Veiculo();
motocicleta.marca = "Honda"

motocicleta.modelo = "CBR 600RR"
motocicleta.ano = 2021

console.log(carro.exibirInformacoes())