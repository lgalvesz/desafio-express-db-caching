module.exports = (err, req, res, next) => {
  console.error('[ERRO]', err.message);
  res.status(err.status || 500).json({ error: err.message });
};
