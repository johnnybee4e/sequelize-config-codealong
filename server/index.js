const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { db } = require("./models");

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/api", require("./api"));

db.sync().then(() => console.log("tables created!"));

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
