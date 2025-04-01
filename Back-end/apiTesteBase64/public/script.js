// Envio de uma imagem para um servidor. Ele permite que o usuário selecione um arquivo de imagem, converte esse arquivo em uma string Base64.
const input = document.getElementById("arquivo")
const botao = document.getElementById("enviar")

let imagemBase64 = ""

input.addEventListener("change", () => {
  const arquivo = input.files[0]

  const reader = new FileReader()

  reader.onload = () => {
    imagemBase64 = reader.result
    console.log(imagemBase64)
  }

  reader.readAsDataURL(arquivo)
})

// Envia a string Base64 para o servidor usando uma requisição POST. O servidor, por sua vez, decodifica a string e salva a imagem no disco.
botao.addEventListener("click", async () => {
  if (!imagemBase64) {
    alert("Selecione uma imagem")
    return
  }

  const resposta = await fetch("/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      imagem: imagemBase64
    })
  })

  const dados = await resposta.json()

  alert(dados.mensagem || dados.erro)
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})