const express = require("express");
const config = require("./server/config");

const app = config(express());

app.use("/", (req, res) => {
  res.send(`'It's all Working`);
});

app.listen(app.get("port"), () => {
  console.log("Listening on Port ", app.get("port"));
});
