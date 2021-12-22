const food = require("../core");
const {getUsers, saveUser} = require("./database/database");

let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/food', async function (request, response) {
        response.json(food)
    })

    app.get(prefix + '/login', async (request, response) => {
        const links = await getUsers()
        let email = request.query.email
        let user = JSON.parse(request.query.user)
        await saveUser(email, user)
        response.json(user)
    })

    app.get(prefix + '/users', async (request, response) => {
        const links = await getUsers()
        response.json(links)
    })
}

module.exports = {
    initAPI
}