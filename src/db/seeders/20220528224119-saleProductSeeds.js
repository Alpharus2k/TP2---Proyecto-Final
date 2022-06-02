'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sale = []
    for (let i = 0;i<10;i++) {
      sale.push({id:i,name:"name"+i, updatedAt:"description",salePrice:i*2})
    }
    await queryInterface.bulkInsert('saleProducts',sale,{});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('saleProducts',null,{});
  }
};