"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Turmas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Pessoas",
          key: "id",
        },
      },
      data_inicio: {
        type: Sequelize.DATEONLY,
      },
      nivel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Niveis",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Turmas");
  },
};
