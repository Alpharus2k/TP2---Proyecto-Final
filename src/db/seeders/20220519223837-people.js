'use strict';
const per = require('@ngneat/falso')
const cantPer = 100;

module.exports = {
  
  async up (queryInterface, Sequelize) {
    const people = [];
    for(let i = 0; i < cantPer; i++){
      people.push({name: per.randFullName(), email: per.randEmail(),createdAt: new Date,updatedAt: new Date})
    }
  
      await queryInterface.bulkInsert('people', people, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
    
  }
};
