"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Matriculas", "deleteAt", {
      allowNull: true,
      field: "delete_at",
      type: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Matriculas", "deleteAt");
  },
};
