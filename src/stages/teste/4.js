const banco = require("../../banco")
const stages = (require("../../stages"))

function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg === "#") {
        banco.db[user].stage = 5
        
        return stages.step[4].obj.execute(user, "")
    }
    
    return [
        `Confirma este email para envio? \n ${msg}`, 
        "Se sim, digite #. \nOu digite * para cancelar",
    ]

}

exports.execute = execute;