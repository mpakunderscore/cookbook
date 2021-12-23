const food = require("../core");
const {getUsers, saveUser} = require("./database/database")


let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/food', async function (request, response) {
        response.json(food)
    })

    app.get(prefix + '/login', async (request, response) => {

        let email = request.query.email
        let userData = JSON.parse(request.query.user)

        console.log(userData)

        let user = await saveUser(email, userData)
        response.json(user)
    })

    app.get(prefix + '/message', async (request, response) => {

        let message = request.query.text
        // let userData = JSON.parse(request.query.user)

        console.log(message)

        // let user = await saveUser(email, userData)
        response.json({})
    })

    app.get(prefix + '/users', async (request, response) => {
        const links = await getUsers()
        response.json(links)
    })
}

module.exports = {
    initAPI
}