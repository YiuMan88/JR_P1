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

router.post('/api/register', Auth.user_register)

router.post('/api/login', Auth.auth_login)
module.exports = router
