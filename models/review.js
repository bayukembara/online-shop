"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Review.belongsTo(models.Product);
            models.Product.hasMany(Review);
        }
    }
    Review.init(
        {
            productid: DataTypes.INTEGER,
            name: DataTypes.STRING,
            stars: DataTypes.INTEGER,
            image: DataTypes.STRING,
            reviews: DataTypes.STRING,
            date: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Review",
        }
    );
    return Review;
};
