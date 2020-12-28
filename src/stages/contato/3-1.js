
const banco = require("../../banco")
const stages = require("../../stages")

const cliente = require("../../index")
const telefone_novo = require("./5")

function execute(user, msg) {

    console.log('executei o 8')

    const telefone = telefone_novo.telefone

    console.log(telefone)

    var telefone_ok = telefone
    
    banco.db[user].dados.telefone = telefone_ok;
    
    console.log(banco.db[user])

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