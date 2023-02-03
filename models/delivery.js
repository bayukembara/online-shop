"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Delivery extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Delivery.belongsTo(models.Transaction);
            models.Transaction.hasOne(Delivery);
        }
    }
    Delivery.init(
        {
            transactionid: DataTypes.INTEGER,
            reffid: DataTypes.INTEGER,
            sendername: DataTypes.STRING,
            senderphone: DataTypes.BIGINT,
            receivername: DataTypes.STRING,
            receiveraddress: DataTypes.STRING,
            receiverphone: DataTypes.BIGINT,
            messagedelivery: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Delivery",
        }
    );
    return Delivery;
};
