import { postStory } from '../utilities/http'
export default class Write {
	constructor(el) {
		this.title = el.getElementsByClassName('title')[0]
		this.content = el.getElementsByClassName('content')[0]
		this.submit = el.getElementsByClassName('submit')[0]
		console.log(this.submit)
	}
	init() {
		this.bindEvent()
	}
	bindEvent() {
		this.submit.addEventListener('click', this.submitForm.bind(this), false)
	}
	async submitForm() {
		const data = {
			id: window.localStorage.getItem('userID'),
			titleText: this.title.value,
			contentText: this.content.value
		}
		console.log(data)
		const { status } = await postStory(data)
		if (status) {
			alert('add success')
		}
	}
}
