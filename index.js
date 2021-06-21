const express = require("express");
const { PORT } = require("./config/const");
const spaces = require("./routers/spaces");
const app = express();

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.use("/spaces", spaces);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
