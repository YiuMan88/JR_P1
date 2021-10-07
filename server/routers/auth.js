const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { user_register, auth_login } = require('../controller/authController')

const maxAge = 3 * 24 * 60 * 60
const createToken = id => {
	return jwt.sign(
		{
			id
		},
		'ok',
		{
			expiresIn: maxAge
		}
	)
}

router.post('/api/register', async (req, res) => {
	let { username, password } = req.query
	const userID = await user_register(username, password)
	const token = createToken(userID)
	const aa = res.cookie('jwt', token, {
		httpOnly: true,
		maxAge: maxAge * 1000
	})
	res.send('success')
})

router.post('/api/login', async (req, res) => {
	let { username, password } = req.query
	const authResult = await auth_login(username, password)
	const { isSuccess, userID } = authResult
	if (isSuccess) {
		const token = createToken(userID)
		res.cookie('jwt', token, {
			httpOnly: true,
			maxAge: maxAge * 1000
		})
		const data = { userID, token }
		res.status(200).json(data)
	}
})

module.exports = router
