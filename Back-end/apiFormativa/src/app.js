const express = require("express");
const app = express();
const routes = require('./routes')

app.use(express.json());

app.use('/', routes)
module.exports = app


function validarProduto(id){
  id (!id || isNaN(id)){
    return "ID invalido"
  }
}

const queryAsync = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.json({ sucesso: true, mensagem: "API PRODUTO" });
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await queryAsync("SELECT * FROM produto ORDER BY id DESC");

    res.json({
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro.message,
    });
  }
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido",
      });
    }

    const produto = await queryAsync("SELECT * FROM produto WHERE id=?", [id]);

    if (!produto.length) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado",
      });
    }

    res.json({
      sucesso: true,
      dados: produto[0],
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro.message,
    });
  }
});

app.post("/produtos", async (req, res) => {
  try {
    const { nome, descricao, preco, disponivel } = req.body;

    if (
      !nome ||
      !descricao ||
      preco === undefined ||
      disponivel === undefined
    ) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Campos obrigatórios",
      });
    }

    if (typeof preco !== "number" || preco <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Preço inválido",
      });
    }

    const resultado = await queryAsync("INSERT INTO produto SET ?", {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco,
      disponivel,
    });

    res.status(201).json({
      sucesso: true,
      dados: { id: resultado.insertId },
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro.message,
    });
  }
});

app.put("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido",
      });
    }

    const produto = await queryAsync("SELECT * FROM produto WHERE id=?", [id]);

    if (!produto.length) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado",
      });
    }

    if (dados.preco !== undefined) {
      if (typeof dados.preco !== "number" || dados.preco <= 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Preço inválido",
        });
      }
    }

    await queryAsync("UPDATE produto SET ? WHERE id=?", [dados, id]);

    res.json({
      sucesso: true,
      mensagem: "Produto atualizado",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro.message,
    });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido",
      });
    }

    const produto = await queryAsync("SELECT * FROM produto WHERE id=?", [id]);

    if (!produto.length) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado",
      });
    }

    await queryAsync("DELETE FROM produto WHERE id=?", [id]);

    res.json({
      sucesso: true,
      mensagem: "Produto deletado",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro.message,
    });
  }
});

module.exports = app;
