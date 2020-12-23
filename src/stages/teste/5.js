const banco = require("../../banco")

function execute(user, msg) {

    banco.db[user].stage = 0

    return [
        "Beleza.. As informações dos sistemas selecionados serão encaminhadas para seu email!",
        "Até mais!",
        "Caso ainda precise de ajuda, digite algo..",
    ]
}

exports.execute = execute;