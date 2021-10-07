import Header from './module/header'
import Newbody from './module/body'
import TabSwitch from './module/tabSwitch'
import { getListData, getUserStory } from './utilities/http'

window.addEventListener('load', async () => {
	const userID = window.localStorage.getItem('userID') || null
	const jwt = window.localStorage.getItem('JWT') || null
	const allStoryData = await getListData()
	const userStoryData = await getUserStory(userID)
	const header = document.getElementsByClassName('header')[0]
	const body = document.getElementsByClassName('NewsBody')[0]
	const tabSwitch = document.getElementsByClassName('NewsBody__left')[0]

	const init = () => {
		new Header(header, jwt).init()
		new Newbody(body, allStoryData.data, userStoryData.data).init()
		new TabSwitch(tabSwitch).init()
	}
	init()
})