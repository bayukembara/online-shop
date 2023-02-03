"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class DetailTransaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DetailTransaction.belongsTo(models.Transaction);
            models.Transaction.hasOne(DetailTransaction);
        }
    }
    DetailTransaction.init(
        {
            productid: DataTypes.INTEGER,
            transactionid: DataTypes.INTEGER,
            productname: DataTypes.STRING,
            productimage: DataTypes.STRING,
            productprice: DataTypes.BIGINT,
            productqty: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "DetailTransaction",
        }
    );
    return DetailTransaction;
};
