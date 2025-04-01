
//Missão 1: Recepção do Cliente (Manipulação Estática e Date)

const agora = new Date();
const hora = agora.getHours();

if (hora < 12) {
    alert("Bom dia! Pizza no café da manhã?");
} 
if (hora >12 && hora <18){
    alert("Boa tarde! Que tal uma fatia agora?")
}
else {
    alert("Boa noite! A fornalha está quente, faça seu pedido!");
}



//Missão 2: Destaque do Chef (Eventos de Mouse e ClassList)
// Capture a seção com o ID banner-promocao.
// Adicione um evento de mouseover (quando o mouse entra): utilize classList.add() para injetar a classe .fatia-destaque na seção.
// Adicione um evento de mouseout (quando o mouse sai): utilize classList.remove() para retirar a classe .fatia-destaque.

const cards = document.querySelectorAll("#banner-promocao");
cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        classList.add('fatia-destaque') 
    });
    card.addEventListener("mouseout", () => {
        classList.remove('fatia-destaque')
    });
});





//Missão 3: Calculadora de Rodízio (Evento Input e Value)
// Crie um evento do tipo input nele. A cada número digitado, pegue o .value, multiplique por 45 (valor do rodízio por pessoa) e mostre o resultado em tempo real no span com o ID total-pagar.
// Regra Extra: Para evitar bugs, certifique-se de usar a função Number() no valor capturado antes de fazer a multiplicação!


const inputQtd = document.querySelector("#qtd-pessoas");
const precoTr = document.querySelector("#total-pagar");

if (inputQtd && precoTr) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTr.textContent = `R$ ${total.toFixed(2)}`;

    });
}







// Missão 4: Montar a Pizza (Click, Value, Concatenação e Validação)
// Capture o botão "Adicionar Sabor" (ID btn-adicionar), o campo de texto (ID sabor-pizza) e a div da lista de pedidos (ID lista-pedidos).
// Adicione um evento de click no botão.
// Regras de Exibição: 1. Primeiro, faça um if. O sistema NÃO PODE adicionar nada se o campo de texto estiver em branco (value == "").
// 2. Se estiver preenchido, injete o pedido na tela usando innerHTML +=. Você deve obrigatoriamente concatenar emojis na string. Exemplo: <article class="card-pedido"><h3>🍕 Sabor: [NOME DO SABOR AQUI] 🛵</h3></article>.





const botoesPedido = document.querySelectorAll(".btn-adicionar");
const textContent = document.querySelectorAll(".sabor-pizza");
const listaPedidos = document.querySelectorAll(".lista-pedidos");




botoesPedido.forEach((botao) => {
   
    botao.addEventListener("click", (event) => {
        
        event.preventDefault();

        if(textContent.value !== ""){
            const elemento = document.querySelector("#lista-pedidos");
            elemento.innerHTML += `<article class="card-pedido"><h3>🍕 Sabor: ${textContent.value} 🛵</h3></article>`;
            textContent.value = "";
        }
    });
});














// Missão 5: Cancelar Pedido (Limpeza Múltipla com Focus e Alert)
// O cliente mudou de ideia! Capture o botão "Cancelar Pedido" (ID btn-cancelar).
// Crie um evento de click nele que realize 3 ações consecutivas:
// Esvazie completamente a div dos pedidos (ID lista-pedidos), deixando o innerHTML como "".
// Dispare um window.alert("O seu pedido foi cancelado com sucesso!").
// Use a função focus() no campo de texto do sabor da pizza para o teclado voltar a piscar lá dentro automaticamente.


