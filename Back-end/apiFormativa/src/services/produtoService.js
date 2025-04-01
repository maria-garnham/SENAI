const produtoRepository = require ("../repositories/produtoRepository")


class ProdutoService {
    async listarProdutos(){
        const listaProdutos = await produtoRepository.listarTodosProdutos()
        return{
            sucesso: true,
            dados: listaProdutos
        }
    }

    async buscarProdutoPorId (id){
        if (!id || isNaN(id)){//quando a resposta nao der certo, ele entra no throw, não deixa o código continuar
            throw { status: 400,
                mensagem: "ID inválido"
            }
        }
        const produto = await produtoRepository.buscarPorId(id)
        if(!produto){
            throw { status: 404,
                    mensagem: "Produto não encontrado"
            }
        }

        return{
            sucesso: true,
            dados: produto
        }
    }





    async cadastrarProduto(dados){
        const{nome, descricao, preco, categoria, disponivel} = dados

        if(!nome || !descricao || preco === undefined ){
            throw{ status: 400,
                    mensagem: "Nome, descrição ou preço são obrigatórios"
            }
        }

        if ( typeof preco !== 'number' || preco < 0 ){
            throw{ status: 400, 
                    mensagem :"Preço deve ser um número positivo"
            }
        }

        const novoProduto = {
            nome: nome.trim(),
            descricao: descricao.trim,
            preco,
            categoria: categoria || null,
            disponivel: disponivel ?? true
        }

        const id = await produtoRepository.cadastrarNovoProduto(novoProduto)

        return {
            sucesso: true,
            mensagem: "Produto cadastrado",
            id: id
        }
    }


    async atualizarProduto(id,dados){
        if (!id || isNaN(id)){
            throw {
                    status: 400, 
                    mensagem: "ID inválido"
            }
        }

        const produto = await produtoRepository.buscarPorId(id)

        if (!produto){
            throw{
                status: 404,
                mensagem: "Produto não encontrado"
            }
        }

        const produtoAtualizado = {}
        const {nome, descricao, preco, categoria, disponivel} = dados


        if ( nome !== undefined) produtoAtualizado.nome = nome.trim
        if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim
        if (preco !== undefined){
            if(typeof preco !== 'number' || preco <= 0){
                throw {
                    status : 400, 
                    mensagem: "Preço deve ser um número maior que zero"
                }
            }
            produtoAtualizado.preco = preco
        } 

        if(categoria !== undefined) produtoAtualizado.categoria = categoria

        if ( disponivel !== undefined) produtoAtualizado.disponivel = disponivel

        if (Object.keys(produtoAtualizado).length === 0 ){
            throw{
                status: 400,
                mensagem: "Nenhum dado para ser atualizado."
            }
        }


        await produtoRepository.atualizarProdutoPorId(id, produtoAtualizado)

        return {
            sucesso: true,
            mensagem: "Produto atualizado com sucesso."
        }
    }



    async deletarProdutos(id){
        if(!id || isNaN(id)){
            throw{
                status: 400,
                mensagem: "ID inválido"
            }
        }

        const produto = await produtoRepository.buscarPorId(id)
        if (!produto){
            throw{
                status: 404,
                mensagem: "Produto não encontrado"
            }
        }

        await produtoRepository.deletarProdutoPorId(id)
        return{
            sucesso: true,
            mensagem: "Produto deletado com sucesso"
        }
    }
}

module.exports = new ProdutoService()