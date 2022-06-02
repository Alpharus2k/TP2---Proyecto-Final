'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
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
      country: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      city: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      county: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false
      },
      zipCode: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true
      },
      street: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      number: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      floor: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true
      },
      department: {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: true
      },
      tower: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: true
      },
      note: {
        type: Sequelize.DataTypes.STRING(300),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowsNull: true
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};