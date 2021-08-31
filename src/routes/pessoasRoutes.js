const { Router } = require("express");
const router = Router();

const PessoaController = require("../controllers/PessoaController");

router.get("/pessoas", PessoaController.pegarTodasAsPessoas);

module.exports = router;
