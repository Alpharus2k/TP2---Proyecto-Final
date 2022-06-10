'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cookedIngredients', [{
      recipeId: 1,
      ingredientId: 1,
      ingredientAmount: 10,
      createdAt: new Date,
      updatedAt: new Date
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cookedIngredients', null, {});
  }
};