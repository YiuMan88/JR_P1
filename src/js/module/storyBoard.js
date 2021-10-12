export default class StoryBoard {
	constructor(el, storyData) {
		this.article = el.getElementsByClassName('articleContainer__article')[0]
		this.title = this.article.getElementsByClassName('title')[0]
		this.authorInfo = this.article.getElementsByClassName('author')[0]
		this.authorName = this.authorInfo.getElementsByClassName('name')[0]
		this.content = this.article.getElementsByTagName('p')[0]
		this.storyData = storyData
	}
	init() {
		this.bindEvent()
		console.log(this.storyData)
		this.storyRender()
	}
	bindEvent() {}

	storyRender() {
		const { title, author, content } = this.storyData
		this.title.innerHTML = title
		this.authorName.innerHTML = author
		this.content.innerHTML = content
	}
}
