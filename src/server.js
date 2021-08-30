const express = require("express");
const app = express();

app.use(express.json());

app.get("/teste", (req, res) => {
  res.json({ message: "Take me home" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});

module.exports = app;
