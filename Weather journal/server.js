/* creating empty js object act as endpoint for all routes */
projectData = {};

/* using express to run server and router */

const express = require("express");

/* setup instance of app */

const app = express();

/* Dependencies */
/* configure express to use body-parser and cors to be included in app as Middle-ware */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

/* view engine as html to render page with module ejs*/
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

/* spin up the server */

const port = 3000;

app.listen(port, () => {
  console.log(`server is running on localhost: ${port}`);
});

/* get request used to rendering page */
app.get("/", (req, res) => {
  res.render("../website/index.html");
});
let i = 1;
let key = `record_weather_${i}`;
/* create post route to receive body of message request from client-side and save it into appData endpoint */
app.post("/add", (req, res) => {
  console.log(req);
  projectData[key] = {
    date: req.body.date,
    temp: req.body.temp,
    feelings: req.body.feelings,
  };
  res.send(projectData[key]);
});

/* create get route to send data of app endpoint to client-side used to update dynamically UI */
app.get("/all", (req, res) => {
  // console.log(projectData); ---> All Records
  /* send to client-side current record only */
  res.send(projectData[key]);
  i++;
  key = `record_weather_${i}`;
});
