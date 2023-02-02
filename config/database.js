const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mariadb://root@localhost:3306/online_node");

async function connection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }
}

connection();
