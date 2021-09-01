const { Router } = require("express");
const router = Router();

const PessoaController = require("../controllers/PessoaController");

router.get("/pessoas", PessoaController.pegarTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);

module.exports = router;
