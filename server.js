const express = require('express');
const dotenv = require('dotenv');
const createError = require('http-errors');
const clienteRoutes = require('./routes/clienteRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Página padrão da API'));
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);

app.use((req, res, next) => next(createError(404, 'Rota não encontrada')));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
