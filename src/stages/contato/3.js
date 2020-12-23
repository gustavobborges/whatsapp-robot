const banco = require("../../banco")
const stages = require("../../stages")
const cliente_tel = require("../../index")
const cliente_nome = require("./2")

function execute(user, msg) {

    const telefone = cliente_tel.telefone
    const nome = cliente_nome.nome

    // console.log(telefone, nome)

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Cadastro cancelado com sucesso.."]
    }

    if (msg === "Salvar" || msg === "salvar") {
        (async() => {
            const db = require("../../../db")
            console.log("Acessou o banco..")
            console.log("Cadastrando contatos")
            const result = await db.cadastrarContato({nome: nome, telefone: telefone})
            console.log(result)
        })();
        return [
            "Contato salvo com sucesso!"
           ]
    }

    return [
        `Contato a ser salvo:\nNome: ${nome}\nTelefone: ${telefone}\nPara confirmar, digite Salvar`
    ]
}

exports.execute = execute;