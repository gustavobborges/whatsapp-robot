const servicos = require("../../servicos")
const banco = require('../../banco')

function execute(user, msg) {

    let carta = "Favor digite o primeiro número do sistema que deseja informações:\n"

    Object.keys(servicos.carta).forEach((value) => {
        let element = servicos.carta[value]
        carta +=  `${value} - ${element.descricao}\n`
    })

    banco.db[user].stage = 2
    
    return [
        "Aqui você irá selecionar um ou mais dos nossos sistemas, eu te apresentarei um resumo e encaminharei o resto das informações para o seu email..",
        carta
    ]
}

exports.execute = execute;