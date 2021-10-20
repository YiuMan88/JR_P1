class Story {
	constructor() {
		this.db = require('../lib/connection')
	}
	//get all story
	getAllStory() {
		return this.db.query('call getAllStory();')
	}

	//findStory by user_ID
	findStory(id) {
		return this.db.query('call userStory(?)', [id])
	}

	//post new story
	addStory(storyData) {
		const { id, titleText, contentText } = storyData
		return this.db.query('call postNewStory(?,?,?);', [id, titleText, contentText])
	}

	//findStory by story_id
	findStoryById(story_id) {
		return this.db.query('call get_sepecific_story(?);', [story_id])
	}

	//like a story
	likeStory(detail) {
		const { userid, storyid, isLike } = detail
		return this.db.query('call like_story(?, ?, ?);', [userid, storyid, isLike])
	}

	//check if story liked
	isStoryLiked(detail) {
		const { userId, storyId } = detail
		return this.db.query('call check_story_liked(?, ?);', [userId, storyId])
	}
}

module.exports = new Story()
