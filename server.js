const express = require("express");
const app = express();
app.use(express.static("public"));


  app.get("/", (req, res) => {
        res.render(res, req, "index");
  });

  app.get("/*", (req, res) => {
       res.render(res, req, "404");
  });
