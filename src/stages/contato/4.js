const banco = require("../../banco")
const stages = require("../../stages");

async function execute(user, msg) {

    var resumo;

    (async() => {
        const db = require("../../../db")
        console.log("Acessou o banco..")
        console.log('Listar todos')
        const contatos = await db.listarTodosContatos();
        console.log(contatos)
    
        var resumo = "INFORMAÇÕES:\n"
       
        contatos.forEach((value)=> {
            contatos.push(value.nome);   
            contatos.push(value.telefone);
            resumo += `Nome: ${value.nome}, Tel: ${value.telefone}\n`
        })
        console.log('dentro funcao')
    })();

    console.log('fora funcao')

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg === "#") {
        banco.db[user].stage = "t-3"
        return ["Bele.. voce apertou #"]
    }

    return [
        // resumo,
        'retornou']
}

console.log('blz')

exports.execute = execute;