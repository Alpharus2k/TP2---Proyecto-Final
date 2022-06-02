'use strict';
const amount = 100;

module.exports = {
  async up (queryInterface, Sequelize) {
    const list = [];
    
    for(let i = 0; i < amount; i++){
      
      list.push({peopleId: (i+1), 
                countryCode: ('+' + numRandom(3)),
                areaCode: numRandom(4),
                number: numRandom(11),
                type: 'Celular' })
    }
    
    await queryInterface.bulkInsert('phones', list, {});
   
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('phones', null, {});

  }
};
 function  numRandom(num){
  let res = '';
  const bank = "0123456789";
  for (let j = 0; j < num; j++) {
    res += bank.charAt(Math.floor(Math.random() * bank.length));
  }
  return res;
};