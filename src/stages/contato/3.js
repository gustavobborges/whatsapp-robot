
const banco = require("../../banco")
const cliente = require("../../index")

function execute(user, msg) {

    const telefone = cliente.telefone

    var telefone_ok = telefone
    
    banco.db[user].dados.telefone = telefone_ok;
    
    exports.telefone_ok = telefone_ok

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Cadastro cancelado com sucesso.."]
    }

    if (msg === "sim" || msg === "Sim" || msg === "s" || msg === "S") {
        banco.db[user].stage = "c-salvar"
        return [
            `Contato a ser salvo:\n👤 Nome: *${banco.db[user].dados.nome}*\n📞 Telefone: *${banco.db[user].dados.telefone}*\nPara confirmar, digite Salvar`,
            telefone_ok = null
        ]
    }

    if(msg === "não" || msg === "Não" || msg === "nao" || msg === "Nao" || msg === "n" || msg === "N") {
        banco.db[user].stage = "c-novoNumero";
        return [
            "Por favor, informe o *número* que deseja salvar"
        ]
    }

    return [
        //
    ]
}

exports.execute = execute;