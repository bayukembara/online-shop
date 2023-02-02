"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("Categories", {
            fields: ["groupcategoryid"],
            type: "foreign key",
            name: "category_group_association",
            references: { table: "groupCategories", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Categories",
            "category_group_association"
        );
    },
};
