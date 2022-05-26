'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('typeMeasures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED
      },
      name: {
        type: Sequelize.DataTypes.STRING(20),
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.DataTypes.STRING(2),
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
    await queryInterface.dropTable('typeMeasures');
  }
};