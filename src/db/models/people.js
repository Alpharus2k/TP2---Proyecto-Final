'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
 
    static associate(models) {
      People.belongsToMany(models.addresses, {
        through: 'addressBook'
      }),
      People.belongsTo(models.phones)
    }
  }
  People.init({
    name:{
      type: DataTypes.STRING(120),
      allowNull: false
       },
       
    email:{
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: true
       }
  }, {
    sequelize,
    modelName: 'people',
    tableName: 'people'
  });
  return People;
};