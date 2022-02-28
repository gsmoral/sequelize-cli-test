'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosClientes', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      historia: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      historia_uuid: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dni: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      nombre: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      apellidos: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      fecha_nacimiento: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      direccion_postal: {
        type: Sequelize.TEXT,
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
      tel_movil: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      tel_fijo: {
        type: Sequelize.TEXT,
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
      },
      TenantUuid: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Tenants'
          },
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DatosClientes');
  }
};