"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pessoas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
      },
      email: {
        type: Sequelize.STRING,
      },
      role: {
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
    await queryInterface.dropTable("Pessoas");
  },
};