const db = require('../configs/db');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 });

async function getClientes() {
  const cached = cache.get('clientes');
  if (cached) {
    console.log('\x1b[33m[Cache] Dados de clientes retornados do cache\x1b[0m');
    return cached;
  }

  const [rows] = await db.query('SELECT * FROM clientes');
  cache.set('clientes', rows);
  console.log('\x1b[36m[DB] Dados de clientes retornados do banco de dados\x1b[0m');
  return rows;
}

async function addCliente(cliente) {
  const { nome, sobrenome, email, idade } = cliente;
  await db.query('INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
    [nome, sobrenome, email, idade]);
  cache.del('clientes');
}

async function updateCliente(id, cliente) {
  const { nome, sobrenome, email, idade } = cliente;
  await db.query('UPDATE clientes SET nome=?, sobrenome=?, email=?, idade=? WHERE id=?',
    [nome, sobrenome, email, idade, id]);
  cache.del('clientes');
}

async function deleteCliente(id) {
  await db.query('DELETE FROM clientes WHERE id=?', [id]);
  cache.del('clientes');
}

module.exports = { getClientes, addCliente, updateCliente, deleteCliente };
