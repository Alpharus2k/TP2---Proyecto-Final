'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      ingredientId: 1,
      foodDangersId: 3
    },{
      ingredientId: 2,
      foodDangersId: 3
    },{
      ingredientId: 3,
      foodDangersId: 2
    },{
      ingredientId: 4,
      foodDangersId: 8
    },{
      ingredientId: 5,
      foodDangersId: 1
    },{
      ingredientId: 5,
      foodDangersId: 2
    },{
      ingredientId: 5,
      foodDangersId: 3
    },{
      ingredientId: 5,
      foodDangersId: 8
    },{
      ingredientId: 6,
      foodDangersId: 1
    }
  ];
    
    await queryInterface.bulkInsert('foodHazardsIngredients', list, {});
  
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('foodHazardsIngredients', null, {});
 
  }
};
