"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
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
            slugs: {
                unique: true,
                type: Sequelize.STRING,
            },
            categoryid: {
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            shortdescription: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.STRING,
            },
            pricing: {
                type: Sequelize.BIGINT,
            },
            stock: {
                type: Sequelize.INTEGER,
            },
            stars: {
                type: Sequelize.INTEGER,
            },
            mainimage: {
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
        await queryInterface.dropTable("Products");
    },
};
