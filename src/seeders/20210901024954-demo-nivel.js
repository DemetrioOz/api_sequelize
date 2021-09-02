"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descr_nivel: "básico",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descr_nivel: "intermediário",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          descr_nivel: "avançado",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Niveis", null, {});
  },
};
