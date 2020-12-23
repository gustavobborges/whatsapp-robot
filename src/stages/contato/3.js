
const banco = require("../../banco")
const stages = require("../../stages")
const cliente_tel = require("../../index")
const cliente_nome = require("./2")
const telefone_novo = require("./5")


function execute(user, msg) {
    const telefone_n = telefone_novo.telefone
    const telefone = cliente_tel.telefone
    const nome = cliente_nome.nome

    var telefone_ok = telefone
    if (telefone_n != "undefined") {
        telefone_ok = telefone_n
    }

    exports.telefone_ok = telefone_ok

    // console.log(telefone, nome)

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Cadastro cancelado com sucesso.."]
    }

    if (msg === "sim" || msg === "Sim" || msg === "s" || msg === "S") {
        banco.db[user].stage = "c-salvar"
        return [
            `Contato a ser salvo:\n👤 Nome: *${nome}*\n📞 Telefone: *${telefone_ok}*\nPara confirmar, digite Salvar`
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