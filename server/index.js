var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/todos", function(req, res) {
  res.setHeader("content-type", "application/json");
  http.get("http://jsonplaceholder.typicode.com/todos", function(resp) {
    resp.pipe(res);
  });
});

module.exports = app;