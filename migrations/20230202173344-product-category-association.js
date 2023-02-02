"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("Products", {
            fields: ["categoryid"],
            type: "foreign key",
            name: "product-category-association",
            references: { table: "Categories", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Products",
            "product-category-association"
        );
    },
};
