
const banco = require("../../banco")

function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Cadastro cancelado com sucesso.."]
    }

    if (msg === "Salvar" || msg === "salvar") {
        (async() => {
            const db = require("../../../db")
            console.log("Acessou o banco..")
            console.log("Cadastrando contatos..")
            const result = await db.cadastrarContato({nome: banco.db[user].dados.nome, telefone: banco.db[user].dados.telefone})
            console.log(result)
        })();

        banco.db[user].stage = 0

        return [
            "Contato salvo com sucesso! 💾 ",
            "Se ainda puder te ajudar, digite algo.."
           ]
    }


    return [
        //
    ]
}

exports.execute = execute;