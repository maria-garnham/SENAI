//Ele serve arquivos estáticos da pasta "public" e tem uma rota POST "/upload" para receber uma imagem em formato Base64, decodificá-la e salvá-la no disco como "imagem_recebida.png". 
const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.json({ limit: "10mb" }))
app.use(express.static("public"))

app.post("/upload", (req, res) => {
  try {
    const { imagem } = req.body

    if (!imagem) {
      return res.status(400).json({
        erro: "Nenhuma imagem enviada"
      })
    }

    const base64Data = imagem.replace(/^data:image\/png;base64,/, "")

    fs.writeFileSync("imagem_recebida.png", base64Data, "base64")

    res.json({
      mensagem: "Imagem salva com sucesso!"
    })
  } catch (erro) {
    res.status(500).json({
      erro: "Erro ao salvar imagem"
    })
  }
})

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000")
})