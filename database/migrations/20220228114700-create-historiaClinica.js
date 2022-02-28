'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistoriasClinicas', {
      HistoriaUuid: { 
        type: Sequelize.UUID,  
        primaryKey: true,
        references: {
          model: {
            tableName: 'Historias'
          },
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      TenantUuid: { 
        type: Sequelize.UUID,  
        primaryKey: true,
        references: {
          model: {
            tableName: 'Tenants'
          },
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    }, {
      uniqueKeys: {
          Items_unique: {
              fields: ['HistoriaUuid', 'TenantUuid']
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HistoriasClinicas');
  }
};