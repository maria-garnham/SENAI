 const btn = document.querySelector(".btn-pedido");
 

const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

        // Mudança sutil de cor se o valor for alto (Feedback Visual Aula 6)
        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
    });
}


// 2. Adicionamos o 'ouvinte' (Evento, Função)
btn.addEventListener('click', function() {
// LINHA A LINHA: Quando o clique ocorrer, este bloco será executado
console.log("O vigia detectou um clique no botão!");
btn.textContent = "Processando...";
});



//3. Adicionando ouvinte compartilhado 

const massas = document.querySelector("#secao-massas")

massas.addEventListener('click', (event) => {
    
    const clicado = event.target

    if(clicado.classList.contains("btn-pedido")){
        console.log("Você clicou no botão de pedido da massa: ")
    }
})








// 3. EVENTO DE CLIQUE PARA TODOS OS BOTÕES (Mobile e Desktop)
// Usamos querySelectorAll para garantir que todos os botões da página funcionem.
const botoesPedido = document.querySelectorAll(".btn-pedido");

botoesPedido.forEach((botao) => {
    // Usamos 'click' que é universal para mouse e touch
    botao.addEventListener("click", (event) => {
        // Evita qualquer comportamento padrão do navegador
        event.preventDefault();

        const nomePrato = botao.parentElement.querySelector("h3").textContent;
        alert(
            `🥘 Sucesso! Seu pedido de "${nomePrato}" foi enviado para a cozinha.`,
        );

        // Efeito visual no botão após clique
        botao.textContent = "✓ Pedido Enviado";
        botao.style.backgroundColor = "#27ae60"; // Verde Sucesso
        botao.disabled = true;
    });
});



//EVENTO clique para todos os botões - Modelo Geral QuerySelectorAll

const botoesPedido = document.querySelectorAll(".btn-pedido")

botoesPedido.forEach((botao) =>{
    botao.addEventListener("click", (event) =>{
        event.preventDefault()
    })

})