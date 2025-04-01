const validarEdixtencia = (resultado, res, tipo) => {
  if (listaProdutos.length === 0) {
    res.status(404).json({
      sucesso: false,
      mensagem: `Produto não encontrado`,
    });
    return false;
  }
  return true;
};


const buscarProdutoPorId = async (id) => {
  return await queryAsync("SELECT * FROM produto WHERE id = ?", [id]);
};


app.put("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const produto = await buscarProdutoPorId(id);

    if (!validarExistencia(produto, res, "Produto")) {
      return;
    }

    if (typeof valorPreco != "Number" || valorPreco <= 0) {
      return "O valor de preço deve ser positivo";
    }

    if (!nome === undefined) {
      return "O nome do produto é obrigatório";
    }

    await queryAsync("UPDATE produto SET ? WHERE id = ?", [
      dadosAtualizados,
      id,
    ]);

    res.json({
      sucesso: true,
      mensagem: "Produto atualizado com sucesso!",
    });
  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar produto",
    });
  }
});
