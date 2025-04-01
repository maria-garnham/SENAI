const validarEdixtencia = (resultado, res, tipo) => {
  if (resultado.length === 0) {
    res.status(404).json({
      sucesso: false,
      mensagem: `${tipo} não encontrado`,
    });
    return false;
  }
  return true;
};

//Exercicio 1
app.get("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await queryAsync("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);

    if (!validarEdixtencia(usuario, res, "Usuario")) {
      return;
    }

    res.status(200).json({
      sucesso: true,
      dados: usuario[0],
    });
  } catch (erro) {
    res.status(500).json({ erro: "Erro interno no servidor" });
  }
});

//Exercício 2
const validarDados = (cliente, valor) => {
  if (!cliente || !valor) {
    return "Cliente e valor são obrigatórios";
  }

  if (typeof valor != "Number" || valor <= 0) {
    return "Valor inválido";
  }

  return null;
};

app.post("/pedidos", async (req, res) => {
  try {
    const erro = validarDados(req.body);

    if (erro) {
      return res.status(400).json({
        sucesso: false,
        mensagem: erro,
      });
    }

    await queryAsync("INSERT INTO pedido SET ?", [req.body]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Pedido Cadastrado.",
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao cadastrar pedidos.",
    });
  }
});

// Exercício 3
app.put("/salas/:id", async (req, res) => {
  try {
    const id = req.params;
    const dados = req.body;

    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (!validarExistencia(sala, res, "Sala")) {
      return;
    }

    if (Object.keys(dados).lenght === 0) {
      return res.status(400).json({
        //Usa o object kyes para verifiar as chaves dentro do objeto, se nao tiver nada na variavel dados vai retornar para o usuario que essa variavel esta vazia, e se tiver algum valor ele nao vai entrar nesse if.
        sucesso: false,
        mensagem: "Nanhum dado enviado.",
      });
    }

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [dados, id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala atualizada",
    });
  } catch (error) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar sala",
    });
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const sala = await queryAsync("SELECT * FROM sala WHERE id = ?", [id]);

    if (!validarExistencia(sala, res, "Sala")) {
      return;
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Sala deletada",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao deletar sala",
    });
  }
});