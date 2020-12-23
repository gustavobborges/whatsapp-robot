// Supports ES6
// import { create, Whatsapp } from 'venom-bot';

const venom = require('venom-bot');
const banco = require("./banco")
const stages = require("./stages")
const data = require("./data.json")

venom
  .create()
  .then((client) => enviarMensagem(client))
  .catch((erro) => {
    console.log(erro);
  });

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body);
    const telefone = message.from
    const telefone_numero = telefone.split("@")
    const tel = telefone_numero[0]
    const telefone_final = tel.substring(2)
    exports.telefone = telefone_final;

    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element)
    }          
  });  
} 

async function enviarMensagem(client) {
  await client
  .sendText('554891611609@c.us', 'Boa tarde! Sou o assistente virtual da iBridge! Seja bem vindo!')
}

function getStage(user){
  //CASO EXISTA ESSE NUMERO NO BANCO
  if(banco.db[user]) {
    return banco.db[user].stage
  } else {
  // //CASO SEJA A PRIMEIRA VEZ DO NÚMERO
    banco.db[user] = {
      stage: 0,
      itens: [
        
      ],
    }
  }
    return banco.db[user].stage;   
}
