import Login from './module/login'

window.addEventListener('load', () => {
	const loginFrom = document.getElementsByClassName('loginForm')[0]

	const init = () => {
		new Login(loginFrom).init()
	}

	init()
})
