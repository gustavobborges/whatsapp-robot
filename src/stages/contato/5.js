const banco = require("../../banco")
const stages = (require("../../stages"))


function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Solicitação cancelada com sucesso.."]
    }

    if (msg.length > 5) {
        banco.db[user].stage = "c-cadastro-2-novo"
        const telefone = msg
        exports.telefone = telefone
        return [
            `O número que será salvo será o *${telefone}*?`,
        ]
    }

    return [
        //
    ]

}

exports.execute = execute;