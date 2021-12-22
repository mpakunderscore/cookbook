const food = require("../core");
const {getUsers, saveUser} = require("./database/database")

const {} = require("./database/models")
const {} = require("./database/database")
const {Sequelize, Op} = require("sequelize")

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

    app.get(prefix + '/users', async (request, response) => {
        const links = await getUsers()
        response.json(links)
    })
}

module.exports = {
    initAPI
}