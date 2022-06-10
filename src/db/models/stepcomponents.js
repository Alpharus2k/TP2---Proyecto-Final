'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stepComponents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stepComponents.init({
    recipeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    ingredientAmount: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'stepComponents',
    tableName: 'stepComponents',
  });
  return stepComponents;
};