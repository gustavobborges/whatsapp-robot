const banco = require("../../banco")
const stages = require("../../stages");

function execute(user, msg) {

    (async() => {
        const db = require("../../../db")
        console.log("Acessou o banco..")
        console.log('Listar todos')
        const contatos = await db.listarTodosContatos();
        console.log(contatos)
    })();

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg === "#") {
        banco.db[user].stage = "t-3"
        return ["Bele.. voce apertou #"]
    }

    return ['retornou']
}

exports.execute = execute;