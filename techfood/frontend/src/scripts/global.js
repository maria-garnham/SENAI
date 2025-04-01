document.addEventListener("DOMContentLoaded", function () {
  solicitarNomeCliente();
  exibirNomeCliente();
  exibirBoasVindas();
  exibirDatafooter();
  fecharMenuNavegar();
}); //domContentLoaded espera o conteudo da pagina carregar, pra que ele começe a fazer as acoes que envolve DOM



function solicitarNomeCliente(){
  if (sessionStorage.getItem("techfood_cliente")) return; //se o nome do cliente já estiver salvo, não solicita novamente

  const modal = document.getElementById("modal-boas-vindas"); //seleciona o modal de boas vindas - caixinha no começo da página

  if(modal) modal.style.display = "flex"; //exibe o modal

  const btnConfirmar = document.getElementById("btn-confirmar-nome"); //seleciona o botão de confirmar nome
  const inputNome = document.getElementById("input-nome-cliente"); //seleciona o campo de input do nome


  if (!btnConfirmar || !inputNome) return; //valida se os elementos existem

  btnConfirmar.addEventListener("click", function (){
    const nome = inputNome.value.trim(); //pega o valor do input e remove espaços em branco

    if (!nome){
      inputNome.focus(); //se o nome estiver vazio, foca novamente no input
      return;
    }

    sessionStorage.setItem("techfood_cliente", nome); //salva o nome do cliente no sessionStorage
    modal.style.display = "none"; //esconde o modal

    //Depois de estruturado e registrado o nome eu vou exibir na função abaixo
    exibirNomeCliente()
  });




  inputNome.addEventListener("keydown" , function (e){
    if (e.key === "Enter") btnConfirmar.click(); //se o cliente apertar enter, aciona o clique do botão confirmar
  });

  setTimeout(function(){
    inputNome.focus();
  }, 100);
}

function exibirNomeCliente() {
  const nome = sessionStorage.getItem("techfood_cliente"); 
  const elemento = document.getElementById("#boas-vindas"); //seleciona o elemento onde o nome do cliente será exibido
  if (!elemento) return

  const agora = new Date();
  const hora = agora.getHours() + agora.getMinutes() / 60; 
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite"; //determina a saudação com base na hora atual

  elemento.textContent = nome
    ? `${saudacao}, ${nome}! O que vai pedir hoje?`
    : `${saudacao}! Qual o seu pedido?`; //exibe a saudação junto com o nome do cliente


}





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




