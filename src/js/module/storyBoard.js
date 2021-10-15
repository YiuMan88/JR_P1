import { likeStory } from '../utilities/http'
export default class StoryBoard {
	constructor(el, storyData, userId, storyId, islike) {
		this.article = el.getElementsByClassName('articleContainer__article')[0]
		this.action = el.getElementsByClassName('articleContainer__action')[0]
		this.thumbBtn = this.action.getElementsByClassName('likes')[0]
		this.thumbBtnImg = this.thumbBtn.getElementsByClassName('likes_img')[0]
		this.title = this.article.getElementsByClassName('title')[0]
		this.authorInfo = this.article.getElementsByClassName('author')[0]
		this.authorName = this.authorInfo.getElementsByClassName('name')[0]
		this.content = this.article.getElementsByTagName('p')[0]
		this.storyData = storyData
		this.userId = userId
		this.storyId = storyId
		this.isLike = islike
	}
	init() {
		this.bindEvent()
		this.storyRender()
		this.likesBtnRender()
	}
	bindEvent() {
		this.thumbBtn.addEventListener('click', this.likes.bind(this), false)
	}

	storyRender() {
		const { title, author, content } = this.storyData
		this.title.innerHTML = title
		this.authorName.innerHTML = author
		this.content.innerHTML = content
	}
	async likes() {
		const result = await likeStory(this.userId, this.storyId, !this.isLike)
		if (result.status === 200) {
			location.reload()
		}
	}
	likesBtnRender() {
		console.log(this.thumbBtnImg)
		if (this.isLike) {
			this.thumbBtn.style.background = '#ec7259'
			this.thumbBtnImg.src = '../../../src/asset/likedWhite.svg'
		}
	}
}
