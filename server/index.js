const express = require('express')
const cors = require('cors')
const cookiePraser = require('cookie-parser')
const listRoute = require('./routers/list')
const auth = require('./routers/auth')
const app = express()

app.use(cors({ origin: 'http://127.0.0.1:5500', credentials: true }))
app.use(cookiePraser())

app.use(listRoute)
app.use(auth)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`server runs on localhost:${PORT}`)
})
