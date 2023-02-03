"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Transactions", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            code: {
                unique: true,
                type: Sequelize.STRING,
            },
            status: {
                type: Sequelize.INTEGER,
            },
            shipping_delivery: {
                type: Sequelize.STRING,
            },
            subtotal: {
                type: Sequelize.BIGINT,
            },
            discount: {
                type: Sequelize.INTEGER,
            },
            total: {
                type: Sequelize.BIGINT,
            },
            payment_method: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("Transactions");
    },
};
