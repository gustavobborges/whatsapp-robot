async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/ibridge_robot")
    console.log("Conectou no mysql... :) ")
    global.connection = connection
    return connection;
}

async function cadastrarContato(contato) {
    const conn = await connect()
    const sql = 'INSERT INTO contatos(nome, telefone) VALUES (?, ?);'
    const values = [contato.nome, contato.telefone];
    return await conn.query(sql, values)
}

async function listarTodosContatos() {
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM contatos;')
    return rows
}

module.exports = {cadastrarContato, listarTodosContatos}