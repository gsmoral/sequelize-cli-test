'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Historias', [{
        uuid: '048be9e0-8050-11ec-a483-6fbad3806761',
        num_historia: 2,
        TenantUuid: 'b5db6250-7de1-11ec-bf16-9b8e8ec74fb7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: '63439f60-7ded-11ec-9609-0956a2189bd3',
        num_historia: 1,
        TenantUuid: 'b5db6250-7de1-11ec-bf16-9b8e8ec74fb7',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
         uuid: 'e8ffaeb0-88c8-11ec-84ff-1fbd3ef1230c',
         num_historia: 1,
         TenantUuid: 'cec53470-88c8-11ec-84ff-1fbd3ef1230c',
         createdAt: new Date(),
         updatedAt: new Date()
        }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Historias', null, {});
  }
};
