const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Working"));
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running @ ${PORT}`));
