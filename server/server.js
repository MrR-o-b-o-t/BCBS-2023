const bodyParser = require("body-parser");

const loginRoute = require("./routes/login");
const usersRoute = require("./routes/addUser");

const express = require("express");
const app = express();
app.use(bodyParser.json());
const PORT = 5000;

app.use("/login", loginRoute);
app.use("/addUser", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
