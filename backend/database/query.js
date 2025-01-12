const { connection } = require(".");


const getQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const postQuery = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, [values], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

const valuesQuery = (query, values) => {
	return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.recordset);
            }
        });
    });
}

module.exports = { getQuery, postQuery, valuesQuery };