const banco = require("../../banco")
const stages = require("../../stages");

function execute(user, msg) {

    (async() => {
        const db = require("../../../db")
        console.log("Acessou o banco..")
        console.log('Listar todos')
        const contatos = await db.listarTodosContatos();
    
        var resumo = "*CONTATOS*:\n"
       
        contatos.forEach((value)=> {
            resumo += `Nome: ${value.nome}, Tel: ${value.telefone}\n`
        })
        exports.contatos = resumo;

    })();

    if (msg != "#") {
        banco.db[user].stage = "c-listar"
        return [
            'Digite *todos* para listar todos os contatos'
        ]
    }

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    return [
        // 'Digite *todos* para listar todos os contatos'
    ]
}

exports.execute = execute;