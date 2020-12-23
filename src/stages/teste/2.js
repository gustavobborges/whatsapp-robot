const banco = require("../../banco")
const stages = (require("../../stages"))

function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0;
        return ["É uma pena.. Até mais!"]
    }

    if (msg === "#") {
        banco.db[user].stage = 3;
        return ["Estou reunindo as informações.. ok?"]
    }

    if(!servicos.carta[msg]) {
        return ["Número inválido. Informe um dos números apresentados.", 
        "Digite # para finalizar ou * para cancelar."]
    }

    banco.db[user].itens.push(servicos.carta[msg])

    return [
        `Serviço (${servicos.carta[msg].descricao}) selecionado com sucesso!`,
        `Caso queira adicionar outro sistema, informe seu número..`,
        "Digite # para finalizar ou * para cancelar."    
    ]
}

exports.execute = execute;