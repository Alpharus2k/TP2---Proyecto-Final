'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stepComponents', [{
      recipeId: 1,
      ingredientId: 1,
      ingredientAmount: 10
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stepComponents', null, {});
  }
};