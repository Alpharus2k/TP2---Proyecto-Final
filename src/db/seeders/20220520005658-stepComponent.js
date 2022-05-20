'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('step_component', [{
      recipeId: 1,
      ingredientId: 1,
      ingredientAmount: 10
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('step_component', null, {});
  }
};