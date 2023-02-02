"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Product.belongsTo(models.Category);
            models.Category.hasMany(Product);
        }
    }
    Product.init(
        {
            code: DataTypes.STRING,
            slugs: DataTypes.STRING,
            categoryid: DataTypes.INTEGER,
            name: DataTypes.STRING,
            shortdescription: DataTypes.STRING,
            description: DataTypes.STRING,
            pricing: DataTypes.BIGINT,
            stock: DataTypes.INTEGER,
            stars: DataTypes.INTEGER,
            mainimage: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
