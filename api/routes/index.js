const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController.js");

module.exports = (app) => {
  router.get("/", homeController.listTodos);
  router.post("/todos/create", homeController.createTodos);

  app.use(router);
};
