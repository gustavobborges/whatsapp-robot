const banco = require('../../banco')

function execute(user, msg) {

    if (msg === "*") {
        banco.db[user].stage = 0
        return ["Tudo bem.. Até mais! "]
    }

    if(msg == "1") {
        banco.db[user].stage = "c-cadastro-1"
        return [
            "Muito bem.. vou te fazer algumas perguntas..",
            "Por favor, qual o *NOME* do contato?"
        ]
    }

    if(msg == "2") {
        banco.db[user].stage = "c-consulta-1"
        return [
            "Estou reunindo as informações dos contatos... ok?"
        ]
    }
    
    return [
        //
    ]
}

exports.execute = execute;