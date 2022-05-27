'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sale = []
    for (let i = 0;i<10;i++) {
      sale.push({saleProductId:i,ingredientId:i,amount:55,createdAt:new Date, updatedAt:new Date})
    }
    await queryInterface.bulkInsert('salecontains',sale,{});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('salecontains',null,{});
  }
};
