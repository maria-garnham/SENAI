document.addEventListener("DOMContentLoaded", function () {
  renderizarCardapio()
  // inicializarSubtotal();
  inicializarHoverCards();
  inicializarVitrine();
});

// function inicializarSubtotal() {
//   const inputQtd = document.querySelector("#qtd-lasanha");
//   const precoTexto = document.querySelector("#preco-lasanha");
//   const subTexto = document.querySelector("#sub-lasanha");

//   if (!inputQtd || !precoTexto) return;

//   inputQtd.addEventListener("input", function () {
//     const precoUnitario = 45.0;
//     const quantidade = Number(inputQtd.value);

//     if (isNaN(quantidade) || quantidade < 1) return;

//     const total = quantidade * precoUnitario;
//     precoTexto.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
//     precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";

//     if (subTexto) {
//       subTexto.textContent =
//         quantidade > 1
//           ? `${quantidade}x R$ ${precoUnitario.toFixed(2).replace(".", ",")}`
//           : "";
//     }
//   });
// }


async function renderizarCardapio() {
  const grid = document.querySelector("#grid-cardapio");

  if (!grid) return;

  grid.innerHTML = "<p class='loading'>Carregando cardápio...</p>";

  try{
    const produtos = await buscarProdutos();
    grid.innerHTML = "";

    produtos.forEach(function (produto){
      const card = document.createElement("article");
      card.classList.add("card");

      card.setAttribute("data-id" , produto.id);



      card.innerHTML = 
      `<h3>${produto.nome}</h3>` +
      `<p class='desc'> ${produto.descricao}</p> ` + 
      `<div class='quantidade-box'> ` + 
      `<button class='btn-qtd btn-menos'>-</button>` +
      `<span class='qtd-valor'>1</span>` +
      `<button class='btn-qtd btn-mais'>+</button>` +
      `</div>` 
      `<span class='preco' data-preco='${produto.preco} ' > ` +
      `R$ ${parseFloat(produto.preco).toFixed(2).replace(".", ",")}</span>` +
      `<button class='btn-pedido'>Pedir Agora</button>`;

      grid.appendChild(card);


    })


  } catch (error) {
    grid.innerHTML = `<p class='loading erro'>Erro ao carregar cardápio. Verifique se o servidor esta rodando</p>`;
  }
}








function inicializarHoverCards() {
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
}

function inicializarVitrine() {
  const main = document.querySelector("main");

  if (!main) return;

  main.addEventListener("click", (event) => {
    const clicado = event.target;

    // Adicionar e remover quantidade itens
    if (clicado.classList.contains("btn-menos")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      const valorAtual = Number(spanQtd.textContent);
      spanQtd.textContent = Math.max(1, valorAtual - 1);
      atualizarPrecoCard(box);
      return;
    }

    if (clicado.classList.contains("btn-mais")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      spanQtd.textContent = Number(spanQtd.textContent) + 1;
      atualizarPrecoCard(box);
      return;
    }

    // Solicitar pedido - Item

    if (clicado.classList.contains("btn-pedido")) {
      event.preventDefault();

      // const card = clicado.parentElement;
      // const nomePrato = card.querySelector("h3").textContent;
      // const quantidade = Number(card.querySelector(".qtd-valor").textContent)
      // const precoExibido = parseFloat (card.querySelector(".preco").getAttribute("data-preco"))

      // clicado.textContent = "✔ Adicionado";
      // clicado.style.backgroundColor = "#27ae60";
      // clicado.disabled = true;

      // setTimeout(() => {
      //   clicado.textContent = "Pedir Agora";
      //   clicado.style.backgroundColor = "";
      //   clicado.disabled = false;

      //   const box = card.querySelector(".quantidade-box");
      //   if (box) {
      //     const spanQtd = box.querySelector(".qtd-valor");
      //     if (spanQtd > 0) spanQtd.textContent = "1";
      //     atualizarPrecoCard(box);
      //   }
      // }, 1500);

      // const badgeExistente = card.querySelector(".badge-adicionado");

      // if (badgeExistente) badgeExistente.remove()      
     
      // card.insertAdjacentHTML(
      //   "beforeend",
      //   "<span class='badge-adicionado'> ✔ No resumo</span>",
      // );

      // setTimeout(function(){
      //   const badge = card.querySelector(".badge-adicionado")

      //   if(badge) badge.remove()
      // }, 2000)

      // função que enviará as informações ao WebStorage
      salvarPedido({produtoID, quantidade, clicado});
      atualizarContadorPedidos()

    } // fechamento btn-pedido
  }); // fechamento do ouvinte
}

function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade;

  spanPreco.textContent = "R$" + total.toFixed(2).replace(".", ",");
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}

function salvarPedido(pedido){
  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]")

  pedido.subtotal = pedido.preco * pedido.qtd
  lista.push(pedido)

  localStorage.setItem("techfood_pedidos", JSON.stringify(lista))
}

function atualizarContadorPedidos() {
  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
  const total = lista.reduce(function (acc, p) { return acc + p.qtd; }, 0);

  const linkMenu = document.querySelector("#menu a[href='pedidos.html']");
  if (!linkMenu) return;

  let badge = linkMenu.querySelector(".badge-menu");
  if (!badge) {
    linkMenu.insertAdjacentHTML("beforeend", "<span class='badge-menu'>0</span>");
    badge = linkMenu.querySelector(".badge-menu");
  }

  badge.textContent = total;
  linkMenu.classList.add("menu-ativo");
}







// É funcionalidade NOVA (Apenas Visual)
function exibirLinkPedidos(){
  // Continua...
}