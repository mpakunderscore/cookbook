// lang domain
const {DataTypes, Model} = require("sequelize");

class USER extends Model {}

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
        user: {
            type: DataTypes.JSONB,
        },
    }, { sequelize, modelName: 'user', timestamps: true })
}

module.exports = {
    USER, initModels
}