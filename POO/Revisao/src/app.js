import express from 'express'

const app = express()

app.use(express.json())

const musicas = [
    {
        id:233,
        titulo: "B.Y.O.B",
        artista: "System of Down",
        genero: "POP",
        ano_publicacao: 1998
    }
]

function buscarMusica(id){
    return musicas.findIndex(m => {
        return m.id === Number(id)
    })
}

app.get("/musicas", (req,res) => {
    res.status(200).json(musicas)
})

export default app