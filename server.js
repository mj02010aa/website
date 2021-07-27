const express = require("express");
const app = express();
app.use(express.static("public"));
const request = require("request");
const db = require("quick.db");
const fs = require("fs");
const url = require("url");
const path = require("path");
  app.use(
    "/css",
    express.static(path.resolve(__dirname + `/src/css/`))
  );
 const templateDir = path.resolve(__dirname + `/src/pages/`);

  app.locals.domain = process.env.PROJECT_DOMAIN;
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
        renderTemplate(res, req, "index.ejs");
  });

const listener = app.listen(process.env.PORT, () => {
  console.log("Port" + listener.address().port);
});
