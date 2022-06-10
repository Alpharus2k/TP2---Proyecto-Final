'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodDangers extends Model {

    static associate(models) {
      // define association here
    }
  }
  FoodDangers.init({
    name: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FoodDangers',
    tableName: 'foodDangers',
  });
  return FoodDangers;
};