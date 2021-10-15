const isEmpty = require('lodash/isEmpty')
const Create = require('../utilities/createElement')
export default class Newbody {
	constructor(el, allStoryData, userStoryData) {
		this.listData = allStoryData
		this.userStory = userStoryData
		this.list = el.getElementsByClassName('NewsBody__left')[0]
		this.storyPannel = this.list.getElementsByClassName('story')[0]
		this.allStory = this.storyPannel.getElementsByTagName('section')[0]
		this.myStory = this.storyPannel.getElementsByTagName('section')[1]
	}
	init() {
		this.renderList()
	}
	renderList() {
		const allStoryDiv = Create.storyElement(this.listData)
		const userStoryDiv = Create.storyElement(this.userStory)
		this.allStoryRendering(allStoryDiv)
		this.userStoryRendering(userStoryDiv)
	}
	//procesing Div element for all story pannel

	//All story pannel rendering
	allStoryRendering(renderItems) {
		for (let i = 0; i < renderItems.length; i++) {
			this.allStory.appendChild(renderItems[i])
		}
	}

	userStoryRendering(renderItems) {
		const token = window.localStorage.getItem('JWT')
		if (isEmpty(token)) {
			const notLogin = document.createElement('div')
			notLogin.innerHTML = 'please login to view ur own post'
			this.myStory.appendChild(notLogin)
		} else {
			for (let i = 0; i < renderItems.length; i++) {
				this.myStory.appendChild(renderItems[i])
			}
		}
	}
}
