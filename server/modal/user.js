const isEmpty = require('lodash/isEmpty')
const bcrypt = require('bcrypt')
class User_Model {
	constructor() {
		this.db = require('../lib/connection')
	}
	//find user by id
	find(username) {
		return this.db.query('call findUser(?);', [username])
	}

	//login
	async login(userInfor) {
		const { username, password } = userInfor
		const result = await this.find(username)
		//if no user found return
		if (isEmpty(result.result[0])) {
			return { status: false, msg: 'username incorrect' }
		}
		const hashPassword = result.result[0][0].password
		const userId = result.result[0][0].id
		const isSuccess = await bcrypt.compare(password, hashPassword)
		if (isSuccess) {
			return { status: true, msg: 'successfully', userId }
		}
		return { status: false, msg: 'password incorrect' }
	}

	//register
	register(userInfor) {
		const { username, password } = userInfor
		return this.db.query('call register(?, ?,@par3);', [username, password])
	}
}

module.exports = new User_Model()
