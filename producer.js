const { Kafka, Partitioners } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })

const runProducer = async () => {
  await producer.connect()

  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello world!' },
    ],
  })

  await producer.disconnect()
}

module.exports = { runProducer, producer }
