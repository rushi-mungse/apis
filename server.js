const express = require("express");
const app = express();
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`Server lintening on port ${PORT}`);
});
