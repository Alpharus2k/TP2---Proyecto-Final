'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodDangers extends Model {

    static associate(models) {
      FoodDangers.belongsToMany(models.ingredients, {
        through: 'foodHazardsIngredients',
     }),
      FoodDangers.belongsToMany(models.clients, {
      through: 'foodHazardsClients',
      })
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
    modelName: 'foodDangers',
    tableName: 'foodDangers',
  });
  return FoodDangers;
};