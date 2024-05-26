const express = require('express')
const router = express.Router()
const createPrompt = require('../controllers/StoryDataController')
const useApi = require('../OpenAi')


router.get('/', ((req, res) => {
    res.send(200)
}))

router.post('/', async (req, res) => {
    let prompt = createPrompt(req.body)
    let story = await useApi(prompt)
    res.json(story)
})


module.exports = router