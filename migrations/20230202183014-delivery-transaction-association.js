"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("Deliveries", {
            fields: ["transactionid"],
            type: "foreign key",
            name: "delivery-transaction-association",
            references: { table: "Transactions", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Deliveries",
            "delivery-transaction-association"
        );
    },
};
