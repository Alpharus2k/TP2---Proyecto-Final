'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('foodHazardsClients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED
      },
      clientId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      foodDangerId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
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
    await queryInterface.dropTable('foodHazardsClients');
  }
};