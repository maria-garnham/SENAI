// Importa a conexão com o banco de dados
const pool = require('../config/database');

// Cria a classe PedidoRepository
class PedidoRepository {

    // Método para listar todos os pedidos
    async findAll() {

        // Faz uma consulta no banco buscando todos os pedidos
        // ORDER BY criado_em DESC = mostra os mais recentes primeiro
        const [rows] = await pool.query(
            'SELECT * FROM pedido ORDER BY criado_em DESC'
        );

        // Retorna os pedidos encontrados
        return rows;
    }

    // Método para buscar um pedido pelo id
    async findById(id) {

        // Busca o pedido usando o id
        const [pedidoRows] =
            await pool.query(
                'SELECT * FROM pedido WHERE id = ?',
                [id]
            );

        // Se não encontrar nenhum pedido retorna null
        if (pedidoRows.length === 0) return null;

        // Pega o primeiro pedido encontrado
        const pedido = pedidoRows[0];

        // Busca os itens do pedido junto com os dados do produto
        const [itensRows] = await pool.query(`

            SELECT ip.*,
            p.nome as produto_nome,
            p.descricao as produto_descricao

            FROM item_pedido ip

            INNER JOIN produto p
            ON ip.produto_id = p.id

            WHERE ip.pedido_id = ?

        `, [id]);

        // Adiciona os itens dentro do pedido
        pedido.itens = itensRows;

        // Retorna o pedido completo
        return pedido;
    }

    // Método para criar um pedido
    async create(pedidoData, itens) {

        // Pega os dados do pedido
        const { cliente, status, total } = pedidoData;

        // Cria uma conexão com o banco
        const connection = await pool.getConnection();

        try {

            // Inicia uma transação
            // Transação = garante que tudo seja salvo corretamente
            await connection.beginTransaction();

            // Insere o pedido no banco
            const [pedidoResult] = await connection.query(

                'INSERT INTO pedido (cliente, status, total) VALUES (?, ?, ?)',

                [
                    cliente || null,
                    status || 'pendente',
                    total
                ]

            );

            // Pega o id do pedido criado
            const pedidoId = pedidoResult.insertId;

            // Verifica se existem itens no pedido
            if (itens && itens.length > 0) {

                // Organiza os valores dos itens
                const values = itens.map(item => [

                    pedidoId,
                    item.produto_id,
                    item.quantidade,
                    item.preco_unitario

                ]);

                // Insere os itens do pedido
                await connection.query(

                    'INSERT INTO item_pedido (pedido_id, produto_id, quantidade, preco_unitario) VALUES ?',

                    [values]

                );
            }

            // Salva as alterações no banco
            await connection.commit();

            // Retorna o id do pedido criado
            return pedidoId;

        } catch (error) {

            // Se acontecer erro desfaz tudo
            await connection.rollback();

            // Lança o erro novamente
            throw error;

        } finally {

            // Fecha a conexão
            connection.release();

        }
    }

    // Método para atualizar um pedido
    async update(id, pedidoData) {

        // Array para guardar os campos
        const fields = [];

        // Array para guardar os valores
        const values = [];

        // Percorre os dados enviados
        for (const [key, value] of Object.entries(pedidoData)) {

            // Adiciona o campo
            fields.push(`${key} = ?`);

            // Adiciona o valor
            values.push(value);

        }

        // Se não tiver nenhum campo retorna null
        if (fields.length === 0) return null;

        // Adiciona o id no final
        values.push(id);

        // Monta a query UPDATE
        const query =
            `UPDATE pedido SET ${fields.join(', ')} WHERE id = ?`;

        // Executa a query
        const [result] = await pool.query(query, values);

        // affectedRows = quantidade de linhas alteradas
        return result.affectedRows;
    }

    // Método para deletar um pedido
    async delete(id) {

        // Remove o pedido pelo id
        const [result] =
            await pool.query(
                'DELETE FROM pedido WHERE id = ?',
                [id]
            );

        // Retorna quantas linhas foram afetadas
        return result.affectedRows;
    }
}

// Exporta o repository
module.exports = new PedidoRepository();