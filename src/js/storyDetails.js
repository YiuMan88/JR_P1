import Header from './module/header'
import StoryBoard from './module/storyBoard'
import { getSpecificStory } from './utilities/http'
window.addEventListener('load', async () => {
	let url = new URLSearchParams(window.location.search)
	let storyId = url.get('story_id')
	const { data } = await getSpecificStory(storyId)
	const header = document.getElementsByClassName('header')[0]
	const article = document.getElementsByClassName('articleContainer')[0]
	const jwt = window.localStorage.getItem('JWT') || null

	const init = () => {
		new Header(header, jwt).init()
		new StoryBoard(article, data[0][0]).init()
	}
	init()
})
