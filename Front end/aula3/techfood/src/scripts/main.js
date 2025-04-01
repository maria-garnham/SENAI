console.log("URL da página (via window):", window.location.href);
console.log("Título da aba (via document):", document.title);

const tituloPrincipal = document.getElementById("titulo-site");

const saudacao = document.querySelector("#boas-vindas");
const primeiroBotao = document.querySelector(".btn-pedido");
const nomeLasanha = document.querySelector("#card-lasanha h3");
const cardDestaque = document.querySelector(".card:nth-of-type(1)");
const imgLasanha = document.querySelector("img[alt='Lasanha Tech']");

const todosOsCards = document.querySelectorAll(".card");
console.log("Total de cards na vitrine:", todosOsCards.length);

const horaAtual = new Date().getHours();
saudacao.textContent = (horaAtual < 12) ? "Bom dia! Veja nossas massas." : "Boa tarde! Que tal uma pizza?";

imgLasanha.setAttribute("title", "Nossa famosa massa artesanal");
imgLasanha.src = "src/images/lasanha-destaque.jpg";
imgLasanha.alt = "Foto da Lasanha Bolonhesa em Destaque";

tituloPrincipal.style.color = "#e67e22";

cardDestaque.classList.add('em-promocao');

console.log("Manipulação DOM Aula 5: Concluída com sucesso!");