async function connect() {
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/IBRIDGE_API")
    console.log("Conectou no mysql... :) ")
    global.connection = connection
    return connection;
}
connect();

async function selectCustomers() {
    const conn = await connect()
    return await conn.query('SELECT clientes.nome FROM clientes;')
}

async function full_group_by() {
    const conn = await connect()
    return await conn.query("SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));")
}

async function selectLogs() {
    const conn = await connect()
    return await conn.query(`
    select clientes.nome, logs.ambiente, group_concat(logs.inconsistencia separator '; '), logs.data, group_concat(TIME_FORMAT(logs.hora, '%H:%i') separator '; ') as hora
	from clientes inner join logs
		on clientes.id = logs.cliente_id
	where logs.data = curdate() and clientes.sincronizado = "SIM"
    group by clientes.nome, logs.ambiente, logs.data
    order by clientes.nome;`)
}

module.exports = {selectCustomers, selectLogs}