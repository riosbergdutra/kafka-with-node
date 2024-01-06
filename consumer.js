const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app', 
  brokers: ['localhost:9092'], 
});

const consumer = kafka.consumer({ groupId: 'test-group' });

module.exports = {
  consumer,
  runConsumer: async (topic, callback) => {
    await consumer.connect();

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ message }) => {
        const payload = JSON.parse(message.value.toString());
        await callback(payload);
      },
    });
  },
};
