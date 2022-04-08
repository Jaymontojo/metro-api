const express = require("express");
const db = require("../db/knex");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello World").status(200);
  });
  app.get("/companies", async (req, res) => {
    const response = await db.select('*').from('companies')
    res.send(response).status(200);
  });

  return app;
};

module.exports = { setupExpressServer , db};