const storyElement = data => {
	let allStoryDiv = []

	for (let i = 0; i < data.length; i++) {
		const author = data[i]['author']
		const likes = data[i]['likes']
		const storyId = data[i]['story_id']
		const content = data[i]['content'].replace(/<[^>]+>/g, '')
		const title = data[i]['title']

		let newsWrapper = document.createElement('div')
		newsWrapper.setAttribute('class', 'NewsContainer')

		let newsInfor = document.createElement('div')
		newsInfor.setAttribute('class', 'NewsContainer__info')

		let inforTitle = document.createElement('h3')
		inforTitle.innerHTML = title
		inforTitle.addEventListener('click', () => {
			window['filter'] = storyId
			window.open(`../../../dist/storyDetail.html?story_id=${storyId}`)
		})

		let inforContent = document.createElement('p')
		inforContent.innerHTML = content

		let userDetail = document.createElement('div')
		userDetail.setAttribute('class', 'userDetail')

		let likesIcon = document.createElement('img')
		likesIcon.src = '../../../src/asset/likes.svg'

		let likesAmt = document.createElement('span')
		likesAmt.innerHTML = likes

		let likesContainer = document.createElement('div')
		likesContainer.className = 'lieksContainer'

		let authorDiv = document.createElement('div')
		authorDiv.innerHTML = author

		let imgContainer = document.createElement('div')
		imgContainer.setAttribute('class', 'NewsContainer__img')

		let img = document.createElement('img')
		img.src =
			'https://images.unsplash.com/photo-1598024055266-e772a5f8c128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'

		newsWrapper.appendChild(newsInfor)
		newsInfor.appendChild(inforTitle)
		newsInfor.appendChild(inforContent)
		newsInfor.appendChild(userDetail)

		likesContainer.appendChild(likesIcon)
		likesContainer.appendChild(likesAmt)

		userDetail.appendChild(likesContainer)
		userDetail.appendChild(authorDiv)
		imgContainer.appendChild(img)
		newsWrapper.appendChild(imgContainer)
		allStoryDiv.push(newsWrapper)
	}

	return allStoryDiv
}

module.exports = {
	storyElement
}
