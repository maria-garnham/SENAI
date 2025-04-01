//Exercício 1: Personalizador de Acesso (Strings e Interação)

let nome = prompt("Digite o seu primeiro nome:");
let sobrenome = prompt("Digite o seu sobrenome:");

let nomeCompleto = (nome.trim() + " " + sobrenome.trim());

alert("Nome completo: " + nomeCompleto.toLowerCase());

alert("O seu nome completo possui " + nomeCompleto.length + " caracteres (incluindo espaços).");









//Exercício 2: Calculadora de Divisão de Conta (Aritméticos)


let valorTotal = prompt("Digite o valor da conta: ")

let quantidadePessoas = prompt("Digite a quantidade de pessoas na mesa");

let valorPorPessoa = valorTotal / quantidadePessoas;

alert("Cada amigo deve pagar R$ " + valorPorPessoa.toFixed(2));






//Exercício 3: Validador de Promoção (Lógicos e Relacionais)
let valorConta = prompt("Digite o valor da conta: ");
let cupom = prompt("Você deseja utilizar algum cupom? (Sim ou Não?)");
if (cupom.toLowerCase() == "sim" || valorConta > 150) {
  alert("Frete Grátis Liberado");
} else {
  alert("Frete Pago");
}








//Exercício 4: Sorteador de Brindes (Math)

let numeroEscolhido = prompt("Escolha um número de 1 a 10:");
let numeroSorteado = Math.floor(Math.random () * 10) + 1;

if (numeroEscolhido == numeroSorteado) {
  alert("Parabéns, você ganhou um brinde!");
} else {
  alert("Que pena, o número sorteado foi " + numeroSorteado);
}





//Exercício 5: Gestão de Frota (Orientação a Objetos)


class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
    idadeVeiculo(anoAtual) {
        return anoAtual - this.ano;
    }
}

const meuCarro = new Veiculo("Corolla", "Toyota", 2020);
const anoAtual = new Date().getFullYear();
const idade = meuCarro.idadeVeiculo(anoAtual);

alert("Modelo do carro: " + meuCarro.modelo + "\nIdade do carro: " + idade + " anos");
