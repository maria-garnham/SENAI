const produtoService = require("../services/produtoService")

class produtoController{
    async listar (req,res){
        try {
            const resultado = await produtoService.listarProdutos()
            res.json(resultado)
        } catch (error) {
            res.status(500).json({
                sucesso:false,
                mensagem:erro.mensagem || "Erro interno do servidor",
                erro: erro
            })

        }

    }

    async buscarPorId(req,res){
        try {
            const resultado = await produtoService.buscarProdutoPorId(req.params.id)
            req.json(resultado)
        } catch (erro) {
            res.status(500).json({
                sucesso:false,
                mensagem:erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }


    async cadastrar(req,res){
        try {
            const resultado = await produtoService.cadastrarProduto(req.body)
            res.status(201).json(resultado)
        } catch (error) {
            res.status(500).json({
                sucesso:false,
                mensagem:erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }


    async atualizar (req,res){
        try {
            const resultado = await produtoService.atualizarProduto(req.params.id,req.body)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(500).json({
                sucesso:false,
                mensagem:erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }



    async deletar(req,res){
        try {
            const resultado = await produtoService.deletarProduto(req.params.id)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(500).json({
                sucesso:false,
                mensagem:erro.mensagem || "Erro interno do servidor",
                erro: erro
            })
        }
    }
}


module.exports = new produtoController