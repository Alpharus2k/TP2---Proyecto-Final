'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      ingredientId: 1,
      foodDangersId: 3
    },{
      ingredientId: 2,
      foodDangersId: 3
    }];
    await queryInterface.bulkInsert('foodHazardsIngredients', list, {});
  
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('foodHazardsIngredients', null, {});
 
  }
};
