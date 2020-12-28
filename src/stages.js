var stages = {

    0:{
        descricao:"Opcoes",
        obj: require("./stages/0")
    },

    //TESTES
    1:{
        descricao:"1",
        obj: require("./stages/teste/1")
    },
    2:{
        descricao:"2",
        obj: require("./stages/teste/2")
    },
    3:{
        descricao:"3",
        obj: require("./stages/teste/3")
    },
    4:{
        descricao:"4",
        obj: require("./stages/teste/4")
    },
    5:{
        descricao:"5",
        obj: require("./stages/teste/5")
    },

    //CONTATOS
    "c":{
        descricao:"Menu Contatos",
        obj: require("./stages/contato/1")
    },
    "c-cadastro-1":{
        descricao:"Opcoes",
        obj: require("./stages/contato/2")
    },

    "c-cadastro-2":{
        descricao:"Salvar",
        obj: require("./stages/contato/3")
    },
    "c-cadastro-2-novo":{
        descricao:"SalvarNovo",
        obj: require("./stages/contato/3-1")
    },
    "c-consulta-1":{
        descricao:"Listagem",
        obj: require("./stages/contato/4")
    },
    "c-novoNumero":{
        descricao:"Encerramento",
        obj: require("./stages/contato/5")
    },
    "c-salvar":{
        descricao:"Encerramento",
        obj: require("./stages/contato/6")
    }   
}

exports.step = stages;
