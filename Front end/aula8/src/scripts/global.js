document.addEventListener("DOMContentLoaded", function () {
  exibirBoasVindas();
  exibirDatafooter();
  fecharMenuNavegar();
}); //domContentLoaded espera o conteudo da pagina carregar, pra que ele começe a fazer as acoes que envolve DOM

function exibirBoasVindas() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const horaExata = hora + minutos / 60;

  let saudacao;
  if (horaExata >= 5 && horaExata < 12) {
    saudacao = "☀️ Bom dia! Qual o seu pedido?";
  } else if (horaExata >= 12 && horaExata < 18) {
    saudacao = "🌤️ Boa tarde! Confira nosso cardápio.";
  } else {
    saudacao = "🌙 Boa noite! Ainda dá tempo de pedir.";
  }

  const elemSaudacao = document.querySelector("#boas-vindas");
  if (elemSaudacao) elemSaudacao.textContent = saudacao;
}

function exibirDatafooter() {
  //essa função é para exibir a data atual no rodapé da página
  const elemFooter = document.querySelector("#data-hora-footer");
  if (!elemFooter) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  elemFooter.textContent = dataFormatada;
}

function fecharMenuNavegar() {
  //valida se a tela tem um determinado tamanho
  const isMobile = window.matchMedia("(max-width: 600px)").matches 

  if (!isMobile) return; 

  const linksMenu = document.querySelectorAll("#menu a")

  linksMenu.forEach (function (link) {
    link.addEventListener("click", function () {
        const checkbox = document.getElementById("#bt-menu");
        if (checkbox) checkbox.checked = false; //desmarca o checkbox para fechar o menu
    })
  })
}
