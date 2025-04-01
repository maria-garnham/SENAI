/*Exercicio 1 : Enunciado: 
 crie uma classe chamada Pessoa que possua:
  _nome, _idade. 

 Crie um método apresentar() que exiba no console o nome e idade da pessoa*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

const pessoa1 = new Pessoa("Maria", 17);
pessoa1.apresentar();

/* crie uma classe Produto com:
 _ nome
 -preco

 crie um metodo mostrarPreco() que exiba o nome do produto e seu preço*/

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrarPreco() {
    console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
  }
}

const produto1 = new Produto("Sabonete", 12.99);
produto1.mostrarPreco();

/* HERANCA
 crie uma classe funcionario com:
 -nome
 
 Crie uma classe Gerente que herda de Funcionario e possui:
 -setor
 
 crie um metodo que exiba o nome e o setor do gerente*/

class Funcionario {
  constructor(nome) {
    this.nome = nome;
  }
}

class Gerente extends Funcionario {
  constructor(nome, setor) {
    super(nome);
    this.setor = setor;
  }

  mostrarDados() {
    console.log(`Funcionario: ${this.nome}, Setor: ${this.setor}`);
  }
}

const funcionario1 = new Gerente("Marlon", "TI");
funcionario1.mostrarDados();

/* crie uma classe Veiculo com:
 -marca
 
 Crie uma classe carro que herda de veiculo e possui:
 -modelo
 
 crie um método que exiba a marca e o modelo do carro*/

class Veiculo {
  constructor(marca) {
    this.marca = marca;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  mostrarMarca() {
    console.log(`Veiculo: ${this.marca}, Carro: ${this.modelo}`);
  }
}

const carro1 = new Carro("BMW", "sedan 320i");
carro1.mostrarMarca();

/*
EXERCICIO 5- ENCAPSULAMENTO
crie uma classe Conta onde:
- o saldo seja um atrivuto privado
- exista um método depositar (valor)
- exista um método mostrarSaldo()
*/

class Conta {
  #saldo;
  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("Valor Incorreto!");
    }
  }
  mostrarSaldo() {
    console.log(`Saldo atual:R$ ${this.#saldo.toFixed(2)}`);
  }
}

const conta1 = new Conta();
conta1.depositar(150);
conta1.mostrarSaldo();



/*
EXERCICIO 6- ENCAPSULAMENTO 

Enunciado:
crie uma classe Aluno onde:
- a nota seja um atrivuto privado
- exista um método definirNota(nota)
- exista um método mostrarNota()
*/

class Aluno {
    #nota;
    
    definirNota(nota){
        if (nota >= 0 && nota <= 10){
             this.#nota = nota 
        } else{
            console.log ("Nota Inválida.")
        }   
    }
    mostrarNota(){
        `Nota: ${this.#nota.toFixed(1)}`
    }
}

const aluno1 = new Aluno()
aluno1.definirNota(20)
aluno1.definirNota(8)
aluno1.mostrarNota