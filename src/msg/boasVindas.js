const venom = require('venom-bot');

// venom
//   .create()
//   .then((client) => enviarMensagem(client))
//   .catch((erro) => {
//     console.log(erro);
//   });

async function enviarMensagem(client) {
  await client
  .sendText('554896213107@c.us', 'Boa tarde! Sou o assistente virtual da iBridge! Seja bem vindo!')
}