'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Tenants', [{
        uuid: 'b5db6250-7de1-11ec-bf16-9b8e8ec74fb7',
        razon_social: 'Marta Martinez Mora',
        email: 'prueba01@test.com',
        customer_id: 'cus_L1sjVdzcMkzUAH',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 'cec53470-88c8-11ec-84ff-1fbd3ef1230c',
        razon_social: 'Xisco Perez',
        email: 'prueba03@test.com',
        customer_id: 'cus_L74ygbzktJDi9S',
        createdAt: new Date(),
        updatedAt: new Date()
       }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Tenants', null, {});
  }
};
