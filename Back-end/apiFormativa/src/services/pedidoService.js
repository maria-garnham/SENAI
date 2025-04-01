// Importa o PedidoRepository
// require() = usado para importar arquivos no Node.js
// '../repositories/PedidoRepository' = caminho da pasta onde está o arquivo
// Repository = camada responsável por conversar com o banco de dados
const PedidoRepository = require('../repositories/pedidoRepository');

// Importa o repositório de produtos
const ProdutoRepository = require('../repositories/produtoRepository');

// Cria a classe PedidoService
// class = modelo/estrutura para organizar funções
// Service = camada onde fica a lógica do sistema
class PedidoService {

    // Método para criar um pedido
    // async = permite usar await dentro da função
    // await = espera uma operação terminar
    async criarPedido(pedidoData) {

        // Pega os dados enviados
        // pedidoData = objeto recebido do controller
        // Exemplo:
        // {
        //   cliente: "Maria",
        //   itens: []
        // }

        // Desestruturação:
        // pega cliente e itens do objeto pedidoData
        const { cliente, itens } = pedidoData;

        // Verifica se itens existe
        // !itens = itens não existe

        // itens.length === 0
        // verifica se a lista está vazia

        // length = quantidade de elementos do array
        if (!itens || itens.length === 0) {

            // throw new Error()
            // gera um erro manualmente
            throw new Error(
                'O pedido deve conter ao menos um item.'
            );

        }

        // Variável para guardar o total do pedido
        // let = variável que pode mudar depois
        let totalCalculado = 0;

        // Array vazio para guardar os itens já organizados
        // const = variável fixa
        // [] = array/lista
        const itensCompletos = [];

        // for...of = percorre cada item da lista
        // Exemplo:
        // item1
        // item2
        // item3
        for (const item of itens) {

            // Verifica se o item possui:
            // produto_id
            // quantidade

            // quantidade <= 0
            // impede quantidade negativa ou zero

            if (
                !item.produto_id ||
                !item.quantidade ||
                item.quantidade <= 0
            ) {

                throw new Error(
                    'Cada item deve ter produto_id e quantidade maior que zero.'
                );

            }

            // Busca o produto no banco
            // findById() = procura um registro pelo id
            const produto =
                await ProdutoRepository.findById(item.produto_id);

            // Verifica se encontrou o produto
            if (!produto) {

                // Template string
                // ${}
                // coloca variável dentro do texto
                throw new Error(
                    `Produto com ID ${item.produto_id} não encontrado.`
                );

            }

            // Verifica se o produto está disponível
            // produto.disponivel = true ou false
            if (!produto.disponivel) {

                throw new Error(
                    `O produto ${produto.nome} está indisponível para pedidos.`
                );

            }

            // Calcula subtotal
            // subtotal = valor do produto × quantidade
            const subtotal =
                produto.preco * item.quantidade;

            // +=
            // soma no valor atual
            // Exemplo:
            // total = total + subtotal
            totalCalculado += subtotal;

            // push()
            // adiciona um item dentro do array
            itensCompletos.push({

                // id do produto
                produto_id: produto.id,

                // quantidade comprada
                quantidade: item.quantidade,

                // preço de uma unidade
                preco_unitario: produto.preco

            });
        }

        // Cria objeto do pedido
        // objeto = estrutura com chave e valor
        const novoPedido = {

            // cliente enviado
            cliente,

            // status inicial
            // pendente = pedido acabou de ser criado
            status: 'pendente',

            // valor total calculado
            total: totalCalculado
        };

        // Salva o pedido no banco
        // create() = função que insere no banco

        // Passa:
        // novoPedido = dados do pedido
        // itensCompletos = itens organizados
        const pedidoId =
            await PedidoRepository.create(
                novoPedido,
                itensCompletos
            );

        // Busca novamente o pedido pelo id
        // Isso é feito para retornar o pedido completo
        return await PedidoRepository.findById(pedidoId);
    }

    // Método para listar pedidos
    async listarPedidos() {

        // findAll()
        // busca todos os registros do banco
        return await PedidoRepository.findAll();

    }

    // Método para buscar pedido pelo id
    async obterPedidoPorId(id) {

        // Busca pedido no banco
        const pedido =
            await PedidoRepository.findById(id);

        // Verifica se o pedido existe
        if (!pedido) {

            throw new Error('Pedido não encontrado.');

        }

        // Retorna o pedido
        return pedido;
    }

    // Método para atualizar status do pedido
    async atualizarStatus(id, novoStatus) {

        // Array com status permitidos
        const statusValidos = [

            // pedido criado
            'pendente',

            // pedido sendo preparado
            'preparo',

            // pedido pronto
            'pronto',

            // pedido entregue
            'entregue'

        ];

        // includes()
        // verifica se existe dentro do array
        if (!statusValidos.includes(novoStatus)) {

            // join(', ')
            // junta os itens do array em texto
            // Exemplo:
            // pendente, preparo, pronto
            throw new Error(
                `Status inválido. Permitidos: ${statusValidos.join(', ')}`
            );

        }

        // Busca pedido existente
        const pedidoExistente =
            await PedidoRepository.findById(id);

        // Verifica se encontrou
        if (!pedidoExistente) {

            throw new Error('Pedido não encontrado.');

        }

        // Atualiza no banco

        // update()
        // UPDATE no SQL = altera dados existentes

        // id = pedido que será alterado
        // { status: novoStatus }
        // novo valor do status
        const affectedRows =
            await PedidoRepository.update(
                id,
                { status: novoStatus }
            );

        // affectedRows
        // quantidade de linhas alteradas no banco

        // ===
        // comparação exata
        if (affectedRows === 0) {

            throw new Error(
                'Não foi possível atualizar o status do pedido.'
            );

        }

        // Busca novamente o pedido atualizado
        return await PedidoRepository.findById(id);
    }

    // Método para excluir pedido
    async excluirPedido(id) {

        // Busca pedido antes de excluir
        const pedidoExistente =
            await PedidoRepository.findById(id);

        // Verifica se existe
        if (!pedidoExistente) {

            throw new Error('Pedido não encontrado.');

        }

        // delete()
        // DELETE no SQL = remove registro do banco
        const affectedRows =
            await PedidoRepository.delete(id);

        // Verifica se realmente deletou
        if (affectedRows === 0) {

            throw new Error(
                'Falha ao excluir pedido.'
            );

        }
    }
}

// Exporta a classe
// module.exports = permite usar em outros arquivos
module.exports = new PedidoService();