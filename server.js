const express = require("express");
const connectDB = require("./config/db");
const app = express();

//DB Connection
connectDB();
app.get("/", (req, res) => res.send("Working"));

//Middlewares
app.use(express.json({ extended: false }));

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/userprofile", require("./routes/api/userprofile"));
app.use("/api/childprofiles", require("./routes/api/childprofiles"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running @ ${PORT}`));
