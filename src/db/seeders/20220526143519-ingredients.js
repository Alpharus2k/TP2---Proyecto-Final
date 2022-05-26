'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [{
      name: 'Harina 000',
      typeMeasuresId: 2
    },{
      name: 'Harina 0000',
      typeMeasuresId: 2
    },{
      name: 'Leche 3%',
      typeMeasuresId: 1
    },{
      name: 'Huevo Blanco Granja',
      typeMeasuresId: 3
    },{
      name: 'Pan de Hamburguesa de Campo',
      typeMeasuresId: 3
    },{
      name: 'Sal',
      typeMeasuresId: 2
    },{
      name: 'Azucar',
      typeMeasuresId: 2
    },{
      name: 'Agua',
      typeMeasuresId: 1
    },{
      name: 'Levadura Fresca',
      typeMeasuresId: 2
    },{
      name: 'Aceite de Oliva',
      typeMeasuresId: 1
    },{
      name: 'Carne picada Común',
      typeMeasuresId: 2
    },{
      name: 'Cebolla',
      typeMeasuresId: 2
    },{
      name: 'Medallón de Carne 160gr',
      typeMeasuresId: 3
    },{
      name: 'Ketchup',
      typeMeasuresId: 2
    },{
      name: 'Mostaza Dijón',
      typeMeasuresId: 2
    },{
      name: 'Lechuga',
      typeMeasuresId: 2
    },{
      name: 'Tomate',
      typeMeasuresId: 2
    }];
    
   await queryInterface.bulkInsert('ingredients', list, {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ingredients', null, {});
  }
};
