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
     await queryInterface.bulkInsert('Users', [{
        uuid: 'b5cd0a70-7de1-11ec-bf16-9b8e8ec74fb7',
        email: 'prueba01@test.com',
        password: '$2b$10$lPwupMbAvujox15Am7JCTe2WwgdQ1yPzs7xQpEOf.tQKYpmOGwcJe',
        activo: 'false',
        remember_token: 'ec1e4311a73bed64a922ced58da3da6e123307ef',
        TenantUuid: 'b5db6250-7de1-11ec-bf16-9b8e8ec74fb7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        uuid: 'ceb5f230-88c8-11ec-84ff-1fbd3ef1230c',
        email: 'prueba03@test.com',
        password: '$2b$10$y88x0PR4lQMfAPMhA.IsIusnEahRtqZTkATZBNkNENBHEd1iT5Vaa',
        activo: 'false',
        remember_token: 'c3ac247129d17279aad8736a20945c32b153f302',
        TenantUuid: 'cec53470-88c8-11ec-84ff-1fbd3ef1230c',
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
