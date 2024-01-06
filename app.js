const express = require('express');
const bodyParser = require('body-parser');
const { producer } = require('./producer');
const { consumer } = require('./consumer');
const ConnectToDatabase = require("./src/database/database");

const app = express();

ConnectToDatabase();
const port = 3000;

app.use(bodyParser.json());
app.use('/user', require('./src/router/userrouter'));
app.use('/product', require('./src/router/productrouter')); 
const runProducer = async () => {
  await producer.connect();
};

const runConsumer = async () => {
  await consumer.connect();
};

const startApp = async () => {
  await runProducer();
  await runConsumer();

  app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`);
  });
};

startApp().catch(console.error);
