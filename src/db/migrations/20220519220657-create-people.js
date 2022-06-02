'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      id: {
        allowNull: false,
        autoIncrement : true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED
         },
      name:{
        type: Sequelize.DataTypes.STRING(120),
        allowNull: false
         },
      email:{
        type: Sequelize.DataTypes.STRING(100),
        unique: true,
        allowNull: false
         },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull : true
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowsNull: true
    }
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  }
};