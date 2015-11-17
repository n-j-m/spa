import component from "./component";

require("./css/main.css");

var app = document.createElement("div");

document.body.appendChild(app);

app.appendChild(component());

document.addEventListener("DOMContentLoaded", () => {
  fetch("/api/todos")
    .then(res => res.json())
    .then(console.log.bind(console));
});