'use strict';
const per = require('@ngneat/falso')
const amount = 100;

module.exports = {
  
  async up (queryInterface, Sequelize) {
    const list = [];
    for(let i = 0; i < amount; i++){
      list.push({name: per.randFullName(), email: per.randEmail()})
    }
  
      await queryInterface.bulkInsert('people', list, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
    
  }
};
