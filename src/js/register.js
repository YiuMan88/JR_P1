import Register from './module/register'
window.addEventListener('load', () => {
	const loginFrom = document.getElementsByClassName('registerForm')[0]
	const init = () => {
		new Register(loginFrom).init()
	}

	init()
})
