'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('typeMeasures', [{
        name: 'Volumen',
        description: 'ml'
      },{
        name: 'Peso',
        description: 'gr'
      },{
        name: 'Unidad',
        description: 'un'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeMeasures', null, {});
  }
};
