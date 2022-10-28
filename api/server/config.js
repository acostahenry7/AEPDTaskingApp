const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("../routes");

let required = () => {
  throw new Error(`Configure la variable de entorno PORT`);
};

module.exports = (app) => {
  app.set("port", process.env.PORT || required());

  //Views
  app.set("views", path.join(__dirname, "../views"));

  app.engine(
    ".hbs",
    engine({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layouts"),
      //extname: ".hbs",
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");

  //Midalewares
  app.use(bodyParser.urlencoded({ extended: true }));

  routes(app);

  app.use("/public", express.static(path.join(__dirname, "../public")));

  return app;
};
