'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list =[
      {
        ingredientId: 1,
         costPerUnit: 0.06
      },{
        ingredientId: 2,
        costPerUnit: 0.08
      },{
        ingredientId: 3,
        costPerUnit: 0.05
      },{
        ingredientId: 4,
        costPerUnit: 21.667
      },{
        ingredientId: 6,
         costPerUnit: 0.031
      },{
        ingredientId: 7,
         costPerUnit: 0.052
      }

    ]
    await queryInterface.bulkInsert('ingedientsPrice', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingedientsPrice', null, {});
    
  }
};
