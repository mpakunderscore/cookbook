const food = require("../core");
const {getUsers, getUser, updateUser, getMessages, saveMessage} = require("./database/database")
const axios = require("axios");

let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/food', async function (request, response) {
        response.json(food)
    })

    app.get(prefix + '/user', async (request, response) => {

        let email = request.query.email
        let userData = JSON.parse(request.query.user)
        let user = await updateUser(email, userData)
        response.json(user)
    })

    app.get(prefix + '/users', async (request, response) => {
        const links = await getUsers()
        response.json(links)
    })

    app.get(prefix + '/message', async (request, response) => {

        let messageText = request.query.text
        // let userData = JSON.parse(request.query.user)

        console.log(messageText)
        const message = await saveMessage(messageText)
        // const message = await getMessages()

        // let user = await saveUser(email, userData)
        response.json(message)
    })

    app.get(prefix + '/messages', async (request, response) => {
        const messages = await getMessages()
        response.json(messages)
    })

    app.get(prefix + '/images', async (request, response) => {
        response.json(images)
    })
}

let images = []

let loadCoreImages = async () => {

    for (let i = 0; i < food.length; i++) {
        console.log(food[i].name)
        console.log(food[i].list.length)
    }

}

let loadImages = async (query) => {

    let clientID = 'frjPxPVuy8TBY16CU7KlZQAEopFlU21UGm84KlV0UB4'

    let url = 'https://api.unsplash.com/search/photos?query=' + query + '&client_id=' + clientID

    let response = await axios.get(url, {

        // timeout: 5000,
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        // browser only: 'blob'
        // TODO
        // responseType: 'document', // default
        // headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        // maxContentLength: 100000000,
        // maxBodyLength: 100000000,

    }).catch(function (error) {console.error(error)})

    // console.log(response.data)

    for (let i = 0; i < response.data.results.length; i++) {
        // images.push(response.data.results[i].urls.small)
        images.push(response.data.results[i].urls.thumb)
    }

    // console.log(images)
}

// loadImages('burger').then()

loadCoreImages().then()

module.exports = {
    initAPI
}