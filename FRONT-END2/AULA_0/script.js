class Prato {
  constructor(nome, preco, categoria) {
    // `this` aponta pro objeto que está sendo criado agora.
    // Sem `this`, o valor "some" quando o constructor acaba.
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  formatarPreco() {
    return `R$ ${this.preco.toFixed(2).replace(".", ",")}`;
  }

  aplicarDesconto(percentual) {
    this.preco = this.preco * (1 - percentual / 100);
  }
}

const cardapio = [
  new Prato("Feijoada completa", 42.9, "Prato Principal"),
  new Prato("Moqueca de Peixe", 58.0, "Prato Principal"),
  new Prato("Coxinha Artesanal", 8.5, "Petisco"),
  new Prato("Brigadeiro Gourmet", 6.0, "Sobremesa"),
  new Prato("Morango do Amor (Pistache)", 15.0, "Sobremesa"),
  new Prato("Suco de Maracujá", 12.0, "Bebida"),
];

console.log("=== Pratos Criados ===");
cardapio.forEach((p) => {
  console.log(`${p.nome} -> ${p.formatarPreco()}`);
});

const containerCardapio = document.querySelector("#cardapio");


function criarCardPrato(prato) {
  const card = document.createElement("div");
  card.className = "card";


  card.innerHTML = `
    <h3>${prato.nome}</h3>
    <span class="categoria">${prato.categoria}</span>
    <div class="preco">${prato.formatarPreco()}</div>
  `;


  card.addEventListener("click", () => {
    alert(
      `🍽️ ${prato.nome}\n\n` +
        `Categoria: ${prato.categoria}\n` +
        `Preço: ${prato.formatarPreco()}`,
    );
  });


  return card;
}



function renderizarCardapio() {
  containerCardapio.innerHTML = '';

  cardapio.forEach(prato => {
    const card = criarCardPrato(prato);
    containerCardapio.appendChild(card);
  });
}

renderizarCardapio();



cardapio[0].aplicarDesconto(20);

renderizarCardapio();