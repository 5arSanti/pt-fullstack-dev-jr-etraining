const mysql = require('mysql2');

var connection = mysql.createConnection({
	user     : process.env.DB_USER,
	password : process.env.DB_PASSWORD,
	database : process.env.DB_DATABASE,
	host     : process.env.DB_SERVER,
	port	 : process.env.DB_PORT
});


connection.connect((err) => {
	if (err) {
		console.error('Error al conectar a la base de datos MySQL:', err);
		return;
	} else {
		console.log('Conexión a la base de datos exitosa');
	}
});

module.exports = { connection };