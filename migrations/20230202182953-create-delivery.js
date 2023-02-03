"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Deliveries", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            transactionid: {
                type: Sequelize.INTEGER,
            },
            reffid: {
                type: Sequelize.INTEGER,
            },
            sendername: {
                type: Sequelize.STRING,
            },
            senderphone: {
                type: Sequelize.BIGINT,
            },
            receivername: {
                type: Sequelize.STRING,
            },
            receiveraddress: {
                type: Sequelize.STRING,
            },
            receiverphone: {
                type: Sequelize.BIGINT,
            },
            messagedelivery: {
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
        await queryInterface.dropTable("Deliveries");
    },
};
