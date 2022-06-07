'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sale = []
    for (let i = 0;i<10;i++) {
      sale.push({id:i+1,name:"name"+(i+1), updatedAt:new Date,salePrice:i*2})
    }
    await queryInterface.bulkInsert('saleProducts',sale,{});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('saleProducts',null,{});
  }
};