"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("Reviews", {
            fields: ["productid"],
            type: "foreign key",
            name: "review-product-association",
            references: { table: "Products", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Reviews",
            "review-product-association"
        );
    },
};
