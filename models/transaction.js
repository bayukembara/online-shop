"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Transaction.init(
        {
            code: DataTypes.STRING,
            status: DataTypes.INTEGER,
            shipping_delivery: DataTypes.STRING,
            subtotal: DataTypes.BIGINT,
            discount: DataTypes.INTEGER,
            total: DataTypes.BIGINT,
            payment_method: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Transaction",
        }
    );
    return Transaction;
};
