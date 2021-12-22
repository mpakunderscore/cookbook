require('dotenv').config()

let express = require('express')
const {initAPI} = require("./server/api");

let app = express()

let server = require('http').Server(app)
server.listen(process.env.PORT || 7070)

initAPI(app).then(r => {})

app.use('/', express.static('dist'))

