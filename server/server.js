const express = require("express");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());
  
  app.get("/hello", (req, res) => {
    res.send("world").status(200);
  })

  return app;
};

module.exports = { setupExpressServer };