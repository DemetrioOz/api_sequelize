const express = require("express");
const pessoas = require("./pessoasRoutes");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

module.exports = (app) => {
  app.use(express.json());

  app.use(pessoas, niveis, turmas);

  app.get("/", (req, res) => {
    res.send("olá!");
  });
};
