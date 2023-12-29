const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor Express Kafka');
});

const { runProducer } = require('./producer');
const { runConsumer } = require('./consumer');

const startServer = async () => {
  await runProducer(); 
  await runConsumer();

  const server = app.listen(3000, () => {
    console.log('Servidor Express rodando na porta 3000');
  });
};

startServer().catch(console.error);
