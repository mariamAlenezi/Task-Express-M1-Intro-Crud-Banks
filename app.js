const express = require("express");
const accountsRouter = require("./api/accounts/accounts.routes");
const app = express(); //instance

app.use(express.json());
app.use("/api", accountsRouter);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
