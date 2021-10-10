import Write from './module/write'

window.addEventListener('load', () => {
	const form = document.getElementsByClassName('editor__form')[0]

	const init = () => {
		new Write(form).init()
	}
	init()
})
