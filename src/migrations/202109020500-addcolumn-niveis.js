"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Niveis", "deleteAt", {
      allowNull: true,
      field: "delete_at",
      type: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Niveis", "deleteAt");
  },
};
