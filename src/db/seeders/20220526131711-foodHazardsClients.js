'use strict';
const amount = 100;
const max = 8;
const min = 1;
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const list = [];
    for(let i = 0; i < amount; i++){
      if(i%2 == 0){
        list.push({clientId: (i+1), foodDangerId: (Math.floor(Math.random() * (max - min + 1)) + min)})
      }
    }
    
      await queryInterface.bulkInsert('foodHazardsClients', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foodHazardsClients', null, {});
  }
};
