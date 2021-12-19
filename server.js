require('dotenv').config()

const {crawlBlanks} = require("./server/worker")
const {initAPI} = require("./server/api")

let express = require('express')

let app = express()
app.use('/', express.static('dist'))

let server = require('http').Server(app)
server.listen(process.env.PORT || 8080)

initAPI(app).then(r => {

})

crawlBlanks()

