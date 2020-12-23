
const banco = require("../../banco")
const stages = require("../../stages")
// const cliente_tel = require("../../index")
const cliente_nome = require("./2")
const telefone_final = require("./3")

function execute(user, msg) {

    const telefone = telefone_final.telefone_ok

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
        banco.db[user].stage = 0

        return [
            "Contato salvo com sucesso! 💾 "
           ]
    }

    return [
        //
    ]
}

exports.execute = execute;