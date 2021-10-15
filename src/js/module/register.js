import { registerCheck } from '../utilities/http'
import isEmpty from 'lodash/isEmpty'
export default class Register {
	constructor(el) {
		this.username = el.querySelectorAll('input')[0]
		this.penname = el.querySelectorAll('input')[1]
		this.password = el.querySelectorAll('input')[2]
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
			password: this.password.value,
			penname: this.penname.value
		}

		if (isEmpty(userInfor.username) || isEmpty(userInfor.password) || isEmpty(userInfor.penname)) {
			return alert('username,password and penname are required')
		}
		const { data } = await this.registerCheck({
			...userInfor
		})

		const { status, userId, token, msg } = data
		if (status) {
			window.localStorage.setItem('JWT', token)
			window.localStorage.setItem('userID', userId)
			window.location = '/dist'
		} else {
			alert(msg)
		}
	}

	registerCheck(userInfor) {
		return registerCheck(userInfor)
	}
}
