const express = require('express')
const cors = require('cors')
const cookiePraser = require('cookie-parser')
const storyRoute = require('./routers/story')
const userRoute = require('./routers/user')
// const errorHandler = require('./middleware/errorHandler')
const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://127.0.0.1:5500', credentials: true }))
app.use(cookiePraser())

app.use(storyRoute)
app.use(userRoute)

// app.use()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`server runs on localhost:${PORT}`)
})
