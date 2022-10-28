let controller = {};

var todos = [
  {
    title: "Tarea 1",
    description: "Una descripción",
    dateTime: "27/10/2022",
    priority: 1,
    status: "Completada",
    color: "gray",
  },
];

controller.listTodos = (req, res) => {
  let view = {};
  view.todos = todos;
  view.completed = todos.filter((item) => item.status === "Completada").length;
  view.pending = todos.filter((item) => item.status == "Pendiente").length;
  view.total = todos.length;

  res.render("home", view);
};

controller.createTodos = (req, res) => {
  todos.push(req.body);

  console.log(todos);

  res.send({
    status: 200,
    message: "Todo Created",
  });
};

module.exports = controller;
