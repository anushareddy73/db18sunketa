var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


const connectionString = 'mongodb+srv://anushareddy6:anusha73@cluster0.kxtz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var cherryRouter = require("./routes/cherry");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var addmodsRouter = require("./routes/addmods");
var selectorRouter = require("./routes/selector");
//var cherry = require("./models/cherry");
var resourceRouter = require('./routes/resource');
var cherry = require("./models/cherry");

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await cherry.deleteMany();

  let instance1 = new cherry({
    Cherry_type: "small",
    Weight: 10,
    Cost: 10,
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved");
  });
  let instance2 = new cherry({
    Cherry_type: "red",
    Weight: 20,
    Cost: 100,
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("second object saved");
  });
  let instance3 = new cherry({
    Cherry_type: "round",
    Weight: 30,
    Cost: 200,
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("third object saved");
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

app.use("/", indexRouter);
app.use("/cherry", cherryRouter);
app.use("/users", usersRouter);
app.use("/selector", selectorRouter);
app.use("/addmods", addmodsRouter);
//app.use("/cherry", cherryRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;