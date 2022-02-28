'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DatosUsuarios', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      rol: {
        type: Sequelize.ENUM('superadmin', 'admin', 'profesional', 'administracion')
      },
      nombre: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      apellidos: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      telefono: {
        type: Sequelize.STRING(45),
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
      },
      UserUuid: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DatosUsuarios');
  }
};