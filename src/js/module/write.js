import { postStory } from '../utilities/http'
import isEmpty from 'lodash/isEmpty'
export default class Write {
	constructor(el) {
		this.toolbarOptions = [
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			[{ header: 1 }, { header: 2 }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ direction: 'rtl' }],
			[{ size: ['small', false, 'large', 'huge'] }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['link', 'image', 'video', 'formula'],
			[{ color: [] }, { background: [] }],
			[{ font: [] }],
			[{ align: [] }],

			['clean']
		]
		this.title = el.getElementsByClassName('title')[0]
		this.content = el.getElementsByClassName('content')[0]
		this.submit = el.getElementsByClassName('submit')[0]
		this.quill = new Quill('#editor', {
			theme: 'snow',
			modules: {
				toolbar: this.toolbarOptions
			}
		})
	}

	init() {
		this.bindEvent()
	}

	bindEvent() {
		this.submit.addEventListener('click', this.submitForm.bind(this), false)
	}

	async submitForm() {
		const oriContent = this.quill.root.innerHTML.replace(/<[^>]+>/g, '')
		if (isEmpty(oriContent) || isEmpty(this.title.value)) {
			return alert('Title and content required')
		}
		const data = {
			id: window.localStorage.getItem('userID'),
			titleText: this.title.value,
			contentText: this.quill.root.innerHTML
		}
		const { status } = await postStory(data)
		if (status) {
			alert('add success')
			window.location = '../../../dist/index.html'
		}
	}
}
