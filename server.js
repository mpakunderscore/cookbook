require('dotenv').config()

let express = require('express')
const {initAPI} = require("./server/api");

let app = express()
app.use('/', express.static('dist'))

let server = require('http').Server(app)
server.listen(process.env.PORT || 7070)

initAPI(app).then(r => {})

