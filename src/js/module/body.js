const isEmpty = require('lodash/isEmpty')
const Create = require('../utilities/createElement')
export default class Newbody {
	constructor(el, allStoryData, userStoryData) {
		this.listData = allStoryData
		this.userStory = userStoryData
		console.log(userStoryData)
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

	// storyCreating(data) {
	// 	let allStoryDiv = []
	// 	for (let i = 0; i < data.length; i++) {
	// 		let newsWrapper = document.createElement('div')
	// 		newsWrapper.setAttribute('class', 'NewsContainer')

	// 		let newsInfor = document.createElement('div')
	// 		newsInfor.setAttribute('class', 'NewsContainer__info')

	// 		let inforTitle = document.createElement('h3')
	// 		inforTitle.innerHTML = data[i]['title']

	// 		let inforContent = document.createElement('p')
	// 		inforContent.innerHTML = data[i]['content']

	// 		let userDetail = document.createElement('div')
	// 		userDetail.setAttribute('class', 'userDetail')

	// 		let likes = document.createElement('div')
	// 		likes.innerHTML = data[i]['likes']

	// 		let author = document.createElement('div')
	// 		author.innerHTML = data[i]['author']

	// 		let imgContainer = document.createElement('div')
	// 		imgContainer.setAttribute('class', 'NewsContainer__img')

	// 		let img = document.createElement('img')
	// 		img.src =
	// 			'https://images.unsplash.com/photo-1598024055266-e772a5f8c128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

	// 		newsWrapper.appendChild(newsInfor)
	// 		newsInfor.appendChild(inforTitle)
	// 		newsInfor.appendChild(inforContent)
	// 		newsInfor.appendChild(userDetail)
	// 		userDetail.appendChild(likes)
	// 		userDetail.appendChild(author)
	// 		imgContainer.appendChild(img)
	// 		newsWrapper.appendChild(imgContainer)
	// 		allStoryDiv.push(newsWrapper)
	// 	}
	// 	return allStoryDiv
	// }
}
