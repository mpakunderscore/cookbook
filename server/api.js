const {crawlUrl} = require("./crawler/crawler")
const {LINK, LINK_BLANK, DOMAIN, WORD} = require("./database/models")
const {loadDatabaseLinks, getStatistics} = require("./database/database")
const {disabledDomainsStrings, domainsCount, domainsLength} = require("./worker")
const {Sequelize, Op} = require("sequelize")
const {getMemoryWords} = require("./crawler/engine")
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