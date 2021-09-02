const { Router } = require("express");
const router = Router();

const PessoaController = require("../controllers/PessoaController");

router.get("/pessoas", PessoaController.pegarTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
router.get("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.pegaUmaMatricula)
router.post("/pessoas/:estudanteId/matriculas", PessoaController.criaMatricula)
router.put("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.atualizaPessoa)
router.delete("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.apagaMatricula)

module.exports = router;
