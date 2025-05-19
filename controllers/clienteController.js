const clienteService = require('../services/clienteService');

module.exports = {
  async getAll(req, res) {
    const data = await clienteService.getClientes();
    res.json(data);
  },

  async create(req, res) {
    await clienteService.addCliente(req.body);
    res.status(201).json({ message: 'Cliente criado com sucesso' });
  },

  async update(req, res) {
    await clienteService.updateCliente(req.params.id, req.body);
    res.json({ message: 'Cliente atualizado com sucesso' });
  },

  async delete(req, res) {
    await clienteService.deleteCliente(req.params.id);
    res.json({ message: 'Cliente deletado com sucesso' });
  },
};
