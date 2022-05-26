'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      recipeId: 1,
      ingredientId: 5,
      perProducedUnit: 24.65
    },{
      recipeId: 2,
      ingredientId: 13,
      perProducedUnit: 114.03
    },

    ];

    await queryInterface.bulkInsert('recipesBook', list, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipesBook', null, {});
     
  }
};
