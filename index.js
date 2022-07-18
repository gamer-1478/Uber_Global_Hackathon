//packages
require("dotenv").config();
const express = require("express"),
  app = express(),
  ejs = require("ejs"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose");

//files
const { SendError } = require("./services/error"),
  indexRouter = require("./routes/indexRoute");
authRouter = require("./routes/authRoute");

//declerations
const link = `mongodb+srv://techsyndicate:${process.env.MONGO_PASS}@cluster0.lfkkma3.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//routers
app.use("/", indexRouter);
app.use("/", authRouter);

//crash reporting
app.use((err, req, res, next) => {
  SendError(err.stack.toString());
  SendError("The Server has crashed");
  next(err);
});

//Connect mongo db and start server
mongoose
  .connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    SendError("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      SendError(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    SendError(err.stack.toString());
    SendError("The Server has crashed");
    console.log(err);
  });
