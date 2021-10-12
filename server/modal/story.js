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
		return this.db.query('call postNewStory(?,?,?,?);', [id, titleText, contentText, 'author_name'])
	}

	//findStory by story_id
	findStoryById(story_id) {
		return this.db.query('call get_sepecific_story(?);', [story_id])
	}
}

module.exports = new Story()
