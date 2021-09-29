const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Cinema extends Model {}

Cinema.init(
    {
        location: DataTypes.STRING,
        numOfScreens: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "cinemas",
        timestamps: false,
    }
);

module.exports = Cinema;
