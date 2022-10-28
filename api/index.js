const express = require("express");
const config = require("./server/config");

const app = config(express());

app.listen(app.get("port"), () => {
  console.log("Listening on Port: ", app.get("port"));
});
