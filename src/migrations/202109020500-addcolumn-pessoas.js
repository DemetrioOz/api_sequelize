"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Pessoas", "deleteAt", {
      allowNull: false,
      field: "delete_at",
      type: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Pessoas", "deleteAt");
  },
};
