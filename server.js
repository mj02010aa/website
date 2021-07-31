const express = require("express");
const app = express();
app.use(express.static("public"));
const path = require("path");

  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

  var bodyParser = require("body-parser");
  app.use(bodyParser.json());

  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      path: req.path
    };
    res.render(
      path.resolve(`${templateDir}${path.sep}${template}`),
      Object.assign(baseData, data)
    );
  };

  app.get("/", (req, res) => {
        res.render(res, req, "index");
  });

  app.get("/*", (req, res) => {
       res.render(res, req, "404");
  });
