const isEmpty = require('lodash/isEmpty')
const Create = require('../utilities/createElement')
export default class Newbody {
	constructor(el, allStoryData, userStoryData) {
		this.listData = allStoryData
		this.userStory = userStoryData
		this.list = el.getElementsByClassName('content__postlist')[0]
		this.storyPannel = this.list.getElementsByClassName('content__pannel')[0]
		this.allStory = this.storyPannel.getElementsByTagName('article')[0]
		this.myStory = this.storyPannel.getElementsByTagName('article')[1]
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
			$(this.allStory).append(renderItems[i])
		}
	}

	userStoryRendering(renderItems) {
		const token = window.localStorage.getItem('JWT')
		if (isEmpty(token)) {
			const reminder = $('<span>please login to view ur own post</span>')
			$(this.myStory).append(reminder)
		} else {
			for (let i = 0; i < renderItems.length; i++) {
				$(this.myStory).append(renderItems[i])
			}
		}
	}
}
