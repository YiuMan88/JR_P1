const express = require('express')
const router = express.Router()

const Story = require('../controller/listController')

router.get('/api/list/:id', Story.user_story)
router.get('/api/list', Story.list_data)
router.post('/api/list', Story.post_story)
router.get('/api/list/search/:story_id', Story.get_specificStory)
router.put('/api/list/likes', Story.likeStory)
router.get('/api/list/likes/:userId/:storyId', Story.isLikeStory)

module.exports = router
