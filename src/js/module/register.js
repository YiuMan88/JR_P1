import { registerCheck } from '../utilities/http'
export default class Register {
	constructor(el) {
		this.name = 'register form'
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
		const check = await this.registerCheck({
			...userInfor
		})
	}

	registerCheck(userInfor) {
		return registerCheck(userInfor)
	}
}
