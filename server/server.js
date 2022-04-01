const express = require("express");
const db = require("knex")("../db/knexfile");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World").status(200);
  });

  return app;
};

module.exports = { setupExpressServer };