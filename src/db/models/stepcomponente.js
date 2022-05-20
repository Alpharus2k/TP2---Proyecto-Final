'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stepComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stepComponent.init({
    recipeId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER,
    ingredientAmount: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'stepComponent',
  });
  return stepComponent;
};