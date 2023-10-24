const express = require("express");
const {
  getAll,
  createAcc,
  deleteAcc,
  updateAcc,
} = require("./accounts.controllers");

const router = express.Router();

router.get("/accounts", getAll);

router.post("/accounts", createAcc);

router.delete("/accounts/:id", deleteAcc);

router.put("/accounts/:id", updateAcc);

module.exports = router;
