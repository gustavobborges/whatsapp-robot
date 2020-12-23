const banco = require("../../banco")
const stages = (require("../../stages"))

function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg === "#") {
        banco.db[user].stage = 4
        return ["Digite seu email, por favor"]
    }

    let resumo = "INFORMAÇÕES:\n"
    var total = 0
    var devs = []
    var sistemas = []
    
    banco.db[user].itens.forEach((value)=> {
        console.log(value)
        total += value.horas;  
        devs.push(value.dev);   
        sistemas.push(value.descricao);

        resumo += `Sistema: ${value.descricao}, Dev: ${value.dev}, Horas: ${value.horas}\n`
    })

    var devs = devs.join(", ")
    var sistemas = sistemas.join(", ")

    resumo += "-------------------------\n"
    resumo += `Total de horas: ${total}\n`
    resumo += `Devs envolvidos: ${devs}\n`
    resumo += `Sistemas desenvolvidos: ${sistemas}`

    return [resumo, "Para confirmar, digite #.. ou para cancelar, digite *"]
}

exports.execute = execute;