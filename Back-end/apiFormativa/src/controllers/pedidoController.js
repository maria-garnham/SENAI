// Importa o arquivo PedidoService
const PedidoService = require('../services/PedidoService');

// Cria a classe PedidoController
class PedidoController {

    // Método para criar um pedido
    async create(req, res) {

        try {

            // Chama o service para criar o pedido usando os dados enviados
            const pedido = await PedidoService.criarPedido(req.body);

            // Status 201 = recurso criado com sucesso
            res.status(201).json({
                mensagem: 'Pedido criado com sucesso',
                pedido
            });

        } catch (error) {

            // Status 400 = erro na requisição enviada pelo usuário
            res.status(400).json({ erro: error.message });

        }
    }

    // Método para listar todos os pedidos
    async getAll(req, res) {

        try {

            // Busca todos os pedidos
            const pedidos = await PedidoService.listarPedidos();

            // Status 200 = operação realizada com sucesso
            res.status(200).json(pedidos);

        } catch (error) {

            // Status 500 = erro interno no servidor
            res.status(500).json({
                erro: 'Erro ao buscar pedidos',
                detalhe: error.message
            });

        }
    }

    // Método para buscar pedido pelo id
    async getById(req, res) {

        try {

            // Pega o id enviado pela rota
            const id = req.params.id;

            // Busca o pedido pelo id
            const pedido = await PedidoService.obterPedidoPorId(id);

            // Status 200 = pedido encontrado com sucesso
            res.status(200).json(pedido);

        } catch (error) {

            // Status 404 = pedido não encontrado
            res.status(404).json({ erro: error.message });

        }
    }

    // Método para atualizar o status do pedido
    async updateStatus(req, res) {

        try {

            // Pega o id da rota
            const id = req.params.id;

            // Pega o status enviado no body
            const { status } = req.body;

            // Verifica se o status foi enviado
            if (!status) {

                // Status 400 = campo obrigatório não enviado
                return res.status(400).json({
                    erro: 'O campo status é obrigatório.'
                });

            }

            // Atualiza o status do pedido
            const pedidoAtualizado =
                await PedidoService.atualizarStatus(id, status);

            // Status 200 = atualização feita com sucesso
            res.status(200).json({
                mensagem: 'Status atualizado com sucesso',
                pedido: pedidoAtualizado
            });

        } catch (error) {

            // Se a mensagem tiver "não encontrado"
            // retorna 404, senão retorna 400
            const code =
                error.message.includes('não encontrado') ? 404 : 400;

            // Retorna o erro
            res.status(code).json({ erro: error.message });

        }
    }

    // Método para excluir pedido
    async delete(req, res) {

        try {

            // Pega o id da rota
            const id = req.params.id;

            // Exclui o pedido pelo id
            await PedidoService.excluirPedido(id);

            // Status 200 = pedido removido com sucesso
            res.status(200).json({
                mensagem: 'Pedido excluído com sucesso'
            });

        } catch (error) {

            // Se não encontrar retorna 404
            // senão retorna 400
            const code =
                error.message.includes('não encontrado') ? 404 : 400;

            // Retorna o erro
            res.status(code).json({ erro: error.message });

        }
    }
}

// Exporta o controller
module.exports = new PedidoController();