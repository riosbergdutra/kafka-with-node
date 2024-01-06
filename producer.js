// producer.js
const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app', 
  brokers: ['localhost:9092'], 
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner, 
});

module.exports = {
  producer,
  runProducer: async (topic, message) => {
    try {
      await producer.connect();

      await producer.send({
        topic,
        messages: [{ value: JSON.stringify(message) }],
      });

      console.log(`Mensagem enviada para o tópico ${topic}`);
    } finally {
      await producer.disconnect();
    }
  },
};
