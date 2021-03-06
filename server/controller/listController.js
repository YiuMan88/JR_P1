const isEmpty = require('lodash/isEmpty')
const Story_Model = require('../modal/story')

const list_data = async (req, res) => {
	const { result } = await Story_Model.getAllStory()
	res.status(200).json({ status: true, result })
}

const user_story = async (req, res) => {
	const { id } = req.params
	const result = await Story_Model.findStory(id)
	res.status(200).json({ result: result.result[0] })
}

const post_story = async (req, res) => {
	const { id, titleText, contentText } = req.body.storydata
	try {
		await Story_Model.addStory({ id, titleText, contentText })
		res.status(200).json({ msg: 'successfully' })
	} catch (err) {
		res.status(500).json({ msg: 'adding new story errors' })
	}
}

const get_specificStory = async (req, res) => {
	const { story_id } = req.params
	try {
		const result = await Story_Model.findStoryById(story_id)
		res.status(200).json({ result: result.result[0] })
	} catch (err) {
		res.status(500).json({ msg: 'internal system error' })
	}
}

const likeStory = async (req, res) => {
	const { userid, storyid, isLike } = req.body
	try {
		await Story_Model.likeStory({ userid, storyid, isLike })
		res.status(200).json({ msg: 'successfully' })
	} catch (err) {
		res.status(400).json({ msg: 'internal error' })
	}
}

const isLikeStory = async (req, res) => {
	const { userId, storyId, isLikes } = req.params

	try {
		const result = await Story_Model.isStoryLiked({ userId, storyId, isLikes })
		let isLiked = true
		if (isEmpty(result.result[0]) || result.result[0][0]['likes'] === 0) {
			isLiked = false
		}
		res.status(200).json({ isLiked })
	} catch (err) {
		res.status(500).json({ msg: 'internal error' })
	}
}

module.exports = {
	list_data,
	user_story,
	post_story,
	get_specificStory,
	likeStory,
	isLikeStory
}
