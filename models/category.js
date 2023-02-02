"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Category.belongsTo(models.groupCategory);
            models.groupCategory.hasMany(Category);
        }
    }
    Category.init(
        {
            code: DataTypes.STRING,
            slugs: DataTypes.STRING,
            groupcategoryid: DataTypes.INTEGER,
            name: DataTypes.STRING,
            image: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Category",
        }
    );
    return Category;
};
