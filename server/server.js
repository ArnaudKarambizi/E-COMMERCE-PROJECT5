const express = require("express");
const mongoose = require("mongoose"); //you can use mongo db drive
mongoose.set("useFindAndModify", false); //for put products routes
const usersRoutes = require("./routes");
const path = require("path");
// ────────────────────────────────────────────────────────────────────────────────
//allows us to take requests and get data from the body when we send the post request
// ────────────────────────────────────────────────────────────────────────────────

const bodyParser = require("body-parser");

// ────────────────────────────────────────────────────────────────────────────────
//api/routes
// ────────────────────────────────────────────────────────────────────────────────

const products = require("./routes/products");

// ────────────────────────────────────────────────────────────────────────────────
// initialize express in variable app
// ────────────────────────────────────────────────────────────────────────────────

const app = express();
app.get("/", (req, res) => res.send("hello"));

// ────────────────────────────────────────────────────────────────────────────────
//body parse has a middleware and we pass
// bodyParser.json()
// ────────────────────────────────────────────────────────────────────────────────

app.use(bodyParser.json());
// app.use(logger('dev'));

app.use(
  bodyParser.urlencoded({
    //For contact form info
    extended: true
  })
);
// ────────────────────────────────────────────────────────────────────────────────
//we need a mongo db url you can use a local mongo db database if you want
//DB config
// ────────────────────────────────────────────────────────────────────────────────

// const db = require('./config/keys').mongoURI;
const mongoUrl = require("./config/keys").mongoURI;
// ────────────────────────────────────────────────────────────────────────────────
// connect to mongo db we use mongoose and use pass in the db object
//it is promise once it connects what do we want to do
// ────────────────────────────────────────────────────────────────────────────────

//Set up mongoose connection

mongoose
  .connect(mongoUrl, { useNewUrlParser: true })
  .then(() => console.log("Mongo db connected ...."))
  .catch(err => console.log(err));

// mongoose.Promise = global.Promise;

// ────────────────────────────────────────────────────────────────────────────────
//use routes
//any request that goes to /api/products/* should refer to products variable
//any request that goes to /api/contact/* should refer to contact variable
// ────────────────────────────────────────────────────────────────────────────────

// app.use(express.static(`${__dirname}/client/build`));
// app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});

app.use("/api/users", usersRoutes);

app.use("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});
// ────────────────────────────────────────────────────────────────────────────────
// we need to be able to run our server
//When deployed TO HEROKU OR PORT 5000
// ────────────────────────────────────────────────────────────────────────────────

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

// app to listen to that port
app.listen(port, () => console.log(`server started on port ${port}`));
