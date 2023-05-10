const { VK } = require('vk-io');
const { WebhookServer } = require('vk-io-webhook');

const vk = new VK({
  token: 'vk1.a.83GKZ8qgUhyvZ73-lR9SyG66aiAMlnaTf56NXThodlHNDOx33IvmPbcUrQafpvfIg47ai58W0e2OlhrMQfg2TCSICR0crO9-ZWvDWz6fMWVeNXWbydxaDe7SmWRCjkvCfxmJ68kkJXnsNYnIUBssjCxQ1K9ynCqmPeswMML2vAR6nC7lSJ-Cv_ICUt_t9sN6CJDhA0kTQSUywqQhiN5zZw',
});

const webhookServer = new WebhookServer({
  path: '/webhook',
  port: 3000,
});

webhookServer.on('event', async (context) => {
  if (context.is('message')) {
    // Обработка входящего сообщения
    const { text } = context.message;
    console.log('Received message:', text);
  }
});

webhookServer.listen();

const server = require('http').createServer(webhookServer.middleware);

server.listen(3000, () => {
  console.log('Server started');
});
