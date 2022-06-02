'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('foodDangers', [{
     name: 'Sal'
    },{
    name: 'Lacteos'
    },{
    name: 'Trigo'
    },{
    name: 'Maní'
    },{
    name: 'Nueces'
    },{
    name: 'Pescado'
    },{
    name: 'Soja'
    },{
    name: 'Huevos'
    },{
    name: 'Mariscos'
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('foodDangers', null, {});
  }
};
