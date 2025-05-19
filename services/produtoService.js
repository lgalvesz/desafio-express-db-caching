const db = require('../configs/db');

async function getProdutos() {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
}

async function addProduto(produto) {
  const { nome, descricao, preco } = produto;
  const data_atualizado = new Date();
  await db.query(
    'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, data_atualizado]
  );
}

async function updateProduto(id, produto) {
  const { nome, descricao, preco } = produto;
  const data_atualizado = new Date();
  await db.query(
    'UPDATE produtos SET nome=?, descricao=?, preco=?, data_atualizado=? WHERE id=?',
    [nome, descricao, preco, data_atualizado, id]
  );
}

async function deleteProduto(id) {
  await db.query('DELETE FROM produtos WHERE id=?', [id]);
}

module.exports = {
  getProdutos,
  addProduto,
  updateProduto,
  deleteProduto,
};
