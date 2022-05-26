'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipesBook', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED
      },
      recipeId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      ingredientId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      perProducedUnit: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
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
    await queryInterface.dropTable('recipesBook');
  }
};