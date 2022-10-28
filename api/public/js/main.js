let addTaskBtn = document.getElementById("addTask");

console.log("hi");
addTaskBtn.addEventListener("click", () => {
  var title = document.getElementById("taskName").value;
  var desc = document.getElementById("taskDesc").value;
  var priority = document.getElementById("taskPriority").value;

  let currentDate = (() => {
    let customDate;
    let date = new Date();

    customDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    console.log(customDate);
    return customDate;
  })();

  let color = "";
  switch (priority) {
    case "1":
      color = "#f44336";
      break;
    case "2":
      color = "#ddbe18";
      break;
    case "3":
      color = "#8bc34a";
      break;
    default:
      color = "gray";
      break;
  }

  let todo = {
    title,
    description: desc,
    priority: priority || 1,
    color,
    dateTime: currentDate,
    status: "Pendiente",
  };

  $.ajax({
    method: "POST",
    url: "/todos/create",
    data: todo,
    success: function (res) {
      window.location.reload();
    },
  });
});
