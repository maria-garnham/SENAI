// ─────────────────────────────────────────────────────────
// PARTE 1 — da Aula 6

const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
  saudacao.textContent =
    hora < 12
      ? "Bom dia! Qual o seu pedido?"
      : "Boa tarde! Confira nosso cardápio.";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

const main = document.querySelector("main");

main.addEventListener("click", (event) => {
  const clicado = event.target; //vai pegar a ação do target, vai guardar qual elemento foi clicado.

  //Adicionar e remover quantidade de pedidos
  if (clicado.classList.contains("btn-menos")) {
    const box = clicado.parentElement;

    const spanQtd = box.querySelector(".qtd-valor");
    const valorAtual = Number(spanQtd.textContent); // o textContent é uma string, então a gente tem que converter para número, por isso o Number().
    spanQtd.textContent = Math.max(1, valorAtual - 1); // o Math.max é para garantir que o valor mínimo seja 1, ou seja, não vai deixar diminuir mais do que 1.

    atualizarPrecoCard(box);

    return;
  }

  if (clicado.classList.contains("btn-mais")) {
    const box = clicado.parentElement;

    const spanQtd = box.querySelector(".qtd-valor");
    const valorAtual = Number(spanQtd.textContent) + 1;
    spanQtd.textContent = valorAtual;
    atualizarPrecoCard(box);
    return;
  }

  //Solicitar pedido - Item
  if (clicado.classList.contains("btn-pedido")) {
    event.preventDefault(); // para evitar que a página seja recarregada quando clicar no botão de pedido

    const card = clicado.parentElement;
    const nomePrato = card.querySelector("h3").textContent;
    const quantidade = card.querySelector(".qtd-valor").textContent;
    const precoExibido = card.querySelector(".preco").textContent;

    clicado.textContent = "✓ Adicionado";
    clicado.style.backgroundColor = "#28a745";
    clicado.disabled = true;

    setTimeout(() => {
      clicado.textContent = "Pedir Agora";
      clicado.style.backgroundColor = "";
      clicado.disabled = false;
    }, 1500);

    if (!card.querySelector(".badge-adicionado")) {
      card.insertAdjacentHTML(
        "beforeend",
        "<span class='badge-adicionado'> ✓No resumo </span>",
      );
    }

    //função para colocar as informações do prato no resumo de itens do "carrinho"
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
  } //fechamento btn-pedido
}); //fechamento do ouvinte

function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));

  const quantidade = Number(box.querySelector(".qtd-valor").textContent);


  const total = precoUnitario * quantidade

  spanPreco.textContent = "R$" + total.toFixed(2).replace("." , ",") // replace = substitui dentro do total, tudo que for ponto tem que virar virgula
  spanPreco.style.color = total > 150? "#c0392b": "#e67e22"
}

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){
  const secaoResumo = document.querySelector("#secao-resumo")
  const listaResumo = document.querySelector("#lista-resumo")

  if(!secaoResumo || !listaResumo) return //se nao tiver nada no resumo ele encerra a função 

  secaoResumo.style.display = "block"

  const itemLi = document.createElement("li")
  itemLi.classList.add("item-resumo")

  const textoSpan = document.createElement("span")
  textoSpan.textContent = qtd + "x" + nome + "-" + preco

  const btnRemover = document.createElement("button")
  btnRemover.textContent = "❌"
  btnRemover.classList.add("btn-remover")

  btnRemover.addEventListener("click" , () =>{

    itemLi.remove()

    const badge = cardOrigem.querySelector(".badge-adicionado")

    if(badge) badge.remove()

    if(listaResumo.children.length === 0){
      secaoResumo.style.display = "none"
    } //children verifica o filho do lista resumo, se não tiver nenhum filho na lista do resumo, vai remover a parte da lista
  }) //fechou o evento de clique do botao remover Item


  itemLi.appendChild(textoSpan) //appendChild mostra o resultado do java script para o html
  itemLi.appendChild(btnRemover)
  listaResumo.appendChild(itemLi)
}






const btnLimpar = document.querySelector("#btn-limpar")

if(btnLimpar){
  btnLimpar.addEventListener("click", ()=>{
    const listaResumo = document.querySelector("#lista-resumo")
    const secaoResumo = document.querySelector("#secao-resumo")

    document.querySelectorAll(".badge-adicionado").forEach((b) =>  b.remove())


    while(listaResumo.firstElementChild){
      listaResumo.firstElementChild.remove()
    }

    secaoResumo.style.display = "none"

  })
}
