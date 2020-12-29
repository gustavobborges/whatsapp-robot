const banco = require("../../banco")
const conts = require("./4")

function execute(user, msg) {

    const resumo = conts.contatos

    if (msg === "todos" || msg === "Todos") {
        banco.db[user].stage = 0
        return [
            resumo,
            "Se ainda precisar de ajuda, digite algo.."
        ]
    }

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg === "#") {
        banco.db[user].stage = "t-3"
        return ["Bele.. voce apertou #"]
    }

    return [
        //
    ]
}

exports.execute = execute;