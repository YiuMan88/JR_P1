import Header from './module/header'
import StoryBoard from './module/storyBoard'
import { getSpecificStory, checkIsLike } from './utilities/http'
window.addEventListener('load', async () => {
	let url = new URLSearchParams(window.location.search)
	let storyId = url.get('story_id')
	const header = document.getElementsByClassName('header')[0]
	const article = document.getElementsByClassName('articleContainer')[0]
	const jwt = window.localStorage.getItem('JWT') || null
	const userId = window.localStorage.getItem('userID') || null
	const isLiked = await checkIsLike(userId, storyId)

	//fetching story data
	const story = await getSpecificStory(storyId)
	const storyData = story.data.result[0]

	const init = () => {
		new Header(header, jwt).init()
		new StoryBoard(article, storyData, userId, storyId, isLiked.data.isLiked).init()
	}

	init()
})
