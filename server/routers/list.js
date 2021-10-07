const express = require('express')
const router = express.Router()
const {
    list_data,
    user_story,
    post_story
} = require('../controller/listController')

router.get('/api/list/:id', async (req, res) => {
    const {
        id
    } = req.params
    const user_data = await user_story(id)
    res.send(user_data)
})

router.get('/api/list', (req, res) => {
    list_data(function (rs) {
        res.send(rs.users[0])
    })
})


router.post('/api/list', async (req, res) => {
    const {
        id,
        titleText,
        contentText
    } = req.query
    const posting = await post_story({
        id,
        titleText,
        contentText
    })
   res.send(posting)

})

module.exports = router