"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint("DetailTransactions", {
            fields: ["transactionid"],
            type: "foreign key",
            name: "detailtransaction-transaction-association",
            references: { table: "Transactions", field: "id" },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint(
            "Reviews",
            "detailtransaction-transaction-association"
        );
    },
};
