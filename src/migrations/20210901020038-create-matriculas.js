"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Matriculas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      estudante_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Pessoas",
          key: "id",
        },
      },
      turma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "Turmas",
          key: "id",
        },
      },
      status: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Matriculas");
  },
};
