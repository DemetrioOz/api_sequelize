const { Router } = require("express");
const router = Router();

const PessoaController = require("../controllers/PessoaController");

router
  .get("/pessoas", PessoaController.pegarTodasAsPessoas)
  .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
  .post("/pessoas", PessoaController.criaPessoa)
  .put("/pessoas/:id", PessoaController.atualizaPessoa)
  .delete("/pessoas/:id", PessoaController.apagaPessoa)
  .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
  .get(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    PessoaController.pegaUmaMatricula
  )
  .post("/pessoas/:estudanteId/matriculas", PessoaController.criaMatricula)
  .put(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    PessoaController.atualizaPessoa
  )
  .delete(
    "/pessoas/:estudanteId/matriculas/:matriculaId",
    PessoaController.apagaMatricula
  )
  .post(
    "/pessoas/:estudanteId/matricula/:matriculaId/restaura",
    PessoaController.restauraMatricula
  );

module.exports = router;
