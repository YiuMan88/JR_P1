const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Auth = require('../controller/authController')

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

// router.post('/api/register', async (req, res) => {
// 	let { username, password } = req.query
// 	const userID = await Auth.user_register(username, password)
// 	const token = createToken(userID)
// 	res.cookie('jwt', token, {
// 		httpOnly: true,
// 		maxAge: maxAge * 1000
// 	})
// 	res.send('success')
// 	// res.redirect = '/dist/index.html'
// })

router.post('/api/register', Auth.user_register)

router.post('/api/login', Auth.auth_login)
module.exports = router
