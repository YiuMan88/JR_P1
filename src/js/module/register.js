import { registerCheck } from '../utilities/http'
export default class Register {
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
		console.log(123)
		const userInfor = {
			username: this.username.value,
			password: this.password.value
		}
		const check = await this.registerCheck({
			...userInfor
		})
		if (check) {
			alert('successfully')
		}
	}

	registerCheck(userInfor) {
		return registerCheck(userInfor)
	}
}
