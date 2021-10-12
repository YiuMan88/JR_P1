import { Logincheck } from '../utilities/http'

export default class Login {
	constructor(el) {
		this.username = el.querySelectorAll('input')[0]
		this.password = el.querySelectorAll('input')[1]
		this.btn = el.querySelectorAll('button')[0]
	}
	init() {
		this.bindEvent()
	}
	bindEvent() {
		this.btn.addEventListener('click', this.onclick.bind(this), false)
	}

	async onclick() {
		const userInfor = {
			username: this.username.value,
			password: this.password.value
		}
		const { data } = await this.loginChecker({
			...userInfor
		})
		console.log(data)

		// if (status) {
		// 	window.localStorage.setItem('JWT', data.token)
		// 	window.localStorage.setItem('userID', data.userID)
		// 	window.location = '/dist'
		// }
	}

	loginChecker(userInfor) {
		return Logincheck(userInfor)
	}
}
