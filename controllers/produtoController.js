const produtoService = require('../services/produtoService');

module.exports = {
  async getAll(req, res) {
    const data = await produtoService.getProdutos();
    res.json(data);
  },

  async create(req, res) {
    await produtoService.addProduto(req.body);
    res.status(201).json({ message: 'Produto criado com sucesso' });
  },

  async update(req, res) {
    await produtoService.updateProduto(req.params.id, req.body);
    res.json({ message: 'Produto atualizado com sucesso' });
  },

  async delete(req, res) {
    await produtoService.deleteProduto(req.params.id);
    res.json({ message: 'Produto deletado com sucesso' });
  },
};
