'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Antropometrias', {
      id: { 
        type: Sequelize.INTEGER,  
        autoIncrement: true, 
        primaryKey: true,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: true
      },
      peso: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      talla: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      imc: {
        type: Sequelize.DECIMAL(3, 1),
        allowNull: true
      },
      per_cintura: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      per_cadera: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      icc: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: true
      },
      per_abdomen: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      per_pecho: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      per_brazo: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      per_brazo_ext: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      per_pierna: {
        type: Sequelize.DECIMAL(4, 1),
        allowNull: true
      },
      m_grasa_porcent: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      m_grasa: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      m_magra: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      m_muscular: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      agua_porcent: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true
      },
      agua: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      m_osea: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      mb: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      n_grasa_visc: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      t_arterial: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      HistoriaUuid: { 
        type: Sequelize.UUID,  
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
        references: {
          model: {
            tableName: 'Tenants'
          },
          key: 'uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Antropometrias');
  }
};