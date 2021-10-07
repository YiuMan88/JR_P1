import isEmpty from 'lodash/isEmpty'
export default class Header {
	constructor(el, jwt) {
		this.name = 'header'
		this.nav = el.getElementsByClassName('header__nav')[0]
		this.item = el.getElementsByClassName('item')
		this.login = el.getElementsByClassName('item')[1]
		this.register = el.getElementsByClassName('item')[2]
		this.write = el.getElementsByClassName('item')[3]
		this.jwt = jwt
	}
	init() {
		this.blindEvent()
		this.isLoginCheck(this.jwt)
	}
	blindEvent() {
		for (let i = 0; i < this.item.length; i++) {
			this.item[i].addEventListener('click', this.onClick.bind(this), false)
		}
	}
	onClick(e) {
		const target = e.target || window.target
		const action = target.getAttribute('action')
		switch (action) {
			case 'write':
				if (isEmpty(this.jwt)) {
					window.location = '../../../dist/login.html'
				} else {
					window.location = '../../../dist/write.html'
				}
				break
			default:
		}
	}
	isLoginCheck(jwt = '') {
		if (!(jwt == null || jwt.length <= 0)) {
			this.login.style.display = 'none'
			this.register.style.display = 'none'
			this.createLoginElement()
		}
	}
	createLoginElement() {
		const loginLogo = document.createElement('div')
		loginLogo.innerHTML = 'Logout'
		this.write.before(loginLogo)
		loginLogo.addEventListener('click', () => {
			window.localStorage.removeItem('JWT')
			location.reload()
		})
	}
}
