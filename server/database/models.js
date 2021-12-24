// lang domain
const {DataTypes, Model} = require("sequelize");

class USER extends Model {}
class MESSAGE extends Model {}

let initModels = (sequelize) => {

    USER.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        data: {
            type: DataTypes.JSONB,
        },
    }, { sequelize, modelName: 'user', timestamps: true })

    MESSAGE.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.JSONB,
        },
    }, { sequelize, modelName: 'message', timestamps: true })
}

module.exports = {
    USER, MESSAGE, initModels
}