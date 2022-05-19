'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('people', [
      { name: 'John Doe',
        email: 'john.doe@mail.com'},
      { name: 'Juan Perez',
        email: 'juan.perez@mail.com'},
      { name: 'Maria Gomez',
        email: 'maria.g@mail.com'},
      { name: 'Juancho Z',
        email: 'zman@mail.com'},
      { name: 'Carla Sinclair',
        email: 'sinclair.carla@mail.com'},
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
    
  }
};
