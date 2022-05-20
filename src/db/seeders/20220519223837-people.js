'use strict';
const per = require('@ngneat/falso')
const cantPer = 100;

module.exports = {
  
  async up (queryInterface, Sequelize) {
    const personas = [];
    for(let i = 0; i < cantPer; i++){
      personas.push({name: per.randFullName(), email: per.randEmail()})
    }
  
      await queryInterface.bulkInsert('people', personas, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
    
  }
};
