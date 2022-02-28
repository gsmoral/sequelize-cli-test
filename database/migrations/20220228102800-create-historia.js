'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historias', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      profesion: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      hobbies: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      act_fisica: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      v_social: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      entorno_familiar: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      q_compra: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      donde_compra: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      mot_consulta: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      objetivo: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      disp_precontemplacion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disp_contemplacion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disp_preparacion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disp_accion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disp_mantenimiento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      disp_recaida: {
        type: Sequelize.DATE,
        allowNull: true
      },
      motivacion_cambio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      compromiso_cambio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      importancia_cambio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      confianza_cambio: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      expectativas: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      buen_ritmo: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      mal_ritmo: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      otras_dietas: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      mot_intrinseca: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      mot_extrinseca: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      mot_principales: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      p_nacer: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      t_nacer: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      infancia: {
        type: Sequelize.JSON,
        allowNull: true
      },
      p_minimo: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      p_maximo: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      p_habitual: {
        type: Sequelize.DECIMAL(6, 3),
        allowNull: true
      },
      p_involuntaria: {
        type: Sequelize.JSON,
        allowNull: true
      },
      observaciones: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      otros: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      num_historia: { 
        type: Sequelize.INTEGER, 
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
    }, {
      uniqueKeys: {
          Items_unique: {
              fields: ['num_historia', 'TenantUuid']
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Historias');
  }
};