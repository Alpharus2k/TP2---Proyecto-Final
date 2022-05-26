'use strict';
const address = require('@ngneat/falso')
const cantAddress = 100;

module.exports = {
  async up (queryInterface, Sequelize) {
    const addressList = [];

    for(let i = 0; i < cantAddress; i++){
     let aux =  address.randAddress();
      addressList.push({peopleId: (i+1),country: aux.country,
                      city: aux.city,county: aux.county,
                      zipCode: aux.zipCode, street: aux.street,
                      number: (i*i+1),floor: (i+2),
                      department: "A",tower: null,note: "Tocar Timbre al lado"})
    }
    await queryInterface.bulkInsert('addresses', addressList, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {}); 
  }
};
