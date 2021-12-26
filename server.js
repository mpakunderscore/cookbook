require('dotenv').config()

const food = require('./core')

let express = require('express')
const router = express.Router({ strict: true })
const {initAPI} = require("./server/api");

let app = express()

let server = require('http').Server(app)
server.listen(process.env.PORT || 7070)

initAPI(app).then(r => {})

// app.use(function (req, res, next) {
//     if (req.path.substr(-1) == '/' && req.path.length > 1) {
//         let query = req.url.slice(req.path.length)
//         res.redirect(301, req.path.slice(0, -1) + query)
//     } else {
//         next()
//     }
// })

app.use('/', express.static('dist'))

for (let i = 0; i < food.length; i++) {
    app.use('/' + food[i].name, express.static('dist'))
}

