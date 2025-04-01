const express = require("express");
const app = express();
const pool = require("./config/database");

app.use(express.json());

const queryAsync = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.send("API PRODUTO");
});


app.get("/filmes", async (req, res) => {
  try {
    const filmes = await queryAsync("SELECT * FROM filme");
    res.json({ sucesso: true, dados: filmes, total: filmes.length });
  } catch (erro) {
    res.status(500).json({ sucesso: false, erro: erro.message });
  }
});

app.get("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ mensagem: "ID inválido" });
    }

    const filme = await queryAsync("SELECT * FROM filme WHERE id=?", [id]);

    if (!filme.length) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    res.json({ sucesso: true, dados: filme[0] });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.post("/filmes", async (req, res) => {
  try {
    const { titulo, genero, duracao, classificacao, data_lancamento } = req.body;

    if (!titulo || !genero || !duracao) {
      return res.status(400).json({ mensagem: "Campos obrigatórios" });
    }

    if (typeof duracao !== "number" || duracao <= 0) {
      return res.status(400).json({ mensagem: "Duração inválida" });
    }

    const resultado = await queryAsync("INSERT INTO filme SET ?", {
      titulo: titulo.trim(),
      genero: genero.trim(),
      duracao,
      classificacao: classificacao || null,
      data_lancamento: data_lancamento || null,
    });

    res.status(201).json({ sucesso: true, id: resultado.insertId });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({ mensagem: "ID inválido" });
    }

    await queryAsync("UPDATE filme SET ? WHERE id=?", [dados, id]);

    res.json({ sucesso: true, mensagem: "Filme atualizado" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/filmes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ mensagem: "ID inválido" });
    }

    await queryAsync("DELETE FROM filme WHERE id=?", [id]);

    res.json({ sucesso: true, mensagem: "Filme deletado" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});