'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      peopleId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      city: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      county: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      zipCode: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      street: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      floor: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      department: {
        type: Sequelize.STRING(5),
        allowNull: true
      },
      tower: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      note: {
        type: Sequelize.STRING(300),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowsNull: true
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};