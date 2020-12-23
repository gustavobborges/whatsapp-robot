const servicos = require("../servicos")
const banco = require('../banco')


function execute(user, msg) {

    if (msg === "1") {
        banco.db[user].stage = "c"
        return [
            "MENU CONTATOS\n---------------------------\nPara CADASTRO, digite 1;\nPara CONSULTA, digite 2."
        ]
    }

    if (msg === "2") {
        banco.db[user].stage = 1
        return ["Vamos lá.. ok?"]
    }

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Tudo bem.. Até mais! "]
    }
    
    return [
        // "Olá! Sou o assistente virtual da iBridge e estou em desenvolvimento.. ",
        "MENU\n------------------------------------\nPara CONTATOS, digite 1;\nPara SISTEMAS, digite 2;\nPara encerrar, digite *",
    ]
}

exports.execute = execute;