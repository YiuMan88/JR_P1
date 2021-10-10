const express = require('express')
const router = express.Router()
const {
	list_data,
	user_story,
	post_story,
	get_specificStory
} = require('../controller/listController')

//get User's story
router.get('/api/list/:id', async (req, res, next) => {
	const { id } = req.params
	try {
		const user_data = await user_story(id)
		res.send(user_data)
	} catch (err) {
		next(err)
	}
})

//get all story
router.get('/api/list', (req, res) => {
	list_data(function (rs) {
		res.send(rs.users[0])
	})
})
//serach specific story by its id
router.get('/api/list/search/:story_id', async (req, res, next) => {
	const { story_id } = req.params
	try {
		const result = await get_specificStory(story_id)
		res.status(200).json(result)
	} catch (err) {
		next(err)
	}
})
//creating new story
router.post('/api/list', async (req, res, err) => {
	const { id, titleText, contentText } = req.query
	try {
		const posting = await post_story({
			id,
			titleText,
			contentText
		})
		res.send(posting)
	} catch (err) {
		next(err)
	}
})

module.exports = router
