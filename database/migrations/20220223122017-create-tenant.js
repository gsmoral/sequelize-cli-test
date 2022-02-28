'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tenants', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      razon_social: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      dni: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(256),
      },
      direccion_postal: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      ciudad: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      provincia: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      c_postal: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      pais: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      telefono: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      customer_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      product_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subscription_id: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Tenants');
  }
};