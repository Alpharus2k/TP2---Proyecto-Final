'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Person.init({
    name:{
      type: Sequelize.DataTypes.STRING(120),
      allowNull: false
       },

    email:{
      type: Sequelize.DataTypes.STRING(100),
      unique: true,
      allowNull: true
       }
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'people'
  });
  return Person;
};