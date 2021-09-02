"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Matriculas",
      [
        {
          status: "confirmado",
          estudante_id: 1,
          turma_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 2,
          turma_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 3,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "confirmado",
          estudante_id: 4,
          turma_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 1,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          status: "cancelado",
          estudante_id: 2,
          turma_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Matriculas", null, {});
  },
};
