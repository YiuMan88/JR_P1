const User_Model = require('../modal/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60
const createToken = id => {
	return jwt.sign(
		{
			id
		},
		'token',
		{
			expiresIn: maxAge
		}
	)
}

const user_register = async (req, res) => {
	let { username, password, penname } = req.body.registerDetail
	const saltRounds = 2
	const salt = await bcrypt.genSalt(saltRounds)
	password = await bcrypt.hash(password, salt)
	try {
		const result = await User_Model.register({ username, password, penname })
		const userId = result.result[0][0]['max_id']
		const token = createToken(userId)
		res.status(200).json({ status: true, userId, token })
	} catch (e) {
		res.json({ msg: 'username had been used' })
	}
}

const auth_login = async (req, res) => {
	let { username, password } = req.body.loginDetail
	const { status, userId, msg } = await User_Model.login({ username, password })
	if (status) {
		const token = createToken(userId)
		//TODO comment it for now
		// res.cookie('jwt', token, {
		// 	httpOnly: true,
		// 	maxAge: maxAge * 1000
		// })
		res.status(200).json({ status, userId, token })
	} else {
		res.status(200).json({ status, msg })
	}
}

module.exports = {
	user_register,
	auth_login
}
