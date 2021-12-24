const { Sequelize, Op} = require('sequelize')
const { Model, DataTypes } = require('sequelize')
const {initModels} = require("./models");
// const {memoryWords} = require("./engine");
const {USER, MESSAGE} = require("./models")

// console.log(process.env.DATABASE_URL)

let sequelize

try {
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_COBALT_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: true,
    })
} catch (e) {
    console.log(e)
}

module.exports.sequelize = sequelize

try {
    module.exports.sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully')
    })
} catch (error) {
    console.error('Unable to connect to the database:', error)
}

// TODO
let force = false
module.exports.sequelize.sync({force: force}).then(async () => {
    console.log('DB SYNC')
})

let getUsers = async (limit = '1000', order = 'createdAt') => {

    let selectedWords = []
    // for (let i = 0; i < words.length; i++) {
    //     selectedWords.push({[Op.like]: '%' + words[i] + '%'})
    // }

    return await USER.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

let getMessages = async (limit = '1000', order = 'createdAt') => {

    return await MESSAGE.findAll({
        order: [
            [order, 'DESC'],
        ],
        limit: parseInt(limit),
    })
}

let getUser = async (email) => {
    let user = USER.findOne({where: {email: email}})
    return user
}

let updateUser = async (email, clientData) => {

    let user = (await USER.findOrCreate({where: {email: email}}))[0]
    if (!user.data)
        user.data = {count: 0}

    if (clientData.count > 0 && user.data.count >= 0 && clientData.count > user.data.count) {
        user.data = clientData
        console.log('UPDATE DATA')
    }

    await user.save()
    await user.reload()
    return user.data
}

module.exports = {
    getUser, updateUser, getUsers, getMessages
}

initModels(sequelize)