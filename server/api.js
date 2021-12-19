const food = require("../food");

let prefix = '/api'

let initAPI = async (app) => {

    app.get(prefix + '/food', async function (request, response) {
        response.json(food)
    })
}

module.exports = {
    initAPI
}