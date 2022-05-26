'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED
      },
      peopleId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      countryCode: {
        type: Sequelize.DataTypes.STRING(4),
        allowNull: false
      },
      areaCode: {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: false
      },
      number: {
        type:Sequelize.DataTypes.STRING(12),
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING(20),
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
    await queryInterface.dropTable('phones');
  }
};