const banco = require("../../banco")
const stages = require("../../stages")
const cliente = require("../../index")

function execute(user, msg) {
    const telefone = cliente.telefone
    // console.log(telefone)
    
    if (msg != "sim") {
        const nome = msg; 
        exports.nome = nome;       
    }

    if (msg === "*") {
        banco.db[user].stage = 0;
        return ["É uma pena..Até mais!"]
    }

    if (msg === "sim") {
        banco.db[user].stage = "c-cadastro-2";
        return [
            `Muito bem.. O número será: ${telefone}?\nCaso sim, digite #;\nCaso não, digite *`                
        ]
    }

    // if(!servicos.carta[msg]) {
    //     return ["Número inválido. Informe um dos números apresentados.", 
    //     "Digite # para finalizar ou * para cancelar."]
    // }

    return [
        `O NOME é ${msg}?`,
    ]
}

exports.execute = execute;