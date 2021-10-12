const User_Model = require('../modal/user.js')
const bcrypt = require('bcrypt')

const user_register = async (req, res) => {
	let { username, password } = req.query
	const saltRounds = 2
	const salt = await bcrypt.genSalt(saltRounds)
	password = await bcrypt.hash(password, salt)
	try {
		const result = await User_Model.register({ username, password })
		res.status(200).json({ userId: result.result[0][0]['max_id'] })
	} catch (e) {
		res.json({ msg: 'username had been used' })
	}
}

const auth_login = async (req, res) => {
	let { username, password } = req.query
	const { status, userId, msg } = await User_Model.login({ username, password })
	if (status) {
		res.status(200).json({ status, userId })
	} else {
		res.status(200).json({ status, msg })
	}
}

module.exports = {
	user_register,
	auth_login
}
