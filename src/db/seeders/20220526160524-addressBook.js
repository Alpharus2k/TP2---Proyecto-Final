'use strict';
const amount = 100;
module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [];
    for(let i = 0; i < amount; i++){
      list.push({poepleId: (i+1), addressId: (i+1)})
    }
     await queryInterface.bulkInsert('addressBook', list, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addressBook', null, {});
  
  }
};
