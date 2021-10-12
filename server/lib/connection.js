const DB_CONFIG = require('./config')
class DB {
	constructor() {
		this.mysql = require('mysql')
	}
	query(sql, params) {
		return new Promise((reslove, reject) => {
			const connection = this.mysql.createConnection({
				host: 'francis888.mysql.database.azure.com',
				user: 'Francis@francis888',
				password: 'Liangyaowen0213.',
				database: 'jrp1'
			})
			connection.connect(err => {
				if (err) {
					console.log('database connection failed')
					reject(err)
				}
				console.log('database connected')
			})

			connection.query(sql, params, (err, result, fileds) => {
				if (err) {
					console.log('some things went wrong')
					reject(err)
				}
				reslove({ result, fileds })
			})
		})
	}
}
//return a instance
module.exports = new DB()
