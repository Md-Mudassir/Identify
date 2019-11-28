const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

//DB Connection
connectDB();
app.get("/", (req, res) => res.send("Working"));

//Middlewares
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/public", express.static("public"));

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/userprofile", require("./routes/api/userprofile"));
app.use("/api/childprofiles", require("./routes/api/childprofiles"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running @ ${PORT}`));

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
