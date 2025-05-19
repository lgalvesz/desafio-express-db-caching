CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  sobrenome VARCHAR(255),
  email VARCHAR(255),
  idade INT
);

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  preco DECIMAL(10,2),
  atualizado DATETIME
);
