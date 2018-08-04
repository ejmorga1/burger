var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


/*
orm.select("party_name", "parties");
orm.select("client_name", "clients");
orm.selectWhere("parties", "party_type", "grown-up");
orm.leftJoin(["client_name", "party_name"], "clients", "parties", "id", "client_id");
*/