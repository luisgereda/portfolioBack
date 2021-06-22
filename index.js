const express = require("express");
const { PORT } = require("./config/const");
const spaces = require("./routers/spaces");
const authRouter = require("./routers/auth");
const app = express();
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.use("/spaces", spaces);
app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
