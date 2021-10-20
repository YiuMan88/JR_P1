const storyElement = data => {
	let allStoryDiv = []

	for (let i = 0; i < data.length; i++) {
		const author = data[i]['author']
		const likes = data[i]['likes']
		const storyId = data[i]['story_id']
		const content = data[i]['content'].replace(/<[^>]+>/g, '')
		const title = data[i]['title']

		//wrapper
		const contentList = $(
			`<a href = '../../../dist/storyDetail.html?story_id=${storyId}' class = "content__list"></a>`
		)
		// left side content
		const listDetail = $(`<div class = "content__list__textdetail"></div>`)
		const listTitle = $(`<h3>${title}</h3>`)
		const listParagraph = $(`<p>${content}</p>`)
		//UserDetail
		const listUserDetail = $(`<div class = "content__list__userdetail"></div>`)
		const listLikeIconWrapper = $(`<div class = "content__list__likeicon"></div>`)
		const listLikeIcon = $(`<img src = "../../../src/asset/likes.svg"/>`)
		const listLikeAtm = $(`<span>${likes ? likes : 0}</span>`)
		const listAuthor = $(`<span>${author}</span>`)
		//right side content
		const listImgWrapper = $(`<div class = "content__list__img"></div>`)
		const listImg = $(
			`<img src = "https://images.unsplash.com/photo-1598024055266-e772a5f8c128?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhZGluZ3xlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;w=1000&amp;q=80"/>`
		)

		//left side (listDetail)
		$(listDetail).append(listTitle)
		$(listDetail).append(listParagraph)
		$(listDetail).append(listUserDetail)
		$(listLikeIconWrapper).append(listLikeIcon)
		$(listLikeIconWrapper).append(listLikeAtm)
		$(listUserDetail).append(listLikeIconWrapper)
		$(listUserDetail).append(listAuthor)
		//left side img
		$(listImgWrapper).append(listImg)

		//inser two parts into contentList
		$(contentList).append(listDetail)
		$(contentList).append(listImgWrapper)
		allStoryDiv.push(contentList)
	}

	return allStoryDiv
}

module.exports = {
	storyElement
}
