const food = require("../core");
const {getUsers, getUser, updateUser, getMessages, saveMessage} = require("./database/database")


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
}

module.exports = {
    initAPI
}