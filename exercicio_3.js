class Imovel {
    quartos;
    tipo;
    endereco;

    exibirInformacoes(){
        return`O imovel é um ${this.tipo} contém ${this.quartos} quartos, e esta localizado no endereço${this.endereco}`
    }
}
 const casa = new Imovel();
 casa.quartos = 4
 casa.tipo = "Casa"
 casa.endereco = "Rua da Amizade, 789 - Bairro Alegre";

 const apartamento = new Imovel();
 apartamento.quartos = 2
 apartamento.tipo = "Apartamento"
 apartamento.endereco = "Avenida da Paz, 123 - Centro"

 console.log(casa.exibirInformacoes())
 