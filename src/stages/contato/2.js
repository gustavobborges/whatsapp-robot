const banco = require("../../banco")
const cliente = require("../../index")

function execute(user, msg) {

    const telefone = cliente.telefone

    if (msg === "*") {
        banco.db[user].stage = 0;
        return ["É uma pena..Até mais!"]
    }

    if (msg !== "sim" && msg !== "Sim" && msg !== "s" && msg !== "S" && msg !== "*") {
        const nome = msg; 
        banco.db[user].dados.nome = nome; 
    }

    if (msg === "sim" || msg === "Sim" || msg === "s" || msg === "S") {
        banco.db[user].stage = "c-cadastro-2";
        return [
            `Muito bem.. O número que deseja salvar será *${telefone}*?`                
        ]
    }

    if(msg === "não" || msg === "Não" || msg === "nao" || msg === "Nao" || msg === "n" || msg === "N") {
        banco.db[user].stage = "c-cadastro-1";
        return [
            "Por favor, informe o *nome* novamente!"
        ]
    }
  
    return [
        `O NOME é *${msg}*?`,
    ]
}

exports.execute = execute;