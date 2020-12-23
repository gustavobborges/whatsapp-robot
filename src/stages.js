var stages = {

    0:{
        descricao:"Opcoes",
        obj: require("./stages/0")
    },

    //TESTES
    1:{
        descricao:"1",
        obj: require("./stages/teste/1.js")
    },
    2:{
        descricao:"2",
        obj: require("./stages/teste/2.js")
    },
    3:{
        descricao:"3",
        obj: require("./stages/teste/3.js")
    },
    4:{
        descricao:"4",
        obj: require("./stages/teste/4.js")
    },
    5:{
        descricao:"5",
        obj: require("./stages/teste/5.js")
    },


    //CONTATOS
    "c":{
        descricao:"Menu Contatos",
        obj: require("./stages/contato/1.js")
    },
    "c-cadastro-1":{
        descricao:"Opcoes",
        obj: require("./stages/contato/2.js")
    },

    "c-cadastro-2":{
        descricao:"Salvar",
        obj: require("./stages/contato/3.js")
    },
    "c-consulta-1":{
        descricao:"Listagem",
        obj: require("./stages/contato/4.js")
    },
    "c5":{
        descricao:"Encerramento",
        obj: require("./stages/contato/5.js")
    },
    "c6":{
        descricao:"Encerramento",
        obj: require("./stages/contato/6.js")
    },
    "c7":{
        descricao:"Encerramento",
        obj: require("./stages/contato/7.js")
    }

    
}

exports.step = stages;

// if (message.body === 'oi' && message.isGroupMsg === false) {
//     client
//       .sendText(message.from, 'opa! sou o WhatsApp Robot da iBridge e estou em desenvolvimento!')
//       .then((result) => {
//         console.log('Result: ', result); //return object success
//       })
//       .catch((erro) => {
//         console.error('Error when sending: ', erro); //return object error
//       });
//   }