"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("ProductImages", {
            fields: ["productid"],
            type: "foreign key",
            name: "productimage-product-association",
            references: { table: "Products", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "ProductImages",
            "productimaage-product-association"
        );
    },
};
