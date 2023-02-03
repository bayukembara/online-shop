"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("DetailTransactions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            productid: {
                type: Sequelize.INTEGER,
            },
            transactionid: {
                type: Sequelize.INTEGER,
            },
            productname: {
                type: Sequelize.STRING,
            },
            productimage: {
                type: Sequelize.STRING,
            },
            productprice: {
                type: Sequelize.BIGINT,
            },
            productqty: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("DetailTransactions");
    },
};
