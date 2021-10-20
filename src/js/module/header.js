import isEmpty from 'lodash/isEmpty'
export default class Header {
	constructor(el, jwt) {
		this.nav = el.getElementsByClassName('header__nav')[0]
		this.menu = el.getElementsByClassName('header__menu')[0]
		this.item = el.getElementsByClassName('header__item ')
		this.login = el.getElementsByClassName('header__item')[1]
		this.register = el.getElementsByClassName('header__item')[2]
		this.write = el.getElementsByClassName('header__item')[3]
		this.jwt = jwt
	}
	init() {
		this.blindEvent()
		this.isLoginCheck(this.jwt)
	}
	blindEvent() {
		if (this.menu) {
			this.menu.addEventListener('click', this.openSubMenu.bind(this), false)
		}

		for (let i = 0; i < this.item.length; i++) {
			this.item[i].addEventListener('click', this.onClick.bind(this), false)
		}
	}
	openSubMenu() {
		let isShow = this.nav.style.display
		if (isShow === 'block') {
			this.nav.style.display = 'none'
		}
		if (isShow !== 'block') {
			this.nav.style.display = 'block'
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
			case 'login':
				window.location = '../../../dist/login.html'
				break
			case 'register':
				window.location = '../../../dist/register.html'
				break
			case 'home':
				window.location = '../../../dist/index.html'
				break
			default:
		}
	}
	isLoginCheck(jwt = '') {
		if (!isEmpty(jwt)) {
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
			window.localStorage.removeItem('userID')
			location.reload()
		})
	}
}
