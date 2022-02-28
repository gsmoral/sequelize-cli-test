'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OpcionesGlobales', {
      id: { 
        type: Sequelize.INTEGER,  
        autoIncrement: true, 
        primaryKey: true,
      },
      ant_familiares: {
        type: Sequelize.JSON,
        allowNull: true
      },
      ant_personales: {
        type: Sequelize.JSON,
        allowNull: true
      },
      digestivo: {
        type: Sequelize.JSON,
        allowNull: true
      },
      digestivo_sintomatologia: {
        type: Sequelize.JSON,
        allowNull: true
      },
      digestivo_diagnostico: {
        type: Sequelize.JSON,
        allowNull: true
      },
      medicacion: {
        type: Sequelize.JSON,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OpcionesGlobales');
  }
};