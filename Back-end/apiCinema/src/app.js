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
  res.send("API CINEMA");
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


app.get("/salas", async (req, res) => {
  try {
    const salas = await queryAsync("SELECT * FROM sala");
    res.json({ sucesso: true, dados: salas });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ mensagem: "ID inválido" });
    }

    const sala = await queryAsync("SELECT * FROM sala WHERE id=?", [id]);

    if (!sala.length) {
      return res.status(404).json({ mensagem: "Sala não encontrada" });
    }

    res.json({ sucesso: true, dados: sala[0] });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.post("/salas", async (req, res) => {
  try {
    const { nome, capacidade } = req.body;

    if (!nome || !capacidade) {
      return res.status(400).json({ mensagem: "Campos obrigatórios" });
    }

    const resultado = await queryAsync("INSERT INTO sala SET ?", {
      nome: nome.trim(),
      capacidade,
    });

    res.json({ sucesso: true, id: resultado.insertId });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("UPDATE sala SET ? WHERE id=?", [req.body, id]);

    res.json({ sucesso: true, mensagem: "Sala atualizada" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("DELETE FROM sala WHERE id=?", [id]);

    res.json({ sucesso: true, mensagem: "Sala deletada" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});


app.get("/sessoes", async (req, res) => {
  try {
    const sessoes = await queryAsync("SELECT * FROM sessao");
    res.json({ sucesso: true, dados: sessoes });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const sessao = await queryAsync("SELECT * FROM sessao WHERE id=?", [id]);

    if (!sessao.length) {
      return res.status(404).json({ mensagem: "Sessão não encontrada" });
    }

    res.json({ sucesso: true, dados: sessao[0] });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.post("/sessoes", async (req, res) => {
  try {
    const { filme_id, sala_id, data_hora, preco } = req.body;

    const resultado = await queryAsync("INSERT INTO sessao SET ?", {
      filme_id,
      sala_id,
      data_hora,
      preco,
    });

    res.json({ sucesso: true, id: resultado.insertId });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("UPDATE sessao SET ? WHERE id=?", [req.body, id]);

    res.json({ sucesso: true, mensagem: "Sessão atualizada" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/sessoes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("DELETE FROM sessao WHERE id=?", [id]);

    res.json({ sucesso: true, mensagem: "Sessão deletada" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});


app.get("/ingressos", async (req, res) => {
  try {
    const ingressos = await queryAsync("SELECT * FROM ingresso");
    res.json({ sucesso: true, dados: ingressos });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.get("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const ingresso = await queryAsync("SELECT * FROM ingresso WHERE id=?", [id]);

    if (!ingresso.length) {
      return res.status(404).json({ mensagem: "Ingresso não encontrado" });
    }

    res.json({ sucesso: true, dados: ingresso[0] });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.post("/ingressos", async (req, res) => {
  try {
    const { sessao_id, numero_assento, tipo, valor_pago } = req.body;

    const resultado = await queryAsync("INSERT INTO ingresso SET ?", {
      sessao_id,
      numero_assento,
      tipo,
      valor_pago,
    });

    res.json({ sucesso: true, id: resultado.insertId });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.put("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("UPDATE ingresso SET ? WHERE id=?", [req.body, id]);

    res.json({ sucesso: true, mensagem: "Ingresso atualizado" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

app.delete("/ingressos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await queryAsync("DELETE FROM ingresso WHERE id=?", [id]);

    res.json({ sucesso: true, mensagem: "Ingresso deletado" });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;


























const express = require('express');
const db = require('./config/db');
const app = express();
app.use(express.json());

// 1. GET /: Rota de teste
app.get('/', (req, res) => res.send('API SaborDigital Ativa'));

// 2. GET /produtos: Listar todos
app.get('/produtos', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM produto ORDER BY id DESC');
        res.json({ sucesso: true, dados: rows });
    } catch (err) {
        res.status(500).json({ sucesso: false, mensagem: err.message });
    }
});

// 3. GET /produtos/:id: Buscar um
app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) return res.status(400).json({ sucesso: false, mensagem: 'ID inválido' });
    try {
        const [rows] = await db.query('SELECT * FROM produto WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado' });
        res.json({ sucesso: true, dados: rows[0] });
    } catch (err) {
        res.status(500).json({ sucesso: false, mensagem: err.message });
    }
});

// 4. POST /produtos: Cadastrar
app.post('/produtos', async (req, res) => {
    const { nome, descricao, preco, disponivel } = req.body;
    if (!nome || !preco) return res.status(400).json({ sucesso: false, mensagem: 'Campos obrigatórios: nome, preco' });
    if (isNaN(preco) || preco <= 0) return res.status(400).json({ sucesso: false, mensagem: 'Preço inválido' });

    try {
        const [result] = await db.query(
            'INSERT INTO produto (nome, descricao, preco, disponivel) VALUES (?, ?, ?, ?)',
            [nome, descricao, preco, disponivel || true]
        );
        res.status(201).json({ sucesso: true, dados: { id: result.insertId, ...req.body } });
    } catch (err) {
        res.status(500).json({ sucesso: false, mensagem: err.message });
    }
});

// 5. PUT /produtos/:id: Atualizar
app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco, disponivel } = req.body;

    try {
        const [existing] = await db.query('SELECT * FROM produto WHERE id = ?', [id]);
        if (existing.length === 0) return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado' });

        await db.query(
            'UPDATE produto SET nome = ?, descricao = ?, preco = ?, disponivel = ? WHERE id = ?',
            [nome || existing[0].nome, descricao || existing[0].descricao, preco || existing[0].preco, disponivel !== undefined ? disponivel : existing[0].disponivel, id]
        );
        res.json({ sucesso: true, mensagem: 'Produto atualizado' });
    } catch (err) {
        res.status(500).json({ sucesso: false, mensagem: err.message });
    }
});

// 6. DELETE /produtos/:id: Remover
app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM produto WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ sucesso: false, mensagem: 'Produto não encontrado' });
        res.json({ sucesso: true, mensagem: 'Produto removido' });
    } catch (err) {
        res.status(500).json({ sucesso: false, mensagem: err.message });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));







































































///////////*****************///////////////                FORMATIVA              ///////////////////////////////*******************

