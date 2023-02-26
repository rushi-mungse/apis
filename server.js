const express = require("express");
const app = express();
const routers = require("./routers");
const { PORT } = require("./config");

app.use(express.json());
app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`Server lintening on port ${PORT}`);
});
